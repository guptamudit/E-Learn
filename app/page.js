import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      Hello
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

//qwmn#1090
//mudit@gmail.com
