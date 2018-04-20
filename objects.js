var playlist = {
  artistName: "songTitle",
};



function updatePlaylist (playlis, Name, Title){
  playlist[Name] = 'Title'
}

function removeFromPlaylist(playlist, artistName) {
  return delete playlist.artistName;
}