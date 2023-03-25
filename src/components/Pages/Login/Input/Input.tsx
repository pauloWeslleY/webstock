/* eslint-disable react/no-children-prop */
import { HTMLInputTypeAttribute, ReactNode, memo } from "react";
import {
	Input as InputBar,
	InputGroup,
	InputLeftElement,
	InputProps,
} from "@chakra-ui/react";

interface IInputProps extends InputProps {
	types: HTMLInputTypeAttribute;
	icon: ReactNode;
	title: string;
	value?: string;
	id: string;
	name: string;
}

export function Input(inputs: IInputProps) {
	const { types, title, icon, value, name, id, ...props } = inputs;

	return (
		<InputGroup>
			<InputLeftElement pointerEvents="none" children={icon} />
			<InputBar
				{...props}
				type={types}
				placeholder={title}
				id={id}
				name={name}
				value={value}
				_placeholder={{ opacity: 0.9, color: "gray.200" }}
				colorScheme={"gray.100"}
				bg={"gray.50"}
				border={"none"}
				fontWeight={400}
				w={"30rem"}
				_focusVisible={{
					borderColor: "green.300",
					boxShadow: "0 0 0 1px var(--green-300)",
				}}
			/>
		</InputGroup>
	);
}

export default memo(Input);
