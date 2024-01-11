"use strict";

import logger from "../utils/logger.js";
import playlistStore from "../models/playlist-store.js";
import { v4 as uuidv4 } from "uuid";

const playlist = {
  createView(request, response) {
    const playlistId = request.params.id;
    logger.debug("Playlist id = " + playlistId);

    const viewData = {
      title: "Playlist",
      singlePlaylist: playlistStore.getPlaylist(playlistId),
    };

    response.render("playlist", viewData);
  },

  addSong(request, response) {
    const playlistId = request.params.id;
    const playlist = playlistStore.getPlaylist(playlistId);
    const newSong = {
      id: uuidv4(),
      title: request.body.title,
      artist: request.body.artist,
      genre: request.body.genre,
      duration: request.body.duration,
    };
    playlistStore.addSong(playlistId, newSong);
    response.redirect("/playlist/" + playlistId);
  },
};

export default playlist;
