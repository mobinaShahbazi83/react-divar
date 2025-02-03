import api from "../configs/api";

const getProfile = () =>
  api.get("user/whoami", {
    headers: { Authorization: `bearer ${token}` },
  });

export { getProfile };
