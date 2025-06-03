import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Header from "./assets/components/Header";
import Sidenav from "./assets/components/Sidenav";
import MainContent from "./assets/components/MainContent";
import { useState } from "react";
import type { Category, Meal, SearchForm } from "./assets/types";
import useHttpData from "./assets/hooks/useHttpData";
import axios from "axios";
import RecipeModal from "./assets/components/RecipeModal";

const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

const makeMEalUrl = (Category: Category) =>
  `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category.strCategory}`;

const defaultCategory = {
  strCategory: "Beef",
};

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(defaultCategory);

  const { loading, data } = useHttpData<Category>(url);
  const {
    loading: loadingMeal,
    data: dataMeal,
    setData: setMeals,
    setLoading: setLoadingMeal,
  } = useHttpData<Meal>(makeMEalUrl(defaultCategory));

  console.log({ dataMeal });

  const searchApi = (searchForm: SearchForm) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchForm.search}`;
    setLoadingMeal(true);
    axios
      .get<{ meals: Meal[] }>(url)
      .then(({ data }) => {
        setMeals(data.meals);
        return data.meals;
      })
      .catch((error) => {
        console.error("Error al buscar recetas:", error);
        return null;
      })
      .finally(() => setLoadingMeal(false));
  };

  return (
    <>
      <Grid
        templateAreas={`"header header"
                          "nav main"`}
        gridTemplateRows={"60px 1fr"}
        gridTemplateColumns={{ md: `250px 1fr`, sm: `0 1fr` }}
        fontSize={14}
      >
        <GridItem
          zIndex="1"
          pos="sticky"
          top="0"
          rowSpan={1}
          colSpan={5}
          bg="white"
          pt="7px"
          boxShadow="lg"
        >
          <Header onSubmit={searchApi} />
        </GridItem>
        <GridItem
          p="5"
          position="sticky"
          height="calc(100vh - 60px)"
          top="60px"
          left="0"
          overflow="auto"
        >
          <Sidenav
            categories={data}
            loading={loading}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </GridItem>
        <GridItem p="4" bg="gray.100" rowSpan={1} colSpan={4}>
          <MainContent
            openRecipe={onOpen}
            loadingMeal={loadingMeal}
            dataMeal={dataMeal}
          />
        </GridItem>
      </Grid>
      <RecipeModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default App;
