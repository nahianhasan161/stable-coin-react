"use client";
import React, { useState } from "react";

interface faq {
  question: string;
  answer: string;
}
interface FaqItemProps {
  question: string;
  answer: string;
  faqData: Array<faq>;
}

const FaqItem: React.FC<FaqItemProps> = ({ faqData }) => {
  const [showList, setShowList] = useState<number[]>([]);

  const toggleAccordion = (key: number) => {
    if (showList.includes(key)) {
      setShowList((prevList) => prevList.filter((num) => num !== key));
    } else {
      setShowList((prevList) => [...prevList, key]);
    }
  };
  console.log(showList);
  return faqData.map((Faq, key) => (
    <div className="border-b border-gray-200 py-4" key={key}>
      <button
        className="w-full text-left font-semibold text-xl focus:outline-none"
        onClick={() => {
          toggleAccordion(key);
        }}
      >
        {Faq.question}
      </button>
      {showList.includes(key) && (
        <p className="mt-2 text-gray-700">{Faq.answer}</p>
      )}
    </div>
  ));
};

export default FaqItem;
