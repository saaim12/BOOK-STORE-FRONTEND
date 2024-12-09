import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainSection = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Left Section */}
<div className='col-lg-1'></div>

        <div className="col-lg-4 text-center text-lg-start">
          <h1 className="display-4 fw-bold">Find Your Next Book</h1>
          <p className="text-muted">Discover a world of books to expand your knowledge.</p>
          <button className="btn btn-success btn-lg mb-4">Explore Now</button>
        </div>
<div className='col-lg-1'></div>
        {/* Right Section */}
        <div className="col-lg-6 d-flex justify-content-around flex-wrap">
          {/* Book 1 */}
          <div className="text-center mb-4 ">
            <img
              src="https://img.kitapyurdu.com/v1/getImage/fn:1030555/wi:100/wh:true"
              alt="Book 1"
              className="img-fluid mb-3"
              style={{
                width: '150px',
                height: 'auto',
                borderTopLeftRadius: '50rem',
                borderTopRightRadius: '50rem',
              }}
            />
            <h6>Pal Sokağı Çocukları</h6>
            <p className="text-muted">Ferenc Molnar</p>
          </div>

          {/* Book 2 */}
          <div className="text-center mb-4">
          <h6>Tutunamayanlar</h6>
          <p className="text-muted">Oğuz Atay</p>
            <img
              src="https://img.kitapyurdu.com/v1/getImage/fn:11462655/wi:100/wh:true"
              alt="Book 2"
              className="img-fluid mb-3"
              style={{
                width: '150px',
                height: 'auto',
                borderBottomLeftRadius: '50rem',
                borderBottomRightRadius: '50rem',
              }}
            />
           
          </div>

          {/* Book 3 */}
          <div className="text-center mb-4">
            <img
              src="https://img.kitapyurdu.com/v1/getImage/fn:11469116/wi:100/wh:true"
              alt="Book 3"
              className="img-fluid mb-3"
              style={{
                width: '150px',
                height: 'auto',
                borderTopLeftRadius: '50rem',
                borderTopRightRadius: '50rem',
              }}
            />
            <h6>İyileşen Evliliğim</h6>
            <p className="text-muted">Hatice Kübra Tongar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;

