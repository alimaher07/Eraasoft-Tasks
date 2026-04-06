import Cookies from "js-cookie"

const getCookie = (cookieName) => {
  return Cookies.set(cookieName)
}

export default getCookie()