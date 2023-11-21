import { HomeView, Carousel, Accordions } from "..";
export const Home = () => {
  return (
    <HomeView
      key={0}
      carousel={<Carousel key={1} />}
      accordion={<Accordions key={2} />}
    />
  );
};
