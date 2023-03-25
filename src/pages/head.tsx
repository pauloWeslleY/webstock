import Head from "next/head";

interface HeadProps {
	title: string;
	description: string;
}

export default function HeadPage(props: HeadProps) {
	const { title, description } = props;

	return (
		<Head>
			<title>{`WebStock | ${title}`}</title>
			<meta name="description" content={description} />
		</Head>
	);
}
