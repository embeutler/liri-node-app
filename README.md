# LIRI Bot

### Overview

 LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## liri.js can take and do the following commands:

1.`concert-this` 
  `node liri.js concert-this <artist/band name here>`
   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
     * Name of the venue
     * Venue location
     * Date of the Event (use moment to format this as "MM/DD/YYYY")

2.`spotify-this-song`
   `node liri.js spotify-this-song '<song name here>'`
   * This will show the following information about the song in your terminal/bash window
     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from
   * If no song is provided then your program will default to "The Sign" by Ace of Base.

 
3.`movie-this` 
  `node liri.js movie-this '<movie name here>'`
   * This will output the following information to your terminal/bash window:
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
  
 
4.`do-what-it-says` 
  `node liri.js do-what-it-says`
   * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     * Edit the text in random.txt to test out the feature for movie-this and concert-this.


