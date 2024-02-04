"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { useForm, Controller } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@@/validators/auth/signUp";
import { Button, Input, Card, CardBody, CardFooter } from "@nextui-org/react";

export const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
  });

  return (
    <Card
      className="dark:border dark:border-slate-500 dark:bg-gradient-to-br dark:from-[#020817] dark:via-[#000823] dark:to-[#000038] w-full h-1/2 backdrop-saturate-200"
      isBlurred
    >
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <Input
                  className="mt-10"
                  placeholder="Enter your name"
                  labelPlacement="outside"
                  label="Name"
                  variant="bordered"
                  {...field}
                  color={!!errors.name ? "danger" : "success"}
                  size="lg"
                  isInvalid={!!errors.name}
                  errorMessage={!!errors.name && "Please enter a valid email"}
                />
              </>
            )}
          />

          <CardFooter>
            <div className="flex gap-4 mt-7">
              <Button type="submit" color="success">
                Confirm
              </Button>
              <Button
                className={cn(
                  theme === "dark" && "text-secondary bg-slate-300"
                )}
                onClick={clearFields}
              >
                Clear
              </Button>
            </div>
          </CardFooter>
        </form>
      </CardBody>
    </Card>
  );
};
