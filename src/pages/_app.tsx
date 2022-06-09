import type { AppProps } from "next/app";




import { Footer, Header } from "src/components";

import "../globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
