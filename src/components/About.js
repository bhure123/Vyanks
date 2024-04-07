import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RangeGraph = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const labels = data.map((item) => item.label);
    const values = data.map((item) => ({ y: [item.min, item.max] }));

    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            data: values,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4,
            borderWidth: 2,
            fill: {
              target: 'origin',
              above: 'rgba(75, 192, 192, 0.2)',
            },
          },
        ],
      },
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: 'Value',
            },
          },
        },
      },
    });
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default RangeGraph;
