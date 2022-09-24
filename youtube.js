



import navbar from './components/navbar.js'


let nav=document.getElementById('navbar');

nav.innerHTML=navbar();

let you=JSON.parse(localStorage.getItem('you'));

document.getElementById('you').innerText=you.name;

   let btn1=document.getElementById('btn');

     btn1.addEventListener('click' ,myfun);


   async  function myfun(){
       
    let Api="AIzaSyDMjP1WU_twWwqnY-tdUt-D4sGi6XAs3bM";

    try{
    const query=document.getElementById('query').value;

    let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${Api}&part=snippet&maxResults=20`);
    
     let data=await res.json();
     const actual_data=data.items
     console.log(actual_data);
      appendVideos(actual_data);

    }catch(err){
          console.log(err);
    }
};

const appendVideos = (data) => {

    let container=document.getElementById('container');

      container.innerHTML=null;

    data.forEach((elem) =>{
        const videoId=elem.id.videoId;

        const snippet=elem.snippet;

        let thumbnails=elem.snippet.thumbnails.high.url;

        const channelName=elem.snippet.channelTitle;

        const title=elem.snippet.title;
        
        const div=document.createElement('div');

        const image=document.createElement('img');

          image.src=thumbnails;

    const title_html=document.createElement('h4');

       title_html.innerText=title;


  const channel_html=document.createElement('h4');

  channel_html.innerText=channelName;

  div.append(image,title_html,channel_html);

    

    let data = {
          snippet:snippet,
          videoid:videoId,
    }
      console.log(data);

     

    div.addEventListener('click',myfun);
    function myfun() {
          window.location.href='video.html'
          localStorage.setItem('clicked',JSON.stringify(data));
    }

    container.append(div);
        
    })
}

 // 'https://youtube.googleapis.com/youtube/v3/i18nRegions?part=es&key=[YOUR_API_KEY]'

  // let url= `https://youtube.googleapis.com/youtube/v3/search?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=es&videoCategoryId=17&key=AIzaSyDMjP1WU_twWwqnY-tdUt-D4sGi6XAs3bM`;

  //    async function getData(token) {

  //     let res = await fetch(url , {

  //       headers  : {'Authorization': ` Bearer ${token}` ,
  //                'Accept': 'application/json'

  //     },

  //     });

  //     let deta = await res .json();

  //     console.log(deta);
  //   }

  //   getData();