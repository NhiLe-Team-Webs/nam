import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "@/components/LanguageToggle";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      <LanguageToggle />
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10"
      >
        <h1 className="text-9xl font-black text-primary/20 mb-4 select-none">404</h1>
        <h2 className="text-3xl font-bold mb-6 text-foreground">{t('not_found.title')}</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          {t('not_found.description')}
        </p>
        <a href="/" className="inline-block">
          <Button variant="hero" size="lg">
            {t('not_found.button')}
          </Button>
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;
