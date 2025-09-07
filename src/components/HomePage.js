import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SplitText from "./SplitText";
import kozaLogo from "../img/kozaLogo.png";
import businessCardImage from "../img/businessCard.png";

const HomePage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  const services = [
    {
      title: "Kartvizit & Antetli Kağıt",
      description: "Profesyonel kurumsal kimlik tasarımları",
      icon: "📄",
    },
    {
      title: "Banner & Afiş",
      description: "Etkileyici tanıtım materyalleri",
      icon: "🎯",
    },
    {
      title: "Promosyon Ürünler",
      description: "Marka bilinirliğini artıran ürünler",
      icon: "🎁",
    },
    {
      title: "Dijital Baskı",
      description: "Yüksek kaliteli baskı hizmetleri",
      icon: "🖨️",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-yellow-500 z-0">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10 z-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <img
            src={kozaLogo}
            alt="Koza Matbaa Logo"
            className="mx-auto mb-10 w-100 "
          />

          <SplitText
            text="Kaliteli Baskı Hizmetleri"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            delay={500}
            duration={0.8}
            splitType="words"
          />

          <SplitText
            text="Profesyonel matbaa çözümleri ile işinizi büyütün"
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed"
            delay={1000}
            duration={0.6}
            splitType="words"
          />

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <Link
              to="/products"
              className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ürünlerimizi İncele
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <SplitText
              text="Hizmetlerimiz"
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              delay={200}
              duration={0.6}
            />
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Matbaa sektöründe uzman ekibimizle, her türlü baskı ihtiyacınızı
              karşılıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-2 shadow-sm hover:shadow-md"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Koza Matbaa Hakkında
              </div>

              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                Yılların deneyimi ve modern teknoloji ile matbaa sektöründe
                güvenilir bir partner olarak hizmet veriyoruz. Müşteri
                memnuniyeti odaklı yaklaşımımızla, her projeyi özenle ele
                alıyoruz.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center text-gray-700 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                  Modern baskı teknolojileri
                </li>
                <li className="flex items-center text-gray-700 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                  Hızlı teslimat garantisi
                </li>
                <li className="flex items-center text-gray-700 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                  Uygun fiyat politikası
                </li>
                <li className="flex items-center text-gray-700 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                  Profesyonel tasarım desteği
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Daha Fazla Bilgi
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src={businessCardImage}
                alt="Koza Matbaa Ürünleri"
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-orange-500 text-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold">25+</div>
                <div className="text-xs sm:text-sm">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div
           
            className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6"
            
          >Projenizi Hayata Geçirelim</div>
        
          <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8 opacity-90">
            Baskı ihtiyaçlarınız için hemen teklif alın. Uzman ekibimiz size en
            uygun çözümü sunacak.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <a
              href="https://wa.me/905559887253"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-orange-500 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              WhatsApp ile İletişim
            </a>
            <Link
              to="/products"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300"
            >
              Ürün Kataloğu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
