const HeroSection = () => {
  return (
    <section id="hero" className="py-20 md:py-32">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Aspiring AI Researcher
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto md:mx-0">
            Chào bạn, mình là Tuấn. Đây là nơi mình chia sẻ hành trình khám phá
            Toán học và Trí tuệ nhân tạo
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
            >
              Xem dự án
            </a>
            <a
              href="https://github.com/tuanairesearch"
              target="_blank"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-50"></div>
          <img
            src="https://placehold.co/400x400/1E293B/E2E8F0?text=BAT"
            alt="Ảnh chân dung Bùi Anh Tuấn"
            className="relative rounded-full object-cover w-full h-full border-4 border-slate-800"
          />
        </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
