import { useEffect, useState } from 'react';

const TypewriterText = ({ text, speed = 28, className = '' }) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let frame;
    let index = 0;

    const type = () => {
      setDisplayed(text.slice(0, index));
      if (index <= text.length) {
        index += 1;
        frame = setTimeout(type, speed);
      }
    };

    type();

    return () => {
      clearTimeout(frame);
    };
  }, [text, speed]);

  return (
    <span className={`whitespace-pre-line text-left ${className}`}>
      {displayed}
      <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-accent-400 align-middle" />
    </span>
  );
};

export default TypewriterText;







