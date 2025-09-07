import React, { useState } from 'react';
import kozaLogo from '../img/kozaLogo.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    'Kartvizit',
    'Antetli Kağıt',
    'Banner & Afiş',
    'Broşür & Katalog',
    'Promosyon Ürünler',
    'Dijital Baskı',
    'Kurumsal Kimlik',
    'Diğer'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      //  Halil Rıfat Paşa, Perpa Sk. Perpa Ticaret Merkezi No:860 B Blok, 34384 Şişli/İstanbul
      icon: "📍",
      title: "Adres",
      details: ["Koza Matbaa","Halil Rıfat Paşa", "Perpa Sk", "Perpa Ticaret Merkezi No:860 B Blok", "34000 Şişli/İstanbul "]
    },
    {
      icon: "📞",
      title: "Telefon",
      details: ["+90 555 988 72 53", "Pazartesi - Cuma: 09:00 - 13:00", "Cumartesi: 09:00 - 15:00"]
    },
    {
      icon: "✉️",
      title: "E-posta",
      details: [ "kozaoffset@gmail.com", "24 saat içinde yanıt"]
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: ["+90 555 988 72 53", "Anında mesajlaşma", "Hızlı teklif alma"]
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
            className="mx-auto mb-2 h-60 w-auto"
          />
          <h1 className="text-5xl font-bold text-white mb-6">İletişim</h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Projeleriniz için bizimle iletişime geçin. Size en uygun çözümü sunmak için buradayız.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            
            
            <div className="bg-gray-50 p-8 rounded-2xl">
            
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Teklif Alın</h2>
              <p className="text-gray-600 mb-8">
                Projeniz hakkında detayları paylaşın, size özel teklif hazırlayalım.
              </p>
              
               <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+90 555 123 45 67"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Şirket
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Şirket adınız"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Hizmet Türü
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Hizmet seçiniz</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Proje Detayları *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Projeniz hakkında detayları yazın (miktar, boyut, özel istekler vb.)"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Teklif Al'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                  </div>
                )}
              </form> 
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h2>
              <p className="text-gray-600 mb-8">
                Size en uygun iletişim yöntemini seçin. Uzman ekibimiz size yardımcı olmaya hazır.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 space-y-4">
                <a
                  href="https://wa.me/905559887253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp ile Hızlı İletişim
                </a>
                
                <a
                  href="tel:+905559887253"
                  className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Konumumuz</h2>
            <p className="text-xl text-gray-600">
              Ofisimizi ziyaret etmek isterseniz, işte konumumuz
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Koza Matbaa</h3>
                <p className="text-gray-600 mb-4">Halil Rıfat Paşa, Perpa Sk. Perpa Ticaret Merkezi No:860 B Blok</p>
                <p className="text-gray-600">34384 Şişli/İstanbul, Türkiye</p>
                <a
                // Koza Matbaacılık Reklamcılık San. ve Tic. Ltd. Şti.
                  href="https://www.google.com/maps/place/Koza+Matbaac%C4%B1l%C4%B1k+Reklamc%C4%B1l%C4%B1k+San.+ve+Tic.+Ltd.+%C5%9Eti./@41.0607145,28.968489,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab73cb01d0b2f:0xc212fa02ffbf946!8m2!3d41.0607105!4d28.9710639!16s%2Fg%2F11c74ktnb6?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Haritada Görüntüle
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Çalışma Saatleri</h2>
            <p className="text-xl text-gray-600">
              Size hizmet verdiğimiz saatler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center ">
              <div className="text-2xl font-bold text-orange-500 mb-2">Pazartesi - Cuma</div>
              <div className="text-gray-600">09:00 - 18:00</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-2xl font-bold text-orange-500 mb-2">Cumartesi</div>
              <div className="text-gray-600">09:00 - 13:00</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-2xl font-bold text-orange-500 mb-2">Pazar</div>
              <div className="text-gray-600">Kapalı</div>
            </div>
         
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
