import { LearningPathComponents } from "@/components";
import { TYearData } from "@/types";

const genLearningPathCards = (props: TYearData) => {
  if (props.type === "slider") {
    return (
      <LearningPathComponents.Slider type={"slider"} childs={props.children} />
    );
  }
  if (props.type === "cards-hide-show") {
    return (
      <div
        className="flex overflow-x-scroll md:ml-10 overflow-y-visible !max-w-full md:max-w-full gap-5 scrollbar-hidden "
        style={{
          maxWidth: "calc(100vw - 300px)",
        }}
      >
        {props.children.map((child, index) => {
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
    );
  }
  if (props.type === "mixed") {
    return (
      <div className="md:ml-10 flex gap-3 items-stretch overflow-x-scroll max-w-full scrollbar-hidden">
        {props.children.map((child, index) => {
          if (child.type === "links-container") {
            return (
              <div key={index} className="min-w-[220px] max-w-[300px]">
                <LearningPathComponents.LinksContainerCard
                  data={{
                    ...child,
                    textColor: "white",
                    background: "linear-gradient(111deg,#ea3895,#e6a53b)",
                  }}
                />
              </div>
            );
          }
          if (child.type === "plain-card") {
            return (
              <div key={index} className="min-w-[220px] max-w-[300px]">
                <LearningPathComponents.PlainCard
                  key={index}
                  data={{
                    ...child,
                    textColor: "white",
                    background:
                      "linear-gradient(224deg,#a5fecb,#12d8fa 50%,#1fa2ff)",
                  }}
                />
              </div>
            );
          }
          if (child.type === "simple") {
            return (
              <div key={index} className="min-w-[220px] max-w-[300px]">
                {" "}
                <LearningPathComponents.SimpleCard key={index} data={child} />
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
  if (props.type === "simple-slider") {
    return (
      <div className="md:ml-10 flex gap-3">
        {props.children.map((child, index) => {
          return <LearningPathComponents.RowCard key={index} data={child} />;
        })}
      </div>
    );
  }
  return null;
};

export { genLearningPathCards };
