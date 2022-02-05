import Navbar from "./Nabar"
import NewsAddForm from "./NewsAddForm";
import NewsFilter from "./NewsFilter";
import NewsList from "./NewsList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <NewsList />
        <div className="content__page">
          <NewsAddForm />
          <NewsFilter />
        </div>
      </div>
    </div>
  );
}

export default App;
