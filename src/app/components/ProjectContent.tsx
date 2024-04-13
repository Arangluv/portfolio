"use client";

import * as style from "../styles/projects/project.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
interface ContentStyleInfo {
  children: React.ReactNode;
  contentWidth: number | undefined;
  contentHeight: number | undefined;
}
interface ImageContentStyleInfo {
  imageContentWidth: number | undefined;
  imageContentHeight: number | undefined;
}
const ProjectContent = ({
  children,
  contentWidth,
  contentHeight,
}: ContentStyleInfo) => {
  const [mounted, setMounted] = useState(false);
  const [sliderCount, setSliderCount] = useState(0); // 처음 0, 마지막은 동적으로 변한다.
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageSliderRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<null | number>(null);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const [contentStyleInfo, setContentStyleInfo] =
    useState<ImageContentStyleInfo>({
      imageContentWidth: 0,
      imageContentHeight: 0,
    });

  useEffect(() => {
    setMounted(true);
    window.addEventListener("resize", handleResize);
    setContentStyleInfo({
      imageContentWidth: imageWrapperRef.current?.offsetWidth,
      imageContentHeight: imageWrapperRef.current?.offsetHeight,
    });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mounted, windowWidth]);

  if (!mounted) return <div></div>;

  const handleClick = (direction: string) => {
    if (!imageSliderRef.current) return;

    if (direction === "left" && sliderCount !== 0) {
      // 이전 프로젝트를 보려고 하는 경우
      const calculateMovePixel = contentStyleInfo.imageContentWidth
        ? contentStyleInfo.imageContentWidth * (sliderCount - 1)
        : 0;
      imageSliderRef.current.style.transform = `translateX(-${calculateMovePixel}px)`;
      setSliderCount((pre) => pre - 1);
    }
    if (direction === "right" && sliderCount !== 7) {
      const calculateMovePixel = contentStyleInfo.imageContentWidth
        ? contentStyleInfo.imageContentWidth * (sliderCount + 1)
        : 0;
      imageSliderRef.current.style.transform = `translateX(-${calculateMovePixel}px)`;
      setSliderCount((pre) => pre + 1);
    }
  };
  return (
    <div
      className={style.main_content_wrapper}
      style={assignInlineVars({
        [style.totalContentWidth]: contentWidth ? `${contentWidth}px` : "0px",
        [style.totalContentHeight]: contentHeight
          ? `${contentHeight}px`
          : "0px",
      })}
    >
      <div className={style.header_item}>AQUIZ - 나만의 퀴즈사이트</div>
      <div
        ref={imageWrapperRef}
        className={style.picture_wrapper_item}
        style={assignInlineVars({
          [style.imageContentHeight]: `${contentStyleInfo.imageContentHeight}px`,
          [style.imageContentWidth]: `${contentStyleInfo.imageContentWidth}px`,
        })}
      >
        <div ref={imageSliderRef} className={style.image_slider_moveable}>
          <Image
            width={500}
            height={600}
            alt="project content image"
            src="https://i.stack.imgur.com/LUm4a.png"
            className={style.image_size}
            priority={true}
          />
        </div>
        <div className={style.image_slider_btn_wrapper}>
          <div className={style.image_slider_prev_item}>
            <MdOutlineNavigateBefore
              className={
                sliderCount === 0 ? style.image_icon_disable : style.image_icon
              }
              onClick={() => handleClick("left")}
            />
          </div>
          <div className={style.image_slider_btn_item}>
            <span className={style.image_count_text}>
              {sliderCount + 1} / 8
            </span>
          </div>
          <div className={style.image_slider_next_item}>
            <MdOutlineNavigateNext
              className={
                sliderCount === 7 ? style.image_icon_disable : style.image_icon
              }
              onClick={() => handleClick("right")}
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProjectContent;
