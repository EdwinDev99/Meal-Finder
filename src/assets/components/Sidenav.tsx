import { Heading, Link, Stack } from "@chakra-ui/react";
import type { Category } from "../types";

type Props = {
  categories: Category[];
  loading: boolean;
};

const selectedPops = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold",
};

function Sidenav({ categories }: Props) {
  const selected = {
    strCategory: "Beef",
  };
  return (
    <>
      <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4}>
        CATEGORIAS
      </Heading>
      <Stack>
        {categories.map((c) => (
          <Link
            px={2}
            py={1}
            borderRadius={5}
            key={c.strCategory}
            _hover={{ textDecoration: "none" }}
            {...(selected.strCategory == c.strCategory && selectedPops)}
          >
            {c.strCategory}
          </Link>
        ))}
      </Stack>
    </>
  );
}

export default Sidenav;
