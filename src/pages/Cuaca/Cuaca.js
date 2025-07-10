// src/components/Cuaca.js
import React from 'react';
import { Table, Button } from "react-bootstrap";
import Hero from '../../components/hero';

// Data wilayah dan prakiraan cuaca
const regions = [
  { name: 'Kejaksan', hasData: true },
  { name: 'Lemahwungkuk', hasData: true },
  { name: 'Harjamukti', hasData: true },
  { name: 'Pekalipan', hasData: true },
  { name: 'Kesambi', hasData: true }
];

const weatherForecast = {
  'Kamis, 08 Mei': { 
    condition: 'Berawan', 
    temp: '26-27°C', 
    humidity: '65-87%' 
  },
  'Jum, 09 Mei': { 
    condition: 'Hujan Ringan', 
    temp: '26-30°C', 
    humidity: '70-90%' 
  },
  'Sab, 10 Mei': { 
    condition: 'Hujan sedang', 
    temp: '25-30°C', 
    humidity: '75-92%' 
  },
  'Min, 11 Mei': { 
    condition: 'cerah berawan', 
    temp: '25-30°C', 
    humidity: '73-90%' 
  },
  'Sen, 12 Mei': { 
    condition: 'hujan lebat', 
    temp: '25-30°C', 
    humidity: '70-91%' 
  },
  'Sel, 13 Mei': { 
    condition: 'cerah', 
    temp: '26-28°C', 
    humidity: '73-89%' 
  }
};

// Komponen ikon cuaca
const WeatherIcon = ({ condition }) => {
  const getIcon = () => {
    switch (condition.toLowerCase()) {
      case 'berawan':
        return '☁️';
      case 'hujan ringan':
        return '🌧️';
      case 'cerah':
        return '☀️';
      case 'cerah berawan':
        return '⛅';
      case 'hujan sedang':
        return '🌧️';
      case 'hujan lebat':
        return '⛈️';
      default:
        return '☁️';
    }
  };

  return <div className="mb-1 fs-3">{getIcon()}</div>;
};

// Komponen kartu cuaca per cell
const WeatherCard = ({ data }) => {
  return (
    <td className="text-center">
      <WeatherIcon condition={data.condition} />
      <div className="small">{data.condition}</div>
      <div className="d-flex align-items-center justify-content-center">
        <span className="small">{data.temp}</span>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <span className="small">{data.humidity}</span>
      </div>
    </td>
  );
};

// Komponen utama Cuaca
const Cuaca = () => {
  return (
    <>
      <Hero />
      <div className="my-2 mx-auto" style={{ maxWidth: '1000px', height: '750px' }}>
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
              <tr key={region.name}>
                <td>
                  <Button 
                    variant="link" 
                    className="text-decoration-none fw-bold d-flex align-items-center justify-content-between p-0"
                    onClick={() => alert(`Detail data untuk ${region.name}`)}
                  >
                    {region.name}
                  </Button>
                </td>
                {Object.entries(weatherForecast).map(([date, data]) => (
                  <WeatherCard key={date} data={data} />
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Cuaca;
