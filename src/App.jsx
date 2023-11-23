import React from 'react'
import {Route,BrowserRouter,Routes}from 'react-router-dom';
import Home from './pages/Home '
import AllUsers from'./pages/AllUsers'
import NewUser from './pages/NewUser'
import NavBar from './layouts/NavBar';
import SingleUser from './pages/SingleUser';

const App = ()=> {

  return (
    <>
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route  index element={<Home/>}/>
      <Route path='/NewUser' element={<NewUser/>}/>
      <Route path='/AllUsers' element={<AllUsers/>}/>
      <Route  path ='/SingleUser/:userId' element={<SingleUser/>}/>


     </Routes>
     
     
     
     
     </BrowserRouter>
      </>
  )
}
export default App
