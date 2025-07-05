import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className='loading-container container'>
        <header>
            <h1>Look For Pokemon</h1>
            <input type='text' readOnly/>
        </header>
        <section>
        {[...Array(20)].map((_,idx)=>(
          <div className="loading-card-wrapper" key={idx}>
            <div className="loading-card">
            <div className="loading-image"></div>
            <div className="loading-title"></div>
            <div className="loading-subtitle"></div>
            <div className="loading-stats">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="loading-stat-line"></div>
              ))}
            </div>
            </div>
            </div>
        ))}
        </section>
    </div>
  );
};

export default Loading;
