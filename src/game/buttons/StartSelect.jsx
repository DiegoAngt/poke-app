import React from 'react';

const StartSelect = () => {
  return (
    <div style={{ paddingTop: '35%', display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          display: 'flex',
          gap: '10px',             
          transform: 'rotate(-10deg)', 
        }}
      >
        {/* Botón SELECT */}
        <div
          style={{
            width: '60px',         
            height: '18px',
            backgroundColor: '#a6a6a6',
            borderRadius: '20px',
            boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        ></div>

        {/* Botón START */}
        <div
          style={{
            width: '60px',        
            height: '18px',
            backgroundColor: '#a6a6a6',
            borderRadius: '20px',
            boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default StartSelect;
