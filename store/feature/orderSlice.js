import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 import tradly from "tradly";

export const get_orders = createAsyncThunk(
	"order/get_orders",
    async ({ authKey, bodyParam }, thunkAPI) => {
       
 		try {
			const response = await tradly.app.getOrders({
				authKey: authKey,
				bodyParam: bodyParam,
			});
			const { data } = await response;
			if (!response.error) {
				return data;
			} else {
				const { error } = await response;
				return error;
			}
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
); 
 
 

export const orderSlice = createSlice({
	name: "cart",
	initialState: {
		isFetching: false,
		isSuccess: false,
		isError: false,
        errorMessage: "",
        orders:null,
	},
	reducers: {
		clearOrderState: (state) => {
			state.isError = false;
			state.isSuccess = false;
			state.isFetching = false;
			state.errorMessage = "";
			return state;
		},
		clearOrderDetails: (state) => {
			state.isError = false;
			state.isSuccess = false;
			state.isFetching = false;
			state.errorMessage = "";
			state.listing_details = null;
			state.rating_data = {};
			return state;
		},
	},
	extraReducers: {
		[get_orders.fulfilled]: (state, { payload }) => {
			if (payload.code) {
				state.isFetching = false;
				state.isError = true;
				state.isSuccess = false;
				state.errorMessage = payload?.message;
            } else {
 
				state.isError = false;
				state.isFetching = false;
				state.isSuccess = true;
				state.orders = payload?.orders;
			}
		},
		[get_orders.pending]: (state) => {
			state.isSuccess = false;
			state.isFetching = true;
			state.isError = false;
			state.errorMessage = "";
		},
		[get_orders.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.isError = true;
			state.errorMessage = payload?.message;
		},
	},
});

export const { clearOrderState, clearCOrderDetails } = orderSlice.actions;
export const orderSelector = (state) => state.order;