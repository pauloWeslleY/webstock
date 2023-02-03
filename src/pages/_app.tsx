import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { themes } from "../themes/themes";
import "../sass/global.scss";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider theme={themes}>
         <Component {...pageProps} />
      </ChakraProvider>
   );
}
