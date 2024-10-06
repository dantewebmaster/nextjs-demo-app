import { BackButton } from "@/components/back-button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackButton />
      <main className="max-w-3xl mx-auto">{children}</main>
    </>
  );
}
