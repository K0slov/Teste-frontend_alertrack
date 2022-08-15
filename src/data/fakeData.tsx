export const data = [
    [" ", "México", "Brazil"],
    [0, 0, 0],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
    [5, 9, 5],
    [6, 11, 3],
    [7, 27, 19],
  ];
  
  export const options = {
    vAxis: {
      title: "Notificações",
    },
    series: {
        1: { curveType: "function" },
    },
  };

  export const dataServices = [
    ["Task", "Notfy per Day"],
    ["Sac Digital", 11],
    ["Panfleto Onli", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["WhatsApp", 7], // CSS-style declaration
  ];
  
  export const optionsServices = {
    title: "notificações por dia",
    pieHole: 0.4,
    is3D: false,
  };