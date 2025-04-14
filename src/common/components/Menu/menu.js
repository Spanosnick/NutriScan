import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import './Header.css'
import {AlignJustify, X} from "lucide-react";

/**
 * Menu component renders the navigation menu for the application.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.menuItems - An array of menu items to be displayed.
 * @param {number} props.mobileView - The width threshold for mobile view (must check the css file to be sure).
 * @returns {JSX.Element} The rendered Menu component.
 */
export function Menu({menuItems,mobileView}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(()=>{
        const handleResize = () => {
            if (window.innerWidth > mobileView) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[isOpen]);

    return (
        <div className='nutriNav'>
            <div className='firstPart'>
                <a className='nutriScanTitle' href='#home'>Nutri<span>Scan</span></a>
            </div>

                {!isOpen && <div className='secondPart'>
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.link}
                            className={item.className}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>}
                <AlignJustify className='burgerIcon' color='white' onClick={toggleMenu} size={28}/>
                {isOpen && (<div>
                    <div className={`mobileMenu ${isOpen ? "slide-in" : "slide-out"}`}>
                        <X className='burgerIcon ' onClick={toggleMenu} size={28}/>
                        {menuItems.map((item, index) => (
                            !item.isButton ? (
                            <NavLink
                                key={index}
                                to={item.link}
                                className={item.className+' mobileMenuItem'}
                            >
                                {item.name}
                            </NavLink>
                        ):
                            (
                                <NavLink
                                    key={index}
                                    to={item.link}
                                    className={'mobileButton'}
                                >
                                    {item.name}
                                </NavLink>
                            )
                        ))}

                    </div>
                </div>)}


        </div>
    );
}
