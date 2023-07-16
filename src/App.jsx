import ScrollToTop from "@/base-components/scroll-to-top/Main";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./router";
import { Provider } from 'react-redux';
import {rStore} from "./store"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const { store, persistor } = rStore();
function App() {
  return (
    <Provider store = {store}>
    <RecoilRoot>
      <BrowserRouter>
        <Router />
        <ToastContainer />
        <ScrollToTop />
      </BrowserRouter>
    </RecoilRoot>
    </Provider>
  );
}

export default App;
