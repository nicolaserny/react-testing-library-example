import "./App.css";
import MyForm from "./components/MyForm";
import { TitleProvider } from "./providers/TitleProvider";

function App() {
  return (
    <TitleProvider value="My Form Title">
      <main>
        <MyForm />
      </main>
    </TitleProvider>
  );
}

export default App;
