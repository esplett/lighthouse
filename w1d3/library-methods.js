var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },

  // adds a track to the library
  addTrack: function (name, artist, album) {
                      var trackId = this.uid();
                      this.tracks[trackId] = {
                        id: trackId,
                        name: name,
                        artist: artist,
                        album: album
                      }
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    },
                // adds a playlist to the library
              addPlaylist: function (name) {
                    var playlistId = this.uid();
                    var trackId = this.uid();
                    this.playlists[playlistId] = {
                      id: playlistId,
                      name: name,
                      tracks: trackId,
                      }
          },


  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function() {
                    for(var pX in this.playlists){
                     var currentPlayList = this.playlists[pX]
                      console.log(currentPlayList.id + ":" + " " + currentPlayList.name + " - " + currentPlayList.tracks.length);
                    }


              },
  // generates a unique id
  // (use this for addTrack and addPlaylist)
  uid: function() {
                    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                    }
}



library.printPlaylists()


library.addTrack("Coding is Great", "Coder Cameron", "Coding for Kids");
console.log(library)

library.addPlaylist("p03")

//Tips instead of referring to library inside methods use this.tracks
//outside of library object invoke functions as library.printTracks()


