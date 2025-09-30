import { useState } from "react";
import ArticleList from "@/components/ArticleList/ArticleList";
import { fetchArticlesWithTopic } from "@/api/articles-api";
import SearchForm from "@/components/SearchForm/SearchForm";

const HttpRequest = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // // useEffect is used when data needs to be displayed on the first page render.
  // useEffect(() => {
  //     async function fetchArticles() {
  //         try {
  //             setLoading(true);
  //             const data = await fetchArticlesWithTopic("react");
  //             // 2. Записуємо дані в стан
  //             setArticles(data);
  //         } catch (error) {
  //             console.log(error);
  //             setError(true);
  //         } finally {
  //             setLoading(false);
  //         }
  //     }

  //     fetchArticles();
  // }, []);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      {loading && <p>Loadin data, please wait...</p>}
      {articles.length > 0 && <p>Latest articles</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

export default HttpRequest;
