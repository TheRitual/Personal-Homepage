import axios from "axios";

export const fetchRepos = async (org) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${org}/repos`, {
      headers: {
        'Accept': 'application/vnd.github.VERSION.text+json',
      }
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};