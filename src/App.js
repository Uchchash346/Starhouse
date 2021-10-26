import Home from './Home';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </ Router>

      {/* Home */}
      {/* Header */}
      {/* Banner */}
      {/* Cards */}
      {/* Footer */}
      {/* Search Page */}

    </div>
  );
}

export default App;

// 