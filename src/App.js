import Nav from "./components/nav";
import ProductsDashboard from "./components/ProductsDashboard";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ProductsDashboard} />
            <Route exact path="/products/new" component={NewProduct} />
            <Route exact path="/products/edit/:id" component={EditProduct} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
