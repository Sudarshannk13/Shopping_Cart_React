// When you buy a Cheese, you get a second Cheese free!
// When you buy a Soup, you get a half price Bread!
// Get a third off Butter!

export const initItems = [
  {
    id: 0,
    name: "Mixed Nuts",
    price: 10.99,
    imgUrl:
      "https://images.woolworthsstatic.co.za/nPqD0PusgjwIvlJfcAN2nd0xc0Aj.jpg?w=450&q=85",
    stock: 0,
    offer: null,
  },
  {
    id: 1,
    name: "bread",
    price: 1.2,
    imgUrl:
      "https://images.heb.com/is/image/HEBGrocery/002001272",
    stock: 5,
    discount: 0,
    offer: null,
  },
  {
    id: 2,
    name: "milk",
    price: 0.5,
    imgUrl:
      "https://media.istockphoto.com/vectors/realistic-3d-milk-carton-packing-isolated-on-white-vector-id1028104580?k=6&m=1028104580&s=612x612&w=0&h=wLuTpnIefbO_pQIfPFcbyx4mKbRjnvQ_jMZ5FrCVLKY=",
    stock: 7,
    offer: null,
  },
  {
    id: 3,
    name: "cheese",
    price: 0.9,
    imgUrl:
      "https://mydukaan.s3.amazonaws.com/2911966/91c74e96-753c-4438-8810-3115287c1a8f/71bsxh8irdl.jpg",
    stock: 6,
    offer: {
      itemId: 3,
      description: "Two for the price of one!",
      discount: ({ price }, coupons) => ((coupons - (coupons % 2)) / 2) * price,
    },
  },
  {
    id: 4,
    name: "soup",
    price: 0.6,
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_1a72c0e9-5a08-4bca-a972-183ef44467e0?wid=488&hei=488&fmt=pjpeg",
    stock: 5,
    offer: {
      itemId: 1,
      description: "Buy soup and get a bread half price!",

      discount: ({ price, quantity }, coupons) => {
        let x = (price * quantity) / 2;
        let y = (coupons * price) / 2;
        return x < y ? x : y;
      },
    },
  },
  {
    id: 5,
    name: "butter",
    price: 1.2,
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_a7ebe503-cdca-4274-8a25-7c08f4a9540d",
    stock: 5,
    offer: {
      itemId: 5,
      description: "Butter is a third off!",
      discount: ({ price }, coupons) => (price * coupons) / 3,
    },
  },
];

export const initCart = {
  cart: [],
  subtotal: 0,
  discount: 0,
  total: 0,
};
