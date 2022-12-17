/* eslint-disable react/no-children-prop */
import { HTMLInputTypeAttribute, ReactNode, memo } from "react";
import {
   Input as Inputs,
   InputGroup,
   InputLeftElement,
} from "@chakra-ui/react";

interface InputProps {
   types: HTMLInputTypeAttribute;
   title: string;
   icon: ReactNode;
}

export function Input({ types, title, icon }: InputProps) {
   return (
      <InputGroup>
         <InputLeftElement pointerEvents="none" children={icon} />
         <Inputs
            type={types}
            placeholder={title}
            _placeholder={{ opacity: 0.9, color: "gray.200" }}
            colorScheme="gray.100"
            bg="gray.50"
            border="none"
            fontWeight={400}
            w="30rem"
         />
      </InputGroup>
   );
}

export default memo(Input);
