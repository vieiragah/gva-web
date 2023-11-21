import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { MockCarousel } from "../../../mock";

export const CarouselComponent = () => {
  return (
    <Carousel sx={{borderRadius: '8px', marginBottom: '20px'}}>
      {MockCarousel.map((item) => (
        <Paper key={item.id} sx={{boxShadow: 'none'}}>
          <img
            src={item.img}
            alt={item.title}
            style={{
              height: "35vh",
              width: "100vw",
              backgroundSize: "cover",
            }}
          />
        </Paper>
      ))}
    </Carousel>
  );
};
