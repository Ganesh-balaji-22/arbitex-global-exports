import { useEffect, useState } from "react";

const LogoIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 100);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="intro-overlay">
      <img
        src="/assets/logo/logo.svg"
        alt="Arbitex Global Exports"
        className="logo-intro"
      />
    </div>
  );
};

export default LogoIntro;
