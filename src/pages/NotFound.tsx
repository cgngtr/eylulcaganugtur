import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t('errors.404_title')}</h1>
        <p className="text-xl text-gray-600 mb-4">{t('errors.404_message')}</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          {t('errors.404_back_home')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
