import { Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation(['common']);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 mt-auto py-6">
      <div className="container mx-auto px-6 lg:px-8 max-w-[90rem]">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
            <div className="flex items-center space-x-2">
              <a
                href="https://guilherme.stracini.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <img
                  alt="Guilherme Branco Stracini"
                  className="rounded-full ring-2 ring-primary/20 hover:ring-primary/40 transition-all"
                  loading="lazy"
                  src="https://guilherme.stracini.com.br/photo.png"
                  width="40"
                  height="40"
                />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {t('common:footer.developedBy')}
                  </span>
                  <span className="font-medium">Guilherme Branco Stracini</span>
                </div>
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/guibranco/clean-cv-maker"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors group"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {t('common:footer.repository')}
                  </span>
                  <span className="font-medium">GitHub</span>
                </div>
              </a>

              <div className="text-sm text-gray-500 dark:text-gray-400">
                © {currentYear} {t('common:footer.copyright')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
