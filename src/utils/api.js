import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': 'e5ebfd24b5mshfbc3f4f7ac927d0p1c1b96jsn1d967912bf28',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }