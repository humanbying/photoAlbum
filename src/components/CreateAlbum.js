import React, { Component } from 'react'
import UserActions from '../actions/UserActions'
import { browserHistory } from 'react-router';
import AlbumStore from '../stores/AlbumStore';


export default class CreateAlbum extends Component {
  constructor() {
    super();

    this.state = {
      albumName: '',
      image: '',
      albums: []
    }
    this.changeTaskInput = this.changeTaskInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteAlbum = this.deleteAlbum.bind(this);
  }

  componentDidMount() {
    AlbumStore.startListening(this.changeTaskInput);
  }

  componentWillUnmount() {
    AlbumStore.stopListening(this.changeTaskInput);
  }

  changeTaskInput(event) {
    let album = AlbumStore.get();
    let albums = AlbumStore.getAll();
    let { albumName, image } = album;
    this.setState({
      albumName, image,
      albumName: '',
      image: '',
      albums: albums
    });
  }



  deleteAlbum(id) {
    UserActions.deleteAlbum(id);
  }

  onSubmit(event) {
    event.preventDefault();
    let { albumName, image } = this.state;

    UserActions.createAlbum({ albumName, image});
    this.setState({
      album: AlbumStore.get()
    });
  }

  render() {
    let {albumName, image} = this.state;
    let Album = this.state.albums.map((album, i) => {
      return (
        <div className="mainDiv" key={i}>
          <div className="photos" >
            <img className="photo" src={album.image} />
              <div>
                <div className='box'>
                <p className="albumName">{album.albumName}</p>
                <a className="deleteBtn" onClick={this.deleteAlbum.bind(null, album._id)}>x</a>
                </div>
            </div>
          </div>
        </div>
      );
    })
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="albumNotes">Image Name:</label>
                <input type="text"
                className="form-control"
                placeholder="name"
                value={this.state.albumName}
                onChange={event => this.setState({albumName: event.target.value})}
                />
              <div className="form-group">
                <label htmlFor="albumName">Image URL:</label>
                <input type="text"
                className="form-control"
                placeholder="image url"
                value={this.state.image}
                onChange={event => this.setState({image: event.target.value})}
                />
              </div>
            </div>
          <button type='submit' className="btn btn-default">Submit</button>
        </form>
        <ul>
        {Album}
        </ul>
      </div>
    )
  }
}
