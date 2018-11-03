var friendsData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        friendsData.push(req);
        /* let bestCompat = 100;
        let bestIndex = 0;
        for (let i = 0; i < friendsData.length-1; i++){
            let compat = 0;
            for (let j = 0; j < 10; j++){
                compat = Math.abs(friendsData[i].scores[j]-friendsData[friendsData.length-1].scores[j]);
            }
            if (compat < bestCompat){
                bestCompat = compat;
                bestIndex = i;
            }
        }
        res.json(friendsData[bestIndex]); */
        res.json(friendsData); 
    });
}