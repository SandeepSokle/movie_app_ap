



let express = require("express");
let data = require("./data.json");



// console.log(genreList);

//////server bnate hai but only create not start:
let server = express();


server.get("/movies",(req,res)=>{
    res.json(data);    
})

server.get("/genre",(req,res)=>{
    let allGenreObjects = data.map(function (el) {
        return el.genre;
      });
    
      let uniqueGenreObjects = [];
    
      for (let i = 0; i < allGenreObjects.length; i++) {
        let genreId = allGenreObjects[i]["_id"];
    
        let index = uniqueGenreObjects.findIndex(function (el) {
          return el._id == genreId;
        });
    
        if (index == -1) {
          uniqueGenreObjects.push(allGenreObjects[i]);
        }
      }
    
      res.json(uniqueGenreObjects);
    });    



////start server on a port
server.listen(process.env.PORT || 4000);