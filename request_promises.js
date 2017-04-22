var request = require('request-promise');


function findMovie(title){
	return request(`http://www.omdbapi.com/?t=${title}`)
	//request devuelve una promise por eso then:
	.then(res=>{
		var movie= JSON.parse(res)
		return [movie["Title"], movie["Year"],movie["Genre"]]
	})
}

function loadInitialData(movies){
	//console.log(movies[0])
	//findMovie()

			Promise.all(movies)
			.then((response)=>{
				//console.log(response)
				response.forEach((movie)=>{
					console.log(movie[0])
				})
				// console.log(response["Title"])
				// console.log(response["Year"])
				// console.log(response["Genre"])
			})
	
	
}




var movies= [findMovie("jason bourne"), findMovie("The Matrix"), findMovie("titanic")]

loadInitialData(movies)


/*
var p1= new Promise((resolve, reject)=>{
setTimeout(()=>{
resolve("One")
},3000)
})

var p2= new Promise((resolve, reject)=>{
setTimeout(()=>{
resolve("Two")
},1000)
})

var p3= new Promise((resolve, reject)=>{
setTimeout(()=>{
resolve("Three")
},4000)
})

Promise.all([p1, p2, p3])
.then((values)=>{
console.log(values)
})
.catch((err)=>{
console.log(err)
})

*/