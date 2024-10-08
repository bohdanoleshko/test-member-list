"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { type TMemberData } from "~/store/slice";
import { formSchema } from "~/zod/form/schema";

const opt = [
  { name: "name", label: "Name" },
  { name: "lastName", label: "Last Name" },
  { name: "phone", label: "Phone" },
  { name: "email", label: "Email" },
  { name: "avatar", label: "Avatar" },
] as const;

export function ProfileForm({
  member,
  submit,
  update,
}: {
  member?: TMemberData;
  submit?: (member: Omit<TMemberData, "id">) => void;
  update?: (member: TMemberData) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: member?.name,
      lastName: member?.lastName,
      phone: member?.phone,
      email: member?.email,
      avatar: member?.avatar,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (submit) {
      submit(values);
    }
    if (update && member?.id) {
      update({ id: member.id, ...values });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {opt.map((o) => (
          <FormField
            key={o.name}
            control={form.control}
            name={o.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{o.label}</FormLabel>
                <FormControl>
                  <Input placeholder={o.name} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
