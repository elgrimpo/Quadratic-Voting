export const userActions = {
    
  checkSubscription: function (user, community) {
    console.log("function called checkSubscription");
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
    console.log("function called");
    const isSubscribed = this.checkSubscription(user, community);
    if (isSubscribed) {
      const newSubscriptions = user.subscriptions.filter(
        (subscription) => subscription.communityId !== community._id
      );
      const newUser = { ...user, subscriptions: newSubscriptions };
      console.log(`isSubscribed`);
      console.log(newUser);
      return newUser;
    } else {
      const newSubscriptions = [
        { communityId: community._id },
        ...user.subscriptions,
      ];
      const newUser = { ...user, subscriptions: newSubscriptions };
      console.log(`!isSubscribed`);
      console.log(newUser);
      return newUser;
    }
  },
};
