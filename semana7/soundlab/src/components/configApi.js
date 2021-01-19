export const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';

export const deletePlaylistUrl = (id) => {return `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`}
export const getTracksUrl = (id) => {return `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`}
export const deleteTracksUrl = (id,playlist) => {return `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist}/tracks/${id}`}


export const headerAPI = {
  headers: {
    Authorization: 'Yuri-Pinheiro-EPPS'
  }
}