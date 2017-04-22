var request = require('request-promise');


function findMovie(title){
	return request(`http://www.omdbapi.com/?t=${title}`)
	//request devuelve una promise por eso then:
		.then(res=>{
			var movie= JSON.parse(res)
			return movie
		})
}

function loadInitialData(){
	var promise= findMovie("The Matrix")
		promise.then((movie)=>{
			console.log("inside loadInitialData")
			console.log(movie["Title"])
			console.log(movie["Year"])
			console.log(movie["Genre"])
		})
}

loadInitialData()


