export const CONTENT = {
  home: {
    title: 'Home Page',
    description: 'Welcome to our store!',
    body: 'This is the home page of our store. You can browse our categories and products by clicking on the links above.',
    image: 'home.jpg',
    featuresProducts: [
      {
        name: 'Product 1',
        description: 'This is a description of product 1.',
        price: 100,
        image: 'product1.jpg',
      },
      {
        name: 'Product 2',
        description: 'This is a description of product 2.',
        price: 200,
        image: 'product2.jpg',
      },
      {
        name: 'Product 3',
        description: 'This is a description of product 3.',
        price: 300,
        image: 'product3.jpg',
      },
    ],
    featuresCategories: [
      {
        name: 'Category 1',
        route: '/category/1',
        description: 'This is a description of category 1.',
        image: 'category1.jpg',
      },
      {
        name: 'Category 2',
        route: '/category/2',
        description: 'This is a description of category 2.',
        image: 'category2.jpg',
      },
      {
        name: 'Category 3',
        route: '/category/3',
        description: 'This is a description of category 3.',
        image: 'category3.jpg',
      },
    ],
    whyUs: {
      title: 'Why Us?',
      whyUsItems: [
        {
          title: 'Quality Assurance:',
          description:
            'We source the finest products to ensure you get the best.',
        },
        {
          title: 'Fast Shipping:',
          description: 'Quick and reliable delivery to your doorstep.',
        },
        {
          title: 'Customer Support:',
          description: 'Our team is here to assist you 24/7.',
        },
        {
          title: 'Secure Payments:',
          description:
            'Safe and secure payment options for a worry-free shopping experience.',
        },
      ],
    },
    blog: {
      title: 'Blog',
      blogPosts: [
        {
          title: 'Post 1',
          description: 'This is a description of post 1.',
          date: '2021-01-01',
        },
        {
          title: 'Post 2',
          description: 'This is a description of post 2.',
          date: '2021-02-01',
        },
      ],
    },
  },
  category: {
    title: 'Category',
    description:
      'Welcome to our [Category Name] collection. Discover our extensive range of high-quality [Category Products]. Whether you’re looking for [specific product type] or [specific product type], we’ve got you covered.',
    image: 'category.jpg',
    featuresProducts: [
      {
        name: 'Product 1',
        description: 'This is a description of product 1.',
        price: 100,
        image: 'product1.jpg',
      },
      {
        name: 'Product 2',
        description: 'This is a description of product 2.',
        price: 200,
        image: 'product2.jpg',
      },
      {
        name: 'Product 3',
        description: 'This is a description of product 3.',
        price: 300,
        image: 'product3.jpg',
      },
    ],
  },
  product: {
    title: 'Product',
    description:
      'Dive into the specifics of [Product Name]. This product offers [key features and benefits], making it an excellent choice for [target audience or use case].',
    image: 'product.jpg',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    specifications: ['Specification 1', 'Specification 2', 'Specification 3'],
  },
};
