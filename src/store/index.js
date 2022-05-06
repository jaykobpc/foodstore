import { createStore } from "vuex";

export default createStore({
  state: () => {
    return {
      soupsList: [
        {
          name: "Noodle soup",
          img: "Soup/soup_1.png",
          price: "1.35",
        },
        {
          name: "Broth & Brean soup",
          img: "Soup/soup_3.png",
          price: "1.09",
        },
        {
          name: "Vegetable soup",
          img: "Soup/soup_3.png",
          price: "1.35",
        },
        {
          name: "Noodle soup",
          img: "Soup/soup_4.png",
          price: "1.35",
        },
        {
          name: "Noodle soup",
          img: "Soup/soup_5.png",
          price: "1.35",
        },
        {
          name: "Noodle soup",
          img: "Soup/soup_6.png",
          price: "1.35",
        },
        {
          name: "Noodle soup",
          img: "Soup/soup_5.png",
          price: "1.35",
        },
        {
          name: "Noodle soup",
          img: "Soup/soup_5.png",
          price: "1.35",
        },
      ],
      featuredList: [
        {
          name: "Chocolate pancakes",
          img: "Featured/featured_3.png",
          price: "1.35",
        },
        {
          name: "Chocolate pancakes",
          img: "Featured/featured_3.png",
          price: "1.35",
        },
        {
          name: "Chocolate pancakes",
          img: "Featured/featured_3.png",
          price: "1.35",
        },
        {
          name: "Chocolate pancakes",
          img: "Featured/featured_3.png",
          price: "1.35",
        },
        {
          name: "Chocolate pancakes",
          img: "Featured/featured_3.png",
          price: "1.35",
        },
        {
          name: "Chocolate pancakes",
          img: "Featured/featured_3.png",
          price: "1.35",
        },
        {
          name: "Chocolate pancakes",
          img: "Featured/featured_3.png",
          price: "1.35",
        },
      ],
      seaFood: [
        {
          name: "Sea food",
          img: "Seafood/seafood_1.png",
          price: "1.35",
        },
        {
          name: "Sea food",
          img: "Seafood/seafood_1.png",
          price: "1.35",
        },
        {
          name: "Sea food",
          img: "Seafood/seafood_1.png",
          price: "1.35",
        },
        {
          name: "Sea food",
          img: "Seafood/seafood_1.png",
          price: "1.35",
        },
        {
          name: "Sea food",
          img: "Seafood/seafood_1.png",
          price: "1.35",
        },
        {
          name: "Sea food",
          img: "Seafood/seafood_1.png",
          price: "1.35",
        },
      ]
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
