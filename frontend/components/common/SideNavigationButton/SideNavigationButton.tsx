import { ReactNode } from "react";

interface SideNavigationButtonProps {
    icon: ReactNode;
    text: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void; 
    clicked: boolean;
}

const SideNavigationButton = ({ icon, text, onClick, clicked }: SideNavigationButtonProps) => {
    let classSelected = clicked ? "button-sideNavigation__clicked" : "button-sideNavigation"
    return (
        <button className = {classSelected} onClick={onClick}>
            {text}
            {icon}
        </button>
    )
}

export default SideNavigationButton