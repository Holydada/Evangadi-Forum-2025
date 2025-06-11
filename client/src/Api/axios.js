import axios from "axios";
const instance = axios.create({
  // version of localhost

  // baseURL: "http://localhost:5500/api",

  // deployed version of Evangadi server in Render.com
 // Use local for development
  baseURL: "http://localhost:5500/api",
   
});
export default instance;