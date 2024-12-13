import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Clubs() {
  // Redirect to https://0xa-at.github.io/jku.community/
  // (temporary workaround til the domain is setup)
  //
  useEffect(() => {
    window.location.replace("https://0xa-at.github.io/jku.community/");
  });

  return <h1>Redirecting...</h1>;
}
