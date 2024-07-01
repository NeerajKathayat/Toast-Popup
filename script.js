const Toast_btn = document.querySelector("#Toast-btn")
const toast_msg = document.querySelector(".toast-msg")
const toast_cont = document.querySelector(".toast-cont")
const toast_cont2 = document.querySelector(".toast-cont-2")
const toast_cont3 = document.querySelector(".toast-cont-3")
const toast_cont4 = document.querySelector(".toast-cont-4")


const InfoInput = document.querySelector("#infoIn")

const position1=document.querySelector("#position1")
const position2=document.querySelector("#position2")

const toast_C = document.querySelectorAll(".toast-C")
const type = document.querySelector("#type")


const duration = document.querySelector("#duration")



Toast_btn.addEventListener("click",()=>{
    
      const element = document.createElement("div")
      element.classList.add("toast")
    

      if(type.value=="success"){
        element.innerHTML=`
        <i class="fa fa-check" aria-hidden="true"></i>
        <span>${InfoInput.value}</span>
        <i class="fa fa-times hide" aria-hidden="true" ></i>

`
        element.style.backgroundColor="#00b300"
    }
    else if(type.value=="error"){
        element.innerHTML=`
              ✗
              <span>${InfoInput.value}</span>
              <i class="fa fa-times hide" aria-hidden="true" ></i>

      `
        
        element.style.backgroundColor="red"
    }
    else if(type.value=="warning"){
        element.innerHTML=`
        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
        <span>${InfoInput.value}</span>
        <i class="fa fa-times hide" aria-hidden="true" ></i>

`
        element.style.backgroundColor="orange"

    }
    else if(type.value=="info"){
        element.innerHTML=`
        <i class="fa fa-info-circle" aria-hidden="true"></i>
        <span>${InfoInput.value}</span>
        <i class="fa fa-times hide" aria-hidden="true" ></i>

`
        element.style.backgroundColor="#ffffe0"
    
    }


     let time = duration.value;

     let timeR = time-200;

    if(position1.value=="left"){
        element.classList.add("toast-left")

        if(position2.value=="top"){

           
            toast_cont.appendChild(element)
            
            
            setTimeout(()=>{
             
             toast_cont.removeChild(element)
            },time)

        }
        else{
            toast_cont3.appendChild(element)
   
            setTimeout(()=>{
            
             toast_cont3.removeChild(element)
            },time)
        }
         
        setTimeout(()=>{
         element.classList.add("toast-left-return")
        },timeR)


    }
    else{
        element.classList.add("toast-right")

        if(position2.value=="top"){
            toast_cont2.appendChild(element)
            
   
            setTimeout(()=>{
             toast_cont2.removeChild(element)
            },time)
        }
        else{
            toast_cont4.appendChild(element)
            
   
            setTimeout(()=>{
             toast_cont4.removeChild(element)
            },time)
        }

        setTimeout(()=>{
            element.classList.add("toast-right-return")
           },timeR)
    }

   
    const closeButton = element.querySelector(".hide");
    closeButton.addEventListener("click",()=>{
        element.classList.add("toast-left-return")
        setTimeout(() => {
            element.remove();
        }, 200); // Match the CSS transition duration
    })

    // const hide = document.querySelectorAll(".hide")

    // hide.forEach((ele) => {
    //     ele.addEventListener('click', () => {
    //         const toastElement = ele.closest(".toast");
    //         if (toastElement) {
    //             toastElement.remove();
    //         }
    //     });
    // });
})


// Using event delegation to handle close button clicks
// document.addEventListener("click", (event) => {
//     if (event.target.classList.contains("hide")) {
//         const toastElement = event.target.closest(".toast");
//         if (toastElement) {
//             toastElement.remove();
//         }
//     }
// });
