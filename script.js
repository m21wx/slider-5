	

	let left = document.querySelector('.slider-icons .left');
	let right = document.querySelector('.slider-icons .right');
	let slider= document.querySelector('.slider-5 .slider');
	
	
	right.addEventListener('click',()=>{
		let fisrt = slider.firstElementChild;
		slider.appendChild(fisrt)
	})
	left.addEventListener('click',()=>{
		let fisrt = slider.children;
		slider.prepend(fisrt[fisrt.length - 1])
	})
