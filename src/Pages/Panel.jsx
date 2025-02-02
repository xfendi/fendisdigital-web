import Loading from "../Components/Loading";
import { useUser } from "../Context/UserContext";

const Panel = () => {
  const { user, loading, logout } = useUser();

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

  return (
    <div data-aos="fade-up" className="bg-neutral-950 h-screen w-screen flex flex-col gap-5 items-center text-center px-5 justify-center text-white">
      <h1 className="text-3xl">Witaj, {user.displayName || "User"}!</h1>
      <h1 className="text-3xl text-red-500 font-semibold">
        Panel jest aktualnie niedostępny!
      </h1>
      <div className="text-gray-100 text-sm">
        Powiadomimy sie w wiasomości email gdy będzie on dostępny do uzytku!
      </div>
      <button
        onClick={logout}
        className="text-[15px] font-medium w-32 h-12 rounded-2xl transition-all duration-300 bg-red-500 hover:bg-red-600"
      >
        Wyloguj się
      </button>
    </div>
  );
};

export default Panel;
