import React, { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log(data.error || "Something went wrong!");
      setEmail("");
    } catch (error) {
      console.error("Error response:", error.response);
      console.error("Error message:", error.message);
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
      <form
        className="flex flex-col sm:flex-row gap-5 items-center mx-auto w-full justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 px-7 border w-full md:w-96 text-black rounded-full"
          required
        />
        <button
          type="submit"
          className="p-3 px-7 text-[15px] font-medium w-max rounded-3xl transition-all duration-300 bg-blue-500 hover:bg-blue-600"
        >
          Subskrybuj
        </button>
      </form>
    </div>
  );
};

export default Hero;
