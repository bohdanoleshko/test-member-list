import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { cn } from "~/lib/utils";

export function MemberAvatar({
  src,
  className,
}: {
  src?: string;
  className?: string;
}) {
  return (
    <Avatar className={cn(className)}>
      <AvatarImage
        src={src ? src : "https://github.com/shadcn.png"}
        alt="Avatar"
      />
    </Avatar>
  );
}
