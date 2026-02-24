'use client';
import React, { useEffect, useRef, useState } from 'react';

const Achievement = ({ title, amount, icon }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun) {
          startCounting();
          setHasRun(true);
        }
      },
      { threshold: 0.4 }
    );

    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasRun]);

  const startCounting = () => {
    let start = 0;
    const end = parseInt(amount);
    const speed = 20; // faster + smooth
    const increment = Math.ceil(end / 40);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, speed);
  };

  return (
    <div
      ref={ref}
      className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-md"
    >
      <span className="text-yellow-500 text-3xl">{icon}</span>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">{count}</span>
        <span className="text-sm text-gray-400">{title}</span>
      </div>
    </div>
  );
};

export default Achievement;
