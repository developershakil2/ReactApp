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
import 'react-awesome-slider/dist/styles.css';
import './index.css'
import Footer from './Footer';
const Error = ()=>{;
    const open = '0%';
    const close = '-9999%';
   const [navs , setNavs] = useState(close);
  
    
    const navOpen = ()=>{
      setNavs(open)
  
    }
  
    const navClose = ()=>{
      setNavs(close)
  
    }
  
 
const fb = 'https://www.facebook.com/profile.php?id=100073795313347';
const twit = 'https://twitter.com/info4shakil';
const insta = 'https://instagram.com/info2shakil';
const github = 'https://github.com/developershakil2';
const link = 'https://linkedin.com/in/developershakil';
    return(

        <>


<nav   className="nav_bar" >
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
        <a style={{color:'#4267B2', }} target="-blank" className=" fb" href={fb}><FacebookIcon/></a>
        <a style={{color:' #8a3ab9 RGB: 138, 58, 185',}} target="_blank" href={insta}><InstagramIcon/></a>
        <a style={{color:"#1DA1F2" , }} target="_blank" href={twit}><TwitterIcon/></a>
        <a style={{color:"#171515" ,}} target="_blank" href={github}><GitHubIcon/></a>


       </div>

        <div className="nav_open">
          <Button onClick={navOpen}>
            <ClearAllIcon style={{color:"#fff"}}/>
          </Button>
        </div>
     </div>
</nav>









        <div style={{width:"100%",
         height:"80vh", background:'#888', display:"flex",
         justifyContent:"center",alignItems:'center',flexDirection:'column'
        }} className="error">
            
   <h1 style={{fontSize:'60px', }}>404 page not found </h1>
            <div style={{ marginTop:'20px',  justifyContent:'space-between', width:'200px',disply:'flex',}} className="errorBtn">
            <NavLink style={{borderRadius:'10px',marginTop:'10px',  marginRight:'5px',   fontSize:'20px', background:'#15ff00', color:'#111',padding:'7px'}} to='/'>back home</NavLink>
  
            <NavLink style={{marginTop:'10px',  borderRadius:'10px',marginLeft:'5px',  fontSize:'20px', background:'#15ff00', color:'#111',padding:'7px'}} to='/note'>visit note</NavLink>
      
            </div>
        </div>
<Footer/>
        </>
    )



}
export default Error;