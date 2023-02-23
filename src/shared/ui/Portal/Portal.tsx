import React, {ReactNode} from 'react';
import cls from './Portal.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {createPortal} from "react-dom";

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = ({children, element = document.body}: PortalProps) => {
    return createPortal(children, element)
};