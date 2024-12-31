"use client";
export default function Adduser() {
  return (
    <div className="form-section">
      <h2>Add User</h2>
      <form id="addUserForm">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          required
        />

        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          required
        />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
