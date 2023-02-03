import Head from "next/head";

interface HeadProps {
   title: string;
   description: string;
}

export default function HeadPage(props: HeadProps) {
   const { title, description } = props;

   return (
      <Head>
         <title>WebStock | {title}</title>
         <meta name="description" content={description} />
         {/* <meta property="og:image" content="/ogimage.png" />
         <meta property="og:image:secure_url" content="/ogimage.png" />
         <meta name="twitter:image" content="/ogimage.png" />
         <meta name="twitter:image:src" content="/ogimage.png" />
         <meta
            property="og:description"
            content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
         /> */}
      </Head>
   );
}
