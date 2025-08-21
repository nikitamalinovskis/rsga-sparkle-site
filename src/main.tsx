import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add preload class to prevent animation blinking on page load
document.body.classList.add('preload');

// Remove preload class after page loads to enable animations
window.addEventListener('load', () => {
  document.body.classList.remove('preload');
});

createRoot(document.getElementById("root")!).render(<App />);
