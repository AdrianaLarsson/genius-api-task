//links/ref to the id="artist" and (title)
function song(id){
    var artist = document.querySelector("#artists");
    var title = document.querySelector("#title");
   // var images = document.querySelector("#images")

   //fetsh url, genius rapidapi, get method, api host and api key
    fetch(`https://genius.p.rapidapi.com/artists/${id}/songs`, {
        "method":"GET",
        "headers": {
            "x-rapidapi-host": "genius.p.rapidapi.com",
            "x-rapidapi-key": "77e948d1f6msh1fb9c1d3089d12bp121fb6jsn41e647859f85"
        }
    })
    //show the apikey
    .then (function(response){
        response.json()
        .then(function(songs){
            console.log(songs.response);
            songs.response.songs.forEach(function(element){
                console.log(element);
                let img = element.primary_artist.image_url;
                console.log(img)
              
                console.log( " Artist " + element.primary_artist.name + "" + " Title " + element.full_title)
                artist.innerHTML +=  `</br>`+  element.primary_artist.name 
                title.innerHTML += `</br>`+  element.full_title 
                id.innerHTML = `</br>`+ " ID " + element.id

                // var image = images.innerHTML += `<img src="${img}" />`;
                 
            });

        })
    })
}
//this listens for when all the DOM content has been loaded then executes this function
document.addEventListener('DOMContentLoaded', function() {

    //this line initializes the modals
        var modals = document.querySelectorAll('.modal');
        M.Modal.init(modals);
      
        //this line initializes the items
        var items = document.querySelectorAll('.collapsible');
        M.Collapsible.init(items);
      
      });

    






           
    //test code

//    const setUpSongArtistPost = (data) =>{
//        if (data.length){
//            data.forEach(doc =>{
//                const post = doc.data();
//               console.log('artist',post.artist) 
//               console.log('Song',post.title
              
//               ) 
//            })
//        }
//    }

//    const titleArtist = document('.ArtistsAndSong');

//    const setUpTitleArtist = (data)=>{

//     let html = '';
//     data.forEach(doc =>{

//         const post = doc.data();

       
//         const li = `
//         <li>
//         <div class="collapsible-header grey lighten-3"> ${post.artist}</div
//         <div class="collapsible-header grey lighten-3"> ${post.title}</div
        
//         </li>
//         ;
//         `
//         html += li



//     })


//     titleArtist.innerHTML = html

//     fs.collection('ArtistsAndSongs').get().then(snapshot =>{
//         setUpSongArtistPost(snapshot.docs);
//     });
   



    
  // }








// function getArtist(id){
   

//     fetch(`https://genius.p.rapidapi.com/artists/${id}`, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "genius.p.rapidapi.com",
//             "x-rapidapi-key": "77e948d1f6msh1fb9c1d3089d12bp121fb6jsn41e647859f85"
//         }
//     })
//     .then (function(response){
//         response.json()
        
//         .then(function(artist){
//             console.log("jnkjds")
//             console.log(artist.response.artist.alternate_names);
//             // artist.response.artist.forEach(function(element){
//             //     console.log(element);
        
//             // });

//         })
//     })
// }




//song(1674);
