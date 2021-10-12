export const textFormats = {
  methods: {
    formatDate(rawDate) {
      const arr = rawDate.split("-").map(value => {
        return parseInt(value) < 10 ? `0${value}` : value
      })
      return arr.reverse().join("/")
    }
  }
}