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
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Footer from './Footer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Home = ()=>{
  const open = '0%';
  const close = '-9999%';
 const [navs , setNavs] = useState(close);

  
  const navOpen = ()=>{
    setNavs(open)

  }

  const navClose = ()=>{
    setNavs(close)

  }


  
 const [userData , setUserdata] = useState({
  fullname : "",
  email : "",
  message : "",
})


let name, value;
 const dataPass = (event)=>{
   name = event.target.name;
   value = event.target.value;

    setUserdata({...userData, [name]: value,})
 }

const submitData = (e) =>{
 setUserdata({
   fullname : "",
   email : "",
   message : "",
 })
 e.preventDefault();
const {fullname , email, message} = userData;
 const res = fetch("https://contactformysite-default-rtdb.firebaseio.com/userData.json",
 {
   method: "POST",
   headers : {
     'Content-Type' : 'application/json'
   },
  body : JSON.stringify({
  fullname ,
  email,
  message,

  })

 }
 )
if(res){
 alert("thanks for contact")
}else{
 alert("I'm sorry your messege not sent please check your internet connecont")
}

}
const fb = 'https://www.facebook.com/profile.php?id=100073795313347';
const twit = 'https://twitter.com/info4shakil';
const insta = 'https://instagram.com/info2shakil';
const github = 'https://github.com/developershakil2';
const link = 'https://linkedin.com/in/developershakil';
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


<div className='home '>
<div className="container  home_wrapper">
<div className="home_left">
<div className="wrapper_tow">

<h2>Hi, I'm Shakil Hossain </h2>

  
<p>

hi there. this is shakil hossain I'm a front-end web developer
i have experience more than 4 years with React.js

</p>

<NavLink to='/contact'>
<Button id="conBtn" style={{ width:'120px' , marginTop: "10px",background:"#15ff00",color:"#fff", fontWeight:"bold", fontSize:'18px'}} className="conBtn">
contact
<TelegramIcon style={{fontSize:'25px'}}/>
</Button>
</NavLink>
</div>

</div>




<div className="home_image">
<img  src="image/shakil1.jpg" alt="myphoto"/>

</div>
</div>
</div>
      














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
  <h4>Psd To Html </h4>
    <p>
     i can convert your psd file into Html
      what i will do after your the order 
      i will need only your psd file from you about your project 
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
     <i className="fas fa-cog"></i>
     </div>
   </div>
  
  <div className="service_des">
  <h4>Bug Fixing</h4>
    <p>
     i can fix your css and Javascript bugs i have good experience 
     of css and Javascript so if you are facing any trouble with your website
     so i can help you to fix your bug
     
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


















    
      <div className="about">

<div className="heading_title">
  <div className="headin_tit">
  <h3>about</h3>
  </div>
</div>

<div className="container  home_wrapper">
<div className="home_left">
<div className="wrapper_tow">

<h2>I'm a front-end web developer </h2>

  
<p>
hi 

this is shakil hossain I'm a front-end web developer 
i have very good experience of front-end web develpment
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




<div id="about_img" className="home_image">
<img  src="image/shakil.jpg" alt="myphoto"/>

</div>

</div>

</div>


























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








<div className="contact">
        
        <div className="heading_title">
          <div className="headin_tit">
          <h3 >Contact</h3>
          </div>
        </div>
            <div id="form" className="container row m-auto mt-4">
           <div className="col-12 col-md-6 col-lg-6 text-light py-4" >
             <div className="contact_social d-flex ">
             <h2 style={{marginRight:'10px'}}>social media :</h2>
             <a style={{color:'#4267B2',fontSize: '22px' }} className=" fb" href={fb}><FacebookIcon/></a>
                <a style={{color:' #8a3ab9 RGB: 138, 58, 185', marginLeft:"5px" ,marginRight:"5px", fontSize:'22px'}} href={insta}><InstagramIcon/></a>
                <a style={{color:"#1DA1F2" ,fontSize:'22px' }} href={twit}><TwitterIcon/></a>
                <a style={{color:"#1DA1F245" ,fontSize:'22px' }} href={link}><LinkedInIcon/></a>
             </div>
             <div className="contact_number mt-5 d-flex">
             <i className="fas fa-phone"></i> <h4> +8801631636292</h4>
             </div>
             
             <div className="contact_number mt-5 d-flex">
             <i class="fas fa-map-marker-alt"></i><h4> magura, bangladesh</h4>
             </div>
        
             <div className="contact_number mt-5 d-flex">
             <i class="fas fa-envelope"></i>  <h4> dev4web.bd@gmail.com</h4>
             </div>
          
           </div>
        
        
        
           <div className="col-12 col-md-6 col-lg-6 mt-4" >
           <form method="POST">
     <input onChange={dataPass} name="fullname" value={userData.fullname} className="form-control" type="text" placeholder="enter your full name"/>
     <input onChange={dataPass}  name='email'  value={userData.email}    className="form-control mt-4" type="email" placeholder="enter a valid email"/>
     <textarea onChange={dataPass}  name="message" value={userData.message} style={{height:"200px", }} className="form-control mt-4" type="text" placeholder="write your mail..."/>
     <input onClick={submitData} id="submit" type="submit" value="submit"/>


     </form>

        
           </div>
        
            </div>
        
                   
        
                </div>
        
   <Footer/>
        </>
    )



}

export default Home;