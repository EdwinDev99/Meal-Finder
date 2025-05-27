import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import type { Meal } from "../types";

type Props = {
  loadingMeal: boolean;
  dataMeal: Meal[];
};

function MainContent({ dataMeal }: Props) {
  return (
    <SimpleGrid columns={3} gap="20px">
      {dataMeal.map((m) => (
        <Card key={m.idMeal} boxShadow="lg">
          <CardBody gap="2">
            <Image
              src={m.strMealThumb}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Heading size="mb" color="blue.400">
              <Text mt="4">{m.strMeal}</Text>
            </Heading>
          </CardBody>
          <CardFooter pt="0">
            <Button variant="solid" color="white" bgColor="blue.400">
              Ver receta
            </Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export default MainContent;
