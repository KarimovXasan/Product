import Axios from "axios";

const axiosBaseUrl = Axios.create({
    baseURL: 'https://fakestoreapi.com'
});

export default axiosBaseUrl