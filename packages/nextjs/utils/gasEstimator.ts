const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'; // updated port to 8080

/**
 * Fetches the estimated gas price for a specified number of days in the future
 * @param days - Number of days to wait
 * @returns Promise<number> - Estimated gas price in Gwei
 */
export async function getEstimatedGasPrice(days: number): Promise<number> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/predict/${days}`, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data);
    return data.estimatedGasPrice;
  } catch (error) {
    console.error('Failed to fetch gas price estimate:', error);
    throw error;
  }
} 
