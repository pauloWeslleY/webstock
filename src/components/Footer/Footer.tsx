import { memo } from "react";
import { Text } from "@chakra-ui/react";

function Footer() {
   return (
      <footer>
         <Text as={"span"}>copyright © 2019 todos os direitos reservados</Text>
      </footer>
   );
}

export default memo(Footer);
