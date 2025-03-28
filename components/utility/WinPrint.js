import { MdPictureAsPdf } from "react-icons/md";

const WinPrint = () => {
  const print = () => {
    window.print();
  };

  return (
    <button
      aria-label="Print Resume"
      className="rounded-lg border-2 border-green-500 px-10 p-2 font-bold  bg-white text-black"
      onClick={print}
    >
      Print
    </button>
  );
};

export default WinPrint;
