import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "react-loader-spinner";
import { store, persistor } from "./redux/store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate
        loading={
          <Loader type="Audio" color="#ee82ee" height={100} width={100} />
        }
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
