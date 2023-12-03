import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import HourlySalary from '../components/HourlySalary';
import Header from "../components/Header"

const MainContainer = () => {

  return (
    <>
    <Header/>
      <Routes>
      <Route path="/" element={<Home/> } />
      <Route path='/hourly' element={<HourlySalary/>}/>
      </Routes>
    </>
  );
};

export default MainContainer;
