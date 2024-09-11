import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  File,
  FileText,
  Image,
  Laptop,
  Loader2,
  LucideIcon,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X
} from 'lucide-react';

import GoogleIcon from './GoogleIcon';

import {
  FaHome,
  FaBuilding,
  FaUser,
  FaFileInvoiceDollar,
  FaMoneyBill,
  FaConciergeBell,
  FaLifeRing,
  FaUserCircle,
  FaThList,
  FaUserTie,
  FaSignInAlt
} from 'react-icons/fa';

export type Icon = LucideIcon;

export const Icons = {
  dashboard: FaHome,
  building: FaBuilding,
  roles: FaUser,
  expenses: FaFileInvoiceDollar,
  billing: FaMoneyBill,
  services: FaConciergeBell,
  help: FaLifeRing,
  profile: FaUserCircle,
  kanban: FaThList,
  employee: FaUserTie,
  login: FaSignInAlt,
  logo: Command,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  google: GoogleIcon,
  twitter: Twitter,
  check: Check
};
