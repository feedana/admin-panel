import React from "react";
import FavoritesIcon from "./FavoritesIcon";

const Header = () => {
  return (
    <header className="h-14 w-full border-b border-[#e2e8f0] flex items-center justify-between px-8 bg-white">
      
      {/* left */}
      <h2 className="font-semibold text-lg">
        Super Admin Console
      </h2>

      {/* right */}
      <div className="flex items-center gap-6">
        
      
        <FavoritesIcon />

        <div className="flex items-center gap-3">
          <div className="flex flex-col text-right leading-tight">
            <span className="text-sm font-semibold">Fidan Adishirinli</span>
            <span className="text-xs text-gray-500">admin</span>
          </div>

          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            FA
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
