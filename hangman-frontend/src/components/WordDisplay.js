// // // src/components/WordDisplay.js

// import React from "react";

// const WordDisplay = ({ word, guessedLetters }) => {
//   return (
//     <div className="word-display">
//       {word.split("").map((letter, index) => (
//         <span
//           key={index}
//           className={
//             guessedLetters.includes(letter) || letter === " " ? "used" : ""
//           }>
//           {guessedLetters.includes(letter) || letter === " " ? letter : "_ "}
//         </span>
//       ))}
//     </div>
//   );
// };

// export default WordDisplay;

import React from "react";
import "./WordDisplay.css";

const WordDisplay = ({ word, guessedLetters }) => {
  const renderWord = () => {
    return word.split("").map((letter, index) => {
      const isSpace = letter === " ";
      const isGuessed = guessedLetters.includes(letter) || isSpace;

      return (
        <span
          key={index}
          className={isGuessed ? "used" : ""}
          style={{ marginRight: isSpace ? "20px" : "0" }}>
          {isGuessed ? letter : "_"}
        </span>
      );
    });
  };

  return <div className="word-display">{renderWord()}</div>;
};

export default WordDisplay;
