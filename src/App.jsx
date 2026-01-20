import { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  const date = time.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-green-950 to-black overflow-hidden">

      {/* Floating shapes */}
      <div className="absolute w-64 h-64 bg-green-500 rounded-full blur-3xl opacity-30 -top-20 -left-20 animate-float"></div>
      <div className="absolute w-72 h-72 bg-emerald-400 rounded-full blur-3xl opacity-20 bottom-0 right-0 animate-float-slow"></div>

      {/* Clock card */}
      <div className="relative z-10 px-14 py-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-green-400/30 shadow-[0_0_60px_rgba(0,255,150,0.25)]">

        <h2 className="text-center text-green-300 text-sm tracking-widest uppercase mb-6">
          Digital Clock
        </h2>

        {/* Time */}
        <div className="flex items-end gap-6 text-green-200 font-mono justify-center">

          <div className="text-center">
            <p className="text-7xl font-bold">{hours}</p>
            <span className="text-xs text-green-400 tracking-wide">Hours</span>
          </div>

          <span className="text-6xl pb-4 animate-blink">:</span>

          <div className="text-center">
            <p className="text-7xl font-bold">{minutes}</p>
            <span className="text-xs text-green-400 tracking-wide">Minutes</span>
          </div>

          <span className="text-6xl pb-4 animate-blink">:</span>

          <div className="text-center">
            <p className="text-7xl font-bold">{seconds}</p>
            <span className="text-xs text-green-400 tracking-wide">Seconds</span>
          </div>
        </div>

        {/* Date */}
        <p className="mt-6 text-center text-sm tracking-wide text-green-300">
          {date}
        </p>

        {/* Footer */}
        <p className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-green-400">
           DIGITAL CLOCK
        </p>
      </div>
    </div>
  );
}
