"use client";

import { useState, useEffect } from 'react';

export function NotificationBanner() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="bg-secondary text-secondary-foreground text-center p-2 font-bold uppercase text-sm md:text-base sticky top-0 z-50">
      {currentDate && `Oferta válida apenas hoje: ${currentDate}`}
    </div>
  );
}
