
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Register Service Worker with update detection
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(reg => {
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // บังคับรีเฟรชเมื่อติดตั้งเวอร์ชันใหม่เสร็จ
              if (confirm('พบการอัปเดตใหม่! ต้องการรีเฟรชหน้าเว็บเพื่อใช้งานเวอร์ชันล่าสุดหรือไม่?')) {
                window.location.reload();
              }
            }
          });
        }
      });
    }).catch(err => {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
