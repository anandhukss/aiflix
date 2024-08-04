import React from "react";
import { checkPasswordCriteria } from "../utils/validateForm";

function PasswordChecker({ password }) {
  const criteria = checkPasswordCriteria(password);

  return (
    <div className="absolute   p-4 bg-white border border-gray-300 rounded shadow-lg">
      <ul>
        {Object.entries(criteria).map(([key, { satisfied, description }]) => (
          <li key={key} className="flex items-center mb-1">
            <span
              className={`mr-2 ${
                satisfied ? "text-green-500" : "text-red-500"
              }`}
            >
              {satisfied ? "✓" : "✗"}
            </span>
            <span>{description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PasswordChecker;
