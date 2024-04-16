import { fetchData } from '../src/index';
import fetchMock from 'jest-fetch-mock'; // Assurez-vous que cette importation est correcte

fetchMock.enableMocks(); // Active les mocks de fetch

describe('fetchData', () => {
  beforeEach(() => {
    fetchMock.resetMocks(); // Réinitialise les mocks avant chaque test
  });

  it('calls onSuccess with the data on successful fetch', async () => {
    const mockData = { id: 1, name: 'Test User' };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const onSuccess = jest.fn();
    const onError = jest.fn();

    await fetchData({
      url: "http://example.com/user",
      onSuccess,
      onError,
    });

    expect(onSuccess).toHaveBeenCalledWith(mockData);
    expect(onError).not.toHaveBeenCalled();
  });

  it('calls onError with an error on failed fetch', async () => {
    fetchMock.mockReject(new Error('Failed to fetch'));

    const onSuccess = jest.fn();
    const onError = jest.fn();

    try {
      await fetchData({
        url: "http://example.com/user",
        onSuccess,
        onError,
      });
    } catch (error) {
      
    }

    expect(onError).toHaveBeenCalled();
    expect(onSuccess).not.toHaveBeenCalled();
  });
});
