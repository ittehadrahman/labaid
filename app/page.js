import Hero from "@/components/Home/Hero";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("common"); // Load the 'common' namespace

  return (
    <>
      <Hero />
      <section id="services" className="py-12 container mx-auto">
        {/* Use translation for the heading */}
        <h2 className="text-2xl font-bold mb-6">{t("services")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Translate each section */}
          <div className="p-6 bg-gray-100 rounded">
            <h3 className="font-semibold text-lg">{t("laserTreatmentsTitle")}</h3>
            <p>{t("laserTreatmentsDescription")}</p>
          </div>
          <div className="p-6 bg-gray-100 rounded">
            <h3 className="font-semibold text-lg">{t("aestheticProceduresTitle")}</h3>
            <p>{t("aestheticProceduresDescription")}</p>
          </div>
          <div className="p-6 bg-gray-100 rounded">
            <h3 className="font-semibold text-lg">{t("skinCareTitle")}</h3>
            <p>{t("skinCareDescription")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
