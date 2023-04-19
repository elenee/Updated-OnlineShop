import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import {loader as productsLoader} from './pages/ProductsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'products',
        element: <ProductsPage />,
        loader: productsLoader,
      }
    ]
  }
])
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
