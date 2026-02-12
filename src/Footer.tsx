import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-red-900 to-red-700 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-lg mb-2">
          For Any Query or Suggestion contact to :
        </p>
        <p className="text-red-200">
          Rashmi Kushwah [Content Developer]
        </p>
        <p className="text-red-200">
          Anita Koranga [Sr. Trainer]
        </p>
      </div>
    </footer>
  );
};

export default Footer;
