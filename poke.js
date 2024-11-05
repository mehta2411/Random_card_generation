// "https://i.pinimg.com/736x/c8/eb/3d/c8eb3df2dbbb99d7da876812a7d5fd2b.jpg",
// "https://i.pinimg.com/474x/87/94/f8/8794f8c63642d141597f2ea8f463c217.jpg",
// " https://i.pinimg.com/474x/cd/9f/5d/cd9f5d10816d27a61836545acc888b78.jpg",
// " https://i.pinimg.com/474x/2a/fd/19/2afd195bf4ab8261001ea863df62fdc6.jpg",
//  " https://i.pinimg.com/474x/3b/05/3f/3b053fd2100f1d0c29b618092203aa29.jpg",
// " https://i.pinimg.com/236x/f7/69/04/f7690448200816075c7e2f44fa83baf0.jpg"
//  "https://i.pinimg.com/236x/b1/47/76/b1477677c639e88d9764bdbb02900a24.jpg"




let main=document.getElementById("main");


let arr=["https://i.pinimg.com/736x/c8/eb/3d/c8eb3df2dbbb99d7da876812a7d5fd2b.jpg",
"https://i.pinimg.com/474x/87/94/f8/8794f8c63642d141597f2ea8f463c217.jpg",
" https://i.pinimg.com/474x/cd/9f/5d/cd9f5d10816d27a61836545acc888b78.jpg",
" https://i.pinimg.com/474x/2a/fd/19/2afd195bf4ab8261001ea863df62fdc6.jpg",
 " https://i.pinimg.com/474x/3b/05/3f/3b053fd2100f1d0c29b618092203aa29.jpg",
" https://i.pinimg.com/236x/f7/69/04/f7690448200816075c7e2f44fa83baf0.jpg",
 "https://i.pinimg.com/236x/b1/47/76/b1477677c639e88d9764bdbb02900a24.jpg"
];
let s=""
for(let i=1;i<=56;i++){
    let r=Math.floor(Math.random()*arr.length);
    s+=`<div class="cards">
   <img src=${arr[r]}>
    </div>`
}
main.innerHTML =s;