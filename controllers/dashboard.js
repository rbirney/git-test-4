'use strict';

import logger from "../utils/logger.js";
import playlistStore from "../models/playlist-store.js";

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
};

export default dashboard;