// using sessionStorage as data base

const initState = {
  movies: [
    {
      title: "La vida de Brian",
      genres: ["comedy"],
      watched: false,
      index: 3
    },
    {
      title: "El viaje de Chihiro",
      genres: ["fantasy"],
      watched: false,
      index: 2
    },
    {
      title: "Érase una vez en... Hollywood",
      genres: ["drama", "comedy"],
      watched: false,
      index: 1
    }
  ]
};

const setDummyData = () => {
  Object.keys(initState).forEach(key => {
    sessionStorage.setItem(key, JSON.stringify(initState[key]));
  });
};

export default setDummyData;
