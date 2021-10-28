import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import TelegramIcon from '@mui/icons-material/Telegram';
import MyComponent from './MyComponent';
import './about.css';
import "./index.css";
import Footer from './Footer';
const About = ()=>{
  const open = '0%';
  const close = '-9999%';
 const [navs , setNavs] = useState(close);

  
  const navOpen = ()=>{
    setNavs(open)

  }

  const navClose = ()=>{
    setNavs(close)

  }
    return(
        <>
        <nav className="nav_bar" >
     <div className="container" id="nav_con">
     
    <div className="logo">
    <h2>shakil <span>hossain</span></h2>
    </div>
  <ul  id="navMenu" style={{left: navs}}>
    <li >
      <NavLink className='ankor'  to="/">Home </NavLink>
    </li>
    <li >
      <NavLink className='ankor'  to="/services">services </NavLink>
    </li>
    <li >
      <NavLink className='ankor'  to="/about">about</NavLink>
    </li>
    <li >
      <NavLink className='ankor'  to="/portfolio">portfolio </NavLink>
    </li>
    <li >
      <NavLink className='ankor'  to="/contact">contact </NavLink>
    </li>
    <li >
      <NavLink className='ankor'  to="/more">more</NavLink>
    </li>
   <div className="nav_close">
    <Button onClick={navClose}>
      <CloseIcon style={{color:'#fff', fontWeight:'bold'}}/>
    </Button>
   </div>
  </ul>
       

       <div className="social_media">
        <NavLink style={{color:'#4267B2', }} className=" fb" to='/'><FacebookIcon/></NavLink>
        <NavLink style={{color:' #8a3ab9 RGB: 138, 58, 185',}} to="/"><InstagramIcon/></NavLink>
        <NavLink style={{color:"#1DA1F2" , }} to="/"><TwitterIcon/></NavLink>
        <NavLink style={{color:"#171515" ,}} to='/'><GitHubIcon/></NavLink>


       </div>

        <div className="nav_open">
          <Button onClick={navOpen}>
            <ClearAllIcon style={{color:"#fff"}}/>
          </Button>
        </div>
     </div>
</nav>

<div className="about">

<div className="heading_title">
  <div className="headin_tit">
  <h3>about</h3>
  </div>
</div>







<div className="container  home_wrapper">
<div className="home_left">
<div className="wrapper_tow">

<h2>I'm a <span><MyComponent/></span></h2>
  
<p>
hi 

this is shakil hossain I'm a front-end web developer 
i have good experience with front-end web develpment
I'm familier with following technologes 
Html Css Javascript Bootstrap React.js 
i have also work experience with 50+ project i had completed perfectly
my comunication also well and friendly, 
after complete your project i will support you 24/7 without any cost
</p>


<NavLink to="/contact">
<Button id="conBtn" style={{ width:'120px' , marginTop: "10px",background:"#15ff00",color:"#fff", fontWeight:"bold", fontSize:'18px'}} className="conBtn">
contact
<TelegramIcon style={{fontSize:'25px'}}/>
</Button>
</NavLink>
</div>

</div>




<div   id="about_img" className="home_image ">

  
<img  src="image/shakil.jpg" alt="myphoto"/>


</div>

</div>

</div>
<Footer/>
</>  

  )}

export default About ;
