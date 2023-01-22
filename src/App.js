import React from 'react';
import { useSelector } from 'react-redux';
import { MainRoutes } from './routes/MainRoutes';
import './App.css';

import { Template } from './components/MainConponents';
import {Header} from './components/partials/Header';
import {Footer} from './components/partials/Footer';

const App = (props) => {
  const user = useSelector((state) => state.user);

  return (
    <Template>
      <Header />
      <MainRoutes />
      <Footer />
    </Template>
  );
}

export default App;