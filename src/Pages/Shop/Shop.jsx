import React from "react";
import "./Shop.css";

const categories = ["Adventure", "Random", "Classic", "Biography", "Designing"];
const books = [
    {
      title: "Aylak Adam",
      author: "Yusuf Atılgan",
      publisher: "CAN YAYINLARI",
      pages: 192,
      language: "TÜRKÇE",
      discount: "62%",
      price: 12.38,
      originalPrice: 33,
      rating: 4,
      stock: 2627,
      coverType: "Karton Kapak",
      paperType: "Kitap Kağıdı",
      isbn: "9789750000000",
      publishDate: "2019-08-06",
      url: "https://www.kitapyurdu.com/kitap/aylak-adam/434326.html&path=1",
      imageUrl: "https://img.kitapyurdu.com/v1/getImage/fn:11438831/wi:100/wh:true",
    },
    {
      title: "Delifişek",
      author: "Jose Mauro De Vasconcelos",
      publisher: "CAN YAYINLARI",
      pages: 88,
      language: "TÜRKÇE",
      discount: "64%",
      price: 9.42,
      originalPrice: 26,
      rating: 5,
      stock: 3541,
      coverType: "Karton Kapak",
      paperType: "3. Hm. Kağıt",
      isbn: "9789750000000",
      publishDate: "2019-08-06",
      url: "https://www.kitapyurdu.com/kitap/delifisek/13565.html&path=1",
      imageUrl: "https://img.kitapyurdu.com/v1/getImage/fn:11482568/wi:100/wh:true",
    },
    {
      title: "Pal Sokağı Çocukları",
      author: "Ferenc Molnar",
      publisher: "YAPI KREDİ YAYINLARI",
      pages: 235,
      language: "TÜRKÇE",
      discount: "40%",
      price: 17.96,
      originalPrice: 30,
      rating: 5,
      stock: 3026,
      coverType: "Karton Kapak",
      paperType: "Kitap Kağıdı",
      isbn: "9789750000000",
      publishDate: "2021-10-08",
      url: "https://www.kitapyurdu.com/kitap/pal-sokagi-cocuklari/125370.html&path=1",
      imageUrl: "https://img.kitapyurdu.com/v1/getImage/fn:1030555/wi:100/wh:true",
    },
    {
      title: "İnce Memed 1",
      author: "Yaşar Kemal",
      publisher: "YAPI KREDİ YAYINLARI",
      pages: 436,
      language: "TÜRKÇE",
      discount: "49%",
      price: 22.95,
      originalPrice: 45,
      rating: 5,
      stock: 3677,
      coverType: "Karton Kapak",
      paperType: "Kitap Kağıdı",
      isbn: "9789750000000",
      publishDate: "2021-12-27",
      url: "https://www.kitapyurdu.com/kitap/ince-memed-1/57300.html&path=1",
      imageUrl: "https://img.kitapyurdu.com/v1/getImage/fn:6663013/wi:100/wh:true",
    },
    {
      title: "Babaannem Geri Döndü",
      author: "Şermin Yaşar",
      publisher: "TAZE KİTAP",
      pages: 160,
      language: "TÜRKÇE",
      discount: "37%",
      price: 39.22,
      originalPrice: 62,
      rating: 5,
      stock: 245,
      coverType: "Karton Kapak",
      paperType: "Kitap Kağıdı",
      isbn: "9786060000000",
      publishDate: "2021-04-12",
      url: "https://www.kitapyurdu.com/kitap/babaannem-geri-dondu/578116.html&path=1",
      imageUrl: "https://img.kitapyurdu.com/v1/getImage/fn:11396589/wi:100/wh:true",
    },
    {
      title: "İyileşen Evliliğim",
      author: "Hatice Kübra Tongar",
      publisher: "HAYY KİTAP",
      pages: 200,
      language: "TÜRKÇE",
      discount: "40%",
      price: 19.18,
      originalPrice: 32,
      rating: 5,
      stock: 111,
      coverType: "Karton Kapak",
      paperType: "Kitap Kağıdı",
      isbn: "9786260000000",
      publishDate: "2021-10-25",
      url: "https://www.kitapyurdu.com/kitap/iyilesen-evliligim/597416.html&path=1",
      imageUrl: "https://img.kitapyurdu.com/v1/getImage/fn:11469116/wi:100/wh:true",
    },
    {
      title: "Gerçek Tıp & Yitik Şifanın İzinde",
      author: "Aidin Salih",
      publisher: "YİTİK ŞİFA",
      pages: 432,
      language: "TÜRKÇE",
      discount: "31%",
      price: 51.96,
      originalPrice: 75,
      rating: 5,
      stock: 2254,
      coverType: "Karton Kapak",
      paperType: "Kitap Kağıdı",
      isbn: "9786060000000",
      publishDate: "2017-02-23",
      url: "https://www.kitapyurdu.com/kitap/gercek-tip-amp-yitik-sifanin-izinde/409003.html&path=1",
      imageUrl: "https://img.kitapyurdu.com/v1/getImage/fn:2465557/wi:100/wh:true",
    },
    {
      title: "Kuyucaklı Yusuf",
      author: "Sabahattin Ali",
      publisher: "YAPI KREDİ YAYINLARI",
      pages: 221,
      language: "TÜRKÇE",
      discount: "42%",
      price: 5.26,
      originalPrice: 9,
      rating: 5,
      stock: 10224,
      coverType: "Karton Kapak",
      paperType: "Kitap Kağıdı",
      isbn: "9789750000000",
      publishDate: "2019-08-06",
      url: "https://www.kitapyurdu.com/kitap/kuyucakli-yusuf/62333.html&path=1",
      imageUrl: "https://img.kitapyurdu.com/v1/getImage/fn:1105919/wi:100/wh:true",
    },
    {
      title: "Tutunamayanlar / Bütün Eserleri 1",
      author: "Oğuz Atay",
      publisher: "İLETİŞİM YAYINLARI",
      pages: 724,
      language: "TÜRKÇE",
      discount: "40%",
      price: 47.02,
      originalPrice: 78,
      rating: 5,
      stock: 5528,
      coverType: "Karton Kapak",
      paperType: "Kitap Kağıdı",
      isbn: "9789750000000",
      publishDate: "2022-01-27",
      url: "https://www.kitapyurdu.com/kitap/tutunamayanlar--butun-eserleri-1/18252.html&path=1",
      imageUrl: "https://img.kitapyurdu.com/v1/getImage/fn:11462655/wi:100/wh:true",
    },
    {
      title: "Yüzyıllık Yalnızlık (Ciltsiz)",
      author: "Gabriel Garcia Marquez",
      publisher: "CAN YAYINLARI",
      pages: 464,
      language: "TÜRKÇE",
      discount: "47%",
      price: 43.91,
      originalPrice: 83,
      rating: 4,
      stock: 5710,
      coverType: "Karton Kapak",
      paperType: "Kitap Kağıdı",
      isbn: "9789750000000",
      publishDate: "2019-09-24",
      url: "https://www.kitapyurdu.com/kitap/yuzyillik-yalnizlik-ciltsiz/10049.html&path=1",
      imageUrl: "https://img.kitapyurdu.com/v1/getImage/fn:11437413/wi:100/wh:true",
    },
  ];
  

  const Shop = () => {
    
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
          <span key={index} style={{ color: index < rating ? '#FFD700' : '#E0E0E0' }}>★</span>
        ));
      };
    return (
       
        
         
            <div className="first">
              {/* Header with Categories */}
              <header className="header">
                {categories.map((category) => (
                  <button key={category} className="category-btn">
                    {category}
                  </button>
                ))}
              </header>
        
              {/* Book List */}
              <main className="book-list">
                {books.map((book) => (
                  <div key={book.isbn} className="book-card">
                    {/* Book Image */}
                    <img src={book.imageUrl} alt={book.title} className="book-image" />
                    
                    {/* Book Info */}
                    <div className="book-info">
                      <h3 className="book-title">{book.title}</h3>
                      <p className="book-author">{book.author}</p>
                      <div className="book-rating">
                        <strong>Rating:</strong> {renderStars(book.rating)}
                      </div>
                      <p className="book-price">
                        <strong>Price:</strong> <span className="price">${book.price.toFixed(2)}</span>
                        <span className="original-price"> ${book.originalPrice.toFixed(2)}</span>
                        <span className="discount"> ({book.discount} OFF)</span>
                      </p>
                      <div className="buttons">
                        <a
                          href={book.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="view-detail-btn"
                        >
                          View Details
                        </a>
                        <button className="add-to-cart-btn">Add to Cart</button>
                        <button className="about-btn">About</button>
                      </div>
                    </div>
                  </div>
                ))}
              </main>
            </div>
    );
  };
  

  


export default Shop;