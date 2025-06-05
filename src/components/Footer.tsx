const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Server Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">
              FawalGrief
            </h3>
            <p className="text-gray-400 mb-4">
              Лучший Minecraft сервер для выживания с уникальными возможностями
            </p>
            <div className="space-y-2 text-sm">
              <div>
                IP: <span className="text-green-400">fawalgrief.mclan.ru</span>
              </div>
              <div>
                Версия: <span className="text-green-400">1.16.5</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">Ссылки</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                🎮 Правила сервера
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                💬 Discord сообщество
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                📺 YouTube канал
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                💎 Донат
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <div>📧 admin@fawalgrief.ru</div>
              <div>💬 Discord: https://discord.gg/jud8GJYe</div>
              <div>📱 Telegram: @ownerFawaGrief</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FawalGrief. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
