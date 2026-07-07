import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
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
    <div className="flex min-h-screen items-center justify-center px-4 py-16 text-terminal-output">
      <div className="site-card site-reveal max-w-md p-8 text-center">
        <div className="site-kicker">route not found</div>
        <h1 className="site-pixel-title !text-[clamp(3rem,18vw,6rem)]">404</h1>
        <p className="text-xl font-black text-terminal-command">{t('errors.404_title')}</p>
        <p className="mt-3 text-base font-medium text-terminal-muted">{t('errors.404_message')}</p>
        <Link to="/" className="site-button is-primary mt-6">
          {t('errors.404_back_home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
