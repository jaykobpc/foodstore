const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Foodie App";
      return args;
    });
  },
  transpileDependencies: true,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "~@/scss/main.scss";
          `,
      },
    },
  },
  pwa: {
    name: "Foodie App",
    themeColor: "#307A59",
    backgroundColor: "#307A59",
    msTileColor: "#307A59",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "default",
    workboxPluginMode: "GenerateSW", //alternative: InjectManifest
    manifestOptions: {
      name: "Foodie App",
      short_name: "Foodie App",
      start_url: ".",
      display: "standalone",
      theme_color: "#307A59",
      background_color: "#307A59",
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
});
