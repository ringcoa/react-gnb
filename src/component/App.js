import React from 'react';
import { Route } from 'react-router-dom';
import Page from '../pages/Page'
import './style.css'
function App() {
  return (
    <>
      <Route path="/" exact component={Page} />
      <Route path="/:navigation" exact component={Page} />
      <Route path="/:navigation/:sub" exact component={Page} />
    </>
  );
}

export default App;
