module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@/styles/_reset.scss";
          @import "~@/styles/_variables.scss";
          @import "~@/styles/_mixins.scss";
          @import "~@/styles/_typography.scss";
        `
      },
    }
  }
}