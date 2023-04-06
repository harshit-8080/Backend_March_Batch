function download(song, callback) {
  console.log("song downloading started >>>>>");

  setTimeout(() => {
    console.log("song downloading finished >>> ", song + ".mp3");
    callback(song + ".mp3");
  }, 2000);
}

download("excuses", function uploadSongToDrive(songFile) {
  console.log("uploading song to drive started >>>>");

  setTimeout(() => {
    console.log("Song upload url >>> www.drive.google.com/" + songFile);
  }, 3000);
});

////    //////////////////////////////////////////////////////////////////////////
// callback hell

// promise

// promise hell

//  async await
