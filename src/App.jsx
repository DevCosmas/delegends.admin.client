/* eslint-disable no-unused-vars */
import HomePage from './layout/home.layout';
import StorePage from './pages/store';
import MyCartPage from './pages/cart';
import MyOrderPage from './pages/order';
import ProductPage from './pages/products';
import SignUpPage from './pages/sign.up';
import LoginPage from './pages/login';
import SignUpAdminPage from './pages/signup.admin';
import LoginAdminPage from './pages/admin';
import SendResetTokenPage from './pages/send.reset.token';
import SetNewPasswordPage from './pages/forgotten.password';
import ErrorPage from './component/404.errorr';

// packages
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import NewDistPage from './pages/newDist';
import UserSetting from './pages/user.setting';
import ProtectedRoute from './pages/protected.route';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const [myCartItems, setMyCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setMyCartItems(storedCart);
  }, [myCartItems]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="store"
            element={
              <ProtectedRoute>
                <StorePage cartNum={myCartItems.length} />
              </ProtectedRoute>
            }
          >
            <Route index element={<ProductPage></ProductPage>} />
            <Route path="user_setting" element={<UserSetting />} />
            <Route
              path="my_cart"
              element={<MyCartPage myCart={myCartItems}></MyCartPage>}
            />
            <Route path="my_order" element={<MyOrderPage></MyOrderPage>} />
          </Route>

          <Route path="signUp" element={<SignUpPage />} />

          <Route path="partner" element={<NewDistPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="login_admin" element={<LoginAdminPage />} />
          <Route path="signUp_admin" element={<SignUpAdminPage />} />
          <Route path="reset_token" element={<SendResetTokenPage />} />
          <Route path="set_new_password" element={<SetNewPasswordPage />} />
          <Route path="*" element={<ErrorPage></ErrorPage>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
