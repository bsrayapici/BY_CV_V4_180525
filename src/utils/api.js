// src/utils/api.js
import axios from 'axios';

export const postDataToAPI = async (data) => {
  try {
    const response = await axios.post('https://reqres.in/api/workintech', data);
    console.log('POST başarılı:', response.data);
  } catch (error) {
    console.error('Hata oluştu:', error);
  }
};
