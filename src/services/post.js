import postApi from "../api/postApi"

const getAllPost = async (callback) => {
  try {
    const response = await postApi.getAll();
    if (!response) throw new Error("Faild to get all posts.");
    callback(response);
    return response;
  } catch (error) {
      console.log(error);
  }
}

const getPostById = async (id, callback) => {
  try {
    const response = await postApi.getById(id);
    if (!response) throw new Error("Faild to get all posts.");
    callback(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export {
  getAllPost,
  getPostById,
}