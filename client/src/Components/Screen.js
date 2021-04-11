import {BrowserRouter as Router, withRouter } from 'react-router-dom';
import AuthRouterComponent from '../AuthRouter.js';
import RouterComponent from '../Router'
import Chatbot from './Chatbot.js';
import Footer from './Footer'
import Header from './Header'

function Screen() {
  return (
      <Router>
      {/* <Header/> */}
      {/* <AuthRouterComponent /> */}
      <RouterComponent />
      {/* <Footer /> */}
     <div style={{position:'fixed',bottom:0,right:0,zIndex:999}}>
     <Chatbot />
      </div>
      </Router>
  );
}

export default Screen;
