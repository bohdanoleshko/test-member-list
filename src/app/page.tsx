"use client";
import { MdEditSquare } from "react-icons/md";
import { MemberAvatar } from "~/components/atoms/Avatar";
import { MdOutlineDelete } from "react-icons/md";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { TableCard } from "~/components/molecules/table-card";
import { deleteMember, type TMemberData, updateMember } from "~/store/slice";
import { MemberDialog } from "~/components/atoms/dialog";
import { ProfileForm } from "~/components/molecules/form";

export default function HomePage() {
  const members = useAppSelector((state) => state.members.members);
  const dispatch = useAppDispatch();

  const handleDelete = (phone: string) => {
    dispatch(deleteMember({ phone }));
  };
  const handleUpdate = (member: TMemberData) => {
    dispatch(updateMember(member));
  };

  return (
    <TableCard>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Avatar</TableHead>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Last name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="w-10 text-center">Edit</TableHead>
            <TableHead className="w-10 text-center">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell className="font-medium">
                <MemberAvatar className="size-8" src={member?.avatar} />
              </TableCell>
              <TableCell className="font-medium">{member.name}</TableCell>
              <TableCell>{member.lastName}</TableCell>
              <TableCell>{member.phone}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell className="w-10 text-center">
                <MemberDialog
                  title="Edit Member"
                  trigger={
                    <Button size="icon">
                      <MdEditSquare className="size-5" />
                    </Button>
                  }
                >
                  <ProfileForm member={member} update={handleUpdate} />
                </MemberDialog>
              </TableCell>
              <TableCell className="w-10 text-center">
                <Button size="icon" onClick={() => handleDelete(member.phone)}>
                  <MdOutlineDelete className="size-5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableCard>
  );
}
