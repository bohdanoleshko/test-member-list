"use client";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { MemberDialog } from "../atoms/dialog";
import { ProfileForm } from "./form";
import { useAppDispatch } from "~/store/hooks";
import { addMember, type TMemberData } from "~/store/slice";

export function TableCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const dispatch = useAppDispatch();

  const handleAdd = (member: Omit<TMemberData, "id">) => {
    dispatch(addMember(member));
  };

  return (
    <Card className={cn(className, "h-[85dvh] w-full")}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle>Members List</CardTitle>
          <MemberDialog
            trigger={<Button>Add Member</Button>}
            title="Add Member"
          >
            <ProfileForm submit={handleAdd} />
          </MemberDialog>
        </div>
      </CardHeader>
      <CardContent className="h-[70dvh] overflow-y-auto">
        {children}
      </CardContent>
    </Card>
  );
}
