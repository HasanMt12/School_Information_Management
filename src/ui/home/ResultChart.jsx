
import { Bar } from '@ant-design/charts';

const ResultChart = () => {
  const data = [
    { year: '2015', result: 290 },
    { year: '2016', result: 260 },
    { year: '2017', result: 300 },
    { year: '2018', result: 500 },
    { year: '2019', result: 450 },
    { year: '2020', result: 600 },
    { year: '2021', result: 400 },
    { year: '2022', result: 640 },
    { year: '2023', result: 700 },
  ];
  
  const config = {
    data,
    xField: 'year',
    yField: 'result',
    height: 400,
    label: {
      position: 'middle',
      style: {
        fill: '#333333',
        opacity: 0.6,
      },
    },
    yAxis: {
      label: {
        formatter: (v) => `${v} units`,
      },
    },
  };

  return <div className='md:my-12 my-6'>
      <h2 className="text-gray-900 border-l-4 border-[#1eb2a6] pl-2 lg:text-2xl md:text-xl text-lg font-semibold my-6">Students result</h2>
     <Bar {...config} /></div>
};
export default ResultChart;
