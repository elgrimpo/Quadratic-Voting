//React Imports
import { AbilityBuilder } from "@casl/ability";

export default function defineRulesFor(user) {
  const { rules, can } = new AbilityBuilder();

  can("read", "Initiative"); //not used currently
  can( "create", "Initiative", {
    permissions: {
      $elemMatch: { role: {$in: ["member", "admin"]}, userId: user._id },

    }
  })

  can("manage", "Initiative", {
    permissions: {
      $elemMatch: { role: "admin", userId: user._id },
    },
    
  });
  
  can("vote", "Community", {
    permissions: {
        $elemMatch: { role: {$in: ["member", "admin"]}, userId: user._id },
      },
  })

  can("manage", "Group", {
    permissions: {
        $elemMatch: { role: "admin", userId: user._id },
      },
  })


  return rules;
}

//
