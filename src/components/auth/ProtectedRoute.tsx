// components/auth/ProtectedRoute.tsx
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

export default function ProtectedRoute({ children }) {
  const isClerkEnabled = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!isClerkEnabled) {
    return <>{children}</>;
  }

  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/" />
      </SignedOut>
    </>
  );
}
