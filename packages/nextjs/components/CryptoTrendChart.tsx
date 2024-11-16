import { ResponsiveLine } from '@nivo/line';

const CryptoTrendChart = () => {
  const data = [
    {
      id: "crypto",
      data: [
        { x: "2023-01-01", y: 30000 },
        { x: "2023-02-01", y: 32000 },
        { x: "2023-03-01", y: 31000 },
        { x: "2023-04-01", y: 33500 },
        { x: "2023-05-01", y: 29800 },
        { x: "2023-06-01", y: 31200 },
        { x: "2023-07-01", y: 34600 },
        { x: "2023-08-01", y: 32100 },
        { x: "2023-09-01", y: 27900 },
        { x: "2023-10-01", y: 35200 },
        { x: "2023-11-01", y: 36800 },
        { x: "2023-12-01", y: 34100 },
        { x: "2024-01-01", y: 38500 },
        { x: "2024-02-01", y: 36900 },
        { x: "2024-03-01", y: 42000 }
      ],
    },
  ];

  return (
    <div className="card bg-base-100 shadow-xl" style={{ width: '100%', maxWidth: '600px', margin: 'auto' }}>
      <div className="card-body p-4">
        <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>
          {new Date(data[0].data[0].x).toLocaleString('default', { month: 'long' })}
        </h3>
        <div style={{ height: 400 }}>
          <ResponsiveLine
            data={data}
            margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              tickValues: data[0].data.map(d => d.x).filter((_, index) => index % 2 === 0),
              format: (value) => new Date(value).getDate().toString(),
              legend: '',
              legendOffset: 36,
              legendPosition: 'middle'
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendOffset: -40,
              legendPosition: 'middle'
            }}
            colors={{ scheme: 'nivo' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel={d => new Date(d.x).getDate().toString()}
            pointLabelYOffset={-12}
            useMesh={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CryptoTrendChart; 
