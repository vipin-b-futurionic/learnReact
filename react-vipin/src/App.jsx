import React from "react";
export const App = () => {
  return (
    <React.Fragment>
      <AnimeSeries />
      <AnimeSeries />
      <AnimeSeries />
      <AnimeSeries />
      <AnimeSeries />
      <AnimeSeries />
    </React.Fragment>


   
  )
  
}

const AnimeSeries = () =>{
  return (
    <div>
      <div>
        <img src="ace.jpg" alt="One Piece ACE" width = "60%"  />
      </div>
      <h2>Person: Portgas D. Ace</h2>
      <h3>Rating: 10/10</h3>
      <p>
        Portgas D. Ace, also known as Fire Fist Ace,
        was one of the most legendary characters in
        One Piece. As the sworn brother of Luffy and
        Sabo, he carried the will of Gol D. Roger 
        while forging his own path. His Mera Mera no Mi (Flame-Flame Fruit)
        made him a fearsome pirate, earning him 
        the title of the 2nd division commander of the 
        Whitebeard Pirates.
      </p>
      <button>Watch Now</button>
    </div>
  )
}