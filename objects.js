var playlist = {
  artistName: "songTitle",
  Miyuki:"Billy",
};



function updatePlaylist (playlis, Name, Title){
  playlist[Name] = 'Title'
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}