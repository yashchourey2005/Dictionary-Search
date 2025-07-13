const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=';

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6635f9ee8dmsh63d8db88a963196p1a9900jsnb5b6f81de7b8',
		'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};


let search = document.querySelector(".lower-heading");
let para = document.querySelector(".search-result");
let input = document.querySelector(".search-word");
let seachbtn = document.querySelector(".btn");

async function searchWord(word){

	try {
	const response = await fetch(url+word, options);
	console.log(response);
	let obj = await response.json()
	console.log(obj);
	return obj;
} catch (error) {
	console.error(error);
}
}


seachbtn.addEventListener("click", ()=>{
	let word = input.value;
	search.innerHTML = `<b>${word}</b>`
	searchWord(word).then((res)=>{
	console.log(res);
	para.innerText = res.definition;
})
});

console.dir(input);
