"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Por favor ingrese un nombre.",
    })
    .min(1, "Por favor ingrese un nombre.")
    .trim(),
  email: z
    .string({
      required_error: "Por favor ingrese un email.",
    })
    .email("Por favor ingrese un email válido.")
    .min(1, "Por favor ingrese un email.")
    .trim(),
  message: z
    .string({ required_error: "Por favor ingrese su consulta." })
    .min(1, "Por favor ingrese un mensaje.")
    .trim(),
  // honeypot field to avoid spam
  favoriteColor: z.string().optional(),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      favoriteColor: "",
    },
  });

  function onSubmit({
    name,
    email,
    message,
    favoriteColor,
  }: z.infer<typeof formSchema>) {
    // `favoriteColor` is a hidden field, if it has a value it means a bot filled it in
    if (favoriteColor) return;

    console.log({ name, email, message });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Juan Pérez" {...field} />
              </FormControl>
              <FormDescription>
                Tu nombre, para que podamos conocerte.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="juanperez@gmail.com" {...field} />
              </FormControl>
              <FormDescription>
                Tu email, para que podamos responder tu consulta.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tu mensaje</FormLabel>
              <FormControl>
                <Textarea rows={6} {...field} />
              </FormControl>
              <FormDescription>
                Tu mensaje o consulta, lo que quieras comunicarnos.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="favoriteColor"
          render={({ field }) => (
            <FormItem className="sr-only">
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
}
