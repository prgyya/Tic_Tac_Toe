
  let boxes=Array.from(document.getElementsByClassName("box"));
  let output=document.getElementById("output");
  let turn=true;
  let hold;

  const checkwinner=()=>{
    let winpattern = [
      [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[6,7,8],[3,4,5]
    ]
    winpattern.forEach(e=>{
        if(boxes[e[0]].innerText===boxes[e[1]].innerText && boxes[e[1]].innerText===boxes[e[2]].innerText && boxes[e[0]].innerText===boxes[e[2]].innerText && boxes[e[0]].innerText!=""){
            output.innerHTML=hold+" " +"is winner";
            disable();
        }
        else{
            console.log("there is no winner");
        }
    });
   }

   (boxes).forEach(box => {
    box.addEventListener('click', () => {
        if(turn){
         hold= box.innerHTML="X";
          turn=false;
          box.disabled=true;
        }
       else{
         hold = box.innerHTML="O";
         turn=true;
         box.disabled=true;
       }
       checkwinner();
    });
  });

const disable=()=> {
  (boxes).forEach(box => {
    turn=false;
    box.disabled=true;
  });
}
const reload=()=>{
   (boxes).forEach(box => {
     turn=true;
     box.disabled=false;
     box.innerHTML=" ";
     output.innerHTML=" ";

   });
}
let reset=document.getElementById("reset");
reset.addEventListener('click',reload() );