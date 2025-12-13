"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { FieldDescription } from "./ui/field";
import { signUpSchema } from "@/zod/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { register } from "@/actions/register";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const router = useRouter();

  const handleSubmit = async (data: FieldValues) => {
    // Handle signup logic here

    const loadingId = toast.loading("Creating account...");

    const result = await register({ ...data, role: "BUYER" });
    console.log(result);
    if (result?.success) {
      // Signup successful
      toast.success("Account created successfully! Please log in.", {
        id: loadingId,
      });
      router.push("/login");
    } else {
      // Signup failed
      if (result.error.code == "P2002") {
        toast.error("Email Already Exists", { id: loadingId });
      } else toast.error(result?.message || "Signup failed", { id: loadingId });
    }
  };

  const handleSeller = async (data: FieldValues) => {
    // Handle signup logic here

    const loadingId = toast.loading("Creating account...");

    const result = await register({ ...data, role: "SELLER" });
    console.log(result);
    if (result?.success) {
      // Signup successful
      toast.success("Account created successfully! Please log in.", {
        id: loadingId,
      });
      router.push("/login");
    } else {
      // Signup failed
      if (result.error.code == "P2002") {
        toast.error("Email Already Exists", { id: loadingId });
      } else toast.error(result?.message || "Signup failed", { id: loadingId });
    }
  };
  return (
    <Card {...props}>
      <Tabs defaultValue="customer" className="   ">
        <TabsList className="my-2 w-full max-w-[290px] sm:max-w-[332px] mx-[24px]">
          <TabsTrigger value="customer">Customer</TabsTrigger>
          <TabsTrigger value="seller">Seller</TabsTrigger>
        </TabsList>
        <CardHeader>
          {/* <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your information below to create your account
          </CardDescription> */}
        </CardHeader>
        <CardContent>
          {/* tab content customer */}
          <TabsContent value="customer">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Name</FormLabel>
                      <FormControl>
                        <Input placeholder="username" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <a
                          href="#"
                          className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                        >
                          Forgot your password?
                        </a>
                      </div>

                      <FormControl>
                        <Input
                          type="password"
                          placeholder="*********"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center flex-col gap-3">
                  <Button
                    className="w-full"
                    type="submit"
                    onClick={() => handleSubmit(form.getValues())}
                  >
                    Create Customer Account
                  </Button>
                  <Button className="w-full" variant="outline" type="button">
                    Sign up with Google
                  </Button>
                </div>

                <FieldDescription className="text-center">
                  Already have an account? <Link href="/login">Sign in</Link>
                </FieldDescription>
              </form>
            </Form>
          </TabsContent>
          {/* tab content seller */}
          <TabsContent value="seller">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSeller)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Name</FormLabel>
                      <FormControl>
                        <Input placeholder="username" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <a
                          href="#"
                          className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                        >
                          Forgot your password?
                        </a>
                      </div>

                      <FormControl>
                        <Input
                          type="password"
                          placeholder="*********"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center flex-col gap-3">
                  <Button
                    className="w-full"
                    type="submit"
                    onClick={() => handleSeller(form.getValues())}
                  >
                    Create Seller Account
                  </Button>
                  <Button className="w-full" variant="outline" type="button">
                    Sign up with Google
                  </Button>
                </div>

                <FieldDescription className="text-center">
                  Already have an account? <Link href="/login">Sign in</Link>
                </FieldDescription>
              </form>
            </Form>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
}
