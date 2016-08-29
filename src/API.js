import axios from 'axios';
import RouteActions from './actions/RouteActions';
import UserActions from './actions/UserActions';
import ServerActions from './actions/ServerActions';

console.log('API')
const API = {
  //
  //
  // //// get profile data only///////
  // getProfile() {
  //   axios.get(`/api/users/profile`)
  //   .then(res => res.data)
  //   .then(ServerActions.receiveProfile)
  //   .catch(console.error);
  // },
  //
  // editProfile(updatedUser) {
  //   axios.put(`/api/users/profile`, updatedUser)
  //   .then(() => {
  //     UserActions.getProfile();
  //     RouteActions.route('/profile')
  //   })
  //   .catch(console.error);
  // },
  // //
  // // getProfiles() {
  // //   axios.get(`/api/users`)
  // //   .then(res => res.data)
  // //   .then(ServerActions.receiveProfiles)
  // //   .catch(console.error);
  // // },
  //
  // getAlbum(id) {
  //   axios.get(`/api/users/${id}`)
  //   .then(res => {
  //     // console.log('getAlbum:', res)
  //   })
  //   .then(ServerActions.receiveAlbum)
  //   .catch(console.error)
  // },
  //
  // // createAlbum(album) {
  // //   console.log('albumAPI:', album)
  // //   axios.post(`/api/albums`, album)
  // //   .then(res => {
  // //     console.log('sending obj data to SA:', res)
  // //   })
  // //   .then(ServerActions.receiveAlbum)
  // //   .catch(console.error);
  // // }

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
