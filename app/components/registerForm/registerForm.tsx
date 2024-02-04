"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@@/validators/auth/signUp";

import { Button, Input, Card, CardBody, CardFooter } from "@nextui-org/react";
import { EyeSlashFilledIcon, EyeFilledIcon } from "@@/components/widgets";

type FormInputs = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
  });

  function clearFields() {
    Object.keys(registerSchema).forEach((key) => {
      reset({
        [key]: "",
      });
    });
  }

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
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                className="mt-10"
                placeholder="Enter your email"
                labelPlacement="outside"
                label="Email"
                type="email"
                variant="bordered"
                size="lg"
                isInvalid={!!errors.email}
                color={!!errors.email ? "danger" : "success"}
                errorMessage={!!errors.email && "Please enter a valid email"}
                {...field}
              />
            )}
          />
          <Controller
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                className="mt-10"
                placeholder="Enter your username"
                labelPlacement="outside"
                label="Username"
                variant="bordered"
                size="lg"
                isInvalid={!!errors.username}
                color={!!errors.username ? "danger" : "success"}
                errorMessage={
                  !!errors.username && "Please enter a valid username"
                }
                startContent={
                  <div className="flex items-center mr-2 pointer-events-none">
                    <span className="text-default-400 text-small">
                      linka.ai/
                    </span>
                  </div>
                }
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                variant="bordered"
                placeholder="Enter your password"
                labelPlacement="outside"
                label="Password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl pointer-events-none text-default-400" />
                    ) : (
                      <EyeFilledIcon className="text-2xl pointer-events-none text-default-400" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-xs mt-10"
                size="lg"
                isInvalid={!!errors.password}
                color={!!errors.password ? "danger" : "success"}
                errorMessage={
                  !!errors.password && "Please enter a valid password"
                }
                {...field}
              />
            )}
          />

          <CardFooter>
            <div className="flex gap-4 mt-7">
              <Button type="submit" color="success">
                Confirm
              </Button>
              <Button
                className="dark:text-primary dark:bg-slate-300"
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
