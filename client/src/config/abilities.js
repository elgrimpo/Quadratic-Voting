//React Imports
import { AbilityBuilder } from "@casl/ability";

export default function defineRulesFor(user) {
  const { rules, can } = new AbilityBuilder();

  can("read", "Initiative"); //not used currently
  can( "create", "initiative", {
    permissions: {
      $elemMatch: { role: "member" || "admin", userId: user._id },
    }
  })
  can("manage", "Initiative", {
    permissions: {
      $elemMatch: { role: "admin", userId: user._id },
    },
  });
  can("vote", "Community", {
    permissions: {
        $elemMatch: { role: "member" || "admin", userId: user._id },
      },
  })

  can("manage", "Group", {
    permissions: {
        $elemMatch: { role: "member" || "admin", userId: user._id },
      },
  })

  return rules;
}

//
