  // graph line

export const data = [
    [" ", "México", "Brazil"],
    [0, 6, 8],
    [1, 10, 5],
    [2, 23, 15],
    [3, 10, 18],
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

  // graph Circles

  export const dataServices = [
    ["Task", "Notificações por dia"],
    ["Sac Digital", 11],
    ["Panfleto Online", 2],
    ["Consulta ideal", 2],
    ["SMS ideal", 8],
    ["Wpp Business", 2],
    ["WhatsApp", 7], // CSS-style declaration
  ];
  
  export const optionsServices = {
    title: "notificações por dia",
    pieHole: 0.4,
    is3D: false,
  };

  // graph calendar
  
export const dataCalendar = [
  [
    { type: "date", id: "Date" },
    { type: "number", id: "Won/Loss" },
  ],
  [new Date(2022, 8, 4), 10],
  [new Date(2022, 7, 5), 3],
  [new Date(2022, 7, 7), -1],
  [new Date(2022, 5, 8), 2],
  [new Date(2022, 5, 12), -1],
  [new Date(2022, 5, 13), 1],
  [new Date(2022, 4, 15), 1],
  [new Date(2022, 3, 16), -4],
  [new Date(2022, 3, 4), 10],
  [new Date(2022, 1, 5), 3],
  [new Date(2022, 1, 7), -1],
  [new Date(2022, 2, 8), 2],
  [new Date(2022, 2, 12), -1],
  [new Date(2022, 1, 13), 1],
  [new Date(2022, 1, 15), 1],
  [new Date(2022, 1, 16), -4],
];

export const optionsCalendar = {
  title: "Incidentes no sistema",
};
