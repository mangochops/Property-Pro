import { NavItem } from '@/types';

export type User = {
  id: number;
  name: string;
  role: string;
  contact: string;
  salary: string;
};
export const users: User[] = [
  {
    id: 1,
    name: 'Candice Schiner',
    role: 'Caretaker',
    contact: '0715116415',
    salary: 'Ksh.15,000'
  },
  {
    id: 2,
    name: 'Kiki Palmer',
    role: 'Watchman',
    contact: '0715116415',
    salary: 'Ksh.12,000'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'Cleaner',
    contact: '0715116415',
    salary: 'Ksh.12,000'
  }
];
export type Expenses = {
  id: number;
  expense: string;
  amount: string;
  description: string;
  verified: boolean;
  status: string;
};
export const expenses: Expenses[] = [
  {
    id: 1,
    expense: 'Paint',
    amount: 'Ksh. 5,000',
    description: 'Repaint Rm.12',
    verified: false,
    status: 'Urgent'
  },
  {
    id: 2,
    expense: 'Sockets',
    amount: 'Ksh. 1,000',
    description: 'Replace  Rm.8 Bedroom',
    verified: false,
    status: 'Urgent'
  },
  {
    id: 3,
    expense: 'Taps',
    amount: 'Ksh. 800',
    description: 'Replace rooftop taps',
    verified: false,
    status: 'Urgent'
  },
  {
    id: 4,
    expense: 'Solae Headlight',
    amount: 'Ksh. 10,000',
    description: 'Install solar security headlights',
    verified: false,
    status: 'Not Urgent'
  }
];

export type Tenants = {
  id: number;
  unitnumber: string;
  tenant: string;
  unittype: string;
  contact: string;
  rent: number;
  accnumber: string;
  date: string;
  balance: number;
};

export const tenants: Tenants[] = [
  {
    id: 1,
    unitnumber: 'A1',
    tenant: 'John Doe',
    unittype: 'Bedsitter',
    contact: '0112396469',
    rent: 8000,
    accnumber: 'A1',
    date: '5',
    balance: 0
  },
  {
    id: 2,
    unitnumber: 'A2',
    tenant: 'Jane Doe',
    unittype: '1 Bedroom',
    contact: '0112396469',
    rent: 10000,
    accnumber: 'A2',
    date: '5',
    balance: 0
  },
  {
    id: 3,
    unitnumber: 'A3',
    tenant: 'Jack Doe',
    unittype: '1 Bedroom',
    contact: '0112396469',
    rent: 10000,
    accnumber: 'A3',
    date: '5',
    balance: 0
  },
  {
    id: 4,
    unitnumber: 'A4',
    tenant: 'Mack Doe',
    unittype: '2 Bedroom',
    contact: '0112396469',
    rent: 12000,
    accnumber: 'A4',
    date: '5',
    balance: 0
  },
  {
    id: 5,
    unitnumber: 'A5',
    tenant: 'Eric Newman',
    unittype: '3 Bedroom',
    contact: '0112396469',
    rent: 15000,
    accnumber: 'A5',
    date: '5',
    balance: 0
  },
  {
    id: 6,
    unitnumber: 'A6',
    tenant: 'Kevin Hart',
    unittype: '2 Bedroom',
    contact: '0112396469',
    rent: 12000,
    accnumber: 'A6',
    date: '5',
    balance: 0
  },
  {
    id: 7,
    unitnumber: 'A7',
    tenant: 'Chris Mack',
    unittype: '2 Bedroom',
    contact: '0112396469',
    rent: 12000,
    accnumber: 'A7',
    date: '5',
    balance: 0
  }
];
export type Billing = {
  id: number;
  name: string;
  amount: string;
  account: string;
  verified: boolean;
  status: string;
};
export const billing: Billing[] = [
  {
    id: 1,
    name: 'Salaries',
    amount: 'Kshs. 18,000',
    account: 'AERW4TR5676576R6F765JHTGG765F55',
    verified: false,
    status: 'Due'
  },
  {
    id: 2,
    name: 'Water',
    amount: 'Kshs. 10,000',
    account: 'AERW4TR5676576R6F765JHTGG765F55',
    verified: false,
    status: 'Due'
  },
  {
    id: 3,
    name: 'Electricity',
    amount: 'Kshs. 3,000',
    account: 'AERW4TR5676576R6F765JHTGG765F55',
    verified: false,
    status: 'Due'
  },
  {
    id: 4,
    name: 'Wifi',
    amount: 'Kshs. 18,000',
    account: 'AERW4TR5676576R6F765JHTGG765F55',
    verified: false,
    status: 'Due'
  },
  {
    id: 5,
    name: 'Garbage',
    amount: 'Kshs. 2,000',
    account: 'AERW4TR5676576R6F765JHTGG765F55',
    verified: false,
    status: 'Due'
  }
];
export type Tenan = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'Property Management',
    href: '/dashboard/propertyManagement',
    icon: 'building',
    label: 'Property Management'
  },
  {
    title: 'Tenants',
    href: '/dashboard/tenant',
    icon: 'employee',
    label: 'Tenants'
  },
  {
    title: 'Workers',
    href: '/dashboard/user',
    icon: 'roles',
    label: 'Roles'
  },
  {
    title: 'Expenses',
    href: '/dashboard/expenses',
    icon: 'expenses',
    label: 'Expenses'
  },
  {
    title: 'Billing',
    href: '/dashboard/billing',
    icon: 'billing',
    label: 'Billing'
  },
  {
    title: 'Services',
    href: '/dashboard/services',
    icon: 'services',
    label: 'Services'
  },
  {
    title: 'Help',
    href: '/dashboard/help',
    icon: 'help',
    label: 'Help'
  },

  {
    title: 'Log Out',
    href: '/',
    icon: 'login',
    label: 'Login'
  }
];
