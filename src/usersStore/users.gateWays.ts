const baseUrl = "https://api.spaceflightnewsapi.net/v3/articles";

export const fetchUsersList = () => {
  return fetch(baseUrl).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
};
