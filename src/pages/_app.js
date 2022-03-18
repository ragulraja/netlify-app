import { ScipcartProvider } from "@hooks/use-snipcart";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ScipcartProvider>
      <Component {...pageProps} />
    </ScipcartProvider>
  );
}

export default MyApp;
