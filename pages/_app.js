import ua from "universal-analytics";

import "../styles/styles.scss";
var visitor = ua("G-8FRPKV3DCJ");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
