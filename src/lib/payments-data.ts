// Auto-generated payment actions configuration
export interface PaymentActionConfig {
	summary: string;
	description: string;
	requestBody?: any;
	responses?: any;
	parameters?: any[];
	security?: any[];
}

export const paymentActions: Record<string, PaymentActionConfig> = {
	payment: {
		summary: "Payment",
		description: "Create a `tracker` with mode `payment`.",
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							merchant_api_key: {
								type: "string",
								example: "sec_9286c6a3-a159-492d-9f72-dbe424517fb5",
							},
							intent: {
								type: "string",
								example: "CYBERSOURCE",
							},
							mode: {
								type: "string",
								example: "payment",
							},
							currency: {
								type: "string",
								example: "PKR",
							},
							user: {
								type: "string",
								example: "customer_token",
							},
							amount: {
								type: "integer",
								example: 5000,
							},
							entry_mode: {
								type: "string",
								example: "raw",
							},
							metadata: {
								type: "object",
								properties: {
									source: {
										type: "string",
										example: "shopify",
									},
									order_id: {
										type: "string",
										example: "41231X",
									},
								},
								required: ["source", "order_id"],
							},
						},
						required: ["merchant_api_key", "intent", "mode", "currency", "user", "amount", "entry_mode", "metadata"],
					},
					example: {
						merchant_api_key: "sec_9286c6a3-a159-492d-9f72-dbe424517fb5",
						intent: "CYBERSOURCE",
						mode: "payment",
						currency: "PKR",
						user: "customer_token",
						amount: 5000,
						entry_mode: "raw",
						metadata: {
							source: "shopify",
							order_id: "41231X",
						},
					},
				},
			},
		},
		responses: {
			"201": {
				description: "201 - raw",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "object",
									properties: {
										tracker: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "track_895ca125-8bd3-438e-82ea-ce93e5845933",
												},
												client: {
													type: "string",
													example: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
												},
												environment: {
													type: "string",
													example: "sandbox",
												},
												state: {
													type: "string",
													example: "TRACKER_STARTED",
												},
												intent: {
													type: "string",
													example: "CYBERSOURCE",
												},
												mode: {
													type: "string",
													example: "payment",
												},
												entry_mode: {
													type: "string",
													example: "raw",
												},
												next_actions: {
													type: "object",
													properties: {
														CYBERSOURCE: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "PAYER_AUTH_SETUP",
																},
															},
															required: ["kind"],
														},
														MPGS: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "CREATE_SESSION",
																},
															},
															required: ["kind"],
														},
													},
													required: ["CYBERSOURCE", "MPGS"],
												},
												purchase_totals: {
													type: "object",
													properties: {
														quote_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 600000,
																},
															},
															required: ["currency", "amount"],
														},
														base_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 600000,
																},
															},
															required: ["currency", "amount"],
														},
														conversion_rate: {
															type: "object",
															properties: {
																base_currency: {
																	type: "string",
																	example: "PKR",
																},
																quote_currency: {
																	type: "string",
																	example: "PKR",
																},
																rate: {
																	type: "integer",
																	example: 1,
																},
															},
															required: ["base_currency", "quote_currency", "rate"],
														},
													},
													required: ["quote_amount", "base_amount", "conversion_rate"],
												},
												metadata: {
													type: "object",
													properties: {},
												},
											},
											required: [
												"token",
												"client",
												"environment",
												"state",
												"intent",
												"mode",
												"entry_mode",
												"next_actions",
												"purchase_totals",
												"metadata",
											],
										},
										capabilities: {
											type: "object",
											properties: {
												CYBERSOURCE: {
													type: "boolean",
													example: true,
												},
												MPGS: {
													type: "boolean",
													example: true,
												},
											},
											required: ["CYBERSOURCE", "MPGS"],
										},
									},
									required: ["tracker", "capabilities"],
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
											example: "success",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"201_-_raw": {
								summary: "201 - raw",
								value: {
									data: {
										tracker: {
											token: "track_895ca125-8bd3-438e-82ea-ce93e5845933",
											client: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
											environment: "sandbox",
											state: "TRACKER_STARTED",
											intent: "CYBERSOURCE",
											mode: "payment",
											entry_mode: "raw",
											next_actions: {
												CYBERSOURCE: {
													kind: "PAYER_AUTH_SETUP",
												},
												MPGS: {
													kind: "CREATE_SESSION",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 600000,
												},
												base_amount: {
													currency: "PKR",
													amount: 600000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										capabilities: {
											CYBERSOURCE: true,
											MPGS: true,
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"201_-_flex": {
								summary: "201 - flex",
								value: {
									data: {
										tracker: {
											token: "track_36b30a36-e42e-475a-a60e-fbc97c6cf9cc",
											client: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
											environment: "sandbox",
											state: "TRACKER_STARTED",
											intent: "CYBERSOURCE",
											mode: "payment",
											entry_mode: "flex",
											next_actions: {
												CYBERSOURCE: {
													kind: "GENERATE_CAPTURE_CONTEXT",
												},
												MPGS: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 600000,
												},
												base_amount: {
													currency: "PKR",
													amount: 600000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										capabilities: {
											CYBERSOURCE: true,
											MPGS: true,
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"201_-_unscheduled-raw": {
								summary: "201 - unscheduled-raw",
								value: {
									data: {
										tracker: {
											token: "track_f8664c1d-5b2f-4389-9c1d-39059e5b8786",
											client: "sec_d8233453-7b13-49f5-bffa-1675dad71b92",
											environment: "sandbox",
											state: "TRACKER_STARTED",
											payment_method_kind: "card",
											intent: "CYBERSOURCE",
											mode: "payment",
											entry_mode: "unscheduled_raw",
											customer: "cus_fa03ab2f-a74d-4523-beb8-8dbde3ab84b5",
											next_actions: {
												CYBERSOURCE: {
													kind: "AUTHORIZATION",
												},
												MPGS: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 156050,
												},
												base_amount: {
													currency: "PKR",
													amount: 156050,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										capabilities: {
											CYBERSOURCE: true,
											MPGS: true,
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"201_-_tms": {
								summary: "201 - tms",
								value: {
									data: {
										tracker: {
											token: "track_61414d0f-7740-4297-903a-3aca4b04bca8",
											client: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
											environment: "sandbox",
											state: "TRACKER_STARTED",
											intent: "CYBERSOURCE",
											mode: "payment",
											entry_mode: "tms",
											next_actions: {
												CYBERSOURCE: {
													kind: "PAYER_AUTH_SETUP",
												},
												MPGS: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 600000,
												},
												base_amount: {
													currency: "PKR",
													amount: 600000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										capabilities: {
											CYBERSOURCE: true,
											MPGS: true,
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"201_-_with_network_token": {
								summary: "201 - with network_token",
								value: {
									data: {
										tracker: {
											token: "track_94b6cbf6-b4a0-4f9b-81a7-1837639f5e22",
											client: "sec_9021583d-b77b-40ef-ac7f-a8fa931097d0",
											environment: "local",
											state: "TRACKER_STARTED",
											payment_method_kind: "card",
											intent: "CYBERSOURCE",
											mode: "payment",
											entry_mode: "network_token",
											customer: "cus_1c1e4d51-aaaf-42a3-99ce-884d9aba94fa",
											next_actions: {
												CYBERSOURCE: {
													kind: "AUTHORIZATION",
												},
												MPGS: {
													kind: "NOOP",
												},
												PAYFAST: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 1244,
												},
												base_amount: {
													currency: "PKR",
													amount: 1244,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										capabilities: {
											CYBERSOURCE: true,
											MPGS: true,
											PAYFAST: true,
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"201_-_with_metadata": {
								summary: "201 - with metadata",
								value: {
									data: {
										tracker: {
											token: "track_66fca62d-0777-4c35-916e-0fe40cc60a98",
											client: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
											environment: "sandbox",
											state: "TRACKER_STARTED",
											payment_method_kind: "card",
											intent: "CYBERSOURCE",
											mode: "payment",
											entry_mode: "raw",
											next_actions: {
												CYBERSOURCE: {
													kind: "PAYER_AUTH_SETUP",
												},
												MPGS: {
													kind: "CREATE_SESSION",
												},
												PAYFAST: {
													kind: "CUSTOMER_VALIDATE",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 500000,
												},
												base_amount: {
													currency: "PKR",
													amount: 500000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {
												data: {
													order_id: "41231X",
													source: "shopify",
												},
											},
										},
										capabilities: {
											CYBERSOURCE: true,
											MPGS: true,
											PAYFAST: true,
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"201_-_network_token_cit": {
								summary: "201 - network_token cit",
								value: {
									data: {
										tracker: {
											token: "track_88f7e3e8-1673-4ab9-9818-e169d38ca0c0",
											client: "sec_9286c6a3-a159-492d-9f72-dbe424517fb5",
											environment: "local",
											state: "TRACKER_STARTED",
											payment_method_kind: "card",
											intent: "CYBERSOURCE",
											mode: "subscription",
											entry_mode: "network_token",
											customer: "cus_1c1e4d51-aaaf-42a3-99ce-884d9aba94fa",
											next_actions: {
												CYBERSOURCE: {
													kind: "AUTHORIZATION",
												},
												MPGS: {
													kind: "NOOP",
												},
												PAYFAST: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 1244,
												},
												base_amount: {
													currency: "PKR",
													amount: 1244,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										capabilities: {
											CYBERSOURCE: true,
											MPGS: true,
											PAYFAST: true,
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
						},
					},
				},
			},
			"400": {
				description: "400",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "string",
									nullable: true,
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
												example: "merchant_api_key: invalid key part in merchant_api_key: must be a valid UUID.",
											},
											example: ["merchant_api_key: invalid key part in merchant_api_key: must be a valid UUID."],
										},
										message: {
											type: "string",
											example: "fail",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"400": {
								summary: "400",
								value: {
									data: null,
									status: {
										errors: ["merchant_api_key: invalid key part in merchant_api_key: must be a valid UUID."],
										message: "fail",
									},
								},
							},
						},
					},
				},
			},
			"404": {
				description: "404",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "string",
									nullable: true,
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
												example: "merchant with api key 'sec_edeade52-46aa-483b-b87d-009d3ce41553' not found",
											},
											example: ["merchant with api key 'sec_edeade52-46aa-483b-b87d-009d3ce41553' not found"],
										},
										message: {
											type: "string",
											example: "fail",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"404": {
								summary: "404",
								value: {
									data: null,
									status: {
										errors: ["merchant with api key 'sec_edeade52-46aa-483b-b87d-009d3ce41553' not found"],
										message: "fail",
									},
								},
							},
						},
					},
				},
			},
			"500": {
				description: "500",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "string",
									nullable: true,
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
												example: "amount cannot be 0",
											},
											example: ["amount cannot be 0"],
										},
										message: {
											type: "string",
											example: "fail",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"500": {
								summary: "500",
								value: {
									data: null,
									status: {
										errors: ["amount cannot be 0"],
										message: "fail",
									},
								},
							},
						},
					},
				},
			},
		},
	},
	subscription: {
		summary: "Subscription",
		description: "Create a `tracker` with mode `payment`.\n\nSend RequestNew RequestEdit EnvironmentsCmd + EnterCmd + BCmd + E",
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							merchant_api_key: {
								type: "string",
								example: "sec_9286c6a3-a159-492d-9f72-dbe424517fb5",
							},
							user: {
								type: "string",
								example: "user_793f7a42-80c4-4191-8df6-31d6b3ab829b",
							},
							intent: {
								type: "string",
								example: "CYBERSOURCE",
							},
							mode: {
								type: "string",
								example: "subscription",
							},
							currency: {
								type: "string",
								example: "PKR",
							},
							amount: {
								type: "integer",
								example: 500000,
							},
						},
						required: ["merchant_api_key", "user", "intent", "mode", "currency", "amount"],
					},
					example: {
						merchant_api_key: "sec_9286c6a3-a159-492d-9f72-dbe424517fb5",
						user: "user_793f7a42-80c4-4191-8df6-31d6b3ab829b",
						intent: "CYBERSOURCE",
						mode: "subscription",
						currency: "PKR",
						amount: 500000,
					},
				},
			},
		},
		responses: {
			"201": {
				description: "Success",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "object",
									properties: {
										tracker: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "track_793f7a42-80c4-4191-8df6-31d6b3ab829b",
												},
												client: {
													type: "string",
													example: "sec_9286c6a3-a159-492d-9f72-dbe424517fb5",
												},
												environment: {
													type: "string",
													example: "sandbox",
												},
												state: {
													type: "string",
													example: "TRACKER_STARTED",
												},
												intent: {
													type: "string",
													example: "CYBERSOURCE",
												},
												mode: {
													type: "string",
													example: "subscription",
												},
												currency: {
													type: "string",
													example: "PKR",
												},
												amount: {
													type: "integer",
													example: 500000,
												},
											},
											required: ["token", "client", "environment", "state", "intent", "mode", "currency", "amount"],
										},
									},
									required: ["tracker"],
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
											example: "success",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							default: {
								summary: "Success",
								value: {
									data: {
										tracker: {
											token: "track_793f7a42-80c4-4191-8df6-31d6b3ab829b",
											client: "sec_9286c6a3-a159-492d-9f72-dbe424517fb5",
											environment: "sandbox",
											state: "TRACKER_STARTED",
											intent: "CYBERSOURCE",
											mode: "subscription",
											currency: "PKR",
											amount: 500000,
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
						},
					},
				},
			},
			"400": {
				description: "Bad Request",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "string",
									nullable: true,
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
										},
									},
								},
							},
						},
						example: {
							data: null,
							status: {
								errors: ["Bad Request"],
								message: "fail",
							},
						},
					},
				},
			},
		},
	},
	instrument: {
		summary: "Instrument",
		description:
			'Create a `tracker` with mode `instrument`. This tracker will save a payment method for future use.\n\n### Zero amount authorizations\n\nFor cards, there is an option to save the payment method with a zero amount authorization. To achieve this, add the following to the request body:\n\n`"is_account_verification": true`\n\nNote that if this is set then there is no need to perform a reversal as is required in the standard flow.',
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							user: {
								type: "string",
								example: "cus_00e2092d-b54e-4d5f-8dbb-cdb96ed0eccc",
							},
							merchant_api_key: {
								type: "string",
								example: "sec_067a9859-0198-4f5a-b609-be0d305f88ab",
							},
							intent: {
								type: "string",
								example: "CYBERSOURCE",
							},
							mode: {
								type: "string",
								example: "instrument",
							},
							currency: {
								type: "string",
								example: "PKR",
							},
							entry_mode: {
								type: "string",
								example: "raw",
							},
							is_account_verification: {
								type: "boolean",
								example: true,
							},
						},
						required: ["user", "merchant_api_key", "intent", "mode", "currency", "entry_mode", "is_account_verification"],
					},
					example: {
						user: "cus_00e2092d-b54e-4d5f-8dbb-cdb96ed0eccc",
						merchant_api_key: "sec_067a9859-0198-4f5a-b609-be0d305f88ab",
						intent: "CYBERSOURCE",
						mode: "instrument",
						currency: "PKR",
						entry_mode: "raw",
						is_account_verification: true,
					},
				},
			},
		},
		responses: {
			"201": {
				description: "Success",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "object",
									properties: {
										tracker: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "track_00e2092d-b54e-4d5f-8dbb-cdb96ed0eccc",
												},
												client: {
													type: "string",
													example: "sec_067a9859-0198-4f5a-b609-be0d305f88ab",
												},
												environment: {
													type: "string",
													example: "sandbox",
												},
												state: {
													type: "string",
													example: "TRACKER_STARTED",
												},
												intent: {
													type: "string",
													example: "CYBERSOURCE",
												},
												mode: {
													type: "string",
													example: "instrument",
												},
												currency: {
													type: "string",
													example: "PKR",
												},
												entry_mode: {
													type: "string",
													example: "raw",
												},
												is_account_verification: {
													type: "boolean",
													example: true,
												},
											},
											required: [
												"token",
												"client",
												"environment",
												"state",
												"intent",
												"mode",
												"currency",
												"entry_mode",
												"is_account_verification",
											],
										},
									},
									required: ["tracker"],
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
											example: "success",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							default: {
								summary: "Success",
								value: {
									data: {
										tracker: {
											token: "track_00e2092d-b54e-4d5f-8dbb-cdb96ed0eccc",
											client: "sec_067a9859-0198-4f5a-b609-be0d305f88ab",
											environment: "sandbox",
											state: "TRACKER_STARTED",
											intent: "CYBERSOURCE",
											mode: "instrument",
											currency: "PKR",
											entry_mode: "raw",
											is_account_verification: true,
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
						},
					},
				},
			},
			"400": {
				description: "Bad Request",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "string",
									nullable: true,
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
										},
									},
								},
							},
						},
						example: {
							data: null,
							status: {
								errors: ["Bad Request"],
								message: "fail",
							},
						},
					},
				},
			},
		},
	},
	"unscheduled-cof": {
		summary: "Unscheduled COF",
		description: "Create a tracker with mode unscheduled_cof. Used for card-on-file transactions that are unscheduled.",
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							merchant_api_key: {
								type: "string",
								example: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
							},
							user: {
								type: "string",
								example: "cus_b4afd638-41bf-4831-af07-587b51269f38",
							},
							intent: {
								type: "string",
								example: "CYBERSOURCE",
							},
							mode: {
								type: "string",
								example: "unscheduled_cof",
							},
							currency: {
								type: "string",
								example: "PKR",
							},
							amount: {
								type: "integer",
								example: 10050,
							},
						},
						required: ["merchant_api_key", "user", "intent", "mode", "currency", "amount"],
					},
					example: {
						merchant_api_key: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
						user: "cus_b4afd638-41bf-4831-af07-587b51269f38",
						intent: "CYBERSOURCE",
						mode: "unscheduled_cof",
						currency: "PKR",
						amount: 10050,
					},
				},
			},
		},
		responses: {
			"201": {
				description: "201",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "object",
									properties: {
										tracker: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "track_da499080-3c67-4f82-8f33-c4338c8020c5",
												},
												client: {
													type: "string",
													example: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
												},
												environment: {
													type: "string",
													example: "sandbox",
												},
												state: {
													type: "string",
													example: "TRACKER_STARTED",
												},
												intent: {
													type: "string",
													example: "CYBERSOURCE",
												},
												mode: {
													type: "string",
													example: "unscheduled_cof",
												},
												entry_mode: {
													type: "string",
													example: "tms",
												},
												customer: {
													type: "string",
													example: "cus_b4afd638-41bf-4831-af07-587b51269f38",
												},
												next_actions: {
													type: "object",
													properties: {
														CYBERSOURCE: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "AUTHORIZATION",
																},
															},
															required: ["kind"],
														},
														MPGS: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "NOOP",
																},
															},
															required: ["kind"],
														},
													},
													required: ["CYBERSOURCE", "MPGS"],
												},
												purchase_totals: {
													type: "object",
													properties: {
														quote_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 10050,
																},
															},
															required: ["currency", "amount"],
														},
														base_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 10050,
																},
															},
															required: ["currency", "amount"],
														},
														conversion_rate: {
															type: "object",
															properties: {
																base_currency: {
																	type: "string",
																	example: "PKR",
																},
																quote_currency: {
																	type: "string",
																	example: "PKR",
																},
																rate: {
																	type: "integer",
																	example: 1,
																},
															},
															required: ["base_currency", "quote_currency", "rate"],
														},
													},
													required: ["quote_amount", "base_amount", "conversion_rate"],
												},
												metadata: {
													type: "object",
													properties: {},
												},
											},
											required: [
												"token",
												"client",
												"environment",
												"state",
												"intent",
												"mode",
												"entry_mode",
												"customer",
												"next_actions",
												"purchase_totals",
												"metadata",
											],
										},
										capabilities: {
											type: "object",
											properties: {
												CYBERSOURCE: {
													type: "boolean",
													example: true,
												},
												MPGS: {
													type: "boolean",
													example: true,
												},
											},
											required: ["CYBERSOURCE", "MPGS"],
										},
									},
									required: ["tracker", "capabilities"],
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
											example: "success",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"201": {
								summary: "201",
								value: {
									data: {
										tracker: {
											token: "track_da499080-3c67-4f82-8f33-c4338c8020c5",
											client: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
											environment: "sandbox",
											state: "TRACKER_STARTED",
											intent: "CYBERSOURCE",
											mode: "unscheduled_cof",
											entry_mode: "tms",
											customer: "cus_b4afd638-41bf-4831-af07-587b51269f38",
											next_actions: {
												CYBERSOURCE: {
													kind: "AUTHORIZATION",
												},
												MPGS: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 10050,
												},
												base_amount: {
													currency: "PKR",
													amount: 10050,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										capabilities: {
											CYBERSOURCE: true,
											MPGS: true,
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
						},
					},
				},
			},
			"404": {
				description: "404",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "string",
									nullable: true,
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
												example: "could not find customer: sql: no rows in result set",
											},
											example: ["could not find customer: sql: no rows in result set"],
										},
										message: {
											type: "string",
											example: "fail",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"404": {
								summary: "404",
								value: {
									data: null,
									status: {
										errors: ["could not find customer: sql: no rows in result set"],
										message: "fail",
									},
								},
							},
						},
					},
				},
			},
		},
	},
	"google-pay": {
		summary: "Google Pay",
		description: "Create a tracker configured for Google Pay payments.",
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							merchant_api_key: {
								type: "string",
								example: "sec_9286c6a3-a159-492d-9f72-dbe424517fb5",
							},
							mode: {
								type: "string",
								example: "payment",
							},
							entry_mode: {
								type: "string",
								example: "gpay",
							},
							currency: {
								type: "string",
								example: "PKR",
							},
							user: {
								type: "string",
								example: "customer_token",
							},
							amount: {
								type: "integer",
								example: 5000,
							},
							metadata: {
								type: "object",
								properties: {
									source: {
										type: "string",
										example: "shopify",
									},
									order_id: {
										type: "string",
										example: "41231X",
									},
								},
								required: ["source", "order_id"],
							},
						},
						required: ["merchant_api_key", "mode", "entry_mode", "currency", "user", "amount", "metadata"],
					},
					example: {
						merchant_api_key: "sec_9286c6a3-a159-492d-9f72-dbe424517fb5",
						mode: "payment",
						entry_mode: "gpay",
						currency: "PKR",
						user: "customer_token",
						amount: 5000,
						metadata: {
							source: "shopify",
							order_id: "41231X",
						},
					},
				},
			},
		},
		responses: {
			"200": {
				description: "200",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "object",
									properties: {
										tracker: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "track_44697347-a716-4276-8670-e19fa83810e0",
												},
												client: {
													type: "string",
													example: "sec_9286c6a3-a159-492d-9f72-dbe424517fb5",
												},
												environment: {
													type: "string",
													example: "sandbox",
												},
												state: {
													type: "string",
													example: "TRACKER_STARTED",
												},
												payment_method_kind: {
													type: "string",
													example: "card",
												},
												intent: {
													type: "string",
													example: "CYBERSOURCE",
												},
												mode: {
													type: "string",
													example: "payment",
												},
												entry_mode: {
													type: "string",
													example: "gpay",
												},
												customer: {
													type: "string",
													example: "cus_0ebca96e-bc62-478b-9f97-bc342bb2151f",
												},
												next_actions: {
													type: "object",
													properties: {
														CYBERSOURCE: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "GPAY_INIT",
																},
															},
															required: ["kind"],
														},
														MPGS: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "NOOP",
																},
															},
															required: ["kind"],
														},
														PAYFAST: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "NOOP",
																},
															},
															required: ["kind"],
														},
													},
													required: ["CYBERSOURCE", "MPGS", "PAYFAST"],
												},
												purchase_totals: {
													type: "object",
													properties: {
														quote_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 405100,
																},
															},
															required: ["currency", "amount"],
														},
														base_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 405100,
																},
															},
															required: ["currency", "amount"],
														},
														conversion_rate: {
															type: "object",
															properties: {
																base_currency: {
																	type: "string",
																	example: "PKR",
																},
																quote_currency: {
																	type: "string",
																	example: "PKR",
																},
																rate: {
																	type: "integer",
																	example: 1,
																},
															},
															required: ["base_currency", "quote_currency", "rate"],
														},
													},
													required: ["quote_amount", "base_amount", "conversion_rate"],
												},
												metadata: {
													type: "object",
													properties: {
														data: {
															type: "object",
															properties: {
																order_id: {
																	type: "string",
																	example: "41231X",
																},
																source: {
																	type: "string",
																	example: "shopify",
																},
															},
															required: ["order_id", "source"],
														},
													},
													required: ["data"],
												},
											},
											required: [
												"token",
												"client",
												"environment",
												"state",
												"payment_method_kind",
												"intent",
												"mode",
												"entry_mode",
												"customer",
												"next_actions",
												"purchase_totals",
												"metadata",
											],
										},
										capabilities: {
											type: "object",
											properties: {
												CYBERSOURCE: {
													type: "boolean",
													example: true,
												},
												MPGS: {
													type: "boolean",
													example: true,
												},
												PAYFAST: {
													type: "boolean",
													example: true,
												},
											},
											required: ["CYBERSOURCE", "MPGS", "PAYFAST"],
										},
									},
									required: ["tracker", "capabilities"],
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
											example: "success",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"200": {
								summary: "200",
								value: {
									data: {
										tracker: {
											token: "track_44697347-a716-4276-8670-e19fa83810e0",
											client: "sec_9286c6a3-a159-492d-9f72-dbe424517fb5",
											environment: "sandbox",
											state: "TRACKER_STARTED",
											payment_method_kind: "card",
											intent: "CYBERSOURCE",
											mode: "payment",
											entry_mode: "gpay",
											customer: "cus_0ebca96e-bc62-478b-9f97-bc342bb2151f",
											next_actions: {
												CYBERSOURCE: {
													kind: "GPAY_INIT",
												},
												MPGS: {
													kind: "NOOP",
												},
												PAYFAST: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 405100,
												},
												base_amount: {
													currency: "PKR",
													amount: 405100,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {
												data: {
													order_id: "41231X",
													source: "shopify",
												},
											},
										},
										capabilities: {
											CYBERSOURCE: true,
											MPGS: true,
											PAYFAST: true,
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
						},
					},
				},
			},
		},
	},
	raast: {
		summary: "Raast",
		description:
			"For regular merchants use this example to create Raast Trackers.\n\nSafepay does need to create your Raast merchant, please email for enablement.\n\nThis flow allows for RTP Now and Dynamic QRs.\n\nIf you are an aggregator, please refer to the mintly documentation.",
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {},
					},
					example: {},
				},
			},
		},
		responses: {
			"200": {
				description: "200",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "object",
									properties: {
										tracker: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "track_7f89e72f-b943-4c1c-b303-0673f9414e1a",
												},
												client: {
													type: "string",
													example: "sec_df38896a-de5c-4231-98c7-1020e82e6bba",
												},
												environment: {
													type: "string",
													example: "production",
												},
												state: {
													type: "string",
													example: "TRACKER_STARTED",
												},
												payment_method_kind: {
													type: "string",
													example: "wallet",
												},
												intent: {
													type: "string",
													example: "RAAST",
												},
												mode: {
													type: "string",
													example: "payment",
												},
												entry_mode: {
													type: "string",
													example: "raw",
												},
												next_actions: {
													type: "object",
													properties: {
														CYBERSOURCE: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "PAYER_AUTH_SETUP",
																},
															},
															required: ["kind"],
														},
														MPGS: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "NOOP",
																},
															},
															required: ["kind"],
														},
														PAYFAST: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "CUSTOMER_VALIDATE",
																},
															},
															required: ["kind"],
														},
														RAAST: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "CREATE_RAAST_PAYMENT",
																},
															},
															required: ["kind"],
														},
													},
													required: ["CYBERSOURCE", "MPGS", "PAYFAST", "RAAST"],
												},
												purchase_totals: {
													type: "object",
													properties: {
														quote_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 1000,
																},
															},
															required: ["currency", "amount"],
														},
														base_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 1000,
																},
															},
															required: ["currency", "amount"],
														},
														conversion_rate: {
															type: "object",
															properties: {
																base_currency: {
																	type: "string",
																	example: "PKR",
																},
																quote_currency: {
																	type: "string",
																	example: "PKR",
																},
																rate: {
																	type: "integer",
																	example: 1,
																},
															},
															required: ["base_currency", "quote_currency", "rate"],
														},
													},
													required: ["quote_amount", "base_amount", "conversion_rate"],
												},
												metadata: {
													type: "object",
													properties: {},
												},
											},
											required: [
												"token",
												"client",
												"environment",
												"state",
												"payment_method_kind",
												"intent",
												"mode",
												"entry_mode",
												"next_actions",
												"purchase_totals",
												"metadata",
											],
										},
										capabilities: {
											type: "object",
											properties: {
												CYBERSOURCE: {
													type: "boolean",
													example: true,
												},
												PAYFAST: {
													type: "boolean",
													example: true,
												},
												RAAST: {
													type: "boolean",
													example: true,
												},
											},
											required: ["CYBERSOURCE", "PAYFAST", "RAAST"],
										},
									},
									required: ["tracker", "capabilities"],
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
											example: "success",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"200": {
								summary: "200",
								value: {
									data: {
										tracker: {
											token: "track_7f89e72f-b943-4c1c-b303-0673f9414e1a",
											client: "sec_df38896a-de5c-4231-98c7-1020e82e6bba",
											environment: "production",
											state: "TRACKER_STARTED",
											payment_method_kind: "wallet",
											intent: "RAAST",
											mode: "payment",
											entry_mode: "raw",
											next_actions: {
												CYBERSOURCE: {
													kind: "PAYER_AUTH_SETUP",
												},
												MPGS: {
													kind: "NOOP",
												},
												PAYFAST: {
													kind: "CUSTOMER_VALIDATE",
												},
												RAAST: {
													kind: "CREATE_RAAST_PAYMENT",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 1000,
												},
												base_amount: {
													currency: "PKR",
													amount: 1000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										capabilities: {
											CYBERSOURCE: true,
											PAYFAST: true,
											RAAST: true,
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
						},
					},
				},
			},
		},
	},
	"generate-capture-context": {
		summary: "Generate Capture Context",
		description:
			'Perform the `GENERATE_CAPTURE_CONTEXT` action. Generates a JWT token that is used to generate the card fields on the checkout form. The capture context essentially establishes a payment session.\n\nThe capture context is necessary for generating the Cybersource Flex Microform. These are card fields hosted on Cybersource that are used to capture the customer\'s card details. The form is embedded in your checkout UI.\n\nFor more details on how to generate the form, please refer to the [Microform ](https://developer.cybersource.com/docs/cybs/en-us/digital-accept-flex/developer/all/rest/digital-accept-flex/microform-integ-v2.html) guide. Specifically, you should refer to the [Client Side](https://developer.cybersource.com/docs/cybs/en-us/digital-accept-flex/developer/all/rest/digital-accept-flex/microform-integ-v2/micro-getting-started-pay-card/micro-getting-started-pay-card-cs-setup.html) documentation. This process should help you obtain the **transient token** JWT from the card fields which you will require for the next action.\n\nThe capture context also specifies a target origin for which it is valid. By default, this is set to Safepay Checkout. However, this may be modified by authenticating as a merchant via the Secret Key and passing the `origin` as follows:\n\n```json\n{\n  "payload": {\n    "origin": "https://api-example.com"\n  }\n}\n```\n\nIf targeting Safepay Checkout, this can be left as an empty body: `{}`. Note that setting a custom origin is only honoured when authenticated as a merchant. For merchant authentication, refer to the *API Authentication* section.',
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {},
					},
					example: {},
				},
			},
		},
		responses: {
			"200": {
				description: "200",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "object",
									properties: {
										tracker: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "track_8bc892ec-694c-434e-a287-47c010554b6b",
												},
												client: {
													type: "string",
													example: "sec_edeade52-46aa-483b-b87d-009d3ce41554",
												},
												environment: {
													type: "string",
													example: "sandbox",
												},
												state: {
													type: "string",
													example: "TRACKER_STARTED",
												},
												intent: {
													type: "string",
													example: "CYBERSOURCE",
												},
												mode: {
													type: "string",
													example: "payment",
												},
												next_actions: {
													type: "object",
													properties: {
														CYBERSOURCE: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "PROCESS_TRANSIENT_TOKEN",
																},
																request_id: {
																	type: "string",
																	example: "req_2aa80d38-a263-45ba-8343-266316858fad",
																},
															},
															required: ["kind", "request_id"],
														},
													},
													required: ["CYBERSOURCE"],
												},
												purchase_totals: {
													type: "object",
													properties: {
														quote_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 600000,
																},
															},
															required: ["currency", "amount"],
														},
														base_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 600000,
																},
															},
															required: ["currency", "amount"],
														},
														conversion_rate: {
															type: "object",
															properties: {
																base_currency: {
																	type: "string",
																	example: "PKR",
																},
																quote_currency: {
																	type: "string",
																	example: "PKR",
																},
																rate: {
																	type: "integer",
																	example: 1,
																},
															},
															required: ["base_currency", "quote_currency", "rate"],
														},
													},
													required: ["quote_amount", "base_amount", "conversion_rate"],
												},
											},
											required: ["token", "client", "environment", "state", "intent", "mode", "next_actions", "purchase_totals"],
										},
										action: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "req_2aa80d38-a263-45ba-8343-266316858fad",
												},
												flex: {
													type: "object",
													properties: {
														origin: {
															type: "string",
															example: "https://sandbox.api.getsafepay.com",
														},
														capture_context_jwt: {
															type: "string",
															example:
																"eyJraWQiOiJ6dSIsImFsZyI6IlJTMjU2In0.eyJmbHgiOnsicGF0aCI6Ii9mbGV4L3YyL3Rva2VucyIsImRhdGEiOiI4ejBtdmltcVY3cXl5YlRZRW5qTzFCQUFFR3luS01DRzZ6WDEzT0UzeFNyeWtJQVN4a29PWlVGQVNmQnFuWjUrbUUvVDRxUkplSzBvODJXaXgxQlVBb2dxWGtGNXN2aDlDem9vcFdnNkQrY0VUbUJJYXN2cU80bXJMem9SSUpyek5xTC8iLCJvcmlnaW4iOiJodHRwczovL3Rlc3RmbGV4LmN5YmVyc291cmNlLmNvbSIsImp3ayI6eyJrdHkiOiJSU0EiLCJlIjoiQVFBQiIsInVzZSI6ImVuYyIsIm4iOiJwQ1o4blZjYmNaN0dSN2Nrd29RcDNBZVFBQjJKQzE0LUgtTW9oVGlZR0tLZGF6dXJHWnBjS2p2ZkVsV1ZqTWZyanI4cXpVdGRrTGNXdTdQMm1HRTFDOVMzQmFzRkthRHlGRmhCTlZuRWlxTjl2N2JtM1VYLWxocXc2MEpJeFd5RXltaGIxWnRCT3BrMU95UXJLOFJpWUxWbndMYXR4QUxHazVtajMtaTRGSlZ3aGtBZnpqLVc2MTJITVgtTW9VUnNOZENHOE9sZTIwVEpXdldaQk0wT0RnSkkwb1dCWHpwRGpXNkxwQ0Qwc3p4TlptaktRZkg1UkI0LUhiRFhwU2FrcjFkZEIyREtVaUljOF95SDVuVGZ6ZnNqMnoyVUdyVnpMcWo4TG5aVE5aWEZQYlh1UU5YOXZ2enF1MUVzcl9hUG9uWWVRZTdhUklHazBiNllsRnIzSVEiLCJraWQiOiIwN2FrVjJqOE9Jc2F4TWZ3RlFWTjJRQXJYN2JVdnl2SCJ9fSwiY3R4IjpbeyJkYXRhIjp7InRhcmdldE9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAxIl0sIm1mT3JpZ2luIjoiaHR0cHM6Ly90ZXN0ZmxleC5jeWJlcnNvdXJjZS5jb20ifSwidHlwZSI6Im1mLTAuMTEuMCJ9XSwiaXNzIjoiRmxleCBBUEkiLCJleHAiOjE2OTY1ODMzODEsImlhdCI6MTY5NjU4MjQ4MSwianRpIjoiVW42cXFscjBSYW1BVHE1MyJ9.G7va82_vgNSDaHWjpjez8s07lZa9Fj8Ilon9c7kzaiKLSeyt5EdxZoVhU5w0UgerQuy1pMP4YYQENEXzaScIHQAZI5o597jtn77_JkGs0W9BgSoyTjhMn8CiibMPg6fZva3NWyziUBkHpj33ulxtKp0oDz6hoy9DH1E8TVvtlI2wSCj8HvBsBP6envtKta_na66CQgv14FTkEpFx0lGrmOf84CjnZ2NW2f_kdXEmmZmyVVbYbQsRptX8Pi-IkdW4Ws30IFQvdeMgBH0znc_zR8Xl8VxHxrgOoHSAffHj0ejLnzzCWswhdIRA3l-e9dpBOAP2v6ednPG0BQnaBk2stA",
														},
													},
													required: ["origin", "capture_context_jwt"],
												},
											},
											required: ["token", "flex"],
										},
									},
									required: ["tracker", "action"],
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
											example: "success",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"200": {
								summary: "200",
								value: {
									data: {
										tracker: {
											token: "track_8bc892ec-694c-434e-a287-47c010554b6b",
											client: "sec_edeade52-46aa-483b-b87d-009d3ce41554",
											environment: "sandbox",
											state: "TRACKER_STARTED",
											intent: "CYBERSOURCE",
											mode: "payment",
											next_actions: {
												CYBERSOURCE: {
													kind: "PROCESS_TRANSIENT_TOKEN",
													request_id: "req_2aa80d38-a263-45ba-8343-266316858fad",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 600000,
												},
												base_amount: {
													currency: "PKR",
													amount: 600000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
										},
										action: {
											token: "req_2aa80d38-a263-45ba-8343-266316858fad",
											flex: {
												origin: "https://sandbox.api.getsafepay.com",
												capture_context_jwt:
													"eyJraWQiOiJ6dSIsImFsZyI6IlJTMjU2In0.eyJmbHgiOnsicGF0aCI6Ii9mbGV4L3YyL3Rva2VucyIsImRhdGEiOiI4ejBtdmltcVY3cXl5YlRZRW5qTzFCQUFFR3luS01DRzZ6WDEzT0UzeFNyeWtJQVN4a29PWlVGQVNmQnFuWjUrbUUvVDRxUkplSzBvODJXaXgxQlVBb2dxWGtGNXN2aDlDem9vcFdnNkQrY0VUbUJJYXN2cU80bXJMem9SSUpyek5xTC8iLCJvcmlnaW4iOiJodHRwczovL3Rlc3RmbGV4LmN5YmVyc291cmNlLmNvbSIsImp3ayI6eyJrdHkiOiJSU0EiLCJlIjoiQVFBQiIsInVzZSI6ImVuYyIsIm4iOiJwQ1o4blZjYmNaN0dSN2Nrd29RcDNBZVFBQjJKQzE0LUgtTW9oVGlZR0tLZGF6dXJHWnBjS2p2ZkVsV1ZqTWZyanI4cXpVdGRrTGNXdTdQMm1HRTFDOVMzQmFzRkthRHlGRmhCTlZuRWlxTjl2N2JtM1VYLWxocXc2MEpJeFd5RXltaGIxWnRCT3BrMU95UXJLOFJpWUxWbndMYXR4QUxHazVtajMtaTRGSlZ3aGtBZnpqLVc2MTJITVgtTW9VUnNOZENHOE9sZTIwVEpXdldaQk0wT0RnSkkwb1dCWHpwRGpXNkxwQ0Qwc3p4TlptaktRZkg1UkI0LUhiRFhwU2FrcjFkZEIyREtVaUljOF95SDVuVGZ6ZnNqMnoyVUdyVnpMcWo4TG5aVE5aWEZQYlh1UU5YOXZ2enF1MUVzcl9hUG9uWWVRZTdhUklHazBiNllsRnIzSVEiLCJraWQiOiIwN2FrVjJqOE9Jc2F4TWZ3RlFWTjJRQXJYN2JVdnl2SCJ9fSwiY3R4IjpbeyJkYXRhIjp7InRhcmdldE9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAxIl0sIm1mT3JpZ2luIjoiaHR0cHM6Ly90ZXN0ZmxleC5jeWJlcnNvdXJjZS5jb20ifSwidHlwZSI6Im1mLTAuMTEuMCJ9XSwiaXNzIjoiRmxleCBBUEkiLCJleHAiOjE2OTY1ODMzODEsImlhdCI6MTY5NjU4MjQ4MSwianRpIjoiVW42cXFscjBSYW1BVHE1MyJ9.G7va82_vgNSDaHWjpjez8s07lZa9Fj8Ilon9c7kzaiKLSeyt5EdxZoVhU5w0UgerQuy1pMP4YYQENEXzaScIHQAZI5o597jtn77_JkGs0W9BgSoyTjhMn8CiibMPg6fZva3NWyziUBkHpj33ulxtKp0oDz6hoy9DH1E8TVvtlI2wSCj8HvBsBP6envtKta_na66CQgv14FTkEpFx0lGrmOf84CjnZ2NW2f_kdXEmmZmyVVbYbQsRptX8Pi-IkdW4Ws30IFQvdeMgBH0znc_zR8Xl8VxHxrgOoHSAffHj0ejLnzzCWswhdIRA3l-e9dpBOAP2v6ednPG0BQnaBk2stA",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"200_-_Custom": {
								summary: "200 - Custom",
								value: {
									data: {
										tracker: {
											token: "track_d663e3f2-c6c5-47a1-8ded-a6dfc7b7dbd1",
											client: "sec_edeade52-46aa-483b-b87d-009d3ce41554",
											environment: "sandbox",
											state: "TRACKER_STARTED",
											intent: "CYBERSOURCE",
											mode: "payment",
											next_actions: {
												CYBERSOURCE: {
													kind: "PROCESS_TRANSIENT_TOKEN",
													request_id: "req_62629b03-a8ef-495d-a8c0-72903ff475ec",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 600000,
												},
												base_amount: {
													currency: "PKR",
													amount: 600000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
										},
										action: {
											token: "req_62629b03-a8ef-495d-a8c0-72903ff475ec",
											flex: {
												origin: "https://api-example.com",
												capture_context_jwt:
													"eyJraWQiOiJ6dSIsImFsZyI6IlJTMjU2In0.eyJmbHgiOnsicGF0aCI6Ii9mbGV4L3YyL3Rva2VucyIsImRhdGEiOiJrYkZyNk9wVU0rd1NJeGNoQ0ZVVFF4QUFFT0FmcXNBbisyRmE0TWtoZGZuVEcwZW9ZZnFxOVZJVXYvMXhVcE5kdUF4Tm1yd3dMeGYxdnE1VkdFR2FQTnFpWVNuZ3owOE5URldGYTc2S2haYWRqVVRNdWp6c2VOdm9SSFJ6WS8yTktGNmUiLCJvcmlnaW4iOiJodHRwczovL3Rlc3RmbGV4LmN5YmVyc291cmNlLmNvbSIsImp3ayI6eyJrdHkiOiJSU0EiLCJlIjoiQVFBQiIsInVzZSI6ImVuYyIsIm4iOiJnVDJHSTd2bFJSeVJ1elpibHBlV2hQQ0pzNi1oNnBsNFhtSU44am54SHpHbmtLSkVWQXo0NXpHcGZFMXVfaXhXbzRseFh5d3ppZGw4U0luS3E1ck5JdThxbkZBNzBaTXdvUFJUdkhhZlZ6RmhZNW42cGlvRnZ0M05WUVFzUEo3V0NNZXBBVl94c0ZEREtvNzdoZ0hISEdFZ3pETXNKRnF0RW5ZaTFUcFBDRzZhdnVscElxN3d3bUc0X1RVTzVyYU5Wdm9KdHBleUxvd1I1NjZqY2Job25LaHZnUl83VU55OWh2NTlicVh1ejlfQ3ZOVDRtZklUdF9rVTlCbkVqWTY1RlEtNmVwZEpmMVJsV0kwQ19HY2NNSHpZU0ZobUdaQ1RmdWhvbzdMTE43Tk4tclRqN3hIUmllU19ybUNRX002N2ZWSjRjX2Y1T0t0aldUQVhyRXotSHciLCJraWQiOiIwN2x4Z0RweHdRODFQVE5iSmFtQm5DN3VqcFFmb0t3MSJ9fSwiY3R4IjpbeyJkYXRhIjp7InRhcmdldE9yaWdpbnMiOlsiaHR0cHM6Ly9hcGktZXhhbXBsZS5jb20iXSwibWZPcmlnaW4iOiJodHRwczovL3Rlc3RmbGV4LmN5YmVyc291cmNlLmNvbSJ9LCJ0eXBlIjoibWYtMC4xMS4wIn1dLCJpc3MiOiJGbGV4IEFQSSIsImV4cCI6MTY5NjU4MzMxNywiaWF0IjoxNjk2NTgyNDE3LCJqdGkiOiJnNGFUVDBFVW45RUFlamZ6In0.YeX8huXHlj28HMNYG9bjvKQmc5i85JNUy65MEf5sFl0rHznDoXTXMNVI_CBctqHFMbv0fk0nQfaKOTW7D1ZQPUiCOwg66BSt5QMaOaDrJoSYbsv1QE1hTeoHEBkrqVnE-0Z3wk3zXhkSOH7e29Mh-fm5WI_RXsqnVv_gyzL0O6H1k-dqBQ9JBIFeuS3LLZ4_Q86IMwG1CEVVByZ-z7MelpJgmg15JINF8uFr5IUwWBE8qsK8FMC7dN9YPNhMpYPBcFUhbl_ARV3UTqQBzZQEMumELqP1BHHtalZAjiYQOomaurlAaIYTiMSpOJnxBFbjUnHWfVOILhNXVt7S-czt4w",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
						},
					},
				},
			},
			"400": {
				description: "400",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "string",
									nullable: true,
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
												example: "malformed request: EOF",
											},
											example: ["malformed request: EOF"],
										},
										message: {
											type: "string",
											example: "fail",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"400": {
								summary: "400",
								value: {
									data: null,
									status: {
										errors: ["malformed request: EOF"],
										message: "fail",
									},
								},
							},
						},
					},
				},
			},
			"403": {
				description: "403",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "string",
									nullable: true,
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
												example: "error performing action 'GENERATE_CAPTURE_CONTEXT': origin: must be a valid URL. ",
											},
											example: ["error performing action 'GENERATE_CAPTURE_CONTEXT': origin: must be a valid URL. "],
										},
										message: {
											type: "string",
											example: "fail",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"403": {
								summary: "403",
								value: {
									data: null,
									status: {
										errors: ["error performing action 'GENERATE_CAPTURE_CONTEXT': origin: must be a valid URL. "],
										message: "fail",
									},
								},
							},
						},
					},
				},
			},
		},
		parameters: [
			{
				name: "tracker",
				in: "path",
				required: true,
				schema: {
					type: "string",
				},
				description: "Unique identifier for tracker",
			},
		],
		security: [
			{
				BearerAuth: [],
			},
		],
	},
	"process-transient-token": {
		summary: "Process Transient Token",
		description:
			"Perform the `PROCESS_TRANSIENT_TOKEN` action. This decodes and processes the provided transient token JWT to setup payer authentication.\n\nThe transient token can be obtained once the customer has entered their card details (PAN, expiry and CVV/CVN). Please refer to the Cybersource [Microform](https://developer.cybersource.com/docs/cybs/en-us/digital-accept-flex/developer/all/rest/digital-accept-flex/microform-integ-v2.html) documentation for details.\n\nThe response for this action yields the card details along with the `payer_authentication_setup` object which carries the `access_token` and the `device_data_collection_url`. These are necessary for collecting the user's device data and passing the resulting fingerprint in the enrollment step.",
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							payload: {
								type: "object",
								properties: {
									payment_method: {
										type: "object",
										properties: {
											flex: {
												type: "object",
												properties: {
													transient_token_jwt: {
														type: "string",
														example:
															"eyJraWQiOiIwOGlUMXJQYkFCMGliTXdBYzduMmVLd3lwZFVsWWszZiIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjp7ImV4cGlyYXRpb25ZZWFyIjoiMjAyMyIsIm51bWJlciI6IjUyMDAwMFhYWFhYWDEwOTYiLCJleHBpcmF0aW9uTW9udGgiOiIxMiIsInR5cGUiOiIwMDIifSwiaXNzIjoiRmxleC8wOCIsImV4cCI6MTY5NjYxODI1MCwidHlwZSI6Im1mLTAuMTEuMCIsImlhdCI6MTY5NjYxNzM1MCwianRpIjoiMUU1NlhTNEY1S0VCUVE4TTZIOE0wTlc1SVI4QjdKS0VZTjdPVVU5NTc5TVIwVFk1U1FLRTY1MjA1NzBBQUIxMyIsImNvbnRlbnQiOnsicGF5bWVudEluZm9ybWF0aW9uIjp7ImNhcmQiOnsiZXhwaXJhdGlvblllYXIiOnsidmFsdWUiOiIyMDIzIn0sIm51bWJlciI6eyJtYXNrZWRWYWx1ZSI6IlhYWFhYWFhYWFhYWDEwOTYiLCJiaW4iOiI1MjAwMDAifSwic2VjdXJpdHlDb2RlIjp7fSwiZXhwaXJhdGlvbk1vbnRoIjp7InZhbHVlIjoiMTIifSwidHlwZSI6eyJ2YWx1ZSI6IjAwMiJ9fX19fQ.UXynZWMX-269Okkq6me3sCkqorfSJEA_U634-GaDRfZUhQCJ-c7RZIW6pzB-Du1v1-MaRwAN8K_HZnDrjnmwsUw3bQGpqCSYRnwPU9oNURkoWiTm5bZu1PtRuGgid3UvZ77C7fPV_8NHqxLv9WRx6W_QYYk0J9xKulql6PVFDS0Mmpew0tkQfKlGda8u995seV24OPJa7UOp0oWzaJYMmrEP9HoGwQJo2EKYpIko_9eqaKxFQDJ9VOG64IdfIR0NxpCiKGL9Yyf9V5RRZclM0BFu8CvFTmpGW4890haE0yINapgg7mfjUMDewk803zacnNuRLTueMvy2l4DE8NGxag",
													},
												},
												required: ["transient_token_jwt"],
											},
										},
										required: ["flex"],
									},
								},
								required: ["payment_method"],
							},
						},
						required: ["payload"],
					},
					example: {
						payload: {
							payment_method: {
								flex: {
									transient_token_jwt:
										"eyJraWQiOiIwOGlUMXJQYkFCMGliTXdBYzduMmVLd3lwZFVsWWszZiIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjp7ImV4cGlyYXRpb25ZZWFyIjoiMjAyMyIsIm51bWJlciI6IjUyMDAwMFhYWFhYWDEwOTYiLCJleHBpcmF0aW9uTW9udGgiOiIxMiIsInR5cGUiOiIwMDIifSwiaXNzIjoiRmxleC8wOCIsImV4cCI6MTY5NjYxODI1MCwidHlwZSI6Im1mLTAuMTEuMCIsImlhdCI6MTY5NjYxNzM1MCwianRpIjoiMUU1NlhTNEY1S0VCUVE4TTZIOE0wTlc1SVI4QjdKS0VZTjdPVVU5NTc5TVIwVFk1U1FLRTY1MjA1NzBBQUIxMyIsImNvbnRlbnQiOnsicGF5bWVudEluZm9ybWF0aW9uIjp7ImNhcmQiOnsiZXhwaXJhdGlvblllYXIiOnsidmFsdWUiOiIyMDIzIn0sIm51bWJlciI6eyJtYXNrZWRWYWx1ZSI6IlhYWFhYWFhYWFhYWDEwOTYiLCJiaW4iOiI1MjAwMDAifSwic2VjdXJpdHlDb2RlIjp7fSwiZXhwaXJhdGlvbk1vbnRoIjp7InZhbHVlIjoiMTIifSwidHlwZSI6eyJ2YWx1ZSI6IjAwMiJ9fX19fQ.UXynZWMX-269Okkq6me3sCkqorfSJEA_U634-GaDRfZUhQCJ-c7RZIW6pzB-Du1v1-MaRwAN8K_HZnDrjnmwsUw3bQGpqCSYRnwPU9oNURkoWiTm5bZu1PtRuGgid3UvZ77C7fPV_8NHqxLv9WRx6W_QYYk0J9xKulql6PVFDS0Mmpew0tkQfKlGda8u995seV24OPJa7UOp0oWzaJYMmrEP9HoGwQJo2EKYpIko_9eqaKxFQDJ9VOG64IdfIR0NxpCiKGL9Yyf9V5RRZclM0BFu8CvFTmpGW4890haE0yINapgg7mfjUMDewk803zacnNuRLTueMvy2l4DE8NGxag",
								},
							},
						},
					},
				},
			},
		},
		responses: {
			"200": {
				description: "200",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "object",
									properties: {
										tracker: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "track_dccdef16-008e-4fae-81cc-1b7d81bf6c44",
												},
												client: {
													type: "string",
													example: "sec_edeade52-46aa-483b-b87d-009d3ce41554",
												},
												environment: {
													type: "string",
													example: "sandbox",
												},
												state: {
													type: "string",
													example: "TRACKER_STARTED",
												},
												intent: {
													type: "string",
													example: "CYBERSOURCE",
												},
												mode: {
													type: "string",
													example: "payment",
												},
												next_actions: {
													type: "object",
													properties: {
														CYBERSOURCE: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "PAYER_AUTH_ENROLLMENT",
																},
																request_id: {
																	type: "string",
																	example: "req_f3810877-fc7c-45ca-bc6c-f2f00e72cb1a",
																},
															},
															required: ["kind", "request_id"],
														},
													},
													required: ["CYBERSOURCE"],
												},
												purchase_totals: {
													type: "object",
													properties: {
														quote_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 600000,
																},
															},
															required: ["currency", "amount"],
														},
														base_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 600000,
																},
															},
															required: ["currency", "amount"],
														},
														conversion_rate: {
															type: "object",
															properties: {
																base_currency: {
																	type: "string",
																	example: "PKR",
																},
																quote_currency: {
																	type: "string",
																	example: "PKR",
																},
																rate: {
																	type: "integer",
																	example: 1,
																},
															},
															required: ["base_currency", "quote_currency", "rate"],
														},
													},
													required: ["quote_amount", "base_amount", "conversion_rate"],
												},
											},
											required: ["token", "client", "environment", "state", "intent", "mode", "next_actions", "purchase_totals"],
										},
										action: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "req_f3810877-fc7c-45ca-bc6c-f2f00e72cb1a",
												},
												payment_method: {
													type: "object",
													properties: {
														token: {
															type: "string",
															example: "card_880b612a-ec45-4768-abd0-6b645c892e48",
														},
														expiration_month: {
															type: "string",
															example: "12",
														},
														expiration_year: {
															type: "string",
															example: "2023",
														},
														card_type_code: {
															type: "string",
															example: "002",
														},
														card_type: {
															type: "string",
															example: "Mastercard",
														},
														bin_number: {
															type: "string",
															example: "520000",
														},
														last_four: {
															type: "string",
															example: "1096",
														},
													},
													required: [
														"token",
														"expiration_month",
														"expiration_year",
														"card_type_code",
														"card_type",
														"bin_number",
														"last_four",
													],
												},
												payer_authentication_setup: {
													type: "object",
													properties: {
														access_token: {
															type: "string",
															example:
																"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhNjU3ZWQ1NS0wZTI2LTQzNzctOWM0My1lZGJmNzA0OGRmYjQiLCJpYXQiOjE2OTY2MTc1NTcsImlzcyI6IjVkZDgzYmYwMGU0MjNkMTQ5OGRjYmFjYSIsImV4cCI6MTY5NjYyMTE1NywiT3JnVW5pdElkIjoiNjI0YmYwNjVjZDhmMTM3MzVkNzYwYzc5IiwiUmVmZXJlbmNlSWQiOiIyZjY2ZWNkMy04OGY0LTQ3NTQtYWE2NS0zYjgyYTE4YzQ1MDYifQ.pN2SGCuTmmwKQTSNR3xpxQtxgYjQse7IjSmvqGNuDyU",
														},
														device_data_collection_url: {
															type: "string",
															example: "https://centinelapistag.cardinalcommerce.com/V1/Cruise/Collect",
														},
													},
													required: ["access_token", "device_data_collection_url"],
												},
											},
											required: ["token", "payment_method", "payer_authentication_setup"],
										},
									},
									required: ["tracker", "action"],
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
											example: "success",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"200": {
								summary: "200",
								value: {
									data: {
										tracker: {
											token: "track_dccdef16-008e-4fae-81cc-1b7d81bf6c44",
											client: "sec_edeade52-46aa-483b-b87d-009d3ce41554",
											environment: "sandbox",
											state: "TRACKER_STARTED",
											intent: "CYBERSOURCE",
											mode: "payment",
											next_actions: {
												CYBERSOURCE: {
													kind: "PAYER_AUTH_ENROLLMENT",
													request_id: "req_f3810877-fc7c-45ca-bc6c-f2f00e72cb1a",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 600000,
												},
												base_amount: {
													currency: "PKR",
													amount: 600000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
										},
										action: {
											token: "req_f3810877-fc7c-45ca-bc6c-f2f00e72cb1a",
											payment_method: {
												token: "card_880b612a-ec45-4768-abd0-6b645c892e48",
												expiration_month: "12",
												expiration_year: "2023",
												card_type_code: "002",
												card_type: "Mastercard",
												bin_number: "520000",
												last_four: "1096",
											},
											payer_authentication_setup: {
												access_token:
													"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhNjU3ZWQ1NS0wZTI2LTQzNzctOWM0My1lZGJmNzA0OGRmYjQiLCJpYXQiOjE2OTY2MTc1NTcsImlzcyI6IjVkZDgzYmYwMGU0MjNkMTQ5OGRjYmFjYSIsImV4cCI6MTY5NjYyMTE1NywiT3JnVW5pdElkIjoiNjI0YmYwNjVjZDhmMTM3MzVkNzYwYzc5IiwiUmVmZXJlbmNlSWQiOiIyZjY2ZWNkMy04OGY0LTQ3NTQtYWE2NS0zYjgyYTE4YzQ1MDYifQ.pN2SGCuTmmwKQTSNR3xpxQtxgYjQse7IjSmvqGNuDyU",
												device_data_collection_url: "https://centinelapistag.cardinalcommerce.com/V1/Cruise/Collect",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
						},
					},
				},
			},
			"403": {
				description: "403",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "string",
									nullable: true,
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
												example: "error performing action 'PROCESS_TRANSIENT_TOKEN': the given key ID was not found in the JWKS ",
											},
											example: ["error performing action 'PROCESS_TRANSIENT_TOKEN': the given key ID was not found in the JWKS "],
										},
										message: {
											type: "string",
											example: "fail",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"403": {
								summary: "403",
								value: {
									data: null,
									status: {
										errors: ["error performing action 'PROCESS_TRANSIENT_TOKEN': the given key ID was not found in the JWKS "],
										message: "fail",
									},
								},
							},
						},
					},
				},
			},
		},
		parameters: [
			{
				name: "tracker",
				in: "path",
				required: true,
				schema: {
					type: "string",
				},
				description: "Unique identifier for tracker",
			},
		],
		security: [
			{
				BearerAuth: [],
			},
		],
	},
	"payer-authentication-setup": {
		summary: "Payer Authentication Setup",
		description:
			"Perform the `PAYER_AUTHENTICATION_SETUP` action. This action is the starting point for a tracker that has `raw` or `tms` entry modes. It is the entry point for a payment flow where we setup the 3DS enrollment journey for the customer.\n\nExplore the example payloads to see how to pass the payment method details for `raw` and `tms` entry modes. For `flex` you may pass an empty body `{}`.\n\nThe response for this action yields the card details along with the `payer_authentication_setup` object which carries the `access_token` and the `device_data_collection_url`. These are necessary for collecting the user's device data and passing the resulting fingerprint in the enrollment step.",
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							payload: {
								type: "object",
								properties: {
									payment_method: {
										type: "object",
										properties: {
											card: {
												type: "object",
												properties: {
													card_number: {
														type: "string",
														example: "5200000000001096",
													},
													expiration_month: {
														type: "string",
														example: "12",
													},
													expiration_year: {
														type: "string",
														example: "2028",
													},
													cvv: {
														type: "string",
														example: "123",
													},
												},
												required: ["card_number", "expiration_month", "expiration_year", "cvv"],
											},
										},
										required: ["card"],
									},
								},
								required: ["payment_method"],
							},
						},
						required: ["payload"],
					},
					example: {
						payload: {
							payment_method: {
								card: {
									card_number: "5200000000001096",
									expiration_month: "12",
									expiration_year: "2028",
									cvv: "123",
								},
							},
						},
					},
				},
			},
		},
		responses: {
			"200": {
				description: "200 - raw",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "object",
									properties: {
										tracker: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "track_fabda958-1f90-4ba5-8963-295708a2c7b0",
												},
												client: {
													type: "string",
													example: "sec_98a7ebf8-87da-4587-8d72-634a592c3111",
												},
												environment: {
													type: "string",
													example: "development",
												},
												state: {
													type: "string",
													example: "TRACKER_STARTED",
												},
												intent: {
													type: "string",
													example: "CYBERSOURCE",
												},
												mode: {
													type: "string",
													example: "payment-raw",
												},
												customer: {
													type: "string",
													example: "guest_0eba3a92-3069-4839-898c-8a3f8f636108",
												},
												next_actions: {
													type: "object",
													properties: {
														CYBERSOURCE: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "PAYER_AUTH_ENROLLMENT",
																},
																request_id: {
																	type: "string",
																	example: "req_db4e9c41-4c02-46fc-a92f-959f67664ab7",
																},
															},
															required: ["kind", "request_id"],
														},
													},
													required: ["CYBERSOURCE"],
												},
												purchase_totals: {
													type: "object",
													properties: {
														quote_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 10050,
																},
															},
															required: ["currency", "amount"],
														},
														base_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 10050,
																},
															},
															required: ["currency", "amount"],
														},
														conversion_rate: {
															type: "object",
															properties: {
																base_currency: {
																	type: "string",
																	example: "PKR",
																},
																quote_currency: {
																	type: "string",
																	example: "PKR",
																},
																rate: {
																	type: "integer",
																	example: 1,
																},
															},
															required: ["base_currency", "quote_currency", "rate"],
														},
													},
													required: ["quote_amount", "base_amount", "conversion_rate"],
												},
												metadata: {
													type: "object",
													properties: {},
												},
											},
											required: [
												"token",
												"client",
												"environment",
												"state",
												"intent",
												"mode",
												"customer",
												"next_actions",
												"purchase_totals",
												"metadata",
											],
										},
										action: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "req_db4e9c41-4c02-46fc-a92f-959f67664ab7",
												},
												payment_method: {
													type: "object",
													properties: {
														token: {
															type: "string",
															example: "card_139ff474-6024-4bd5-ad52-3bab42870ae3",
														},
														expiration_month: {
															type: "string",
															example: "12",
														},
														expiration_year: {
															type: "string",
															example: "2028",
														},
														card_type_code: {
															type: "string",
															example: "002",
														},
														card_type: {
															type: "string",
															example: "Mastercard",
														},
														bin_number: {
															type: "string",
															example: "520000",
														},
														last_four: {
															type: "string",
															example: "1096",
														},
													},
													required: [
														"token",
														"expiration_month",
														"expiration_year",
														"card_type_code",
														"card_type",
														"bin_number",
														"last_four",
													],
												},
												payer_authentication_setup: {
													type: "object",
													properties: {
														access_token: {
															type: "string",
															example:
																"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmY2JkOWY5Zi0zOTM0LTQ5MTctOWNjMS0wYmQ3MDY0ZThmZTkiLCJpYXQiOjE3MDczODIxOTQsImlzcyI6IjVkZDgzYmYwMGU0MjNkMTQ5OGRjYmFjYSIsImV4cCI6MTcwNzM4NTc5NCwiT3JnVW5pdElkIjoiNjI0YmYwNjVjZDhmMTM3MzVkNzYwYzc5IiwiUmVmZXJlbmNlSWQiOiJkNjhkYjQyNC0wYmE4LTQ3ODctODg0Mi0xNDIzYTUyOTI0YzEifQ.nYJEEiEkYiT-iDGfOisdLsTg_O3nWzD-t9QSb_OS0YE",
														},
														device_data_collection_url: {
															type: "string",
															example: "https://centinelapistag.cardinalcommerce.com/V1/Cruise/Collect",
														},
													},
													required: ["access_token", "device_data_collection_url"],
												},
											},
											required: ["token", "payment_method", "payer_authentication_setup"],
										},
									},
									required: ["tracker", "action"],
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
											example: "success",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"200_-_raw": {
								summary: "200 - raw",
								value: {
									data: {
										tracker: {
											token: "track_fabda958-1f90-4ba5-8963-295708a2c7b0",
											client: "sec_98a7ebf8-87da-4587-8d72-634a592c3111",
											environment: "development",
											state: "TRACKER_STARTED",
											intent: "CYBERSOURCE",
											mode: "payment-raw",
											customer: "guest_0eba3a92-3069-4839-898c-8a3f8f636108",
											next_actions: {
												CYBERSOURCE: {
													kind: "PAYER_AUTH_ENROLLMENT",
													request_id: "req_db4e9c41-4c02-46fc-a92f-959f67664ab7",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 10050,
												},
												base_amount: {
													currency: "PKR",
													amount: 10050,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										action: {
											token: "req_db4e9c41-4c02-46fc-a92f-959f67664ab7",
											payment_method: {
												token: "card_139ff474-6024-4bd5-ad52-3bab42870ae3",
												expiration_month: "12",
												expiration_year: "2028",
												card_type_code: "002",
												card_type: "Mastercard",
												bin_number: "520000",
												last_four: "1096",
											},
											payer_authentication_setup: {
												access_token:
													"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmY2JkOWY5Zi0zOTM0LTQ5MTctOWNjMS0wYmQ3MDY0ZThmZTkiLCJpYXQiOjE3MDczODIxOTQsImlzcyI6IjVkZDgzYmYwMGU0MjNkMTQ5OGRjYmFjYSIsImV4cCI6MTcwNzM4NTc5NCwiT3JnVW5pdElkIjoiNjI0YmYwNjVjZDhmMTM3MzVkNzYwYzc5IiwiUmVmZXJlbmNlSWQiOiJkNjhkYjQyNC0wYmE4LTQ3ODctODg0Mi0xNDIzYTUyOTI0YzEifQ.nYJEEiEkYiT-iDGfOisdLsTg_O3nWzD-t9QSb_OS0YE",
												device_data_collection_url: "https://centinelapistag.cardinalcommerce.com/V1/Cruise/Collect",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"200_-_tms": {
								summary: "200 - tms",
								value: {
									data: {
										tracker: {
											token: "track_61414d0f-7740-4297-903a-3aca4b04bca8",
											client: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
											environment: "sandbox",
											state: "TRACKER_STARTED",
											intent: "CYBERSOURCE",
											mode: "payment",
											entry_mode: "tms",
											customer: "user_d75110e4-f52e-464d-96bd-490f75e7fc71",
											next_actions: {
												CYBERSOURCE: {
													kind: "PAYER_AUTH_ENROLLMENT",
													request_id: "req_ac4307d3-be62-4ea7-ab5f-e950125940df",
												},
												MPGS: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 600000,
												},
												base_amount: {
													currency: "PKR",
													amount: 600000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										action: {
											token: "req_ac4307d3-be62-4ea7-ab5f-e950125940df",
											payment_method: {
												token: "card_f116867e-955a-4d03-802d-1f4d06fe1921",
												pointer: "inst_ad4b0519-c700-4c7f-8ed1-e0f06944bcab",
												expiration_month: "12",
												expiration_year: "2025",
												card_type_code: "001",
												card_type: "Visa",
												bin_number: "411111",
												last_four: "1111",
											},
											payer_authentication_setup: {
												access_token:
													"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjNjc0MjE5Yy0zMTdhLTQzOTYtOTBmMC02MzZlMGI2NTFhMTkiLCJpYXQiOjE3MjIzNDE0MDQsImlzcyI6IjVkZDgzYmYwMGU0MjNkMTQ5OGRjYmFjYSIsImV4cCI6MTcyMjM0NTAwNCwiT3JnVW5pdElkIjoiNjI0YmYwNjVjZDhmMTM3MzVkNzYwYzc5IiwiUmVmZXJlbmNlSWQiOiJlYzZlN2I1Zi00MzViLTQyOGEtOWQ5Ni1mNmI2NjNmNWQ1YjQifQ.q7KFjFdElxZqejuI5PkyrENTyw_8WIIgfl1semzQYHs",
												device_data_collection_url: "https://centinelapistag.cardinalcommerce.com/V1/Cruise/Collect",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
						},
					},
				},
			},
			"401": {
				description: "401",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "string",
									nullable: true,
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
												example: "unauthorized",
											},
											example: [
												"unauthorized",
												"strategies/union: [strategies/jwt: token is expired, strategies/jwt: token is expired, strategies/api_key: merchant api key not found in the request header, strategies/secret: merchant webhook secret not found in the request header, strategies/tbt: decode error: illegal base64 data at input byte 36]",
											],
										},
										message: {
											type: "string",
											example: "fail",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"401": {
								summary: "401",
								value: {
									data: null,
									status: {
										errors: [
											"unauthorized",
											"strategies/union: [strategies/jwt: token is expired, strategies/jwt: token is expired, strategies/api_key: merchant api key not found in the request header, strategies/secret: merchant webhook secret not found in the request header, strategies/tbt: decode error: illegal base64 data at input byte 36]",
										],
										message: "fail",
									},
								},
							},
						},
					},
				},
			},
		},
		parameters: [
			{
				name: "tracker",
				in: "path",
				required: true,
				schema: {
					type: "string",
				},
				description: "Unique identifier for tracker",
			},
		],
		security: [
			{
				BearerAuth: [],
			},
		],
	},
	enrollment: {
		summary: "Enrollment",
		description:
			'Perform the `PAYER_AUTH_ENROLLMENT` action. This marks the start of the payer authentication process. For details please refer to the Cybersource [Payer Authentication](https://developer.cybersource.com/docs/cybs/en-us/payer-authentication/developer/all/so/payer-auth/pa-about-guide.html) documentation.\n\nAs the documentation states, there are 5 steps for the complete process. Note that Steps 1, 3, and 5 are to be performed server side and are handled by the Safepay API. You will need to perform [Step 2: Device Data Collection](https://developer.cybersource.com/docs/cybs/en-us/payer-authentication/developer/all/so/payer-auth/pa2-ccdc-ddc-intro.html) before calling this action. And you will need to perform [Step 4: Step-Up Iframe](https://developer.cybersource.com/docs/cybs/en-us/payer-authentication/developer/all/so/payer-auth/pa2-ccdc-stepup-frame-intro.html) after receiving the response for this action.\n\nTo succeed enrollment and trigger liability shift you must pass the `device_fingerprint_session_id` which you will obtain after performing [Step 2: Device Data Collection](https://developer.cybersource.com/docs/cybs/en-us/payer-authentication/developer/all/so/payer-auth/pa2-ccdc-ddc-intro.html).\n\nYou must provide the customer\'s billing details under `payload.billing`:\n\nIf you do not have this information, you may instruct the API to generate synthetic data by making use of the `use_synthetic` field as shown below:\n\n```json\n"payload": {\n  ...\n  "billing": {\n    "use_synthetic": true\n  }\n  ...\n}\n```\n\nYou must also provide authorization configuration under `payload.authorization`. Additional configuration options will be made available in the future. We recommend this default:\n\nYou must also provide payer authentication configuration under `payload.authentication_setup`:\n\nYou must also authenticate using JWT that represents the guest user. Refer to the documentation for *API Authentication*.\n\nNote that while `device_fingerprint_session_id` is optional, not passing it will default to 3DS v1 on Cybersource\'s end which they have dropped support for. Therefore to ensure successful enrollment and liability shift, you should include this in the request.\n\n### Interpreting the enrollment response\n\nIf enrollment is successful, you should obtain the appropriate ECI values and the `access_token` in the `payer_authentication_enrollment` object.\n\nThe response will also yield an `authentication_status` field that may take the following values. Here is how to interpret these:\n\nThe values for `eci` or `eci_raw` denote whether enrollment was successful:\n\nRendering the issuer step-up challenge is documented in [Step 4: Step-Up Iframe](https://developer.cybersource.com/docs/cybs/en-us/payer-authentication/developer/all/so/payer-auth/pa2-ccdc-stepup-frame-intro.html).\n\nThe user will go through the 3DS flow by entering the OTP code received on their phone (or alternative methods proposed by the issuer). On a successful response, the user will be redirected to Safepay and then ultimately to the `success_url` that you have provided. Similarly, failures will redirect to the `failure_url`.\n\nReturning to the `success_url` yields a successful authorization. Note that for the frictionless flow you may proceed to authorization.',
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							payload: {
								type: "object",
								properties: {
									billing: {
										type: "object",
										properties: {
											street_1: {
												type: "string",
												example: "St 1",
											},
											street_2: {
												type: "string",
												example: "",
											},
											city: {
												type: "string",
												example: "Islamabad",
											},
											state: {
												type: "string",
												example: "",
											},
											postal_code: {
												type: "string",
												example: "44000",
											},
											country: {
												type: "string",
												example: "PK",
											},
										},
										required: ["street_1", "street_2", "city", "state", "postal_code", "country"],
									},
									authorization: {
										type: "object",
										properties: {
											do_capture: {
												type: "boolean",
												example: false,
											},
										},
										required: ["do_capture"],
									},
									authentication_setup: {
										type: "object",
										properties: {
											success_url: {
												type: "string",
												example: "https://dev.api.getsafepay.com/drops/threeds/success",
											},
											failure_url: {
												type: "string",
												example: "https://dev.api.getsafepay.com/drops/threeds/failure",
											},
											device_fingerprint_session_id: {
												type: "string",
												example: "d7a63ecf-d635-4641-9533-2ad5a727611f",
											},
										},
										required: ["success_url", "failure_url", "device_fingerprint_session_id"],
									},
								},
								required: ["billing", "authorization", "authentication_setup"],
							},
						},
						required: ["payload"],
					},
					example: {
						payload: {
							billing: {
								street_1: "St 1",
								street_2: "",
								city: "Islamabad",
								state: "",
								postal_code: "44000",
								country: "PK",
							},
							authorization: {
								do_capture: false,
							},
							authentication_setup: {
								success_url: "https://dev.api.getsafepay.com/drops/threeds/success",
								failure_url: "https://dev.api.getsafepay.com/drops/threeds/failure",
								device_fingerprint_session_id: "d7a63ecf-d635-4641-9533-2ad5a727611f",
							},
						},
					},
				},
			},
		},
		responses: {
			"200": {
				description: "200 - Step-up",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "object",
									properties: {
										tracker: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "track_b65ba6ae-2b11-4606-920b-24d70a2de5c2",
												},
												client: {
													type: "string",
													example: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
												},
												environment: {
													type: "string",
													example: "sandbox",
												},
												state: {
													type: "string",
													example: "TRACKER_ENROLLED",
												},
												intent: {
													type: "string",
													example: "CYBERSOURCE",
												},
												mode: {
													type: "string",
													example: "payment",
												},
												entry_mode: {
													type: "string",
													example: "raw",
												},
												customer: {
													type: "string",
													example: "guest_ed01c60e-e3da-4426-b211-a3e57dd1056f",
												},
												next_actions: {
													type: "object",
													properties: {
														CYBERSOURCE: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "PAYER_AUTH_VALIDATION",
																},
																request_id: {
																	type: "string",
																	example: "req_5df341f9-bad5-423e-806a-350c8fe4d85e",
																},
															},
															required: ["kind", "request_id"],
														},
														MPGS: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "CREATE_SESSION",
																},
															},
															required: ["kind"],
														},
													},
													required: ["CYBERSOURCE", "MPGS"],
												},
												purchase_totals: {
													type: "object",
													properties: {
														quote_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 500000,
																},
															},
															required: ["currency", "amount"],
														},
														base_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 500000,
																},
															},
															required: ["currency", "amount"],
														},
														conversion_rate: {
															type: "object",
															properties: {
																base_currency: {
																	type: "string",
																	example: "PKR",
																},
																quote_currency: {
																	type: "string",
																	example: "PKR",
																},
																rate: {
																	type: "integer",
																	example: 1,
																},
															},
															required: ["base_currency", "quote_currency", "rate"],
														},
													},
													required: ["quote_amount", "base_amount", "conversion_rate"],
												},
												metadata: {
													type: "object",
													properties: {},
												},
											},
											required: [
												"token",
												"client",
												"environment",
												"state",
												"intent",
												"mode",
												"entry_mode",
												"customer",
												"next_actions",
												"purchase_totals",
												"metadata",
											],
										},
										action: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "req_5df341f9-bad5-423e-806a-350c8fe4d85e",
												},
												payment_method: {
													type: "object",
													properties: {
														token: {
															type: "string",
															example: "card_5acccafc-3597-4a75-89d4-14803d52ea12",
														},
														expiration_month: {
															type: "string",
															example: "12",
														},
														expiration_year: {
															type: "string",
															example: "2028",
														},
														card_type_code: {
															type: "string",
															example: "002",
														},
														card_type: {
															type: "string",
															example: "Mastercard",
														},
														bin_number: {
															type: "string",
															example: "520000",
														},
														last_four: {
															type: "string",
															example: "1096",
														},
													},
													required: [
														"token",
														"expiration_month",
														"expiration_year",
														"card_type_code",
														"card_type",
														"bin_number",
														"last_four",
													],
												},
												payer_authentication_enrollment: {
													type: "object",
													properties: {
														rid: {
															type: "string",
															example: "7306963143896843404951",
														},
														enrollment_status: {
															type: "string",
															example: "PENDING_AUTHENTICATION",
														},
														veres_enrolled: {
															type: "string",
															example: "Y",
														},
														veres_enrolled_description: {
															type: "string",
															example: "Card enrolled; you must authenticate. Liability shift.",
														},
														access_token: {
															type: "string",
															example:
																"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjNDk0NmMxMS1mZmNiLTQzZTYtOTUwNS03ZGFmNDk1ZjBiMmUiLCJpYXQiOjE3MzA2OTYzMTQsImlzcyI6IjVkZDgzYmYwMGU0MjNkMTQ5OGRjYmFjYSIsImV4cCI6MTczMDY5OTkxNCwiT3JnVW5pdElkIjoiNjI0YmYwNjVjZDhmMTM3MzVkNzYwYzc5IiwiUGF5bG9hZCI6eyJBQ1NVcmwiOiJodHRwczovLzBtZXJjaGFudGFjc3N0YWcuY2FyZGluYWxjb21tZXJjZS5jb20vTWVyY2hhbnRBQ1NXZWIvY3JlcS5qc3AiLCJQYXlsb2FkIjoiZXlKdFpYTnpZV2RsVkhsd1pTSTZJa05TWlhFaUxDSnRaWE56WVdkbFZtVnljMmx2YmlJNklqSXVNUzR3SWl3aWRHaHlaV1ZFVTFObGNuWmxjbFJ5WVc1elNVUWlPaUpoT1RVM1pETTBZUzA0TkRBMUxUUmlPRFl0WWpBNVpTMWlNVE01TW1NMVlUaGtNamtpTENKaFkzTlVjbUZ1YzBsRUlqb2lPVGhsTVRBeVpXRXRZekk1WVMwME1qZ3pMV0UxTXpBdFpHRXdNVFE0WWpnMVpUWTVJaXdpWTJoaGJHeGxibWRsVjJsdVpHOTNVMmw2WlNJNklqQXlJbjAiLCJUcmFuc2FjdGlvbklkIjoiUzI1SUttRDlpVVZlNGprcVAxZTAifSwiT2JqZWN0aWZ5UGF5bG9hZCI6dHJ1ZSwiUmV0dXJuVXJsIjoiaHR0cHM6Ly9zYW5kYm94LmFwaS5nZXRzYWZlcGF5LmNvbS9vcmRlci9wYXltZW50cy92My90cmFja19iNjViYTZhZS0yYjExLTQ2MDYtOTIwYi0yNGQ3MGEyZGU1YzIvdGhyZWUtZC1zZWN1cmU_dG9rZW49cmVxXzVkZjM0MWY5LWJhZDUtNDIzZS04MDZhLTM1MGM4ZmU0ZDg1ZSZ1c2VyPWd1ZXN0X2VkMDFjNjBlLWUzZGEtNDQyNi1iMjExLWEzZTU3ZGQxMDU2ZiZkb19jYXB0dXJlPWZhbHNlJmRvX2NhcmRfb25fZmlsZT1mYWxzZSZ1c2Vfb25jZT1mYWxzZSZpbnN0cnVtZW50X3Rva2VuPSJ9.fuEepCd0g8Rvy_sUGZVjd48mjcmeHF-hqqRGJZ3jMQI",
														},
														step_up_url: {
															type: "string",
															example: "https://centinelapistag.cardinalcommerce.com/V2/Cruise/StepUp",
														},
														challenge_window_size: {
															type: "string",
															example: "02",
														},
														challenge_window_size_description: {
															type: "string",
															example: "390 x 400",
														},
														specification_version: {
															type: "string",
															example: "2.1.0",
														},
														authentication_status: {
															type: "string",
															example: "REQUIRED",
														},
														authentication_transaction_id: {
															type: "string",
															example: "S25IKmD9iUVe4jkqP1e0",
														},
													},
													required: [
														"rid",
														"enrollment_status",
														"veres_enrolled",
														"veres_enrolled_description",
														"access_token",
														"step_up_url",
														"challenge_window_size",
														"challenge_window_size_description",
														"specification_version",
														"authentication_status",
														"authentication_transaction_id",
													],
												},
											},
											required: ["token", "payment_method", "payer_authentication_enrollment"],
										},
									},
									required: ["tracker", "action"],
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
											example: "success",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"200_-_Step-up": {
								summary: "200 - Step-up",
								value: {
									data: {
										tracker: {
											token: "track_b65ba6ae-2b11-4606-920b-24d70a2de5c2",
											client: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
											environment: "sandbox",
											state: "TRACKER_ENROLLED",
											intent: "CYBERSOURCE",
											mode: "payment",
											entry_mode: "raw",
											customer: "guest_ed01c60e-e3da-4426-b211-a3e57dd1056f",
											next_actions: {
												CYBERSOURCE: {
													kind: "PAYER_AUTH_VALIDATION",
													request_id: "req_5df341f9-bad5-423e-806a-350c8fe4d85e",
												},
												MPGS: {
													kind: "CREATE_SESSION",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 500000,
												},
												base_amount: {
													currency: "PKR",
													amount: 500000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										action: {
											token: "req_5df341f9-bad5-423e-806a-350c8fe4d85e",
											payment_method: {
												token: "card_5acccafc-3597-4a75-89d4-14803d52ea12",
												expiration_month: "12",
												expiration_year: "2028",
												card_type_code: "002",
												card_type: "Mastercard",
												bin_number: "520000",
												last_four: "1096",
											},
											payer_authentication_enrollment: {
												rid: "7306963143896843404951",
												enrollment_status: "PENDING_AUTHENTICATION",
												veres_enrolled: "Y",
												veres_enrolled_description: "Card enrolled; you must authenticate. Liability shift.",
												access_token:
													"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjNDk0NmMxMS1mZmNiLTQzZTYtOTUwNS03ZGFmNDk1ZjBiMmUiLCJpYXQiOjE3MzA2OTYzMTQsImlzcyI6IjVkZDgzYmYwMGU0MjNkMTQ5OGRjYmFjYSIsImV4cCI6MTczMDY5OTkxNCwiT3JnVW5pdElkIjoiNjI0YmYwNjVjZDhmMTM3MzVkNzYwYzc5IiwiUGF5bG9hZCI6eyJBQ1NVcmwiOiJodHRwczovLzBtZXJjaGFudGFjc3N0YWcuY2FyZGluYWxjb21tZXJjZS5jb20vTWVyY2hhbnRBQ1NXZWIvY3JlcS5qc3AiLCJQYXlsb2FkIjoiZXlKdFpYTnpZV2RsVkhsd1pTSTZJa05TWlhFaUxDSnRaWE56WVdkbFZtVnljMmx2YmlJNklqSXVNUzR3SWl3aWRHaHlaV1ZFVTFObGNuWmxjbFJ5WVc1elNVUWlPaUpoT1RVM1pETTBZUzA0TkRBMUxUUmlPRFl0WWpBNVpTMWlNVE01TW1NMVlUaGtNamtpTENKaFkzTlVjbUZ1YzBsRUlqb2lPVGhsTVRBeVpXRXRZekk1WVMwME1qZ3pMV0UxTXpBdFpHRXdNVFE0WWpnMVpUWTVJaXdpWTJoaGJHeGxibWRsVjJsdVpHOTNVMmw2WlNJNklqQXlJbjAiLCJUcmFuc2FjdGlvbklkIjoiUzI1SUttRDlpVVZlNGprcVAxZTAifSwiT2JqZWN0aWZ5UGF5bG9hZCI6dHJ1ZSwiUmV0dXJuVXJsIjoiaHR0cHM6Ly9zYW5kYm94LmFwaS5nZXRzYWZlcGF5LmNvbS9vcmRlci9wYXltZW50cy92My90cmFja19iNjViYTZhZS0yYjExLTQ2MDYtOTIwYi0yNGQ3MGEyZGU1YzIvdGhyZWUtZC1zZWN1cmU_dG9rZW49cmVxXzVkZjM0MWY5LWJhZDUtNDIzZS04MDZhLTM1MGM4ZmU0ZDg1ZSZ1c2VyPWd1ZXN0X2VkMDFjNjBlLWUzZGEtNDQyNi1iMjExLWEzZTU3ZGQxMDU2ZiZkb19jYXB0dXJlPWZhbHNlJmRvX2NhcmRfb25fZmlsZT1mYWxzZSZ1c2Vfb25jZT1mYWxzZSZpbnN0cnVtZW50X3Rva2VuPSJ9.fuEepCd0g8Rvy_sUGZVjd48mjcmeHF-hqqRGJZ3jMQI",
												step_up_url: "https://centinelapistag.cardinalcommerce.com/V2/Cruise/StepUp",
												challenge_window_size: "02",
												challenge_window_size_description: "390 x 400",
												specification_version: "2.1.0",
												authentication_status: "REQUIRED",
												authentication_transaction_id: "S25IKmD9iUVe4jkqP1e0",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"200_-_Frictionless": {
								summary: "200 - Frictionless",
								value: {
									data: {
										tracker: {
											token: "track_61b8a5c7-7186-47df-86a0-07372e7237e5",
											client: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
											environment: "sandbox",
											state: "TRACKER_ENROLLED",
											intent: "CYBERSOURCE",
											mode: "payment",
											entry_mode: "raw",
											customer: "guest_ed01c60e-e3da-4426-b211-a3e57dd1056f",
											next_actions: {
												CYBERSOURCE: {
													kind: "AUTHORIZATION",
													request_id: "req_3328a23b-9d1c-437b-a501-42a0085af83b",
												},
												MPGS: {
													kind: "CREATE_SESSION",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 500000,
												},
												base_amount: {
													currency: "PKR",
													amount: 500000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										action: {
											token: "req_3328a23b-9d1c-437b-a501-42a0085af83b",
											payment_method: {
												token: "card_d8b672e0-9eb9-43dd-8236-79429a243fe7",
												expiration_month: "12",
												expiration_year: "2028",
												card_type_code: "001",
												card_type: "Visa",
												bin_number: "411111",
												last_four: "1111",
											},
											payer_authentication_enrollment: {
												rid: "7306964371626759204953",
												enrollment_status: "AUTHENTICATION_SUCCESSFUL",
												veres_enrolled: "Y",
												veres_enrolled_description: "Card enrolled; you must authenticate. Liability shift.",
												specification_version: "2.2.0",
												pares_status: "Y",
												pares_description: "Customer was successfully authenticated.",
												authentication_status: "FRICTIONLESS",
												authentication_transaction_id: "GoS0LMBV02OiV4wa1gp0",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"200_-_Not-Eligible": {
								summary: "200 - Not-Eligible",
								value: {
									data: {
										tracker: {
											token: "track_4b9ad561-4fb8-4cdc-b8ce-1e494c1da841",
											client: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
											environment: "sandbox",
											state: "TRACKER_ENROLLED",
											intent: "CYBERSOURCE",
											mode: "payment",
											entry_mode: "raw",
											customer: "guest_ed01c60e-e3da-4426-b211-a3e57dd1056f",
											next_actions: {
												CYBERSOURCE: {
													kind: "AUTHORIZATION",
													request_id: "req_fc0621ed-4bcb-4790-be4e-c4cbc5515c64",
												},
												MPGS: {
													kind: "CREATE_SESSION",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 500000,
												},
												base_amount: {
													currency: "PKR",
													amount: 500000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										action: {
											token: "req_fc0621ed-4bcb-4790-be4e-c4cbc5515c64",
											payment_method: {
												token: "card_7d37d7cc-59f2-4ccb-8c45-077373a139af",
												expiration_month: "12",
												expiration_year: "2028",
												card_type_code: "001",
												card_type: "Visa",
												bin_number: "411111",
												last_four: "1111",
											},
											payer_authentication_enrollment: {
												rid: "7306963697066743704953",
												enrollment_status: "AUTHENTICATION_SUCCESSFUL",
												veres_enrolled: "U",
												veres_enrolled_description: "Unable to authenticate regardless of the reason. No liability shift.",
												specification_version: "2.1.0",
												authentication_status: "NOT_ELIGIBLE",
												authentication_transaction_id: "1eIu5Pi7fIVvDsHnL8b0",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"200_-_Instrument_with_merchant_shopper": {
								summary: "200 - Instrument with merchant shopper",
								value: {
									data: {
										tracker: {
											token: "track_e244f1fa-4af4-4dc4-8d6f-8101b36bedf6",
											client: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
											environment: "sandbox",
											state: "TRACKER_ENROLLED",
											intent: "CYBERSOURCE",
											mode: "instrument",
											entry_mode: "raw",
											customer: "cus_b4afd638-41bf-4831-af07-587b51269f38",
											next_actions: {
												CYBERSOURCE: {
													kind: "PAYER_AUTH_VALIDATION",
													request_id: "req_aef265a1-ecde-4866-8061-ec8e64864551",
												},
												MPGS: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 500,
												},
												base_amount: {
													currency: "PKR",
													amount: 500,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										action: {
											token: "req_aef265a1-ecde-4866-8061-ec8e64864551",
											payment_method: {
												token: "card_45f198ab-619a-4900-9cbf-d2ac8009b890",
												expiration_month: "12",
												expiration_year: "2028",
												card_type_code: "002",
												card_type: "Mastercard",
												bin_number: "520000",
												last_four: "1096",
											},
											payer_authentication_enrollment: {
												rid: "7304842281426671203955",
												enrollment_status: "PENDING_AUTHENTICATION",
												veres_enrolled: "Y",
												veres_enrolled_description: "Card enrolled; you must authenticate. Liability shift.",
												access_token:
													"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxODQwNTQyYy1mZGI0LTQ2MzQtYmU5Yi05ZGIzNWM0NjFkZTkiLCJpYXQiOjE3MzA0ODQyMjgsImlzcyI6IjVkZDgzYmYwMGU0MjNkMTQ5OGRjYmFjYSIsImV4cCI6MTczMDQ4NzgyOCwiT3JnVW5pdElkIjoiNjI0YmYwNjVjZDhmMTM3MzVkNzYwYzc5IiwiUGF5bG9hZCI6eyJBQ1NVcmwiOiJodHRwczovLzBtZXJjaGFudGFjc3N0YWcuY2FyZGluYWxjb21tZXJjZS5jb20vTWVyY2hhbnRBQ1NXZWIvY3JlcS5qc3AiLCJQYXlsb2FkIjoiZXlKdFpYTnpZV2RsVkhsd1pTSTZJa05TWlhFaUxDSnRaWE56WVdkbFZtVnljMmx2YmlJNklqSXVNUzR3SWl3aWRHaHlaV1ZFVTFObGNuWmxjbFJ5WVc1elNVUWlPaUpqTTJZek5XSmtNUzAzWVRabUxUUTJPVEF0WW1ZME9TMWlOVEpsTkRjMk1ESmpPR1FpTENKaFkzTlVjbUZ1YzBsRUlqb2lPVFEwT0dJNE9XUXROVGxsWVMwMFlqUXpMV0U0T0dFdE9EWmlNR1V3TVRCbVlXUTVJaXdpWTJoaGJHeGxibWRsVjJsdVpHOTNVMmw2WlNJNklqQXlJbjAiLCJUcmFuc2FjdGlvbklkIjoicmh4NFdsZkZnVzQ3bjBJdEtQYzAifSwiT2JqZWN0aWZ5UGF5bG9hZCI6dHJ1ZSwiUmV0dXJuVXJsIjoiaHR0cHM6Ly9zYW5kYm94LmFwaS5nZXRzYWZlcGF5LmNvbS9vcmRlci9wYXltZW50cy92My90cmFja19lMjQ0ZjFmYS00YWY0LTRkYzQtOGQ2Zi04MTAxYjM2YmVkZjYvdGhyZWUtZC1zZWN1cmU_dG9rZW49cmVxX2FlZjI2NWExLWVjZGUtNDg2Ni04MDYxLWVjOGU2NDg2NDU1MSZ1c2VyPWN1c19iNGFmZDYzOC00MWJmLTQ4MzEtYWYwNy01ODdiNTEyNjlmMzgmZG9fY2FwdHVyZT1mYWxzZSZkb19jYXJkX29uX2ZpbGU9dHJ1ZSZ1c2Vfb25jZT1mYWxzZSZpbnN0cnVtZW50X3Rva2VuPSJ9.WcmP94E1HmxbB1wGHIMcHhI6ZYQO4ILOmt6jG6LcbF0",
												step_up_url: "https://centinelapistag.cardinalcommerce.com/V2/Cruise/StepUp",
												challenge_window_size: "02",
												challenge_window_size_description: "390 x 400",
												specification_version: "2.1.0",
												authentication_status: "REQUIRED",
												authentication_transaction_id: "rhx4WlfFgW47n0ItKPc0",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
						},
					},
				},
			},
		},
		parameters: [
			{
				name: "tracker",
				in: "path",
				required: true,
				schema: {
					type: "string",
				},
				description: "Unique identifier for tracker",
			},
		],
		security: [
			{
				BearerAuth: [],
			},
		],
	},
	authorization: {
		summary: "Authorization",
		description:
			'Perform the `AUTHORIZATION` action.\n\nNote that you will call Authorization when enrollment was frictionless (i.e. no challenge was applicable) or if enrollment could not be completed by the issuer.If enrollment follows up with the challenge and the customer has been redirected to your checkout, then you must proceed to Capture instead.\n\nFor this action, you need to pass in the `authorization` configuration.\n\n### Action chaining\n\nActions are chained by default by the Order API where actions that do not require additional input from the client will execute in a loop. Since `CAPTURE` is one such action, it will be chained and executed even when `authorization.do_capture` is set to false.\n\nSetting `authorization.do_capture` to true essentially performs a ***sale*** as opposed to an authorization followed by capture.\n\nIf you wish to perform captures manually, you may run this request by setting `use_action_chaining` to false in the request body (outside of the `payload`). This will then only perform the `AUTHORIZATION` action and allow you to perform the capture (or a reversal) at a later time.\n\n### Authorizing CITs\n\nWhen we set the `mode` to `payment` and the `entry_mode` to `network_token` in the **setup** api, we are initating a **CIT** (Customer Initiated Transaction). When we are dealing with **Network Tokens**, the next action after setup will be **AUTHORIZATION**, so we will have to send the extra information in the Authorization request which we otherwise wouldn\'t have needed to. This includes the **Billing** information, as well as the **Payment Method** in the form of a **Network Token.** As per usual the authorization settings are also required. The response will include a **TMS-Token** that can be used for subsequent MITs. The response contains the tms token like so: `action.token.payment_method.token: "tms_ea7323a9......".`\n\n### Authorizing MITs\n\nWhen we set the `mode` to `subscription` and the `entry_mode` to `mit` in the **setup** api, we are initating a **MIT** (Merchant Initiated Transaction). **MITs** function fairly similarly to **Subscriptions** with **TMS** tokens, since in this case you are expected to pass a **TMS** token in the request alongside the authorization settings. However, a **MIT** must always have an attached **CIT**. As mentioned above a CIT can be initated using a Network Token, however a `raw` payment will also work, as long as the `do_card_on_file` setting was set to true and a pm_ token was returned in the response. This token can also be used for MITs.\n\n### Failure MAC codes\n\n([https://developer.cybersource.com/docs/cybs/en-us/api-fields/reference/all/so/api-fields/cc-auth-reply-merchant-advice-code.html)](https://developer.cybersource.com/docs/cybs/en-us/api-fields/reference/all/so/api-fields/cc-auth-reply-merchant-advice-code.html)\n\n**Visa**\n\n- 1: Issuer never approves.\n\n- 2: Issuer cannot approve at this time.\n\n- 3: Data quality/revalidate payment information.\n\n**Mastercard:**\n\n- 01: New account information available.\n\n- 02: Try again later.\n\n- 03: Do not try again.\n\n- 04: Token not supported.\n\n- 21: Do not honor.\n\n- 22: Merchant does not qualify for product code.\n\n- 24: Retry after 1 hour.\n\n- 25: Retry after 24 hours.\n\n- 26: Retry after 2 days.\n\n- 27: Retry after 4 days.\n\n- 28: Retry after 6 days.\n\n- 29: Retry after 8 days.\n\n- 30: Retry after 10 days.\n\n- 40: Non-reloadable prepaid card.\n\n- 41: Non-reloadable prepaid card.\n\n- 42: Sanctions score exceeds applicable threshold value.\n\n- 99: Do not try again.',
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							payload: {
								type: "object",
								properties: {
									authorization: {
										type: "object",
										properties: {
											do_capture: {
												type: "boolean",
												example: false,
											},
										},
										required: ["do_capture"],
									},
								},
								required: ["authorization"],
							},
						},
						required: ["payload"],
					},
					example: {
						payload: {
							authorization: {
								do_capture: false,
							},
						},
					},
				},
			},
		},
		responses: {
			"200": {
				description: "200",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "object",
									properties: {
										tracker: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "track_dccdef16-008e-4fae-81cc-1b7d81bf6c44",
												},
												client: {
													type: "string",
													example: "sec_edeade52-46aa-483b-b87d-009d3ce41554",
												},
												environment: {
													type: "string",
													example: "sandbox",
												},
												state: {
													type: "string",
													example: "TRACKER_ENDED",
												},
												intent: {
													type: "string",
													example: "CYBERSOURCE",
												},
												mode: {
													type: "string",
													example: "payment",
												},
												next_actions: {
													type: "object",
													properties: {
														CYBERSOURCE: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "NOOP",
																},
																request_id: {
																	type: "string",
																	example: "req_f3810877-fc7c-45ca-bc6c-f2f00e72cb1a",
																},
															},
															required: ["kind", "request_id"],
														},
													},
													required: ["CYBERSOURCE"],
												},
												purchase_totals: {
													type: "object",
													properties: {
														quote_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 600000,
																},
															},
															required: ["currency", "amount"],
														},
														base_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 600000,
																},
															},
															required: ["currency", "amount"],
														},
														conversion_rate: {
															type: "object",
															properties: {
																base_currency: {
																	type: "string",
																	example: "PKR",
																},
																quote_currency: {
																	type: "string",
																	example: "PKR",
																},
																rate: {
																	type: "integer",
																	example: 1,
																},
															},
															required: ["base_currency", "quote_currency", "rate"],
														},
													},
													required: ["quote_amount", "base_amount", "conversion_rate"],
												},
											},
											required: ["token", "client", "environment", "state", "intent", "mode", "next_actions", "purchase_totals"],
										},
										action: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "req_f3810877-fc7c-45ca-bc6c-f2f00e72cb1a",
												},
												payment_method: {
													type: "object",
													properties: {
														token: {
															type: "string",
															example: "card_880b612a-ec45-4768-abd0-6b645c892e48",
														},
														expiration_month: {
															type: "string",
															example: "12",
														},
														expiration_year: {
															type: "string",
															example: "2023",
														},
														card_type_code: {
															type: "string",
															example: "002",
														},
														card_type: {
															type: "string",
															example: "Mastercard",
														},
														bin_number: {
															type: "string",
															example: "520000",
														},
														last_four: {
															type: "string",
															example: "1096",
														},
													},
													required: [
														"token",
														"expiration_month",
														"expiration_year",
														"card_type_code",
														"card_type",
														"bin_number",
														"last_four",
													],
												},
											},
											required: ["token", "payment_method"],
										},
									},
									required: ["tracker", "action"],
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
											example: "success",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"200": {
								summary: "200",
								value: {
									data: {
										tracker: {
											token: "track_dccdef16-008e-4fae-81cc-1b7d81bf6c44",
											client: "sec_edeade52-46aa-483b-b87d-009d3ce41554",
											environment: "sandbox",
											state: "TRACKER_ENDED",
											intent: "CYBERSOURCE",
											mode: "payment",
											next_actions: {
												CYBERSOURCE: {
													kind: "NOOP",
													request_id: "req_f3810877-fc7c-45ca-bc6c-f2f00e72cb1a",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 600000,
												},
												base_amount: {
													currency: "PKR",
													amount: 600000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
										},
										action: {
											token: "req_f3810877-fc7c-45ca-bc6c-f2f00e72cb1a",
											payment_method: {
												token: "card_880b612a-ec45-4768-abd0-6b645c892e48",
												expiration_month: "12",
												expiration_year: "2023",
												card_type_code: "002",
												card_type: "Mastercard",
												bin_number: "520000",
												last_four: "1096",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"200_-_unscheduled_cof": {
								summary: "200 - unscheduled_cof",
								value: {
									data: {
										tracker: {
											token: "track_da499080-3c67-4f82-8f33-c4338c8020c5",
											client: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
											environment: "sandbox",
											state: "TRACKER_ENDED",
											intent: "CYBERSOURCE",
											mode: "unscheduled_cof",
											entry_mode: "tms",
											customer: "cus_b4afd638-41bf-4831-af07-587b51269f38",
											next_actions: {
												CYBERSOURCE: {
													kind: "NOOP",
												},
												MPGS: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 10050,
												},
												base_amount: {
													currency: "PKR",
													amount: 10050,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										action: {
											token: "req_04c5d24c-155c-40b6-aa68-4b78df116c91",
											payment_method: {
												token: "tms_0b980ebc-e00f-44f4-80fa-fe635cf7510d",
												pointer: "pm_4697103f-1285-4b05-88fb-0435afb2df18",
												expiration_month: "12",
												expiration_year: "2028",
												card_type_code: "002",
												card_type: "Mastercard",
												bin_number: "520000",
												last_four: "1096",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"200_-_unscheduled_raw": {
								summary: "200 - unscheduled_raw",
								value: {
									data: {
										tracker: {
											token: "track_f8664c1d-5b2f-4389-9c1d-39059e5b8786",
											client: "sec_d8233453-7b13-49f5-bffa-1675dad71b92",
											environment: "sandbox",
											state: "TRACKER_ENDED",
											payment_method_kind: "card",
											intent: "CYBERSOURCE",
											mode: "payment",
											entry_mode: "unscheduled_raw",
											customer: "cus_fa03ab2f-a74d-4523-beb8-8dbde3ab84b5",
											next_actions: {
												CYBERSOURCE: {
													kind: "NOOP",
													request_id: "req_0e6bddc6-52ad-42dd-b8e6-e4ea28677243",
												},
												MPGS: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 156050,
												},
												base_amount: {
													currency: "PKR",
													amount: 156050,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
											authorization: {
												token: "auth_a6c1d431-7e32-4e7d-89af-daa709200fb9",
												tracker: "track_f8664c1d-5b2f-4389-9c1d-39059e5b8786",
												attempt: "attemp_d170a45f-4474-4175-b651-8e6b0c90eeab",
												intent: "CYBERSOURCE",
												cybersource_rid: "7495319004966649804807",
												totals: {
													currency: "PKR",
													amount: 156050,
												},
												created_at: {
													seconds: 1749531902,
													nanos: 191846713,
												},
												updated_at: {
													seconds: 1749531902,
													nanos: 191846803,
												},
											},
										},
										action: {
											token: "req_0e6bddc6-52ad-42dd-b8e6-e4ea28677243",
											payment_method: {
												token: "card_2092ffed-30e2-4cdc-b726-a24d7176619d",
												pointer: "pm_e6019391-45e8-4b38-929c-48e116968351",
												expiration_month: "01",
												expiration_year: "2030",
												card_type_code: "001",
												card_type: "Visa",
												bin_number: "411111",
												last_four: "1111",
												issuer: "CONOTOXIA SP. Z O.O",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"200_-_No_action_chaining": {
								summary: "200 - No action chaining",
								value: {
									data: {
										tracker: {
											token: "track_fe25142f-2598-43a8-aa34-962102997f91",
											client: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
											environment: "sandbox",
											state: "TRACKER_AUTHORIZED",
											payment_method_kind: "card",
											intent: "CYBERSOURCE",
											mode: "unscheduled_cof",
											entry_mode: "tms",
											customer: "cus_5a4a8308-8790-494b-95be-74c84a5b47f9",
											next_actions: {
												CYBERSOURCE: {
													kind: "CAPTURE",
													request_id: "req_147d9c57-a92d-4152-a0b9-3838c4d5cb5d",
												},
												MPGS: {
													kind: "NOOP",
												},
												PAYFAST: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 10050,
												},
												base_amount: {
													currency: "PKR",
													amount: 10050,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
											authorization: {
												token: "auth_773c612c-d8d0-4209-9d45-176d536993bb",
												tracker: "track_fe25142f-2598-43a8-aa34-962102997f91",
												attempt: "attemp_525280d1-1a83-4115-ae90-ae69cdd7e0ee",
												intent: "CYBERSOURCE",
												cybersource_rid: "7307231899066388304953",
												is_reversible: true,
												totals: {
													currency: "PKR",
													amount: 10050,
												},
												created_at: {
													seconds: 1730723190,
													nanos: 901513141,
												},
												updated_at: {
													seconds: 1730723190,
													nanos: 901513241,
												},
											},
										},
										action: {
											token: "req_147d9c57-a92d-4152-a0b9-3838c4d5cb5d",
											payment_method: {
												token: "tms_8eeb7a04-a8ed-4662-94b3-b578834de100",
												pointer: "pm_408aed40-7959-45ab-9da4-c7614f5065bf",
												expiration_month: "12",
												expiration_year: "2028",
												card_type_code: "002",
												card_type: "Mastercard",
												bin_number: "520000",
												last_four: "1096",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"200_-_network_token-cit_with_chaining": {
								summary: "200 - network_token-cit with chaining",
								value: {
									data: {
										tracker: {
											token: "track_792ba696-f740-4392-81bd-803cccdc8576",
											client: "sec_9286c6a3-a159-492d-9f72-dbe424517fb5",
											environment: "local",
											state: "TRACKER_ENDED",
											payment_method_kind: "card",
											intent: "CYBERSOURCE",
											mode: "subscription",
											entry_mode: "network_token",
											customer: "cus_1c1e4d51-aaaf-42a3-99ce-884d9aba94fa",
											next_actions: {
												CYBERSOURCE: {
													kind: "NOOP",
													request_id: "req_5494c78d-a934-41c7-a9a9-182c0faf9be4",
												},
												MPGS: {
													kind: "NOOP",
												},
												PAYFAST: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 1244,
												},
												base_amount: {
													currency: "PKR",
													amount: 1244,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
											authorization: {
												token: "auth_1f34b788-e127-4250-bddd-f4521cd50d04",
												tracker: "track_792ba696-f740-4392-81bd-803cccdc8576",
												attempt: "attemp_cdd52897-a228-4519-8299-a483092627d7",
												intent: "CYBERSOURCE",
												cybersource_rid: "7616454998636332003814",
												totals: {
													currency: "PKR",
													amount: 1244,
												},
												created_at: {
													seconds: 1761645497,
													nanos: 817463845,
												},
												updated_at: {
													seconds: 1761645497,
													nanos: 817463887,
												},
											},
										},
										action: {
											token: "req_5494c78d-a934-41c7-a9a9-182c0faf9be4",
											payment_method: {
												token: "tms_ea7364d0-a1ff-47b8-8c12-444cdf10fcbf",
												expiration_month: "11",
												expiration_year: "2028",
												card_type_code: "002",
												card_type: "Mastercard",
												bin_number: "521415",
												last_four: "9256",
												issuer: "BAWAG P.S.K. BANK",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"200_-_subscription-mit_with_chaining": {
								summary: "200 - subscription-mit with chaining",
								value: {
									data: {
										tracker: {
											token: "track_dcddef16-008e-4fae-81cc-1b7d81bf6c44",
											client: "sec_9021583d-b77b-40ef-ac7f-a8fa931097d0",
											environment: "local",
											state: "TRACKER_ENDED",
											payment_method_kind: "card",
											intent: "CYBERSOURCE",
											mode: "subscription",
											entry_mode: "mit",
											customer: "cus_1c1e4d51-aaaf-42a3-99ce-884d9aba94fa",
											next_actions: {
												CYBERSOURCE: {
													kind: "NOOP",
													request_id: "req_85a7feca-4418-4f99-981a-37fd28d71664",
												},
												MPGS: {
													kind: "NOOP",
												},
												PAYFAST: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 1244,
												},
												base_amount: {
													currency: "PKR",
													amount: 1244,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
											authorization: {
												token: "auth_51096fb8-6d36-4f42-b31b-865f985b0f17",
												tracker: "track_dcddef16-008e-4fae-81cc-1b7d81bf6c44",
												attempt: "attemp_397ec298-7132-434e-8b8c-df19a57d8d4c",
												intent: "CYBERSOURCE",
												cybersource_rid: "7616453014066303103814",
												totals: {
													currency: "PKR",
													amount: 1244,
												},
												created_at: {
													seconds: 1761645299,
													nanos: 284791545,
												},
												updated_at: {
													seconds: 1761645299,
													nanos: 284791587,
												},
											},
										},
										action: {
											token: "req_85a7feca-4418-4f99-981a-37fd28d71664",
											payment_method: {
												token: "tms_853b476d-33d0-46bb-8fed-12e6912746ee",
												pointer: "tms_853b476d-33d0-46bb-8fed-12e6912746ee",
												expiration_month: "11",
												expiration_year: "2028",
												card_type_code: "002",
												card_type: "Mastercard",
												bin_number: "521415",
												last_four: "9256",
												issuer: "BAWAG P.S.K. BANK",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"200_-_network_token_cit_3Ds_params_with_chaining": {
								summary: "200 - network_token_cit 3Ds params with chaining",
								value: {
									data: {
										tracker: {
											token: "track_aba5aae1-bde9-4ddf-8826-2b253e4c45e8",
											client: "sec_d8233453-7b13-49f5-bffa-1675dad71b92",
											environment: "development",
											state: "TRACKER_ENDED",
											payment_method_kind: "card",
											intent: "CYBERSOURCE",
											mode: "payment",
											entry_mode: "network_token",
											customer: "cus_fd4fcf17-377b-4807-ad1d-9c10812ebdb6",
											next_actions: {
												CYBERSOURCE: {
													kind: "NOOP",
													request_id: "req_664faecc-7719-4329-972f-6bfd7ab097e4",
												},
												MPGS: {
													kind: "NOOP",
												},
												PAYFAST: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 12544,
												},
												base_amount: {
													currency: "PKR",
													amount: 12544,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
											authorization: {
												token: "auth_e501b8f1-a1c4-480e-b5cc-f5489aa34a1b",
												tracker: "track_aba5aae1-bde9-4ddf-8826-2b253e4c45e8",
												attempt: "attemp_6f308452-3887-401a-8404-52fb5971564a",
												intent: "CYBERSOURCE",
												cybersource_rid: "7787001478856684804806",
												totals: {
													currency: "PKR",
													amount: 12544,
												},
												created_at: {
													seconds: 1778700148,
													nanos: 916535803,
												},
												updated_at: {
													seconds: 1778700148,
													nanos: 916535883,
												},
											},
										},
										action: {
											token: "req_664faecc-7719-4329-972f-6bfd7ab097e4",
											payment_method: {
												token: "tms_d70aafeb-a28a-45f0-a58c-969ead758c65",
												expiration_month: "11",
												expiration_year: "2028",
												card_type_code: "002",
												card_type: "Mastercard",
												bin_number: "520000",
												last_four: "1096",
												issuer: "PUBLIC BANK BERHAD",
												network_transaction_id: "0513MCC389538",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"200_-_unscheduled_raw_network_token": {
								summary: "200 - unscheduled_raw_network_token",
								value: {
									data: {
										tracker: {
											token: "track_882d251c-f6d8-4da6-aa15-81bfa811b1cd",
											client: "sec_cf2dd38a-7698-41c1-8549-446e1affb6e0",
											environment: "sandbox",
											state: "TRACKER_ENDED",
											payment_method_kind: "card",
											intent: "CYBERSOURCE",
											mode: "payment",
											entry_mode: "unscheduled_raw",
											customer: "cus_25cf9c92-83ed-4a7a-a24c-d3ae7631ed5d",
											next_actions: {
												CYBERSOURCE: {
													kind: "NOOP",
													request_id: "req_69933b10-7de4-4454-a00e-d25ddd371241",
												},
												MPGS: {
													kind: "NOOP",
												},
												PAYFAST: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 177050,
												},
												base_amount: {
													currency: "PKR",
													amount: 177050,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
											authorization: {
												token: "auth_f05d510c-6b15-41da-b535-f70a32ca9dac",
												tracker: "track_882d251c-f6d8-4da6-aa15-81bfa811b1cd",
												attempt: "attemp_88f49784-9b77-4b6f-98aa-cb6de8e1f26d",
												intent: "CYBERSOURCE",
												cybersource_rid: "7846297258396072804806",
												totals: {
													currency: "PKR",
													amount: 177050,
												},
												created_at: {
													seconds: 1784629726,
													nanos: 547863811,
												},
												updated_at: {
													seconds: 1784629726,
													nanos: 547863901,
												},
											},
										},
										action: {
											token: "req_69933b10-7de4-4454-a00e-d25ddd371241",
											payment_method: {
												token: "card_b4d5df97-1841-4f8c-862a-f0496d8691b8",
												pointer: "pm_b20ef270-c244-4bfc-b07d-6715c76e21d8",
												expiration_month: "11",
												expiration_year: "2028",
												card_type_code: "002",
												card_type: "Mastercard",
												bin_number: "520000",
												last_four: "1096",
												issuer: "PUBLIC BANK BERHAD",
												network_transaction_id: "0721MCC566271",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"200_-_subscription-mit_with_card-details_chaining": {
								summary: "200 - subscription-mit with card-details chaining",
								value: {
									data: {
										tracker: {
											token: "track_3413bbf8-b7d4-4246-8a33-98a02802751e",
											client: "sec_d8233453-7b13-49f5-bffa-1675dad71b92",
											environment: "development",
											state: "TRACKER_STARTED",
											payment_method_kind: "card",
											intent: "CYBERSOURCE",
											mode: "subscription",
											entry_mode: "mit",
											customer: "cus_30742251-8e06-4a34-b837-a993fbbdf3d7",
											next_actions: {
												CYBERSOURCE: {
													kind: "AUTHORIZATION",
												},
												MPGS: {
													kind: "NOOP",
												},
												PAYFAST: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 1244,
												},
												base_amount: {
													currency: "PKR",
													amount: 1244,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										capabilities: {
											CYBERSOURCE: true,
											MPGS: true,
											PAYFAST: true,
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
						},
					},
				},
			},
			"403": {
				description: "403 - Authorization failure with MAC Code",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "object",
									properties: {
										merchant_advice: {
											type: "object",
											properties: {
												code: {
													type: "string",
													example: "01",
												},
												code_raw: {
													type: "string",
													example: "M001",
												},
											},
											required: ["code", "code_raw"],
										},
										response_code: {
											type: "string",
											example: "03",
										},
									},
									required: ["merchant_advice", "response_code"],
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
												example:
													"error performing action 'AUTHORIZATION': General decline of the card. No other information provided by the issuing bank. Please try again with a different card or another form of payment.",
											},
											example: [
												"error performing action 'AUTHORIZATION': General decline of the card. No other information provided by the issuing bank. Please try again with a different card or another form of payment.",
											],
										},
										message: {
											type: "string",
											example: "fail",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"403_-_Authorization_failure_with_MAC_Code": {
								summary: "403 - Authorization failure with MAC Code",
								value: {
									data: {
										merchant_advice: {
											code: "01",
											code_raw: "M001",
										},
										response_code: "03",
									},
									status: {
										errors: [
											"error performing action 'AUTHORIZATION': General decline of the card. No other information provided by the issuing bank. Please try again with a different card or another form of payment.",
										],
										message: "fail",
									},
								},
							},
						},
					},
				},
			},
		},
		parameters: [
			{
				name: "tracker",
				in: "path",
				required: true,
				schema: {
					type: "string",
				},
				description: "Unique identifier for tracker",
			},
		],
		security: [
			{
				BearerAuth: [],
			},
		],
	},
	capture: {
		summary: "Capture",
		description:
			"Perform the `CAPTURE` action. The request body may be empty. Note that this action is expected for the regular 3DS flow where the customer is redirected to your checkout after enrollment.",
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {},
					},
					example: {},
				},
			},
		},
		responses: {
			"200": {
				description: "200",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "object",
									properties: {
										tracker: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "track_1a46dc70-91f9-4892-8e25-0bb5205b69c7",
												},
												client: {
													type: "string",
													example: "sec_edeade52-46aa-483b-b87d-009d3ce41554",
												},
												environment: {
													type: "string",
													example: "sandbox",
												},
												state: {
													type: "string",
													example: "TRACKER_ENDED",
												},
												intent: {
													type: "string",
													example: "CYBERSOURCE",
												},
												mode: {
													type: "string",
													example: "payment",
												},
												next_actions: {
													type: "object",
													properties: {
														CYBERSOURCE: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "NOOP",
																},
																request_id: {
																	type: "string",
																	example: "req_9ea53be5-828f-4730-b187-9d3d350ab72a",
																},
															},
															required: ["kind", "request_id"],
														},
													},
													required: ["CYBERSOURCE"],
												},
												purchase_totals: {
													type: "object",
													properties: {
														quote_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 600000,
																},
															},
															required: ["currency", "amount"],
														},
														base_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 600000,
																},
															},
															required: ["currency", "amount"],
														},
														conversion_rate: {
															type: "object",
															properties: {
																base_currency: {
																	type: "string",
																	example: "PKR",
																},
																quote_currency: {
																	type: "string",
																	example: "PKR",
																},
																rate: {
																	type: "integer",
																	example: 1,
																},
															},
															required: ["base_currency", "quote_currency", "rate"],
														},
													},
													required: ["quote_amount", "base_amount", "conversion_rate"],
												},
											},
											required: ["token", "client", "environment", "state", "intent", "mode", "next_actions", "purchase_totals"],
										},
										action: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "req_9ea53be5-828f-4730-b187-9d3d350ab72a",
												},
												payment_method: {
													type: "object",
													properties: {
														token: {
															type: "string",
															example: "card_353d4bd9-1d72-4f4d-a358-b277833795a4",
														},
														expiration_month: {
															type: "string",
															example: "12",
														},
														expiration_year: {
															type: "string",
															example: "2023",
														},
														card_type_code: {
															type: "string",
															example: "001",
														},
														card_type: {
															type: "string",
															example: "Visa",
														},
														bin_number: {
															type: "string",
															example: "445653",
														},
														last_four: {
															type: "string",
															example: "1096",
														},
													},
													required: [
														"token",
														"expiration_month",
														"expiration_year",
														"card_type_code",
														"card_type",
														"bin_number",
														"last_four",
													],
												},
											},
											required: ["token", "payment_method"],
										},
									},
									required: ["tracker", "action"],
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
											example: "success",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"200": {
								summary: "200",
								value: {
									data: {
										tracker: {
											token: "track_1a46dc70-91f9-4892-8e25-0bb5205b69c7",
											client: "sec_edeade52-46aa-483b-b87d-009d3ce41554",
											environment: "sandbox",
											state: "TRACKER_ENDED",
											intent: "CYBERSOURCE",
											mode: "payment",
											next_actions: {
												CYBERSOURCE: {
													kind: "NOOP",
													request_id: "req_9ea53be5-828f-4730-b187-9d3d350ab72a",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 600000,
												},
												base_amount: {
													currency: "PKR",
													amount: 600000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
										},
										action: {
											token: "req_9ea53be5-828f-4730-b187-9d3d350ab72a",
											payment_method: {
												token: "card_353d4bd9-1d72-4f4d-a358-b277833795a4",
												expiration_month: "12",
												expiration_year: "2023",
												card_type_code: "001",
												card_type: "Visa",
												bin_number: "445653",
												last_four: "1096",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
						},
					},
				},
			},
		},
		parameters: [
			{
				name: "tracker",
				in: "path",
				required: true,
				schema: {
					type: "string",
				},
				description: "Unique identifier for tracker",
			},
		],
		security: [
			{
				BearerAuth: [],
			},
		],
	},
	reversal: {
		summary: "Reversal",
		description:
			"Perform the `REVERSAL` action. The request body may be empty. Note that this action is expected for the regular 3DS flow where the customer is redirected to your checkout after enrollment.\n\nThis is relevant for the `instrument` mode used to save a payment method. In this scenario, the authoirzation hold on the customer's funds must be removed by requesting a reversal.\n\nThis request must be authenticated by a Safepay shopper or merchant shopper.",
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {},
					},
					example: {},
				},
			},
		},
		responses: {
			"200": {
				description: "200",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "object",
									properties: {
										tracker: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "track_1a46dc70-91f9-4892-8e25-0bb5205b69c7",
												},
												client: {
													type: "string",
													example: "sec_edeade52-46aa-483b-b87d-009d3ce41554",
												},
												environment: {
													type: "string",
													example: "sandbox",
												},
												state: {
													type: "string",
													example: "TRACKER_ENDED",
												},
												intent: {
													type: "string",
													example: "CYBERSOURCE",
												},
												mode: {
													type: "string",
													example: "payment",
												},
												next_actions: {
													type: "object",
													properties: {
														CYBERSOURCE: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "NOOP",
																},
																request_id: {
																	type: "string",
																	example: "req_9ea53be5-828f-4730-b187-9d3d350ab72a",
																},
															},
															required: ["kind", "request_id"],
														},
													},
													required: ["CYBERSOURCE"],
												},
												purchase_totals: {
													type: "object",
													properties: {
														quote_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 600000,
																},
															},
															required: ["currency", "amount"],
														},
														base_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 600000,
																},
															},
															required: ["currency", "amount"],
														},
														conversion_rate: {
															type: "object",
															properties: {
																base_currency: {
																	type: "string",
																	example: "PKR",
																},
																quote_currency: {
																	type: "string",
																	example: "PKR",
																},
																rate: {
																	type: "integer",
																	example: 1,
																},
															},
															required: ["base_currency", "quote_currency", "rate"],
														},
													},
													required: ["quote_amount", "base_amount", "conversion_rate"],
												},
											},
											required: ["token", "client", "environment", "state", "intent", "mode", "next_actions", "purchase_totals"],
										},
										action: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "req_9ea53be5-828f-4730-b187-9d3d350ab72a",
												},
												payment_method: {
													type: "object",
													properties: {
														token: {
															type: "string",
															example: "card_353d4bd9-1d72-4f4d-a358-b277833795a4",
														},
														expiration_month: {
															type: "string",
															example: "12",
														},
														expiration_year: {
															type: "string",
															example: "2023",
														},
														card_type_code: {
															type: "string",
															example: "001",
														},
														card_type: {
															type: "string",
															example: "Visa",
														},
														bin_number: {
															type: "string",
															example: "445653",
														},
														last_four: {
															type: "string",
															example: "1096",
														},
													},
													required: [
														"token",
														"expiration_month",
														"expiration_year",
														"card_type_code",
														"card_type",
														"bin_number",
														"last_four",
													],
												},
											},
											required: ["token", "payment_method"],
										},
									},
									required: ["tracker", "action"],
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
											example: "success",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"200": {
								summary: "200",
								value: {
									data: {
										tracker: {
											token: "track_1a46dc70-91f9-4892-8e25-0bb5205b69c7",
											client: "sec_edeade52-46aa-483b-b87d-009d3ce41554",
											environment: "sandbox",
											state: "TRACKER_ENDED",
											intent: "CYBERSOURCE",
											mode: "payment",
											next_actions: {
												CYBERSOURCE: {
													kind: "NOOP",
													request_id: "req_9ea53be5-828f-4730-b187-9d3d350ab72a",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 600000,
												},
												base_amount: {
													currency: "PKR",
													amount: 600000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
										},
										action: {
											token: "req_9ea53be5-828f-4730-b187-9d3d350ab72a",
											payment_method: {
												token: "card_353d4bd9-1d72-4f4d-a358-b277833795a4",
												expiration_month: "12",
												expiration_year: "2023",
												card_type_code: "001",
												card_type: "Visa",
												bin_number: "445653",
												last_four: "1096",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
						},
					},
				},
			},
		},
		parameters: [
			{
				name: "tracker",
				in: "path",
				required: true,
				schema: {
					type: "string",
				},
				description: "Unique identifier for tracker",
			},
		],
		security: [
			{
				BearerAuth: [],
			},
		],
	},
	"order-google-pay": {
		summary: "Google Pay",
		description:
			"**Next Actions**\n\n**FPAN**\n\nFor FPAN transactions, the action response should be passed into Atoms for further processing.\n\nThe transaction flow will then proceed as follows:\n\n- **Payer Authentication Setup**\n\n- **Payer Authentication Enrollment**\n\n- **Authorization** (or Authorization + Capture depending on the configured action chain)\n\nThe merchant should continue processing the transaction based on the action response returned by each step.\n\n**DPAN**\n\nFor DPAN transactions, no payer authentication steps are required.\n\n**If do_capture = true:**\n\n- The transaction will automatically proceed through **Authorization + Capture**.\n\n- No further actions are required from the merchant.\n\n**If do_capture = false:**\n\n- The transaction will stop in the **Authorized** state.\n\n- The merchant must subsequently either:\n\n<li>**Capture** the transaction to settle the funds; or\n\n- **Reverse** the authorization if the transaction should not be completed.\n\n</li>\n\nThe tracker will remain in the Authorized state until one of the above actions is performed.",
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {
							payload: {
								type: "object",
								properties: {
									billing: {
										type: "object",
										properties: {
											street_1: {
												type: "string",
												example: "St 1",
											},
											street_2: {
												type: "string",
												example: "",
											},
											city: {
												type: "string",
												example: "Islamabad",
											},
											state: {
												type: "string",
												example: "",
											},
											postal_code: {
												type: "string",
												example: "44000",
											},
											country: {
												type: "string",
												example: "PK",
											},
										},
										required: ["street_1", "street_2", "city", "state", "postal_code", "country"],
									},
									customer: {
										type: "object",
										properties: {
											first_name: {
												type: "string",
												example: "Asfand",
											},
											last_name: {
												type: "string",
												example: "Alavi",
											},
											email: {
												type: "string",
												example: "aalavi@getsafepay.com",
											},
											phone_number: {
												type: "string",
												example: "+923331234567",
											},
										},
										required: ["first_name", "last_name", "email", "phone_number"],
									},
									encrypted_payload: {
										type: "object",
										properties: {
											signature: {
												type: "string",
												example: "MEQCIEyj6xy2iVKrQg0GmpBwk2NYC7+tbLn5dFLS4JJwRetpAiABQtLN8gENJRkoGGXiu3YcRuJazOk6RP1BjajyZ3B6KQ==",
											},
											intermediateSigningKey: {
												type: "object",
												properties: {
													signedKey: {
														type: "string",
														example:
															'{"keyValue":"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE8sIOJX5dC7C6mUZNRE9FUd1b6uJWwIDjL5Pmyb+7yzONlXGodbJW9aGOKsPWg4j1xYF/ts8gCmpM2RjXQCtHCQ\\u003d\\u003d","keyExpiration":"1750889572741"}',
													},
													signatures: {
														type: "array",
														items: {
															type: "string",
															example: "MEUCIFoNnlgUG8SGLdO3meykUXCwTRMHQNcLC0YS38uUYx9/AiEA3MeI63IydsdSaQmRBc7IHvSfwWYzsp8MiFJ5rXCzCyc=",
														},
														example: ["MEUCIFoNnlgUG8SGLdO3meykUXCwTRMHQNcLC0YS38uUYx9/AiEA3MeI63IydsdSaQmRBc7IHvSfwWYzsp8MiFJ5rXCzCyc="],
													},
												},
												required: ["signedKey", "signatures"],
											},
											protocolVersion: {
												type: "string",
												example: "ECv2",
											},
											signedMessage: {
												type: "string",
												example:
													'{"encryptedMessage":"oMxIYFbSS6srUwgZJeQLqCkGKX4I2YgXmrUJdww9Rj8fH2SP0ubKJphwZBppq/lvdbgYPM9cwYvFUAmzSkApddOemx6Wtorwc2LH87/iHgSnE9v+KUlrJblPHyj49GKHjUwmRJ/zoY4GBpcWOrp7LxFs2sRmhziP2/S7hNmRF3acCXtgCckMrIzQ2Rf7lPbC16G9JEqb4Wqa+gbzZCjTtOo8JYLOmt65Vzy/GttwopTa04q5Kv7sLxuc3j1OJXkDz8Xm1iBanek3OeQCYDSHyPillxrnfAvRggosaNnDk3oYEe8nuGmT9o0bILdF+4DNeTafloMFEwTkevzs8Ol2OESwwcBF0Boq6ghlmGCra1oKfU9R3AG+IJn6Hprzma6QlWU4dfpC9EH1N1kBeJtsxevqSxQOMG+0PpRG3kUuPWDYSvZ5NQJjW+IlVk3h6krvwhCu8vIXNwAZL360llU8WmW4pDbFRGee+Hd0YDqmF1/yqLCM5lQh6tKhY8KkVeDJK4T4aceAnGkcbt88Ph+Y45h7/iQQwgMPM+13zLUHPNpAsX7eDuTyMpkH","ephemeralPublicKey":"BB6NNewoVD6UcCXyNwXAGkugoe24T8atNgcZl+QSPF+BbTvHSzg8NGYXIwWsRROxM72oapc4c3wEzfrw4at5FrI\\u003d","tag":"LkX+DC4Eco77+D3yo86Wwgm1HHI/xC6sLT00PML2Zds\\u003d"}',
											},
										},
										required: ["signature", "intermediateSigningKey", "protocolVersion", "signedMessage"],
									},
									authorization: {
										type: "object",
										properties: {
											do_capture: {
												type: "boolean",
												example: true,
											},
										},
										required: ["do_capture"],
									},
								},
								required: ["billing", "customer", "encrypted_payload", "authorization"],
							},
						},
						required: ["payload"],
					},
					example: {
						payload: {
							billing: {
								street_1: "St 1",
								street_2: "",
								city: "Islamabad",
								state: "",
								postal_code: "44000",
								country: "PK",
							},
							customer: {
								first_name: "Asfand",
								last_name: "Alavi",
								email: "aalavi@getsafepay.com",
								phone_number: "+923331234567",
							},
							encrypted_payload: {
								signature: "MEQCIEyj6xy2iVKrQg0GmpBwk2NYC7+tbLn5dFLS4JJwRetpAiABQtLN8gENJRkoGGXiu3YcRuJazOk6RP1BjajyZ3B6KQ==",
								intermediateSigningKey: {
									signedKey:
										'{"keyValue":"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE8sIOJX5dC7C6mUZNRE9FUd1b6uJWwIDjL5Pmyb+7yzONlXGodbJW9aGOKsPWg4j1xYF/ts8gCmpM2RjXQCtHCQ\\u003d\\u003d","keyExpiration":"1750889572741"}',
									signatures: ["MEUCIFoNnlgUG8SGLdO3meykUXCwTRMHQNcLC0YS38uUYx9/AiEA3MeI63IydsdSaQmRBc7IHvSfwWYzsp8MiFJ5rXCzCyc="],
								},
								protocolVersion: "ECv2",
								signedMessage:
									'{"encryptedMessage":"oMxIYFbSS6srUwgZJeQLqCkGKX4I2YgXmrUJdww9Rj8fH2SP0ubKJphwZBppq/lvdbgYPM9cwYvFUAmzSkApddOemx6Wtorwc2LH87/iHgSnE9v+KUlrJblPHyj49GKHjUwmRJ/zoY4GBpcWOrp7LxFs2sRmhziP2/S7hNmRF3acCXtgCckMrIzQ2Rf7lPbC16G9JEqb4Wqa+gbzZCjTtOo8JYLOmt65Vzy/GttwopTa04q5Kv7sLxuc3j1OJXkDz8Xm1iBanek3OeQCYDSHyPillxrnfAvRggosaNnDk3oYEe8nuGmT9o0bILdF+4DNeTafloMFEwTkevzs8Ol2OESwwcBF0Boq6ghlmGCra1oKfU9R3AG+IJn6Hprzma6QlWU4dfpC9EH1N1kBeJtsxevqSxQOMG+0PpRG3kUuPWDYSvZ5NQJjW+IlVk3h6krvwhCu8vIXNwAZL360llU8WmW4pDbFRGee+Hd0YDqmF1/yqLCM5lQh6tKhY8KkVeDJK4T4aceAnGkcbt88Ph+Y45h7/iQQwgMPM+13zLUHPNpAsX7eDuTyMpkH","ephemeralPublicKey":"BB6NNewoVD6UcCXyNwXAGkugoe24T8atNgcZl+QSPF+BbTvHSzg8NGYXIwWsRROxM72oapc4c3wEzfrw4at5FrI\\u003d","tag":"LkX+DC4Eco77+D3yo86Wwgm1HHI/xC6sLT00PML2Zds\\u003d"}',
							},
							authorization: {
								do_capture: true,
							},
						},
					},
				},
			},
		},
		responses: {
			"200": {
				description: "FPAN",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "object",
									properties: {
										tracker: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "track_3e491780-1bf9-481f-8c7e-2d9f7c013452",
												},
												client: {
													type: "string",
													example: "sec_df38896a-de5c-4231-98c7-1020e82e6bba",
												},
												environment: {
													type: "string",
													example: "production",
												},
												state: {
													type: "string",
													example: "TRACKER_STARTED",
												},
												payment_method_kind: {
													type: "string",
													example: "card",
												},
												intent: {
													type: "string",
													example: "CYBERSOURCE",
												},
												mode: {
													type: "string",
													example: "payment",
												},
												entry_mode: {
													type: "string",
													example: "gpay",
												},
												customer: {
													type: "string",
													example: "guest_4380df9b-92f4-462f-badb-72f6d08a4444",
												},
												next_actions: {
													type: "object",
													properties: {
														CYBERSOURCE: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "PAYER_AUTH_ENROLLMENT",
																},
																request_id: {
																	type: "string",
																	example: "req_e6eacbd0-2b21-4366-9638-caf8ee20f918",
																},
															},
															required: ["kind", "request_id"],
														},
														MPGS: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "NOOP",
																},
															},
															required: ["kind"],
														},
														PAYFAST: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "NOOP",
																},
															},
															required: ["kind"],
														},
													},
													required: ["CYBERSOURCE", "MPGS", "PAYFAST"],
												},
												purchase_totals: {
													type: "object",
													properties: {
														quote_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 1000,
																},
															},
															required: ["currency", "amount"],
														},
														base_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 1000,
																},
															},
															required: ["currency", "amount"],
														},
														conversion_rate: {
															type: "object",
															properties: {
																base_currency: {
																	type: "string",
																	example: "PKR",
																},
																quote_currency: {
																	type: "string",
																	example: "PKR",
																},
																rate: {
																	type: "integer",
																	example: 1,
																},
															},
															required: ["base_currency", "quote_currency", "rate"],
														},
													},
													required: ["quote_amount", "base_amount", "conversion_rate"],
												},
												metadata: {
													type: "object",
													properties: {},
												},
											},
											required: [
												"token",
												"client",
												"environment",
												"state",
												"payment_method_kind",
												"intent",
												"mode",
												"entry_mode",
												"customer",
												"next_actions",
												"purchase_totals",
												"metadata",
											],
										},
										action: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "req_e6eacbd0-2b21-4366-9638-caf8ee20f918",
												},
												payment_method: {
													type: "object",
													properties: {
														token: {
															type: "string",
															example: "card_f78ec306-daf9-427d-9411-204ca2096931",
														},
														expiration_month: {
															type: "string",
															example: "02",
														},
														expiration_year: {
															type: "string",
															example: "2031",
														},
														card_type_code: {
															type: "string",
															example: "001",
														},
														card_type: {
															type: "string",
															example: "Visa",
														},
														bin_number: {
															type: "string",
															example: "494951",
														},
														last_four: {
															type: "string",
															example: "0341",
														},
													},
													required: [
														"token",
														"expiration_month",
														"expiration_year",
														"card_type_code",
														"card_type",
														"bin_number",
														"last_four",
													],
												},
												payer_authentication_setup: {
													type: "object",
													properties: {
														access_token: {
															type: "string",
															example:
																"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNTJkNzk0MC1hMWM4LTQ4MDEtOTI3NS1mNWI1YTRmNDAxZDUiLCJpYXQiOjE3ODIyMjE2NTMsImlzcyI6IjVlMjIwMDVmMzU2ZGNlMDNmMGY3ODcyZiIsImV4cCI6MTc4MjIyNTI1MywiT3JnVW5pdElkIjoiNjJhOTgyMWNmNjIzYzc1MDBlNWVkNzMzIiwiUmVmZXJlbmNlSWQiOiJmNmQwNzhlZS1mMzE2LTRlYjYtODNmNC01ZDhmOTRmNTIxMDAifQ.Wlwu1l6Ony9zcHOOCLUmvhLQkk_hXXlz-WvXQ_Y0v_M",
														},
														device_data_collection_url: {
															type: "string",
															example: "https://centinelapistag.cardinalcommerce.com/V1/Cruise/Collect",
														},
													},
													required: ["access_token", "device_data_collection_url"],
												},
											},
											required: ["token", "payment_method", "payer_authentication_setup"],
										},
									},
									required: ["tracker", "action"],
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
											example: "success",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							FPAN: {
								summary: "FPAN",
								value: {
									data: {
										tracker: {
											token: "track_3e491780-1bf9-481f-8c7e-2d9f7c013452",
											client: "sec_df38896a-de5c-4231-98c7-1020e82e6bba",
											environment: "production",
											state: "TRACKER_STARTED",
											payment_method_kind: "card",
											intent: "CYBERSOURCE",
											mode: "payment",
											entry_mode: "gpay",
											customer: "guest_4380df9b-92f4-462f-badb-72f6d08a4444",
											next_actions: {
												CYBERSOURCE: {
													kind: "PAYER_AUTH_ENROLLMENT",
													request_id: "req_e6eacbd0-2b21-4366-9638-caf8ee20f918",
												},
												MPGS: {
													kind: "NOOP",
												},
												PAYFAST: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 1000,
												},
												base_amount: {
													currency: "PKR",
													amount: 1000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
										},
										action: {
											token: "req_e6eacbd0-2b21-4366-9638-caf8ee20f918",
											payment_method: {
												token: "card_f78ec306-daf9-427d-9411-204ca2096931",
												expiration_month: "02",
												expiration_year: "2031",
												card_type_code: "001",
												card_type: "Visa",
												bin_number: "494951",
												last_four: "0341",
											},
											payer_authentication_setup: {
												access_token:
													"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNTJkNzk0MC1hMWM4LTQ4MDEtOTI3NS1mNWI1YTRmNDAxZDUiLCJpYXQiOjE3ODIyMjE2NTMsImlzcyI6IjVlMjIwMDVmMzU2ZGNlMDNmMGY3ODcyZiIsImV4cCI6MTc4MjIyNTI1MywiT3JnVW5pdElkIjoiNjJhOTgyMWNmNjIzYzc1MDBlNWVkNzMzIiwiUmVmZXJlbmNlSWQiOiJmNmQwNzhlZS1mMzE2LTRlYjYtODNmNC01ZDhmOTRmNTIxMDAifQ.Wlwu1l6Ony9zcHOOCLUmvhLQkk_hXXlz-WvXQ_Y0v_M",
												device_data_collection_url: "https://centinelapistag.cardinalcommerce.com/V1/Cruise/Collect",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"DPAN_-_Authorization": {
								summary: "DPAN - Authorization",
								value: {
									data: {
										tracker: {
											token: "track_fe25142f-2598-43a8-aa34-962102997f91",
											client: "sec_a7cc6fc1-088d-4f35-9dac-2bab2cb234a1",
											environment: "sandbox",
											state: "TRACKER_AUTHORIZED",
											payment_method_kind: "card",
											intent: "CYBERSOURCE",
											mode: "payment",
											entry_mode: "gpay",
											customer: "cus_5a4a8308-8790-494b-95be-74c84a5b47f9",
											next_actions: {
												CYBERSOURCE: {
													kind: "CAPTURE",
													request_id: "req_147d9c57-a92d-4152-a0b9-3838c4d5cb5d",
												},
												MPGS: {
													kind: "NOOP",
												},
												PAYFAST: {
													kind: "NOOP",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 10050,
												},
												base_amount: {
													currency: "PKR",
													amount: 10050,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
											authorization: {
												token: "auth_773c612c-d8d0-4209-9d45-176d536993bb",
												tracker: "track_fe25142f-2598-43a8-aa34-962102997f91",
												attempt: "attemp_525280d1-1a83-4115-ae90-ae69cdd7e0ee",
												intent: "CYBERSOURCE",
												cybersource_rid: "7307231899066388304953",
												is_reversible: true,
												totals: {
													currency: "PKR",
													amount: 10050,
												},
												created_at: {
													seconds: 1730723190,
													nanos: 901513141,
												},
												updated_at: {
													seconds: 1730723190,
													nanos: 901513241,
												},
											},
										},
										action: {
											token: "req_147d9c57-a92d-4152-a0b9-3838c4d5cb5d",
											payment_method: {
												token: "tms_8eeb7a04-a8ed-4662-94b3-b578834de100",
												pointer: "pm_408aed40-7959-45ab-9da4-c7614f5065bf",
												expiration_month: "12",
												expiration_year: "2028",
												card_type_code: "002",
												card_type: "Mastercard",
												bin_number: "520000",
												last_four: "1096",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"DPAN_-_Captured": {
								summary: "DPAN - Captured",
								value: {
									data: {
										tracker: {
											token: "track_1a46dc70-91f9-4892-8e25-0bb5205b69c7",
											client: "sec_edeade52-46aa-483b-b87d-009d3ce41554",
											environment: "sandbox",
											state: "TRACKER_ENDED",
											intent: "CYBERSOURCE",
											mode: "payment",
											next_actions: {
												CYBERSOURCE: {
													kind: "NOOP",
													request_id: "req_9ea53be5-828f-4730-b187-9d3d350ab72a",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 600000,
												},
												base_amount: {
													currency: "PKR",
													amount: 600000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
										},
										action: {
											token: "req_9ea53be5-828f-4730-b187-9d3d350ab72a",
											payment_method: {
												token: "card_353d4bd9-1d72-4f4d-a358-b277833795a4",
												expiration_month: "12",
												expiration_year: "2023",
												card_type_code: "001",
												card_type: "Visa",
												bin_number: "445653",
												last_four: "1096",
											},
										},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
						},
					},
				},
			},
		},
		parameters: [
			{
				name: "tracker",
				in: "path",
				required: true,
				schema: {
					type: "string",
				},
				description: "Unique identifier for tracker",
			},
		],
		security: [
			{
				BearerAuth: [],
			},
		],
	},
	"order-raast": {
		summary: "Raast",
		description:
			"This flow supports RTP Now and Dynamic QR.\n\nPayments will be reflected in your **Merchant Dashboard**.\n\nFor **Dynamic QR**, the API returns the QR payload/code. Pass this value to any standard QR code generator or QR library to render it as a scannable QR image.",
		requestBody: {
			required: true,
			content: {
				"application/json": {
					schema: {
						type: "object",
						properties: {},
					},
					example: {},
				},
			},
		},
		responses: {
			"200": {
				description: "200 - RTP Now IBAN",
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								data: {
									type: "object",
									properties: {
										tracker: {
											type: "object",
											properties: {
												token: {
													type: "string",
													example: "track_47b82b73-b7ef-46d7-96f4-21ae38e88c7b",
												},
												client: {
													type: "string",
													example: "sec_df38896a-de5c-4231-98c7-1020e82e6bba",
												},
												environment: {
													type: "string",
													example: "production",
												},
												state: {
													type: "string",
													example: "TRACKER_STARTED",
												},
												payment_method_kind: {
													type: "string",
													example: "wallet",
												},
												intent: {
													type: "string",
													example: "RAAST",
												},
												mode: {
													type: "string",
													example: "payment",
												},
												entry_mode: {
													type: "string",
													example: "raw",
												},
												next_actions: {
													type: "object",
													properties: {
														CYBERSOURCE: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "PAYER_AUTH_SETUP",
																},
															},
															required: ["kind"],
														},
														MPGS: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "NOOP",
																},
															},
															required: ["kind"],
														},
														PAYFAST: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "CUSTOMER_VALIDATE",
																},
															},
															required: ["kind"],
														},
														RAAST: {
															type: "object",
															properties: {
																kind: {
																	type: "string",
																	example: "NOOP",
																},
																request_id: {
																	type: "string",
																	example: "req_7b2428b3-6c4a-4f38-9bcb-10129c3a70cc",
																},
															},
															required: ["kind", "request_id"],
														},
													},
													required: ["CYBERSOURCE", "MPGS", "PAYFAST", "RAAST"],
												},
												purchase_totals: {
													type: "object",
													properties: {
														quote_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 1000,
																},
															},
															required: ["currency", "amount"],
														},
														base_amount: {
															type: "object",
															properties: {
																currency: {
																	type: "string",
																	example: "PKR",
																},
																amount: {
																	type: "integer",
																	example: 1000,
																},
															},
															required: ["currency", "amount"],
														},
														conversion_rate: {
															type: "object",
															properties: {
																base_currency: {
																	type: "string",
																	example: "PKR",
																},
																quote_currency: {
																	type: "string",
																	example: "PKR",
																},
																rate: {
																	type: "integer",
																	example: 1,
																},
															},
															required: ["base_currency", "quote_currency", "rate"],
														},
													},
													required: ["quote_amount", "base_amount", "conversion_rate"],
												},
												metadata: {
													type: "object",
													properties: {},
												},
												raast_payment: {
													type: "object",
													properties: {
														kind: {
															type: "string",
															example: "RTP",
														},
														request_id: {
															type: "string",
															example: "7b2428b3-6c4a-4f38-9bcb-10129c3a70cc",
														},
														payment_id: {
															type: "string",
															example: "pm_2dbb1911-5737-4fc9-b23c-d4a958799a62",
														},
														status: {
															type: "string",
															example: "INITIATED",
														},
														expires_at: {
															type: "object",
															properties: {
																seconds: {
																	type: "integer",
																	example: 1787568297,
																},
															},
															required: ["seconds"],
														},
														created_at: {
															type: "object",
															properties: {
																seconds: {
																	type: "integer",
																	example: 1787567397,
																},
															},
															required: ["seconds"],
														},
														updated_at: {
															type: "object",
															properties: {
																seconds: {
																	type: "integer",
																	example: 1787567398,
																},
																nanos: {
																	type: "integer",
																	example: 162272444,
																},
															},
															required: ["seconds", "nanos"],
														},
													},
													required: ["kind", "request_id", "payment_id", "status", "expires_at", "created_at", "updated_at"],
												},
											},
											required: [
												"token",
												"client",
												"environment",
												"state",
												"payment_method_kind",
												"intent",
												"mode",
												"entry_mode",
												"next_actions",
												"purchase_totals",
												"metadata",
												"raast_payment",
											],
										},
										action: {
											type: "object",
											properties: {},
										},
									},
									required: ["tracker", "action"],
								},
								status: {
									type: "object",
									properties: {
										errors: {
											type: "array",
											items: {
												type: "string",
											},
										},
										message: {
											type: "string",
											example: "success",
										},
									},
									required: ["errors", "message"],
								},
							},
							required: ["data", "status"],
						},
						examples: {
							"200_-_RTP_Now_IBAN": {
								summary: "200 - RTP Now IBAN",
								value: {
									data: {
										tracker: {
											token: "track_47b82b73-b7ef-46d7-96f4-21ae38e88c7b",
											client: "sec_df38896a-de5c-4231-98c7-1020e82e6bba",
											environment: "production",
											state: "TRACKER_STARTED",
											payment_method_kind: "wallet",
											intent: "RAAST",
											mode: "payment",
											entry_mode: "raw",
											next_actions: {
												CYBERSOURCE: {
													kind: "PAYER_AUTH_SETUP",
												},
												MPGS: {
													kind: "NOOP",
												},
												PAYFAST: {
													kind: "CUSTOMER_VALIDATE",
												},
												RAAST: {
													kind: "NOOP",
													request_id: "req_7b2428b3-6c4a-4f38-9bcb-10129c3a70cc",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 1000,
												},
												base_amount: {
													currency: "PKR",
													amount: 1000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
											raast_payment: {
												kind: "RTP",
												request_id: "7b2428b3-6c4a-4f38-9bcb-10129c3a70cc",
												payment_id: "pm_2dbb1911-5737-4fc9-b23c-d4a958799a62",
												status: "INITIATED",
												expires_at: {
													seconds: 1787568297,
												},
												created_at: {
													seconds: 1787567397,
												},
												updated_at: {
													seconds: 1787567398,
													nanos: 162272444,
												},
											},
										},
										action: {},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"200_-_RTP_Now_RAAST_ID": {
								summary: "200 - RTP Now RAAST ID",
								value: {
									data: {
										tracker: {
											token: "track_47b82b73-b7ef-46d7-96f4-21ae38e88c7b",
											client: "sec_df38896a-de5c-4231-98c7-1020e82e6bba",
											environment: "production",
											state: "TRACKER_STARTED",
											payment_method_kind: "wallet",
											intent: "RAAST",
											mode: "payment",
											entry_mode: "raw",
											next_actions: {
												CYBERSOURCE: {
													kind: "PAYER_AUTH_SETUP",
												},
												MPGS: {
													kind: "NOOP",
												},
												PAYFAST: {
													kind: "CUSTOMER_VALIDATE",
												},
												RAAST: {
													kind: "NOOP",
													request_id: "req_7b2428b3-6c4a-4f38-9bcb-10129c3a70cc",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 1000,
												},
												base_amount: {
													currency: "PKR",
													amount: 1000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
											raast_payment: {
												kind: "RTP",
												request_id: "7b2428b3-6c4a-4f38-9bcb-10129c3a70cc",
												payment_id: "pm_2dbb1911-5737-4fc9-b23c-d4a958799a62",
												status: "INITIATED",
												expires_at: {
													seconds: 1787568297,
												},
												created_at: {
													seconds: 1787567397,
												},
												updated_at: {
													seconds: 1787567398,
													nanos: 162272444,
												},
											},
										},
										action: {},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
							"200_-_Dynamic_QR": {
								summary: "200 - Dynamic QR",
								value: {
									data: {
										tracker: {
											token: "track_4a6e915b-40c7-43d5-9b29-951eb01dce88",
											client: "sec_df38896a-de5c-4231-98c7-1020e82e6bba",
											environment: "production",
											state: "TRACKER_STARTED",
											payment_method_kind: "wallet",
											intent: "RAAST",
											mode: "payment",
											entry_mode: "raw",
											next_actions: {
												CYBERSOURCE: {
													kind: "PAYER_AUTH_SETUP",
												},
												MPGS: {
													kind: "NOOP",
												},
												PAYFAST: {
													kind: "CUSTOMER_VALIDATE",
												},
												RAAST: {
													kind: "NOOP",
													request_id: "req_e78322fe-d1bc-4ad5-8097-c630f609b6db",
												},
											},
											purchase_totals: {
												quote_amount: {
													currency: "PKR",
													amount: 1000,
												},
												base_amount: {
													currency: "PKR",
													amount: 1000,
												},
												conversion_rate: {
													base_currency: "PKR",
													quote_currency: "PKR",
													rate: 1,
												},
											},
											metadata: {},
											raast_payment: {
												kind: "DYNAMIC_QR",
												request_id: "e78322fe-d1bc-4ad5-8097-c630f609b6db",
												status: "INITIATED",
												expires_at: {
													seconds: 1787755016,
													nanos: 848391936,
												},
												created_at: {
													seconds: 1787754116,
													nanos: 862164782,
												},
												updated_at: {
													seconds: 1787754118,
													nanos: 282932276,
												},
												qr_code: {
													token: "qr_70c9342a-604a-42f6-8295-7d779e2ace10",
													code: "00020101021228760032b5f3269d1f48468bbed61b78c5732e4f0108SAFEPAYZ0224PK34MPBL0101027140596792520489995303586540510.005802PK5916Safepay Merchant6007Karachi62360532e78322fed1bc4ad58097c630f609b6db84760032b5f3269d1f48468bbed61b78c5732e4f0136229699dd-c7e4-4f00-ba7a-66294ec8f27b89360032229699ddc7e44f00ba7a66294ec8f27b630483A9",
												},
											},
										},
										action: {},
									},
									status: {
										errors: [],
										message: "success",
									},
								},
							},
						},
					},
				},
			},
		},
		parameters: [
			{
				name: "tracker",
				in: "path",
				required: true,
				schema: {
					type: "string",
				},
				description: "Unique identifier for tracker",
			},
		],
		security: [
			{
				BearerAuth: [],
			},
		],
	},
};

export function getPaymentAction(actionName: string): PaymentActionConfig | undefined {
	return paymentActions[actionName];
}
