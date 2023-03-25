import { memo, useState } from "react";
import { Flex, FormControl, Icon, Stack, useToast } from "@chakra-ui/react";
import { RiUserFill } from "react-icons/ri";
import { HiLockClosed } from "react-icons/hi";

import { Input as InputBar } from "../Input";
import { Btn } from "../../../Buttons";

function Form() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const toast = useToast();

	console.log("name:", username);
	console.log("password:", password);

	/*
		fixme ==> Validação do campos do input Login e Senha!
	*/
	const handleValidateUsername = () => {
		if (username === "") {
			toast({
				title: "Digite seu usuário!",
				status: "warning",
				duration: 9000,
				isClosable: true,
			});
			return false;
		} else if (password === "") {
			toast({
				title: "Digite sua senha!",
				status: "warning",
				duration: 9000,
				isClosable: true,
			});
			return false;
		} else if (username && password !== "") {
			toast({
				title: "Usuário Logado!",
				status: "success",
				duration: 9000,
				isClosable: true,
			});
			setPassword("");
			setUsername("");
			return false;
		}

		return true;
	};

	return (
		<FormControl isRequired>
			<Stack spacing={4}>
				<InputBar
					icon={<Icon as={RiUserFill} w={4} h={4} color={"gray.100"} />}
					title="Username"
					types={"text"}
					id={"name"}
					name={"name"}
					value={username}
					onChange={(event) => setUsername(event.target.value)}
				/>
				<InputBar
					icon={<Icon as={HiLockClosed} w={4} h={4} color={"gray.100"} />}
					title="Password"
					types={"password"}
					id={"password"}
					name={"password"}
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
			</Stack>

			<Flex flexDir={"column"}>
				<Btn
					title="Login"
					bg={"green.200"}
					color={"whiteAlpha.900"}
					onClick={handleValidateUsername}
				/>
				<Btn
					title="Cadastrar Agora"
					bg={"transparent"}
					color={"gray.200"}
					borderColor={"gray.200"}
				/>
			</Flex>
		</FormControl>
	);
}

export default memo(Form);
