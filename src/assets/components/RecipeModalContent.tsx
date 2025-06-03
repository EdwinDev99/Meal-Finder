import {
  Heading,
  ListItem,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  OrderedList,
  Image,
  Text,
} from "@chakra-ui/react";
import type { MealDetails } from "../types";

type Props = {
  data?: MealDetails;
  ingredients: string[];
};

function RecipeModalContent({ data, ingredients }: Props) {
  return (
    <>
      <ModalHeader>{data?.strMeal}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image
          width="100%"
          borderRadius="lg"
          src={data?.strMealThumb}
          alt={data?.strMeal}
        />
        <Heading mt="4" mb="4" size="md">
          Ingredientes
        </Heading>
        <OrderedList>
          {ingredients.map((ingredient) => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
          ))}
        </OrderedList>
        <Text whiteSpace="pre-line" mt="4">
          {data?.strInstructions}
        </Text>
      </ModalBody>
    </>
  );
}

export default RecipeModalContent;
