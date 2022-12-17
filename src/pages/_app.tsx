import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { themes } from "../themes/themes";
import "../sass/global.scss";
import Login from "./login";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider theme={themes}>
         {/* <Component  /> */}
         <Login {...pageProps} />
      </ChakraProvider>
   );
}
