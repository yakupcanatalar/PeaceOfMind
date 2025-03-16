import axios from "axios";

const API_URL = "http://localhost:8080/api/";
const TASK_URL = `${API_URL}type`;

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: API_URL,
  });
  
  export const getType = async () => {
    try {
      const response = await axiosInstance.get(TASK_URL);
      const types = Array.isArray(response.data)
      console.log(types);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const getSubType = async (taskId: string) => {
    try {
      const response = await axiosInstance.get(`${TASK_URL}/subType/${taskId}`);
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
