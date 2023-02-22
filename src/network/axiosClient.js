import axios from "axios";


export const axiosClient = axios.create({
    baseURL: `https://newmagic-backend.vercel.app/`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

export const databaseName = ''