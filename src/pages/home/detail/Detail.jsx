import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../helpers/API/api";
import { FiEye } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Detail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    API.get(`/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((error) => {
        console.log(error.message || "XATOLIK");
      });
  }, [id]);

  if (!post) {
    return (
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            {t("header.load")}
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center text-sm text-gray-500 mb-6 border-b border-gray-200 pb-4">
          <span className="mr-4">19:07/ 15/10/2025</span>

          <span className="flex items-center">
            <FiEye className="w-4 h-4 mr-1" />
            {post.views || "N/A"}
          </span>
        </div>

        <img
          src="https://storage.kun.uz/source/11/I40b5I4X2F_EqEu6H0RBA1nwOjhkHT9X.jpg"
          alt={post.title}
          className="w-full h-auto object-cover rounded-lg shadow-md mb-8"
        />

        <div className="prose max-w-none">
          <p className="text-lg text-gray-800 leading-relaxed mb-6 whitespace-pre-wrap">
            {post.body}
            <br />
            <br />
            <p>{post.body}</p>
            <p className="font-bold">
              {t("header.reak")} 👍 {post.reactions[0]} | ❤️ {post.reactions[1]}
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
