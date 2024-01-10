const ctx = document.getElementById('myChart');


// Exemple graphique en bar 
// new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

// EXEMPLE BUBBLE CHART 
// new Chart(ctx , {
//     type: 'bubble',
//     data: {
//         datasets: [
//             {
//                 label: 'point 1',
//                 data : [{ x:20 , y:30, r:15}], 
//                 backgroundColor: 'rgb(255, 99, 132)'
//             },
//             {
//                 label: 'point 2',
//                 data : [{ x:40 , y:10, r:10}], 
//                 backgroundColor: 'blue'
//             },
//             {
//                 label: 'point 3',
//                 data : [{ x:10 , y:35, r:25}], 
//                 backgroundColor: 'red'
//             },
//             {
//                 label: 'point 4',
//                 data : [{ x:30 , y:40, r:40}], 
//                 backgroundColor: 'green'
//             },
//         ]
//     },
//     options: {}
// })


// EXEMPLE DOUGHNUT CHART
const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

new Chart(ctx,{
    type: 'doughnut',
    data: data,
  });