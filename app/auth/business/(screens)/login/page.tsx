import dynamic from "next/dynamic";

const Login = dynamic(() => import("../_components/login"), {ssr: false});

export default function Page() {
  return (
    <div className="h-full w-full max-sm:flex max-sm:items-center max-sm:justify-center">
      <Login />
    </div>
  );
}
