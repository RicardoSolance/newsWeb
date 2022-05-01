import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom'
import Form from './Form';
import List from './List';
import ListNews from './ListNews';
class Main extends Component {
  
  render() {
    return (
      <main>
        <Routes>
          <Route element={<ListNews />} path='/' />
          <Route element={<Form/>} path='/forms' />
          <Route element={<List />} path='/list' />
        </Routes>
      </main>
    );
  }
}

export default Main;
