import React, { useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import Loading from "../Components/Loading";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const saveEmail = async () => {
    try {
      const emailRef = collection(db, "newsletter");
      const q = query(emailRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setMessage("❌ Ten email jest już zapisany!");
        setLoading(false);
        return false;
      }

      await addDoc(emailRef, { email });
      return true;
    } catch (error) {
      setMessage("❌ Wystąpił błąd podczas subskrypcji: " + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const isSaved = await saveEmail();
    if (!isSaved) {
      setLoading(false);
      return;
    };

    try {
      const response = await fetch(
        "https://fendisdigital-server.onrender.com/send-newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Subskrypcja zakończona sukcesem!");
      } else {
        setMessage(`❌ Błąd: ${data.error || "Nie udało się wysłać"}`);
      }
    } catch (error) {
      setMessage("❌ Wystąpił błąd podczas subskrypcji.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col gap-10 text-center justify-center items-center px-5 py-[15%] md:py-[5%] md:px-[10%] 2xl:px-[15%]"
      id="newsletter"
    >
      <div className="bg-blue-500 p-2 px-4 text-sm rounded-xl">Newsletter</div>
      <div className="text-5xl sm:text-7xl" style={{ lineHeight: 1.2 }}>
        Pozostań na bierząco z wszystkimi nowościami!{" "}
      </div>
      {message && <div className="text-sm">{message}</div>}
      <form
        className="flex flex-col sm:flex-row gap-5 items-center mx-auto w-full justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full md:w-96 h-12 px-5 text-white rounded-2xl bg-neutral-900 border-2 border-neutral-800"
          required
        />
        <button
          type="submit"
          className="text-[15px] font-medium w-full md:w-24 h-12 rounded-2xl transition-all duration-300 bg-blue-500 hover:bg-blue-600"
        >
          {loading ? <Loading /> : "Prześlij"}
        </button>
      </form>
    </div>
  );
};

export default Hero;
