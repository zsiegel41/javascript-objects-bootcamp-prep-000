var playlist = {
  playlist,
  artistName,
  songTitle
};

function updatePlaylist(playlist, updatePlaylist) {
  return Object.assign({}, playlist, updatePlaylist)
}

function removeFromPlaylist(playlist, removeFromPlaylist) {
  delete playlist.artistName;
  return Object.assign({}, playlist, removeFromPlaylist)
}
