'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const playlistStore = {

  store: new JsonStore('./models/playlist-store.json', { playlistCollection: [] }),
  collection: 'playlistCollection',
  array: 'songs',

  getAllPlaylists() {
    return this.store.findAll(this.collection);
  },
  
  getPlaylist(id) {
    return this.store.findOneBy(this.collection, 
    (playlist => playlist.id === id));
  },

  addSong(id, song) {
    this.store.addItem(this.collection, id, this.array, song);
  },
  
  addPlaylist(playlist) {
    this.store.addCollection(this.collection, playlist);
  },
};

export default playlistStore;