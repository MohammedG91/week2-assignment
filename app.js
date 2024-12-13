//Array of images

const images = [
  {
    src: "https://i.dailymail.co.uk/i/pix/2010/11/04/article-1326705-0BEABA41000005DC-76_634x413.jpg",
    alt: "A picture of footballer",
  },

  {
    src: "https://sportsbyte.sunderland.ac.uk/wp-content/uploads/2023/05/1416166644.0-scaled.jpg",
    alt: "An image, will update",
  },

  {
    src: "https://i.pinimg.com/originals/f0/ec/57/f0ec57a192f6e8c49f7d3ca72a12003b.jpg",
    alt: "An image, will update",
  },

  {
    src: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2172050434.jpg?q=w_1110,c_fill",
    alt: "An image, will update",
  },

  {
    src: "https://www.formula1.com/trackside-images/2024/F1_Grand_Prix_of_Bahrain/2053149561.jpg",
    alt: "An image, will update",
  },
];

//selecting the thumbnail container by the dom and assigning it as a variable so its easier to select/manipulate without having to write out the whole command everytime
let thumbnailContainer = document.getElementById("thumbnail-container");

//selecting the large image container by the dom and assigning it as a variable so its easier to select/manipulate without having to write out the whole command everytime
let largeImageContainer = document.getElementById("large-image-container");
