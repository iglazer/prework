	var redis = require("redis"), client = redis.createClient();

    client.on("error", function (err) {
        console.log("Error " + err);
    });
    
	jsonBlob = "{
	"imageID hash of file":{
		"filename":"myfile.png",
		"locType":"local|blobStore",
		"name":"pretty name",
		"desc":"pretty desc",
		"exif":{
			"EXIF data":"blah"
		}
	}
";
	client.set("imageID1", jsonBlob, redis.print);
	client.quit();
	
