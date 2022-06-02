
let mytabLi=document.querySelectorAll(".mytabLi li");
let myTabpanel = document.querySelectorAll(".mytab-panel p")
//console.log(myTabpanel);


let mytabLiArr = Array.from(mytabLi);
let  myTabpanelArr = Array.from( myTabpanel);
//console.log(myTabpanelArr);


mytabLiArr.forEach(ele=>{
	ele.addEventListener("click",clicktab);
});

//function clicktab(event){
//	mytabLiArr.forEach(ele=>{
//		ele.classList.remove("active");
//	})
//	myTabpanelArr.forEach(element =>{
//		element.classList.add("hidePanel");
//	})
	
	
//	this.classList.add("active");
//	console.log(this.dataset.id)
//	let mypanelCustom_id = '#'+this.dataset.id;
//	console.log(mypanelCustom_id);
//	let mypanelElement = document.querySelector( mypanelCustom_id)
//	 mypanelElement.classList.remove("hidePanel")
//	console.log(mypanelElement )
//}

function clicktab(event){
	let selectedPara = (event.target.innerText.toLowerCase());
	//console.log(selectedPara);
	let selectedPara_id = document.getElementById(selectedPara);
	//console.log(selectedPara_id);
	 myTabpanelArr.forEach(paraEle =>{
		 paraEle.classList.add("hidePanel");
	 });
	 selectedPara_id.classList.remove("hidePanel");
	 
	mytabLiArr.forEach(ele=>{
		 ele.classList.remove("active");
	});
	this.classList.add("active");
	
}