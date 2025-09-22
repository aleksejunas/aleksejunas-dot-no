import Welcome from "@/markdown/welcome.mdx";

type childrenProps = {
  children: React.ReactNode;
};

function CustomH1({ children }: childrenProps) {
  return (
    <h1
      style={{
        color: "green",
        fontSize: "100px",
        textAlign: "center",
      }}
    >
      {children}
    </h1>
  );
}

function CustomH2({ children }: childrenProps) {
  return (
    <h2 style={{ color: "red", fontSize: "80px", textAlign: "center" }}>
      {children}
    </h2>
  );
}

// function CustomP({ children }: childrenProps) {
//   return (
//     <p style={{ fontSize: "24px", color: "blue", textAlign: "center" }}>
//       {children}
//     </p>
//   );
// }

const overrideComponents = {
  h1: CustomH1,
  h2: CustomH2,
  // p: CustomP,
};

export default function Page() {
  return <Welcome components={overrideComponents} />;
}
