import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Loader from "../components/loader";
import { Iitems } from "../utils/constant";
import Card from "../components/card/card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setProducts } from "../store/product-slice";


const Home = ()=>{

    const dispatch = useDispatch();
    const { products, searchTerm } = useSelector(
      (state: RootState) => state.product
    );

  const [loading, setLoading] = useState(true)

  
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []); 
  
  useEffect(()=>{
    fetchData()
  },[])
  
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-foreground mt-1">
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="">filters</div>
          <div className=" col-span-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredProducts.map((item: Iitems) => (
              <Card items={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;