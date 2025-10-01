import { useEffect, useState } from "react";

const LogoIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <img
        src="/assets/logo/logo.png"
        alt="Arbitex Global Exports"
        className="logo-intro w-64 h-auto md:w-80"
      />
    </div>
  );
};

export default LogoIntro;
