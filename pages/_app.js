import ua from "universal-analytics";

import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  var visitor = ua("G-8FRPKV3DCJ");

  return <Component {...pageProps} />;
}

export default MyApp;
