// import React, { useEffect, useState } from 'react'

// function App() {


// // step 1 - Defining the states 

// const[loading, setLoading] = useState(true)
// const [data, setData] = useState("")
// const[error,setError] = useState(null) 

// // Step 2 - Business logic (actually calling the API)

// useEffect(()=>{

//   fetch("https://api.github.com/users/sanjananikam1592")
// .then(response => response.json())
// .then((finalData)=>{

// setData(finalData)
// setLoading(false)

// } ).catch((error)=> {

// console.log("Error while fetching");
// setError(error.message)
// setLoading(false)


// })


// },[]) // Empty dependency array - run atleast once 



// // Step 3 - UI Part 

// if(loading) return <p> Loading Please wait ... </p>
// if(error) return  <p> something went wrong </p>



//   return (
//     <div>

// <h1>Data fetching using React - Promises </h1>

// <h3>Login : {data.login }</h3>
// <h3>id : {data.id }</h3>
// <h3>url :{data.url}</h3>

//     </div>
//   );
// }

// export default App

//Async await approach

import React, { useEffect, useState } from 'react'

function App() {
  //Business logic

  //step1 : Defining the states

  const[post, setPosts] = useState([]) //array of objects - key value pairs

  const[loading, setLoading] = useState(true)

  //Error handling 

//step 2 - executing the main logic

useEffect(()=>{
  fetchPosts()
},[])  //only run on mount

async function fetchPosts() {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  setPosts(post);
  setLoading(false)
}
//UI showcasing
if(loading) return <p>Loading please wait...</p>

  //UI Part
  return (
    <div>
      <h1>Data fetching in react - async await</h1>
      
      <h3>Title : {post[0]?.title}</h3>
      <h3>Title : {post [1]?.title}</h3>
    </div>
  )
}

export default App

