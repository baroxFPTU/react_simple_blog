import axiosClient from "./axiosClient";

const postApi = {
  getAll: (params) => {
    const url = '/posts.json';
    return axiosClient.get(url, {params});
  },
  createPost: (data) => {
    const url = '/posts.json';
    return axiosClient.post(url, {...data});
  },
  getById: (id) => {
    const url = `/posts/${id}.json`;
    return axiosClient.get(url);
  }
};

export default postApi;