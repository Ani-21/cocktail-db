import { BrowserRouter as Router } from "react-router-dom";
import CategoryNavbar from "./components/CategoryNavbar";
import Search from "./components/Search";
import Pages from "./pages/Pages";
function App() {
  return (
    <Router>
      <Search />
      <CategoryNavbar />
      <Pages />
    </Router>
  );
}

export default App;
