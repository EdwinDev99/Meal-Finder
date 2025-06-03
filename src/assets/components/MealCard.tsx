import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import type { Meal } from "../types";

type Props = {
  meal: Meal;
};

function MealCard({ meal }: Props) {
  return (
    <Card boxShadow="lg">
      <CardBody gap="2">
        <Image
          src={meal.strMealThumb}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Heading size="mb" color="blue.400">
          <Text mt="4">{meal.strMeal}</Text>
        </Heading>
      </CardBody>
      <CardFooter pt="0">
        <Button variant="solid" color="white" bgColor="blue.400">
          Ver receta
        </Button>
      </CardFooter>
    </Card>
  );
}

export default MealCard;
