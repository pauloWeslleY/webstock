import { memo } from "react";
import { Button } from "@chakra-ui/react";

interface BtnProps {
   title: string;
   color: string;
   bg: string;
   borderColor?: string;
}

export function Btn({ title, color, bg, borderColor }: BtnProps) {
   return (
      <section>
         <Button
            bg={bg}
            color={color}
            border={`0.1rem solid ${borderColor}`}
            borderRadius="0.5rem"
            fontWeight={900}
            textTransform="uppercase"
            mt="2.5rem"
            w="30rem"
            h="3rem"
            transition="all 0.5s ease-in"
            _hover={{
               transform: "translateY(-5px)",
               boxShadow: "lg",
            }}
         >
            {title}
         </Button>
      </section>
   );
}

export default memo(Btn);
