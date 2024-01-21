import { useEffect, useState } from "react";
import { readAllresultRecord } from "../../services/index/resultRecord";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


const ResultChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/resultRecord'); // Replace 'your_api_endpoint' with your actual API endpoint
        const data = response.data.data;

        const years = data.map(entry => entry.year);
        const studentQuantities = data.map(entry => entry.studentQuantity);

        // console.log('Data received:', data); // Log the received data

        if (Array.isArray(data) && data.length > 0) {
          const years = data.map(entry => entry.years);
          const studentQuantities = data.map(entry => entry.studentCount);
          
          // console.log('Years:', years); // Log the years array
          // console.log('Student Quantities:', studentQuantities); //

          setChartData({
            labels: years,
            datasets: [
              {
                label: 'Student Quantity',
                data: studentQuantities,
                backgroundColor: 'rgba(75,192,192,0.6)',
              },
            ],
          });
        } else {
          console.error('Data is empty or not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );// Register the 'category' scale
  return <div className='md:mb-10 mb-6 '>
    <div className="md:px-20 px-2 py-1 md:py-4">
         {chartData.labels && chartData.labels.length > 0 && chartData.datasets && chartData.datasets[0].data && chartData.datasets[0].data.length > 0 ? (
      <Bar data={chartData} />
    ) : (
      <p>No data available</p>
    )}
    </div>
   
     </div>
};
export default ResultChart;
