import axios from "axios"
axios.defaults.withCredentials = true;

const useAxios = axios.create({
    baseURL: process.env.API_URL? process.env.API_URL:'',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'  
});

export default useAxios