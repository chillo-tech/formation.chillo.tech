import React, { useEffect, useRef, useState } from "react";
import { Years } from "@/data";
import { LearningPathComponents } from "..";
import {
  TCard,
  TCardHideShow,
  TCardPlain,
  TCardRow,
  TLinksContainer,
} from "@/types";

const LearningPaths = () => {
  const [years, setYears] = useState(Years);
  const containerRef = useRef<HTMLDivElement>(null);
  const [verticalbarHeight, setVerticalbarHeight] = useState(
    containerRef.current?.scrollHeight || 0
  );
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { height } = entry.contentRect;
        console.log(`La taille de la div a changé : ${height}`);
        setVerticalbarHeight(height);
      }
    });

    observer.observe(containerRef.current);
  }, [containerRef.current]);

  return (
    <div className="">
      <div
        className="container mx-auto px-4 pl-14 sm:px-8 relative"
        ref={containerRef}
        onResize={(e) => {
          console.log("changed", containerRef.current?.scrollHeight);
          setVerticalbarHeight(containerRef.current?.scrollHeight || 0);
        }}
      >
        <div className="h-full absolute left-2 top-0">
          <LearningPathComponents.VerticlaBar
            count={years.length}
            parentHeght={verticalbarHeight}
            childrenSizes={
              containerRef.current &&
              Array.from(containerRef.current?.children)
                .map((el) => el.clientHeight)
                .slice(1)
            }
          />
        </div>
        <div
          className="grid gap-5 items-center py-5"
          style={{
            gridTemplateColumns: "200px 1fr",
          }}
        >
          <LearningPathComponents.CursusHeader
            label={years[0].label}
            subTitle={years[0].subTitle}
            title={years[0].title}
          />
          <LearningPathComponents.Slider
            type={"slider"}
            childs={years[0].data.children as TCard[]}
          />
        </div>
        <div
          className="grid gap-5 items-center py-5"
          style={{
            gridTemplateColumns: "200px 1fr",
          }}
        >
          <LearningPathComponents.CursusHeader
            label={years[1].label}
            subTitle={years[1].subTitle}
            title={years[1].title}
          />
          <LearningPathComponents.Slider
            type={"slider"}
            childs={years[1].data.children as TCard[]}
          />
        </div>

        <div
          className="grid gap-5 items-center py-5"
          style={{
            gridTemplateColumns: "200px 1fr",
          }}
        >
          <LearningPathComponents.CursusHeader
            label={years[2].label}
            subTitle={years[2].subTitle}
            title={years[2].title}
          />
          <div
            className="flex overflow-x-scroll ml-10 overflow-y-visible max-w-[800px] gap-5 scrollbar-hidden"
            style={{
              maxWidth: "calc(100vw - 300px)",
            }}
          >
            {(years[2].data.children as TCardHideShow[]).map((child, index) => {
              return (
                <LearningPathComponents.SelectItem
                  key={index}
                  image={child.image}
                  childName={child.childName}
                  childs={child.children}
                />
              );
            })}
          </div>
        </div>

        <div
          className="grid gap-5 items-center py-5"
          style={{
            gridTemplateColumns: "200px 1fr",
          }}
        >
          <LearningPathComponents.CursusHeader
            label={years[3].label}
            subTitle={years[3].subTitle}
            title={years[3].title}
          />
          <div className=" ml-10 grid grid-cols-3 gap-3">
            {(
              years[3].data.children as (TCard | TCardPlain | TLinksContainer)[]
            ).map((child, index) => {
              if (child.type === "links-container") {
                return (
                  <LearningPathComponents.LinksContainerCard
                    key={index}
                    data={{
                      ...child,
                      textColor: "white",
                      background: "linear-gradient(111deg,#ea3895,#e6a53b)",
                    }}
                  />
                );
              }
              if (child.type === "plain-card") {
                return (
                  <LearningPathComponents.PlainCard
                    key={index}
                    data={{
                      ...child,
                      textColor: "white",
                      background:
                        "linear-gradient(224deg,#a5fecb,#12d8fa 50%,#1fa2ff)",
                    }}
                  />
                );
              }
              if (child.type === "simple") {
                return (
                  <LearningPathComponents.SimpleCard key={index} data={child} />
                );
              }
              return null;
            })}
          </div>
        </div>

        <div
          className=" grid gap-5 items-center py-5"
          style={{
            gridTemplateColumns: "200px 1fr",
          }}
        >
          <LearningPathComponents.CursusHeader
            label={years[4].label}
            subTitle={years[4].subTitle}
            title={years[4].title}
          />
          <div className="ml-10 flex gap-3">
            {(years[4].data.children as TCardRow[]).map((child, index) => {
              return (
                <LearningPathComponents.RowCard key={index} data={child} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { LearningPaths };
