




  import navbar from'./components/navbar.js';


  let thumb=document.getElementById('navbar');

   thumb.innerHTML=navbar();

   let you=JSON.parse(localStorage.getItem('you'));

   document.getElementById('you').innerText=you.name;


  
 let arr=JSON.parse(localStorage.getItem('clicked'));

   console.log(arr);
   


   

      function play() {

        let container=document.getElementById('container1');

          container.innerHTML = null;

         let videoId=arr.videoid;

   

        // let thumbnails=elem.snippet.thumbnails.high.url;

        // const channelName=elem.snippet.channelTitle;

        const title=arr.snippet.title;
        
        const div=document.createElement('div');

        const iframe=document.createElement('iframe');

           iframe.allow='fullscreen'

    

          iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1`;

    const title_html=document.createElement('h4');

       title_html.innerText=title;


//   const channel_html=document.createElement('h4');

//   channel_html.innerText=channelName;

  div.append(iframe,title_html);


    container.append(div);
        
      }

  play();


