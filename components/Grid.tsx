import { section } from "framer-motion/client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {[{ title: "title", description: "Desc", id: 1 }].map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
