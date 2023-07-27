/** @format */

import styled from "styled-components";
import Slick from "./slick/Slick";
import styles from "./ProjectItem.module.css";

interface itemsProps {
  item: string;
  name: string;
  href: string;
}

const SliderItem = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const items: itemsProps[] = [
  {
    item: `${process.env.PUBLIC_URL}/project/Netfle.png`,
    href: "https://thseogns-netflix.netlify.app",
    name: "Netfle",
  },
  {
    item: `${process.env.PUBLIC_URL}/project/Hnm.png`,
    href: "https://sonhnm.netlify.app/",
    name: "H&M",
  },
  {
    item: `${process.env.PUBLIC_URL}/project/TsTodoList.png`,
    href: "https://creative-nasturtium-945124.netlify.app/",
    name: "TsTodoList",
  },
];

function ProjectItem() {
  return (
    <Slick>
      {items.map((item, index) => (
        <SliderItem key={index}>
          <a href={item.href} target="_blank" rel="noreferrer">
            <img className={styles.imgStyle} src={item.item} alt={item.name} />
          </a>
        </SliderItem>
      ))}
    </Slick>
  );
}

export default ProjectItem;
