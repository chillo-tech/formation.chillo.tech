import { useLearningPaths } from "@/hooks";
import { genLearningPathCards } from "@/utils";
import { LearningPathComponents } from "..";

const LearningPaths = () => {
  const { containerRef, verticalbarHeight, years } = useLearningPaths();

  return (
    <div className="">
      <div
        className="container mx-auto px-4 md:pl-14 sm:px-8 relative"
        ref={containerRef}
      >
        <div className="hidden md:block h-full absolute left-2 top-0">
          <LearningPathComponents.VerticalBar
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

        {years.map((year, index) => {
          return (
            <div
              className="flex flex-col md:grid gap-5 md:items-center py-5 "
              key={`year-${index}`}
              style={{
                gridTemplateColumns: "200px 1fr",
              }}
            >
              <LearningPathComponents.CursusHeader
                label={year.label}
                subTitle={year.subTitle}
                title={year.title}
              />
              {genLearningPathCards(year.data)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { LearningPaths };
