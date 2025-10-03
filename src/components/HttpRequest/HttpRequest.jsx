import { useState, useEffect } from "react";
import ArticleList from "@/components/ArticleList/ArticleList";
import { fetchArticlesWithTopic } from "@/api/articles-api";
import SearchForm from "@/components/SearchForm/SearchForm";
import SearchFormFormik from "@/components/SearchFormFormik/SearchFormFormik";

const HttpRequest = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!topic) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchArticlesWithTopic(topic, page);
        setArticles((prevData) => {
          return [...prevData, ...data];
        });
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [topic, page]);

  const handleSearch = (topic) => {
    // setTopic((prevTopic) => {
    //   if (topic === prevTopic) {
    //     return topic;
    //   }
    //   setArticles([]);
    //   return topic;
    // });
    setTopic(topic);
    setPage(0);
    setArticles([]);
  };

  const handlePage = () => {
    setPage(page + 1);
  };

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

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <SearchFormFormik onSearch={handleSearch} />
      {loading && <p>Loadin data, please wait...</p>}
      {articles.length > 0 && <p>Latest articles</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
      {articles.length > 0 && (
        <button type="submit" onClick={handlePage}>
          Load more...
        </button>
      )}
    </div>
  );
};

export default HttpRequest;
