const Features = () => {
  const features = [
    {
      icon: "⚔️",
      title: "PvP Арены",
      description:
        "Сражайся с другими игроками на специальных аренах с уникальными наградами",
    },
    {
      icon: "🏗️",
      title: "Защита территории",
      description:
        "Система приватов поможет защитить твои постройки от гриферов",
    },
    {
      icon: "💰",
      title: "Экономика",
      description:
        "Развитая торговая система с магазинами и аукционами игроков",
    },
    {
      icon: "🎯",
      title: "Квесты",
      description:
        "Выполняй задания и получай редкие награды за свои достижения",
    },
    {
      icon: "🏆",
      title: "Рейтинги",
      description: "Соревнуйся с другими игроками в различных номинациях",
    },
    {
      icon: "🔧",
      title: "Кастомные плагины",
      description: "Уникальные модификации, которых нет на других серверах",
    },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">
          ⭐ Особенности сервера
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 font-montserrat">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
