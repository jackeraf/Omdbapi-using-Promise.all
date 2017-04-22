var request = require('request-promise');


function findMovie(title){
	return request(`http://www.omdbapi.com/?t=${title}`)
	//request returns a promise, therefore then:
	.then(res=>{
		var movie= JSON.parse(res)
		return [movie["Title"], movie["Year"],movie["Genre"]]
	})
}

function loadInitialData(movies){

			return Promise.all(movies)
			.then((response)=>{
				
				response.forEach((movie)=>{
					console.log(movie[0])
				})
			})
	
	
}




var movies= [findMovie("jason bourne"), findMovie("The Matrix"), findMovie("titanic")]
//var movies= ["jason bourne", "The Matrix", "titanic"]

loadInitialData(movies)



