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
import './services.css';
import Footer from './Footer';
const Services = ()=>{
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








<div className="services">

<div className="heading_title">
  <div className="headin_tit">
  <h3>Services</h3>
  </div>
</div>


<div className="service_container  container row m-auto gx-lg-2">
<div className="col-12 col-md-6 col-lg-4  mt-md-4 mt-sm-4 mt-4  row">
 <div id="service_box" className="col-12 col-md-11 position-relative">
   <div className="ser_box_icon_pr">
     <div className="ser_box_icon_pa">
     <i className="fas fa-laptop-code"></i>
     </div>
   </div>
  
  <div className="service_des">
  <h4>front-end development</h4>
    <p>
      I'm providing front-end web development service 
      what i will do after your the order 
      i will get concept from you about your project 
      than i will start your work and I'm always ready to start work

    </p>
    <NavLink to="/contact">
     
<Button id="conBtn" style={{ width:'120px' , marginTop: "10px",background:"#15ff00",color:"#fff", fontWeight:"bold", fontSize:'18px'}} className="conBtn">
contact
<TelegramIcon style={{fontSize:'25px'}}/>
</Button>

    </NavLink>
  </div>
  
 </div>
</div>

<div className="col-12 col-md-6 col-lg-4  mt-md-4 mt-sm-4 mt-4  row">
 <div id="service_box" className="col-12 col-md-11 position-relative">
   <div className="ser_box_icon_pr">
     <div className="ser_box_icon_pa">
     <img width="70px" height="70px" src="./image/cc.png" alt="psd_lofo"/>
     </div>
   </div>
  
  <div className="service_des">
  <h4>front-end development</h4>
    <p>
      I'm providing front-end web development service 
      what i will do after your the order 
      i will get concept from you about your project 
      than i will start your work and I'm always ready to start work

    </p>
    <NavLink to="/contact">
     
<Button id="conBtn" style={{ width:'120px' , marginTop: "10px",background:"#15ff00",color:"#fff", fontWeight:"bold", fontSize:'18px'}} className="conBtn">
contact
<TelegramIcon style={{fontSize:'25px'}}/>
</Button>

    </NavLink>
  </div>
  
 </div>
</div>
<div className="col-12 col-md-6 col-lg-4  mt-md-4 mt-sm-4 mt-4  row">
 <div id="service_box" className="col-12 col-md-11 position-relative">
   <div className="ser_box_icon_pr">
     <div className="ser_box_icon_pa">
     <i className="fas fa-laptop-code"></i>
     </div>
   </div>
  
  <div className="service_des">
  <h4>front-end development</h4>
    <p>
      I'm providing front-end web development service 
      what i will do after your the order 
      i will get concept from you about your project 
      than i will start your work and I'm always ready to start work

    </p>
    <NavLink to="/contact">
     
<Button id="conBtn" style={{ width:'120px' , marginTop: "10px",background:"#15ff00",color:"#fff", fontWeight:"bold", fontSize:'18px'}} className="conBtn">
contact
<TelegramIcon style={{fontSize:'25px'}}/>
</Button>

    </NavLink>
  </div>
  
 </div>
</div>
</div>

</div>
<Footer/>
        </>
    )



}

export default Services;