E2E Aggregator on Groups

[
    {
      $match: {
        _id: ObjectId("64b08ae954639d1960cfed66"),
      },
    },
    {
      $lookup: {
        from: "initiativeschemas",
        localField: "_id",
        foreignField: "groupId",
        as: "initiatives",
      },
    },
    {
      $unwind: {
        path: "$initiatives",
      },
    },
    {
      $unwind: {
        path: "$initiatives.receivedVotes",
      },
    },
    {
      $match:
        {
          "initiatives.receivedVotes.userId":
            ObjectId("635f568525b17edeeca853e5"),
        },
    },
    {
      $unwind: {
        path: "$initiatives.receivedVotes",
      },
    },
    {
      $project: {
        _id: 1,
        "initiatives.receivedVotes.userId": 1,
        "initiatives.receivedVotes.votes": {
          $pow: [
            "$initiatives.receivedVotes.votes",
            2,
          ],
        },
      },
    },
    {
      $group: {
        _id: "$initiatives.receivedVotes.userId",
        groupId: {
          $first: "$_id",
        },
        totalVotes: {
          $sum: "$initiatives.receivedVotes.votes",
        },
      },
    },
    {
      $lookup: {
        from: "groupschemas",
        localField: "groupId",
        foreignField: "_id",
        as: "group",
      },
    },
    {
      $unwind: {
        path: "$group",
      },
    },
    {
      $set: {
        "group.members": {
          $map: {
            input: "$group.members",
            in: {
              $cond: {
                if: {
                  $eq: ["$$this.userId", "$_id"],
                },
                then: {
                  userId: "$$this.userId",
                  role: "$$this.role",
                  remainingVotes: "$totalVotes",
                },
                else: {
                  userId: "$$this.userId",
                  role: "$$this.role",
                  remainingVotes:
                    "$$this.remainingVotes",
                },
              },
            },
          },
        },
      },
    },
  ]


Aggregator on Initiatives only

[
    {
      $match: {
        groupId: ObjectId(
          "64b08ae954639d1960cfed66"
        ),
        receivedVotes: {
          $elemMatch: {
            userId: ObjectId(
              "635f568525b17edeeca853e5"
            ),
          },
        },
      },
    },
    {
      $unwind: {
        path: "$receivedVotes",
      },
    },
    {
      $match: {
        "receivedVotes.userId": ObjectId(
          "635f568525b17edeeca853e5"
        ),
      },
    },
    {
      $project: {
        _id: 1,
        "receivedVotes.userId": 1,
        "receivedVotes.votes": {
          $pow: ["$receivedVotes.votes", 2],
        },
      },
    },
    {
      $group: {
        _id: "$receivedVotes.userId",
        groupId: {
          $first: "$_id",
        },
        totalVotes: {
          $sum: "$receivedVotes.votes",
        },
      },
    },
  ]