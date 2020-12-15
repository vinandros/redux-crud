import axios from "axios";
const axiosClient = axios.create({
  baseURL: `http://${window.location.hostname}:4000`,
});
export default axiosClient;
