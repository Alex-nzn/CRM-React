import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect");

    fetch(url)
      .then((res) => {
        if (res.ok !== true) {
          throw Error("Could not fetch");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return { data, error };
};

export default useFetch;
