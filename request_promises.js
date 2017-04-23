var request = require('request-promise');


const results = [];

function whileDo(condition, job) {

	return new Promise((resolve, reject) => {
let counter = 0;

		function next() {
			counter += 1;
			if (!condition(counter - 1)) return resolve();
			return job(counter - 1).then(next, reject);
		};

		next();

	});
};


function findMovie(movies){
	
		return whileDo(
			(i) =>  i < movies.length,
			(i) => {
		  
		  	
		  	return request(`http://www.omdbapi.com/?t=${movies[i]}`)
		  		.then(res=>{

					var movie= JSON.parse(res)
					console.log(movie["Title"], movie["Year"],movie["Genre"])
					return [movie["Title"], movie["Year"],movie["Genre"]]
				})
		  
		}
		);
	
	
}



var movies= ["jason bourne", "The Matrix", "titanic"]

findMovie(movies)



