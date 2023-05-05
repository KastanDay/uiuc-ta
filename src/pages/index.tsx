import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
import { SignIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";



import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();

  const hello = api.example.hello.useQuery({ text: "from tRPC" });


  return (
    <>
      <Head>
        <title>UIUC AI Teaching Assistant</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            UIUC <span className="text-[hsl(280,100%,70%)]">AI</span> Teaching Assistant
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://github.com/UIUC-Chatbot/ai-teaching-assistant-uiuc"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">See the code →</h3>
              <div className="text-lg">
                100% open source<br></br>100% free<br></br>100% awesome
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://kastanday.com/"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Bio →</h3>
              <div className="text-lg">
                Made at UIUC by Kastan Day.
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <div>
              {!user.isSignedIn && <SignInButton /> }
              {!!user.isSignedIn && <p>You&apos;re signed in!</p> }
              
            </div>
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
            {/* <AuthShowcase /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  // const { data: sessionData } = useSession();

  // const { data: secretMessage } = api.example.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: sessionData?.user !== undefined },
  // );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
    {/* //   <p className="text-center text-2xl text-white"> */}
    {/* //     {sessionData && <span>Logged in as {sessionData.user?.name}</span>} */}
    {/* //     {secretMessage && <span> - {secretMessage}</span>} */}
    {/* //   </p> */}
      <div>
        <SignInButton /> 
      </div> I
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />

      
    {/* //   <button */}
    {/* //     className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20" */}
    {/* //     onClick={sessionData ? () => void signOut() : () => void signIn()} */}
    {/* //   > */}
    {/* //     {sessionData ? "Sign out" : "Sign in"} */}
    {/* //   </button> */}
    </div>
  );
};
