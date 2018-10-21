require("dotenv").config();

//initializes 4 npm packages
var request = require("request");
var moment = require("moment");
var dotenv = require("dotenv");
var Spotify = require('node-spotify-api');

//create variables for user inputs through node
var search = process.argv[2];
search = ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"];
var term = process.argv.slice(3).join(" ");



if (search[0]) {
    //console.log("hey this works and your term is: " + term);

    request("https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp", function (error, response, body) {


        if (!error && response.statusCode === 200) {

            //loop through response and console log name, city, and date
            //not sure why this isn't working, I am getting undefined even though I believe I am using the right .notation
            for (var i = 0; i < response.length; i++);
            console.log("The next show is at " + JSON.parse(body)[i].venue.name) + " in " +
                JSON.parse(body)[i].venue.city + " on " + moment(JSON.parse(body)[i].datetime).format("MM/DD/YYYY") + ".";



        }
    });




};


 if (search[1]) {
    var spotify = new Spotify({
        id: ed51979f713e498c882c558771eee10e,
        secret: a375c068135a48e0b4abf2c3590e9ccc
    });

    spotify
        .search({ type: 'track', query: term })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
};

 if (search[2]) {
    //request to omdbapi api
    request("http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy"), function (error, response, body){

        if (!error && response.statusCode === 200) {
        
            console.log(JSON.parse(body).title);
        
        }

    };

}
 else if (search[2] === "") {
    console.log("If you haven't watched \"Mr. Nobody\", then you should: http://www.imdb.com/title/tt0485947/")



};


 if (search[3]) {

}


