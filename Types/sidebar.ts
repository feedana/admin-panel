import { JSX } from "react";

export interface IAllLinks{
    id: number ;
    title: string;
    links: ILinks[]
  }

export interface ILinks{
    id: number;
    icon: JSX.Element;
    title: string;
    to: string;
  }

