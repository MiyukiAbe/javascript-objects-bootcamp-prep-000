var playlist = {
  artistName: "songTitle",
  Miyuki:"Billy",
};



function updatePlaylist (playlist, Name, Title){
  playlist[Name] = 'Title'
}

function removeFromPlaylist (obj, key) {
  return delete obj.key;
}