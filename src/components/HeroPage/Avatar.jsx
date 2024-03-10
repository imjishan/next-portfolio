import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const AvatarCom = () => {
  return (
    <div className="-z-50 relative">
      <Avatar>
        <AvatarImage src="/jishan.jpg" />
        <AvatarFallback>JA</AvatarFallback>
      </Avatar>
    </div>
  );
};
export default AvatarCom;
