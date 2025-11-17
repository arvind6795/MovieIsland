import React from "react";
const MovieCard=({movie:{imdbID,Year,Poster,Title,Type}})=>{
return(
    <div className='movie' key={imdbID}>
        <div>
          <p>{Year}</p>
        </div>
        <div>
          <img src={Poster !== "N/A" ? Poster : "https://placehold.co/400x600?text=No+Poster"} alt={Title} 
          onError={(e)=>{
            e.target.onError=null;
            e.target.src="https://placehold.co/400x600?text=No+Poster"
          }}
          />
        </div>
        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
);
}
export default MovieCard;