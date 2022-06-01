export default {
  install: (app, options) => {
    app.config.globalProperties.$log = {
      error: () => {
        if (options?.logging === true) {
          console.log("error");
        }
      },
      success: () => {
        if (options?.logging === true) {
          console.log("success");
        }
      },
    };

    app.provide("logger", app.config.globalProperties.$log);
  },
};
