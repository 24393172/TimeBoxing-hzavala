// src/pages/Planner.jsx
import React from 'react';
import './Planner.css';

export default function Planner() {
  const hours = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="planner-screen">
      <div className="planner-container">
        <header className="planner-header">
          <div>
            <h1>Daily Timeboxing</h1>
            <h1>Planner</h1>
          </div>
          <div className="date-section">
            Date: <span className="date-line"></span>
          </div>
        </header>

        <main className="planner-grid">
          {/* Columna Izquierda */}
          <section>
            <h2>Top Priorities</h2>
            <input type="text" className="planner-input" />
            <input type="text" className="planner-input" />
            <input type="text" className="planner-input" />

            <h2 style={{ marginTop: '20px' }}>Brain Dump</h2>
            <div className="brain-dump-container">
              {Array.from({ length: 18 }).map((_, i) => (
                <input key={i} type="text" className="brain-dump-line" />
              ))}
            </div>
          </section>

          {/* Columna Derecha: Timeboxing */}
          <section>
            <div className="time-table">
              <div className="time-table-header">
                <div className="header-cell" style={{ borderRight: '1px solid black' }}></div>
                <div className="header-cell">:00</div>
                <div className="header-cell" style={{ borderRight: 'none' }}>:30</div>
              </div>

              {hours.map((hour, index) => (
                <div className="time-row" key={index}>
                  <div className="time-label">{hour}</div>
                  <input type="text" className="time-cell" />
                  <input type="text" className="time-cell" />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}