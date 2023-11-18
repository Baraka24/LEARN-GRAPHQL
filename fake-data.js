const UserList = [
    {
      id: 1,
      name: "Baraka",
      username: "BK",
      age: 23,
      nationality: "Congolese",
      friends: [
        {
          id: 2,
          name: "Jean-Pierre",
          username: "JP",
          age: 25,
          nationality: "Rwandan",
        },
        {
          id: 3,
          name: "Marie",
          username: "M",
          age: 22,
          nationality: "Burundian",
        },
      ]
    },
    {
      id: 2,
      name: "Jean-Pierre",
      username: "JP",
      age: 25,
      nationality: "Rwandan",
      friends:[
        {
          id: 3,
          name: "Marie",
          username: "M",
          age: 22,
          nationality: "Burundian",
        }
      ]
    },
    {
      id: 3,
      name: "Marie",
      username: "M",
      age: 22,
      nationality: "Burundian",
      friends:[
        {
          id: 2,
          name: "Jean-Pierre",
          username: "JP",
          age: 25,
          nationality: "Rwandan",
        }
      ]
    },
    {
      id: 4,
      name: "David",
      username: "D",
      age: 30,
      nationality: "Kenyan",
      friends: [
        {
          id: 2,
          name: "Jean-Pierre",
          username: "JP",
          age: 25,
          nationality: "Rwandan",
        },
        {
          id: 3,
          name: "Marie",
          username: "M",
          age: 22,
          nationality: "Burundian",
        },
      ]
    },
    {
      id: 5,
      name: "Grace",
      username: "G",
      age: 28,
      nationality: "Ugandan",
      friends: [
        {
          id: 2,
          name: "Jean-Pierre",
          username: "JP",
          age: 25,
          nationality: "Rwandan",
        },
        {
          id: 3,
          name: "Marie",
          username: "M",
          age: 22,
          nationality: "Burundian",
        },
      ]
    },
    {
      id: 6,
      name: "Alice",
      username: "A",
      age: 21,
      nationality: "Tanzanian",
      friends: [
        {
          id: 2,
          name: "Jean-Pierre",
          username: "JP",
          age: 25,
          nationality: "Rwandan",
        },
        {
          id: 3,
          name: "Marie",
          username: "M",
          age: 22,
          nationality: "Burundian",
        },
      ]
    },
  ];
module.exports = {UserList};