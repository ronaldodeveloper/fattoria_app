import './menu.scss';
import React, { useState, useRef } from 'react';

export const Menu= ()=>{

   const links= useRef(null)

    const [showMenu, setShowMenu]= useState(false);
    function toggleAtive(e) {
      setShowMenu(!showMenu)
      // Effect Icons
      const btnEffectTop= document.querySelector('.menu_icon_top')
      const btnEffectCenter= document.querySelector('.menu_icon_center')
      const btnEffectBotton= document.querySelector('.menu_icon_botton')
      const logo= document.querySelector('.logo')

      btnEffectTop.classList.toggle('ActiveEffectIconTop')
      btnEffectCenter.classList.toggle('ActiveEffectIconCenter')
      btnEffectBotton.classList.toggle('ActiveEffectIconBotton')
      logo.classList.toggle('logoOF')

      // links.current.addEventListener('click',()=>{
      //     console.log('hello!')
      // })

    }

    // const removeLink = (e)=>{
    //    console.log('removeLink')
    // }
    
  
  let MenuToggle;
   if (showMenu){
      MenuToggle = 
        <ul className="box_menu_list">
          <li className="menu_list">
            <a href="#servives" className="menu_list_items" ref={links}>Serviços</a></li>
          <li className="menu_list">
            <a href="#diferenciais" className="menu_list_items" >Diferenciais</a></li>
          <li className="menu_list">
            <a href="#personas" className="menu_list_items" >Personas</a></li>
        </ul>;
   }
        
   const MenuHorizontal= 
        <ul className="box_menuHorizontal_list">
          <li className="menuHorizontal_list">
            <a href="#services" className="menuHorizontal_list_items">Serviços</a></li>
          <li className="menuHorizontal_list">
            <a href="#diferenciais" className="menuHorizontal_list_items">Diferenciais</a></li>
          <li className="menuHorizontal_list">
            <a href="#personas" className="menuHorizontal_list_items">Personas</a></li>
        </ul>;
  
     return (
         <>
         <header className="container_header">
          <section className="menu_center">
           <h2 className="logo">T.A</h2> 
           <nav className="navagation">
             {MenuHorizontal}
             <div className="box_menu_icon" onClick={toggleAtive}>
               <div className="menu_icon menu_icon_top"></div>
               <div className="menu_icon menu_icon_center"></div>
               <div className="menu_icon menu_icon_botton"></div>
             </div>
             {MenuToggle}
           </nav>
           </section>
         </header>
         </>
     )
  }

