const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialstate = {
  users: [],
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
    },
    removeUser: (state, action) => {
      const data = state.users.filter((elem) => elem.id != action.payload);
      state.users = data;
    },
  },
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
