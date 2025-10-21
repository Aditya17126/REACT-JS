export const menus = [
  { 
    id: 1,
    label: "Home",
    to: "/",
  },
  {
    id: 2,
    label: "Profile",
    to: "/profile",
    children: [
      {
        id:"2.1",
        label: "Details",
        to: "details",
        children: [
          {
            id:"2.1.1",
            label: "Location",
            to: "location",
            children : [
              {
                id:"2.1.1.1",
                 label : 'City',
                 to : "city"
              }
            ]
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Settings",
    to: "/settings",
    children: [
      { id : "3.1",
        label: "Account",
        to: "account",
      },
      {
        id :"3.2",
        label: "Security",
        to: "security",
        children: [
          {
            id: "3.2.1",
            label: "Login",
            to: "login",
          },
          {
            id:"3.2.2",
            label: "Register",
            to: "register",
            children : [
                { 
                  id:"3.2.2.1",
                    label : 'Random data',
                    to : ''
                }
            ]
          },
        ],
      },
    ],
  },
];

export default menus;