/* eslint-disable react/no-children-prop */
import Image from "next/image";
import {
   Flex,
   Container,
   FormControl,
   chakra,
   Stack,
   Icon,
} from "@chakra-ui/react";
import { RiUserFill } from "react-icons/ri";
import { HiLockClosed } from "react-icons/hi";

import Logo from "../../assets/logo.svg";
import { Btn } from "../../components/Buttons";
import { Input as InputIcon } from "../../components/Input";

export default function Login() {
   return (
      <Container maxW="7xl">
         <Flex
            align={"center"}
            justify={"center"}
            direction={"column"}
            h={"100vh"}
         >
            <Image src={Logo} alt="Logo da Pagina" />
            <chakra.h1 fontSize={"2rem"} pt={"0.5rem"} color={"gray.200"}>
               <chakra.span color={"green.300"}>W</chakra.span>
               ebstock
            </chakra.h1>
            <chakra.h3
               fontWeight={500}
               fontFamily={"heading"}
               fontSize={"lg"}
               mt={"1.4rem"}
               mb={"2.6rem"}
            >
               Por favor, entre com suas credenciais
            </chakra.h3>
            <main>
               <FormControl>
                  <Stack spacing={4}>
                     <InputIcon
                        title="Username"
                        types={"text"}
                        icon={
                           <Icon
                              as={RiUserFill}
                              w={4}
                              h={4}
                              color={"gray.100"}
                           />
                        }
                     />
                     <InputIcon
                        title="Password"
                        types={"password"}
                        icon={
                           <Icon
                              as={HiLockClosed}
                              w={4}
                              h={4}
                              color={"gray.100"}
                           />
                        }
                     />
                  </Stack>
               </FormControl>
            </main>
            <Btn title="Login" bg={"green.200"} color={"white"} />
            <Btn
               title="Cadastrar Agora"
               bg={"transparent"}
               color={"gray.200"}
               borderColor={"#2B3643"}
            />
            <section>
               <Flex mt={"1.5rem"}>
                  <chakra.a href="#">Recupera Senha</chakra.a>
               </Flex>
            </section>
         </Flex>
      </Container>
   );
}
