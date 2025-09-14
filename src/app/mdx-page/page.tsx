import Welcome from "@/app/markdown/welcome.mdx";
// import { Children } from "react";

type childrenProps = {
  children: React.ReactNode;
};

function CustomH1({ children }: childrenProps) {
  return <h1 style={{ color: "blue", fontSize: "100px" }}>{children}</h1>;
}

const overrideComponents = {
  h1: CustomH1,
};

export default function Page() {
  return <Welcome components={overrideComponents} />;
}
