import { ReactNode } from "react";

interface SideNavigationButtonProps {
    icon: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void; 
    clicked: boolean;
}

const SideNavigationIcon = ({ icon, onClick, clicked }: SideNavigationButtonProps) => {
    let classSelected = clicked ? "button-sideNavigation--icon__clicked" : "button-sideNavigation--icon"
    return (
        <button className = {classSelected} onClick={onClick}>
            {icon}
        </button>
    )
}

export default SideNavigationIcon