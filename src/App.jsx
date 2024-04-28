import HomePage from './layout/home.layout';
import StorePage from './pages/store';
import MyCartPage from './pages/cart';
import MyOrderPage from './pages/order';
import ProductPage from './pages/products';

// packages
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools></ReactQueryDevtools>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="store" element={<StorePage />}>
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
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
