import { FiArrowRightCircle } from "react-icons/fi";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import useMediaQuery from "@mui/material/useMediaQuery";

const srcset = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

const Gallery = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");
  const isLargeScreen = useMediaQuery("(max-width:1200px)");

  let imagecols = 2;
  if (isSmallScreen) {
    imagecols = 1;
  }
  const itemData = [
    {
      img: "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-port-4-1300x650.jpg",
      title: "Breakfast",
      rows: 2,
      cols: imagecols,
    },
    {
      img: "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-port-1-650x650.jpg",
      title: "Burger",
    },
    {
      img: "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-port-5-650x650.jpg",
      title: "Hats",
      cols: 1,
    },
    {
      img: "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/08/h1-banner-img-1.1.jpg",
      title: "Basketball",
    },
    {
      img: "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-port-6-650x650.jpg",
      title: "Fern",
    },
    {
      img: "https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/06/h1-port-3-1300x650.jpg",
      title: "Honey",
      rows: 2,
      cols: imagecols,
    },
  ];

  let cols = 4;
  if (isSmallScreen) {
    cols = 1;
  } else if (isMediumScreen) {
    cols = 2;
  } else if (isLargeScreen) {
    cols = 3;
  }

  return (
    <div className="bg-[#141414]">
      <div>
        <ImageList variant="quilted" cols={cols} rowHeight={151}>
          {itemData.map((item) => (
            <ImageListItem
              className="hover:h-40 overflow-hidden image-list-item"
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 2}
            >
              <img
                className="image"
                {...srcset(item.img, 211, item.rows, item.cols)}
                alt={item.title}
              />
              <div className="title-bar">
                <div className="text-center flex flex-col-reverse items-center gap-2 cursor-pointer">
                  <p className="uppercase">explore more</p>
                  <span>
                    <FiArrowRightCircle className="text-3xl" />
                  </span>
                </div>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default Gallery;
