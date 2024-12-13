//Array of images

const images = [
  {
    src: "https://i.dailymail.co.uk/i/pix/2010/11/04/article-1326705-0BEABA41000005DC-76_634x413.jpg",
    alt: "A picture of footballer Steven Gerrard making a ferocious tackle",
  },

  {
    src: "https://sportsbyte.sunderland.ac.uk/wp-content/uploads/2023/05/1416166644.0-scaled.jpg",
    alt: "A picture of Leon Edwards knocking out Kumaru Usman in round 5 with a headkick to win the title",
  },

  {
    src: "https://i.pinimg.com/originals/f0/ec/57/f0ec57a192f6e8c49f7d3ca72a12003b.jpg",
    alt: "A picure of Lebron James making a historic dunk",
  },

  {
    src: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2172050434.jpg?q=w_1110,c_fill",
    alt: "A picture of Canelo Alvarez landing a right hook in a Boxing match title defence",
  },

  {
    src: "https://www.formula1.com/trackside-images/2024/F1_Grand_Prix_of_Bahrain/2053149561.jpg",
    alt: "A picture off all the cars in Formula 1 at the 2024 Bahrain grand prix",
  },
];

//selecting the thumbnail container by the dom and assigning it as a variable so its easier to select/manipulate without having to write out the whole command everytime
let thumbnailContainer = document.getElementById("thumbnail-container");

//selecting the large image container by the dom and assigning it as a variable so its easier to select/manipulate without having to write out the whole command everytime
let largeImageContainer = document.getElementById("large-image-container");

//Create for each loop to go through array of images

function createThumbnails(imageArray) {
  imageArray.forEach(function (imgs) {
    const thumbImg = document.createElement("img");
    thumbImg.src = imgs.src;
    thumbImg.alt = imgs.alt;
    thumbImg.className = "thumbnail-img";
    thumbnailContainer.appendChild(thumbImg);
  });
}

createThumbnails(images);
