app.component("banner", {
  template: `{{message}}

  <button @click="toggle()">
      ODKRYT
  </button>

  <div v-if="bannerShown">
      <div v-for="(banner,index) in banners" @mouseover="selectBanner(banner)"
          :class="[hoveredBanner === banner.id ? 'active' : '' ]">
          <div>{{banner[index]}}</div>
      </div>

      <p v-if="banners.length > 10">Vice nez 10 tipu</p>
      <p v-else-if="banners.length <= 10 && banners.length > 0">Mene nez 10</p>
      <p v-else>Zadny</p>
  </div>`,
  data() {
    return {
      bannerShown: false,
      message: "Hello world!",
      banners: [
        { id: 1, name: "Reklama 1" },
        { id: 2, name: "Reklama 2" },
        { id: 3, name: "Reklama 3" },
      ],
      hoveredBanner: null,
    };
  },
  methods: {
    toggle() {
      this.bannerShown = !this.bannerShown;
    },
    selectBanner(banner) {
      console.log("banner", banner);
      this.hoveredBanner = banner.id;
      console.log("hoveredBanner", this.hoveredBanner);
    },
  },
});
