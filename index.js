

let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset_btn");
let newGamebtn=document.querySelector("#new_Btn");
let msgContainer=document.querySelector(".msg_containner ");
let msg=document.querySelector("#msg");
let turnO = true;

const win = [
  [0, 1, 2], // two players X and Y
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if(turnO===true){
		box.innerText="X";
		turnO=false;
	}else if(turnO===false){
		box.innerText="O";
		turnO=true;
	}
	box.disabled=true;
	
	checkWinner();
  });
});

const showWinner = (Winner)=>{
	msg.innerText = "Congratulations Winner is " +  Winner;
	disablebtn();
	msgContainer.classList.remove("hide");
};

const checkWinner = () =>{
	for(let pattern of win){
		let posVal1=boxes[pattern[0]].innerText;
		let posVal2=boxes[pattern[1]].innerText;
		let posVal3=boxes[pattern[2]].innerText;
		
		if(posVal1 !="" && posVal2 !="" && posVal3!=""){
			if(posVal1===posVal2 && posVal2===posVal3){
				console.log("Winner" , posVal1);
				showWinner(posVal1);
				break
			}
		}
		
	}
};

const disablebtn = ()=>{
		for(let box of boxes){
			box.disabled=true;
		}
}


const enablebtn = ()=>{
	for(let box of boxes){
		box.disabled=false;
		box.innerHTML="";
	}
}

const resetGame = ()=>{
	turnO = true;
	enablebtn();
	msgContainer.classList.add("hide");
}

reset_btn.addEventListener("click" , resetGame);
newGamebtn.addEventListener("click" , resetGame);


