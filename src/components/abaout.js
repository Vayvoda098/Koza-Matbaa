import React from 'react';
import SplitText from './SplitText';
import kozaLogo from '../img/kozaLogo.png';

const About = () => {
  const values = [
    {
      title: "Kalite",
      description: "Her projede en yüksek kalite standartlarını uyguluyoruz",
      icon: "⭐"
    },
    {
      title: "Güvenilirlik",
      description: "Zamanında teslimat ve güvenilir hizmet garantisi",
      icon: "🤝"
    },
    {
      title: "İnovasyon",
      description: "Sürekli gelişen teknoloji ile yenilikçi çözümler",
      icon: "💡"
    },
    {
      title: "Müşteri Odaklılık",
      description: "Müşteri memnuniyeti bizim önceliğimiz",
      icon: "❤️"
    }
  ];

  const timeline = [
    {
      year: "1998",
      title: "Kuruluş",
      description: "Koza Matbaa olarak matbaa sektöründe hizmet vermeye başladık"
    },
    {
      year: "2005",
      title: "Teknoloji Yatırımı",
      description: "Modern baskı makineleri ile hizmet kalitemizi artırdık"
    },
    {
      year: "2012",
      title: "Dijital Dönüşüm",
      description: "Dijital baskı teknolojilerine geçiş yaptık"
    },
    {
      year: "2020",
      title: "Online Hizmetler",
      description: "Müşterilerimize online sipariş ve takip imkanı sunduk"
    },
    {
      year: "2024",
      title: "Bugün",
      description: "Sektörde lider konumumuzu sürdürüyoruz"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <img 
            src={kozaLogo} 
            alt="Koza Matbaa Logo" 
            className="mx-auto mb-8 h-60 w-auto"
          />
          <SplitText
            text="Hakkımızda"
            className="flex justify-center text-5xl font-bold text-white mb-6"
            delay={200}
            duration={0.8}
          />
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Matbaa sektöründe 25 yılı aşkın deneyimimizle, kaliteli hizmet anlayışımızı sürdürüyoruz
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SplitText
                text="Hikayemiz"
                className="text-4xl font-bold text-gray-900 mb-6"
                delay={200}
                duration={0.6}
              />
              <p className="text-lg text-gray-600 mb-6">
                1998 yılında kurulan Koza Matbaa, matbaa sektöründe kaliteli hizmet 
                anlayışı ile müşterilerine hizmet vermeye başladı. Yıllar içinde 
                teknolojik gelişmeleri takip ederek, modern baskı makineleri ve 
                dijital teknolojiler ile hizmet kalitemizi sürekli artırdık.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Bugün, kartvizitten büyük format baskılara, promosyon ürünlerinden 
                kurumsal kimlik çalışmalarına kadar geniş bir yelpazede hizmet 
                veriyoruz. Müşteri memnuniyeti odaklı yaklaşımımız ve kaliteli 
                işçiliğimiz ile sektörde güvenilir bir marka haline geldik.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-500">25+</div>
                  <div className="text-sm text-gray-600">Yıllık Deneyim</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-500">1000+</div>
                  <div className="text-sm text-gray-600">Mutlu Müşteri</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
                <p className="text-gray-700 mb-6">
                  Matbaa sektöründe teknolojik yenilikleri takip ederek, 
                  müşterilerimize en kaliteli hizmeti sunmak ve sektörde 
                  öncü konumumuzu sürdürmek.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
                <p className="text-gray-700">
                  Müşteri memnuniyetini ön planda tutarak, kaliteli, 
                  zamanında ve uygun fiyatlı baskı hizmetleri sunmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SplitText
              text="Değerlerimiz"
              className="text-4xl font-bold text-gray-900 mb-4"
              delay={200}
              duration={0.6}
            />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İş yapış şeklimizi belirleyen temel değerlerimiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SplitText
              text="Yolculuğumuz"
              className="text-4xl font-bold text-gray-900 mb-4"
              delay={200}
              duration={0.6}
            />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Koza Matbaa'nın gelişim süreci
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold text-orange-500 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SplitText
              text="Ekibimiz"
              className="text-4xl font-bold text-gray-900 mb-4"
              delay={200}
              duration={0.6}
            />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deneyimli ve uzman ekibimizle hizmetinizdeyiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Yönetim</h3>
              <p className="text-gray-600">
                25 yıllık sektör deneyimi ile şirketimizi yönetiyor
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tasarım</h3>
              <p className="text-gray-600">
                Yaratıcı tasarım ekibimiz projelerinizi hayata geçiriyor
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🖨️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Üretim</h3>
              <p className="text-gray-600">
                Uzman teknik ekibimiz kaliteli üretim sağlıyor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div
            className="text-4xl font-bold text-white mb-6"
          >Bizimle Çalışın</div>
          {/* <SplitText
            text="Bizimle Çalışın"
            className="text-4xl font-bold text-white mb-6"
            delay={200}
            duration={0.6}
          /> */}
          <p className="text-xl text-white mb-8 opacity-90">
            Projeleriniz için güvenilir bir partner arıyorsanız, 
            Koza Matbaa olarak size hizmet vermekten mutluluk duyarız.
          </p>
          <a
            href="https://wa.me/905559887253"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Hemen İletişime Geçin
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
