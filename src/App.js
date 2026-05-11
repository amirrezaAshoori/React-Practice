// import { useState } from 'react';
import './App.css';
import User from './Components/Userr';
// import AllNote from './Components/AllNote';
// import Blog from './Components/Blog';
// import CleanChat from './Components/CleanChat';
// import Clock from './Components/Clock';
// import Counter from './Components/Counter';
// import Login from './Components/Login';
// import Post from './Components/Post';
// import authContext from './Utils/authContext';
// import Main1 from './Components/Main1';
// import { Navigate, Route, Routes } from 'react-router-dom'
// import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';
// import Home from './Pages/Home';
// import Products from './Pages/Products';
// import LoginRegister from './Pages/LoginRegister';
// import ProductDetail from './Pages/ProductDetail';
// import NotFound from './Pages/NotFound';


function App() {
  // const [token, setToken] = useState(null)
  // const handleToken = (tk) => {
  //   setToken(tk)
  // }
  return (
    <div>
      <p>learn ReAct</p>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>
      <button disabled>register</button>
      <span data-testid="mySp">Hello World</span>
      {/* <authContext.Provider value={{ token, handleToken }}>
        {token ? <Main1 /> : <Login />}
      </authContext.Provider> */}
      {/* <AllNote /> */}
      {/* <Counter/> */}
      {/* <CleanChat /> */}
      {/* <Clock /> */}
      {/* <Post /> */}
      {/* <Blog /> */}
      {/* 
      <Navbar />
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login-register' element={<LoginRegister />} />
          <Route path='/product-detail/:id' element={<ProductDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer /> */}
    </div>
  );
}

export default App;
