const DonatePackages = () => {
  const packages = [
    {
      name: "Dragon",
      price: "39₽",
      color: "from-red-500 to-orange-500",
      icon: "🐉",
      privileges: [],
    },
    {
      name: "Tiger",
      price: "79₽",
      color: "from-orange-500 to-yellow-500",
      icon: "🐅",
      privileges: [],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-montserrat">
          🎁 Донат-пакеты
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Поддержи сервер и получи уникальные привилегии для лучшего игрового
          опыта
        </p>

        <div className="max-w-md mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-orange-200 transition-all duration-300 hover:shadow-xl"
            >
              <div
                className={`bg-gradient-to-r ${pkg.color} p-6 text-white text-center`}
              >
                <div className="text-4xl mb-2">{pkg.icon}</div>
                <h3 className="text-2xl font-bold font-montserrat">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold mt-2">{pkg.price}</div>
              </div>

              <div className="p-6">
                <h4 className="font-bold text-lg mb-4 text-gray-800">
                  ✨ Привилегии:
                </h4>
                <ul className="space-y-3">
                  {pkg.privileges.map((privilege, privIndex) => (
                    <li key={privIndex} className="flex items-start gap-3">
                      <span className="text-green-500 text-sm mt-1">✓</span>
                      <span className="text-gray-700">{privilege}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full mt-6 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
                  💳 Купить {pkg.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            💡 После покупки привилегии активируются автоматически в течение 5
            минут
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonatePackages;
