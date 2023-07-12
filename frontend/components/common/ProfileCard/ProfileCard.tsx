import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import { FC } from "react";

  interface ProfileCardProps {
    imgLink: string;
    name: string;
    title: string;
    description: string;
  }
   
  const ProfileCard: FC<ProfileCardProps> = ({ imgLink, name, title, description })=> {
    return (
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src={imgLink} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue" className="text-xl" textGradient>
            {title}
          </Typography>
        </CardBody>
        <CardFooter className="pt-2 text-xl">
          {description}
        </CardFooter>
      </Card>
    );
  }

  export default ProfileCard;
  export type { ProfileCardProps };