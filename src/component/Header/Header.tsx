// Component generated with util/vox-create-component.js
import React from "react";
import {CPNTextInput} from "..";
import {UIICon, UIText} from "../../ui";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import {
	HeaderTopIconWrapper,
	HeaderTopWrapper,
	HeaderWrapper,
	HeaderBodyWrapper,
	SubHeaderWrapper,
	ContractWrapper,
	ContractMenu,
} from "./Header.styled";
import {HeaderProps} from "./Header.types";
import NotificationNav from "./NotificationNav";
import UserNav from "./UserNav";

const CRUMBS = [
	{
		label: "Home",
		route: "/",
	},
	{
		label: "Dados de benediciário",
		route: "/beneficiary",
	},
];

const CONTRACTS = [
	{
		groupLabel: "Group 1",
		groupLink: "/",
		groupList: [
			{
				label: "123456 - hello",
				link: "/",
			},
			{
				label: "123456 - hello",
				link: "/",
			},
			{
				label: "123456 - hello",
				link: "/",
			},
		],
	},
];

export const Header: React.VFC<HeaderProps> = ({subHeader, contractList, ...args}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	return (
		<HeaderWrapper {...args}>
			{/* <HeaderTopWrapper>
				<HeaderTopIconWrapper>
					<UIICon name="invertColors" color="LIGHTGREY" size="xs" />
				</HeaderTopIconWrapper>
				<HeaderTopIconWrapper>
					<UIText color="LIGHTGREY">A-</UIText>
				</HeaderTopIconWrapper>
				<HeaderTopIconWrapper>
					<UIText color="LIGHTGREY">A+</UIText>
				</HeaderTopIconWrapper>
				<HeaderTopIconWrapper>
					<UIICon name="hearingDisabled" color="LIGHTGREY" size="xs" />
				</HeaderTopIconWrapper>
				<HeaderTopIconWrapper end>
					<UIICon name="libras" color="LIGHTGREY" size="xs" />
				</HeaderTopIconWrapper>
			</HeaderTopWrapper> */}
			<HeaderBodyWrapper>
				<div className="w-1/3">
					<CPNTextInput placeholder="O que você está procurando?" icon="search" />
				</div>
				<div className="flex flex-row items-center">
					<NotificationNav />
					<UserNav />
				</div>
			</HeaderBodyWrapper>
			{subHeader && (
				<SubHeaderWrapper>
					<div>
						<BreadCrumb crumbs={CRUMBS} />
						<div className="mt-3">
							<UIText preset="HEADLINE">Consultar beneficiário</UIText>
						</div>
					</div>
					<ContractMenu>
						<div className="flex flex-col items-end mr-4">
							<UIText preset="BUTTON_02" color="GREY">
								Contrato
							</UIText>
							<UIText preset="BODY_02" color="GREY">
								1011000 - Léo Madeiras Máquinas
							</UIText>
						</div>
						<UIICon name="chevronDown" color="PRIMARY" />
						{contractList && (
							<ContractWrapper>
								{CONTRACTS.map((group) => (
									<div className="flex flex-col" key={group.groupLabel}>
										<UIText preset="BUTTON_02" onClick={() => console.log("group label click")}>
											{group.groupLabel}
										</UIText>
										<div className="flex flex-col">
											{group.groupList.map((contract) => (
												<UIText
													onClick={() => console.log("contract item label click")}
													key={contract.label}>
													{contract.label}
												</UIText>
											))}
										</div>
									</div>
								))}
							</ContractWrapper>
						)}
					</ContractMenu>
				</SubHeaderWrapper>
			)}
		</HeaderWrapper>
	);
};

export default Header;
