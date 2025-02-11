import MobileBuilder from "./mobilebuilder";
import WebBuilder from "./webbuilder";
export default function Builder() {
  return (
    <>
      <div className="block md:hidden">
        <MobileBuilder />
      </div>
      <div className="hidden md:block w-screen">
        <WebBuilder />
      </div>
    </>
  );
}
