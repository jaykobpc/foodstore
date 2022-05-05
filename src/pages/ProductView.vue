<template>
  <div id="scrollbox" class="productview">
    <section class="productview__imagebox">
      <nav id="navbar" class="productview__navbar">
        <div @click="backPage" role="button" class="productview__navbar__icon">
          <i class="bx bx-left-arrow-alt"></i>
        </div>
      </nav>
    </section>
    <section class="productview__contextbox">
      <div class="productview__infobox">
        <div class="productview__titlebox">
          <h3 class="productview__titlebox__title">
            Japanese Hainanese Sashimi
          </h3>
          <p class="productview__titlebox__subtitle">Japanese Food</p>
        </div>
        <div
          @click="toggleFav"
          :class="{ 'icon-green': itemLiked }"
          class="productview__infobox__favourites"
        >
          <i class="bx bxs-heart"></i>
        </div>
      </div>
      <div class="productview__cartbox">
        <div class="productview__cartgroup">
          <button
            @click="btnCompute('subtract')"
            class="productview__cartgroup__btn"
          >
            -
          </button>
          <span class="productview__cartgroup__counter">{{ counter }}</span>
          <button
            @click="btnCompute('add')"
            class="productview__cartgroup__btn"
          >
            +
          </button>
        </div>
        <h4 class="productview__cartbox__pricecounter">${{ productTotal }}</h4>
      </div>
      <div class="productview__extras">
        <h3 class="productview__extras__title">Sauce</h3>
        <div class="productview__extras__wrapper">
          <div class="productview__extras__item">
            <div class="productview__extras__group">
              <input type="checkbox" class="productview__extras__checkbox" />
              <span class="productview__extras__inputtitle">Teriyaki</span>
            </div>
            <div class="productview__extras__value">$3</div>
          </div>
          <div class="productview__extras__item">
            <div class="productview__extras__group">
              <input type="checkbox" class="productview__extras__checkbox" />
              <span class="productview__extras__inputtitle">Yakinku</span>
            </div>
            <div class="productview__extras__value">$3</div>
          </div>
        </div>
      </div>
      <div class="productview__extras">
        <h3 class="productview__extras__title">Extra Topping</h3>
        <div class="productview__extras__wrapper">
          <div class="productview__extras__item">
            <div class="productview__extras__group">
              <input
                type="checkbox"
                id="itemA"
                class="productview__extras__checkbox"
              />
              <label for="itemA" class="productview__extras__inputtitle"
                >Omlette</label
              >
            </div>
            <div class="productview__extras__value">$2</div>
          </div>
          <div class="productview__extras__item">
            <div class="productview__extras__group">
              <input
                type="checkbox"
                id="itemB"
                class="productview__extras__checkbox"
              />
              <label for="itemB" class="productview__extras__inputtitle"
                >Cheese</label
              >
            </div>
            <div class="productview__extras__value">$1.15</div>
          </div>
          <div class="productview__extras__item">
            <div class="productview__extras__group">
              <input
                type="checkbox"
                id="itemC"
                class="productview__extras__checkbox"
              />
              <label for="itemC" class="productview__extras__inputtitle"
                >Colesaw</label
              >
            </div>
            <div class="productview__extras__value">$1</div>
          </div>
          <div class="productview__extras__item">
            <div class="productview__extras__group">
              <input type="checkbox" id="itemD" class="productview__extras__checkbox" />
              <label for="itemD" class="productview__extras__inputtitle">Tofu</label>
            </div>
            <div class="productview__extras__value">$1.35</div>
          </div>
        </div>
      </div>
    </section>
    <section class="productview__footer">
      <button class="productview__cartbutton">
        Add to cart (${{ productTotal }})
      </button>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "ProductView",
  setup() {
    const router = useRouter();
    const itemLiked = ref(false);
    const counter = ref(1);
    const productPrice = ref(6.99);
    const productTotal = ref(6.99);

    const backPage = (route) => {
      if (route) router.push("/store");
    };

    const toggleFav = () => {
      if (itemLiked.value == false) {
        itemLiked.value = true;
      }
    };

    const btnCompute = (fnc) => {
      if (fnc == "subtract") {
        if (counter.value <= 1) return;
        counter.value -= 1;
        productTotal.value = (productTotal.value - productPrice.value).toFixed(
          2
        );
      }

      if (fnc == "add") {
        if (counter.value >= 20) return;
        counter.value += 1;
        productTotal.value = (productPrice.value * counter.value).toFixed(2);
      }
    };

    return {
      backPage,
      itemLiked,
      toggleFav,
      counter,
      btnCompute,
      productTotal,
    };
  },
  methods: {
    detectScroll() {
      const scrollbox = document.querySelector("#scrollbox");
      const navbar = document.querySelector("#navbar");

      scrollbox.addEventListener("scroll", (e) => {
        if (e.target.scrollTop > 5) {
          navbar.classList.add("acrylic-effect");
        } else if (e.target.scrollTop < 5) {
          navbar.classList.remove("acrylic-effect");
        }
      });
    },
  },
  mounted() {
    this.detectScroll();
  },
};
</script>
