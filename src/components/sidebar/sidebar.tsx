import LogoIcon from "../logo/logo";
import { assets } from "../../assets/assets";

interface SideBarProps {
  onClose: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="relative w-64 h-full p-5 ml-auto bg-white border-l border-gray-300">
        <div className="flex flex-row items-center justify-between">
          <LogoIcon asset={assets.logo} />
          <button onClick={onClose} className="text-gray-600 text-xl">
            ✕
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default SideBar;
