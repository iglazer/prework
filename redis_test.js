	var redis = require("redis"), client = redis.createClient();

    client.on("error", function (err) {
        console.log("Error " + err);
    });
    
	var jsonBlob = "{" +
			"imageID hash of file:{"+
			"filename:myfile.png}}";
	client.set("imageID1", jsonBlob, redis.print);
	client.get("imageID1", function (err, res) {
		console.log("straight string response: " +res);
		
		var backToJSON = JSON.parse(res);
		console.log("JSON parsed: " + backToJSON);

		});
	client.quit();
	
