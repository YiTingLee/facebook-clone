export const notificationsApi = async userToken => {
  console.log(userToken); // user token will be used in the real api server
  return Promise.resolve({
    notifications: [
      { id: 0, name: "Home", num: 0 },
      { id: 1, name: "Pages", num: 5 },
      { id: 2, name: "Watch", num: 4 },
      { id: 3, name: "Marketplace", num: 0 },
      { id: 4, name: "Gaming", num: 17 }
    ]
  });
};
