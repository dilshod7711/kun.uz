import React, { useEffect, useState } from "react";
import { API } from "../../helpers/API/api";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import usePostsApp from "../../hooks/usePostsApp";
import { Context } from "../../context";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [like, setLike] = usePostsApp(Context);
  const navigate = useNavigate();
  useEffect(() => {
    API.get("/posts")
      .then((res) => setPosts(res.data.posts))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!posts || posts.length === 0) {
    return (
      <section>
        <div className="container mx-auto p-4 ">
          <p className="text-center font-bold text-blue-600 text-2xl">
            {t("header.load")}
          </p>
        </div>
      </section>
    );
  }

  function handleDetailPage(id) {
    navigate(`/posts/${id}`);
  }

  function handleLIke(post) {
    setLike([...like, post]);
  }

  return (
    <>
      <section className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 border-r lg:border-gray-200 lg:pr-6 flex flex-col gap-4">
            <div>
              <img
                src="https://storage.kun.uz/source/11/I40b5I4X2F_EqEu6H0RBA1nwOjhkHT9X.jpg"
                alt="Asosiy yangilik rasmi"
                className="w-full h-auto mb-4"
              />

              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
                Ўзбекистонда ҳарбий хизматни ўташ: бу ҳақда нималарни билиш
                керак?
              </h1>

              <div className="text-sm text-gray-500 mb-3 flex items-center">
                <span className="font-semibold text-red-600 mr-2">Sport</span>
                <span className="mr-4">| 22.11.2025</span>
                <span>👁️ 571</span>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Ўзбекистонда ҳарбий хизмат тизими босқичма-босқич ўзгариб
                бормоқда. Ҳозирда чақирилувчиларда танлов бор: бир йиллик тўлиқ
                ҳарбий хизматни ўташ, пул эвазига бир ойлик тайёргарликдан ўтиш
                ёки шартнома асосида хизмат қилиш. Улар ўртасидаги тафовутлар ва
                режага қараб қайси бирини танлаш ҳақида фикр юритамиз.
              </p>
            </div>
            <div>
              <img
                src="https://storage.kun.uz/source/thumbnails/_medium/11/kamShrnWHh_eSqcxF3W4wBtclgOo7rv5_medium.jpg"
                alt="Asosiy yangilik rasmi"
                className="w-full h-auto mb-4"
              />

              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
                The Atlantic материалидан асосий гаплар.
              </h1>

              <div className="text-sm text-gray-500 mb-3 flex items-center">
                <span className="font-semibold text-red-600 mr-2">Jahon</span>
                <span className="mr-4">| 22.11.2025</span>
                <span>👁️ 47912</span>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                АҚШ Венесуэла билан уруш ёқасида. Рубио бунга тўққиз ой ҳаракат
                қилди ва эришди
              </p>
            </div>
            <div>
              <img
                src="https://storage.kun.uz/source/11/VkvBnk9FB8NBZ1axky9iCc6wZveQ7sXo.jpg"
                alt="Asosiy yangilik rasmi"
                className="w-full h-auto mb-4"
              />

              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
                Гулнора Каримова атрофидаги молиявий триллер: Zeromax
                кредиторлари судда муҳим ютуққа эришди
              </h1>

              <div className="text-sm text-gray-500 mb-3 flex items-center">
                <span className="font-semibold text-red-600 mr-2">
                  O'zbekiston
                </span>
                <span className="mr-4">| 22.11.2025</span>
                <span>👁️ 781</span>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Швейцария тарихидаги иккинчи энг йирик банкротлик ҳолати
                юзасидан Zeromax кредиторининг Ernst & Young'га қарши даъволари
                бўйича суд давом этмоқда. Олий суд ажрими билан, жавобгар
                томонга аудит жараёнидаги ҳужжатларни тақдим этиш мажбурияти
                юклатилди. Бу мажбурият “катта тўртлик” компанияси учун улкан
                репутациявий йўқотишлар ва миллиард долларлик жарима билан
                тугаши мумкин.
              </p>
            </div>
          </div>

          {/*  */}

          <div className="lg:col-span-4 flex flex-col gap-4 pt-4 lg:pt-0">
            <h1 className="text-3xl font-bold border-b-1 border-gray-300 pb-2 mb-2 text-gray-900">
              {t("header.sungi")}
            </h1>
            {posts?.slice(0, 21).map((post) => (
              <div
                onClick={() => handleDetailPage(post.id)}
                key={post.id}
                className="pb-3 "
              >
                <h2 className="text-base font-bold text-gray-900 mb-1 leading-snug hover:text-red-600 transition duration-150 cursor-pointer">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-600 line-clamp-2  hover:text-blue-600 cursor-pointer transition duration-150">
                  {post.body}
                </p>

                <div className="text-xs text-gray-500 flex items-center mt-1">
                  <span className="font-semibold text-blue-600 mr-2">
                    Jamiyat
                  </span>
                  <span className="mr-4">| 19.07 / 14.11.2025</span>
                  <span>👁️ {post.views}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      <section className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6 inline-block pb-1 ">
            {t("header.maqol")}
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {posts?.slice(0, 12).map((post) => (
              <div key={post.id} className="flex flex-col group cursor-pointer">
                <div className="relative">
                  <img
                    src={`https://picsum.photos/seed/${post.id}/200/200`}
                    alt=""
                    className="w-full h-auto object-cover mb-3 transition duration-300 group-hover:opacity-80"
                  />

                  <div className="absolute top-2 right-2 z-10 flex flex-col space-y-1">
                    <div className="bg-gray-800/60 text-white p-1 rounded-full text-lg hover:bg-red-600 transition duration-150">
                      <AiOutlineLike onClick={() => handleLIke(post)} />
                    </div>

                    <div className="bg-gray-800/60 text-white p-1 rounded-full text-lg hover:bg-red-600 transition duration-150">
                      <AiOutlineDislike onClick={() => handleDisLIke(post)} />
                    </div>
                  </div>
                </div>
                <div onClick={() => handleDetailPage(post.id)}>
                  <div className="text-xs text-gray-500 mb-2 flex items-center">
                    <span className="font-semibold text-blue-600 mr-2">
                      Ўзбекистон
                    </span>
                    <span className="mr-3">| 20:55 / 15.10.2025</span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 mb-1 leading-snug group-hover:text-red-600 transition duration-150 line-clamp-1">
                    {post.title}
                  </h2>

                  <h2 className="text-lg font-bold text-gray-900 mb-1 leading-snug  line-clamp-3">
                    {post.body}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
