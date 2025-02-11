import { useRouter } from "next/router";
import logo from "./Navbar/logo.png";
import Image from "next/image";
import Link from "next/link";
const Custom404 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <div className="flex-shrink-0 flex items-center">
        <Link href="/">
          <Image src={logo} alt="logo" className="h-10 w-40" />
        </Link>
      </div>
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mt-2">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Go to Home
        </button>
        <button
          onClick={() => router.push("/login2")}
          className="px-6 py-2 bg-orange-600 text-white rounded-md shadow-md hover:bg-orange-700 transition"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Custom404;
