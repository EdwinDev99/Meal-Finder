import { Heading, Link, SkeletonText, Stack } from "@chakra-ui/react";
import type { Category } from "../types";

type Props = {
  categories: Category[];
  loading: boolean;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
};

const selectedPops = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold",
};

function Sidenav({
  loading,
  categories,
  setSelectedCategory,
  selectedCategory,
}: Props) {
  return loading ? (
    <SkeletonText noOfLines={8} mt="1" spacing="6" />
  ) : (
    <>
      <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4}>
        CATEGORIAS
      </Heading>
      <Stack>
        {categories.map((c) => (
          <Link
            onClick={() => setSelectedCategory(c)}
            px={2}
            py={1}
            borderRadius={5}
            key={c.strCategory}
            _hover={{ textDecoration: "none" }}
            {...(selectedCategory.strCategory == c.strCategory && selectedPops)}
          >
            {c.strCategory}
          </Link>
        ))}
      </Stack>
    </>
  );
}

export default Sidenav;
