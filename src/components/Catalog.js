import React, { useState, useMemo } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import genericPlaceholderImg from '../img/businessCard.png'; // Generic placeholder image
import businessCardImage from '../img/businessCard.png'; // Specific image for Kartvizit

const products = [
  { 
    id: 1, 
    name: 'Kartvizit', 
    description: 'Profesyonel ve şık kartvizitler. Kurumsal kimliğinizi en iyi şekilde yansıtan tasarımlar.', 
    imageSrc: businessCardImage, 
    imageAlt: 'Kartvizit',
    price: '₺0.50 - ₺2.00 / adet',
    details: [
      'Standart boyut: 85x55mm',
      '300gr kuşe kağıt',
      'Mat veya parlak selefon',
      '1-2 gün teslimat',
      'Minimum 100 adet'
    ]
  },
  { 
    id: 2, 
    name: 'Antetli Kâğıt', 
    description: 'Kurumsal kimliğinizi yansıtan antetli kağıtlar. Profesyonel yazışmalarınız için ideal.', 
    imageSrc: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Antetli Kâğıt',
    price: '₺0.15 - ₺0.50 / adet',
    details: [
      'A4 boyut (210x297mm)',
      '80gr, 90gr, 100gr seçenekleri',
      'Ofset veya dijital baskı',
      '1-3 gün teslimat',
      'Minimum 100 adet'
    ]
  },
  { 
    id: 3, 
    name: 'Zarf Çeşitleri', 
    description: 'Farklı boyut ve tasarımlarda zarflar. Kurumsal ve kişisel kullanım için.', 
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Zarf Çeşitleri',
    price: '₺0.25 - ₺1.50 / adet',
    details: [
      'C6, C5, C4, DL boyutları',
      'Beyaz veya renkli kağıt',
      'Yapışkanlı veya yapışkansız',
      '1-2 gün teslimat',
      'Minimum 50 adet'
    ]
  },
  { 
    id: 4, 
    name: 'Resmi Belgeler', 
    description: 'Resmi yazışmalarınız için belgeler. Devlet kurumları standartlarına uygun.', 
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Resmi Belgeler',
    price: '₺0.20 - ₺0.80 / adet',
    details: [
      'A4 boyut',
      '80gr resmi kağıt',
      'Ofset baskı',
      '1-3 gün teslimat',
      'Minimum 100 adet'
    ]
  },
  { 
    id: 5, 
    name: 'Broşürler', 
    description: 'Etkili tanıtım için broşürler. Ürün ve hizmetlerinizi tanıtmak için ideal.', 
    imageSrc: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Broşürler',
    price: '₺0.15 - ₺0.60 / adet',
    details: [
      'A4, A5, A6 boyutları',
      '300gr kuşe kağıt',
      '4+0 veya 4+4 renkli baskı',
      '2-5 gün teslimat',
      'Minimum 100 adet'
    ]
  },
  { 
    id: 6, 
    name: 'Katalog', 
    description: 'Ürün ve hizmetlerinizi sergileyen kataloglar. Profesyonel sunum için.', 
    imageSrc: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Katalog',
    price: '₺2.00 - ₺8.00 / adet',
    details: [
      'A4, A5 boyutları',
      '300gr kuşe kağıt',
      'Spiral ciltleme',
      '3-7 gün teslimat',
      'Minimum 50 adet'
    ]
  },
  { 
    id: 7, 
    name: 'Bloknot Çeşitleri', 
    description: 'Özel tasarım bloknotlar. Markanızı her yerde hatırlatın.', 
    imageSrc: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Bloknot Çeşitleri',
    price: '₺3.00 - ₺12.00 / adet',
    details: [
      'A4, A5, A6 boyutları',
      '80gr beyaz kağıt',
      'Spiral veya yapıştırmalı',
      '2-5 gün teslimat',
      'Minimum 25 adet'
    ]
  },
  { 
    id: 8, 
    name: 'Sunum Dosyası', 
    description: 'Profesyonel sunum dosyaları. İş toplantılarınız için şık çözümler.', 
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Sunum Dosyası',
    price: '₺5.00 - ₺20.00 / adet',
    details: [
      'A4 boyut',
      'Plastik veya karton kapak',
      'İç sayfa sayısına göre fiyat',
      '2-5 gün teslimat',
      'Minimum 10 adet'
    ]
  },
  { 
    id: 9, 
    name: 'Klasör', 
    description: 'Belgelerinizi düzenli tutmak için klasörler. Ofis organizasyonu için ideal.', 
    imageSrc: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Klasör',
    price: '₺8.00 - ₺25.00 / adet',
    details: [
      'A4 boyut',
      'Plastik veya karton malzeme',
      'Çeşitli renk seçenekleri',
      '2-5 gün teslimat',
      'Minimum 10 adet'
    ]
  },
  { 
    id: 10, 
    name: 'Karton Çanta', 
    description: 'Markanıza özel karton çantalar. Çevre dostu ve şık tasarımlar.', 
    imageSrc: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Karton Çanta',
    price: '₺2.50 - ₺8.00 / adet',
    details: [
      'Çeşitli boyutlar',
      '350gr karton',
      'Kulplu veya kulpuz',
      '3-7 gün teslimat',
      'Minimum 100 adet'
    ]
  },
  { 
    id: 11, 
    name: 'Restorant Menüsü', 
    description: 'Şık ve dayanıklı restoran menüleri. Müşterilerinize profesyonel görünüm.', 
    imageSrc: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Restorant Menüsü',
    price: '₺15.00 - ₺45.00 / adet',
    details: [
      'A4, A5 boyutları',
      'Laminasyonlu',
      'Spiral ciltleme',
      '3-7 gün teslimat',
      'Minimum 10 adet'
    ]
  },
  { 
    id: 12, 
    name: 'Kutu Çeşitleri', 
    description: 'Özel tasarım kutu çözümleri. Ürünlerinizi şık şekilde paketleyin.', 
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Kutu Çeşitleri',
    price: '₺3.00 - ₺15.00 / adet',
    details: [
      'Çeşitli boyutlar',
      'Karton veya kraft malzeme',
      'Özel kesim ve katlama',
      '5-10 gün teslimat',
      'Minimum 50 adet'
    ]
  },
  { 
    id: 13, 
    name: 'Plaket', 
    description: 'Ödül ve anı plaketleri. Başarılarınızı ölümsüzleştirin.', 
    imageSrc: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Plaket',
    price: '₺25.00 - ₺150.00 / adet',
    details: [
      'Çeşitli boyutlar',
      'Akrilik veya metal malzeme',
      'Lazer gravür',
      '3-7 gün teslimat',
      'Minimum 1 adet'
    ]
  },
  { 
    id: 14, 
    name: 'Kırlangıç Bayrak', 
    description: 'Etkinlikler için kırlangıç bayraklar. Dikkat çekici tanıtım çözümleri.', 
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Kırlangıç Bayrak',
    price: '₺8.00 - ₺25.00 / adet',
    details: [
      'Çeşitli boyutlar',
      'Dayanıklı kumaş',
      'Metal direk dahil',
      '3-7 gün teslimat',
      'Minimum 10 adet'
    ]
  },
  { 
    id: 15, 
    name: 'Yelken Bayrak', 
    description: 'Dış mekan tanıtım için yelken bayraklar. Rüzgarlı havalarda bile etkili.', 
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Yelken Bayrak',
    price: '₺12.00 - ₺35.00 / adet',
    details: [
      'Çeşitli boyutlar',
      'Su geçirmez kumaş',
      'Metal direk dahil',
      '3-7 gün teslimat',
      'Minimum 5 adet'
    ]
  },
  { 
    id: 16, 
    name: 'Banner', 
    description: 'Görsel açıdan zengin bannerlar. Büyük format baskı çözümleri.', 
    imageSrc: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Banner',
    price: '₺15.00 - ₺80.00 / m²',
    details: [
      'Çeşitli boyutlar',
      'Vinil malzeme',
      'Delikli kenarlar',
      '2-5 gün teslimat',
      'Minimum 1 m²'
    ]
  },
  { 
    id: 17, 
    name: 'Rollup', 
    description: 'Taşınabilir ve pratik rollup standlar. Fuar ve etkinlikler için ideal.', 
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Rollup',
    price: '₺200.00 - ₺400.00 / adet',
    details: [
      '85cm x 200cm standart',
      'Alüminyum gövde',
      'Taşıma çantası dahil',
      '5-10 gün teslimat',
      'Minimum 1 adet'
    ]
  },
  { 
    id: 18, 
    name: 'Folyo Baskı', 
    description: 'Çeşitli yüzeylere folyo baskı. Metalik ve parlak efektler.', 
    imageSrc: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Folyo Baskı',
    price: '₺0.50 - ₺2.00 / adet',
    details: [
      'Altın, gümüş, renkli folyo',
      'Çeşitli yüzeyler',
      'Hassas kesim',
      '2-5 gün teslimat',
      'Minimum 100 adet'
    ]
  },
  { 
    id: 19, 
    name: 'Folyo Kesim', 
    description: 'Hassas folyo kesim hizmetleri. Özel tasarımlarınızı hayata geçirin.', 
    imageSrc: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Folyo Kesim',
    price: '₺0.30 - ₺1.50 / adet',
    details: [
      'Lazer kesim teknolojisi',
      'Çeşitli folyo türleri',
      'Hassas detaylar',
      '2-5 gün teslimat',
      'Minimum 50 adet'
    ]
  },
  { 
    id: 20, 
    name: 'Bez Çanta', 
    description: 'Çevre dostu bez çantalar. Sürdürülebilir tanıtım çözümleri.', 
    imageSrc: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Bez Çanta',
    price: '₺8.00 - ₺25.00 / adet',
    details: [
      'Pamuklu veya jüt malzeme',
      'Çeşitli boyutlar',
      'Serigrafi veya transfer baskı',
      '5-10 gün teslimat',
      'Minimum 50 adet'
    ]
  },
  { 
    id: 21, 
    name: 'Promosyon Ürünler', 
    description: 'Marka bilinirliğini artıran promosyon ürünleri. Geniş ürün yelpazesi.', 
    imageSrc: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Promosyon Ürünler',
    price: '₺5.00 - ₺50.00 / adet',
    details: [
      'Kalem, mouse pad, bardak',
      'Çeşitli malzemeler',
      'Özel baskı teknikleri',
      '5-15 gün teslimat',
      'Minimum 50 adet'
    ]
  },
  { 
    id: 22, 
    name: 'Afiş Çeşitleri', 
    description: 'Etkileyici afiş tasarımları. Dikkat çekici görsel çözümler.', 
    imageSrc: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Afiş Çeşitleri',
    price: '₺8.00 - ₺40.00 / adet',
    details: [
      'A3, A2, A1 boyutları',
      '300gr kuşe kağıt',
      '4+0 renkli baskı',
      '2-5 gün teslimat',
      'Minimum 10 adet'
    ]
  },
  { 
    id: 23, 
    name: 'Takvim Çeşitleri', 
    description: 'Özel tasarım takvimler. Yıl boyunca markanızı hatırlatın.', 
    imageSrc: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Takvim Çeşitleri',
    price: '₺3.00 - ₺15.00 / adet',
    details: [
      'Duvar, masa, cep takvimi',
      'Çeşitli boyutlar',
      'Spiral ciltleme',
      '3-7 gün teslimat',
      'Minimum 25 adet'
    ]
  },
  { 
    id: 24, 
    name: 'Kaşe Çeşitleri', 
    description: 'Farklı kaşe modelleri. Resmi belgeleriniz için gerekli.', 
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Kaşe Çeşitleri',
    price: '₺25.00 - ₺80.00 / adet',
    details: [
      'Çeşitli boyutlar',
      'Plastik veya metal gövde',
      'Mürekkep dahil',
      '3-7 gün teslimat',
      'Minimum 1 adet'
    ]
  },
  { 
    id: 25, 
    name: 'Dijital Baskı', 
    description: 'Yüksek kaliteli dijital baskı hizmetleri. Hızlı ve kaliteli çözümler.', 
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center', 
    imageAlt: 'Dijital Baskı',
    price: '₺0.10 - ₺1.50 / adet',
    details: [
      'Çeşitli kağıt türleri',
      'Hızlı teslimat',
      'Küçük tirajlar',
      '1-3 gün teslimat',
      'Minimum 1 adet'
    ]
  },
];

const Catalog = ({ onImageClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term
  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;
    
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-6 sm:mb-8 text-gray-800">Ürünlerimiz</h2>
      
      {/* Search Bar */}
      <div className="max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Ürün ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Results Count */}
      {searchTerm && (
        <div className="text-center mb-6">
          <p className="text-gray-600">
            <span className="font-semibold text-orange-500">{filteredProducts.length}</span> ürün bulundu
          </p>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-1"
            onClick={() => onImageClick(product)}
          >
            <div className="relative">
              <img 
                src={product.imageSrc} 
                alt={product.imageAlt} 
                className="w-full h-40 sm:h-48 object-cover" 
              />
              <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                {product.price}
              </div>
            </div>
            <div className="p-3 sm:p-4 lg:p-5">
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">{product.name}</h3>
              <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredProducts.length === 0 && searchTerm && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Ürün bulunamadı</h3>
          <p className="text-gray-600 mb-4">
            "{searchTerm}" araması için sonuç bulunamadı.
          </p>
          <button
            onClick={() => setSearchTerm('')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
          >
            Tüm Ürünleri Göster
          </button>
        </div>
      )}
    </div>
  );
};

export default Catalog;
