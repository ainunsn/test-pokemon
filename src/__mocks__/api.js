const mockResponse = {
  data: {
    count: 1126,
    results: [
      {
        name: "spearow",
        url: "https://pokeapi.co/api/v2/pokemon/21/",
      },
      {
        name: "fearow",
        url: "https://pokeapi.co/api/v2/pokemon/22/",
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
