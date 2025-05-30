import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/Context'
import firebase from './firebase/config';
import Context from './store/Context';
// import { UserProvider } from './store/UserContext';
ReactDOM.render(
    <FirebaseContext.Provider value={{firebase}}>
        <Context>
         <App />
      
        </Context>
      
    </FirebaseContext.Provider>,
 document.getElementById('root'));
