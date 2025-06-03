import {
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { IoMdSearch } from "react-icons/io";

type Props = {};

function Header({}: Props) {
  return (
    <Container maxW="3xl" mt="1">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <IoMdSearch color="gray" />
        </InputLeftElement>
        <Input type="text" placeholder="Intenta con 'Chicken o 'beans...''" />
      </InputGroup>
    </Container>
  );
}

export default Header;
