export const notificationsApi = async userToken => {
  return Promise.resolve({
    notifications: [
      { id: 0, name: 'Home', num: 0 },
      { id: 1, name: 'Pages', num: 5 },
      { id: 2, name: 'Watch', num: 4 },
      { id: 3, name: 'Marketplace', num: 0 },
      { id: 4, name: 'Gaming', num: 17 },
    ],
  });
};

export const friendsApi = async userToken => {
  return Promise.resolve([
    {
      id: 0,
      image: require('../assets/person.png'),
      label: 'Frank',
    },
    {
      id: 1,
      image: require('../assets/person.png'),
      label: 'Penny',
    },
    {
      id: 2,
      image: require('../assets/person.png'),
      label: 'Hank',
    },
    {
      id: 3,
      image: require('../assets/person.png'),
      label: 'Bill',
    },
    {
      id: 4,
      image: require('../assets/person.png'),
      label: 'Hebert',
    },
    {
      id: 5,
      image: require('../assets/person.png'),
      label: 'Tom',
    },
    {
      id: 6,
      image: require('../assets/person.png'),
      label: 'Sam',
    },
    {
      id: 7,
      image: require('../assets/person.png'),
      label: 'Hubert',
    },
    {
      id: 8,
      image: require('../assets/person.png'),
      label: 'Tim',
    },
    {
      id: 9,
      image: require('../assets/person.png'),
      label: 'Andy',
    },
    {
      id: 10,
      image: require('../assets/person.png'),
      label: 'Gary',
    },
    {
      id: 11,
      image: require('../assets/person.png'),
      label: 'Alex',
    },
    {
      id: 10,
      image: require('../assets/person.png'),
      label: 'Ava',
    },
    {
      id: 10,
      image: require('../assets/person.png'),
      label: 'Betty',
    },
    {
      id: 10,
      image: require('../assets/person.png'),
      label: 'Carla',
    },
    {
      id: 10,
      image: require('../assets/person.png'),
      label: 'Cathy',
    },
    {
      id: 10,
      image: require('../assets/person.png'),
      label: 'Cindy',
    },
  ]);
};

export const storiesApi = async userToken => {
  return Promise.resolve([
    {
      id: 0,
      userId: 0,
      image: require('../assets/person.png'),
      userName: 'Penny',
      userIcon: require('../assets/person.png'),
    },
    {
      id: 1,
      userId: 4,
      image: require('../assets/person.png'),
      userName: 'Anni',
      userIcon: require('../assets/person.png'),
    },
    {
      id: 2,
      userId: 9,
      image: require('../assets/person.png'),
      userName: 'Joseph',
      userIcon: require('../assets/person.png'),
    },
    {
      id: 3,
      userId: 11,
      image: require('../assets/person.png'),
      userName: 'Max',
      userIcon: require('../assets/person.png'),
    },
  ]);
};

export const postsApi = async userToken => {
  return Promise.resolve([
    {
      id: 1,
      userId: 1,
      userName: 'Penny',
      userImage: require('../assets/person.png'),
      audience: 'public',
      content: 'Hello, here is Content.',
      image: require('../assets/101night.jpg'),
      createdTime: 1634407914165,
      like: 250,
      liked: true,
      comments: [
        {
          userId: 2,
          userName: 'Eric',
          userImage: require('../assets/person.png'),
          comment: 'Hi',
          like: 0,
          createdTime: 1634407914165,
        },
        {
          userId: 1,
          userName: 'Penny',
          userImage: require('../assets/person.png'),
          comment: 'Hi, Eric',
          like: 1,
          createdTime: 1634407914165,
        },
      ],
      comment: 2,
      share: 3,
    },
    {
      id: 2,
      userId: 1,
      userName: 'Penny',
      userImage: require('../assets/person.png'),
      audience: 'public',
      content: 'Hello, here is Content.',
      image: '',
      createdTime: 1634407914165,
      like: 250,
      liked: false,
      comments: [
        {
          userId: 2,
          userName: 'Eric',
          userImage: require('../assets/person.png'),
          comment: 'Hi',
          like: 0,
          createdTime: 1634407914165,
        },
        {
          userId: 1,
          userName: 'Penny',
          userImage: require('../assets/person.png'),
          comment: 'Hi, Eric',
          like: 1,
          createdTime: 1634407914165,
        },
      ],
      comment: 2,
      share: 3,
    },
    {
      id: 3,
      userId: 1,
      userName: 'Penny',
      userImage: require('../assets/person.png'),
      audience: 'public',
      content: 'Hello, here is Content.',
      image: '',
      createdTime: 1634407914165,
      like: 250,
      liked: true,
      comments: [
        {
          userId: 2,
          userName: 'Eric',
          userImage: require('../assets/person.png'),
          comment: 'Hi',
          like: 0,
          createdTime: 1634407914165,
        },
        {
          userId: 1,
          userName: 'Penny',
          userImage: require('../assets/person.png'),
          comment: 'Hi, Eric',
          like: 1,
          createdTime: 1634407914165,
        },
      ],
      comment: 2,
      share: 3,
    },
  ]);
};
