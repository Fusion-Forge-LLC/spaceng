import dynamic from "next/dynamic";

const Login = dynamic(() => import("../_components/login"), {ssr: false});

export default function Page() {
  return <Login />;
}
