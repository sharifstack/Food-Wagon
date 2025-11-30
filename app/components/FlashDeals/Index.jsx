import React from "react";
import FlashDealCard from "../ui/FlashDealCard";
import card1 from "../../../public/assets/Flashdeals/card1.png";
import card2 from "../../../public/assets/Flashdeals/card2.png";
import card3 from "../../../public/assets/Flashdeals/card3.png";
import card4 from "../../../public/assets/Flashdeals/card4.png";
import ScrollReveal from "../Animation/ScrollReveal";

const FlashDeals = () => {
  return (
    <ScrollReveal>
      <div className="my-20">
        <div className="container">
          <div className="flex items-center gap-4">
            <FlashDealCard
              src={card1}
              offtext={"15"}
              foodname={"Greys Vage"}
              remaining={"6 Days Remaining"}
            />
            <FlashDealCard
              src={card2}
              offtext={"10"}
              foodname={"Greys Vage"}
              remaining={"6 Days Remaining"}
            />
            <FlashDealCard
              src={card3}
              offtext={"25"}
              foodname={"Greys Vage"}
              remaining={"7 Days Remaining"}
            />
            <FlashDealCard
              src={card4}
              offtext={"20"}
              foodname={"Greys Vage"}
              remaining={"8 Days Remaining"}
            />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default FlashDeals;
