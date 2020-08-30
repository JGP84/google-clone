import { useState, useEffect } from "react";
import API_KEY from "./keys";

// configuration of search engine: https://cse.google.com/cse/setup/basic?cx=5fe080df153b600de

// search engine ID:
const CONTEXT_KEY = "5fe080df153b600de";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
