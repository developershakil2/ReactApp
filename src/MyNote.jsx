import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Page2 from './Page2';
import Page3 from './Page3';
import Footer from './Footer';
const Note = ()=>{

    const open = '0%';
    const close = '-9999%';
   const [navs , setNavs] = useState(close);
  
    
    const navOpen = ()=>{
      setNavs(open)
  
    }
  
    const navClose = ()=>{
      setNavs(close)
  
    }
    const [myArr, setMyArr] = useState([]);
    const reF = (myData)=>{
        setMyArr((old)=>{
            return [...old, myData]
        })  
    }
    const cleanRe =(id)=>{
       setMyArr((oldd)=>{
        return oldd.filter((el , index)=>{
            return id !== index
        })
       })
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














          <div style={{marginTop:'50px',marginBottom:'30px'}} className="inuf">
          <Page2 passF={reF}/>

          </div>
          
         <div className="card_align">
         {myArr.map((el, index)=>{
             return <Page3 cleanTr={cleanRe} id={index} key={index} title={el.title} content={el.content}/>

         })

         }
         
         </div>
         <Footer/>
        </>
    )


}
export default Note ;