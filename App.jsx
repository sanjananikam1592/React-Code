import { useEffect, useState } from "react"

function App() {

  // step 1 : Loading the home feed at first
  const[currentTab, setCurrentTab] = useState("Home")
  

  // useEffect hook

  useEffect(()=>{

    console.log("Current tab on the page is : " +currentTab)
  
  },[currentTab])

  //step 2 : create the function

  //Home
  function HomeFunction() {

    setCurrentTab("Home")
  
  }

  //MyNetwork
  function NetworkFunction() {

    setCurrentTab("MyNetwork")
  }

//Jobs
function JobFunction(){

  setCurrentTab("Jobs")
}

//Messaging
function MessageFunction(){
  
  setCurrentTab("Messaging")
}

//Notifications
function NotificationFunction(){
  setCurrentTab("Notifications")

}

  return (
    <div>
      <h1>Linkedin Navbar</h1>
      
      <button onClick ={HomeFunction}style ={{color : currentTab=="Home" ? "red" :"gray"}}>Home</button>
      <button onClick ={NetworkFunction} style ={{color: currentTab=="MyNetwork" ? "red" : "gray"}}>MyNetwork</button>
      <button onClick ={JobFunction}style ={{color : currentTab=="Jobs" ? "red" : "gray"}}>Jobs</button>
      <button onClick ={MessageFunction}style ={{color : currentTab=="Messaging" ? "red" : "gray"}}>Messaging</button>
      <button onClick={NotificationFunction}style ={{color:currentTab=="Notifications" ? "red" : "gray"}}>Notifications</button>
      
      </div>
  )
}

export default App