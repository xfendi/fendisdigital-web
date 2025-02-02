import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

import Loading from "../Components/Loading";
import { useUser } from "../Context/UserContext";
import { auth, db } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { user, loginWithGoogle } = useUser();

  useEffect(() => {
    if (user) {
      navigate("/panel");
    }
  }, [user, navigate]);

  const handleGoogle = async () => {
    setError("");
    setLoading(true);

    try {
      const user = await loginWithGoogle();

      const userRef = doc(db, "users", user.email);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          createdAt: new Date(),
        });
      }

      const newsletterRef = doc(db, "newsletter", user.email);
      const newsletterSnap = await getDoc(newsletterRef);

      if (!newsletterSnap.exists()) {
        await setDoc(newsletterRef, {
          email: user.email,
          subscribedAt: new Date(),
        });
      }

      setLoading(false);
      navigate("/panel");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigate("/panel");
    } catch (err) {
      setError("Błędne dane logowania!");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-950 !text-white w-screen h-screen">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-5 w-full px-5 md:w-max"
      >
        <div
          className="text-3xl font-semibold w-full text-center"
          style={{ lineHeight: 1 }}
        >
          Zaloguj się
        </div>
        <p className="text-neutral-300 text-sm text-center">
          Zaloguj się na swoje konto i uzyskaj dostęp do <br />
          nowoczesnego panelu programu.
        </p>
        <button
          type="button"
          id="google"
          onClick={handleGoogle}
          className="w-full md:w-96 h-12 flex gap-2 font-semibold items-center justify-center px-5 text-white rounded-full  border-2 border-neutral-800 transition-all duration-300 hover:bg-neutral-900 cursor-pointer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
            alt="google"
            width={20}
          />
          Kontynuuj z Google
        </button>
        <div className="border border-neutral-800 my-5"></div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bold text-sm">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Wpisz swoj email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-96 h-12 px-5 text-white rounded-2xl bg-neutral-900 border-2 border-neutral-800"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-bold text-sm">
            Hasło *
          </label>
          <input
            type="password"
            id="password"
            placeholder="Wpisz swoje haslo"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full md:w-96 h-12 px-5 text-white rounded-2xl bg-neutral-900 border-2 border-neutral-800"
            required
          />
        </div>
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
        <button
          type="submit"
          className="text-[15px] font-medium w-full h-12 rounded-2xl transition-all duration-300 bg-blue-500 hover:bg-blue-600"
        >
          {loading ? <Loading /> : "Zaloguj się"}
        </button>
        <p className="text-neutral-300 text-sm text-center">
          Nie masz jeszcze konta?{" "}
          <Link
            to="/register"
            className="text-white transition-all duration-300 hover:text-blue-500"
          >
            Zarejestruj się
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
