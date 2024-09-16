import React from "react";
import { PartnersProvider } from "./PartnersContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PartnersProvider>
      <div>{children}</div>
    </PartnersProvider>
  );
}
