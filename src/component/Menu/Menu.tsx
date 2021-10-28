// Component generated with util/vox-create-component.js
import React from "react";
import * as R from "ramda";
import {MenuWrapper, MenuItemWrapper, SubMenuItemWrapper} from "./Menu.styled";
import {MenuProps} from "./Menu.types";
import {MENU} from "./Menu.mock";
import {UIICon, UIText} from "./../../ui";
import {motion} from "framer-motion";
import uniqid from "uniqid";
import Logo from "./../../assets/images/img-logo-gndi.svg";

export const Menu: React.VFC<MenuProps> = ({menu = MENU, ...args}) => {
	// Context Here
	// States Here
	const [currentMenu, setCurrentMenu] = React.useState<number>();
	const [subMenu, setSubMenu] = React.useState<number>();
	// Effects Here
	// Handlers Here
	const navigate = (route: string) => console.log("Navigate: ", route);
	const toggleMenu = (route: string, i: number) => {
		setCurrentMenu(i);
		if (route === "down") {
			const defaultSubLink = menu[i].links;
			setSubMenu(0);
			navigate(defaultSubLink ? defaultSubLink[0].route : "/");
		} else {
			navigate(route);
		}
	};
	return (
		<MenuWrapper {...args}>
			<div className="logo">
				<img src={Logo} alt="" width={134} height={50} />
			</div>
			{menu.map(({label, route, icon, links = []}, i) => {
				return (
					<MenuItemWrapper
						key={uniqid()}
						selected={i === currentMenu}
						onClick={() => toggleMenu(route, i)}>
						<div className="item">
							{icon && (
								<div className="icon">
									<UIICon name={icon} color="SECONDARY" />
								</div>
							)}
							<UIText color="WHITE">{label}</UIText>
						</div>
						{!R.isEmpty(links) && currentMenu === i && (
							<motion.div className="my-2">
								{links.map(({label: linkLabel, route: linkRoute}, l) => (
									<SubMenuItemWrapper
										key={uniqid()}
										onClick={() => {
											navigate(linkRoute);
											setSubMenu(l);
										}}
										selected={l === subMenu}>
										<UIText preset="BODY_02" color="WHITE">
											{linkLabel}
										</UIText>
									</SubMenuItemWrapper>
								))}
							</motion.div>
						)}
					</MenuItemWrapper>
				);
			})}
		</MenuWrapper>
	);
};

export default Menu;
