import axios from 'axios';
import RouteActions from './actions/RouteActions';
import UserActions from './actions/UserActions';
import ServerActions from './actions/ServerActions';

console.log('API')
const API = {
  createAlbum(album) {
    axios.post('/api/albums', album)
    .then(res =>  res.data)
    .then(ServerActions.receiveAlbum)
    .catch(console.error);
  },

  deleteAlbum(id) {
    axios.delete(`/api/albums/${id}`)
    .then(ServerActions.deleteAlbum(id))
    .catch(console.error);
  },

  editAlbum(id) {
    axios.put(`/api/albums/${id}`)
    .then(res => {
      ServerActions.editAlbum(res.data);
    }
  )
    // .then(ServerActions.editAlbum)
    .catch(console.error);
  }

}

export default API;
