import { HomeView, CarouselComponent, Accordions } from "..";
export const Home = () => {
  return (
    <HomeView
      key={0}
      carousel={<CarouselComponent key={1} />}
      accordion={<Accordions key={2} />}
    />
  );
};
