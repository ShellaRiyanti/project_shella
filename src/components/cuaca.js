// src/components/Cuaca.js
import React from 'react';
import { Table } from "react-bootstrap"

// Komponen utama Cuaca
const Cuaca = () => {
  return (
    <div className="my-2 mx-auto" style={{ maxWidth: '1000px', height: '750px'}}>
      <Table className="table">
        <thead className="bg-light">
          <tr className="text-center">
            <th style={{ width: '10%' }}>Kecamatan</th>
            {Object.keys(weatherForecast).map((date, idx) => (
              <th key={idx} style={{ width: '14%' }}>{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {regions.filter(r => r.hasData).map((region) => (
            <tr key={region}>
              <td>
                <a href="#" className="text-decoration-none fw-bold d-flex align-items-center justify-content-between">
                  {region.name}
                </a>
              </td>
              {Object.entries(weatherForecast).map(([date, data]) => (
                <WeatherCard key={date} data={data} />
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Cuaca;
