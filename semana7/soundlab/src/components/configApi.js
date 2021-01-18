export const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';

export const deletePlaylistUrl = (id) => {return `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`}
export const getTracksUrl = (id) => {return `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`}


export const headerAPI = {
  headers: {
    Authorization: 'Yuri-Pinheiro-EPPS'
  }
}