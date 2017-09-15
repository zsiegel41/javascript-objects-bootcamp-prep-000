var playlist = {};

function updatePlaylist(playlist, updatePlaylist) {
  playlist.artistName = "";
  playlist.songTitle = "";
  return Object.assign({}, playlist, updatePlaylist)
}

function removeFromPlaylist(playlist, removeFromPlaylist) {
  delete playlist.artistName;
  return Object.assign({}, playlist, removeFromPlaylist)
}
