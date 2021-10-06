import axios from "axios";

export const fetchRepos = async (org) => {
  try {
      const response = await axios.get(`https://api.github.com/repos/${org}`);
      return response;
    } catch (error) {
      console.error(error);
      return null;
    }
};