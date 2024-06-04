import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for POST request method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Access the request body (assuming JSON data)
  const { analog_value } = req.body;

  // Validate and process the data (replace with your logic)
  if (!analogValue || typeof analogValue !== 'number') {
    return res.status(400).json({ message: 'Invalid data format' });
  }

  console.log(`Received analog value: ${analogValue}`);

  // You can store the data in a database, send it to another service, etc.

  // Send a success response
  return res.status(200).json({ message: 'Data received successfully' });
}
