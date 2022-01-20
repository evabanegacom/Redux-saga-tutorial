import React, { useEffect } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { getProducts } from './redux/actions/products';
import './App.css';
import SignUp from './/components/signup';
import SignIn from './components/signIn';
import Home from './components/home';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';

const App:React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootStateOrAny) => state.products);
  const loading = useSelector((state: RootStateOrAny) => state.products.loading);
  const error = useSelector((state: RootStateOrAny) => state.products.error);
  const user = useSelector((state: RootStateOrAny) => state.loggedInUser);

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  // console.log('user', user)
  return (
      <BrowserRouter>
    <div>
      <Routes>
        <Route path="newitem" element={<Home />} />
      </Routes>
      { user?.isAuthenticated !==false ?  <h1>{user?.isAuthenticated?.user?.name}</h1> : <p>Welcome Guest</p> }
      {products.loading && <p>Loading...</p>}
      {products.length === 0 && !loading && <p>No products available!</p>}
      {error && !loading && <p>{error}</p>}
      {products.products.length > 0 && products?.products.map((product:any) => (
        <div key={product.id}>
          <p>{product.name}</p>
          {/* <img src={product.avatar.url} alt={product.name}/> */}
        </div>
      ))}
      <SignUp />
      <br />
      <br />
      <br />
      <br />
      <SignIn text='SignIn'/>
    </div>
      </BrowserRouter>
  );
}

export default App;
