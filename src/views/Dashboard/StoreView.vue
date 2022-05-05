<template>
  <banner />
  <row-list :rowListTitle="'Featured'" />
  <row-list :rowListTitle="'Soups'" />
  <row-list :rowListTitle="'Seafood'" />
</template>

<script>
import Banner from "@/components/Dashboard/Banner.vue";
import RowList from "@/components/Dashboard/RowList.vue";

export default {
  name: "StoreView",
  components: {
    Banner,
    RowList,
  },
};
</script>
