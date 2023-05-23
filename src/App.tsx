import "./App.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import News from "./screens/News";
import Main from "./navigation/Main";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
