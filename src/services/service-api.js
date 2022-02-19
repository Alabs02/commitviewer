import axios from "axios";

const axiosClient = axios.create();

class ServiceApi {
  base = "";

  appendToURL(url) {
    return `${this.base}${url}`;
  }

  setupHeaders(is_attached = false) {
    return is_attached
      ? {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      : {
          headers: {
            "Content-Type": "application/json"
          }
        };
  }

  service(version) {
    this.base = (version === 'new')
      ? axiosClient.defaults.baseURL = ""
      : axiosClient.defaults.baseURL = ""
  }

  async fetch(url, resolve = true) {
    try {
      const response = await axiosClient.get(
        this.appendToURL(url),
        this.setupHeaders()
      );

      return resolve ? response?.data : response;
    } catch(err) {
      this.handleErrors(err);
    }
  }

  async push(url, payload = {}, resolve = true, is_attached = false) {
    try {
      const response = axiosClient.post(
        this.appendToURL(url),
        payload,
        this.setupHeaders(is_attached)
      );

      return resolve ? response?.data : response;
    } catch (err) {
      this.handleErrors(err);
    }
  }

  handleErrors(err) {
    console.error(err);
    return err?.response;
  }
}

export default ServiceApi;