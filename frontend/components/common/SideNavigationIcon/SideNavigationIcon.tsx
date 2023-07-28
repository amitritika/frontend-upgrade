import { ReactNode } from "react";

interface SideNavigationButtonProps {
    icon: ReactNode;
    onClickButton: (name: string) => void; 
    clicked: boolean;
    value: string
}

const SideNavigationIcon = ({ icon, onClickButton, clicked, value }: SideNavigationButtonProps) => {
    let classSelected = clicked ? "button-sideNavigation--icon__clicked" : "button-sideNavigation--icon"
    const handelClick = () => {
        onClickButton(value);
    }
    return (
        <button className = {classSelected} onClick={handelClick}>
            {icon}
        </button>
    )
}

export default SideNavigationIcon