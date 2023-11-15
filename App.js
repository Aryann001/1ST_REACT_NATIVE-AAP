import Main from "./Main";
import { Provider } from "react-redux";
import store from "./redux/store";

export const server = "https://onest-react-native-api.onrender.com/api/v1";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
