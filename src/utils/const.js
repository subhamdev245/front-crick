
export const adminSidebarNav = [
    {
      name: "Dashboard",
      slug: "/admin/dashboard",
    },
    {
      name: "Products",
      slug: "/admin/products",
    },
    {
      name: "Orders",
      slug: "/admin/orders",
    },
    {
      name: "Users",
      slug: "/admin/users",
    },
    
    {
      name: "Players",
      slug: "/admin/player",
    },
    {
      name: "Logout",
      slug: "/logout",
    },
    
  ];



export const navbarNav = [
  {
    name: "Home",
    slug: "/",
  },
  
  {
    name: "Cart",
    slug: "/cart",
  },
  {
    name: "Account",
    slug: "/account",
  },
  {
    name: "Wishlist",
    slug: "/wishlist",
  },
  {
    name: "Login",
    slug: "/login",
  },
  {
    name: "Sports Trivia",
    slug: "/trivia",
  },
  {
    name: "Logout",
    slug: "/logout",
  },
];

export const formControlsForLogIn = [
  
  {
    name: "email",
    label: "Email",
    componentType: "input",
    type: "email",
    placeholder: "Enter your email",
    
  },
  {
    name: "password",
    label: "Password",
    componentType: "input",
    type: "password",
    placeholder: "Enter your password",
  },
];


export const defaultValues = {
  username: "",
  email: "",
  country: "",
  bio: "",
};
