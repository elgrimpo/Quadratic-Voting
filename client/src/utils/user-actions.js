import { store } from "../app/store";
import { fetchCommunities } from "../reducers/communitiesSlice";
import { fetchGroups, updateGroup } from "../reducers/groupsSlice";
import { fetchInitiatives, updateInitiative } from "../reducers/initiativesSlice";
import { fetchCurrentUser, fetchUsers } from "../reducers/usersSlice";

export const data = {
  findById: function (category, id) {
    return category.find((item) => item._id === id);
  },

  initializeData: async function () {
    //const state = store.getState()

    await store.dispatch(fetchCurrentUser()); //TODO: Fetch only users that are admins
    await store.dispatch(fetchUsers());

    const subscriptions = store
      .getState()
      .users.currentUser.subscriptions.map((subscription) => {
        return subscription.communityId;
      });
    await store.dispatch(fetchCommunities(subscriptions));
    await store.dispatch(fetchGroups(subscriptions));
    await store.dispatch(fetchInitiatives(subscriptions));
  },

  updateStore: async function (communities_ids) {
    await store.dispatch(fetchCurrentUser());
    await store.dispatch(fetchCommunities(communities_ids));
    await store.dispatch(fetchGroups(communities_ids));
    await store.dispatch(fetchInitiatives(communities_ids));
  },
};

export const subscriptions = {
  checkSubscription: function (user, community) {
    const index = user.subscriptions?.findIndex(
      (subscription) => subscription?.communityId === community?._id
    );
    if (index === -1) {
      return false;
    } else {
      return true;
    }
  },

  updateSubscription: function (user, community) {
    const isSubscribed = this.checkSubscription(user, community);
    let newUser;
    let newSubscriptions;
    let message;
    if (isSubscribed) {
      newSubscriptions = user.subscriptions.filter(
        (subscription) => subscription.communityId !== community._id
      );
      message = "Successfully unsubscribed";
    } else {
      newSubscriptions = [
        { communityId: community._id },
        ...user.subscriptions,
      ];
      message = "Successfully subscribed";
    }
    const subscriptionArray = newSubscriptions.map((subscription) => {
      return subscription.communityId;
    });
    newUser = { ...user, subscriptions: newSubscriptions };
    return {
      newUser: newUser,
      newSubscriptions: subscriptionArray,
      message: message,
    };
  },

  checkMembership: function (user, community) {
    const index = community?.permissions?.findIndex(
      (permission) => permission?.userId === user?._id
    );
    if (index === -1) {
      return false;
    } else {
      return true;
    }
  },
};

export const voting = {
  calcUserInitiativeVotes: function (user, initiative) {
    if (user && initiative) {
      const InitiativeIndex = initiative.receivedVotes.findIndex(
        (vote) => vote.userId === user._id
      );
      if (InitiativeIndex === -1) {
        return 0;
      } else {
        return initiative.receivedVotes[InitiativeIndex].votes;
      }
    }
  },
  calcGroupRemainingVotes: function (user, group) {
    const groupIndex = group?.remainingVotes.findIndex(
      (vote) => vote.userId === user._id
    );
    if (groupIndex === -1) {
      return group?.totalVotes;
    } else {
      return group?.remainingVotes[groupIndex].votes;
    }
  },

  quadraticVote: function (user, targetInitiative, initiatives, number) {
    const userVotes = initiatives.map((initiative) => {
      let index = initiative?.receivedVotes.findIndex(
        (vote) => vote.userId === user._id
      ); // identifies index of initiative vote record for current user
      if (index !== -1) {
        if (initiative._id === targetInitiative._id) {
          const newCount = initiative.receivedVotes[index].votes + number;
          return newCount; // update selected initiative with +1 or -1
        } else {
          return initiative.receivedVotes[index]?.votes; // return other votes for initiatives within the same group
        }
      } else {
        return 0;
      }
    });
    const usedVotes = userVotes.reduce(
      (partialSum, a) => partialSum + Math.pow(a, 2),
      0
    ) // Adds all group Initiatives votes^2 (from current user)
    return usedVotes
  },

  updateInitiativeVote: function (user, initiative, number) {
    const initiativeIndex = initiative?.receivedVotes.findIndex(
      (vote) => vote.userId === user._id
    );
    
    let newReceivedVotes;
    if (initiativeIndex === -1) {
      // create new entry
      newReceivedVotes = [
        { userId: user._id, votes: number },
        ...initiative.receivedVotes,
      ];
    } else {
      // update existing entry
      const newVote = initiative.receivedVotes[initiativeIndex].votes + number;
      newReceivedVotes = initiative.receivedVotes.map((obj, index) => {
        if (index === initiativeIndex) {
          return { ...obj, votes: newVote };
        } else {
          return obj;
        }
      });
      newReceivedVotes[initiativeIndex].votes = newVote;
    }
    store.dispatch(
      updateInitiative({ _id: initiative._id, receivedVotes: newReceivedVotes })
    );
  },

  updateGroupRemainingVote: function (user, group, number) {
    const groupIndex = group?.remainingVotes.findIndex(
      (vote) => vote.userId === user._id
    );
    const newVote = group.totalVotes - number;
    let newRemainingVotes;
    if (groupIndex === -1) {
      // create new entry
      newRemainingVotes = [
        { userId: user._id, votes: newVote },
        ...group.remainingVotes,
      ];
    } else {
      // update existing entry
      newRemainingVotes = group.remainingVotes.map((obj, index) => {
        if (index === groupIndex) {
          return { ...obj, votes: newVote };
        } else {
          return obj;
        }
      });
      newRemainingVotes[groupIndex].votes = newVote;
    }
    store.dispatch(
      updateGroup({ _id: group._id, remainingVotes: newRemainingVotes })
    );
  },
};

export const channels = {
  checkSubscription: function (user, channel) {
    const index = user.channelSubscriptions?.findIndex(
      (subscription) => subscription?.channelId === channel?.cid
    );
    if (index === -1) {
      return false;
    } else {
      return true;
    }
  },

  updateSubscription: function (user, channel) {
    const isSubscribed = this.checkSubscription(user, channel);
    let newUser;
    let newSubscriptions;
    let message;
    if (isSubscribed) {
      newSubscriptions = user.channelSubscriptions.filter(
        (subscription) => subscription.channelId !== channel.cid
      );
      message = "Successfully unsubscribed";
    } else {
      newSubscriptions = [
        { channelId: channel.cid },
        ...user.channelSubscriptions,
      ];
      message = "Successfully subscribed";
    }
    const subscriptionArray = newSubscriptions.map((subscription) => {
      return subscription.channelId;
    });
    newUser = { ...user, channelSubscriptions: newSubscriptions };
    return {
      newUser: newUser,
      newSubscriptions: subscriptionArray,
      message: message,
    };
  },


}


