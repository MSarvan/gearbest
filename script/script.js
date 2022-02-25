//slideshow
function slideshow() 
{
    let slideshows = document.getElementById("slide");
    let img = document.createElement("img");
    let images = [
        "https://uidesign.gbtcdn.com/GB/image/8823/9PC+banner+1190X420+EN.jpg?imbypass=true",
        "https://uidesign.gbtcdn.com/GB/image/8823/1PC+1190X420+EN.jpg?imbypass=true",
        "https://uidesign.gbtcdn.com/GB/image/8823/0PC+1190X420+EN.jpg?imbypass=true",
        "https://uidesign.gbtcdn.com/GB/image/8823/PC+1190X420+1EN.jpg?imbypass=true",
        "https://uidesign.gbtcdn.com/GB/image/8640/2.jpg?imbypass=true"
    ];

    img.src = images[0];
    var count = 1;
    setInterval(() => {
      if (count === images.length) 
      {
        count = 0;
      }

      img.src = images[count];
      slideshows.append(img);
      count++;
    }, 3000);

    slideshows.append(img);
}

slideshow();