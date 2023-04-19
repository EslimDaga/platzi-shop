import {
  getProfileService,
  signInService,
} from "../../services/authentication/authenticationService";
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const resetError = createAction("authentication/resetError");

export const signIn = createAsyncThunk(
  "authentication/signIn",
  async (credentials, thunkAPI) => {
    try {
      const response = await signInService(credentials);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getProfile = createAsyncThunk(
  "authentication/profile",
  async () => {
    const response = await getProfileService();
    return response;
  }
);

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    user: {
      access: "",
    },
    error: {},
    loading: false,
  },
  reducers: {
    signOut: (state) => {
      state.user = {};
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetError, (state) => {
      state.error = {};
    });
    builder.addCase(signIn.pending, (state) => {
      state.error = {};
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.user.access = action.payload.access_token;
      localStorage.setItem("user", JSON.stringify(state.user));
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getProfile.pending, (state) => {
      state.error = {};
      state.loading = true;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem("user", JSON.stringify(state.user));
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { signOut } = authenticationSlice.actions;

export default authenticationSlice.reducer;
