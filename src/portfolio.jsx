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
import Footer from './Footer';
import './portfolio.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Portfolio = ()=>{
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



<div  className="portfolio">


<div className="heading_title">
  <div className="headin_tit">
  <h3>Portfolio</h3>
  </div>
</div>


<div style={{height:"100vh", marginTop: "17px",
}} className="portfolio_wrapper">
    
 <div id="portfolio" className="portfolio_container container-fluid row m-auto">
       <AwesomeSlider>
          <div style={{background:'none'}} className="row slid">
          <div className="col-12">
          <div className="portfolio_img">
          <img src="./image/p1.jpg" alt="reviewimg"/>

          </div>
          <div className="portfolio_des">
           <h3>front-end web development</h3>
           <p>using html css bootstrap and React.js</p>
<NavLink to='/'>
<Button id="conBtn" style={{ width:'120px' , marginTop: "10px",background:"#15ff00",color:"#fff", fontWeight:"bold", fontSize:'18px'}} className="conBtn">
visit 
</Button>
</NavLink>
          </div>

          </div>  
          </div>


          <div style={{background:'none'}} className="row slid">
          <div className="col-12">
          <div className="portfolio_img">
          <img src="./image/p2.jpg" alt="reviewimg"/>

          </div>
          <div className="portfolio_des">
           <h3>front-end web development</h3>
           <p>using html css bootstrap and React.js</p>
<NavLink to='/'>
<Button id="conBtn" style={{ width:'120px' , marginTop: "10px",background:"#15ff00",color:"#fff", fontWeight:"bold", fontSize:'18px'}} className="conBtn">
visit 
</Button>
</NavLink>
          </div>

          </div>  
          </div>


          <div style={{background:'none'}} className="row slid">
          <div className="col-12">
          <div className="portfolio_img">
          <img src="./image/p3.jpg" alt="reviewimg"/>

          </div>
          <div className="portfolio_des">
           <h3>front-end web development</h3>
           <p>using html css bootstrap and React.js</p>
<NavLink to='/'>
<Button id="conBtn" style={{ width:'120px' , marginTop: "10px",background:"#15ff00",color:"#fff", fontWeight:"bold", fontSize:'18px'}} className="conBtn">
visit 
</Button>
</NavLink>
          </div>

          </div>  
          </div>


          <div style={{background:'none'}} className="row slid">
          <div className="col-12">
          <div className="portfolio_img">
          <img src="./image/p4.jpg" alt="reviewimg"/>

          </div>
          <div className="portfolio_des">
           <h3>front-end web development</h3>
           <p>using html css bootstrap and React.js</p>
<NavLink to='/'>
<Button id="conBtn" style={{ width:'120px' , marginTop: "10px",background:"#15ff00",color:"#fff", fontWeight:"bold", fontSize:'18px'}} className="conBtn">
visit 
</Button>
</NavLink>
          </div>



          </div>  
          </div>

          <div style={{background:'none'}} className="row slid">
          <div className="col-12">
          <div className="portfolio_img">
          <img src="./image/p5.jpg" alt="reviewimg"/>

          </div>
          <div className="portfolio_des">
           <h3>front-end web development</h3>
           <p>using html css bootstrap and React.js</p>
<NavLink to='/'>
<Button id="conBtn" style={{ width:'120px' , marginTop: "10px",background:"#15ff00",color:"#fff", fontWeight:"bold", fontSize:'18px'}} className="conBtn">
visit 
</Button>
</NavLink>
          </div>

          </div>  
          </div>



          <div style={{background:'none'}} className="row slid">
          <div className="col-12">
          <div className="portfolio_img">
          <img src="./image/p6.jpg" alt="reviewimg"/>

          </div>
          <div className="portfolio_des">
           <h3>front-end web development</h3>
           <p>using html css bootstrap and React.js</p>
<NavLink to='/'>
<Button id="conBtn" style={{ width:'120px' , marginTop: "10px",background:"#15ff00",color:"#fff", fontWeight:"bold", fontSize:'18px'}} className="conBtn">
visit 
</Button>
</NavLink>
          </div>

          </div>  
          </div>



          <div style={{background:'none'}} className="row slid">
          <div className="col-12">
          <div className="portfolio_img">
          <img src="./image/p7.jpg" alt="reviewimg"/>

          </div>
          <div className="portfolio_des">
           <h3>front-end web development</h3>
           <p>using html css bootstrap and React.js</p>
<NavLink to='/'>
<Button id="conBtn" style={{ width:'120px' , marginTop: "10px",background:"#15ff00",color:"#fff", fontWeight:"bold", fontSize:'18px'}} className="conBtn">
visit 
</Button>
</NavLink>
          </div>

          </div>  
          </div>



          <div style={{background:'none'}} className="row slid">
          <div className="col-12">
          <div className="portfolio_img">
          <img src="./image/p8.jpg" alt="reviewimg"/>

          </div>
          <div className="portfolio_des">
           <h3>front-end web development</h3>
           <p>using html css bootstrap and React.js</p>
<NavLink to='/'>
<Button id="conBtn" style={{ width:'120px' , marginTop: "10px",background:"#15ff00",color:"#fff", fontWeight:"bold", fontSize:'18px'}} className="conBtn">
visit 
</Button>
</NavLink>
          </div>

          </div>  
          </div>



          <div style={{background:'none'}} className="row slid">
          <div className="col-12">
          <div className="portfolio_img">
          <img src="./image/p9.jpg" alt="reviewimg"/>

          </div>
          <div className="portfolio_des">
           <h3>front-end web development</h3>
           <p>using html css bootstrap and React.js</p>
<NavLink to='/'>
<Button id="conBtn" style={{ width:'120px' , marginTop: "10px",background:"#15ff00",color:"#fff", fontWeight:"bold", fontSize:'18px'}} className="conBtn">
visit 
</Button>
</NavLink>
          </div>

          </div>  
          </div>

        </AwesomeSlider>

 </div>
</div>

</div>

<Footer/>

</>
)
    }



    export default Portfolio ;




    // const slider = (
    //     <AwesomeSlider>
    //       <div>1</div>
    //       <div>2</div>
    //       <div>3</div>
    //       <div>4</div>
    //     </AwesomeSlider>
    //   );









