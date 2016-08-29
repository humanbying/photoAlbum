import API from '../API'

const UserActions = {
  getAlbum: API.getAlbum,
  getAlbums: API.getAlbums,
  editAlbum: API.editAlbum,

  getAlbum(id) {
    API.getAlbum(id);
  },
  createAlbum(project) {
    API.createAlbum(project);
  },
  deleteAlbum(id) {
    API.deleteAlbum(id);
  },
  editAlbum(id) {
    API.editAlbum(id);
  }
};

export default UserActions;
