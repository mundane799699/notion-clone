"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/error.png"
        alt="Error"
        width={300}
        height={300}
        className="dark:hidden"
      />
      <Image
        src="/error-dark.png"
        alt="Error"
        width={300}
        height={300}
        className="dark:block hidden"
      />
      <h2 className="text-xl font-medium">Something went wrong!</h2>
      <Button asChild>
        <Link href="/documents">Go back</Link>
      </Button>
    </div>
  );
};

export default Error;
