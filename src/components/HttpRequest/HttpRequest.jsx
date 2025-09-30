import { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "@/components/ArticleList/ArticleList";

const HttpRequest = () => {
  // 1. Оголошуємо стан
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=react"
        );
        // 2. Записуємо дані в стан
        setArticles(response.data.hits);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <p>Latest articles</p>
      {loading && <p>Loadin data, please wait...</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

export default HttpRequest;
