import React, { useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import Loading from "../Components/Loading";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const emailRef = collection(db, "newsletter");
      const q = query(emailRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setMessage("❌ Ten email jest już zapisany!");
        setLoading(false);
        return;
      }

      await addDoc(emailRef, { email });

      const response = await fetch("http://localhost:5000/send-newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

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
      className="flex flex-col gap-10 text-center justify-center items-center px-5 py-[5%] md:px-[10%] 2xl:px-[15%]"
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
          className="border w-full md:w-96 h-12 px-5 text-black rounded-full"
          required
        />
        <button
          type="submit"
          className="text-[15px] font-medium w-36 h-12 rounded-3xl transition-all duration-300 bg-blue-500 hover:bg-blue-600"
        >
          {loading ? <Loading /> : "Subskrybuj"}
        </button>
      </form>
    </div>
  );
};

export default Hero;
