<template>
  <banner />
  <row-list :rowListTitle="'Featured'" :dataList="featuredList" />
  <row-list :rowListTitle="'Soups'" :dataList="soupList" />
  <row-list :rowListTitle="'Seafood'" :dataList="seaFood" />
  <row-list :rowListTitle="'Dessert'" :dataList="dessertList" />
</template>

<script>
import Banner from "@/components/Dashboard/Banner.vue";
import RowList from "@/components/Dashboard/RowList.vue";
import { useStore } from "vuex";

export default {
  name: "StoreView",
  components: {
    Banner,
    RowList,
  },
  setup() {
    const store = useStore();
    //soup list
    let soupList = store.state.soupsList;
    //featured list
    let featuredList = store.state.featuredList;
    // sea food
    let seaFood = store.state.seaFood;
    //dessert
    let dessertList = store.state.dessertList;

    return {
      soupList,
      featuredList,
      seaFood,
      dessertList,
    };
  },
};
</script>
