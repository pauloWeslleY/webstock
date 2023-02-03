import { memo, SetStateAction, useState } from "react";
import {
   FormControl,
   FormErrorMessage,
   FormHelperText,
   Icon,
   Stack,
   Text,
} from "@chakra-ui/react";
import { RiUserFill } from "react-icons/ri";
import { HiLockClosed } from "react-icons/hi";

import { Input as InputIcon } from "../Input";

function Form() {
   const [input, setInput] = useState("");

   const handleInputChange = (event: {
      target: { value: SetStateAction<string> };
   }) => setInput(event.target.value);

   const isError = input === "";

   return (
      <FormControl isInvalid={!isError}>
         <Stack spacing={4}>
            <InputIcon
               title="Username"
               types={"text"}
               icon={<Icon as={RiUserFill} w={4} h={4} color={"gray.100"} />}
               handleInput={handleInputChange}
            />
            <InputIcon
               title="Password"
               types={"password"}
               icon={<Icon as={HiLockClosed} w={4} h={4} color={"gray.100"} />}
               handleInput={handleInputChange}
            />

            <Text>{input}</Text>

            {!isError ? (
               <FormHelperText>{"Enter the email"}</FormHelperText>
            ) : (
               <FormErrorMessage>
                  Enter the email is Enter the Password required.
               </FormErrorMessage>
            )}
         </Stack>
      </FormControl>
   );
}

export default memo(Form);
