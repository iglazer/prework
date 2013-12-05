	var redis = require("redis"), client = redis.createClient();

    client.on("error", function (err) {
        console.log("Error " + err);
    });
    
	var jsonBlob = "foo";
	client.set("imageID1", jsonBlob, redis.print);
	client.get("imageID1", function (err, res) {
		console.log(res);
		});
	client.quit();
	
