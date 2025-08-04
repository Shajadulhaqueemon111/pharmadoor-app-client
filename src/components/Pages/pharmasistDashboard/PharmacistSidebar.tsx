import { type ReactNode, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiGrid,
  FiBox,
  FiList,
  FiLogOut,
  FiMenu,
} from "react-icons/fi";
import { useAuth } from "../privateRoute/AuthContext";
import { BlocksIcon, Clock, ListOrdered, Percent, Podcast } from "lucide-react";
import { FaAllergies } from "react-icons/fa";
import { MdWarningAmber } from "react-icons/md";

interface AdminSidebarProps {
  children?: ReactNode;
}

const PharmacistSidebar = ({ children }: AdminSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed z-50 inset-y-0 left-0 w-64 bg-white text-black transform lg:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto h-screen scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-8 text-indigo-700">
            Pharmacist Panel
          </h2>
          <nav className="flex flex-col gap-1">
            <SidebarLink to="/" icon={<FiHome />} label="Home" />
            <SidebarLink
              to="/pharmacist-dashboard"
              icon={<FiGrid />}
              label="Dashboard"
            />
            <SidebarLink
              to="/pharmacist-dashboard/all-medicine"
              icon={<FiBox />}
              label="All Medicine"
            />
            <SidebarLink
              to="/pharmacist-dashboard/expire-medicines"
              icon={<Clock className="w-5 h-5 text-red-500" />}
              label="Expire Medicines"
            />
            <SidebarLink
              to="/pharmacist-dashboard/pre-expire-medicine"
              icon={<MdWarningAmber className="w-5 h-5 text-yellow-500" />}
              label="Pre-Expire Medicines"
            />
            <SidebarLink
              to="/pharmacist-dashboard/create-medicine"
              icon={<FiList />}
              label="Create Medicines"
            />
            <SidebarLink
              to="/pharmacist-dashboard/orderd-medicine"
              icon={<ListOrdered />}
              label="Ordered Medicines"
            />
            <SidebarLink
              to="/pharmacist-dashboard/all-equipment"
              icon={<FaAllergies />}
              label="All Equipment"
            />
            <SidebarLink
              to="/pharmacist-dashboard/create-offer-medicine"
              icon={<Percent />}
              label="Create Offer Medicine"
            />
            <SidebarLink
              to="/pharmacist-dashboard/all-offer-medicine"
              icon={<FaAllergies />}
              label="All Offer Medicine"
            />
            <SidebarLink
              to="/pharmacist-dashboard/create-equipment"
              icon={<Podcast />}
              label="Create Equipment"
            />
            <SidebarLink
              to="/pharmacist-dashboard/create-blog"
              icon={<BlocksIcon />}
              label="Create Blog"
            />
            <SidebarLink
              icon={<FiLogOut />}
              label="Logout"
              onClick={handleLogout}
            />
          </nav>
        </div>
      </aside>

      {/* Toggle Button for Mobile */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-indigo-600 text-white shadow-md"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Page Content */}
      <main className="flex-1 lg:ml-64 p-6">{children}</main>
    </div>
  );
};

interface SidebarLinkProps {
  to?: string;
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

const SidebarLink = ({ to, icon, label, onClick }: SidebarLinkProps) => {
  const baseStyle =
    "flex items-center gap-3 px-4 py-3 rounded-md hover:bg-indigo-50 transition text-gray-700 hover:text-indigo-600";

  if (onClick) {
    return (
      <button onClick={onClick} className={baseStyle}>
        <span className="text-lg">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </button>
    );
  }

  return (
    <Link to={to || "#"} className={baseStyle}>
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};

export default PharmacistSidebar;
