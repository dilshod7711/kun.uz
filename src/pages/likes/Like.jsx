import { IoHeartSharp, IoTrashOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import usePostsApp from "../../hooks/usePostsApp.js";
import { Context } from "../../context/index.js";

const Like = () => {
  const { t } = useTranslation();
  const [likedPosts, setLikePosts] = usePostsApp(Context);

  const randomImageUrls = [
    "https://storage.kun.uz/source/thumbnails/_medium/11/2sdokOugC3qY-0N3x2qDwW33M9pD7Io8_medium.jpg",
    "https://storage.kun.uz/source/11/I40b5I4X2F_EqEu6H0RBA1nwOjhkHT9X.jpg",
    "https://storage.kun.uz/source/thumbnails/_medium/11/mW7ciDfcDz6khWgF4YIlvAv6jaqKI_Wm_medium.jpg",
    "	https://storage.kun.uz/source/thumbnails/_medium/11/5L_yKzvyavTb7bDNC4d9sx4ss3p5oO7P_medium.jpg",
    "	https://storage.kun.uz/source/thumbnails/_medium/11/Y2J6HqK0zEXaae80bjfZS2KcIJHNDGnd_medium.jpg",
    "	https://storage.kun.uz/source/thumbnails/_medium/11/CJbzBqFBAsxT2hDWw8M2QHwmehNfCsYk_medium.jpg",
    "https://storage.kun.uz/source/thumbnails/_medium/11/2sdokOugC3qY-0N3x2qDwW33M9pD7Io8_medium.jpg",
    "	https://storage.kun.uz/source/thumbnails/_medium/11/3bGr23_d5dEA-xBn4qbLsT67jPv_OR5c_medium.jpg",
  ];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * randomImageUrls.length);
    return randomImageUrls[randomIndex];
  };
  return (
    <section className="py-10 min-h-[80vh]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-6 pb-2 ">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {t("header.likes")}{" "}
            <IoHeartSharp className="inline-block text-red-600 ml-2" />
          </h1>
          {likedPosts.length > 0 && (
            <p className="text-lg font-medium text-gray-600">
              {likedPosts.length} {t("header.ta")}
            </p>
          )}
        </div>

        {likedPosts.length === 0 ? (
          <div className="p-10 bg-white rounded-lg shadow-lg text-center">
            <p className="text-xl text-gray-700 font-semibold mb-3">
              {t("header.yuq")}
            </p>
            <p className="text-gray-500">{t("header.byer")}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {likedPosts.map((post) => (
              <div
                key={post.id}
                className="flex bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
              >
                <div className="w-1/3 flex-shrink-0">
                  <img
                    src={`https://picsum.photos/seed/${post.id}/200/200`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 leading-snug hover:text-red-600 transition duration-150 cursor-pointer">
                      {post.title}
                    </h2>

                    <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                      {post.body}
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-xs text-gray-500 pt-2 border-t border-gray-100">
                    <div className="flex items-center">
                      <span className="font-semibold text-red-600 mr-3">
                        {t("header.saq")}
                      </span>
                      <span>20:17/ 15.10.2025</span>
                    </div>

                    <button
                      className="text-gray-400 hover:text-red-600 transition duration-150 p-1 rounded-full hover:bg-red-50"
                      title="Yoqtirilganlardan o'chirish"
                    >
                      <IoTrashOutline className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Like;
