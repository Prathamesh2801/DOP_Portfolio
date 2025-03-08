import about1 from "../assets/img/about/intro1.jpg";
import about2 from "../assets/img/about/about1.jpg";
import about3 from "../assets/img/about/about2.jpg";
import about4 from "../assets/img/about/about4.jpg";
import about5 from "../assets/img/about/about5.jpg";
import about6 from "../assets/img/about/about6.jpg";

import React, { useEffect, useRef, useState } from "react";

const images = [about1, about2, about3, about4, about5, about6];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startPosRef = useRef(null);
  const autoSlideIntervalRef = useRef(null);

  // Auto-slide every 3 seconds
  const startAutoSlide = () => {
    autoSlideIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handleDragStart = (clientX) => {
    stopAutoSlide();
    setIsDragging(true);
    startPosRef.current = clientX;
  };

  const handleDragMove = (clientX) => {
    if (startPosRef.current !== null) {
      const offset = clientX - startPosRef.current;
      setDragOffset(offset);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const threshold = 50;
    if (dragOffset < -threshold && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (dragOffset > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    setDragOffset(0);
    startPosRef.current = null;
    startAutoSlide();
  };

  // Mouse events
  const handleMouseDown = (e) => {
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleDragMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) handleDragEnd();
  };

  // Touch events
  const handleTouchStart = (e) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  return (
    <div
      className="relative w-full max-w-lg mx-auto overflow-hidden select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => {
        if (isDragging) handleDragEnd();
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`flex ${!isDragging ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
