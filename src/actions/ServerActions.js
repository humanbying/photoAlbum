import AppDispatcher from '../AppDispatcher';
import Constants from '../Constants';

console.log("ServerActions")
const ServerActions = {

  receiveAlbum(album) {
    AppDispatcher.dispatch({
      type: Constants.RECEIVE_ALBUM,
      album
    })
  },

  deleteAlbum(id) {
    AppDispatcher.dispatch({
      type: Constants.DELETE_ALBUM,
      id
    })
  },

  editAlbum(album) {
    AppDispatcher.dispatch({
      type: Constants.EDIT_ALBUM,
      album
    })
  }
};

export default ServerActions;
