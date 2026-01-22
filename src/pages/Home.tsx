import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar/>
      <main className="p-8 max-w-6xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
