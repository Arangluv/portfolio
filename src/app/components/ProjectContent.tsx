"use client";

import * as style from "../styles/projects/project.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
interface ContentStyleInfo {
  contentWidth: number | undefined;
  contentHeight: number | undefined;
}
interface ImageContentStyleInfo {
  imageContentWidth: number | undefined;
  imageContentHeight: number | undefined;
}
const ProjectContent = ({ contentWidth, contentHeight }: ContentStyleInfo) => {
  const [mounted, setMounted] = useState(false);
  const [sliderCount, setSliderCount] = useState(0); // 처음 0, 마지막은 동적으로 변한다.
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageSliderRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
          />
          <Image
            width={500}
            height={600}
            alt="project content image"
            src="https://i.stack.imgur.com/LUm4a.png"
            className={style.image_size}
          />
          <Image
            width={500}
            height={600}
            alt="project content image"
            src="https://i.stack.imgur.com/LUm4a.png"
            className={style.image_size}
          />
          <Image
            width={500}
            height={600}
            alt="project content image"
            src="https://i.stack.imgur.com/LUm4a.png"
            className={style.image_size}
          />
          <Image
            width={500}
            height={600}
            alt="project content image"
            src="https://i.stack.imgur.com/LUm4a.png"
            className={style.image_size}
          />
          <Image
            width={500}
            height={600}
            alt="project content image"
            src="https://i.stack.imgur.com/LUm4a.png"
            className={style.image_size}
          />
          <Image
            width={500}
            height={600}
            alt="project content image"
            src="https://i.stack.imgur.com/LUm4a.png"
            className={style.image_size}
          />
          <Image
            width={500}
            height={600}
            alt="project content image"
            src="https://i.stack.imgur.com/LUm4a.png"
            className={style.image_size}
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
      <div className={style.introduction_item}>
        <div className={style.project_introduction_wrapper}>
          <div className={style.introduction_sub_wrapper}>
            <div className={style.introduction_front}>
              <span className={style.intro_sub_title}>2024 — Present</span>
            </div>
            <div className={style.introduction_rear}>
              <p className={style.intro_description}>
                {`탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다.
                
                국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한 때에는 대통령은 이를 해제하여야 한다.
                
                국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.`}
              </p>
            </div>
          </div>
          <div className={style.seperated_wrapper}>
            <div className={style.introduction_front}>
              <span className={style.intro_sub_title_accent}>주요기능</span>
            </div>
            <div className={style.introduction_rear}>
              <p className={style.intro_description}>
                {`날짜별로 각 루틴의 달성 여부, 할 일 목록, 시간 단위 일정 기입하기, 월별로 각 루틴의 달성 여부를 한눈에 확인하기`}
              </p>
            </div>
          </div>
          <div className={style.introduction_sub_wrapper}>
            <div className={style.introduction_front}>
              <span className={style.intro_sub_title_accent}>github</span>
            </div>
            <div className={style.introduction_rear}>
              <a
                href="https://github.com/Arangluv/portfolio"
                className={style.intro_description_link}
              >
                https://github.com/Arangluv/portfolio
              </a>
            </div>
          </div>
          <div className={style.introduction_sub_wrapper}>
            <div className={style.introduction_front}>
              <span className={style.intro_sub_title_accent}>front</span>
            </div>
            <div className={style.introduction_rear}>
              <p className={style.intro_description}>
                next.js, vanilla-extract
              </p>
            </div>
          </div>
          <div className={style.introduction_sub_wrapper}>
            <div className={style.introduction_front}>
              <span className={style.intro_sub_title_accent}>deployment</span>
            </div>
            <div className={style.introduction_rear}>
              <p className={style.intro_description}>
                Vercel, Supabase (Authentication)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
