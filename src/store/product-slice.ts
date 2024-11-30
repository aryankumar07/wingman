import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Iitems } from "../utils/constant";

interface ProductState {
  products: Iitems[];
  searchTerm: string;
}

const initialState: ProductState = {
  products: [],
  searchTerm: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Iitems[]>) {
      state.products = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
