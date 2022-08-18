import CartContainer from "./containers/CartContainer";
import ProductsContainer from "./containers/ProductsContainer";

function App() {
  return (
    <div className="container">
      <ProductsContainer/>
      <CartContainer/>
    </div>
  );
}

export default App;
