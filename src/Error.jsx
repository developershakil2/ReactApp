import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
const Error = ()=>{;
    return(

        <>

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