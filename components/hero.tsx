"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date("2026-02-09").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-primary via-primary to-primary/95 pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold">
            February 9-11, 2026 • Lagos, Nigeria
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight text-balance">
            African Shipowners' Conference
          </h1>

          <p className="text-xl sm:text-2xl text-primary-foreground/80 leading-relaxed text-balance">
            Promoting African Ownership and Participation in Africa's Shipping &
            Blue Economy Sectors
          </p>

          <div className="grid grid-cols-4 gap-4 py-8 max-w-2xl mx-auto">
            <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
              <div className="text-3xl font-bold text-accent">
                {countdown.days}
              </div>
              <div className="text-xs text-primary-foreground/70 mt-1">
                Days
              </div>
            </div>
            <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
              <div className="text-3xl font-bold text-accent">
                {countdown.hours}
              </div>
              <div className="text-xs text-primary-foreground/70 mt-1">
                Hours
              </div>
            </div>
            <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
              <div className="text-3xl font-bold text-accent">
                {countdown.minutes}
              </div>
              <div className="text-xs text-primary-foreground/70 mt-1">
                Minutes
              </div>
            </div>
            <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
              <div className="text-3xl font-bold text-accent">
                {countdown.seconds}
              </div>
              <div className="text-xs text-primary-foreground/70 mt-1">
                Seconds
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="bg-accent text-primary px-8 py-4 rounded-lg font-bold hover:bg-accent/90 transition-all transform hover:scale-105 text-lg">
              Register Now
            </button>
            <button
              onClick={() => {
                document.getElementById("objectives")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-bold hover:bg-accent/10 transition-all text-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
