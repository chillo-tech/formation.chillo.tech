import { ISection } from "@/types";

const mockSections: (sections: any[]) => ISection[] = (sections) => {
  // label: sections[0].section_id.label,
  // title: sections[0].section_id.title.value,
  // description: sections[0].section_id.description,
  // iconName: sections[0].section_id.icon,
  // image: sections[0].section_id.images[0].image_id.link,

  const props = [
    {
      color: "#a679ff",
      direction: "right",
    },
    {
      color: "#ff75d3",
      direction: "left",
    },
    {
      color: "#73ccaf",
      direction: "right",
    },
    {
      color: "#a679ff",
      direction: "left",
    },
    {
      color: "#ff75d3",
      direction: "right",
    },
    {
      color: "#73ccaf",
      direction: "left",
    },
  ];
  return sections.map((section, index) => {
    return {
      label: section.section_id.label,
      title: section.section_id.title.value,
      description: section.section_id.description,
      iconName: section.section_id.icon,
      image: section.section_id.images[0].image_id.link,
      ...props[index % props.length],
    };
  });
};

export { mockSections };
