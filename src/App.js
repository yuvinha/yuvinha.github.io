import React, { Fragment } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NotFound from 'components/NotFound';
import GlobalStyles from 'styles/Global';

const App = () => {
  const location = useLocation();

  return (
    <Fragment>
      <GlobalStyles />
      <Routes location={location} key={location.key}>
        <Route path='/' element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

export default App;
