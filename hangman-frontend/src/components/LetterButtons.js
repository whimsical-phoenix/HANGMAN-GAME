// import React from "react";

// const LetterButtons = ({ onClick, guessedLetters = [] }) => {
//   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   return (
//     <div className="letter-buttons">
//       {alphabet.split("").map((letter, index) => (
//         <button
//           key={index}
//           onClick={() => onClick(letter)} // Pass the clicked letter
//           className={guessedLetters.includes(letter) ? "used" : ""}>
//           {letter}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default LetterButtons;

// LetterButtons.js

import React from "react";
import "./LetterButtons.css"; // Import the CSS file for styling

const LetterButtons = ({ onClick, guessedLetters }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="letter-buttons">
      {alphabet.split("").map((letter, index) => (
        <button
          key={index}
          onClick={() => onClick(letter)} // Make sure to use arrow function
          disabled={guessedLetters.includes(letter)}
          className={guessedLetters.includes(letter) ? "used" : ""}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default LetterButtons;
