<template>
  <div class="rowlist">
    <div class="rowlist__wrapper">
      <div class="rowlist__header">
        <h2 class="rowlist__title">{{ rowListTitle }}</h2>
        <!-- <div class="rowlist__iconbox">
          <span>&nbsp;</span>
        </div> -->
      </div>
      <div class="rowlist__rowitems">
        <swiper :slides-per-view="slidesPerView" :space-between="18">
          <swiper-slide v-for="(item, index) in dataList" :key="index">
            <row-list-card :image="item.img" :title="item.name" :price="item.price" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import RowListCard from "./RowListCard.vue";
import { ref } from "vue";

export default {
  name: "RowList",
  props: {
    rowListTitle: {
      type: String,
      default: "Rowlist",
    },
    dataList: {
      type: [Array, Object],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    RowListCard,
  },
  setup() {
    let currentWidth = window.screen.width || 0;
    let slidesPerView = ref(2);

    window.addEventListener("resize", (e) => {
      currentWidth = e.currentTarget.innerWidth;
      //768
      if (currentWidth < 900) {
        slidesPerView.value = 4;
      }
      //500
      if (currentWidth < 500) {
        slidesPerView.value = 2;
      }
    });

    return {
      slidesPerView,
    };
  },
};
</script>
