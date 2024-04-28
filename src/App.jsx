import HomePage from './layout/home.layout';
import StorePage from './pages/store';
import MyCartPage from './pages/cart';
import MyOrderPage from './pages/order';
import ProductPage from './pages/products';

// packages
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="Store" element={<StorePage />}>
        <Route index element={<ProductPage></ProductPage>} />
        <Route path="my_cart" element={<MyCartPage></MyCartPage>} />
        <Route path="my_order" element={<MyOrderPage></MyOrderPage>} />
      </Route>

      {/* <Route
          path="signUp"
          element={<SignUpPage />}
        /> */}
      {/* <Route
          path="resetPassword"
          element={<ResetPasswordPage></ResetPasswordPage>}
        /> */}
      {/* <Route
          path="reset_token"
          element={<ForgottenPasswordPage></ForgottenPasswordPage>}
        /> */}
      {/* <Route
          path="login"
          element={<LoginPage />}
        /> */}
    </Routes>
  );
}

export default App;
