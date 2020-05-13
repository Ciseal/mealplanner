import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "../home/Home";
import Login from "../login/Login";
import Dashboard from "../dashboard/Dashboard";
import CreateRecipe from "../recipe/CreateRecipe";
import UpdateRecipe from "../recipe/UpdateRecipe";


const App = () => {

  return (
    <>
      <Switch>

        <Route
          path='/login'
          render={() => (
            <Login />
          )}
        />

        <Route
          path='/recipe/:ID/edit'
          render={() => (
            <UpdateRecipe />
          )}
        />

        <Route
          path='/recipe/create'
          render={() => (
            <CreateRecipe />
          )}
        />

        <Route
          path='/dashboard'
          render={() => (
            <Dashboard />
          )}
        />

        <Route
          path='/'
          render={() => (
            <Home />
          )}
        />

      </Switch>
    </>
  );
};

export default App;
