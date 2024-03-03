import { LinkContainer } from "@/components";
import { TCard } from "@/types";
import Image from "next/image";

const SimpleCard = ({ data }: { data: TCard }) => {
  return (
    <LinkContainer href={data.link}>
      <div
        className="flex flex-col rounded-md shadow-md overflow-hidden shrink-0 h-full "
        style={{
          background: data.background || "transparent",
        }}
      >
        <Image
          src={data.image}
          className="h-[1/2]"
          alt={data.title}
          width={300}
          height={200}
        />
        <p className="p-4">{data.title}</p>
      </div>
    </LinkContainer>
  );
};

export { SimpleCard };
