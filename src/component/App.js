import React , {useEffect} from 'react';
import { Route } from 'react-router-dom';
import Page from '../pages/Page'
import './style.css'
function App() {
  const link = document.location.href; 





  return (
    <>
      <Route path="/" exact component={Page} />
      <Route path="/:navigation" exact component={Page} />
      <Route path="/:navigation/:sub" exact component={Page} />
    </>
  );
}

export default App;
