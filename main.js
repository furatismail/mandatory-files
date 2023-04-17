Vue.createApp({
    data() {
        return {
            message: "Hello vue",
            banners: [
                { id: "1", name: "Reklama 1"},
                { id: "2", name: "Reklama 2"},
                { id: "3", name: "Reklama 3"},
                
            ],
            bannerShown: false,
            selectedBannerId: ""
        }
    },
    methods: {
        toggle() {
            this.bannerShown = !this.bannerShown;
        },
        selectBanner(banner) {
            this.selectedBannerId = banner.id;
        }
    }
}).mount('#app1')

