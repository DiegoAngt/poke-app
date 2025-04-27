import React from 'react';
import '../styles.css';

const Actions = ({ handleAttack }) => {
  return (
    <div className="container-action">
      {/* Botón A -Atacar */}
      <div style={{ paddingTop: '36%' }}>
        <button
          className="action-btn"
          onClick={handleAttack}
          onMouseDown={(e) => e.currentTarget.classList.add('pressed')}
          onMouseUp={(e) => e.currentTarget.classList.remove('pressed')}
          aria-label="Botón A - Atacar"
        />
      </div>

      {/* Botón B */}
      <div>
        <button
          className="action-btn"
          onMouseDown={(e) => e.currentTarget.classList.add('pressed')}
          onMouseUp={(e) => e.currentTarget.classList.remove('pressed')}
          aria-label="Botón B"
        />
      </div>
    </div>
  );
};

export default Actions;
