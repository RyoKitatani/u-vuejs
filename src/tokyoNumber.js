export const tokyoNumber = {
  data() {
    return {
      title: "Welocme to Tokyo",
      subTitle: "Tokyo is great city",
      number:  0
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  // created() {
    // console.log('created in Mixin')
  // }
}