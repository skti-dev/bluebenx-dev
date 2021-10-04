export const inputFieldHandler = {
  methods: {
    inputFocus(e) {
      try {
        const { target } = e
        const { parentElement, nextSibling } = target
        if(nextSibling) nextSibling.focus()
        parentElement.classList.add("active")
      }catch(error) {
        console.error("Erro ao focar no input")
        console.error(error)
      }
    },
    inputBlur(e) {
      try {
        const { target } = e
        const { parentElement, value } = target
        if(!value) parentElement.classList.remove("active")
      }catch(error) {
        console.error("Erro ao desfocar no input")
        console.error(error)
      }
    }
  }
}
