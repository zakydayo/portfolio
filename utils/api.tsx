import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_API_URL,
  timeout: 5000, // Timeout if necessary
  header: {
    'ContentType': 'application/json',
    // Add all custom headers here
  },
});

export const api = async (url: string, options: {}) => {
  try {
    const response = await axiosInstance.get(url, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Could not fetch data');
  }
};