import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import UserActions from '../actions/UserActions';
import Constants from '../Constants';

let _album = null;

let _albums = [];
console.log('AlbumStore')

class AlbumStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case Constants.RECEIVE_ALBUM:
          _album = action.album;
          _albums.push(action.album);
          this.emit('CHANGE');
          break;
        case Constants.REMOVE_PROFILE:
          _album = null;
          this.emit('CHANGE');
          break;
        case Constants.DELETE_ALBUM:
          var { id } = action;
          _albums = _albums.filter(i => i._id !== id);
          this.emit("CHANGE");
          break;
        case Constants.EDIT_ALBUM:
          _albums = action.album;
          this.emit('CHANGE');
          break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  get() {
    return _album;
  }

  getAll() {
    return _albums;
  }

  deleteAlbum() {
    return _albums;
  }
}

export default new AlbumStore();
