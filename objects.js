var playlist = {
  artistName: songTitle
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = "Phil Ochs";
  playlist.songTitle = "Here's to the State of Mississippi"
  return Object.assign({}, playlist, updatePlaylist)
}

function removeFromPlaylist(playlist, removeFromPlaylist) {
  playlist.artistName = "Kanye";
  playlist.songTitle = "Gold Digger";
  return Object.assign({}, playlist, removeFromPlaylist)
}
