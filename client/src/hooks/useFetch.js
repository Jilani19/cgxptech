import { useState, useEffect } from 'react';

export const useFetch = (urlPath) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5005/api';
        const response = await fetch(`${baseUrl}${urlPath}`);
        if (!response.ok) {
          throw new Error(`HTTP Error! status: ${response.status}`);
        }
        const json = await response.json();
        if (active) {
          setData(json);
        }
      } catch (err) {
        console.warn(`useFetch warning for path "${urlPath}": ${err.message}. Dynamic fallback activated.`);
        if (active) {
          setError(err.message);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      active = false;
    };
  }, [urlPath]);

  return { data, loading, error };
};
