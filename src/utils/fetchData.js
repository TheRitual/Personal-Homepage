import axios from "axios";

export const fetchRepos = async () => {
  try {
    const response = await axios.get(`http://dev.theritual.eu/repos/`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};