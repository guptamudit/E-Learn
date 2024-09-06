import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";

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
