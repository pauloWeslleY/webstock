/* eslint-disable react/no-children-prop */
import { HTMLInputTypeAttribute, SetStateAction, ReactNode, memo } from "react";
import {
   Input as InputBar,
   InputGroup,
   InputLeftElement,
   InputProps,
} from "@chakra-ui/react";

interface IInputProps extends InputProps {
   types: HTMLInputTypeAttribute;
   title: string;
   icon: ReactNode;
   // handleInput: (event: FormEvent) => void;
   handleInput: (e: { target: { value: SetStateAction<string> } }) => void;
}

export function Input(inputs: IInputProps) {
   const { types, title, icon, handleInput, ...props } = inputs;

   return (
      <InputGroup>
         <InputLeftElement pointerEvents="none" children={icon} />
         <InputBar
            {...props}
            type={types}
            placeholder={title}
            _placeholder={{ opacity: 0.9, color: "gray.200" }}
            colorScheme={"gray.100"}
            bg={"gray.50"}
            border={"none"}
            fontWeight={400}
            w={"30rem"}
            onChange={handleInput}
         />
      </InputGroup>
   );
}

export default memo(Input);
