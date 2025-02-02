import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import Loading from "../Components/Loading";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userRef = doc(db, "users", email);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setError("❌ Użytkownik już istnieje!");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        name: name,
        createdAt: new Date(),
      });

      await updateProfile(auth.currentUser, {
        displayName: "Jane Q. User",
      })

      const newsletterRef = doc(db, "newsletter", email);
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

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-950 !text-white w-screen h-screen">
      <form onSubmit={handleRegister} className="flex flex-col gap-5 w-full px-5 md:w-max">
        <div
          className="text-3xl font-semibold w-full text-center"
          style={{ lineHeight: 1 }}
        >
          Zarejestruj się
        </div>
        <p className="text-neutral-300 text-sm text-center">
          Stwórz swoje konto i uzyskaj dostęp do <br />
          nowoczesnego panelu programu.
        </p>
        <button
          type="button"
          id="google"
          className="w-full md:w-96 h-12 flex gap-2 font-semibold items-center justify-center px-5 text-white rounded-full  border-2 border-neutral-800 transition-all duration-300 hover:bg-neutral-900 cursor-pointer"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="google" width={20} />Kontynuuj z Google
        </button>
        <div className="border border-neutral-800 my-5"></div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold text-sm">
            Nazwa Użytkownika *
          </label>
          <input
            type="text"
            id="name"
            placeholder="Wpisz swoja nazwę"
            onChange={(e) => setName(e.target.value)}
            className="w-full md:w-96 h-12 px-5 text-white rounded-2xl bg-neutral-900 border-2 border-neutral-800"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bold text-sm">
            Email *
          </label>
          <input
            type="email"
            id="email"
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
            placeholder="Stworz swoje haslo"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full md:w-96 h-12 px-5 text-white rounded-2xl bg-neutral-900 border-2 border-neutral-800"
            required
          />
        </div>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <button
          type="submit"
          className="text-[15px] font-medium w-full h-12 rounded-2xl transition-all duration-300 bg-blue-500 hover:bg-blue-600"
        >
          {loading ? <Loading /> : "Zarejestruj się"}
        </button>
        <p className="text-neutral-300 text-sm text-center">Posiadasz juz konto? <Link to="/login" className="text-white transition-all duration-300 hover:text-blue-500" >Zaloguj się</Link></p>
      </form>
    </div>
  );
};

export default Register;
