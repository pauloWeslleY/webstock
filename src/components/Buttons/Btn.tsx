import { memo } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface BtnProps extends ButtonProps {
   title: string;
   color: string;
   bg: string;
   borderColor?: string;
}

export function Btn(btnProps: BtnProps) {
   const { title, color, bg, borderColor, ...props } = btnProps;

   return (
      <Button
         {...props}
         bg={bg}
         color={color}
         border={"0.1rem solid"}
         borderColor={borderColor}
         borderRadius={"0.5rem"}
         fontWeight={900}
         textTransform={"uppercase"}
         mt={"2.5rem"}
         w={"30rem"}
         h={"3rem"}
         transition={"all 0.5s ease-in"}
         _hover={{
            transform: "translateY(-3px)",
            boxShadow: "lg",
         }}
      >
         {title}
      </Button>
   );
}

export default memo(Btn);
