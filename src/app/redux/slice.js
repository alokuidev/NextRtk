const {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

const initialstate = {
  fetchApiUsers: [],  
  users: JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [],
};

export const fetchApiUsers = createAsyncThunk("apiuser", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const result = await response.json();
  return result;
});

const Slice = createSlice({
  name: "addUserSlice",
  initialState: initialstate,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email,
      };
      state.users.push(data);
      let userData = JSON.stringify(current(state.users));
      localStorage.setItem("users", userData);
      //console.log(current(state.users))
    },
    removeUser: (state, action) => {
      const data = state.users.filter((elem) => elem.id != action.payload);
      state.users = data;
      let remainData = JSON.stringify(data);
      //console.log(JSON.stringify(data));
      localStorage.setItem("users", remainData);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
      console.log(action.payload)  
      state.isloading = false;
      state.userApiData = action.payload;
    });
  }
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
