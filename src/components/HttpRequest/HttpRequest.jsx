import { useState, useEffect } from "react";
import ArticleList from "@/components/ArticleList/ArticleList";
import { fetchArticlesWithTopic } from "@/api/articles-api";
// import SearchForm from "@/components/SearchForm/SearchForm";
import SearchFormFormik from "@/components/SearchFormFormik/SearchFormFormik";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";

const HttpRequest = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  ///////  Logic for the button Load more... ///////

  // const [page, setPage] = useState(0);
  // const handlePage = () => {
  //   setPage(page + 1);
  // };
  // const handleSearch = (topic) => {
  //   // setTopic((prevTopic) => {
  //   //   if (topic === prevTopic) {
  //   //     return topic;
  //   //   }
  //   //   setArticles([]);
  //   //   return topic;
  //   // });
  //   setTopic(topic);
  //   setPage(0);
  //   setArticles([]);
  // }

  useEffect(() => {
    if (!topic) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchArticlesWithTopic(topic, currentPage - 1);
        setArticles(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [topic, currentPage]);

  const handleSearch = (topic) => {
    setTopic((prevTopic) => {
      if (topic === prevTopic) {
        if (currentPage > 0) {
          setArticles([]);
        }
        return topic;
      }
      setArticles([]);
      return topic;
    });
    setCurrentPage(1);
  };

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
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
      {/* <SearchForm onSearch={handleSearch} /> */}
      <SearchFormFormik onSearch={handleSearch} />
      {loading && <p>Loadin data, please wait...</p>}
      {articles.length > 0 && <p>Latest articles</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
      {/* {articles.length > 0 && (
        <button type="submit" onClick={handlePage}>
          Load more...
        </button>
      )} */}
      {articles.length > 0 && (
        <PaginationComponent
          currentPage={currentPage}
          onPageChange={handleCurrentPage}
        />
      )}
    </div>
  );
};

export default HttpRequest;
