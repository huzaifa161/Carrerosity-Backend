import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import Screen from './Components/Screen';

export const AuthContext = createContext({ auth: null});
const App = () => {
  
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null
  });
  
  useEffect(() => {
    const loginUser = localStorage.getItem('loginUser');
    if (loginUser) {
      const payload = JSON.parse(loginUser);
      if (payload?.expiresIn > Date.now()) {
        changeAuth(payload);
        
      }
    }
  },[])
  const changeAuth = (user) => {
    if (user) localStorage.setItem('loginUser', JSON.stringify(user));
    else localStorage.removeItem('loginUser');
    setAuth({
      user,
      isAuthenticated: !!user
    });
  }
  
  return (
    <AuthContext.Provider value={{ auth, changeAuth }}>
      <Screen />
    </AuthContext.Provider>
  );
}

export default App;
