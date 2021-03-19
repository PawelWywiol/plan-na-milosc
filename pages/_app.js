import { globals } from "../styles";

function App({ Component, pageProps }) {
  return (
    <>
      {globals}
      <Component {...pageProps} />
    </>
  );
}

export default App;
