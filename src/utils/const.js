
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
    name: "username",
    label: "Username",
    componentType: "input",
    type: "text",
    placeholder: "Enter your username",
    validation: {
      required: "Username is required",
      minLength: {
        value: 3,
        message: "Username must be at least 3 characters",
      },
    },
  },
  {
    name: "email",
    label: "Email",
    componentType: "input",
    type: "email",
    placeholder: "Enter your email",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        message: "Please enter a valid email address",
      },
    },
  },
  {
    name: "country",
    label: "Country",
    componentType: "select",
    options: [
      { id: "us", label: "United States" },
      { id: "ca", label: "Canada" },
    ],
    validation: {
      required: "Country is required",
    },
  },
  {
    name: "bio",
    label: "Bio",
    componentType: "textarea",
    placeholder: "Tell us about yourself",
    validation: {
      required: "Bio is required",
      minLength: {
        value: 10,
        message: "Bio must be at least 10 characters",
      },
    },
  },
];

export const defaultValues = {
  username: "",
  email: "",
  country: "",
  bio: "",
};
