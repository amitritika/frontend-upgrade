import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
import { FC } from "react";

  interface BlogCardProps {
    imgLink: string;
    name: string;
    title: string;
    description: string;
    profileImg: string;
    publishedDate: string;
  }
  const BlogCard: FC<BlogCardProps> = ({ imgLink, name, title, description, profileImg, publishedDate })=> {
    return (
      <Card className="max-w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src={imgLink}
            alt={title}
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            {title}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            <Tooltip content={name}>
              <Avatar
                size="sm"
                variant="circular"
                alt={name}
                src={profileImg}
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
          </div>
          <Typography className="font-normal">{publishedDate}</Typography>
        </CardFooter>
      </Card>
    );
  }

  export default BlogCard;
  export type { BlogCardProps };