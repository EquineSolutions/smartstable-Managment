/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [


  {
        url: "/",
        name: "Home",
        slug: "home",
        icon: "HomeIcon"
  },
    {
        header: "Livery",
    },
    {
        url: "/coming-soon",
        name: "Stables",
        icon: "TabletIcon",
        tag: "soon",
        tagColor: "warning",
    },
    {
        url: "/coming-soon",
        name: "Booking",
        icon: "BookIcon",
        tag: "soon",
        tagColor: "warning",
        submenu: [
            {
                url: '/coming-soon',
                name: "Booking",
            },
            {
                url: '/coming-soon',
                name: "Reservations",
                submenu: [
                    {
                        url: '/coming-soon',
                        name: "Upcoming",
                    },
                    {
                        url: '/coming-soon',
                        name: "Pending",
                    },
                ]
            },
            {
                url: '/coming-soon',
                name: "Availabilities",
            },
        ]
    },
    {
        header: "Riding School",
    },
    {
        url: "/coming-soon",
        name: "Page 1",
        icon: "FileIcon",
    },
    {
        url: "/coming-soon",
        name: "Page 2",
        icon: "FileIcon",
    },
    {
        url: "/coming-soon",
        name: "Page 3",
        icon: "FileIcon",
    },
    {
        header: "Veterinary",
    },
    {
        url: "/coming-soon",
        name: "Page 1",
        icon: "FileIcon",
    },
    {
        url: "/coming-soon",
        name: "Page 2",
        icon: "FileIcon",
    },
    {
        url: "/coming-soon",
        name: "Page 3",
        icon: "FileIcon",
    },
    {
        header: "Feriare",
    },
    {
        url: "/coming-soon",
        name: "Page 1",
        icon: "FileIcon",
    },
    {
        url: "/coming-soon",
        name: "Page 2",
        icon: "FileIcon",
    },
    {
        url: "/coming-soon",
        name: "Page 3",
        icon: "FileIcon",
    },
    {
        header: "Finance",
    },
    {
        url: "/coming-soon",
        name: "Page 1",
        icon: "FileIcon",
    },
    {
        url: "/coming-soon",
        name: "Page 2",
        icon: "FileIcon",
    },
    {
        url: "/coming-soon",
        name: "Page 3",
        icon: "FileIcon",
    }
]
