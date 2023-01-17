
///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

// const allLinks = document.querySelectorAll("a:link");

// // allLinks.forEach(function (link) {
// //   link.addEventListener("click", function (e) {
// //     e.preventDefault();
// //     const href = link.getAttribute("href");

// //     // Scroll back to top
// //     if (href === "#")
// //       window.scrollTo({
// //         top: 0,
// //         behavior: "smooth",
// //       });

// //     // Scroll to other links
// //     if (href !== "#" && href.startsWith("#")) {
// //       const sectionEl = document.querySelector(href);
// //       sectionEl.scrollIntoView({ behavior: "smooth" });
// //     }

// //     // Close mobile naviagtion
// //     if (link.classList.contains("main-nav-link"))
// //       headerEl.classList.toggle("nav-open");
// //   });
// // });

// ///////////////////////////////////////////////////////////
// // Sticky navigation

// const sectionHeroEl = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();

 //client side code
    


 import axios from 'axios';
 import Noty from 'noty';

 let addToCart=document.querySelectorAll('.add-to-cart')
 let deleteCart=document.querySelectorAll('.deleteCart')
 let cartCounter=document.querySelector('#cartCounter')

 let addPlan=document.querySelectorAll('.addPlan')
 function updateCart(recipe){
   
   axios.post('/update-cart',recipe).then(res=>{

    // deleteCart.forEach((btn)=>{
    //   btn.addEventListener('click',(e)=>{
    //     // let recipe=JSON.parse(btn.dataset.recipe)
    //     // deletecart(recipe)
    //     console.log('helloooo')
    //   })
    // })
    
     cartCounter.innerText=res.data.totalQty
     new Noty({
      type:'success',
      timeout:1000,
      text:'Item added to cart',
      
     }).show();
   }).catch(err=>{
    new Noty({
      type:'error',
      timeout:1000,
      text:'Something went wrong',
      // progressBar:false
      layout:'bottomLeft'
     }).show();

   })



 }

addToCart.forEach((btn)=>{
 btn.addEventListener('click',(e)=>{
   let recipe=JSON.parse(btn.dataset.recipe)
   updateCart(recipe)
   console.log(recipe)
 })
})



let input=document.querySelectorAll('input');
input.forEach((btn)=>{
   btn.addEventListener('click',(e)=>{
    let recipe=JSON.parse(btn.dataset.recipe)
      for(let i=0;i<recipe.length;i++){
    let rates=document.querySelectorAll('.checkbox');
    rates.forEach((checkboxes) => {
      if (checkboxes.checked) {
         if(checkboxes.value!=recipe[i].type){
          var ele=recipe[i]._id;
          var x = document.getElementById(ele);
            x.style.display = "none";
         } 
      }
  });
      } 
   })
  })

