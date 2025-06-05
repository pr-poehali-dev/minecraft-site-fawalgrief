import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded border-2 border-green-400"></div>
            <h1 className="text-xl font-bold font-montserrat">FawalGrief</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-green-400 transition-colors">
              Главная
            </a>
            <a
              href="#features"
              className="hover:text-green-400 transition-colors"
            >
              Особенности
            </a>
            <a href="#stats" className="hover:text-green-400 transition-colors">
              Статистика
            </a>
            <a
              href="#discord"
              className="hover:text-green-400 transition-colors"
            >
              Discord
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name="Menu" size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2">
              <a
                href="#home"
                className="hover:text-green-400 transition-colors py-2"
              >
                Главная
              </a>
              <a
                href="#features"
                className="hover:text-green-400 transition-colors py-2"
              >
                Особенности
              </a>
              <a
                href="#stats"
                className="hover:text-green-400 transition-colors py-2"
              >
                Статистика
              </a>
              <a
                href="#discord"
                className="hover:text-green-400 transition-colors py-2"
              >
                Discord
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
