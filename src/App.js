import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import homePage from './containers/HomePage/Loadable';
import { AddBook } from './containers/AddBook';
import { EditBook } from './containers/EditBook';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={homePage} />
        <Route exact path={'/add_Book'} component={AddBook} />
        <Route exact path={'/Edit_Book/:id'} component={EditBook} />
        {/* <Route component={Whoops404} />  */}
      </Switch>
    </Router>
  );
}

export default App;
