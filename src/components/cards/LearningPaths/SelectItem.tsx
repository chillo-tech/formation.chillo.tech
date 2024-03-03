import { IChildName, TCard } from "@/types";
import { capitalize } from "@/utils";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { SimpleCard } from "./SimpleCard";
import Image from "next/image";

const SelectItem = ({
  image,
  childName,
  childs,
}: {
  childName: IChildName;
  image: string;
  childs: TCard[];
}) => {
  const [isChildrenVisibles, setIsChildrenVisibles] = useState(false);
  const handleShow = () => {
    setIsChildrenVisibles(true);
  };
  const handleHide = () => {
    setIsChildrenVisibles(false);
  };
  return (
    <div onMouseLeave={handleHide}>
      <div className="text-blue-500 text-md border-2 rounded-[25px] mx-auto my-2 overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={childName.singular}
            width={300}
            height={200}
            className="w-[100%]"
          />
        )}
        <div className="px-4 py-4" onMouseEnter={handleShow}>
          <div className="flex items-center gap-2 border-2 px-3 rounded-[20px] border-blue-500">
            <h4 className="text-heading text-md text-nowrap">
              {childs.length}{" "}
              {capitalize(
                childs.length > 1
                  ? childName.plural
                    ? childName.plural
                    : childName.singular + "s"
                  : childName.singular
              )}
            </h4>
            <FaChevronDown size={20} />
          </div>
        </div>
        {isChildrenVisibles && (
          <div className="flex flex-col p-3">
            {childs.map((child, index) => {
              return (
                <div
                  key={`simple-card-${index}`}
                  className="h-max-[100px] max-w-[100%]"
                >
                  <SimpleCard data={child} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export { SelectItem };
