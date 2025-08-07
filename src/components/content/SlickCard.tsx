import { Typography } from "@mantine/core";
import Image from "next/image";
import Star from "../../assets/icons/icStar.svg";

type SlickCardProps = { title: string; content: string; author: string };
export const SlickCard: React.FC<SlickCardProps> = ({
  title,
  content,
  author,
}) => {
  return (
    <div className="flex flex-col  justify-center max-w-[506px] h-[220px] bg-[#1B1B1B] rounded-[20px] p-6">
      <Typography className="text-white text-[20px] font-[600] leading-[32px] text-start">
        {title}
      </Typography>
      <Typography className=" text-[20px] font-[400] leading-[28px] text-[#E2E2E2] mt-4">
        {content}
      </Typography>
      <div className="flex w-full items-center justify-between mt-4">
        <Typography className="text-white text-[18px] font-[400] leading-[28px]">
          {author}
        </Typography>
        <div className="flex items-center gap-2">
          <Image src={Star} alt="Star" />
        </div>
      </div>
    </div>
  );
};
