import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-c0a53.cloudfunctions.net/api" // the api (cloud function) url
  // "http://localhost:5001/clone-c0a53/us-central1/api", // local api (cloud function) url
});

export default instance;
