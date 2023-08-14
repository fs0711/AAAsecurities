import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        title: "Dashboard",
        pathname: "/home",
        // subMenu: [
        //   {
        //     icon: "",
           
        //     title: "Overview 1",
        //   },
          // {
          //   icon: "",
          //   pathname: "/dashboard-overview-2",
          //   title: "Overview 2",
          // },
          // {
          //   icon: "",
          //   pathname: "/dashboard-overview-3",
          //   title: "Overview 3",
          // },
          // {
          //   icon: "",
          //   pathname: "/dashboard-overview-4",
          //   title: "Overview 4",
          // },
        // ],
      },
      // {
      //   icon: "Box",
      //   title: "Menu Layout",
      //   subMenu: [
      //     {
      //       icon: "",
      //       pathname: "/",
      //       title: "Side Menu",
      //       ignore: true,
      //     },
      //     {
      //       icon: "",
      //       pathname: "/simple-menu/dashboard-overview-1",
      //       title: "Simple Menu",
      //       ignore: true,
      //     },
      //     {
      //       icon: "",
      //       pathname: "/top-menu/dashboard-overview-1",
      //       title: "Top Menu",
      //       ignore: true,
      //     },
      //   ],
      // },
      // {
      //   icon: "ShoppingBag",
      //   title: "E-Commerce",
      //   subMenu: [
      //     {
      //       icon: "",
      //       pathname: "/categories",
      //       title: "Categories",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/add-product",
      //       title: "Add Product",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/products",
      //       title: "Products",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/product-list",
      //           title: "Product List",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/product-grid",
      //           title: "Product Grid",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       pathname: "/transactions",
      //       title: "Transactions",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/transaction-list",
      //           title: "Transaction List",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/transaction-detail",
      //           title: "Transaction Detail",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       pathname: "/sellers",
      //       title: "Sellers",
      //       subMenu: [
      //         {
      //           icon: "",
      //           pathname: "/seller-list",
      //           title: "Seller List",
      //         },
      //         {
      //           icon: "",
      //           pathname: "/seller-detail",
      //           title: "Seller Detail",
      //         },
      //       ],
      //     },
      //     {
      //       icon: "",
      //       pathname: "/reviews",
      //       title: "Reviews",
      //     },
      //   ],
      // },
      // {
      //   icon: "Inbox",
      //   pathname: "/inbox",
      //   title: "Inbox",
      // },
      // {
      //   icon: "HardDrive",
      //   pathname: "/file-manager",
      //   title: "File Manager",
      // },
      // {
      //   icon: "CreditCard",
      //   pathname: "/point-of-sale",
      //   title: "Point of Sale",
      // },
      // {
      //   icon: "MessageSquare",
      //   pathname: "/chat",
      //   title: "Chat",
      // },
      // {
      //   icon: "FileText",
      //   pathname: "/post",
      //   title: "Post",
      // },
      // {
      //   icon: "Calendar",
      //   pathname: "/calendar",
      //   title: "Calendar",
      // },
      // "devider",
      // {
      //   icon: "Edit",
      //   title: "Crud",
      //   subMenu: [
      //     {
      //       icon: "",
      //       pathname: "/crud-data-list",
      //       title: "Data List",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/crud-form",
      //       title: "Form",
      //     },
      //   ],
      // },
      {
        icon: "Users",
        title: "Users",
        pathname: "/users",
        // subMenu: [
        //   {
        //     icon: "",
            
        //     title: "Layout 1",
        //   },
        //   {
        //     icon: "",
        //     pathname: "/users-layout-2",
        //     title: "Layout 2",
        //   },
        //   {
        //     icon: "",
        //     pathname: "/users-layout-3",
        //     title: "Layout 3",
        //   },
        // ],
      },
      {
        icon: "Users",
        title: "Client Management",
        subMenu: [
              {
                icon: "",
                pathname: "/clients",
                title: "Clients",
              },
              {
                icon: "",
                pathname: "/sites",
                title: "Sites",
              },
        ]
      },
      {
        icon: "Users",
        title: "Employee Management",
        subMenu: [
              {
                icon: "Trello",
                pathname: "/employees",
                title: "Employees",
              },
              {
                icon: "",
                pathname: "/view-schedule",
                title: "Schedule",
              },
              {
                icon: "",
                pathname: "/attendance",
                title: "Attendance",
              },
        ]
      },
      // {
      //   icon: "Trello",
      //   title: "Profile",
      //   subMenu: [
      //     {
      //       icon: "",
      //       pathname: "/profile-overview-1",
      //       title: "Overview 1",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/profile-overview-2",
      //       title: "Overview 2",
      //     },
      //     {
      //       icon: "",
      //       pathname: "/profile-overview-3",
      //       title: "Overview 3",
      //     },
      //   ],
      // },
    
      // "devider",
  //     {
  //       icon: "Inbox",
  //       title: "Components",
  //       subMenu: [
  //         {
  //           icon: "",
  //           title: "Table",
  //           subMenu: [
  //             {
  //               icon: "",
  //               pathname: "/regular-table",
  //               title: "Regular Table",
  //             },
  //             {
  //               icon: "",
  //               pathname: "/tabulator",
  //               title: "Tabulator",
  //             },
  //           ],
  //         },
  //         {
  //           icon: "",
  //           title: "Overlay",
  //           subMenu: [
  //             {
  //               icon: "",
  //               pathname: "/modal",
  //               title: "Modal",
  //             },
  //             {
  //               icon: "",
  //               pathname: "/slide-over",
  //               title: "Slide Over",
  //             },
  //             {
  //               icon: "",
  //               pathname: "/notification",
  //               title: "Notification",
  //             },
  //           ],
  //         },
  //         {
  //           icon: "",
  //           pathname: "/tab",
  //           title: "Tab",
  //         },
  //         {
  //           icon: "",
  //           pathname: "/accordion",
  //           title: "Accordion",
  //         },
  //         {
  //           icon: "",
  //           pathname: "/button",
  //           title: "Button",
  //         },
  //         {
  //           icon: "",
  //           pathname: "/alert",
  //           title: "Alert",
  //         },
  //         {
  //           icon: "",
  //           pathname: "/progress-bar",
  //           title: "Progress Bar",
  //         },
  //         {
  //           icon: "",
  //           pathname: "/tooltip",
  //           title: "Tooltip",
  //         },
  //         {
  //           icon: "",
  //           pathname: "/dropdown",
  //           title: "Dropdown",
  //         },
  //         {
  //           icon: "",
  //           pathname: "/typography",
  //           title: "Typography",
  //         },
  //         {
  //           icon: "",
  //           pathname: "/icon",
  //           title: "Icon",
  //         },
  //         {
  //           icon: "",
  //           pathname: "/loading-icon",
  //           title: "Loading Icon",
  //         },
  //       ],
  //     },
  
  //     {
  //       icon: "HardDrive",
  //       title: "Widgets",
  //       subMenu: [
  //         {
  //           icon: "",
  //           pathname: "/chart",
  //           title: "Chart",
  //         },
  //         {
  //           icon: "",
  //           pathname: "/slider",
  //           title: "Slider",
  //         },
  //         {
  //           icon: "",
  //           pathname: "/image-zoom",
  //           title: "Image Zoom",
  //         },
  //       ],
  //     },
    ],
  },
});
export { sideMenu};
