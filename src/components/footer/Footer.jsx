import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-white py-10 px-4 md:px-8  border-gray-300">
      <div className="container flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-300 pb-6 mb-6 space-y-6 md:space-y-0">
        <div className="flex-shrink-0">
          <img
            src="https://kun.uz/assets/66844a27/img/icons/logo-grey.svg"
            alt="Kun.uz logotipi"
            className="w-24 md:w-32"
          />
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-gray-700">
          <Link className="hover:text-blue-600 transition duration-150">
            {t("footer.sayt")}
          </Link>
          <Link className="hover:text-blue-600 transition duration-150">
            {t("footer.rss")}
          </Link>
          <Link className="hover:text-blue-600 transition duration-150">
            {t("footer.aloqa")}
          </Link>
          <Link className="hover:text-blue-600 transition duration-150">
            {t("footer.reklama")}
          </Link>
          <Link className="hover:text-blue-600 transition duration-150">
            {t("footer.jamoa")}
          </Link>
        </div>

        <div className="flex space-x-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-blue-600 transition"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10.3584 7.38244C9.38571 7.787 7.44178 8.62433 4.52658 9.89443C4.05319 10.0827 3.80521 10.2668 3.78264 10.4469C3.74449 10.7512 4.12559 10.8711 4.64456 11.0343C4.71515 11.0565 4.7883 11.0795 4.86328 11.1038C5.37386 11.2698 6.06069 11.464 6.41774 11.4717C6.74162 11.4787 7.10311 11.3452 7.5022 11.0711C10.226 9.2325 11.632 8.30317 11.7203 8.28314C11.7825 8.26901 11.8688 8.25123 11.9273 8.3032C11.9858 8.35518 11.98 8.4536 11.9738 8.48C11.9361 8.64095 10.4401 10.0318 9.66593 10.7515C9.42459 10.9759 9.25339 11.135 9.2184 11.1714C9.14 11.2528 9.06011 11.3298 8.98332 11.4038C8.50897 11.8611 8.15326 12.204 9.00301 12.764C9.41136 13.0331 9.73812 13.2556 10.0641 13.4776C10.4201 13.7201 10.7752 13.9619 11.2347 14.2631C11.3517 14.3398 11.4635 14.4195 11.5724 14.4971C11.9867 14.7925 12.359 15.0578 12.8188 15.0155C13.086 14.9909 13.3621 14.7397 13.5022 13.9903C13.8335 12.2193 14.4847 8.38205 14.6352 6.80081C14.6484 6.66227 14.6318 6.48498 14.6185 6.40715C14.6051 6.32931 14.5773 6.21842 14.4761 6.13633C14.3563 6.03911 14.1714 6.01861 14.0886 6.02007C13.7125 6.0267 13.1355 6.22735 10.3584 7.38244Zz" />
            </svg>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-blue-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" />
            </svg>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-blue-600 transition"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45155C17.9652 6.27577 17.9613 6.09608 17.9535 5.9203C18.7566 5.33955 19.4496 4.62021 20 3.79608C19.2521 4.12883 18.458 4.34615 17.6449 4.44061C18.5011 3.92742 19.1421 3.12123 19.4492 2.17147C18.6438 2.6488 17.763 2.98551 16.8445 3.16718C16.2257 2.50963 15.4075 2.07426 14.5164 1.92838C13.6253 1.78249 12.711 1.93421 11.9148 2.36008C11.1186 2.78595 10.4848 3.46225 10.1115 4.28443C9.73825 5.1066 9.64619 6.02885 9.84961 6.90858C8.21874 6.82674 6.62328 6.40309 5.16665 5.66508C3.71002 4.92708 2.42474 3.8912 1.39414 2.6246C0.870333 3.5277 0.710047 4.59637 0.945859 5.61341C1.18167 6.63045 1.79589 7.51954 2.66367 8.09999C2.01219 8.0793 1.37498 7.9039 0.804688 7.58827V7.63905C0.804104 8.58679 1.13175 9.50549 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8276 2.85999 11.8517 2.2457 11.7328C2.50788 12.5479 3.01798 13.2607 3.70481 13.7719C4.39164 14.2831 5.22093 14.5672 6.07695 14.5844C4.62369 15.7259 2.82848 16.3451 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.282C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z" />
            </svg>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-blue-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.9 2H5.1C3.4 2 2 3.4 2 5.1v13.8c0 1.7 1.4 3.1 3.1 3.1h13.8c1.7 0 3.1-1.4 3.1-3.1V5.1c0-1.7-1.4-3.1-3.1-3.1zm-3.3 8.2l3.4-4.8H15l-3.3 4.5L7.4 5.4H4.1l3.4 4.8-3.4 5.5h3.3l3.3-4.5 4.3 4.5h3.3l-4.3-5.5z" />
            </svg>
          </a>
        </div>
        <div className="flex gap-2 space-y-2">
          <a target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
              className="w-32 md:w-36 h-auto"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
              alt="Get it on Google Play"
              className="w-32 md:w-36 h-auto"
            />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-4 space-y-3">
        <p className="text-sm text-gray-700 leading-relaxed">
          {t("footer.fb1")}
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">{t("footer.guvohnoma")}:</span> №0987.
          {t("footer.data")}.{" "}
          <span className="font-semibold">{t("footer.Founder")}:</span>{" "}
          {t("footer.web")}{" "}
          <span className="font-semibold">{t("footer.addr")}</span> 100043,
          {t("footer.uy")}{" "}
          <span className="font-semibold">{t("footer.Eadrr")}</span>{" "}
          <a
            href="mailto:info@kun.uz"
            className="text-blue-600 hover:text-blue-800"
          >
            info@kun.uz
          </a>{" "}
        </p>

        <p className="text-xs text-gray-500">
          <span className="text-base">Ⓣ</span> {t("footer.maqola")}
        </p>

        <p className="pt-2 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} **Kun.uz**. {t("footer.himoya")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
