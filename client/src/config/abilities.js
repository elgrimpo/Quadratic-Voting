//React Imports
import { AbilityBuilder } from "@casl/ability";

export default function defineRulesFor(user) {
  const { rules, can } = new AbilityBuilder();

  can("read", "Initiative"); //not used currently
  can( "create", "Initiative", {
    members: {
      $elemMatch: { role: {$in: ["member", "admin", "owner"]}, user_id: user._id },

    }
  })

  can("manage", "Initiative", {
    members: {
      $elemMatch: { role: {$in: ["admin", "owner"]}, user_id: user._id },
    },
    
  });
  
  can("vote", "Community", {
    members: {
        $elemMatch: { role: {$in: ["member", "admin", "owner"]}, user_id: user._id },
      },
  })

  can("manage", "Group", {
    members: {
        $elemMatch: { role: {$in: ["admin", "owner"]}, user_id: user._id },
      },
  })


  return rules;
}

//
