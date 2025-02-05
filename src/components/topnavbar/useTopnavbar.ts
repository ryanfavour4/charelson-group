import { useEffect, useRef, useState } from "react";

export type menu_type = {
    title: string;
    path?: string;
    subPath?: string;
    external?: boolean;
    subMenus?: {
        title: string;
        path: string;
        external?: boolean;
    }[];
};

export const menus: menu_type[] = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About us",
        path: "#about",
    },
    {
        title: "Services",
        path: "#what-we-do",
       
    },
    {
        title: "Offices",
        path: "#offices",
       
    },
    {
        title: "Testimonials",
        path: "#support-project",
    },
   
];

export default function useTopnavbar() {
    const navListRef = useRef<HTMLUListElement>(null);
    const [subMenuClicked, setSubMenuClicked] = useState<string>("");
    const [navOpen, setNavOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_activeMenu, setActiveMenu] = useState<menu_type | null>(null);
    const pathName = "#";

    const getActiveUrl = (path: string, subPath?: string): boolean => {
        // Check if the main path matches
        if (pathName === path) {
            return true;
        }
        // Check if the subPath exists and matches
        if (subPath && pathName.startsWith(subPath)) {
            return true;
        }
        return false;
    };

    useEffect(() => {
        const activeMenuObj = menus.find(
            (menu) =>
                getActiveUrl(menu.path || "", menu.subPath) ||
                (menu.subMenus &&
                    menu.subMenus.some((subMenu) => getActiveUrl(subMenu.path)))
        );
        setActiveMenu(activeMenuObj || null);
    }, [pathName]);

    useEffect(() => {
        const navList = navListRef.current;

        if (navList) {
            const handleClick = (e: MouseEvent) => {
                // Check if the target is a link tag and then toggle the nav open and close
                if (e.target instanceof HTMLElement) {
                    // This line checks if the target is an <a> tag with a non-empty href attribute and toggles the nav state
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    e.target.tagName === "A" &&
                        e.target.attributes.getNamedItem("href")?.value !==
                            "" &&
                        setNavOpen((p) => !p);
                }
            };

            navList.addEventListener("click", (e) => handleClick(e));

            return () => {
                navList.removeEventListener("click", handleClick);
            };
        }
    }, []);

    return {
        setNavOpen,
        getActiveUrl,
        setSubMenuClicked,
        subMenuClicked,
        navOpen,
        pathName,
        navListRef,
    };
}

