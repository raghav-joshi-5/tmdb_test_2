let cl=console.log;

cl(movieArray);

const movieContainer =document.getElementById("movieContainer");
let result='';

for(let i=0;i<movieArray.length;i++){
	result+=`
				<div class="col-md-4 mb-4">
						<div class="card">
							<figure class="movieCard">
								<img src="https://image.tmdb.org/t/p/w500/${movieArray[i].poster_path}" 
								alt="${movieArray[i].title}" 
								title="${movieArray[i].title}">
							<figcaption>
								<div class="movietitle">
									<div class="row">
										<div class="col-10">
											<h3 class="m-0">
												${movieArray[i].title}
											</h3>
										</div>
										<div class="col-2 text-center rating">
											<span class=${rating(movieArray[i].vote_average)}>
												${movieArray[i].vote_average}
											</span>
										</div>
									</div>
									</div>
									<div class="movieoverview">
										<h3>${movieArray[i].title}</h3>
										<h4>
											<em>overview</em>
										<h4>
										<p class="mb-0">${movieArray[i].overview}</p>								
									</div>
								
							</figcaption>
							</figure>
						</div>
					</div>			
			`
}

movieContainer.innerHTML = result;

function rating(ratingvalue){
	if(ratingvalue <=5){
		return 'bg-danger'
	}else if(ratingvalue > 5 && ratingvalue <7.5){
		return 'bg-warning'
	}else{
		return 'bg-success'
	}
}