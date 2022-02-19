import axios from "axios";

const axiosClient = axios.create();

class ServiceApi {
  base = "";

  appendToURL(url) {
    return `${url}`;
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
    (version === 'new')
      ? axiosClient.defaults.baseURL = "https://api.github.com"
      : axiosClient.defaults.baseURL = "https://api.github.com"
  }

  async fetch(url, data = {}, resolve = true) {
    try {
      const response = await axiosClient.get(
        this.appendToURL(url),
        {
          ...this.setupHeaders(),
          data: data
        }
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