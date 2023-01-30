import { useEffect } from 'react'
import './index.global.css'
const SearchColorsGradient = () => {
  useEffect(() => {
    function Rodar() {
      document.getElementsByClassName("vtex-search-result-3-x-filter__container--specificationFilter_27")[0]?.setAttribute("id", "ChangeColors")
      const Elements = document.getElementById("ChangeColors").children[1].children[0].children[0].children
      var arr = Array.prototype.slice.call(Elements)
      arr.forEach((e, i) => {e.setAttribute("id", `${e.children[0].children[1].innerText?.replace(" ", "-")}`)})
    }
    function RodarCD () {
      document.getElementsByClassName("vtex-search-result-3-x-filter__container--specificationFilter_106")[0]?.setAttribute("id", "CDStyle")
      const Elements = document.getElementById("CDStyle").children[1].children[0].children[0].children
      console.log("CD", Elements)
      var arr = Array.prototype.slice.call(Elements)
      arr.forEach((e, i) => {e.setAttribute("id", `${e.children[0].children[1].innerText?.normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(" ")[0]}-${e.children[0].children[1].innerText?.normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(" ")[1]}-${e.children[0].children[1].innerText?.normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(" ")[2]}`)})
      console.log(arr)

    }
    if (document.readyState) {
      setTimeout(() => {
        Rodar();
        RodarCD();
      }, 5000);
    }
  })
  console.log("CD RioPreto")
  return (
    null
  );
}

export { SearchColorsGradient }
