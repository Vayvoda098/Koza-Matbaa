import React from 'react';
import genericPlaceholderImg from '../img/businessCard.png'; // Generic placeholder image
import businessCardImage from '../img/businessCard.png'; // Specific image for Kartvizit

const products = [
  { id: 1, name: 'Kartvizit', description: 'Profesyonel ve şık kartvizitler.', imageSrc: businessCardImage, imageAlt: 'Kartvizit' },
  { id: 2, name: 'Antetli Kâğıt', description: 'Kurumsal kimliğinizi yansıtan antetli kağıtlar.', imageSrc: genericPlaceholderImg, imageAlt: 'Antetli Kâğıt' },
  { id: 3, name: 'Zarf Çeşitleri', description: 'Farklı boyut ve tasarımlarda zarflar.', imageSrc: genericPlaceholderImg, imageAlt: 'Zarf Çeşitleri' },
  { id: 4, name: 'Resmi Belgeler', description: 'Resmi yazışmalarınız için belgeler.', imageSrc: genericPlaceholderImg, imageAlt: 'Resmi Belgeler' },
  { id: 5, name: 'Broşürler', description: 'Etkili tanıtım için broşürler.', imageSrc: genericPlaceholderImg, imageAlt: 'Broşürler' },
  { id: 6, name: 'Katalog', description: 'Ürün ve hizmetlerinizi sergileyen kataloglar.', imageSrc: genericPlaceholderImg, imageAlt: 'Katalog' },
  { id: 7, name: 'Bloknot Çeşitleri', description: 'Özel tasarım bloknotlar.', imageSrc: genericPlaceholderImg, imageAlt: 'Bloknot Çeşitleri' },
  { id: 8, name: 'Sunum Dosyası', description: 'Profesyonel sunum dosyaları.', imageSrc: genericPlaceholderImg, imageAlt: 'Sunum Dosyası' },
  { id: 9, name: 'Klasör', description: 'Belgelerinizi düzenli tutmak için klasörler.', imageSrc: genericPlaceholderImg, imageAlt: 'Klasör' },
  { id: 10, name: 'Karton Çanta', description: 'Markanıza özel karton çantalar.', imageSrc: genericPlaceholderImg, imageAlt: 'Karton Çanta' },
  { id: 11, name: 'Restorant Menüsü', description: 'Şık ve dayanıklı restoran menüleri.', imageSrc: genericPlaceholderImg, imageAlt: 'Restorant Menüsü' },
  { id: 12, name: 'Kutu Çeşitleri', description: 'Özel tasarım kutu çözümleri.', imageSrc: genericPlaceholderImg, imageAlt: 'Kutu Çeşitleri' },
  { id: 13, name: 'Plaket', description: 'Ödül ve anı plaketleri.', imageSrc: genericPlaceholderImg, imageAlt: 'Plaket' },
  { id: 14, name: 'Kırlangıç Bayrak', description: 'Etkinlikler için kırlangıç bayraklar.', imageSrc: genericPlaceholderImg, imageAlt: 'Kırlangıç Bayrak' },
  { id: 15, name: 'Yelken Bayrak', description: 'Dış mekan tanıtım için yelken bayraklar.', imageSrc: genericPlaceholderImg, imageAlt: 'Yelken Bayrak' },
  { id: 16, name: 'Banner', description: 'Görsel açıdan zengin bannerlar.', imageSrc: genericPlaceholderImg, imageAlt: 'Banner' },
  { id: 17, name: 'Rollup', description: 'Taşınabilir ve pratik rollup standlar.', imageSrc: genericPlaceholderImg, imageAlt: 'Rollup' },
  { id: 18, name: 'Folyo Baskı', description: 'Çeşitli yüzeylere folyo baskı.', imageSrc: genericPlaceholderImg, imageAlt: 'Folyo Baskı' },
  { id: 19, name: 'Folyo Kesim', description: 'Hassas folyo kesim hizmetleri.', imageSrc: genericPlaceholderImg, imageAlt: 'Folyo Kesim' },
  { id: 20, name: 'Bez Çanta', description: 'Çevre dostu bez çantalar.', imageSrc: genericPlaceholderImg, imageAlt: 'Bez Çanta' },
  { id: 21, name: 'Promosyon Ürünler', description: 'Marka bilinirliğini artıran promosyon ürünleri.', imageSrc: genericPlaceholderImg, imageAlt: 'Promosyon Ürünler' },
  { id: 22, name: 'Afiş Çeşitleri', description: 'Etkileyici afiş tasarımları.', imageSrc: genericPlaceholderImg, imageAlt: 'Afiş Çeşitleri' },
  { id: 23, name: 'Takvim Çeşitleri', description: 'Özel tasarım takvimler.', imageSrc: genericPlaceholderImg, imageAlt: 'Takvim Çeşitleri' },
  { id: 24, name: 'Kaşe Çeşitleri', description: 'Farklı kaşe modelleri.', imageSrc: genericPlaceholderImg, imageAlt: 'Kaşe Çeşitleri' },
  { id: 25, name: 'Dijital Baskı', description: 'Yüksek kaliteli dijital baskı hizmetleri.', imageSrc: genericPlaceholderImg, imageAlt: 'Dijital Baskı' },
];

const Catalog = ({ onImageClick }) => {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Ürünlerimiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-1"
            onClick={() => onImageClick(product)}
          >
            <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="font-bold text-xl mb-2 text-gray-900">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
