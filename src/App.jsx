import React, { use, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'


const App = () => {
let [showContent , setShowContent] = useState(false)
useGSAP (() =>{
  const tl = gsap.timeline();

  tl.to(".vi-mask-group",{
    rotate : 10,
    duration: 2 ,
    ease : "power4.easeInOut",
    transformOrigin: "50% 50%"

  })
  .to(".vi-mask-group", {
    scale: 10 ,
    duration: 2,
    delay:-1.8,
    ease :"Expo.easeInOut",
    transformOrigin: "50% 50%",
    opacity: 0,
    onUpdate: function(){
      if(this.progress() >= .9){
        document.querySelector(".svg").remove();
        setShowContent(true);
        this.kill();
      }
    }

  });
});

 useGSAP(()=> {

  if (!showContent) return;

  gsap.to(".main",{
    scale : 1,
    rotate: 0,
    duration:2,
    delay : "-1",
    ease : "Expo.easeInOut",
  });

    gsap.to(".sky",{
    scale : 1.1,
    rotate: 0,
    duration:2,
    delay : "-.8",
    ease : "Expo.easeInOut",
  });

      gsap.to(".bg",{
    scale : 1.1,
    rotate: 0,
    duration:2,
    delay : "-.8",
    ease : "Expo.easeInOut",
  });

   gsap.to(".character",{
    scale : 1.2,
    x: "-50%",
    bottom : "-45%",
    rotate: 0,
    duration:2,
    delay : "-.8",
    ease : "Expo.easeInOut",
  });

  gsap.to(".text",{
    scale : 1,
    rotate: 0,
    duration:2,
    delay : "-.8",
    ease : "Expo.easeInOut",
  });





  const main = document.querySelector(".main");

  main?.addEventListener("mousemove", function(e){
    const xMove = (e.clientX / window.innerWidth - 0.5) *40;
    gsap.to(".main .text",{
      x: `${xMove * 0.4}%`,
    });
     gsap.to(".sky",{
      x: xMove,
    });
     gsap.to(".bg",{
      x: xMove,
    });
  });
 },[showContent]);


  return (
    <>
    <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
    <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
      <defs>
        <mask id='viMask'>
         <rect width="100%" height="100%" fill="black" /> 
          <g className='vi-mask-group'>
          <text
            x="50%"
            y="50%"
            fontSize="250"
            textAnchor='middle'
            fill='white'
            dominantBaseline="middle"
            fontFamily='Arial Black'
            >
              VI
            </text>
          </g>
        </mask>
      </defs>
      <image 
        href='./bg.png'
        width="100%"
        height="100%"
        preserveAspectRatio='xMidYMid slice'
        mask='url(#viMask)'/>

    </svg>
    </div>

    {showContent &&   ( 
      <div className='main w-full rotate-[-10deg] scale-[1.7]'>
      <div className='landing overflow-hidden relative w-full h-screen bg-black'>
      <div className='navbar absolute top-0 left-0 z-[10] w-full py-10 px-10' >
        <div className='logo flex gap-7'>
          <div className='lines flex flex-col gap-[7px]'>
            <div className='line w-15 h-2 bg-white'></div>
            <div className='line w-8 h-2 bg-white'></div>
            <div className='line w-5 h-2 bg-white'></div>

          </div>
          <h3 className='text-4xl  -mt-[9px]  leading-none  text-white'>Rockstar</h3>
        </div>
      </div>

      <div className='imagediv  relative overflow-hidden w-full h-screen'>

        <img className='absolute sky scale-[1.6] rotate-[-20deg] top-0 left-0  w-full h-full object-cover'
         src='./sky.png'
         />

        <img className='absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0  w-full h-full object-cover' 
        src='./bg.png'
        />

        <div className='text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]'>
            <h1 className='text-[12rem] leading-none -ml-40' >grand</h1>
            <h1 className='text-[12rem] leading-none ml-20' >theft</h1>
            <h1 className='text-[12rem] leading-none -ml-40' >auto</h1>
        </div>

        <img className='absolute  character -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]'
         src='./girlbg.png'
         />
      </div>

      <div className='btmbar text-white absolute bottom-0 left-0  w-full py-10 px-15 bg-gradient-to-t from-black to transparent '>
        <div className='flex gap-4 items-center' >
        <i className =" text-4xl ri-arrow-down-line"></i>
        <h3 className=' text-xl font-[Helvetica_Now_Display]'>Scroll Down </h3>
        </div>
        <img className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65px]' src="./ps5.png" />
      </div>
      </div>
      
      <div className='w-full h-screen flex items-center justify-center  bg-black'>
       <div className='cntnr flex text-white w-full h-[80%] '>
          <div className='limg w-1/2 relative h-full'>
            <img className='absolute scale-1.3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='./imag.png'/>
         </div>
          <div className='rg w-[30%] py-30'>
            <h1 className='text-8xl'>Still Running </h1>
            <h1 className='text-8xl'>Not Hunting </h1>
            <p className='mt-10 text-xl font-[Helvetica_Now_Display]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit alias modi ea ducimus ratione, atque repellendus iure accusamus cum facilis earum obcaecati reiciendis consectetur qui omnis placeat! Fugit cumque quo in dolor incidunt est.
            </p>
            <p className='mt-3 text-xl font-[Helvetica_Now_Display]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus ex rem doloremque, optio, sunt vitae itaque recusandae esse amet, natus cum facilis? Quae, dolorem totam! Earum quos quidem, minima error ullam nihil iure harum!
            </p>
            <button className='bg-yellow-500 mt-10 px-10 py-10 text-black  text-4xl'>Download Now</button>
          </div>
        </div>
      </div>
    </div>
    )}
    </> 
  )
}

export default App