const cat_result = document.querySelector('#cat_result');
const dog_result = document.querySelector('#dog_result');
const cat_btn = document.querySelector('#cat_btn');
const dog_btn = document.querySelector('#dog_btn');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);


function getRandomCat(){
	getText('https://aws.random.cat/meow');
	async function getText(file) {
		let x = await fetch(file);
		let y = await x.json();
		console.log(y.file);
		cat_result.innerHTML = `<img src="${y.file}"/>`
	}
	// fetch('https://aws.random.cat/meow')
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		console.log(data);
	// 		cat_result.innerHTML = `<img src="${data.file}"/>`
	// 	})
}
function getRandomDog(){
	fetch('https://random.dog/woof.json')
	.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')){
				getRandomDog();
			}
			else{
			console.log(data);
			dog_result.innerHTML = `<img src="${data.url}"/>`	
			}
			
		})
}