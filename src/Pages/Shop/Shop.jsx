import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import './Shop.css';
import { useCart } from '../useContext/cartContext';


const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      className={`w-5 h-5 ${index < rating ? 'yellow' : 'text-gray-300'}`}
      fill={index < rating ? 'yellow' : 'none'}
    />
  ));
};

const Shop = () => {
  const { addToCart } = useCart();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredBookId, setHoveredBookId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 20;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`http://localhost:8000/books/allbooks?page=${currentPage}&limit=${booksPerPage}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [currentPage]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));


  
  
  const handleAddToCart = (book) => {
   

    const orderData = {
      book_id: book._id, 
      title: book.title,
      quantity: 1,
      price: book.price,
      image:book.image,
      
    };

    // Add book to cart using the global state
    addToCart(orderData);
    alert(`${book.title} has been added to your cart!`);
  };
  
  
  return (
    <>
      <h2 className="bestsellers-title">Explore Our Books</h2>
      <div className="books-grid">
        {books.map((book) => (
          <div
            className="product-card"
            key={book._id}
            onMouseEnter={() => setHoveredBookId(book._id)}
            onMouseLeave={() => setHoveredBookId(null)}
          >
            <div className="img-sec">
              <img src={book.image} alt={book.title} />
            </div>
            <div className="info-sec">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <div className="rating">
                {renderStars(book.rating)}
                <span className="rating-text">({book.rating}/5)</span>
              </div>
              <div className="price-section">
                <span className="current-price">
                  Discounted Price: ${book.discounted_price.toFixed(2)}
                </span>
                <span className="original-price">
                  Original Price: ${book.price.toFixed(2)}
                </span>
              </div>
            </div>

            {hoveredBookId === book._id && (
              <div className="book-dialog">
                <div className="book-dialog-content">
                  <h4>Book Details</h4>
                  <p><strong>Author:</strong> {book.author}</p>
                  <p><strong>Publisher:</strong> {book.publisher}</p>
                  <p><strong>Language:</strong> {book.language}</p>
                  <p><strong>Pages:</strong> {book.page}</p>
                  <p><strong>Paper Type:</strong> {book.paper}</p>
                  <p><strong>ISBN:</strong> {book.isbn}</p>
                  <p><strong>Stock:</strong> {book.stock}</p>
                  <p><strong>Rating:</strong> {book.rating}</p>
                  <p><strong>Discount Rate:</strong> {book.discount_rate}</p>
                  <p><strong>Published Date:</strong> {new Date(book.date).toLocaleDateString()}</p>
                  <a href={book.link} target="_blank" rel="noopener noreferrer">View on Other Store</a>
                  <div><button className="add-to-cart-button" onClick={() => handleAddToCart(book)}>Add to Cart</button></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 1} className="pagination-button prev-button">
          Previous
        </button>
        <button onClick={nextPage} disabled={books.length < booksPerPage} className="pagination-button next-button">
          Next
        </button>
      </div>

      <footer className="footer">
      <div className="footer-section">
        <div className="footer-column">
          <h4>Information</h4>
          <ul>
            <li>Covid-19: Delivery & Safety</li>
            <li>How to avail bank discounts</li>
            <li>Privacy Policy</li>
            <li>Returns and Exchange Policy</li>
            <li>About Us</li>
            <li>Our Bookstores</li>
            <li>Shipping & Delivery</li>
            <li>Bulk Order Queries</li>
            <li>Terms & Conditions</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>New Features</h4>
          <ul>
            <li>Send E-Gift Card</li>
            <li>Track Your Order</li>
            <li>Track Requested Book</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Customer Support</h4>
          <ul>
            <li>Returns</li>
            <li>Contact Us</li>
            <li>Site Map</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>For complaints and feedback:</p>
          <p>query@onbook.com</p>
          <div className="social-icons">
            <span>🌐</span> {/* Replace with actual icons */}
            <span>📘</span>
            <span>🐦</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 On.Book. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default Shop;
