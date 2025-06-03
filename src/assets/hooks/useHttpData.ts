import { useEffect, useState } from "react";

export default function useHttpData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    let ignore = false;
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);
    fetch(url, { signal })
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setData(json.meals || []);
        }
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Error fetching data:", error);
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [url]);

  return { loading, data };
}
