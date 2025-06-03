import { SimpleGrid } from "@chakra-ui/react";
import type { Meal } from "../types";
import MealCard from "./MealCard";
import SkeletonCard from "./SkeletonCard";

type Props = {
  loadingMeal: boolean;
  dataMeal: Meal[];
  openRecipe: (meal: Meal) => void;
};

function MainContent({ dataMeal, loadingMeal, openRecipe }: Props) {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <SimpleGrid columns={3} gap="20px">
      {loadingMeal &&
        skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
      {!loadingMeal &&
        dataMeal.map((m) => (
          <MealCard openRecipe={() => openRecipe(m)} key={m.idMeal} meal={m} />
        ))}
    </SimpleGrid>
  );
}

export default MainContent;
