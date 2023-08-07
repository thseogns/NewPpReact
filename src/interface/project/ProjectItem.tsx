/** @format */

import styled from "styled-components";
import Slick from "./slick/Slick";
import styles from "./ProjectItem.module.css";

import { useDispatch } from "react-redux";
import { hover } from "../../features/displaySlice";

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
  {
    item: `${process.env.PUBLIC_URL}/project/tire.png`,
    href: "https://thseogns.github.io/tire/",
    name: "tire",
  },
  {
    item: `${process.env.PUBLIC_URL}/project/air.png`,
    href: "https://imaginative-dieffenbachia-fa52f5.netlify.app/",
    name: "air",
  },
  {
    item: `${process.env.PUBLIC_URL}/project/frz_title.png`,
    href: "https://thseogns.github.io/frizm/",
    name: "frz_title",
  },
];

function ProjectItem() {
  const dispatch = useDispatch();

  let imgAlt = "";
  const handleMouseHover = (e: any) => {
    imgAlt = e.target.alt;
    // imgAlt = e.currentTarget.alt;
    // console.log("마우스 오버한값입니다.", e.currentTarget.alt);
    dispatch(hover(imgAlt));
  };
  const handleMouseOut = () => {
    dispatch(hover(null));
  };
  return (
    <Slick>
      {items.map((item, index) => (
        <SliderItem key={index}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={handleMouseHover}
            onMouseOut={handleMouseOut}
          >
            <img className={styles.imgStyle} src={item.item} alt={item.name} />
          </a>
        </SliderItem>
      ))}
    </Slick>
  );
}

export default ProjectItem;
