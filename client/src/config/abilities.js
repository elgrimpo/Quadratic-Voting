//React Imports
import { defineAbility, AbilityBuilder } from "@casl/ability";

const checkRole = (user, ObjectId) => {
  const index = user.permissions.findIndex(
    (permission) => permission.id === ObjectId
  );
  if (index === -1) {
    return null;
  } else {
    return user.permissions[index].role;
  }
};

export default function defineRulesFor(user) {
  const { rules, can } = new AbilityBuilder();

  can("read", "Initiative"); //not used currently
  can("manage", "Initiative", {
    permissions: {
      $elemMatch: { role: "admin", userID: user._id },
    },
  });
  can("vote", "Community", {
    permissions: {
        $elemMatch: { role: "member", userID: user._id },
      },
  })

  return rules;
}

//
