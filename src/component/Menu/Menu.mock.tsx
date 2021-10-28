import {MenuItem} from "./Menu.types";
export const MENU: MenuItem[] = [
	{
		label: "Home",
		icon: "home",
		route: "/",
	},
	// {
	// 	label: "Dados da empresa",
	// 	icon: "leaderBoard",
	// 	route: "down",
	// 	links: [
	// 		{
	// 			label: "Informações de cadastro",
	// 			route: "/",
	// 		},
	// 		{
	// 			label: "Gerenciar Usuários",
	// 			route: "/",
	// 		},
	// 		{
	// 			label: "Alterar senha",
	// 			route: "/",
	// 		},
	// 		{
	// 			label: "Gerenciar notificações",
	// 			route: "/",
	// 		},
	// 	],
	// },
	// {
	// 	label: "Dados do contrato",
	// 	icon: "description",
	// 	route: "down",
	// 	links: [
	// 		{
	// 			label: "Resumo do contrato",
	// 			route: "/",
	// 		},
	// 		{
	// 			label: "Aditivo do contrato",
	// 			route: "/",
	// 		},
	// 		{
	// 			label: "Grupo do contrato",
	// 			route: "/",
	// 		},
	// 		{
	// 			label: "Reajuste do contrato",
	// 			route: "/",
	// 		},
	// 		{
	// 			label: "Consulta do contrato",
	// 			route: "/",
	// 		},
	// 		{
	// 			label: "Cobertura do contrato",
	// 			route: "/",
	// 		},
	// 	],
	// },
	{
		label: "Dados de beneficiário",
		icon: "user",
		route: "down",
		links: [
			{
				label: "Consultar beneficiario",
				route: "/",
			},
			{
				label: "Carteirinha",
				route: "/",
			},
			{
				label: "Beneficiário por congênere",
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
				label: "Arquivo de movimentação",
				route: "/",
			},
			{
				label: "Arquivo de retorno",
				route: "/",
			},
			{
				label: "Consultar envíos",
				route: "/",
			},
			// {
			// 	label: "Trocar o plano",
			// 	route: "/",
			// },
			// {
			// 	label: "Transferir beneficiário",
			// 	route: "/",
			// },
			// {
			// 	label: "Aposentados e demitidos",
			// 	route: "/",
			// },
			// {
			// 	label: "Movimentações pendentes",
			// 	route: "/",
			// },
			// {
			// 	label: "Movimentações por arquivo",
			// 	route: "/",
			// },
		],
	},
	// {
	// 	label: "Faturamento",
	// 	icon: "paid",
	// 	route: "down",
	// 	links: [
	// 		{
	// 			label: "Lista de faturas",
	// 			route: "/",
	// 		},
	// 		{
	// 			label: "Relatório de beneficiários",
	// 			route: "/",
	// 		},
	// 		{
	// 			label: "Relatório de sinistros",
	// 			route: "/",
	// 		},
	// 		{
	// 			label: "Centro de custo",
	// 			route: "/",
	// 		},
	// 	],
	// },
	// {
	// 	label: "Central de ajuda",
	// 	icon: "help",
	// 	route: "down",
	// 	links: [
	// 		{
	// 			label: "Dúvidas frequentes",
	// 			route: "/",
	// 		},
	// 		{
	// 			label: "Fale conosco",
	// 			route: "/",
	// 		},
	// 		{
	// 			label: "Consulta de solicitção",
	// 			route: "/",
	// 		},
	// 	],
	// },
];
