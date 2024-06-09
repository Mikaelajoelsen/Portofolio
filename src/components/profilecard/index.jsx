import { useEffect, useState, useMemo } from "react";
const Card = () => {
  const [text, setText] = useState("");
  const typingSpeed = 100;

  const sentences = useMemo(
    () => [
      "Hi there! ",
      "I'm Mikaela Joelsen.",
      "I am 25 years old.",
      "I am a front-end developer.",
      "From Norway.",
    ],
    []
  );

  useEffect(() => {
    let currentIndex = 0;
    let currentSentence = sentences[currentIndex];
    let currentCharacterIndex = 0;
    let timeoutId;

    const typeNextCharacter = () => {
      setText(currentSentence.substring(0, currentCharacterIndex));
      currentCharacterIndex++;

      if (currentCharacterIndex <= currentSentence.length) {
        timeoutId = setTimeout(typeNextCharacter, typingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          if (currentIndex < sentences.length - 1) {
            currentIndex++;
            currentSentence = sentences[currentIndex];
            currentCharacterIndex = 0;
            setText("");
            typeNextCharacter();
          }
        }, 1000);
      }
    };

    typeNextCharacter();

    return () => clearTimeout(timeoutId);
  }, [sentences, typingSpeed]);

  return (
    <div className="flex justify-center">
      <a
        href="#"
        className="flex flex-col items-center h-96 border-none md:flex-row md:max-w-4xl "
      >
        <div className="flex flex-col justify-between p-4 leading-normal w-full ">
          <h1 className="mb-2 text-3xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white">
            {text}
            <span className="text-pink-500 animate-blink">|</span>
          </h1>
        </div>
      </a>
    </div>
  );
};

export default Card;
