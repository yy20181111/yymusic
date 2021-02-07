const getters = { 
  newSongList(state) {
    if(state.newTitle.tracks) {
      return state.newTitle.tracks.slice(0, 10)
    }
  },
  secSongList(state) {
    if(state.secTitle.tracks) {
      return state.secTitle.tracks.slice(0, 10)
    }
  },
  thirdSongList(state) {
    if(state.thirdTitle.tracks) {
      return state.thirdTitle.tracks.slice(0, 10)
    }
  },
  albumList(state) {
    let arr = state.newAlbumList
    const newAlbum = new Array()
    let temp = 0
    while(temp < arr.length) {
      newAlbum.push(arr.slice(temp, temp +=5 ))
    }
    return newAlbum
  }

}

export default getters