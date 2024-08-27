import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div className="w-dvw h-dvh grid place-content-center">
      <SignUp
        appearance={{
          variables: {
            colorPrimary: "hsl(246.24 100% 66.08%)",
          },
        }}
        signInUrl="/auth/"
      />
    </div>
  );
}
