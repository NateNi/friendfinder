var friendsData = require("../data/friends");

module.exports = function(app) {
    app.get("/app/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/app/friends", function(req, res) {
        friendsData.push(req.body);
    });
}