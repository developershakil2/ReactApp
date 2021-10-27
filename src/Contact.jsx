import React , {useState} from 'react';
import './about.css';
import './contact.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Footer from './Footer';
const Contact = ()=>{
    
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
     <a style={{color:'#4267B2',fontSize: '22px' }} target="_blank" className=" fb" href={fb}><FacebookIcon/></a>
        <a style={{color:' #8a3ab9 RGB: 138, 58, 185',  marginLeft:"5px" ,marginRight:"5px", fontSize:'22px'}} href={insta}><InstagramIcon/></a>
        <a style={{color:"#1DA1F2" ,fontSize:'22px' }} target="_blank" href={twit}><TwitterIcon/></a>
        
     </div>
     <div className="contact_number mt-5 d-flex">
     <i className="fas fa-phone"></i> <h4> +8801631636292</h4>
     </div>
     
     <div className="contact_number mt-5 d-flex">
     <i class="fas fa-map-marker-alt"></i>  <h4> magura, bangladesh</h4>
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

export default Contact;