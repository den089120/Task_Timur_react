import React from 'react';
import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>{t('Главная страница')}</AppLink>

                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>{t('О сайте')}</AppLink>
            </div>

        </div>
    );
};