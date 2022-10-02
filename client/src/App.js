import {useState, useEffect} from "react"
import axios from "axios"

function App() {
 const [data, setData] = useState(null)

 async function fetchData() {
  try {
   const res = await axios.get("/api")

   setData(res.data.message)
  } catch (error) {
   console.log(error)
  }
 }

 useEffect(() => {
  fetchData()
 }, [])

 return (
  <div className="App">
   <h1>{data}</h1>
  </div>
 )
}

export default App
