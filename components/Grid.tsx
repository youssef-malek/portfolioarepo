import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({id,className,title,titleClassName,description,imgClassName,img,spareImg}) => (
          <BentoGridItem
            id={id}
            key={id}
            className={className}
            title={title}
            description={description}
            titleClassName={titleClassName}
            img={img}
            imgClassName={imgClassName}
            spareImg={spareImg}

          />
        ))}
      </BentoGrid>
    </section>
  );
};
