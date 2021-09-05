import React from "react";
import { createPopper } from "@popperjs/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Dropdown = ({ color, history }) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom",
            modifiers: [
                {
                  name: "offset",
                  enabled: true,
                  options: {
                    offset: [0, 5]
                  }
                }
              ]
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    // bg colors
    let bgColor;
    color === "white"
        ? (bgColor = "bg-blueGray-700")
        : (bgColor = "bg-" + color + "-500");
    return (
        <>
            <div className="mt-1 flex flex-wrap">
                <div className="w-full sm:w-6/12 md:w-4/12">
                    <div className="relative inline-flex align-middle w-full">
                        <div className="flex cursor-pointer items-center" ref={btnDropdownRef}
                            onClick={() => {
                                dropdownPopoverShow
                                    ? closeDropdownPopover()
                                    : openDropdownPopover();
                            }}>
                            <p
                                className={
                                    "text-black text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" +
                                    bgColor
                                }

                            >
                                Classes
                            </p>
                            <ExpandMoreIcon />
                        </div>

                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? "block " : "hidden ") +
                                (color === "white" ? "bg-white " : bgColor + " ") +
                                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <a
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black cursor-pointer hover:bg-black hover:text-white transition duration-300 ease-in-out"
                                }
                                onClick={(e) => {
                                    e.preventDefault()
                                    history.push("/advphysics")
                                }}    
                            >
                                Advanced Physics
                            </a>
                            <a
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black cursor-pointer hover:bg-black hover:text-white transition duration-300 ease-in-out"
                                }
                                onClick={(e) => {
                                    e.preventDefault()
                                    history.push("/apphysics1")
                                }}                            >
                                AP Physics 1
                            </a>
                            <a
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black cursor-pointer hover:bg-black hover:text-white transition duration-300 ease-in-out"
                                }
                                onClick={(e) => {
                                    e.preventDefault()
                                    history.push("/apphysics12")
                                }}
                            >
                                AP Physics 1 and 2
                            </a>
                            <a
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black cursor-pointer hover:bg-black hover:text-white transition duration-300 ease-in-out"
                                }
                                onClick={(e) => {
                                    e.preventDefault()
                                    history.push("/apphysicsc")
                                }}
                            >
                                AP Physics C
                            </a>
                            <a
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black cursor-pointer hover:bg-black hover:text-white transition duration-300 ease-in-out"
                                }
                                onClick={(e) => {
                                    e.preventDefault()
                                    history.push("/physicalscience")
                                }}
                            >
                                Physical Science
                            </a>
                            <a
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black cursor-pointer hover:bg-black hover:text-white transition duration-300 ease-in-out"
                                }
                                onClick={(e) => {
                                    e.preventDefault()
                                    history.push("/physics")
                                }}
                            >
                                Physics
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function DropdownRender({history}) {
    return (
        <>
            <Dropdown color="white" history={history}/>
        </>
    );
}