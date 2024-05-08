
const clients=[
    {name:'Hussein',email:'hussein999@gmail.com',pass:'passwordHussein',packageBought:['aswan','alexandria','cairo'],avgReview:'5',commentID:['1','2']},
    {name:'Ahmed',email:'ahmed111@gmail.com',pass:'passwordAhmed',packageBought:['siwa'],avgReview:'4',commentID:['5']},
    {name:'Donia',email:'doniasara@gmail.com',pass:'passwordDonia',packageBought:['giza','luxor','cairo'],avgReview:'4.5',commentID:['3','6']},
    {name:'Amal',email:'amal123@outlook.com',pass:'passwordAmal',packageBought:['Matrooh','Sharm-Sheikh'],avgReview:'3',commentID:['4','8']},
    {name:'Tarek',email:'tarek@gmail.com',pass:'jigglyPUFF',packageBought:['cairo','Hurghada'],avgReview:'1',commentID:['7']},
    
]
console.log(clients);
const comments=[
    {commentID:'1',package:'aswan',name:'Hussein',text:'Very lovely indeed 💛',review:5+'⭐'  },
    {commentID:'2',package:'cairo',name:'Hussein',text:'Very bad indeed 😢',review:1+'⭐' },
    {commentID:'3',package:'cairo',name:'Donia'  ,text:'Very good indeed 💛',review:3  +'⭐'       },
    {commentID:'4',package:'Matrooh',name:'Amal' ,text:'Very mediocre indeed 🤏',review:2  +'⭐'   },
    {commentID:'5',package:'siwa',name:'Ahmed'   ,text:'Very lovely country 🏁',review:4  +'⭐'  },
    {commentID:'6',package:'giza',name:'Donia'   ,text:'Had a great time 💛',review:3  +'⭐'  },
    {commentID:'7',package:'Hurghada',name:'Tarek' ,text:'Awesome History 💛',review:4 +'⭐' },
    {commentID:'8',package:'Matrooh',name:'Amal' ,text:'Barely anything good there 👎',review:1 +'⭐'},
   
]

//these are fake values not actual people lmfao
//avgReview out of 5 stars
//note to @self: when parsing packageBought make sure its lowercase

for(const [key, value] of Object.entries(clients)){
//getting emails
const emails=clients.map(clt=>clt.email);}
//getting package array
const package=clients.flatMap(clt=>clt.packageBought)
console.log(package);
for (let index = 0; index < package.length; index++) {
   package[index]=package[index].toLowerCase()
    
}
package.sort()
console.log(package);
const uniquePackage = [...new Set(package)]; console.log(uniquePackage);
//counting purchase of each package
const countPackage=   package.reduce((accumulator, value) => {
    accumulator.set(value, (accumulator.get(value) || 0) + 1);
  
    return accumulator;
  }, new Map());
  console.log([...countPackage.values()]);
//creating chart
const chart_package=document.getElementById('package-canvas')


const packageChartData ={
labels:uniquePackage,
data:[...countPackage.values()]

}


new Chart(chart_package,{
type:'doughnut',
data: {
    labels:packageChartData.labels,
    datasets:[
        {
            label:"Package Popularity",
            data:packageChartData.data
        }
     ]


},
options:{
    borderWidth:0,
    borderRadius:1,
    hoverBorderWidth:5,
    borderAlign:'inner',
    borderColor:"#FEEFAD",
     backgroundColor: [
        '#c084fc',
        '#fb923c',
        '#facc15',
        '#4ade80',
        '#2dd4bf',
        '#f87171',
        '#e11d48',
        '#38bdf8',
        '#dc2626',
        
      ],
      hoverOffset:-15,
    
    plugins:{
        legend:{ display: false,}
    },
},
}
);
//review chart
const review_canvas=document.getElementById('reiew-canvas') //getting chart on html
const reviews=clients.flatMap(clt=>clt.avgReview) //getting reviews from clients



const reviewChartData ={ //object to use in chart
    labels:reviews,
    data:reviews
    
    }
new Chart(review_canvas,{
    type:'bar',
    data: {
        labels:reviewChartData.labels,
        datasets:[
            {
                label:"AVG reviews",
                data:reviewChartData.data
            }
         ]
    
    
    },
    options:{
        borderWidth:0,
        borderRadius:1,
        hoverBorderWidth:5,
        borderAlign:'inner',
        borderColor:"#FEEFAD",
         backgroundColor: [
            '#c084fc',
            '#fb923c',
            '#facc15',
            '#4ade80',
            '#2dd4bf',
            '#f87171',
            '#e11d48',
            '#38bdf8',
            '#dc2626'
          ],
          hoverOffset:-15,
        
        plugins:{
            legend:{ display: false,}
        },
    },
    }
    );


