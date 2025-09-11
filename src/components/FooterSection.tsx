import React from 'react';
import { useTranslation } from 'react-i18next';

const FooterSection = () => {
  const { t, i18n } = useTranslation();
  const isTurkish = i18n.language?.toLowerCase().startsWith('tr');

  return (
    <div className="text-center text-sm text-[#7b7a7f] mt-8">
      <div className="flex items-center justify-center gap-1 mb-1">
        {isTurkish ? (
          <>
            <span className="glow-accent font-semibold">Çağan</span>
            <span>{t('footer.made_with')}</span>
            <span role="img" aria-label="heart">❤️</span>
            <span>{t('footer.by')}</span>
          </>
        ) : (
          <>
            <span>{t('footer.made_with')}</span>
            <span role="img" aria-label="heart">❤️</span>
            <span>{t('footer.by')}</span>
            <span className="glow-accent font-semibold">Çağan</span>
          </>
        )}
      </div>
      <div>{t('footer.copyright')}</div>
    </div>
  );
};

export default FooterSection;