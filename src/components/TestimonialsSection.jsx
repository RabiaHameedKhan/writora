import React from "react";

const testimonials = [
  {
    name: "Amna Khan",
    feedback: "Writora feels like home. Every blog speaks to my heart.",
  },
  {
    name: "Adeel",
    feedback: "Everything here is so soft and beautiful. I love it!",
  },
  {
    name: "Hamna",
    feedback: "Writora is pure magic for dreamers.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-pink-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-16">
          What People Say About <span className="text-pink-600">Writora</span>
        </h2>

        <div className="relative flex flex-wrap justify-center gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-pink-600 text-white w-48 aspect-square flex flex-col items-center justify-center p-4 rounded-full text-sm sm:text-base shadow-md transition-all duration-300 hover:scale-105 animate-[float_5s_ease-in-out_infinite]"

              style={{
                transform: `rotate(${index % 2 === 0 ? "-2deg" : "2deg"})`,
              }}
            >
              <p className="italic">“{t.feedback}”</p>
              <p className="mt-3 font-semibold text-white/90">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
