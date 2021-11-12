import React, {useState} from 'react';
import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import {NavLink} from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = ()=>{


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
    
   })
   e.preventDefault();
 const {fullname , email, message} = userData;
   const res = fetch("https://contactformysite-default-rtdb.firebaseio.com/subscribe.json",
   {
     method: "POST",
     headers : {
       'Content-Type' : 'application/json'
     },
    body : JSON.stringify({
    fullname ,
    email,
    
 
    })
 
   }
   )
 if(res){
   alert("thanks for subscribe me")
 }else{
   alert("I'm sorry your subscibe has been fail please check your internet connecont")
 }
 
 }
 
 
const fb = 'https://www.facebook.com/profile.php?id=100073795313347';
const twit = 'https://twitter.com/info4shakil';
const insta = 'https://instagram.com/info2shakil';
const github = 'https://github.com/developershakil2';
const link = 'https://linkedin.com/in/developershakil';

    return(

        <>
        <footer style={{  marginBottom:"-25px",  background: "#111" , padding: '50px 0px'}} className="footer text-light  ">
        
        <div className="container row m-auto">
        <div className="col-12 col-md-6 col-lg-4 ">
        <h3 style={{color:'#15ff00'}} className="text-left ">Links</h3>
          <div className="footer_social">
        <a style={{color:'#4267B2', }} target="_blank" className=" fb" href={fb}><FacebookIcon/></a>
        <a style={{color:' #8a3ab9 RGB: 138, 58, 185',}} target="_blank" href={insta}><InstagramIcon/></a>
        <a style={{color:"#1DA1F2" , }} target="_blank" href={twit}><TwitterIcon/></a>
        <a style={{color:"#fff" ,}} target="_blank" href={github}><GitHubIcon/></a>
        <a style={{color:"#1DA1F2", fontSize:'22px' }} href={link}><LinkedInIcon/></a>
          </div>

          <div className="footer_nav">
          <ul className='footer_ul'>
          <li >
      <NavLink className='ankor'  to="/">Home  </NavLink>
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
          </ul>

          </div>

        </div>

        <div className="col-12 col-md-6 col-lg-4 ">
        <h3 style={{color:'#15ff00'}} className="text-left ">portfolio Links</h3>
        <ul className='footer_ul'>
          <li >
      <NavLink className='ankor'  to="/">intorior website  </NavLink>
    </li>
    <li >
      <NavLink className='ankor'  to="/services">hostpital website  </NavLink>
    </li>
    <li >
      <NavLink className='ankor'  to="/about">e-commarce website</NavLink>
    </li>
    <li >
      <NavLink className='ankor'  to="/portfolio">travel agency website </NavLink>
    </li>
    <li >
      <NavLink className='ankor'  to="/contact">psd to html website </NavLink>
    </li>
    <li >
      <NavLink className='ankor'  to="/more">construction website</NavLink>
    </li>
          </ul>


        </div>

        <div className="col-12 col-md-6 col-lg-4 ">
        <h3 style={{color:'#15ff00'}} className="text-left ">subscibe me</h3>
        <div className="subscribe">
        <form method="POST">
     <input onChange={dataPass} name="fullname" value={userData.fullname} className="form-control" type="text" placeholder="enter your full name"/>
     <input onChange={dataPass}  name='email'  value={userData.email}    className="form-control mt-4" type="email" placeholder="enter a valid email"/>
     <input onClick={submitData} id="submit" type="submit" value="submit"/>


     </form>
        </div>


        </div>

        </div>

        <div className="container row">

        <div className="col-12 col-md-6 col-lg-6 text-right text-light mt-4">
           <div className="footer_right  ">
           <NavLink className="nav-link text-light" to="/">
            Disclaimer
           </NavLink>
           
           <NavLink className="nav-link text-light" to="/">
             Terms And Condition
           </NavLink>

           <NavLink className="nav-link text-light" to="/">
           privacy and policy
           </NavLink>
           <NavLink className="nav-link text-light" to="/">
            sitemap
           </NavLink>
           
           </div>

        </div>
        <div className="col-12 col-md-6 col-lg-6 text-start text-md-center text-lg-end text-light mt-4">
        &copy; all right reserved by shakil hossain 

        </div>
        </div>
        </footer>

        </>
    )


}

export default Footer;