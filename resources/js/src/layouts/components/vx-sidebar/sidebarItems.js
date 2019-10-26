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
    icon: "HomeIcon",
  },
  {
    url: "/user",
    name: "User",
    slug: "user",
    icon: "UserIcon",
    permission: 'browse-users'
  },
  {
    url: "/role",
    name: "Role",
    slug: "role",
    icon: "ShieldIcon",
    permission: 'browse-roles'
  },
    {
        url: "/package",
        name: "Package",
        slug: "package",
        icon: "ShieldIcon",
        permission: 'browse-packages'
    },
    {
        url: "/feature",
        name: "Feature",
        slug: "feature",
        icon: "ShieldIcon",
        permission: 'browse-features'
    },
    {
        url: "/club",
        name: "Club",
        slug: "club",
        icon: "ShieldIcon",
        // permission: 'browse-clubs'
    },
    {
        url: "/pending_club",
        name: "Pending Club",
        slug: "pending club",
        icon: "ShieldIcon",
        // permission: 'browse-clubs'
    }

]
