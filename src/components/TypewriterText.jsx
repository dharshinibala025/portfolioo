import { useEffect, useState, useMemo } from 'react';

const TypewriterText = ({
  text,
  words,
  speed = 100,
  deleteSpeed = 50,
  delay = 2000,
  loop = true,
  cursor = true,
  cursorChar = '|',
  cursorColor = '#B8893D',
  className = '',
}) => {
  const wordsKey = words ? words.join('||') : text || '';
  const textArray = useMemo(() => {
    if (words && words.length > 0) return words;
    if (text) return [text];
    return ['Dharshini.'];
  }, [wordsKey]);

  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = textArray[wordIndex % textArray.length];

    let timer;
    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        }, speed);
      } else if (loop || wordIndex < textArray.length - 1) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % textArray.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex, textArray, speed, deleteSpeed, delay, loop]);

  return (
    <span className={`inline-inline flex-wrap items-baseline ${className}`}>
      <span>{displayedText}</span>
      {cursor && (
        <span
          className="ml-1 inline-block animate-pulse font-light select-none"
          style={{ color: cursorColor }}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
};

export default TypewriterText;








