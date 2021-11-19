export const authHeader = () => {
    const {accessToken} = JSON.parse(localStorage.getItem("user"));
    if (accessToken) {
      return { "x-access-token": accessToken };
    } else {
      return {};
    }
  };