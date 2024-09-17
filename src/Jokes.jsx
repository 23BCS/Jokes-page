import React, { useEffect, useState } from 'react'

function Jokes() {
    const [joke ,setJokes]= useState({})
    const URL = "https://official-joke-api.appspot.com/random_joke";


 const genJokes = async()=>{
    let respose = await fetch(URL);
    let jsonRespose = await respose.json();
    // console.log(jsonRespose);
    setJokes({setUp: jsonRespose.setup , punchline: jsonRespose.punchline})
 }
useEffect( ()=>{
    async function getFirstJoke (){
    let respose = await fetch(URL);
    let jsonRespose = await respose.json();
    // console.log(jsonRespose);
    setJokes({setUp: jsonRespose.setup , punchline: jsonRespose.punchline})
}
getFirstJoke();
}, [])
  return (
    <div>
      <h1>jokes!</h1>
      <br /><br /><br />
      <h2>{joke.setUp} </h2>
      <h3>{joke.punchline}</h3>
      <button onClick={genJokes}>Jokes</button>
    </div>
  )
}

export default Jokes
