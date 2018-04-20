var playlist = {
  artistName: "songTitle",
  Miyuki:"Billy",
};



function updatePlaylist (playlist, Name, Title){
  playlist[Name] = 'Title'
}

function removeFromPlaylist (playlist, artistName) {
  return delete playlist.artistName;
}