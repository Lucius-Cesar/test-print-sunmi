"use client"
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import OrderPrintTicket from '@/components/OrderPrintTicket';

const Page = () => {
  const componentRef = useRef(null); // Assurez-vous d'initialiser useRef avec null

  const handleCaptureClick = async () => {
    if (!componentRef.current) return;

    const canvas = await html2canvas(componentRef.current);
    const imgData = canvas.toDataURL('image/jpeg');

    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'composant.jpg';
    link.click();
  }

  return (
    <div>
      <OrderPrintTicket />
    </div>
  );
};

export default Page;
