import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./assets/components/Header";
import Sidenav from "./assets/components/Sidenav";
import MainContent from "./assets/components/MainContent";
import { useEffect, useState } from "react";
import type { CategoriesResponse, Category } from "./assets/types";

function App() {
  const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  console.log(data);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);
    fetch(url, { signal })
      .then((response) => {
        return response.json() as Promise<CategoriesResponse>;
      })
      .then((data) => {
        setData(data.meals);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <Grid
      fontSize={14}
      h="100px"
      gridTemplateRows={"60px 1fr"}
      templateColumns="repeat(5,1fr)"
    >
      <GridItem rowSpan={1} colSpan={5}>
        <Header />
      </GridItem>
      <GridItem p="5" rowSpan={1} colSpan={1} height="calc(100vh)">
        <Sidenav categories={data} loading={loading} />
      </GridItem>
      <GridItem rowSpan={1} colSpan={4}>
        <MainContent />
      </GridItem>
    </Grid>
  );
}

export default App;
