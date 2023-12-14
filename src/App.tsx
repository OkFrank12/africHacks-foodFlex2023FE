import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { store } from "./global/store";
import { PersistGate } from "redux-persist/integration/react";
const App = () => {
  let persistor = persistStore(store);
  return (
    <>
      <div className="font-Regular">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={MainRouter} />
          </PersistGate>
        </Provider>
      </div>
    </>
  );
};

export default App;
