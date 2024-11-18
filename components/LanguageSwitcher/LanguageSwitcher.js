"use client";

import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();
  const changeLanguage = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => changeLanguage("en")}
        className={`${
          router.locale === "en" ? "font-bold underline" : "hover:underline"
        }`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("bn")}
        className={`${
          router.locale === "bn" ? "font-bold underline" : "hover:underline"
        }`}
      >
        বাংলা
      </button>
    </div>
  );
}
