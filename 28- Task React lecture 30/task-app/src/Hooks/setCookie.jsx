import Cookies from "js-cookie"

const setCookie = (cookieName, userName) => {
  Cookies.set(cookieName, userName,{
    expires: 1,
    secure : true,
    sameSite: 'strict',
    path: '/'
    })
}

export default setCookie()