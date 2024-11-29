import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Loader from "../components/loader";
import { Iitems } from "../utils/constant";
import Card from "../components/card/card";

const Home = ()=>{

  const [store, setStore] = useState<Iitems[]>([])

  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setStore(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []); 

  useEffect(()=>{
    fetchData()
  },[])



  return (
    <div className="text-foreground mt-1">
      {
        loading? 
        <div>
          <Loader/>
        </div>
        :
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="">
            filters
          </div>
          <div className=" col-span-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {
              store.map((item : Iitems)=>(
                <Card items={item} key={item.id}/>
              ))
            }
          </div>

        </div>
      }
    </div>
  )
}
export default Home;