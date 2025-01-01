const { createSlice, nanoid,current } = require("@reduxjs/toolkit");

const initialstate = {
  users:  JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [],
};

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
      let userData =JSON.stringify(current(state.users));
      localStorage.setItem("users",userData);
      //console.log(current(state.users))
    },
    removeUser: (state, action) => {
      const data = state.users.filter((elem) => elem.id != action.payload);
      state.users = data;
      let remainData = JSON.stringify(data);
      //console.log(JSON.stringify(data));
      localStorage.setItem('users', remainData)
    },
  },
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
