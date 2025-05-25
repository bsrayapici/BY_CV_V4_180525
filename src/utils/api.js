import axios from 'axios';

/**
 * API Utilities
 * 
 * Collection of API interaction functions with:
 * - Error handling
 * - Response logging
 * - Type safety
 */

/**
 * Posts data to the API endpoint
 * 
 * @param {Object} data - Data to be sent to the API
 * @returns {Promise<void>}
 * @throws {Error} When API request fails
 */
export const postDataToAPI = async (data) => {
  try {
    const response = await axios.post('https://reqres.in/api/workintech', data);
    console.log('POST successful:', response.data);
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  }
};