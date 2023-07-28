import { ReactNode } from "react";

interface SideNavigationButtonProps {
    icon: ReactNode;
    text: string;
    onClickButton: (name: string) => void; 
    clicked: boolean;
    value: string;
}

const SideNavigationButton = ({ icon, text, onClickButton, clicked, value }: SideNavigationButtonProps) => {
    let classSelected = clicked ? "button-sideNavigation__clicked" : "button-sideNavigation"
    const handelClick = () => {
        onClickButton(value);

    }
    return (
        <button className = {classSelected} onClick={handelClick}>
            {text}
            {icon}
        </button>
    )
}

export default SideNavigationButton