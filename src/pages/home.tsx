import axios from "axios";
import { useEffect, useState } from "react";

const Home = ()=>{

  const [store, setStore] = useState([])


  const fetchData = async ()=>{
    try{
      const response = await axios.get('https://fakestoreapi.com/products')
      setStore(response.data)
    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])



  return (
    <div>
      <pre>{JSON.stringify(store,null,4)}</pre>
    </div>
  )
}
export default Home;