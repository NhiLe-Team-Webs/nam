import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LanguageToggle = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <motion.div
            className="fixed top-4 right-4 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
        >
            <div className="flex items-center bg-black/40 backdrop-blur-md border border-primary/20 rounded-full p-1 relative">
                <button
                    onClick={() => changeLanguage('vi')}
                    className={cn(
                        "relative z-10 px-4 py-1.5 text-xs sm:text-sm font-bold rounded-full transition-colors duration-300",
                        i18n.language === 'vi' ? "text-black" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    VN
                    {i18n.language === 'vi' && (
                        <motion.div
                            layoutId="active-lang-pill"
                            className="absolute inset-0 bg-primary rounded-full -z-10"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                </button>
                <button
                    onClick={() => changeLanguage('en')}
                    className={cn(
                        "relative z-10 px-4 py-1.5 text-xs sm:text-sm font-bold rounded-full transition-colors duration-300",
                        i18n.language === 'en' ? "text-black" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    EN
                    {i18n.language === 'en' && (
                        <motion.div
                            layoutId="active-lang-pill"
                            className="absolute inset-0 bg-primary rounded-full -z-10"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                </button>
            </div>
        </motion.div>
    );
};
