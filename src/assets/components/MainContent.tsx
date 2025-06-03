import { SimpleGrid } from "@chakra-ui/react";
import type { Meal } from "../types";
import MealCard from "./MealCard";
import SkeletonCard from "./SkeletonCard";

type Props = {
  loadingMeal: boolean;
  dataMeal: Meal[];
};

function MainContent({ dataMeal, loadingMeal }: Props) {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <SimpleGrid columns={3} gap="20px">
      {loadingMeal &&
        skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
      {!loadingMeal &&
        dataMeal.map((m) => <MealCard key={m.idMeal} meal={m} />)}
    </SimpleGrid>
  );
}

export default MainContent;
