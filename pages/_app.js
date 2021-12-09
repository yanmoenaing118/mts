import "../styles/globals.css";

import { Provider } from "react-redux";
import store from "./../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div suppressHydrationWarning>
        {typeof window === "undefined" ? null : <Component {...pageProps} />}
      </div>
    </Provider>
  );
}

export default MyApp;
