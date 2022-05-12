import { store } from "../app/store";
import { fetchCommunities } from "../reducers/communitiesSlice";
import { fetchGroups } from "../reducers/groupsSlice";
import { fetchInitiatives } from "../reducers/initiativesSlice";
import { fetchCurrentUser } from "../reducers/usersSlice";

export const userActions = {
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
      message = "Successfully unsubscribed";
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

  updateStore: async function (communities_ids) { 
    await store.dispatch(fetchCurrentUser());
    
    await store.dispatch(fetchCommunities(communities_ids));  
    await store.dispatch(fetchGroups(communities_ids));
    await store.dispatch(fetchInitiatives(communities_ids));
  },
};
