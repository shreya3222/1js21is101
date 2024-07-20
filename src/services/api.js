export const fetchProducts = async () => {
  // Mock data for testing
  const mockData = [
    {
      id: 1,
      name: "Product 1",
      company: "Company A",
      category: "Category A",
      price: 100,
      rating: 4.5,
      discount: 10,
      availability: true
    },
    {
      id: 2,
      name: "Product 2",
      company: "Company B",
      category: "Category B",
      price: 150,
      rating: 4.0,
      discount: 15,
      availability: false
    }
  ];
  return mockData.map(product => ({
    ...product,
    uniqueId: `${product.company}-${product.id}`
  }));
};
