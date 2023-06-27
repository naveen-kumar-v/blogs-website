import { createContext, useState } from "react";
import { baseUrl } from '../baseUrl';

//step-1 - creat context
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);


  //filling data
  async function fetchBolgPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    }

    catch (err) {
      console.log(err);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false)
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBolgPosts(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBolgPosts,
    handlePageChange
  }

  // step-2 -> context providing
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}