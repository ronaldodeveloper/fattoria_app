import './menu.scss';
import React, { useState } from 'react';

export const Menu= ()=>{

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
    }
  
  let MenuToggle;
   if (showMenu){
      MenuToggle = 
        <ul className="box_menu_list">
          <li className="menu_list">
            <a href="" className="menu_list_items">Serviços</a></li>
          <li className="menu_list">
            <a href="" className="menu_list_items">Diferenciais</a></li>
          <li className="menu_list">
            <a href="" className="menu_list_items">Personas</a></li>
        </ul>;
   }
        
   const MenuHorizontal= 
        <ul className="box_menuHorizontal_list">
          <li className="menuHorizontal_list">
            <a href="" className="menuHorizontal_list_items">Serviços</a></li>
          <li className="menuHorizontal_list">
            <a href="" className="menuHorizontal_list_items">Diferenciais</a></li>
          <li className="menuHorizontal_list">
            <a href="" className="menuHorizontal_list_items">Personas</a></li>
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




//()=> {
//     return (
//         <>
//            <header>
//             <section>
//                <h2>T.A</h2>
//                <ul>
//                    <li><a href="#">Serviços</a></li>
//                    <li><a href="#">Diferenciais</a></li>
//                    <li><a href="#">Personas</a></li>
//                </ul>
//              </section>
//            </header>
//         </>
//     )
// }