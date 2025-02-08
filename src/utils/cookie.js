import Cookies from "js-cookie";

const setCookie = (tokens) => {
  const { accessToken, refreshToken } = tokens;
  Cookies.set('accessToken', accessToken, { expires: 1, path: '/', secure: true });
  Cookies.set('refreshToken', refreshToken, { expires: 30, path: '/', secure: true });
};

const getCookie = (cookieName) => {
  if (typeof window !== 'undefined') {
    const value = `; ${document.cookie}`;
    const parts = value?.split(`; ${name}=`);
    if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
  }
  return null;
};
export { setCookie, getCookie };
