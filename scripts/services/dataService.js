"use strict";

aerodoc.factory("dataService", function() {
	return {
		restAuth : AeroGear.Auth({
			name : "auth",
			settings : {
				agAuth : true,
				baseURL : "http://localhost:8080/aerodoc/rest/",
				endpoints : {
					enroll : "register",
					login : "login",
					logout : "logout"
				}
			}
		}).modules.auth,
		leadPipe : AeroGear.Pipeline({
			name : "leads",
			settings : {
				baseURL : "http://localhost:8080/aerodoc/rest/",
				endpoint : "leads",
				authenticator : this.restAuth
			}
		}).pipes.leads,

		searchAgents : AeroGear.Pipeline({
			name : "searchAgents",
			settings : {
				authenticator : this.restAuth,
				endpoint: "rest/saleagents/searchagents",
				baseURL : "http://localhost:8080/aerodoc/rest/"
			}
		}).pipes.searchAgents,

		leadStore : AeroGear.DataManager({
			name : "Lead",
			type : "SessionLocal",
			settings : {
				storageType : "localStorage"
			}
		}).stores.Lead,
		saleAgentPipe : AeroGear.Pipeline({
			name : "rest/saleagents",
			settings : {
				authenticator : this.restAuth,
				baseURL : "http://localhost:8080/aerodoc/rest/"
			}
		}).pipes.saleagents,

		saleAgentStore : AeroGear.DataManager({
			name : "SaleAgent",
			type : "SessionLocal",
			settings : {
				storageType : "localStorage"
			}
		}).stores.SaleAgent
	};
});