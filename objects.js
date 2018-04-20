var playlist = {
  artistName: "songTitle",
};



function updatePlaylist (playlis, Name, Title){
  playlist[Name] = 'Title'
}

function removeFromPlaylist(playlist, Name, Title) {
  delete playlist.Name;
}