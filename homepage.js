
let sections=document.querySelectorAll('section');
window.onscroll=()=>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;

        if(top>=offset && top< offset+height){
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    })
}
let left=document.getElementById('icons-left');
let right=document.getElementById('icons-right');
let pop_song=document.getElementsByClassName('div1')[0];
right.addEventListener('click', ()=>{
    pop_song.scrollLeft +=300;

});
left.addEventListener('click', ()=>{
    pop_song.scrollLeft -=300;

});
let left1=document.getElementById('icons-left1');
let right1=document.getElementById('icons-right1');
let pop_song1=document.getElementsByClassName('div2')[0];
right1.addEventListener('click', ()=>{
    pop_song1.scrollLeft +=300;

});
left1.addEventListener('click', ()=>{
    pop_song1.scrollLeft -=300;

});
let left2=document.getElementById('icons-left2');
let right2=document.getElementById('icons-right2');
let pop_song2=document.getElementsByClassName('div3')[0];
right2.addEventListener('click', ()=>{
    pop_song2.scrollLeft +=300;

});
left2.addEventListener('click', ()=>{
    pop_song2.scrollLeft -=300;

});
let pop_left=document.getElementById('left');
let pop_right=document.getElementById('right');
let pop_artist_song=document.getElementsByClassName('popular-artists-img2')[0];
pop_right.addEventListener('click', ()=>{
    pop_artist_song.scrollLeft +=30;

});
pop_left.addEventListener('click', ()=>{
    pop_artist_song.scrollLeft -=330;

});



// music.play()

 const songs=[
    {
        id:"1",
        songName:`on my way`,
        poster:"on my way.png",
    },
    {
        id:"2",
        songName:`Alan Faded `,
        poster:"image/2.jpg",
    },
    {
        id:"3",
        songName:`All Falls Down`,
        poster:"image/3.jpg",
    },
    {
        id:"4",
        songName:`Alone, Pt. II`,
        poster:"image/4.jpg",
    },
    {
        id:"5",
        songName:`Dark--Side`,
        poster:"image/5.jpg",
    },
    {
        id:"6",
        songName:`Diamond heart`,
        poster:"image/6.jpg",
    },
    {
        id:"7",
        songName:`Head Light`,
        poster:"image/7.jpg",
    },
    {
        id:"8",
        songName:`Sing-me-to-sleep`,
        poster:"image/8.jpg",
    },
    {
        id:"9",
        songName:`Murder in my mind
           <p class="slow">Phonk</p>`,
        poster:"./image/9.jpg",
    },
    {
        id:"10",
        songName:`chammak challo
            <p class="slow">Sharuqkhan</p>`,
        poster:"./image/10.jpg",
    },
    {
        id:"11",
        songName:`Dilbar
        <p class="slow">Nora Fatehi</p>`,
        poster:"./image/11.jpg",
    },
    {
        id:"12",
        songName:`Where are you now
        <p class="slow">Alan Walker</p>`,
        poster:"./image/12.jpg",
    },
    {
        id:"13",
        songName:`Cherry cherry lady
        <p class="slow">Slowed And Reverb</p> `,
        poster:"./image/13.jpg",
    },
    {
        id:"14",
        songName:`Nashe si chadh gayi
        <p class="slow">Slowed And Reverb</p>`,
        poster:"./image/14.webp",
    },
    {
        id:"15",
        songName:`Teri meri prem kahani
        <p class="slow">Slowed And Reverb</p>`,
        poster:"./image/15.jpg",
    },
    {
        id:"16",
        songName:`Ghost
        <p class="slow">Shivarajkumar</p>`,
        poster:"./16.jpg",
    },
    {
        id:"17",
        songName:`har funn maula
        <p class="slow">Slowed And Reverb</p>`,
        poster:"./17.jpg",
    },
    {
        id:"18",
        songName:`baby I don't understand
        <p class="slow">X X X Tentacion</p>`,
        poster:"./image/18.jpg",
    },
    {
        id:"19",
        songName:`har kisi ko
        <p class="slow">Slowed And Reverb</p>`,
        poster:"./19.jpg",
    },
    {
        id:"20",
        songName:`Gangsta Paradise
        <p class="slow">Slowed And Reverb</p>`,
        poster:"./image/20.jpg",
    },
    {
        id:"21",
        songName:`Gangam Style
        <p class="slow">Slowed And Reverb</p>`,
        poster:"./image/21.jpg",
    },
    {
        id:"22",
        songName:`Pachtaoge
        <p class="slow">Vicky Kaushal </p>`,
        poster:"./image/22.jpg",
    },
    {
        id:"23",
        songName:`Moogana Kadidharenu
        <p class="slow">DR Rajkumar</p>`,
        poster:"./image/23.jpg",
    },
    // {
    //     id:"24",
    //     songName:`Moogana Kadidharenu`,
    //     poster:"./image/24.jpg",
    // },
    // {
    //     id:"25",
    //     songName:`Moogana Kadidharenu`,
    //     poster:"./image/25.jpg",
    // },
    // {
    //     id:"26",
    //     songName:`Moogana Kadidharenu`,
    //     poster:"./image/26.jpg",
    // },
    // {
    //     id:"27",
    //     songName:`Moogana Kadidharenu`,
    //     poster:"./image/27.jpg",
    // },
    // {
    //     id:"28",
    //     songName:`Moogana Kadidharenu`,
    //     poster:"./image/28.jpg",
    // },
    // {
    //     id:"29",
    //     songName:`Moogana Kadidharenu`,
    //     poster:"./image/29.jpg",
    // },
    // {
    //     id:"30",
    //     songName:`Moogana Kadidharenu`,
    //     poster:"./image/30.jpg",
    // },
    // {
    //     id:"31",
    //     songName:`Moogana Kadidharenu`,
    //     poster:"./image/31.jpg",
    // },
    // {
    //     id:"32",
    //     songName:`Moogana Kadidharenu`,
    //     poster:"./image/32.jpg",
    // },
    // {
    //     id:"33",
    //     songName:`Moogana Kadidharenu`,
    //     poster:"./image/33.jpg",
    // },
    // {
    //     id:"34",
    //     songName:`Moogana Kadidharenu`,
    //     poster:"./image/34.jpg",
    // },
    // {
    //     id:"35",
    //     songName:`Moogana Kadidharenu`,
    //     poster:"./image/35.jpg",
    // },
    // {
    //     id:"36",
    //     songName:`Moogana Kadidharenu`,
        
    //     poster:"./image/36.jpg",
    // },
    {
        id:"24",
        songName:`summertime sadness
        <p class="slow">slowed and reverb</p>`,
        poster:"./image/24.jpg",
    },
    {
        id:"25",
        songName:`Blood mary
        <p class="slow">slowed and reverb</p>`,
        poster:"./image/25.jpg",
    },
    {
        id:"26",
        songName:`wake up moondiety
        <p class="slow">slowed and reverb</p>`,
        poster:"./image/26.jpg",
    },
    {
        id:"27",
        songName:`kalanka
        <p class="slow">arijith singh</p>`,
        
        poster:"./image/27.jpg",
    },
    {
        id:"28",
        songName:`wanna be yours
        <p class="slow">slowed and reverb</p>`,
        poster:"./image/28.jpg",
    },
    {
        id:"29",
        songName:`royalty
        <p class="slow"> Egzod, Maestro Chives</p>`,
        poster:"./image/29.jpg",
    },
    {
        id:"30",
        songName:`the monsters
        <p class="slow">kgf2</p>`,
        poster:"./image/30.jpg",
    },
    {
        id:"31",
        songName:`sulthana
        <p class="slow">kgf2</p>`,
        poster:"./image/31.jpg",
    },
    {
        id:"32",
        songName:`dernia dense
        <p class="slow">joker song</p>`,
        poster:"./image/32.jpg",
    },
    {
        id:"33",
        songName:`dernia dense
        <p class="slow">joker song</p>`,
        poster:"./image/32.jpg",
    },
    {
        id:"34",
        songName:`dernia dense
        <p class="slow">joker song</p>`,
        poster:"./image/32.jpg",
    },
    {
        id:"35",
        songName:`dernia dense
        <p class="slow">joker song</p>`,
        poster:"./image/32.jpg",
    },
    {
        id:"36",
        songName:`dernia dense
        <p class="slow">joker song</p>`,
        poster:"./image/32.jpg",
    },
    {
        id:"37",
        songName:`dernia dense
        <p class="slow">joker song</p>`,
        poster:"./image/32.jpg",
    },
    {
        id:"38",
        songName:`dernia dense
        <p class="slow">joker song</p>`,
        poster:"./image/32.jpg",
    },
    {
        id:"39",
        songName:`dernia dense
        <p class="slow">joker song</p>`,
        poster:"./image/32.jpg",
    },
    {
        id:"40",
        songName:`dernia dense
        <p class="slow">joker song</p>`,
        poster:"./image/4.jpg",
    },
    {
        id:"41",
        songName:`dernia dense
        <p class="slow">joker song</p>`,
        poster:"./image/5.jpg",
    },
    {
        id:"42",
        songName:`dernia dense
        <p class="slow">joker song</p>`,
        poster:"./image/6.jpg",
    },
    {
        id:"43",
        songName:`dernia dense
        <p class="slow">joker song</p>`,
        poster:"./image/7.jpg",
    },
    {
        id:"44",
        songName:`dernia dense
        <p class="slow">joker song</p>`,
        poster:"./image/8.jpg",
    },
    {
        id:"45",
        songName:`dernia dense
        <p class="slow">joker song</p>`,
        poster:"./image/9.jpg",
    },
    {
        id:"46",
        songName:`dernia dense
        <p class="slow">joker song</p>`,
        poster:"./image/10.jpg",
    },
]
const music=new Audio('');
Array.from(document.getElementsByClassName("menu-songs")).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('p')[0].innerHTML=songs[i].songName;
});
let masterplay=document.getElementById('master-play');
let wave=document.getElementsByClassName('music-wave')[0];
masterplay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <=0){
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    }else{
        music.pause();
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
});
const Allplay=()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
            e.classList.add('bi-play-circle-fill');
            e.classList.remove('bi-pause-circle-fill');
    })
}

let currentst=document.getElementById('start-time');
let currentend=document.getElementById('end-time');
let seek=document.getElementById('seek');
let bar1=document.getElementById('bar1');
let dot=document.getElementById('dot');
music.addEventListener('timeupdate', () => {
    let music_cur=music.currentTime;
     let music_dur=music.duration;
     let min1=Math.floor(music_dur / 60);
     let sec1=Math.floor(music_dur % 60);
     if(sec1 < 10){
         sec1=`0${sec1}`;
     }

     currentend.innerText=`${min1}:${sec1}`;
     let min2=Math.floor(music_cur / 60);
     let sec2=Math.floor(music_cur % 60);
     if(sec2 < 10){
        sec2=`0${sec2}`;
    }
    currentst.innerText=`${min2}:${sec2}`;

     let progressbar=parseInt((music_cur / music_dur)*100);
     seek.value=progressbar;
    //  console.log(seek.value);
     let seekbar=seek.value;
     bar1.style.width=`${seekbar}%`;
     dot.style.left=`${seekbar}%`;
});
seek.addEventListener('change',()=>{
    music.currentTime=seek.value * music.duration / 100;
})
let vol_icon=document.getElementById('valume');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');
vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a / 100;
}); 
let back=document.getElementById('back');
let next=document.getElementById('next');
back.addEventListener('click',()=>{
    index-=1;
    if(index < 1){
        index=Array.from(document.getElementsByClassName('animate')).length;
    }
        music.src=`./audio/${index}.mp3`;
        poster_master.src=`./image/${index}.jpg`;
        music.play();
        let songitem=songs.filter(els=>{
            return els.id==index;
        })
        songitem.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
        })
        makeAllPlays()
        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');
        makeAllBackground()

    })
    next.addEventListener('click',()=>{
        index++;
        if(index  > Array.from(document.getElementsByClassName('animate')).length ){
            index=1;
        }
            music.src=`./audio/${index}.mp3`;
            poster_master.src=`./image/${index}.jpg`;
            music.play();
            let songitem=songs.filter(els=>{
                return els.id==index;
            })
            songitem.forEach(elss=>{
                let {songName}=elss;
                title.innerHTML=songName;
            })
            document.getElementById(`${index}`).classList.remove('bi-play-fill');
            document.getElementById(`${index}`).classList.add('bi-pause-fill');      
    })
let index=0;
let poster_master=document.getElementById('poster_master');
let title=document.getElementById('title');
let title1=document.getElementById('title1');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        Allplay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');       
        music.src=`./audio/${index}.mp3`;
        poster_master.src=`./image/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        let songitem=songs.filter((els)=>{
            return els.id==index;
        });
        songitem.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
            
        });
    })

});
let poster_master2=document.getElementById('poster_master2');
let title3=document.getElementById('title3');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        Allplay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');       
        music.src=`./audio/${index}.mp3`;
        poster_master2.src=`./image/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        let songitem=songs.filter((els)=>{
            return els.id==index;
        });
        songitem.forEach(elss=>{
            let {songName}=elss;
            title3.innerHTML=songName;
            
        });
    })

});
let searchbar=document.getElementsByClassName('searchbar');
let searchbox2=document.getElementsByClassName('searchbox2')[0];
window.addEventListener('load',()=>{
    songs.forEach(element=>{
        const{img,title,singers}=element;
        let card=document.createElement('searchbox2');
        card.innerHTML=`<img src="${img}">
        <div class="content2">
            <h6>${title}</h6>
            <p>${singers}</p>
        </div> `;
        searchbox2.appendChild(card);
    })
})
