// Component generated with util/vox-create-component.js
import React from "react";
import * as R from "ramda";
import {MenuWrapper, MenuItemWrapper, SubMenuItemWrapper} from "./Menu.styled";
import {MenuProps, MenuItem} from "./Menu.types";
import {UIICon, UIText} from "./../../ui";
import {motion} from "framer-motion";
import uniqid from "uniqid";
import Logo from "./../../assets/images/img-logo-gndi.svg";

const MENU: MenuItem[] = [
	{
		label: "Home",
		icon: "home",
		route: "/",
	},
	{
		label: "Dados da empresa",
		icon: "leaderBoard",
		route: "down",
		links: [
			{
				label: "Informações de cadastro",
				route: "/",
			},
			{
				label: "Gerenciar Usuários",
				route: "/",
			},
			{
				label: "Alterar senha",
				route: "/",
			},
			{
				label: "Gerenciar notificações",
				route: "/",
			},
		],
	},
	{
		label: "Dados do contrato",
		icon: "description",
		route: "down",
		links: [
			{
				label: "Resumo do contrato",
				route: "/",
			},
			{
				label: "Aditivo do contrato",
				route: "/",
			},
			{
				label: "Grupo do contrato",
				route: "/",
			},
			{
				label: "Reajuste do contrato",
				route: "/",
			},
			{
				label: "Consulta do contrato",
				route: "/",
			},
			{
				label: "Cobertura do contrato",
				route: "/",
			},
		],
	},
	{
		label: "Dados de beneficiário",
		icon: "user",
		route: "down",
		links: [
			{
				label: "Carteirinha",
				route: "/",
			},
			{
				label: "Beneficiários por periódo",
				route: "/",
			},
			{
				label: "Registro de acidentados",
				route: "/",
			},
			{
				label: "Autorizações",
				route: "/",
			},
		],
	},
	{
		label: "Movimentação cadastral",
		icon: "swap",
		route: "down",
		links: [
			{
				label: "Adicionar beneficiário",
				route: "/",
			},
			{
				label: "Alterar beneficiário",
				route: "/",
			},
			{
				label: "Desligar beneficiário",
				route: "/",
			},
			{
				label: "Trocar o plano",
				route: "/",
			},
			{
				label: "Transferir beneficiário",
				route: "/",
			},
			{
				label: "Aposentados e demitidos",
				route: "/",
			},
			{
				label: "Movimentações pendentes",
				route: "/",
			},
			{
				label: "Movimentações por arquivo",
				route: "/",
			},
		],
	},
	{
		label: "Faturamento",
		icon: "paid",
		route: "down",
		links: [
			{
				label: "Lista de faturas",
				route: "/",
			},
			{
				label: "Relatório de beneficiários",
				route: "/",
			},
			{
				label: "Relatório de sinistros",
				route: "/",
			},
			{
				label: "Centro de custo",
				route: "/",
			},
		],
	},
	{
		label: "Central de ajuda",
		icon: "help",
		route: "down",
		links: [
			{
				label: "Dúvidas frequentes",
				route: "/",
			},
			{
				label: "Fale conosco",
				route: "/",
			},
			{
				label: "Consulta de solicitção",
				route: "/",
			},
		],
	},
];

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
							<motion.div>
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
