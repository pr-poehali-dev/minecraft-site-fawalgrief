import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-green-600 to-green-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-6">
            FawalGrief
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            🏰 Лучший Minecraft сервер для выживания и гриферства!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="bg-black bg-opacity-30 px-6 py-3 rounded-lg font-mono text-lg">
              IP: fawalgrief.ru
            </div>
            <div className="bg-black bg-opacity-30 px-6 py-3 rounded-lg">
              Версия: 1.16.5
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
            >
              🎮 Играть сейчас
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 text-lg"
            >
              💬 Discord
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
