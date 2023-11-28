import axios from 'axios';
import { fetchData } from './apiService';
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchData', () => {
  it('should fetch data from an API', async () => {
    mockedAxios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: 'Bender',
          occupation: 'Bending Unit',
        },
        {
          id: 2,
          name: 'Fry',
          occupation: 'Delivery Boy',
        },
      ],
    });

    const result = await fetchData();

    expect(result).toEqual([
      {
        id: 1,
        name: 'Bender',
        occupation: 'Bending Unit',
      },
      {
        id: 2,
        name: 'Fry',
        occupation: 'Delivery Boy',
      },
    ]);

    jest.clearAllMocks();
  });
});
