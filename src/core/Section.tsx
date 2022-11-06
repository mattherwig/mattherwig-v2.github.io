import React, { PropsWithChildren } from "react";

export const Section: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <section>
      {children}
    </section>
  );
};

export const SectionHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};