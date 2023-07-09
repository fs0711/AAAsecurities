import ScrollToTop from "@/base-components/scroll-to-top/Main";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./router";
import { Provider } from 'react-redux';
import {rStore} from "./store"


const { store, persistor } = rStore();
function App() {
  return (
    <Provider store = {store}>
    <RecoilRoot>
      <BrowserRouter>
        <Router />
        <ScrollToTop />
      </BrowserRouter>
    </RecoilRoot>
    </Provider>
  );
}

export default App;
