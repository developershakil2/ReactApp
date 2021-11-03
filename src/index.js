import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import {BrowserRouter} from 'react-router-dom';
import './index.css';



ReactDOM.render(


  <>
  <BrowserRouter>
  
  
<MessengerCustomerChat
    pageId="111338594683340"
    appId="1276764266157847"
  />,

<App/>

</BrowserRouter>,



  </>,

  document.getElementById("root")


);