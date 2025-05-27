import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./assets/components/Header";
import Sidenav from "./assets/components/Sidenav";
import MainContent from "./assets/components/MainContent";
import { useState } from "react";
import type { Category } from "./assets/types";
import useHttpData from "./assets/hooks/useHttpData";

function App() {
  const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

  const [selectedCategory, setSelectedCategory] = useState<Category>({
    strCategory: "Beef",
  });

  const { loading, data } = useHttpData<Category>(url);

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
        <Sidenav
          categories={data}
          loading={loading}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={4}>
        <MainContent />
      </GridItem>
    </Grid>
  );
}

export default App;
