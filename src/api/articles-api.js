import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticlesWithTopic = async (topic, page) => {
  const response = await axios.get(`/search`, {
    params: {
      query: topic,
      page,
    },
  });
  console.log(response);
  return response.data.hits;
};
