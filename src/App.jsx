import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Todo from "./page/Todo";

function App() {
  return (
    <div className="app">
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
