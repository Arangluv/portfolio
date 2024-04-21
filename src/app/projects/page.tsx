'use client';

import { useEffect, useRef, useState } from 'react';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import uuid from 'react-uuid';
import ProjectContent from '../components/ProjectContent';
import projectData from '../assets/projectData';
import ProjectDescription from '../components/ProjectDescription';
import * as style from '../styles/projects/project.css';

interface ContentStyleInfo {
  contentWidth: number | undefined;
  contentHeight: number | undefined;
}

export default function Project() {
  const [mounted, setMounted] = useState(false);
  const [sliderCount, setSliderCount] = useState(0); // 처음 0, 마지막은 동적으로 변한다.
  const MAX_COUNT = projectData.length;
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
    window.addEventListener('resize', handleResize);
    setContentStyleInfo({
      contentWidth: mainContentRef.current?.offsetWidth,
      contentHeight: mainContentRef.current?.offsetHeight,
    });
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mounted, windowWidth]);

  const handleClick = (direction: string) => {
    if (!sliderContentRef.current) return;

    if (direction === 'left' && sliderCount !== 0) {
      // 이전 프로젝트를 보려고 하는 경우
      const calculateMovePixel = contentStyleInfo.contentWidth
        ? contentStyleInfo.contentWidth * (sliderCount - 1)
        : 0;
      sliderContentRef.current.style.transform = `translateX(-${calculateMovePixel}px)`;
      setSliderCount(pre => pre - 1);
    }
    if (direction === 'right' && sliderCount !== MAX_COUNT - 1) {
      const calculateMovePixel = contentStyleInfo.contentWidth
        ? contentStyleInfo.contentWidth * (sliderCount + 1)
        : 0;
      sliderContentRef.current.style.transform = `translateX(-${calculateMovePixel}px)`;
      setSliderCount(pre => pre + 1);
    }
  };

  if (!mounted) return <div />;

  return (
    <div className={style.project_wrapper}>
      <div className={style.prev_btn_item}>
        <MdOutlineNavigateBefore
          className={`${style.btn_icon} ${
            sliderCount === 0 ? style.unable_icon : ''
          }`}
          onClick={() => handleClick('left')}
        />
      </div>
      <div ref={mainContentRef} className={style.slider_wrapper}>
        <div className={style.slider_moveable} ref={sliderContentRef}>
          {projectData.map(data => (
            <ProjectContent
              title={data.title}
              images={data.images}
              contentWidth={contentStyleInfo.contentWidth}
              contentHeight={contentStyleInfo.contentHeight}
              key={uuid()}
            >
              <ProjectDescription
                period={data.period}
                overview={data.overview}
                functions={data.functions}
                github={data.github}
                frontend={data.frontend}
                backend={data.backend}
                database={data.database}
                deployment={data.deployment}
              />
            </ProjectContent>
          ))}
        </div>
      </div>
      <div className={style.next_btn_item}>
        <MdOutlineNavigateNext
          onClick={() => handleClick('right')}
          className={`${style.btn_icon} ${
            sliderCount === 2 ? style.unable_icon : ''
          }`}
        />
      </div>
      <div className={style.progress_state_item}>
        {projectData.map((item, idx) => (
          <div
            key={uuid()}
            className={
              sliderCount === idx
                ? style.progressiv_dot_active
                : style.progressiv_dot_inactive
            }
          />
        ))}
      </div>
    </div>
  );
}
