import React, {useContext} from "react";
import {BrowserRouter, Switch, Route, Redirect, RouteProps} from "react-router-dom";
import AuthContext from "./../context/AuthContext";
import * as Pages from "./../page";
import {CPNMenu, CPNHeader} from "./../component";

const PrivateRouter: React.FC<RouteProps> = ({children, ...args}) => {
	const {signed} = useContext(AuthContext);
	return (
		<Route
			{...args}
			render={({location}) =>
				signed ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/AuthSignIn",
							state: {from: location},
						}}
					/>
				)
			}
		/>
	);
};

const Router: React.VFC = () => {
	const {signed, appLoading} = useContext(AuthContext);
	if (appLoading) {
		return <span>Loading</span>;
	}
	if (signed) {
		return (
			<BrowserRouter>
				<div className="app-container flex w-full">
					<div className="app-menu">
						<CPNMenu />
					</div>
					<div className="app-content flex flex-col w-full">
						<div className="app-header">
							<CPNHeader />
						</div>
						<div className="p-7">
							<Switch>
								{/* Private routes */}
								<PrivateRouter path="/AppHome" component={Pages.AppHome} />
								{/* Dados da congênere */}
								<PrivateRouter path="/AppUserLogs" component={Pages.AppUserLogs} />
								{/* Consultar beneficiário */}
								<PrivateRouter path="/AppBeneficiary" component={Pages.AppBeneficiary} />
								{/* Consultar beneficiário -> detalhe beneficiário */}
								<PrivateRouter
									path="/AppBeneficiaryDetail"
									component={Pages.AppBeneficiaryDetail}
								/>
								{/* Inclusão de carteirinha */}
								<PrivateRouter path="/AppHealthCard" component={Pages.AppHealthCard} />
								{/* Inclusão de carteirinha -> detalhe carteirinha*/}
								<PrivateRouter path="/AppHealthCardDetail" component={Pages.AppHealthCardDetail} />
								{/* Solicitação de carteirinha */}
								<PrivateRouter path="/AppReqHealthCard" component={Pages.AppReqHealthCard} />
								{/* Solicitação de carteirinha -> detalhe solicitação */}
								<PrivateRouter
									path="/AppReqHealthCardDetail"
									component={Pages.AppReqHealthCardDetail}
								/>
								{/* Lista de solicitações */}
								<PrivateRouter path="/AppRequestList" component={Pages.AppRequestList} />
								{/* Beneficiários por congênere */}
								<PrivateRouter path="/AppExtractionReport" component={Pages.AppExtractionReport} />
								{/* Arquivo de movimentação */}
								<PrivateRouter path="/AppFilesMovements" component={Pages.AppFilesMovements} />
								{/* Arquivo de retorno */}
								<PrivateRouter path="/AppUploadFiles" component={Pages.AppUploadFiles} />
								{/* Consultar envios */}
								<PrivateRouter path="/AppFilesShipments" component={Pages.AppFilesShipments} />
								{/* Home redirect */}
								<Route component={() => <Redirect to="/AppHome" />} />
							</Switch>
						</div>
					</div>
				</div>
			</BrowserRouter>
		);
	}
	return (
		<BrowserRouter>
			<Switch>
				{/* Public routes */}
				<Route path="/AuthSignIn" component={Pages.AuthSignIn} />
				<Route path="/AuthFirstAccess" component={Pages.AuthFirstAccess} />
				<Route path="/AuthForgotPassword" component={Pages.AuthForgotPassword} />
				<Route component={() => <Redirect to="/AuthSignIn" />} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
