import React from "react";
import Category from "../components/Category";
import FeaturedSection from "../components/FeaturedSection";
import OfferSection from "../components/OfferSection";
import SubscriptionSection from "../components/SubscriptionSection";
import TutorialSection from "../components/TutorialSection";
import {
  useGetCombosQuery,
  useGetFeaturedQuery,
} from "../services/productService";

const HomePage = () => {
  const { data, isFetching, error } = useGetCombosQuery();
  const {
    data: dataFeatured,
    isFetching: isFetchingFeatured,
    errorFeatured,
  } = useGetFeaturedQuery();

  console.log(isFetchingFeatured);

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-6">
        <div className="hidden grid-cols-5 gap-x-4 xl:grid pt-10">
          <Category
            title="Teclados"
            count="16"
            img="https://www.compugo.pe/wp-content/uploads/2021/05/teclados-1_400x-300x300.jpg"
          />
          <Category
            title="Ratones"
            count="18"
            img="https://www.compugo.pe/wp-content/uploads/2021/05/mouse-1-1_400x-300x300.jpg"
          />
          <Category
            title="Combos"
            count="19"
            img="https://www.compugo.pe/wp-content/uploads/2021/05/combo-300x300.jpg"
          />
          <Category
            title="Audifonos"
            count="20"
            img="https://www.compugo.pe/wp-content/uploads/2021/05/audifonos-1_400x-300x300.jpg"
          />
          <Category
            title="Accesorios"
            count="26"
            img="https://www.compugo.pe/wp-content/uploads/2021/05/mousepad-300x300.jpg"
          />
        </div>
      </div>
      {data && <OfferSection data={data} />}
      {dataFeatured && <FeaturedSection data={dataFeatured} />}
      <TutorialSection />
      <SubscriptionSection />
    </div>
  );
};

export default HomePage;
