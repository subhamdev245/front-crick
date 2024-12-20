
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
    name: "Product",
    slug: "/products",
  },
  {
    name: "Login",
    slug: "/login",
  },
  {
    name: "Register",
    slug: "/register",
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
export const formControlsForRegister = [
  {
    name: "name",
    label: "name",
    componentType: "input",
    type: "text",
    placeholder: "Enter your name",
  },
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

export const formControlsForAddProduct = [
  {
    name: "category",
    label: "Category",
    componentType: "select",
    options: [
      { value: "", label: "Select a category" },
      { value: "electronics", label: "Electronics" },
      { value: "sports", label: "Sports" },
      { value: "fashion", label: "Fashion" },
      { value: "home", label: "Home & Living" },
    ],
    placeholder: "Select product category",
  },
  {
    name: "name",
    label: "Product Name",
    componentType: "input",
    type: "text",
    placeholder: "Enter product name",
  },
  {
    name: "description",
    label: "Product Description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    name: "price",
    label: "Price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    name: "stock",
    label: "Stock Quantity",
    componentType: "input",
    type: "number",
    placeholder: "Enter stock quantity",
  },
  {
    name: "mainImage",
    label: "Main Image",
    componentType: "input",
    type: "file",
    placeholder: "Upload the main image",
  },
  {
    name: "subImages",
    label: "Sub Images",
    componentType: "input",
    type: "file",
    placeholder: "Upload sub images",
    multiple: true, 
  },
];



export const defaultValues = {
  name: "",
  email: "",
  country: "",
  bio: "",
};
