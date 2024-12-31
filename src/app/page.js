import Adduser from "./component/Adduser";
import Showuser from "./component/Showuser";

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>User Management</h1>
        <Adduser />
        <Showuser />
      </div>
    </main>
  );
}
