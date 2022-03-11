import axios from 'axios';
import queryString from 'query-string';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const getFirebaseToken = () => {
  const auth = getAuth();
  if (auth.currentUser) {
    return auth.currentUser;
  }

  return new Promise((resolve, reject) => {
    const timerId = setTimeout(() => {
      reject(null);
    }, 10000);
    const unRegisterAuthObserve = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        reject(null);
        return;
      }
      const token = await user.getIdToken();
      resolve(token);
      unRegisterAuthObserve();
      clearTimeout(timerId);
    });
  });
}

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: params => queryString.stringify(params),
})

axiosClient.interceptors.request.use(async (config) => {
  const token = await getFirebaseToken();

  if (!token) {
    config.headers.Authorization = `${(typeof token === 'string') ? token : token.accessToken}`;
  }

  return config;
});

axiosClient.interceptors.response.use(response => {
  if (response && response.data) {
    return response.data;
  }

  return response;
}, (error) => {
  throw error
});

export default axiosClient;