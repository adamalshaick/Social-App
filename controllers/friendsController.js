const mongoose = require("mongoose");

// Profile model
const Profile = require("../models/Profile");

module.exports = {
  createRequest: (req, res) => {
    Profile.findOne({ user: req.params.id })
      .then(profile => {
        profile.friendRequests.unshift(req.user.id);
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(400).json(err));
  },
  acceptRequest: (req, res) => {
    Promise.all([
      Profile.findOne({ user: req.params.id }),
      Profile.findOne({ user: req.user.id })
    ])
      .then(results => {
        const firstProfile = results[0];
        const secondProfile = results[1];

        // Check to see if request exists
        if (
          secondProfile.friendRequests.filter(
            request => request.toString() === req.params.id
          ).length === 0
        ) {
          res.status(404).json({ requestnotexists: "Request doesn't exist" });
        } else {
          firstProfile.friends.unshift(req.user.id),
            secondProfile.friends.unshift(req.params.id);

          // Get remove index
          const removeIndex = secondProfile.friendRequests
            .map(request => request.toString())
            .indexOf(req.params.id);

          //Splice request out of array and save profiles
          secondProfile.friendRequests.splice(removeIndex, 1);
          Promise.all([firstProfile.save(), secondProfile.save()]).then(
            results => {
              res.json(results);
            }
          );
        }
      })
      .catch(err => {
        res.json(err);
      });
  },
  declineRequest: (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.friendRequests
          .map(request => request.toString())
          .indexOf(req.params.id);

        //Splice request out of array
        profile.friendRequests.splice(removeIndex, 1);
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(400).json(err));
  }
};
