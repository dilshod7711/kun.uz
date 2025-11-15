import React, { useState, useEffect } from "react";
import reklam1 from "../../assets/reklama1.png";
import reklam2 from "../../assets/reklama2.png";
import reklam3 from "../../assets/reklama3.png";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const { t, i18n } = useTranslation();
  const reklamaRassmlari = [reklam1, reklam2, reklam3];
  const navigate = useNavigate();
  const [randomImage, setRandomImage] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * reklamaRassmlari.length);
    setRandomImage(reklamaRassmlari[randomIndex]);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    document.title = t("document.title");
  }, [i18n.language]);
  const handleSelectLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  function handleNavigate() {
    navigate("/");
  }
  return (
    <>
      <div className="container">
        {randomImage ? (
          <img
            src={randomImage}
            alt="Tasodifiy reklama banneri"
            className="w-full"
          />
        ) : (
          <div className="w-full text-center p-4 bg-gray-100">
            Reklama yuklanmoqda...
          </div>
        )}
      </div>

      <nav
        className={`bg-white p-2 rounded-sm  ${
          isSticky
            ? "fixed top-0 left-0 w-full  z-50"
            : "w-[1285px] mx-auto mt-2"
        }`}
      >
        <div className=" container flex justify-between items-center">
          <div>
            <img
              onClick={handleNavigate}
              src="https://kun.uz/assets/66844a27/img/icons/logo-light.svg"
              alt="Kun.uz logotipi"
              className="w-24 md:w-32 cursor-pointer"
            />
          </div>

          <div className="hidden md:flex items-center justify-center gap-6">
            <Link className="hover:text-blue-600">{t("header.uzb")}</Link>
            <Link className="hover:text-blue-600">{t("header.jahon")}</Link>
            <Link className="hover:text-blue-600">{t("header.iqtisod")}</Link>
            <Link className="hover:text-blue-600">{t("header.jamiyat")}</Link>
            <Link className="hover:text-blue-600">{t("header.sport")}</Link>
            <Link className="hover:text-blue-600">{t("header.tex")}</Link>
            <Link className="hover:text-blue-600">{t("header.audio")}</Link>
          </div>

          <div className="flex gap-4 items-center">
            <select
              onChange={handleSelectLanguage}
              className="p-2 bg-gray-100 rounded-sm"
            >
              <option value="uz">Ўзбекча</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>

            <div className="bg-gray-100 p-2 rounded-sm cursor-pointer">
              <CiSearch className="w-6 h-6" />
            </div>

            <div className="">
              <IoMdMenu className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      <nav
        className={`bg-gray-100 p-3 rounded-sm  ${
          isSticky
            ? "fixed top-[60px] left-0 w-full shadow z-40"
            : "w-[1285px] mx-auto"
        }`}
      >
        <div className=" container flex justify-center items-center gap-8 text-center">
          <Link className="hover:text-blue-600">{t("header.talim")}</Link>
          <Link className="hover:text-blue-600">{t("header.moliya")}</Link>
          <Link className="hover:text-blue-600">{t("header.avto")}</Link>
          <Link className="hover:text-blue-600">{t("header.hayot")}</Link>
          <Link className="hover:text-blue-600">{t("header.mulk")}</Link>
          <Link className="hover:text-blue-600">{t("header.ayollar")}</Link>
          <Link className="hover:text-blue-600">{t("header.turizm")}</Link>
          <Link className="hover:text-blue-600">{t("header.beznes")}</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
