import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Header from "../components/Header/Header";
import Container from "@components/Container";
import styles from "../styles/Home.module.scss";
import Button from "@components/Button";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

export default function Home({ productsdata }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.css"
        />
      </Head>
      <Header />
      <main>
        <Container>
          <h1>Related Products</h1>
          <ul className={styles.products}>
            {productsdata.map((product) => (
              // eslint-disable-next-line react/jsx-key
              <li key={product.id}>
                <Image
                  src={`/images/${product.image}.jpg`}
                  alt={`Card of ${product.title}`}
                  width={600}
                  height={600}
                />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <p>
                  <button
                    className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-url="/"
                    data-item-description=""
                    data-item-image={product.Image}
                    data-item-name={product.title}
                  >
                    Add to Cart
                  </button>
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      <Script
        async
        src="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js"
      />
      <div
        hidden
        id="snipcart"
        data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
      />
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://e-commerce-nextjs.hasura.app/v1/graphql",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret":
        "18i97XDhSr4z3PX3hb0gwsJJNtZbPsZ81p1PowYUoo3adoy1UqCW152U3CMhQ8y9",
    },
    cache: new InMemoryCache(),
  });

  const response = await client.query({
    query: gql`
      query Product {
        product {
          id
          image
          price
          title
        }
      }
    `,
  });

  let productsdata = response.data.product;

  return {
    props: {
      productsdata,
    },
  };
}
