"use client";

import { useEffect, useRef, useState } from "react";
import * as style from "../styles/projects/project.css";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import ProjectContent from "../components/ProjectContent";
interface ContentStyleInfo {
  contentWidth: number | undefined;
  contentHeight: number | undefined;
}

const Project = () => {
  const [mounted, setMounted] = useState(false);
  const [sliderCount, setSliderCount] = useState(0); // 처음 0, 마지막은 동적으로 변한다.
  const mainContentRef = useRef<HTMLDivElement>(null);
  const sliderContentRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<null | number>(null);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const [contentStyleInfo, setContentStyleInfo] = useState<ContentStyleInfo>({
    contentWidth: 0,
    contentHeight: 0,
  });
  useEffect(() => {
    setMounted(true);
    window.addEventListener("resize", handleResize);
    setContentStyleInfo({
      contentWidth: mainContentRef.current?.offsetWidth,
      contentHeight: mainContentRef.current?.offsetHeight,
    });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mounted, windowWidth]);

  const handleClick = (direction: string) => {
    if (!sliderContentRef.current) return;

    if (direction === "left" && sliderCount !== 0) {
      // 이전 프로젝트를 보려고 하는 경우
      const calculateMovePixel = contentStyleInfo.contentWidth
        ? contentStyleInfo.contentWidth * (sliderCount - 1)
        : 0;
      sliderContentRef.current.style.transform = `translateX(-${calculateMovePixel}px)`;
      setSliderCount((pre) => pre - 1);
    }
    if (direction === "right" && sliderCount !== 2) {
      const calculateMovePixel = contentStyleInfo.contentWidth
        ? contentStyleInfo.contentWidth * (sliderCount + 1)
        : 0;
      sliderContentRef.current.style.transform = `translateX(-${calculateMovePixel}px)`;
      setSliderCount((pre) => pre + 1);
    }
  };
  if (!mounted) return <div></div>;

  return (
    <div className={style.project_wrapper}>
      <div className={style.prev_btn_item}>
        <MdOutlineNavigateBefore
          className={`${style.btn_icon} ${
            sliderCount === 0 ? style.unable_icon : ""
          }`}
          onClick={() => handleClick("left")}
        />
      </div>
      <div ref={mainContentRef} className={style.slider_wrapper}>
        <div className={style.slider_moveable} ref={sliderContentRef}>
          <ProjectContent
            contentWidth={contentStyleInfo.contentWidth}
            contentHeight={contentStyleInfo.contentHeight}
          />
          <ProjectContent
            contentWidth={contentStyleInfo.contentWidth}
            contentHeight={contentStyleInfo.contentHeight}
          />
          <ProjectContent
            contentWidth={contentStyleInfo.contentWidth}
            contentHeight={contentStyleInfo.contentHeight}
          />
          <ProjectContent
            contentWidth={contentStyleInfo.contentWidth}
            contentHeight={contentStyleInfo.contentHeight}
          />
          <ProjectContent
            contentWidth={contentStyleInfo.contentWidth}
            contentHeight={contentStyleInfo.contentHeight}
          />
        </div>
      </div>
      <div className={style.next_btn_item}>
        <MdOutlineNavigateNext
          onClick={() => handleClick("right")}
          className={`${style.btn_icon} ${
            sliderCount === 2 ? style.unable_icon : ""
          }`}
        />
      </div>
      <div className={style.progress_state_item}>
        <div
          className={
            sliderCount === 0
              ? style.progressiv_dot_active
              : style.progressiv_dot_inactive
          }
        ></div>
        <div
          className={
            sliderCount === 1
              ? style.progressiv_dot_active
              : style.progressiv_dot_inactive
          }
        ></div>
        <div
          className={
            sliderCount === 2
              ? style.progressiv_dot_active
              : style.progressiv_dot_inactive
          }
        ></div>
      </div>
    </div>
  );
};

export default Project;
