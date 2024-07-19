import { HTMLInputTypeAttribute, ReactElement, memo } from "react";
import {
	Input,
	InputGroup,
	InputLeftElement,
	InputProps,
} from "@chakra-ui/react";

interface InputFieldProps extends InputProps {
	types: HTMLInputTypeAttribute;
	icon: ReactElement;
	title: string;
	id: string;
	name: string;
}

export function InputField(inputs: InputFieldProps) {
	const { types, title, icon, name, id, ...props } = inputs;

	return (
		<InputGroup>
			<InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
			<Input
				{...props}
				type={types}
				placeholder={title}
				id={id}
				name={name}
				colorScheme={"gray.100"}
				bg={"gray.50"}
				border={"none"}
				fontWeight={400}
				w={"30rem"}
				_placeholder={{ opacity: 0.9, color: "gray.200" }}
				_focusVisible={{
					borderColor: "green.300",
					boxShadow: "0 0 0 1px var(--green-300)",
				}}
			/>
		</InputGroup>
	);
}

export default memo(InputField);
