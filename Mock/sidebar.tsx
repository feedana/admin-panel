  import { IAllLinks } from "@/Types/sidebar";
  import { Package } from "lucide-react";
  

  export const links: IAllLinks[] = [
    { 
      id: 0,
      title: "Main", 
      links: [
        {id: 0, icon: <Package size={20}/>, title: "packages", to: "/packages"},
        {id: 1, icon: <Package size={20}/>, title: "subscriptions", to: "/subscriptions"},
    ]},
    { 
      id: 1,
      title: "Support Desk", 
      links: [
        {id: 0, icon: <Package size={20}/>, title: "All tickets", to: "/all-tickets"},
        {id: 1, icon: <Package size={20}/>, title: "My tasks", to: "/my-tasks"},
    ]},
    { 
       id: 2,
       title: "Analytic Report", 
       links: [
        {id: 0, icon: <Package size={20}/>, title: "Support report", to: "/support-report"},
        {id: 1, icon: <Package size={20}/>, title: "Sales report", to: "/sales-report"},
        {id: 2, icon: <Package size={20}/>, title: "Tenant report", to: "/tenant-report"},
        
    ]},
    ];
