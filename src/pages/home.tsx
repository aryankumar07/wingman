import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Loader from "../components/loader";
import { Iitems } from "../utils/constant";
import Card from "../components/card/card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setProducts } from "../store/product-slice";

const Home = () => {
  const dispatch = useDispatch();
  const { products, searchTerm } = useSelector(
    (state: RootState) => state.product
  );

  const [loading, setLoading] = useState(true);
  const [sortKey, setSortKey] = useState<"price" | "rating" | "none">("none");

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortKey(e.target.value as "price" | "rating" | "none");
  };

  const sortedProducts = [...products].sort((a: Iitems, b: Iitems) => {
    if (sortKey === "price") return a.price - b.price;
    if (sortKey === "rating") return b.rating.rate - a.rating.rate; // assuming rating is an object like { rate: number }
    return 0; // no sorting
  });

  const filteredProducts = sortedProducts.filter((product) =>
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
          <div className="p-4">
            <label htmlFor="sort" className="block font-medium mb-2">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortKey}
              onChange={handleSortChange}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="none">None</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div className="col-span-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredProducts.map((item: Iitems) => (
              <Card items={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
