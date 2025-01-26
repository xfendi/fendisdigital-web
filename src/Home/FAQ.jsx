import React, { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const faqData = [
  {
    question: "Czym jest Fendis Digital i jak działa?",
    answer:
      "Fendis Digital to platforma edukacyjna, która pomaga w nauce web developmentu poprzez dostęp do kursów, e-booków i zamkniętej społeczności.",
  },
  {
    question: "Jakie pakiety są dostępne i czym się różnią?",
    answer:
      "Dostępne pakiety to BASIC, PRO i ENTER. Każdy z nich oferuje różne poziomy materiałów, dostęp do grupy oraz dodatkowe funkcje, takie jak konsultacje indywidualne.",
  },
  {
    question: "Czy mogę uzyskać dostęp do materiałów na zawsze po zakupie?",
    answer:
      "Tak, wszystkie zakupione materiały są dostępne na Twoim koncie bez ograniczeń czasowych.",
  },
  {
    question: "Czy pakiet obejmuje wsparcie indywidualne?",
    answer:
      "Wsparcie indywidualne jest dostępne w pakiecie ENTER w postaci konsultacji 1:1.",
  },
  {
    question: "Jak wygląda proces nauki i jakie materiały otrzymam?",
    answer:
      "Po zakupie otrzymasz dostęp do kursów, roadmapy nauki, checklist oraz projektów do wykonania. W PRO i ENTER dostępny jest również panel do zarządzania materiałami.",
  },
  {
    question: "Czy mogę przejść z pakietu BASIC na PRO lub ENTER?",
    answer:
      "Tak, w każdej chwili możesz dokonać aktualizacji pakietu, płacąc tylko różnicę w cenie.",
  },
  {
    question: "Czy są jakieś dodatkowe bonusy lub aktualizacje po zakupie?",
    answer:
      "Tak, regularnie dodajemy nowe materiały i aktualizacje. W pakietach PRO i ENTER masz dostęp do nich w ramach Early Access.",
  },
  {
    question: "W jaki sposób mogę dołączyć do zamkniętej grupy Discord?",
    answer:
      "Po zakupie pakietu otrzymasz unikalny kod dostępu, który pozwoli Ci dołączyć do naszej zamkniętej społeczności.",
  },
  {
    question: "Czy Fendis Digital jest odpowiedni dla początkujących?",
    answer:
      "Tak! Pakiet BASIC jest idealny dla osób, które zaczynają swoją przygodę z web developmentem.",
  },
  {
    question: "Jak mogę skontaktować się w razie pytań lub problemów?",
    answer:
      "Możesz skontaktować się z nami poprzez e-mail lub naszą grupę na Discordzie. Szczegóły znajdziesz w sekcji 'Kontakt'.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5 bg-neutral-900 rounded-3xl border-2 border-neutral-800 text-start">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-medium text-xl flex items-center justify-between w-full"
      >
        {question}
        <span
          className={`transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <KeyboardArrowDownIcon />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-40 border-t-2 border-neutral-800 pt-3 mt-4"
            : "max-h-0"
        }`}
      >
        <p className="text-neutral-300 text-md">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <div
      className="flex flex-col gap-10 text-center justify-center items-center px-5 py-[5%] md:px-[10%] 2xl:px-[15%]"
      id="faq"
    >
      <div className="bg-blue-500 p-2 px-4 text-sm rounded-xl">FAQ</div>
      <div className="text-5xl sm:text-7xl" style={{ lineHeight: 1.2 }}>
        Najczęściej zadawane pytania{" "}
      </div>
      <div className="w-full flex flex-col gap-5 items-center">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
