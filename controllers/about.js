'use strict';
import logger from "../utils/logger.js";

const about = {
  createView(request, response) {
    response.send('About the Playlist App');   
  },
};

export default about;