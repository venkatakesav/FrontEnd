import React, { useCallback , useState, useContext} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Auth from './user/pages/Auth';
import Profile from './user/pages/Profile';
import { useForm } from './shared/hooks/form-hook';
import { AuthContext } from './shared/context/auth-context';
import Posts from "./places/pages/Posts";
import MyUserPlaces from './places/pages/MyUserPlaces';
import Moderator from './places/pages/Moderator';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null)
  }, [])

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, userId: userId, login: login, logout: logout}}>
    <Router>
      <MainNavigation/>
      <main>
      <Routes>
        <Route path="/" exact element={<Users/>}></Route>
        <Route path="/:userId/places" exact element={<UserPlaces/>}></Route>
        <Route path="/:userId/places/my" exact element={<MyUserPlaces/>}></Route>
        <Route path="/:userId/profile" exact element={<Profile/>}></Route>
        <Route path="/places/new" exact element={<NewPlace/>}></Route>
        <Route path="/places/:placeId" exact element={<UpdatePlace/>}></Route>
        <Route path="/Auth" exact element={<Auth></Auth>}></Route>
        <Route path="/:placeId/Posts" exact element={<Posts></Posts>}></Route>
        <Route path="/:placeId/moderator" exact element={<Moderator></Moderator>}></Route>
      </Routes>
      </main>
    </Router>
  </AuthContext.Provider>
  );
};

export default App;
