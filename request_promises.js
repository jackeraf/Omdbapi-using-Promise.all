var request = require('request-promise');


const results = [];

function whileDo(condition, job) {
	return new Promise((resolve, reject) => {

		function next() {
			if (!condition()) return resolve();
			return job().then(next, reject);
		};

		next();

	});
};


function findMovie(movies){
	
		return whileDo(
			(i) => return i < movies.length,
			(i) => {
		  // tareas sincronas
		  // results[i]
		  	i+=1
		  	return request(`http://www.omdbapi.com/?t=${title}`)
		  		.then(res=>{
		  			console.log(res)
					var movie= JSON.parse(res)
					return [movie["Title"], movie["Year"],movie["Genre"]]
				})
		  
		}
		);
	
	.catch((err)=>{
		console.log(err)
	})
}






//var movies= [findMovie("jason bourne"), findMovie("The Matrix"), findMovie("titanic")]
var movies= ["jason bourne", "The Matrix", "titanic"]

findMovie(movies)



