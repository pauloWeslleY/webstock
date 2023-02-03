import Image from "next/image";
import { Flex, Container, chakra, Heading, Text } from "@chakra-ui/react";

import Logo from "../../assets/logo.svg";
import { Btn } from "../../components/Buttons";
import { Form } from "./components/Form";

export default function PageLogin() {
   return (
      <Container maxW={"7xl"}>
         <Flex
            align={"center"}
            justify={"center"}
            direction={"column"}
            h={"100vh"}
         >
            <Image src={Logo} alt="Logo da Pagina" />
            <Heading
               as={"h3"}
               fontSize={"2rem"}
               fontWeight={400}
               pt={"0.5rem"}
               color={"gray.200"}
            >
               <Text as={"span"} color={"green.300"}>
                  W
               </Text>
               ebstock
            </Heading>
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
               <Form />

               <Flex flexDir={"column"}>
                  <Btn
                     title="Login"
                     bg={"green.200"}
                     color={"whiteAlpha.900"}
                  />
                  <Btn
                     title="Cadastrar Agora"
                     bg={"transparent"}
                     color={"gray.200"}
                     borderColor={"gray.200"}
                  />
               </Flex>
               <section>
                  <Flex justify={"center"} mt={"1.5rem"}>
                     <chakra.a href="#">Recupera Senha</chakra.a>
                  </Flex>
               </section>
            </main>
         </Flex>
      </Container>
   );
}
