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


  //TODO: Include subscriptions and Message in response
  updateSubscription: function (user, community) {
    const isSubscribed = this.checkSubscription(user, community);
    if (isSubscribed) {
      const newSubscriptions = user.subscriptions.filter(
        (subscription) => subscription.communityId !== community._id
      );
      const newUser = { ...user, subscriptions: newSubscriptions };
      return newUser;
    } else {
      const newSubscriptions = [
        { communityId: community._id },
        ...user.subscriptions,
      ];
      const newUser = { ...user, subscriptions: newSubscriptions };
      return newUser;
    }
  },
};
