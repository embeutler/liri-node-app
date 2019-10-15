// consert info
var queryURL = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=[key]";

console.log(queryURL);

{
    axios.get(queryURL).then(
        function(bandResponse) {
            console.log("Venue: " + bandResponse.data[0].venue.name);
            console.log("City: " + bandResponse.data[0].venue.city);
            console.log(moment(bandResponse.data[0].datetime).format("MM/DD/YYYY"));
        }
    );
};
// spotify song info 
var spotify = new Spotify({
    id: spotifyKeyInfo["spotify"].id,
    secret: spotifyKeyInfo["spotify"].secret
});

{
    spotify.request('https://api.spotify.com/v1/search?q=track:' + songName + '&type=track&limit=10', function(error, songResponse) {
        if (error) {
            return console.log(error);
        }
        console.log("Artist: " + songResponse.tracks.items[0].artists[0].name);
        console.log("Song: " + songResponse.tracks.items[0].name);
        console.log("URL: " + songResponse.tracks.items[0].preview_url);
        console.log("Album: " + songResponse.tracks.items[0].album.name);
    });
};


// movie info 
var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=[key]";

{
    axios.get(queryURL).then(
        function(movieResponse) {
            console.log("Title: " + movieResponse.data.Title);
            console.log("Year: " + movieResponse.data.Year);
            console.log("Rated: " + movieResponse.data.imdbRating);
            console.log("Country: " + movieResponse.data.Country);
            console.log("Language: " + movieResponse.data.Language);
            console.log("Plot: " + movieResponse.data.Plot);
            console.log("Actors: " + movieResponse.data.Actors);
            console.log("Rotten Tomatoes: " + movieResponse.data.Ratings[1].Value);
        }
    );
};

//does what it says 
function doWhatInfo() {

    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        var output = data.split(",");
        for (var i = 0; i < output.length; i++) {
            console.log(output[i]);
        }
    });
};