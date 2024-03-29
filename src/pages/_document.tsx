import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="pt-br">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />

				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>

				<link rel="shortcut icon" href="/favicon.svg" type="image/svg" />

				{/* <meta property="og:image" content="/ogimage.png" />
				<meta property="og:image:secure_url" content="/ogimage.png" />
				<meta name="twitter:image" content="/ogimage.png" />
				<meta name="twitter:image:src" content="/ogimage.png" />
				<meta
					property="og:description"
					content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
				/> */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
