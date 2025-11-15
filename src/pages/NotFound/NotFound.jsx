import React from "react";
import { useTranslation } from "react-i18next";
import { IoHomeOutline } from "react-icons/io5";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-10 ">
      <div className="w-full max-w-xl px-4 text-center">
        <p className="text-8xl sm:text-9xl font-extrabold text-red-600 tracking-wider mb-6 opacity-90">
          404
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          {t("header.sory")}
        </h1>

        <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto">
          {t("header.uzur")}
        </p>

        <a
          href="/"
          className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg 
                     shadow-xl hover:bg-red-700 transition duration-300 transform hover:scale-[1.02] 
                     focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          <IoHomeOutline className="w-5 h-5 mr-2" />
          {t("header.bosh")}
        </a>
      </div>

      <div className="absolute bottom-0 text-xs text-gray-400 p-4">
        Kun.uz | 2025
      </div>
    </div>
  );
};

export default NotFound;
