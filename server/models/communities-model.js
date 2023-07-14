import mongoose from 'mongoose'


const communitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    logo_url: String,
    banner_url: {
        type: String,
        default: "https://images.unsplash.com/photo-1624359136353-f60129a367b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
    },
    headline: String,
    description: String,
    members: [{
        user_id: String,
        role: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    } 

})

const CommunitySchema = mongoose.model('CommunitySchema', communitySchema);

export default CommunitySchema

//TODO: REMOVE
/*
db.communityschemas.update(
    { "members.userId": { $exists: true } }, 
    [
      {
        $set: { 
          "members": {
            $map: {
              input: "$members",
              as: "member",
              in: {
                user_id: "$$member.userId",
                role: "$$member.role"
              }  
            }
          }
        }
      },
      { 
        $unset: { "members.$.userId": "" } 
      }
    ],
    { multi: true }
  )

  db.initiativeschemas.update(
    { "permissions.userId": { $exists: true } },
    [{
      $set: {
        permissions: {
          $map: {
            input: "$permissions",
            in: {
              user_id: "$$this.userId",
              role: "$$this.role"
            }
          }
        }
      }
    }],
    { multi: true }
  )

// rename permissions to members
db.initiativeschemas.updateMany(
    {},
      {
        $rename: { "permissions": "members" }
      }
  )

// add new array entry
db.initiativeschemas.updateMany({}, 
      {
        $push: {
          members: {
            user_id: "new", 
            role: "owner"
          }
        }
      }
      )

// change entry userId with ownerId
db.initiativeschemas.aggregate([
    {
      $match: {
        "members.user_id": "new"
      }
    },
    {
      $addFields: {
        "members": {
          $map: {
            input: "$members",
            as: "member",
            in: {
              $mergeObjects: [
                "$$member",
                {
                  $cond: [
                    {$eq: ["$$member.user_id", "new"]},
                    {user_id: "$ownerId"},
                    {}
                  ]
                }
              ]
            }
          }
        }
      }
    },
    {
      $out: "initiativeschemas"
    }
  ])

  // Remove ownerId from collection
  db.groupschemas.getCollection().updateSchema(
    {$unset: {ownerId: ""}}
  )
  */