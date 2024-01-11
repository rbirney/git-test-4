'use strict';

import logger from "../utils/logger.js";
import playlistStore from "../models/playlist-store.js";
import { v4 as uuidv4 } from 'uuid';

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");
    
    const viewData = {
      title: "Playlist App Dashboard",
      playlists: playlistStore.getAllPlaylists()
    };
    
    logger.debug(viewData.playlists);
    
    response.render('dashboard', viewData);
  },
  addPlaylist(request, response) {
    const timestamp = new Date();
    
    const newPlaylist = {
      id: uuidv4(),
      title: request.body.title,
      songs: [],
      date: timestamp
    };
    playlistStore.addPlaylist(newPlaylist);
    response.redirect('/dashboard');
  },
  
  deletePlaylist(request, response) {
    const playlistId = request.params.id;
    logger.debug(`Deleting Playlist ${playlistId}`);
    playlistStore.removePlaylist(playlistId);
    response.redirect("/dashboard");
  },
  
  updatePlaylist(request, response) {
    const playlistId = request.params.id;
    logger.debug("updating playlist " + playlistId);
    const updatedPlaylist = {
      id: playlistId,
      title: request.body.title
    };
    playlistStore.editPlaylist(playlistId, updatedPlaylist);
    response.redirect('/dashboard/');
  }
};

export default dashboard;