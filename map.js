const singers = [
    {
      name: "Karan aujla",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOssodYSMHz86QUhxliirRmq4Ll_7haJfGA&s",
      DoB: "January 18, 1997",
      height: "1.75m",
      like: "500",
      followers: "10k",
      post: 130,
    },
    {
      name: "Babbu Maan",
      photo: "https://i1.sndcdn.com/artworks-000495523161-g9rutm-t500x500.jpg",
      DoB: "March 29, 1975",
      height: "1.81m",
      like: "700",
      followers: "10k",
      post: 150,
    },
    {
      name: "Amrinder Gill",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-BwEIBWdh7TcF0ByOM1FuhFFf1Rj-JsRRg&s",
      DoB: "May 11, 1976",
      height: "1.70m",
      like: "1000",
      followers: "50k",
      post: 250,
    },
    {
      name: "Gippy Grewal",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLAE6ACov-pMQruF8hwt42WUqrTUQgzv93VQ&s",
      DoB: "March 29, 1975",
      height: "1.81m",
      like: "500",
      followers: "30k",
      post: 500,
    },
    {
      name: "Yo Yo Honey Singh",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6WUfjWd2rQ8jaUXzJLcoBlbBwnXyCwWkSw&s",
      DoB: "March 15, 1983",
      height: "1.81m",
      like: "700",
      followers: "20k",
      post: 200,
    },
    {
      name: "Ranjit Bawa",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP8izBNRkJuPoZLL-Vl3s-MGczKeSQ32KUA&s",
      DoB: "March 14, 1989",
      height: "1.81m",
      like: "800",
      followers: "30k",
      post: 210,
    },
  ];

// convert the array of object to array of boolean. return true if the posts are greater than 200
  let newSingers = singers.map((singer)=>{
    if(singer.post>200){
        return true
    } else {
        return false
    }
  })


  // convert the array of object to array of OBJECT SUCH THAT THE LIKES AND POSTS are removed

  newSingers = singers.map((singer)=>{
    delete singer.like;
    delete singer.post;

    return singer
  })

  console.log(singers);
  console.log(newSingers);
  