import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

function RouterApp() {

  return(
    <BrowserRouter>
      <div>
        <h1>React Router</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
  
}
ReactDOM.render(<RouterApp/>,document.getElementById('root'));
