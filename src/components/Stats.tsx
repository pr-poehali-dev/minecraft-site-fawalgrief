const Stats = () => {
  const stats = [
    { label: "Онлайн игроков", value: "247", icon: "👥" },
    { label: "Всего зарегистрировано", value: "15,432", icon: "📊" },
    { label: "Серверов", value: "5", icon: "🖥️" },
    { label: "Лет работы", value: "3", icon: "⏰" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">
          📈 Статистика сервера
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-green-600 mb-2 font-montserrat">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
