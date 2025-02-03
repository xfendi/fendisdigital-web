import { Route, Routes } from "react-router-dom";
import Loading from "../Components/Loading";
import { useUser } from "../Context/UserContext";
import Main from "../Panel/Pages/Main";
import Sidebar from "../Panel/Components/Sidebar";
import Ebooks from "../Panel/Pages/Ebooks";
import Projects from "../Panel/Pages/Projects";
import CheckList from "../Panel/Pages/CheckList";
import RoadMaps from "../Panel/Pages/RoadMaps";
import Quests from "../Panel/Pages/Quests";
import Courses from "../Panel/Pages/Courses";
import Forum from "../Panel/Pages/Forum";

const Panel = () => {
  const { logout, loading, user } = useUser();

  const available = false;

  if (loading)
    return (
      <p className="bg-neutral-950 h-screen w-screen flex text-center items-center justify-center text-3xl font-semibold">
        <Loading big />
      </p>
    );
  if (!user)
    return (
      <p className="bg-neutral-950 h-screen w-screen flex text-center items-center justify-center text-3xl font-semibold">
        Nie jesteś zalogowany!
      </p>
    );

  if (available) {
    return (
      <div className="bg-neutral-950 h-screen w-screen flex flex-row gap-5 p-5">
        <Sidebar />
        <div className="bg-neutral-900 border-2 border-neutral-800 w-full h-full rounded-3xl p-5 flex">
          <Routes>
            <Route index element={<Main />} />
            <Route path="/ebooks" element={<Ebooks />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/check-list" element={<CheckList />} />
            <Route path="/road-maps" element={<RoadMaps />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </div>
      </div>
    );
  } else {
    return (
      <div
        data-aos="fade-up"
        className="bg-neutral-950 h-screen w-screen flex flex-col gap-5 items-center text-center px-5 justify-center text-white"
      >
        <h1 className="text-2xl">
          Witaj, <span className="text-blue-500">{user.displayName}</span>!
        </h1>
        <h1 className="text-5xl text-red-500 font-semibold">
          Panel jest aktualnie niedostępny!
        </h1>
        <div className="text-gray-300 text-md">
          Powiadomimy sie w wiasomości email gdy będzie on dostępny do ponownie!
        </div>
        <button
          onClick={logout}
          className="text-[15px] font-medium w-32 h-12 rounded-2xl transition-all duration-300 bg-red-500 hover:bg-red-600"
        >
          Wyloguj się
        </button>
      </div>
    );
  }
};

export default Panel;
