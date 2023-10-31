import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="w-full h-screen bg-blue-200">
        <Image
          src={"/UBER-BRANDING.jpg"}
          alt="asd"
          width={900}
          height={900}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="absolute top-20 right-0">
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-slate-500 hover:bg-yellow-500 text-sm normal-case",
            },
          }}
        />
      </div>
    </>
  );
}
