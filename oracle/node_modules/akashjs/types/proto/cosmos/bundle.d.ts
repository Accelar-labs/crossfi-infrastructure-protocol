import * as _55 from "./app/v1alpha1/config";
import * as _56 from "./app/v1alpha1/module";
import * as _57 from "./app/v1alpha1/query";
import * as _58 from "./auth/v1beta1/auth";
import * as _59 from "./auth/v1beta1/genesis";
import * as _60 from "./auth/v1beta1/query";
import * as _61 from "./authz/v1beta1/authz";
import * as _62 from "./authz/v1beta1/event";
import * as _63 from "./authz/v1beta1/genesis";
import * as _64 from "./authz/v1beta1/query";
import * as _65 from "./authz/v1beta1/tx";
import * as _66 from "./bank/v1beta1/authz";
import * as _67 from "./bank/v1beta1/bank";
import * as _68 from "./bank/v1beta1/genesis";
import * as _69 from "./bank/v1beta1/query";
import * as _70 from "./bank/v1beta1/tx";
import * as _71 from "./base/abci/v1beta1/abci";
import * as _72 from "./base/kv/v1beta1/kv";
import * as _73 from "./base/query/v1beta1/pagination";
import * as _74 from "./base/reflection/v1beta1/reflection";
import * as _75 from "./base/reflection/v2alpha1/reflection";
import * as _76 from "./base/snapshots/v1beta1/snapshot";
import * as _77 from "./base/store/v1beta1/commit_info";
import * as _78 from "./base/store/v1beta1/listening";
import * as _79 from "./base/tendermint/v1beta1/query";
import * as _80 from "./base/v1beta1/coin";
import * as _81 from "./capability/v1beta1/capability";
import * as _82 from "./capability/v1beta1/genesis";
import * as _83 from "./crisis/v1beta1/genesis";
import * as _84 from "./crisis/v1beta1/tx";
import * as _85 from "./crypto/ed25519/keys";
import * as _86 from "./crypto/hd/v1/hd";
import * as _87 from "./crypto/keyring/v1/record";
import * as _88 from "./crypto/multisig/keys";
import * as _89 from "./crypto/secp256k1/keys";
import * as _90 from "./crypto/secp256r1/keys";
import * as _91 from "./distribution/v1beta1/distribution";
import * as _92 from "./distribution/v1beta1/genesis";
import * as _93 from "./distribution/v1beta1/query";
import * as _94 from "./distribution/v1beta1/tx";
import * as _95 from "./evidence/v1beta1/evidence";
import * as _96 from "./evidence/v1beta1/genesis";
import * as _97 from "./evidence/v1beta1/query";
import * as _98 from "./evidence/v1beta1/tx";
import * as _99 from "./feegrant/v1beta1/feegrant";
import * as _100 from "./feegrant/v1beta1/genesis";
import * as _101 from "./feegrant/v1beta1/query";
import * as _102 from "./feegrant/v1beta1/tx";
import * as _103 from "./genutil/v1beta1/genesis";
import * as _104 from "./gov/v1/genesis";
import * as _105 from "./gov/v1/gov";
import * as _106 from "./gov/v1/query";
import * as _107 from "./gov/v1/tx";
import * as _108 from "./gov/v1beta1/genesis";
import * as _109 from "./gov/v1beta1/gov";
import * as _110 from "./gov/v1beta1/query";
import * as _111 from "./gov/v1beta1/tx";
import * as _112 from "./group/v1/events";
import * as _113 from "./group/v1/genesis";
import * as _114 from "./group/v1/query";
import * as _115 from "./group/v1/tx";
import * as _116 from "./group/v1/types";
import * as _117 from "./mint/v1beta1/genesis";
import * as _118 from "./mint/v1beta1/mint";
import * as _119 from "./mint/v1beta1/query";
import * as _121 from "./nft/v1beta1/event";
import * as _122 from "./nft/v1beta1/genesis";
import * as _123 from "./nft/v1beta1/nft";
import * as _124 from "./nft/v1beta1/query";
import * as _125 from "./nft/v1beta1/tx";
import * as _126 from "./orm/v1/orm";
import * as _127 from "./orm/v1alpha1/schema";
import * as _128 from "./params/v1beta1/params";
import * as _129 from "./params/v1beta1/query";
import * as _130 from "./slashing/v1beta1/genesis";
import * as _131 from "./slashing/v1beta1/query";
import * as _132 from "./slashing/v1beta1/slashing";
import * as _133 from "./slashing/v1beta1/tx";
import * as _134 from "./staking/v1beta1/authz";
import * as _135 from "./staking/v1beta1/genesis";
import * as _136 from "./staking/v1beta1/query";
import * as _137 from "./staking/v1beta1/staking";
import * as _138 from "./staking/v1beta1/tx";
import * as _139 from "./tx/signing/v1beta1/signing";
import * as _140 from "./tx/v1beta1/service";
import * as _141 from "./tx/v1beta1/tx";
import * as _142 from "./upgrade/v1beta1/query";
import * as _143 from "./upgrade/v1beta1/tx";
import * as _144 from "./upgrade/v1beta1/upgrade";
import * as _145 from "./vesting/v1beta1/tx";
import * as _146 from "./vesting/v1beta1/vesting";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryConfigRequest: {
                encode(_: _57.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryConfigRequest;
                fromJSON(_: any): _57.QueryConfigRequest;
                toJSON(_: _57.QueryConfigRequest): unknown;
                fromPartial(_: {}): _57.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _57.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryConfigResponse;
                fromJSON(object: any): _57.QueryConfigResponse;
                toJSON(message: _57.QueryConfigResponse): unknown;
                fromPartial(object: {
                    config?: {
                        modules?: {
                            name?: string;
                            config?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    };
                }): _57.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _56.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ModuleDescriptor;
                fromJSON(object: any): _56.ModuleDescriptor;
                toJSON(message: _56.ModuleDescriptor): unknown;
                fromPartial(object: {
                    goImport?: string;
                    usePackage?: {
                        name?: string;
                        revision?: number;
                    }[];
                    canMigrateFrom?: {
                        module?: string;
                    }[];
                }): _56.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _56.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.PackageReference;
                fromJSON(object: any): _56.PackageReference;
                toJSON(message: _56.PackageReference): unknown;
                fromPartial(object: {
                    name?: string;
                    revision?: number;
                }): _56.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _56.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MigrateFromInfo;
                fromJSON(object: any): _56.MigrateFromInfo;
                toJSON(message: _56.MigrateFromInfo): unknown;
                fromPartial(object: {
                    module?: string;
                }): _56.MigrateFromInfo;
            };
            Config: {
                encode(message: _55.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Config;
                fromJSON(object: any): _55.Config;
                toJSON(message: _55.Config): unknown;
                fromPartial(object: {
                    modules?: {
                        name?: string;
                        config?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _55.Config;
            };
            ModuleConfig: {
                encode(message: _55.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ModuleConfig;
                fromJSON(object: any): _55.ModuleConfig;
                toJSON(message: _55.ModuleConfig): unknown;
                fromPartial(object: {
                    name?: string;
                    config?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _55.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryAccountsRequest: {
                encode(message: _60.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryAccountsRequest;
                fromJSON(object: any): _60.QueryAccountsRequest;
                toJSON(message: _60.QueryAccountsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _60.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _60.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryAccountsResponse;
                fromJSON(object: any): _60.QueryAccountsResponse;
                toJSON(message: _60.QueryAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _60.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _60.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryAccountRequest;
                fromJSON(object: any): _60.QueryAccountRequest;
                toJSON(message: _60.QueryAccountRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _60.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _60.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryModuleAccountsRequest;
                fromJSON(_: any): _60.QueryModuleAccountsRequest;
                toJSON(_: _60.QueryModuleAccountsRequest): unknown;
                fromPartial(_: {}): _60.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _60.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryParamsResponse;
                fromJSON(object: any): _60.QueryParamsResponse;
                toJSON(message: _60.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: any;
                        txSigLimit?: any;
                        txSizeCostPerByte?: any;
                        sigVerifyCostEd25519?: any;
                        sigVerifyCostSecp256k1?: any;
                    };
                }): _60.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _60.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryAccountResponse;
                fromJSON(object: any): _60.QueryAccountResponse;
                toJSON(message: _60.QueryAccountResponse): unknown;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _60.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _60.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryParamsRequest;
                fromJSON(_: any): _60.QueryParamsRequest;
                toJSON(_: _60.QueryParamsRequest): unknown;
                fromPartial(_: {}): _60.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _60.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryModuleAccountsResponse;
                fromJSON(object: any): _60.QueryModuleAccountsResponse;
                toJSON(message: _60.QueryModuleAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _60.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _60.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Bech32PrefixRequest;
                fromJSON(_: any): _60.Bech32PrefixRequest;
                toJSON(_: _60.Bech32PrefixRequest): unknown;
                fromPartial(_: {}): _60.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _60.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Bech32PrefixResponse;
                fromJSON(object: any): _60.Bech32PrefixResponse;
                toJSON(message: _60.Bech32PrefixResponse): unknown;
                fromPartial(object: {
                    bech32Prefix?: string;
                }): _60.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _60.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.AddressBytesToStringRequest;
                fromJSON(object: any): _60.AddressBytesToStringRequest;
                toJSON(message: _60.AddressBytesToStringRequest): unknown;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _60.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _60.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.AddressBytesToStringResponse;
                fromJSON(object: any): _60.AddressBytesToStringResponse;
                toJSON(message: _60.AddressBytesToStringResponse): unknown;
                fromPartial(object: {
                    addressString?: string;
                }): _60.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _60.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.AddressStringToBytesRequest;
                fromJSON(object: any): _60.AddressStringToBytesRequest;
                toJSON(message: _60.AddressStringToBytesRequest): unknown;
                fromPartial(object: {
                    addressString?: string;
                }): _60.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _60.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.AddressStringToBytesResponse;
                fromJSON(object: any): _60.AddressStringToBytesResponse;
                toJSON(message: _60.AddressStringToBytesResponse): unknown;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _60.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _59.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.GenesisState;
                fromJSON(object: any): _59.GenesisState;
                toJSON(message: _59.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: any;
                        txSigLimit?: any;
                        txSizeCostPerByte?: any;
                        sigVerifyCostEd25519?: any;
                        sigVerifyCostSecp256k1?: any;
                    };
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _59.GenesisState;
            };
            BaseAccount: {
                encode(message: _58.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.BaseAccount;
                fromJSON(object: any): _58.BaseAccount;
                toJSON(message: _58.BaseAccount): unknown;
                fromPartial(object: {
                    address?: string;
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    accountNumber?: any;
                    sequence?: any;
                }): _58.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _58.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.ModuleAccount;
                fromJSON(object: any): _58.ModuleAccount;
                toJSON(message: _58.ModuleAccount): unknown;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: any;
                        sequence?: any;
                    };
                    name?: string;
                    permissions?: string[];
                }): _58.ModuleAccount;
            };
            Params: {
                encode(message: _58.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Params;
                fromJSON(object: any): _58.Params;
                toJSON(message: _58.Params): unknown;
                fromPartial(object: {
                    maxMemoCharacters?: any;
                    txSigLimit?: any;
                    txSizeCostPerByte?: any;
                    sigVerifyCostEd25519?: any;
                    sigVerifyCostSecp256k1?: any;
                }): _58.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _65.MsgGrant): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    exec(value: _65.MsgExec): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    revoke(value: _65.MsgRevoke): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _65.MsgGrant): {
                        typeUrl: string;
                        value: _65.MsgGrant;
                    };
                    exec(value: _65.MsgExec): {
                        typeUrl: string;
                        value: _65.MsgExec;
                    };
                    revoke(value: _65.MsgRevoke): {
                        typeUrl: string;
                        value: _65.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _65.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _65.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _65.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _65.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _65.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _65.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _65.MsgGrant): {
                        typeUrl: string;
                        value: _65.MsgGrant;
                    };
                    exec(value: _65.MsgExec): {
                        typeUrl: string;
                        value: _65.MsgExec;
                    };
                    revoke(value: _65.MsgRevoke): {
                        typeUrl: string;
                        value: _65.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _65.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _65.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _65.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _65.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _65.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _65.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _65.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgGrant;
                fromJSON(object: any): _65.MsgGrant;
                toJSON(message: _65.MsgGrant): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    };
                }): _65.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _65.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgExecResponse;
                fromJSON(object: any): _65.MsgExecResponse;
                toJSON(message: _65.MsgExecResponse): unknown;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _65.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _65.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgExec;
                fromJSON(object: any): _65.MsgExec;
                toJSON(message: _65.MsgExec): unknown;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _65.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _65.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgGrantResponse;
                fromJSON(_: any): _65.MsgGrantResponse;
                toJSON(_: _65.MsgGrantResponse): unknown;
                fromPartial(_: {}): _65.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _65.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgRevoke;
                fromJSON(object: any): _65.MsgRevoke;
                toJSON(message: _65.MsgRevoke): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                }): _65.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _65.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgRevokeResponse;
                fromJSON(_: any): _65.MsgRevokeResponse;
                toJSON(_: _65.MsgRevokeResponse): unknown;
                fromPartial(_: {}): _65.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _64.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGrantsRequest;
                fromJSON(object: any): _64.QueryGrantsRequest;
                toJSON(message: _64.QueryGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _64.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _64.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGrantsResponse;
                fromJSON(object: any): _64.QueryGrantsResponse;
                toJSON(message: _64.QueryGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _64.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _64.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGranterGrantsRequest;
                fromJSON(object: any): _64.QueryGranterGrantsRequest;
                toJSON(message: _64.QueryGranterGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _64.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _64.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGranterGrantsResponse;
                fromJSON(object: any): _64.QueryGranterGrantsResponse;
                toJSON(message: _64.QueryGranterGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _64.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _64.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGranteeGrantsRequest;
                fromJSON(object: any): _64.QueryGranteeGrantsRequest;
                toJSON(message: _64.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _64.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _64.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryGranteeGrantsResponse;
                fromJSON(object: any): _64.QueryGranteeGrantsResponse;
                toJSON(message: _64.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _64.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GenesisState;
                fromJSON(object: any): _63.GenesisState;
                toJSON(message: _63.GenesisState): unknown;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                }): _63.GenesisState;
            };
            EventGrant: {
                encode(message: _62.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.EventGrant;
                fromJSON(object: any): _62.EventGrant;
                toJSON(message: _62.EventGrant): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _62.EventGrant;
            };
            EventRevoke: {
                encode(message: _62.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.EventRevoke;
                fromJSON(object: any): _62.EventRevoke;
                toJSON(message: _62.EventRevoke): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _62.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _61.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.GenericAuthorization;
                fromJSON(object: any): _61.GenericAuthorization;
                toJSON(message: _61.GenericAuthorization): unknown;
                fromPartial(object: {
                    msg?: string;
                }): _61.GenericAuthorization;
            };
            Grant: {
                encode(message: _61.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Grant;
                fromJSON(object: any): _61.Grant;
                toJSON(message: _61.Grant): unknown;
                fromPartial(object: {
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _61.Grant;
            };
            GrantAuthorization: {
                encode(message: _61.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.GrantAuthorization;
                fromJSON(object: any): _61.GrantAuthorization;
                toJSON(message: _61.GrantAuthorization): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _61.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _61.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.GrantQueueItem;
                fromJSON(object: any): _61.GrantQueueItem;
                toJSON(message: _61.GrantQueueItem): unknown;
                fromPartial(object: {
                    msgTypeUrls?: string[];
                }): _61.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _70.MsgSend): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _70.MsgMultiSend): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _70.MsgSend): {
                        typeUrl: string;
                        value: _70.MsgSend;
                    };
                    multiSend(value: _70.MsgMultiSend): {
                        typeUrl: string;
                        value: _70.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _70.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _70.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _70.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _70.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _70.MsgSend): {
                        typeUrl: string;
                        value: _70.MsgSend;
                    };
                    multiSend(value: _70.MsgMultiSend): {
                        typeUrl: string;
                        value: _70.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _70.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _70.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _70.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _70.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _70.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgSend;
                fromJSON(object: any): _70.MsgSend;
                toJSON(message: _70.MsgSend): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _70.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _70.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgSendResponse;
                fromJSON(_: any): _70.MsgSendResponse;
                toJSON(_: _70.MsgSendResponse): unknown;
                fromPartial(_: {}): _70.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _70.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgMultiSend;
                fromJSON(object: any): _70.MsgMultiSend;
                toJSON(message: _70.MsgMultiSend): unknown;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _70.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _70.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgMultiSendResponse;
                fromJSON(_: any): _70.MsgMultiSendResponse;
                toJSON(_: _70.MsgMultiSendResponse): unknown;
                fromPartial(_: {}): _70.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _69.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryBalanceRequest;
                fromJSON(object: any): _69.QueryBalanceRequest;
                toJSON(message: _69.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _69.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _69.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryBalanceResponse;
                fromJSON(object: any): _69.QueryBalanceResponse;
                toJSON(message: _69.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _69.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _69.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryAllBalancesRequest;
                fromJSON(object: any): _69.QueryAllBalancesRequest;
                toJSON(message: _69.QueryAllBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _69.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _69.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryAllBalancesResponse;
                fromJSON(object: any): _69.QueryAllBalancesResponse;
                toJSON(message: _69.QueryAllBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _69.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _69.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QuerySpendableBalancesRequest;
                fromJSON(object: any): _69.QuerySpendableBalancesRequest;
                toJSON(message: _69.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _69.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _69.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QuerySpendableBalancesResponse;
                fromJSON(object: any): _69.QuerySpendableBalancesResponse;
                toJSON(message: _69.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _69.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _69.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryTotalSupplyRequest;
                fromJSON(object: any): _69.QueryTotalSupplyRequest;
                toJSON(message: _69.QueryTotalSupplyRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _69.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _69.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryTotalSupplyResponse;
                fromJSON(object: any): _69.QueryTotalSupplyResponse;
                toJSON(message: _69.QueryTotalSupplyResponse): unknown;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _69.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _69.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QuerySupplyOfRequest;
                fromJSON(object: any): _69.QuerySupplyOfRequest;
                toJSON(message: _69.QuerySupplyOfRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _69.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _69.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QuerySupplyOfResponse;
                fromJSON(object: any): _69.QuerySupplyOfResponse;
                toJSON(message: _69.QuerySupplyOfResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _69.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _69.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryParamsRequest;
                fromJSON(_: any): _69.QueryParamsRequest;
                toJSON(_: _69.QueryParamsRequest): unknown;
                fromPartial(_: {}): _69.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _69.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryParamsResponse;
                fromJSON(object: any): _69.QueryParamsResponse;
                toJSON(message: _69.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _69.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _69.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryDenomsMetadataRequest;
                fromJSON(object: any): _69.QueryDenomsMetadataRequest;
                toJSON(message: _69.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _69.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _69.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryDenomsMetadataResponse;
                fromJSON(object: any): _69.QueryDenomsMetadataResponse;
                toJSON(message: _69.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _69.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _69.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryDenomMetadataRequest;
                fromJSON(object: any): _69.QueryDenomMetadataRequest;
                toJSON(message: _69.QueryDenomMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _69.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _69.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryDenomMetadataResponse;
                fromJSON(object: any): _69.QueryDenomMetadataResponse;
                toJSON(message: _69.QueryDenomMetadataResponse): unknown;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _69.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _69.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryDenomOwnersRequest;
                fromJSON(object: any): _69.QueryDenomOwnersRequest;
                toJSON(message: _69.QueryDenomOwnersRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _69.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _69.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.DenomOwner;
                fromJSON(object: any): _69.DenomOwner;
                toJSON(message: _69.DenomOwner): unknown;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _69.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _69.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryDenomOwnersResponse;
                fromJSON(object: any): _69.QueryDenomOwnersResponse;
                toJSON(message: _69.QueryDenomOwnersResponse): unknown;
                fromPartial(object: {
                    denomOwners?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _69.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.GenesisState;
                fromJSON(object: any): _68.GenesisState;
                toJSON(message: _68.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denomMetadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                }): _68.GenesisState;
            };
            Balance: {
                encode(message: _68.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Balance;
                fromJSON(object: any): _68.Balance;
                toJSON(message: _68.Balance): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _68.Balance;
            };
            Params: {
                encode(message: _67.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Params;
                fromJSON(object: any): _67.Params;
                toJSON(message: _67.Params): unknown;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _67.Params;
            };
            SendEnabled: {
                encode(message: _67.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.SendEnabled;
                fromJSON(object: any): _67.SendEnabled;
                toJSON(message: _67.SendEnabled): unknown;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _67.SendEnabled;
            };
            Input: {
                encode(message: _67.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Input;
                fromJSON(object: any): _67.Input;
                toJSON(message: _67.Input): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _67.Input;
            };
            Output: {
                encode(message: _67.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Output;
                fromJSON(object: any): _67.Output;
                toJSON(message: _67.Output): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _67.Output;
            };
            Supply: {
                encode(message: _67.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Supply;
                fromJSON(object: any): _67.Supply;
                toJSON(message: _67.Supply): unknown;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _67.Supply;
            };
            DenomUnit: {
                encode(message: _67.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.DenomUnit;
                fromJSON(object: any): _67.DenomUnit;
                toJSON(message: _67.DenomUnit): unknown;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _67.DenomUnit;
            };
            Metadata: {
                encode(message: _67.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Metadata;
                fromJSON(object: any): _67.Metadata;
                toJSON(message: _67.Metadata): unknown;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uriHash?: string;
                }): _67.Metadata;
            };
            SendAuthorization: {
                encode(message: _66.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.SendAuthorization;
                fromJSON(object: any): _66.SendAuthorization;
                toJSON(message: _66.SendAuthorization): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _66.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _71.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.TxResponse;
                    fromJSON(object: any): _71.TxResponse;
                    toJSON(message: _71.TxResponse): unknown;
                    fromPartial(object: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }): _71.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _71.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ABCIMessageLog;
                    fromJSON(object: any): _71.ABCIMessageLog;
                    toJSON(message: _71.ABCIMessageLog): unknown;
                    fromPartial(object: {
                        msgIndex?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _71.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _71.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.StringEvent;
                    fromJSON(object: any): _71.StringEvent;
                    toJSON(message: _71.StringEvent): unknown;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _71.StringEvent;
                };
                Attribute: {
                    encode(message: _71.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Attribute;
                    fromJSON(object: any): _71.Attribute;
                    toJSON(message: _71.Attribute): unknown;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _71.Attribute;
                };
                GasInfo: {
                    encode(message: _71.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.GasInfo;
                    fromJSON(object: any): _71.GasInfo;
                    toJSON(message: _71.GasInfo): unknown;
                    fromPartial(object: {
                        gasWanted?: any;
                        gasUsed?: any;
                    }): _71.GasInfo;
                };
                Result: {
                    encode(message: _71.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Result;
                    fromJSON(object: any): _71.Result;
                    toJSON(message: _71.Result): unknown;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _71.Result;
                };
                SimulationResponse: {
                    encode(message: _71.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.SimulationResponse;
                    fromJSON(object: any): _71.SimulationResponse;
                    toJSON(message: _71.SimulationResponse): unknown;
                    fromPartial(object: {
                        gasInfo?: {
                            gasWanted?: any;
                            gasUsed?: any;
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                            msgResponses?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                    }): _71.SimulationResponse;
                };
                MsgData: {
                    encode(message: _71.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgData;
                    fromJSON(object: any): _71.MsgData;
                    toJSON(message: _71.MsgData): unknown;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _71.MsgData;
                };
                TxMsgData: {
                    encode(message: _71.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.TxMsgData;
                    fromJSON(object: any): _71.TxMsgData;
                    toJSON(message: _71.TxMsgData): unknown;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _71.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _71.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.SearchTxsResult;
                    fromJSON(object: any): _71.SearchTxsResult;
                    toJSON(message: _71.SearchTxsResult): unknown;
                    fromPartial(object: {
                        totalCount?: any;
                        count?: any;
                        pageNumber?: any;
                        pageTotal?: any;
                        limit?: any;
                        txs?: {
                            height?: any;
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            rawLog?: string;
                            logs?: {
                                msgIndex?: number;
                                log?: string;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                            }[];
                            info?: string;
                            gasWanted?: any;
                            gasUsed?: any;
                            tx?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            timestamp?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                        }[];
                    }): _71.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _72.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Pairs;
                    fromJSON(object: any): _72.Pairs;
                    toJSON(message: _72.Pairs): unknown;
                    fromPartial(object: {
                        pairs?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _72.Pairs;
                };
                Pair: {
                    encode(message: _72.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Pair;
                    fromJSON(object: any): _72.Pair;
                    toJSON(message: _72.Pair): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _72.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _73.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.PageRequest;
                    fromJSON(object: any): _73.PageRequest;
                    toJSON(message: _73.PageRequest): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _73.PageRequest;
                };
                PageResponse: {
                    encode(message: _73.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.PageResponse;
                    fromJSON(object: any): _73.PageResponse;
                    toJSON(message: _73.PageResponse): unknown;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: any;
                    }): _73.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _74.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ListAllInterfacesRequest;
                    fromJSON(_: any): _74.ListAllInterfacesRequest;
                    toJSON(_: _74.ListAllInterfacesRequest): unknown;
                    fromPartial(_: {}): _74.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _74.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ListAllInterfacesResponse;
                    fromJSON(object: any): _74.ListAllInterfacesResponse;
                    toJSON(message: _74.ListAllInterfacesResponse): unknown;
                    fromPartial(object: {
                        interfaceNames?: string[];
                    }): _74.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _74.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ListImplementationsRequest;
                    fromJSON(object: any): _74.ListImplementationsRequest;
                    toJSON(message: _74.ListImplementationsRequest): unknown;
                    fromPartial(object: {
                        interfaceName?: string;
                    }): _74.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _74.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ListImplementationsResponse;
                    fromJSON(object: any): _74.ListImplementationsResponse;
                    toJSON(message: _74.ListImplementationsResponse): unknown;
                    fromPartial(object: {
                        implementationMessageNames?: string[];
                    }): _74.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _75.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.AppDescriptor;
                    fromJSON(object: any): _75.AppDescriptor;
                    toJSON(message: _75.AppDescriptor): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix?: string;
                        };
                        queryServices?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _75.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _75.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.TxDescriptor;
                    fromJSON(object: any): _75.TxDescriptor;
                    toJSON(message: _75.TxDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _75.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _75.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.AuthnDescriptor;
                    fromJSON(object: any): _75.AuthnDescriptor;
                    toJSON(message: _75.AuthnDescriptor): unknown;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _75.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _75.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.SigningModeDescriptor;
                    fromJSON(object: any): _75.SigningModeDescriptor;
                    toJSON(message: _75.SigningModeDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _75.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _75.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ChainDescriptor;
                    fromJSON(object: any): _75.ChainDescriptor;
                    toJSON(message: _75.ChainDescriptor): unknown;
                    fromPartial(object: {
                        id?: string;
                    }): _75.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _75.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.CodecDescriptor;
                    fromJSON(object: any): _75.CodecDescriptor;
                    toJSON(message: _75.CodecDescriptor): unknown;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interfaceAcceptingMessages?: {
                                fullname?: string;
                                fieldDescriptorNames?: string[];
                            }[];
                            interfaceImplementers?: {
                                fullname?: string;
                                typeUrl?: string;
                            }[];
                        }[];
                    }): _75.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _75.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.InterfaceDescriptor;
                    fromJSON(object: any): _75.InterfaceDescriptor;
                    toJSON(message: _75.InterfaceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        interfaceAcceptingMessages?: {
                            fullname?: string;
                            fieldDescriptorNames?: string[];
                        }[];
                        interfaceImplementers?: {
                            fullname?: string;
                            typeUrl?: string;
                        }[];
                    }): _75.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _75.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _75.InterfaceImplementerDescriptor;
                    toJSON(message: _75.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _75.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _75.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _75.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _75.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _75.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _75.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ConfigurationDescriptor;
                    fromJSON(object: any): _75.ConfigurationDescriptor;
                    toJSON(message: _75.ConfigurationDescriptor): unknown;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _75.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _75.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgDescriptor;
                    fromJSON(object: any): _75.MsgDescriptor;
                    toJSON(message: _75.MsgDescriptor): unknown;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _75.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _75.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _75.GetAuthnDescriptorRequest;
                    toJSON(_: _75.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: {}): _75.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _75.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _75.GetAuthnDescriptorResponse;
                    toJSON(message: _75.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _75.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _75.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GetChainDescriptorRequest;
                    fromJSON(_: any): _75.GetChainDescriptorRequest;
                    toJSON(_: _75.GetChainDescriptorRequest): unknown;
                    fromPartial(_: {}): _75.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _75.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GetChainDescriptorResponse;
                    fromJSON(object: any): _75.GetChainDescriptorResponse;
                    toJSON(message: _75.GetChainDescriptorResponse): unknown;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _75.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _75.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GetCodecDescriptorRequest;
                    fromJSON(_: any): _75.GetCodecDescriptorRequest;
                    toJSON(_: _75.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: {}): _75.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _75.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GetCodecDescriptorResponse;
                    fromJSON(object: any): _75.GetCodecDescriptorResponse;
                    toJSON(message: _75.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                    }): _75.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _75.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _75.GetConfigurationDescriptorRequest;
                    toJSON(_: _75.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: {}): _75.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _75.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _75.GetConfigurationDescriptorResponse;
                    toJSON(message: _75.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _75.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _75.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _75.GetQueryServicesDescriptorRequest;
                    toJSON(_: _75.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: {}): _75.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _75.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _75.GetQueryServicesDescriptorResponse;
                    toJSON(message: _75.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                    }): _75.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _75.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GetTxDescriptorRequest;
                    fromJSON(_: any): _75.GetTxDescriptorRequest;
                    toJSON(_: _75.GetTxDescriptorRequest): unknown;
                    fromPartial(_: {}): _75.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _75.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GetTxDescriptorResponse;
                    fromJSON(object: any): _75.GetTxDescriptorResponse;
                    toJSON(message: _75.GetTxDescriptorResponse): unknown;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _75.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _75.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryServicesDescriptor;
                    fromJSON(object: any): _75.QueryServicesDescriptor;
                    toJSON(message: _75.QueryServicesDescriptor): unknown;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _75.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _75.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryServiceDescriptor;
                    fromJSON(object: any): _75.QueryServiceDescriptor;
                    toJSON(message: _75.QueryServiceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _75.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _75.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryMethodDescriptor;
                    fromJSON(object: any): _75.QueryMethodDescriptor;
                    toJSON(message: _75.QueryMethodDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _75.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _76.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Snapshot;
                    fromJSON(object: any): _76.Snapshot;
                    toJSON(message: _76.Snapshot): unknown;
                    fromPartial(object: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: {
                            chunkHashes?: Uint8Array[];
                        };
                    }): _76.Snapshot;
                };
                Metadata: {
                    encode(message: _76.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Metadata;
                    fromJSON(object: any): _76.Metadata;
                    toJSON(message: _76.Metadata): unknown;
                    fromPartial(object: {
                        chunkHashes?: Uint8Array[];
                    }): _76.Metadata;
                };
                SnapshotItem: {
                    encode(message: _76.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SnapshotItem;
                    fromJSON(object: any): _76.SnapshotItem;
                    toJSON(message: _76.SnapshotItem): unknown;
                    fromPartial(object: {
                        store?: {
                            name?: string;
                        };
                        iavl?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            version?: any;
                            height?: number;
                        };
                        extension?: {
                            name?: string;
                            format?: number;
                        };
                        extensionPayload?: {
                            payload?: Uint8Array;
                        };
                        kv?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        };
                        schema?: {
                            keys?: Uint8Array[];
                        };
                    }): _76.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _76.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SnapshotStoreItem;
                    fromJSON(object: any): _76.SnapshotStoreItem;
                    toJSON(message: _76.SnapshotStoreItem): unknown;
                    fromPartial(object: {
                        name?: string;
                    }): _76.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _76.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SnapshotIAVLItem;
                    fromJSON(object: any): _76.SnapshotIAVLItem;
                    toJSON(message: _76.SnapshotIAVLItem): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        version?: any;
                        height?: number;
                    }): _76.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _76.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SnapshotExtensionMeta;
                    fromJSON(object: any): _76.SnapshotExtensionMeta;
                    toJSON(message: _76.SnapshotExtensionMeta): unknown;
                    fromPartial(object: {
                        name?: string;
                        format?: number;
                    }): _76.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _76.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SnapshotExtensionPayload;
                    fromJSON(object: any): _76.SnapshotExtensionPayload;
                    toJSON(message: _76.SnapshotExtensionPayload): unknown;
                    fromPartial(object: {
                        payload?: Uint8Array;
                    }): _76.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _76.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SnapshotKVItem;
                    fromJSON(object: any): _76.SnapshotKVItem;
                    toJSON(message: _76.SnapshotKVItem): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _76.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _76.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SnapshotSchema;
                    fromJSON(object: any): _76.SnapshotSchema;
                    toJSON(message: _76.SnapshotSchema): unknown;
                    fromPartial(object: {
                        keys?: Uint8Array[];
                    }): _76.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _78.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.StoreKVPair;
                    fromJSON(object: any): _78.StoreKVPair;
                    toJSON(message: _78.StoreKVPair): unknown;
                    fromPartial(object: {
                        storeKey?: string;
                        delete?: boolean;
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _78.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _77.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.CommitInfo;
                    fromJSON(object: any): _77.CommitInfo;
                    toJSON(message: _77.CommitInfo): unknown;
                    fromPartial(object: {
                        version?: any;
                        storeInfos?: {
                            name?: string;
                            commitId?: {
                                version?: any;
                                hash?: Uint8Array;
                            };
                        }[];
                    }): _77.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _77.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.StoreInfo;
                    fromJSON(object: any): _77.StoreInfo;
                    toJSON(message: _77.StoreInfo): unknown;
                    fromPartial(object: {
                        name?: string;
                        commitId?: {
                            version?: any;
                            hash?: Uint8Array;
                        };
                    }): _77.StoreInfo;
                };
                CommitID: {
                    encode(message: _77.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.CommitID;
                    fromJSON(object: any): _77.CommitID;
                    toJSON(message: _77.CommitID): unknown;
                    fromPartial(object: {
                        version?: any;
                        hash?: Uint8Array;
                    }): _77.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                GetValidatorSetByHeightRequest: {
                    encode(message: _79.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _79.GetValidatorSetByHeightRequest;
                    toJSON(message: _79.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: {
                        height?: any;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _79.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _79.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _79.GetValidatorSetByHeightResponse;
                    toJSON(message: _79.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: {
                        blockHeight?: any;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _79.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _79.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _79.GetLatestValidatorSetRequest;
                    toJSON(message: _79.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _79.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _79.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _79.GetLatestValidatorSetResponse;
                    toJSON(message: _79.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: {
                        blockHeight?: any;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _79.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _79.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Validator;
                    fromJSON(object: any): _79.Validator;
                    toJSON(message: _79.Validator): unknown;
                    fromPartial(object: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }): _79.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _79.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetBlockByHeightRequest;
                    fromJSON(object: any): _79.GetBlockByHeightRequest;
                    toJSON(message: _79.GetBlockByHeightRequest): unknown;
                    fromPartial(object: {
                        height?: any;
                    }): _79.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _79.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetBlockByHeightResponse;
                    fromJSON(object: any): _79.GetBlockByHeightResponse;
                    toJSON(message: _79.GetBlockByHeightResponse): unknown;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: any;
                                        validatorPower?: any;
                                        timestamp?: Date;
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: any;
                                                        app?: any;
                                                    };
                                                    chainId?: string;
                                                    height?: any;
                                                    time?: Date;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: any;
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: Date;
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                };
                                                totalVotingPower?: any;
                                            };
                                        };
                                        commonHeight?: any;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: any;
                                            proposerPriority?: any;
                                        }[];
                                        totalVotingPower?: any;
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _79.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _79.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetLatestBlockRequest;
                    fromJSON(_: any): _79.GetLatestBlockRequest;
                    toJSON(_: _79.GetLatestBlockRequest): unknown;
                    fromPartial(_: {}): _79.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _79.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetLatestBlockResponse;
                    fromJSON(object: any): _79.GetLatestBlockResponse;
                    toJSON(message: _79.GetLatestBlockResponse): unknown;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: any;
                                        validatorPower?: any;
                                        timestamp?: Date;
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: any;
                                                        app?: any;
                                                    };
                                                    chainId?: string;
                                                    height?: any;
                                                    time?: Date;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: any;
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: Date;
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                };
                                                totalVotingPower?: any;
                                            };
                                        };
                                        commonHeight?: any;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: any;
                                            proposerPriority?: any;
                                        }[];
                                        totalVotingPower?: any;
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _79.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _79.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetSyncingRequest;
                    fromJSON(_: any): _79.GetSyncingRequest;
                    toJSON(_: _79.GetSyncingRequest): unknown;
                    fromPartial(_: {}): _79.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _79.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetSyncingResponse;
                    fromJSON(object: any): _79.GetSyncingResponse;
                    toJSON(message: _79.GetSyncingResponse): unknown;
                    fromPartial(object: {
                        syncing?: boolean;
                    }): _79.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _79.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetNodeInfoRequest;
                    fromJSON(_: any): _79.GetNodeInfoRequest;
                    toJSON(_: _79.GetNodeInfoRequest): unknown;
                    fromPartial(_: {}): _79.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _79.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetNodeInfoResponse;
                    fromJSON(object: any): _79.GetNodeInfoResponse;
                    toJSON(message: _79.GetNodeInfoResponse): unknown;
                    fromPartial(object: {
                        nodeInfo?: {
                            protocolVersion?: {
                                p2p?: any;
                                block?: any;
                                app?: any;
                            };
                            nodeId?: string;
                            listenAddr?: string;
                            network?: string;
                            version?: string;
                            channels?: Uint8Array;
                            moniker?: string;
                            other?: {
                                txIndex?: string;
                                rpcAddress?: string;
                            };
                        };
                        applicationVersion?: {
                            name?: string;
                            appName?: string;
                            version?: string;
                            gitCommit?: string;
                            buildTags?: string;
                            goVersion?: string;
                            buildDeps?: {
                                path?: string;
                                version?: string;
                                sum?: string;
                            }[];
                            cosmosSdkVersion?: string;
                        };
                    }): _79.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _79.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.VersionInfo;
                    fromJSON(object: any): _79.VersionInfo;
                    toJSON(message: _79.VersionInfo): unknown;
                    fromPartial(object: {
                        name?: string;
                        appName?: string;
                        version?: string;
                        gitCommit?: string;
                        buildTags?: string;
                        goVersion?: string;
                        buildDeps?: {
                            path?: string;
                            version?: string;
                            sum?: string;
                        }[];
                        cosmosSdkVersion?: string;
                    }): _79.VersionInfo;
                };
                Module: {
                    encode(message: _79.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Module;
                    fromJSON(object: any): _79.Module;
                    toJSON(message: _79.Module): unknown;
                    fromPartial(object: {
                        path?: string;
                        version?: string;
                        sum?: string;
                    }): _79.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _80.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Coin;
                fromJSON(object: any): _80.Coin;
                toJSON(message: _80.Coin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _80.Coin;
            };
            DecCoin: {
                encode(message: _80.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.DecCoin;
                fromJSON(object: any): _80.DecCoin;
                toJSON(message: _80.DecCoin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _80.DecCoin;
            };
            IntProto: {
                encode(message: _80.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.IntProto;
                fromJSON(object: any): _80.IntProto;
                toJSON(message: _80.IntProto): unknown;
                fromPartial(object: {
                    int?: string;
                }): _80.IntProto;
            };
            DecProto: {
                encode(message: _80.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.DecProto;
                fromJSON(object: any): _80.DecProto;
                toJSON(message: _80.DecProto): unknown;
                fromPartial(object: {
                    dec?: string;
                }): _80.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _82.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GenesisOwners;
                fromJSON(object: any): _82.GenesisOwners;
                toJSON(message: _82.GenesisOwners): unknown;
                fromPartial(object: {
                    index?: any;
                    indexOwners?: {
                        owners?: {
                            module?: string;
                            name?: string;
                        }[];
                    };
                }): _82.GenesisOwners;
            };
            GenesisState: {
                encode(message: _82.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GenesisState;
                fromJSON(object: any): _82.GenesisState;
                toJSON(message: _82.GenesisState): unknown;
                fromPartial(object: {
                    index?: any;
                    owners?: {
                        index?: any;
                        indexOwners?: {
                            owners?: {
                                module?: string;
                                name?: string;
                            }[];
                        };
                    }[];
                }): _82.GenesisState;
            };
            Capability: {
                encode(message: _81.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Capability;
                fromJSON(object: any): _81.Capability;
                toJSON(message: _81.Capability): unknown;
                fromPartial(object: {
                    index?: any;
                }): _81.Capability;
            };
            Owner: {
                encode(message: _81.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Owner;
                fromJSON(object: any): _81.Owner;
                toJSON(message: _81.Owner): unknown;
                fromPartial(object: {
                    module?: string;
                    name?: string;
                }): _81.Owner;
            };
            CapabilityOwners: {
                encode(message: _81.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.CapabilityOwners;
                fromJSON(object: any): _81.CapabilityOwners;
                toJSON(message: _81.CapabilityOwners): unknown;
                fromPartial(object: {
                    owners?: {
                        module?: string;
                        name?: string;
                    }[];
                }): _81.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _84.MsgVerifyInvariant): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _84.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _84.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _84.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _84.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _84.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _84.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _84.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _84.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _84.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgVerifyInvariant;
                fromJSON(object: any): _84.MsgVerifyInvariant;
                toJSON(message: _84.MsgVerifyInvariant): unknown;
                fromPartial(object: {
                    sender?: string;
                    invariantModuleName?: string;
                    invariantRoute?: string;
                }): _84.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _84.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.MsgVerifyInvariantResponse;
                fromJSON(_: any): _84.MsgVerifyInvariantResponse;
                toJSON(_: _84.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: {}): _84.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _83.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GenesisState;
                fromJSON(object: any): _83.GenesisState;
                toJSON(message: _83.GenesisState): unknown;
                fromPartial(object: {
                    constantFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _83.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _85.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.PubKey;
                fromJSON(object: any): _85.PubKey;
                toJSON(message: _85.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _85.PubKey;
            };
            PrivKey: {
                encode(message: _85.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.PrivKey;
                fromJSON(object: any): _85.PrivKey;
                toJSON(message: _85.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _85.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _86.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.BIP44Params;
                    fromJSON(object: any): _86.BIP44Params;
                    toJSON(message: _86.BIP44Params): unknown;
                    fromPartial(object: {
                        purpose?: number;
                        coinType?: number;
                        account?: number;
                        change?: boolean;
                        addressIndex?: number;
                    }): _86.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _87.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Record;
                    fromJSON(object: any): _87.Record;
                    toJSON(message: _87.Record): unknown;
                    fromPartial(object: {
                        name?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        local?: {
                            privKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            privKeyType?: string;
                        };
                        ledger?: {
                            path?: {
                                purpose?: number;
                                coinType?: number;
                                account?: number;
                                change?: boolean;
                                addressIndex?: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    }): _87.Record;
                };
                Record_Local: {
                    encode(message: _87.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Record_Local;
                    fromJSON(object: any): _87.Record_Local;
                    toJSON(message: _87.Record_Local): unknown;
                    fromPartial(object: {
                        privKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        privKeyType?: string;
                    }): _87.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _87.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Record_Ledger;
                    fromJSON(object: any): _87.Record_Ledger;
                    toJSON(message: _87.Record_Ledger): unknown;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coinType?: number;
                            account?: number;
                            change?: boolean;
                            addressIndex?: number;
                        };
                    }): _87.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _87.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Record_Multi;
                    fromJSON(_: any): _87.Record_Multi;
                    toJSON(_: _87.Record_Multi): unknown;
                    fromPartial(_: {}): _87.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _87.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Record_Offline;
                    fromJSON(_: any): _87.Record_Offline;
                    toJSON(_: _87.Record_Offline): unknown;
                    fromPartial(_: {}): _87.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _88.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.LegacyAminoPubKey;
                fromJSON(object: any): _88.LegacyAminoPubKey;
                toJSON(message: _88.LegacyAminoPubKey): unknown;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _88.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _89.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.PubKey;
                fromJSON(object: any): _89.PubKey;
                toJSON(message: _89.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _89.PubKey;
            };
            PrivKey: {
                encode(message: _89.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.PrivKey;
                fromJSON(object: any): _89.PrivKey;
                toJSON(message: _89.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _89.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _90.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.PubKey;
                fromJSON(object: any): _90.PubKey;
                toJSON(message: _90.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _90.PubKey;
            };
            PrivKey: {
                encode(message: _90.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.PrivKey;
                fromJSON(object: any): _90.PrivKey;
                toJSON(message: _90.PrivKey): unknown;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _90.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _94.MsgSetWithdrawAddress): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _94.MsgWithdrawDelegatorReward): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _94.MsgWithdrawValidatorCommission): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _94.MsgFundCommunityPool): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _94.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _94.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _94.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _94.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _94.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _94.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _94.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _94.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _94.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _94.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _94.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _94.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _94.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _94.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _94.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _94.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _94.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _94.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _94.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _94.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _94.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _94.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _94.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _94.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _94.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _94.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _94.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _94.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _94.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _94.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _94.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _94.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _94.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgSetWithdrawAddress;
                fromJSON(object: any): _94.MsgSetWithdrawAddress;
                toJSON(message: _94.MsgSetWithdrawAddress): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _94.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _94.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _94.MsgSetWithdrawAddressResponse;
                toJSON(_: _94.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: {}): _94.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _94.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _94.MsgWithdrawDelegatorReward;
                toJSON(message: _94.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _94.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _94.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _94.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _94.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _94.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _94.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _94.MsgWithdrawValidatorCommission;
                toJSON(message: _94.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _94.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _94.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _94.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _94.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _94.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _94.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgFundCommunityPool;
                fromJSON(object: any): _94.MsgFundCommunityPool;
                toJSON(message: _94.MsgFundCommunityPool): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _94.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _94.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _94.MsgFundCommunityPoolResponse;
                toJSON(_: _94.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: {}): _94.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _93.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryParamsRequest;
                fromJSON(_: any): _93.QueryParamsRequest;
                toJSON(_: _93.QueryParamsRequest): unknown;
                fromPartial(_: {}): _93.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _93.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryParamsResponse;
                fromJSON(object: any): _93.QueryParamsResponse;
                toJSON(message: _93.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _93.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _93.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _93.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _93.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _93.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _93.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _93.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _93.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _93.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _93.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryValidatorCommissionRequest;
                fromJSON(object: any): _93.QueryValidatorCommissionRequest;
                toJSON(message: _93.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _93.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _93.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryValidatorCommissionResponse;
                fromJSON(object: any): _93.QueryValidatorCommissionResponse;
                toJSON(message: _93.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _93.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _93.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryValidatorSlashesRequest;
                fromJSON(object: any): _93.QueryValidatorSlashesRequest;
                toJSON(message: _93.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    startingHeight?: any;
                    endingHeight?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _93.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _93.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryValidatorSlashesResponse;
                fromJSON(object: any): _93.QueryValidatorSlashesResponse;
                toJSON(message: _93.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _93.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _93.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryDelegationRewardsRequest;
                fromJSON(object: any): _93.QueryDelegationRewardsRequest;
                toJSON(message: _93.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _93.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _93.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryDelegationRewardsResponse;
                fromJSON(object: any): _93.QueryDelegationRewardsResponse;
                toJSON(message: _93.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _93.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _93.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _93.QueryDelegationTotalRewardsRequest;
                toJSON(message: _93.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _93.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _93.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _93.QueryDelegationTotalRewardsResponse;
                toJSON(message: _93.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _93.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _93.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _93.QueryDelegatorValidatorsRequest;
                toJSON(message: _93.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _93.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _93.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _93.QueryDelegatorValidatorsResponse;
                toJSON(message: _93.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: string[];
                }): _93.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _93.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _93.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _93.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _93.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _93.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _93.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _93.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _93.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _93.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryCommunityPoolRequest;
                fromJSON(_: any): _93.QueryCommunityPoolRequest;
                toJSON(_: _93.QueryCommunityPoolRequest): unknown;
                fromPartial(_: {}): _93.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _93.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryCommunityPoolResponse;
                fromJSON(object: any): _93.QueryCommunityPoolResponse;
                toJSON(message: _93.QueryCommunityPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _93.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _92.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.DelegatorWithdrawInfo;
                fromJSON(object: any): _92.DelegatorWithdrawInfo;
                toJSON(message: _92.DelegatorWithdrawInfo): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _92.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _92.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _92.ValidatorOutstandingRewardsRecord;
                toJSON(message: _92.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _92.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _92.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _92.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _92.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _92.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _92.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _92.ValidatorHistoricalRewardsRecord;
                toJSON(message: _92.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    period?: any;
                    rewards?: {
                        cumulativeRewardRatio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        referenceCount?: number;
                    };
                }): _92.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _92.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _92.ValidatorCurrentRewardsRecord;
                toJSON(message: _92.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: any;
                    };
                }): _92.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _92.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.DelegatorStartingInfoRecord;
                fromJSON(object: any): _92.DelegatorStartingInfoRecord;
                toJSON(message: _92.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: any;
                        stake?: string;
                        height?: any;
                    };
                }): _92.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _92.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ValidatorSlashEventRecord;
                fromJSON(object: any): _92.ValidatorSlashEventRecord;
                toJSON(message: _92.ValidatorSlashEventRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: any;
                    period?: any;
                    validatorSlashEvent?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    };
                }): _92.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _92.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GenesisState;
                fromJSON(object: any): _92.GenesisState;
                toJSON(message: _92.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                    feePool?: {
                        communityPool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string;
                        withdrawAddress?: string;
                    }[];
                    previousProposer?: string;
                    outstandingRewards?: {
                        validatorAddress?: string;
                        outstandingRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validatorHistoricalRewards?: {
                        validatorAddress?: string;
                        period?: any;
                        rewards?: {
                            cumulativeRewardRatio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            referenceCount?: number;
                        };
                    }[];
                    validatorCurrentRewards?: {
                        validatorAddress?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: any;
                        };
                    }[];
                    delegatorStartingInfos?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        startingInfo?: {
                            previousPeriod?: any;
                            stake?: string;
                            height?: any;
                        };
                    }[];
                    validatorSlashEvents?: {
                        validatorAddress?: string;
                        height?: any;
                        period?: any;
                        validatorSlashEvent?: {
                            validatorPeriod?: any;
                            fraction?: string;
                        };
                    }[];
                }): _92.GenesisState;
            };
            Params: {
                encode(message: _91.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Params;
                fromJSON(object: any): _91.Params;
                toJSON(message: _91.Params): unknown;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _91.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _91.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ValidatorHistoricalRewards;
                fromJSON(object: any): _91.ValidatorHistoricalRewards;
                toJSON(message: _91.ValidatorHistoricalRewards): unknown;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _91.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _91.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ValidatorCurrentRewards;
                fromJSON(object: any): _91.ValidatorCurrentRewards;
                toJSON(message: _91.ValidatorCurrentRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: any;
                }): _91.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _91.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ValidatorAccumulatedCommission;
                fromJSON(object: any): _91.ValidatorAccumulatedCommission;
                toJSON(message: _91.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _91.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _91.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ValidatorOutstandingRewards;
                fromJSON(object: any): _91.ValidatorOutstandingRewards;
                toJSON(message: _91.ValidatorOutstandingRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _91.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _91.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ValidatorSlashEvent;
                fromJSON(object: any): _91.ValidatorSlashEvent;
                toJSON(message: _91.ValidatorSlashEvent): unknown;
                fromPartial(object: {
                    validatorPeriod?: any;
                    fraction?: string;
                }): _91.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _91.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ValidatorSlashEvents;
                fromJSON(object: any): _91.ValidatorSlashEvents;
                toJSON(message: _91.ValidatorSlashEvents): unknown;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                }): _91.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _91.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.FeePool;
                fromJSON(object: any): _91.FeePool;
                toJSON(message: _91.FeePool): unknown;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _91.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _91.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.CommunityPoolSpendProposal;
                fromJSON(object: any): _91.CommunityPoolSpendProposal;
                toJSON(message: _91.CommunityPoolSpendProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _91.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _91.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.DelegatorStartingInfo;
                fromJSON(object: any): _91.DelegatorStartingInfo;
                toJSON(message: _91.DelegatorStartingInfo): unknown;
                fromPartial(object: {
                    previousPeriod?: any;
                    stake?: string;
                    height?: any;
                }): _91.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _91.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.DelegationDelegatorReward;
                fromJSON(object: any): _91.DelegationDelegatorReward;
                toJSON(message: _91.DelegationDelegatorReward): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _91.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _91.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _91.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _91.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _91.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _98.MsgSubmitEvidence): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _98.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _98.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _98.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _98.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _98.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _98.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _98.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _98.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _98.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgSubmitEvidence;
                fromJSON(object: any): _98.MsgSubmitEvidence;
                toJSON(message: _98.MsgSubmitEvidence): unknown;
                fromPartial(object: {
                    submitter?: string;
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _98.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _98.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _98.MsgSubmitEvidenceResponse;
                toJSON(message: _98.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                }): _98.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _97.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryEvidenceRequest;
                fromJSON(object: any): _97.QueryEvidenceRequest;
                toJSON(message: _97.QueryEvidenceRequest): unknown;
                fromPartial(object: {
                    evidenceHash?: Uint8Array;
                }): _97.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _97.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryEvidenceResponse;
                fromJSON(object: any): _97.QueryEvidenceResponse;
                toJSON(message: _97.QueryEvidenceResponse): unknown;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _97.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _97.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryAllEvidenceRequest;
                fromJSON(object: any): _97.QueryAllEvidenceRequest;
                toJSON(message: _97.QueryAllEvidenceRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _97.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _97.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryAllEvidenceResponse;
                fromJSON(object: any): _97.QueryAllEvidenceResponse;
                toJSON(message: _97.QueryAllEvidenceResponse): unknown;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _97.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _96.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GenesisState;
                fromJSON(object: any): _96.GenesisState;
                toJSON(message: _96.GenesisState): unknown;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _96.GenesisState;
            };
            Equivocation: {
                encode(message: _95.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Equivocation;
                fromJSON(object: any): _95.Equivocation;
                toJSON(message: _95.Equivocation): unknown;
                fromPartial(object: {
                    height?: any;
                    time?: Date;
                    power?: any;
                    consensusAddress?: string;
                }): _95.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _102.MsgGrantAllowance): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _102.MsgRevokeAllowance): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _102.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _102.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _102.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _102.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _102.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _102.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _102.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _102.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _102.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _102.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _102.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _102.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _102.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _102.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _102.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _102.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _102.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgGrantAllowance;
                fromJSON(object: any): _102.MsgGrantAllowance;
                toJSON(message: _102.MsgGrantAllowance): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _102.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _102.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgGrantAllowanceResponse;
                fromJSON(_: any): _102.MsgGrantAllowanceResponse;
                toJSON(_: _102.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: {}): _102.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _102.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgRevokeAllowance;
                fromJSON(object: any): _102.MsgRevokeAllowance;
                toJSON(message: _102.MsgRevokeAllowance): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _102.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _102.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _102.MsgRevokeAllowanceResponse;
                toJSON(_: _102.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: {}): _102.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _101.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryAllowanceRequest;
                fromJSON(object: any): _101.QueryAllowanceRequest;
                toJSON(message: _101.QueryAllowanceRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _101.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _101.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryAllowanceResponse;
                fromJSON(object: any): _101.QueryAllowanceResponse;
                toJSON(message: _101.QueryAllowanceResponse): unknown;
                fromPartial(object: {
                    allowance?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _101.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _101.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryAllowancesRequest;
                fromJSON(object: any): _101.QueryAllowancesRequest;
                toJSON(message: _101.QueryAllowancesRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _101.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _101.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryAllowancesResponse;
                fromJSON(object: any): _101.QueryAllowancesResponse;
                toJSON(message: _101.QueryAllowancesResponse): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _101.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _101.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _101.QueryAllowancesByGranterRequest;
                toJSON(message: _101.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _101.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _101.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _101.QueryAllowancesByGranterResponse;
                toJSON(message: _101.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _101.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _100.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.GenesisState;
                fromJSON(object: any): _100.GenesisState;
                toJSON(message: _100.GenesisState): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _100.GenesisState;
            };
            BasicAllowance: {
                encode(message: _99.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.BasicAllowance;
                fromJSON(object: any): _99.BasicAllowance;
                toJSON(message: _99.BasicAllowance): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    expiration?: Date;
                }): _99.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _99.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.PeriodicAllowance;
                fromJSON(object: any): _99.PeriodicAllowance;
                toJSON(message: _99.PeriodicAllowance): unknown;
                fromPartial(object: {
                    basic?: {
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        expiration?: Date;
                    };
                    period?: string;
                    periodSpendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodCanSpend?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodReset?: Date;
                }): _99.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _99.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.AllowedMsgAllowance;
                fromJSON(object: any): _99.AllowedMsgAllowance;
                toJSON(message: _99.AllowedMsgAllowance): unknown;
                fromPartial(object: {
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    allowedMessages?: string[];
                }): _99.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _99.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Grant;
                fromJSON(object: any): _99.Grant;
                toJSON(message: _99.Grant): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _99.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _103.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.GenesisState;
                fromJSON(object: any): _103.GenesisState;
                toJSON(message: _103.GenesisState): unknown;
                fromPartial(object: {
                    genTxs?: Uint8Array[];
                }): _103.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _107.MsgSubmitProposal): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _107.MsgExecLegacyContent): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    vote(value: _107.MsgVote): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _107.MsgVoteWeighted): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    deposit(value: _107.MsgDeposit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _107.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _107.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _107.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _107.MsgExecLegacyContent;
                    };
                    vote(value: _107.MsgVote): {
                        typeUrl: string;
                        value: _107.MsgVote;
                    };
                    voteWeighted(value: _107.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _107.MsgVoteWeighted;
                    };
                    deposit(value: _107.MsgDeposit): {
                        typeUrl: string;
                        value: _107.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _107.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _107.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _107.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _107.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _107.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _107.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _107.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _107.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _107.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _107.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _107.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _107.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _107.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _107.MsgExecLegacyContent;
                    };
                    vote(value: _107.MsgVote): {
                        typeUrl: string;
                        value: _107.MsgVote;
                    };
                    voteWeighted(value: _107.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _107.MsgVoteWeighted;
                    };
                    deposit(value: _107.MsgDeposit): {
                        typeUrl: string;
                        value: _107.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _107.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _107.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _107.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _107.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _107.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _107.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _107.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _107.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _107.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _107.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _107.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgSubmitProposal;
                fromJSON(object: any): _107.MsgSubmitProposal;
                toJSON(message: _107.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                    metadata?: string;
                }): _107.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _107.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgSubmitProposalResponse;
                fromJSON(object: any): _107.MsgSubmitProposalResponse;
                toJSON(message: _107.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _107.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _107.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgExecLegacyContent;
                fromJSON(object: any): _107.MsgExecLegacyContent;
                toJSON(message: _107.MsgExecLegacyContent): unknown;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    authority?: string;
                }): _107.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _107.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgExecLegacyContentResponse;
                fromJSON(_: any): _107.MsgExecLegacyContentResponse;
                toJSON(_: _107.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: {}): _107.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _107.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgVote;
                fromJSON(object: any): _107.MsgVote;
                toJSON(message: _107.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _105.VoteOption;
                    metadata?: string;
                }): _107.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _107.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgVoteResponse;
                fromJSON(_: any): _107.MsgVoteResponse;
                toJSON(_: _107.MsgVoteResponse): unknown;
                fromPartial(_: {}): _107.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _107.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgVoteWeighted;
                fromJSON(object: any): _107.MsgVoteWeighted;
                toJSON(message: _107.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _105.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _107.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _107.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgVoteWeightedResponse;
                fromJSON(_: any): _107.MsgVoteWeightedResponse;
                toJSON(_: _107.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _107.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _107.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgDeposit;
                fromJSON(object: any): _107.MsgDeposit;
                toJSON(message: _107.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _107.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _107.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgDepositResponse;
                fromJSON(_: any): _107.MsgDepositResponse;
                toJSON(_: _107.MsgDepositResponse): unknown;
                fromPartial(_: {}): _107.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _106.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryProposalRequest;
                fromJSON(object: any): _106.QueryProposalRequest;
                toJSON(message: _106.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _106.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _106.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryProposalResponse;
                fromJSON(object: any): _106.QueryProposalResponse;
                toJSON(message: _106.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _105.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    };
                }): _106.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _106.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryProposalsRequest;
                fromJSON(object: any): _106.QueryProposalsRequest;
                toJSON(message: _106.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _105.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _106.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _106.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryProposalsResponse;
                fromJSON(object: any): _106.QueryProposalsResponse;
                toJSON(message: _106.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _105.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _106.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _106.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryVoteRequest;
                fromJSON(object: any): _106.QueryVoteRequest;
                toJSON(message: _106.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _106.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _106.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryVoteResponse;
                fromJSON(object: any): _106.QueryVoteResponse;
                toJSON(message: _106.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _105.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    };
                }): _106.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _106.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryVotesRequest;
                fromJSON(object: any): _106.QueryVotesRequest;
                toJSON(message: _106.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _106.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _106.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryVotesResponse;
                fromJSON(object: any): _106.QueryVotesResponse;
                toJSON(message: _106.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _105.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _106.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _106.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryParamsRequest;
                fromJSON(object: any): _106.QueryParamsRequest;
                toJSON(message: _106.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _106.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _106.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryParamsResponse;
                fromJSON(object: any): _106.QueryParamsResponse;
                toJSON(message: _106.QueryParamsResponse): unknown;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: string;
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: string;
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _106.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _106.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryDepositRequest;
                fromJSON(object: any): _106.QueryDepositRequest;
                toJSON(message: _106.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _106.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _106.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryDepositResponse;
                fromJSON(object: any): _106.QueryDepositResponse;
                toJSON(message: _106.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _106.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _106.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryDepositsRequest;
                fromJSON(object: any): _106.QueryDepositsRequest;
                toJSON(message: _106.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _106.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _106.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryDepositsResponse;
                fromJSON(object: any): _106.QueryDepositsResponse;
                toJSON(message: _106.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _106.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _106.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryTallyResultRequest;
                fromJSON(object: any): _106.QueryTallyResultRequest;
                toJSON(message: _106.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _106.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _106.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryTallyResultResponse;
                fromJSON(object: any): _106.QueryTallyResultResponse;
                toJSON(message: _106.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _106.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _105.VoteOption;
            voteOptionToJSON(object: _105.VoteOption): string;
            proposalStatusFromJSON(object: any): _105.ProposalStatus;
            proposalStatusToJSON(object: _105.ProposalStatus): string;
            VoteOption: typeof _105.VoteOption;
            ProposalStatus: typeof _105.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _105.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.WeightedVoteOption;
                fromJSON(object: any): _105.WeightedVoteOption;
                toJSON(message: _105.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _105.VoteOption;
                    weight?: string;
                }): _105.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _105.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Deposit;
                fromJSON(object: any): _105.Deposit;
                toJSON(message: _105.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _105.Deposit;
            };
            Proposal: {
                encode(message: _105.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Proposal;
                fromJSON(object: any): _105.Proposal;
                toJSON(message: _105.Proposal): unknown;
                fromPartial(object: {
                    id?: any;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    status?: _105.ProposalStatus;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                    metadata?: string;
                }): _105.Proposal;
            };
            TallyResult: {
                encode(message: _105.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.TallyResult;
                fromJSON(object: any): _105.TallyResult;
                toJSON(message: _105.TallyResult): unknown;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _105.TallyResult;
            };
            Vote: {
                encode(message: _105.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Vote;
                fromJSON(object: any): _105.Vote;
                toJSON(message: _105.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _105.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _105.Vote;
            };
            DepositParams: {
                encode(message: _105.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.DepositParams;
                fromJSON(object: any): _105.DepositParams;
                toJSON(message: _105.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: string;
                }): _105.DepositParams;
            };
            VotingParams: {
                encode(message: _105.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.VotingParams;
                fromJSON(object: any): _105.VotingParams;
                toJSON(message: _105.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: string;
                }): _105.VotingParams;
            };
            TallyParams: {
                encode(message: _105.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.TallyParams;
                fromJSON(object: any): _105.TallyParams;
                toJSON(message: _105.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: string;
                    threshold?: string;
                    vetoThreshold?: string;
                }): _105.TallyParams;
            };
            GenesisState: {
                encode(message: _104.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GenesisState;
                fromJSON(object: any): _104.GenesisState;
                toJSON(message: _104.GenesisState): unknown;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _105.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    proposals?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _105.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: string;
                    };
                    votingParams?: {
                        votingPeriod?: string;
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _104.GenesisState;
            };
        };
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _111.MsgSubmitProposal): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    vote(value: _111.MsgVote): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _111.MsgVoteWeighted): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    deposit(value: _111.MsgDeposit): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _111.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _111.MsgSubmitProposal;
                    };
                    vote(value: _111.MsgVote): {
                        typeUrl: string;
                        value: _111.MsgVote;
                    };
                    voteWeighted(value: _111.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _111.MsgVoteWeighted;
                    };
                    deposit(value: _111.MsgDeposit): {
                        typeUrl: string;
                        value: _111.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _111.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _111.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _111.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _111.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _111.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _111.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _111.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _111.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _111.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _111.MsgSubmitProposal;
                    };
                    vote(value: _111.MsgVote): {
                        typeUrl: string;
                        value: _111.MsgVote;
                    };
                    voteWeighted(value: _111.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _111.MsgVoteWeighted;
                    };
                    deposit(value: _111.MsgDeposit): {
                        typeUrl: string;
                        value: _111.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _111.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _111.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _111.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _111.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _111.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _111.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _111.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _111.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _111.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgSubmitProposal;
                fromJSON(object: any): _111.MsgSubmitProposal;
                toJSON(message: _111.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _111.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _111.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgSubmitProposalResponse;
                fromJSON(object: any): _111.MsgSubmitProposalResponse;
                toJSON(message: _111.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _111.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _111.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgVote;
                fromJSON(object: any): _111.MsgVote;
                toJSON(message: _111.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _109.VoteOption;
                }): _111.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _111.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgVoteResponse;
                fromJSON(_: any): _111.MsgVoteResponse;
                toJSON(_: _111.MsgVoteResponse): unknown;
                fromPartial(_: {}): _111.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _111.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgVoteWeighted;
                fromJSON(object: any): _111.MsgVoteWeighted;
                toJSON(message: _111.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _109.VoteOption;
                        weight?: string;
                    }[];
                }): _111.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _111.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgVoteWeightedResponse;
                fromJSON(_: any): _111.MsgVoteWeightedResponse;
                toJSON(_: _111.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _111.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _111.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgDeposit;
                fromJSON(object: any): _111.MsgDeposit;
                toJSON(message: _111.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _111.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _111.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgDepositResponse;
                fromJSON(_: any): _111.MsgDepositResponse;
                toJSON(_: _111.MsgDepositResponse): unknown;
                fromPartial(_: {}): _111.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _110.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryProposalRequest;
                fromJSON(object: any): _110.QueryProposalRequest;
                toJSON(message: _110.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _110.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _110.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryProposalResponse;
                fromJSON(object: any): _110.QueryProposalResponse;
                toJSON(message: _110.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _109.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    };
                }): _110.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _110.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryProposalsRequest;
                fromJSON(object: any): _110.QueryProposalsRequest;
                toJSON(message: _110.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _109.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _110.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _110.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryProposalsResponse;
                fromJSON(object: any): _110.QueryProposalsResponse;
                toJSON(message: _110.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _109.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _110.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _110.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryVoteRequest;
                fromJSON(object: any): _110.QueryVoteRequest;
                toJSON(message: _110.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _110.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _110.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryVoteResponse;
                fromJSON(object: any): _110.QueryVoteResponse;
                toJSON(message: _110.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _109.VoteOption;
                        options?: {
                            option?: _109.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _110.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _110.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryVotesRequest;
                fromJSON(object: any): _110.QueryVotesRequest;
                toJSON(message: _110.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _110.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _110.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryVotesResponse;
                fromJSON(object: any): _110.QueryVotesResponse;
                toJSON(message: _110.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _109.VoteOption;
                        options?: {
                            option?: _109.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _110.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _110.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryParamsRequest;
                fromJSON(object: any): _110.QueryParamsRequest;
                toJSON(message: _110.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _110.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _110.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryParamsResponse;
                fromJSON(object: any): _110.QueryParamsResponse;
                toJSON(message: _110.QueryParamsResponse): unknown;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: string;
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: string;
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _110.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _110.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryDepositRequest;
                fromJSON(object: any): _110.QueryDepositRequest;
                toJSON(message: _110.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _110.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _110.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryDepositResponse;
                fromJSON(object: any): _110.QueryDepositResponse;
                toJSON(message: _110.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _110.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _110.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryDepositsRequest;
                fromJSON(object: any): _110.QueryDepositsRequest;
                toJSON(message: _110.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _110.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _110.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryDepositsResponse;
                fromJSON(object: any): _110.QueryDepositsResponse;
                toJSON(message: _110.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _110.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _110.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryTallyResultRequest;
                fromJSON(object: any): _110.QueryTallyResultRequest;
                toJSON(message: _110.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _110.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _110.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryTallyResultResponse;
                fromJSON(object: any): _110.QueryTallyResultResponse;
                toJSON(message: _110.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _110.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _109.VoteOption;
            voteOptionToJSON(object: _109.VoteOption): string;
            proposalStatusFromJSON(object: any): _109.ProposalStatus;
            proposalStatusToJSON(object: _109.ProposalStatus): string;
            VoteOption: typeof _109.VoteOption;
            ProposalStatus: typeof _109.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _109.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.WeightedVoteOption;
                fromJSON(object: any): _109.WeightedVoteOption;
                toJSON(message: _109.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _109.VoteOption;
                    weight?: string;
                }): _109.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _109.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.TextProposal;
                fromJSON(object: any): _109.TextProposal;
                toJSON(message: _109.TextProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _109.TextProposal;
            };
            Deposit: {
                encode(message: _109.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Deposit;
                fromJSON(object: any): _109.Deposit;
                toJSON(message: _109.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _109.Deposit;
            };
            Proposal: {
                encode(message: _109.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Proposal;
                fromJSON(object: any): _109.Proposal;
                toJSON(message: _109.Proposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    status?: _109.ProposalStatus;
                    finalTallyResult?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                }): _109.Proposal;
            };
            TallyResult: {
                encode(message: _109.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.TallyResult;
                fromJSON(object: any): _109.TallyResult;
                toJSON(message: _109.TallyResult): unknown;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _109.TallyResult;
            };
            Vote: {
                encode(message: _109.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Vote;
                fromJSON(object: any): _109.Vote;
                toJSON(message: _109.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _109.VoteOption;
                    options?: {
                        option?: _109.VoteOption;
                        weight?: string;
                    }[];
                }): _109.Vote;
            };
            DepositParams: {
                encode(message: _109.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.DepositParams;
                fromJSON(object: any): _109.DepositParams;
                toJSON(message: _109.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: string;
                }): _109.DepositParams;
            };
            VotingParams: {
                encode(message: _109.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.VotingParams;
                fromJSON(object: any): _109.VotingParams;
                toJSON(message: _109.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: string;
                }): _109.VotingParams;
            };
            TallyParams: {
                encode(message: _109.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.TallyParams;
                fromJSON(object: any): _109.TallyParams;
                toJSON(message: _109.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _109.TallyParams;
            };
            GenesisState: {
                encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GenesisState;
                fromJSON(object: any): _108.GenesisState;
                toJSON(message: _108.GenesisState): unknown;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _109.VoteOption;
                        options?: {
                            option?: _109.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _109.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: string;
                    };
                    votingParams?: {
                        votingPeriod?: string;
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _108.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _115.MsgCreateGroup): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _115.MsgUpdateGroupMembers): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _115.MsgUpdateGroupAdmin): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _115.MsgUpdateGroupMetadata): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _115.MsgCreateGroupPolicy): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _115.MsgCreateGroupWithPolicy): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _115.MsgUpdateGroupPolicyAdmin): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _115.MsgUpdateGroupPolicyDecisionPolicy): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _115.MsgUpdateGroupPolicyMetadata): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _115.MsgSubmitProposal): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _115.MsgWithdrawProposal): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    vote(value: _115.MsgVote): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    exec(value: _115.MsgExec): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _115.MsgLeaveGroup): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _115.MsgCreateGroup): {
                        typeUrl: string;
                        value: _115.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _115.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _115.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _115.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _115.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _115.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _115.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _115.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _115.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _115.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _115.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _115.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _115.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _115.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _115.MsgWithdrawProposal;
                    };
                    vote(value: _115.MsgVote): {
                        typeUrl: string;
                        value: _115.MsgVote;
                    };
                    exec(value: _115.MsgExec): {
                        typeUrl: string;
                        value: _115.MsgExec;
                    };
                    leaveGroup(value: _115.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _115.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _115.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _115.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _115.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _115.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _115.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _115.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _115.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _115.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _115.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _115.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _115.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _115.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _115.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _115.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _115.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _115.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _115.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _115.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _115.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _115.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _115.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _115.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _115.MsgCreateGroup): {
                        typeUrl: string;
                        value: _115.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _115.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _115.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _115.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _115.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _115.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _115.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _115.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _115.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _115.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _115.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _115.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _115.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _115.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _115.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _115.MsgWithdrawProposal;
                    };
                    vote(value: _115.MsgVote): {
                        typeUrl: string;
                        value: _115.MsgVote;
                    };
                    exec(value: _115.MsgExec): {
                        typeUrl: string;
                        value: _115.MsgExec;
                    };
                    leaveGroup(value: _115.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _115.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _115.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    }) => _115.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _115.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    }) => _115.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _115.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _115.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _115.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _115.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _115.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _115.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _115.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _115.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _115.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _115.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _115.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, address, decision_policy }: {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _115.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _115.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _115.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _115.MsgSubmitProposal) => {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ address, proposers, metadata, messages, exec }: {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _115.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _115.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _115.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _115.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _115.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _115.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _115.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _115.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _115.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _116.VoteOption;
            voteOptionToJSON(object: _116.VoteOption): string;
            proposalStatusFromJSON(object: any): _116.ProposalStatus;
            proposalStatusToJSON(object: _116.ProposalStatus): string;
            proposalResultFromJSON(object: any): _116.ProposalResult;
            proposalResultToJSON(object: _116.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _116.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _116.ProposalExecutorResult): string;
            VoteOption: typeof _116.VoteOption;
            ProposalStatus: typeof _116.ProposalStatus;
            ProposalResult: typeof _116.ProposalResult;
            ProposalExecutorResult: typeof _116.ProposalExecutorResult;
            Member: {
                encode(message: _116.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Member;
                fromJSON(object: any): _116.Member;
                toJSON(message: _116.Member): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                    metadata?: string;
                    addedAt?: Date;
                }): _116.Member;
            };
            Members: {
                encode(message: _116.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Members;
                fromJSON(object: any): _116.Members;
                toJSON(message: _116.Members): unknown;
                fromPartial(object: {
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                }): _116.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _116.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ThresholdDecisionPolicy;
                fromJSON(object: any): _116.ThresholdDecisionPolicy;
                toJSON(message: _116.ThresholdDecisionPolicy): unknown;
                fromPartial(object: {
                    threshold?: string;
                    windows?: {
                        votingPeriod?: string;
                        minExecutionPeriod?: string;
                    };
                }): _116.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _116.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.PercentageDecisionPolicy;
                fromJSON(object: any): _116.PercentageDecisionPolicy;
                toJSON(message: _116.PercentageDecisionPolicy): unknown;
                fromPartial(object: {
                    percentage?: string;
                    windows?: {
                        votingPeriod?: string;
                        minExecutionPeriod?: string;
                    };
                }): _116.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _116.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.DecisionPolicyWindows;
                fromJSON(object: any): _116.DecisionPolicyWindows;
                toJSON(message: _116.DecisionPolicyWindows): unknown;
                fromPartial(object: {
                    votingPeriod?: string;
                    minExecutionPeriod?: string;
                }): _116.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _116.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.GroupInfo;
                fromJSON(object: any): _116.GroupInfo;
                toJSON(message: _116.GroupInfo): unknown;
                fromPartial(object: {
                    id?: any;
                    admin?: string;
                    metadata?: string;
                    version?: any;
                    totalWeight?: string;
                    createdAt?: Date;
                }): _116.GroupInfo;
            };
            GroupMember: {
                encode(message: _116.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.GroupMember;
                fromJSON(object: any): _116.GroupMember;
                toJSON(message: _116.GroupMember): unknown;
                fromPartial(object: {
                    groupId?: any;
                    member?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    };
                }): _116.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _116.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.GroupPolicyInfo;
                fromJSON(object: any): _116.GroupPolicyInfo;
                toJSON(message: _116.GroupPolicyInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    groupId?: any;
                    admin?: string;
                    metadata?: string;
                    version?: any;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    createdAt?: Date;
                }): _116.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _116.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Proposal;
                fromJSON(object: any): _116.Proposal;
                toJSON(message: _116.Proposal): unknown;
                fromPartial(object: {
                    id?: any;
                    address?: string;
                    metadata?: string;
                    proposers?: string[];
                    submitTime?: Date;
                    groupVersion?: any;
                    groupPolicyVersion?: any;
                    status?: _116.ProposalStatus;
                    result?: _116.ProposalResult;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    votingPeriodEnd?: Date;
                    executorResult?: _116.ProposalExecutorResult;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _116.Proposal;
            };
            TallyResult: {
                encode(message: _116.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.TallyResult;
                fromJSON(object: any): _116.TallyResult;
                toJSON(message: _116.TallyResult): unknown;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _116.TallyResult;
            };
            Vote: {
                encode(message: _116.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Vote;
                fromJSON(object: any): _116.Vote;
                toJSON(message: _116.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _116.VoteOption;
                    metadata?: string;
                    submitTime?: Date;
                }): _116.Vote;
            };
            execFromJSON(object: any): _115.Exec;
            execToJSON(object: _115.Exec): string;
            Exec: typeof _115.Exec;
            MsgCreateGroup: {
                encode(message: _115.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgCreateGroup;
                fromJSON(object: any): _115.MsgCreateGroup;
                toJSON(message: _115.MsgCreateGroup): unknown;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                    metadata?: string;
                }): _115.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _115.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgCreateGroupResponse;
                fromJSON(object: any): _115.MsgCreateGroupResponse;
                toJSON(message: _115.MsgCreateGroupResponse): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _115.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _115.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpdateGroupMembers;
                fromJSON(object: any): _115.MsgUpdateGroupMembers;
                toJSON(message: _115.MsgUpdateGroupMembers): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    memberUpdates?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                }): _115.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _115.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _115.MsgUpdateGroupMembersResponse;
                toJSON(_: _115.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: {}): _115.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _115.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpdateGroupAdmin;
                fromJSON(object: any): _115.MsgUpdateGroupAdmin;
                toJSON(message: _115.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    newAdmin?: string;
                }): _115.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _115.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _115.MsgUpdateGroupAdminResponse;
                toJSON(_: _115.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: {}): _115.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _115.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpdateGroupMetadata;
                fromJSON(object: any): _115.MsgUpdateGroupMetadata;
                toJSON(message: _115.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    metadata?: string;
                }): _115.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _115.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _115.MsgUpdateGroupMetadataResponse;
                toJSON(_: _115.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: {}): _115.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _115.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgCreateGroupPolicy;
                fromJSON(object: any): _115.MsgCreateGroupPolicy;
                toJSON(message: _115.MsgCreateGroupPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    metadata?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _115.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _115.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _115.MsgCreateGroupPolicyResponse;
                toJSON(message: _115.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _115.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _115.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _115.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _115.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    newAdmin?: string;
                }): _115.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _115.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _115.MsgCreateGroupWithPolicy;
                toJSON(message: _115.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                    groupMetadata?: string;
                    groupPolicyMetadata?: string;
                    groupPolicyAsAdmin?: boolean;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _115.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _115.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _115.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _115.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: {
                    groupId?: any;
                    groupPolicyAddress?: string;
                }): _115.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _115.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _115.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _115.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: {}): _115.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _115.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _115.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _115.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _115.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _115.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _115.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _115.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: {}): _115.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _115.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _115.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _115.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    metadata?: string;
                }): _115.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _115.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _115.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _115.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: {}): _115.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _115.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgSubmitProposal;
                fromJSON(object: any): _115.MsgSubmitProposal;
                toJSON(message: _115.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    address?: string;
                    proposers?: string[];
                    metadata?: string;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    exec?: _115.Exec;
                }): _115.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _115.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgSubmitProposalResponse;
                fromJSON(object: any): _115.MsgSubmitProposalResponse;
                toJSON(message: _115.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _115.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _115.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgWithdrawProposal;
                fromJSON(object: any): _115.MsgWithdrawProposal;
                toJSON(message: _115.MsgWithdrawProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    address?: string;
                }): _115.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _115.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgWithdrawProposalResponse;
                fromJSON(_: any): _115.MsgWithdrawProposalResponse;
                toJSON(_: _115.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: {}): _115.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _115.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgVote;
                fromJSON(object: any): _115.MsgVote;
                toJSON(message: _115.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _116.VoteOption;
                    metadata?: string;
                    exec?: _115.Exec;
                }): _115.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _115.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgVoteResponse;
                fromJSON(_: any): _115.MsgVoteResponse;
                toJSON(_: _115.MsgVoteResponse): unknown;
                fromPartial(_: {}): _115.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _115.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgExec;
                fromJSON(object: any): _115.MsgExec;
                toJSON(message: _115.MsgExec): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    signer?: string;
                }): _115.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _115.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgExecResponse;
                fromJSON(_: any): _115.MsgExecResponse;
                toJSON(_: _115.MsgExecResponse): unknown;
                fromPartial(_: {}): _115.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _115.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgLeaveGroup;
                fromJSON(object: any): _115.MsgLeaveGroup;
                toJSON(message: _115.MsgLeaveGroup): unknown;
                fromPartial(object: {
                    address?: string;
                    groupId?: any;
                }): _115.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _115.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgLeaveGroupResponse;
                fromJSON(_: any): _115.MsgLeaveGroupResponse;
                toJSON(_: _115.MsgLeaveGroupResponse): unknown;
                fromPartial(_: {}): _115.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _114.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryGroupInfoRequest;
                fromJSON(object: any): _114.QueryGroupInfoRequest;
                toJSON(message: _114.QueryGroupInfoRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _114.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _114.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryGroupInfoResponse;
                fromJSON(object: any): _114.QueryGroupInfoResponse;
                toJSON(message: _114.QueryGroupInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: Date;
                    };
                }): _114.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _114.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _114.QueryGroupPolicyInfoRequest;
                toJSON(message: _114.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _114.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _114.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _114.QueryGroupPolicyInfoResponse;
                toJSON(message: _114.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    };
                }): _114.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _114.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryGroupMembersRequest;
                fromJSON(object: any): _114.QueryGroupMembersRequest;
                toJSON(message: _114.QueryGroupMembersRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _114.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _114.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryGroupMembersResponse;
                fromJSON(object: any): _114.QueryGroupMembersResponse;
                toJSON(message: _114.QueryGroupMembersResponse): unknown;
                fromPartial(object: {
                    members?: {
                        groupId?: any;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            addedAt?: Date;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _114.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _114.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryGroupsByAdminRequest;
                fromJSON(object: any): _114.QueryGroupsByAdminRequest;
                toJSON(message: _114.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _114.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _114.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryGroupsByAdminResponse;
                fromJSON(object: any): _114.QueryGroupsByAdminResponse;
                toJSON(message: _114.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: {
                    groups?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _114.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _114.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _114.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _114.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _114.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _114.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _114.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _114.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _114.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _114.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _114.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _114.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _114.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _114.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _114.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _114.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _114.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _114.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryProposalRequest;
                fromJSON(object: any): _114.QueryProposalRequest;
                toJSON(message: _114.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _114.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _114.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryProposalResponse;
                fromJSON(object: any): _114.QueryProposalResponse;
                toJSON(message: _114.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        id?: any;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: any;
                        groupPolicyVersion?: any;
                        status?: _116.ProposalStatus;
                        result?: _116.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _116.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _114.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _114.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _114.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _114.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _114.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _114.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _114.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _114.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        id?: any;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: any;
                        groupPolicyVersion?: any;
                        status?: _116.ProposalStatus;
                        result?: _116.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _116.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _114.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _114.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _114.QueryVoteByProposalVoterRequest;
                toJSON(message: _114.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _114.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _114.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _114.QueryVoteByProposalVoterResponse;
                toJSON(message: _114.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _116.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    };
                }): _114.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _114.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryVotesByProposalRequest;
                fromJSON(object: any): _114.QueryVotesByProposalRequest;
                toJSON(message: _114.QueryVotesByProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _114.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _114.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryVotesByProposalResponse;
                fromJSON(object: any): _114.QueryVotesByProposalResponse;
                toJSON(message: _114.QueryVotesByProposalResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _116.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _114.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _114.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryVotesByVoterRequest;
                fromJSON(object: any): _114.QueryVotesByVoterRequest;
                toJSON(message: _114.QueryVotesByVoterRequest): unknown;
                fromPartial(object: {
                    voter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _114.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _114.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryVotesByVoterResponse;
                fromJSON(object: any): _114.QueryVotesByVoterResponse;
                toJSON(message: _114.QueryVotesByVoterResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _116.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _114.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _114.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryGroupsByMemberRequest;
                fromJSON(object: any): _114.QueryGroupsByMemberRequest;
                toJSON(message: _114.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _114.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _114.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryGroupsByMemberResponse;
                fromJSON(object: any): _114.QueryGroupsByMemberResponse;
                toJSON(message: _114.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: {
                    groups?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _114.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _114.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryTallyResultRequest;
                fromJSON(object: any): _114.QueryTallyResultRequest;
                toJSON(message: _114.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _114.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _114.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryTallyResultResponse;
                fromJSON(object: any): _114.QueryTallyResultResponse;
                toJSON(message: _114.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _114.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _113.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.GenesisState;
                fromJSON(object: any): _113.GenesisState;
                toJSON(message: _113.GenesisState): unknown;
                fromPartial(object: {
                    groupSeq?: any;
                    groups?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    groupMembers?: {
                        groupId?: any;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            addedAt?: Date;
                        };
                    }[];
                    groupPolicySeq?: any;
                    groupPolicies?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    proposalSeq?: any;
                    proposals?: {
                        id?: any;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: any;
                        groupPolicyVersion?: any;
                        status?: _116.ProposalStatus;
                        result?: _116.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _116.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _116.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                }): _113.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _112.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.EventCreateGroup;
                fromJSON(object: any): _112.EventCreateGroup;
                toJSON(message: _112.EventCreateGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _112.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _112.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.EventUpdateGroup;
                fromJSON(object: any): _112.EventUpdateGroup;
                toJSON(message: _112.EventUpdateGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _112.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _112.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.EventCreateGroupPolicy;
                fromJSON(object: any): _112.EventCreateGroupPolicy;
                toJSON(message: _112.EventCreateGroupPolicy): unknown;
                fromPartial(object: {
                    address?: string;
                }): _112.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _112.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.EventUpdateGroupPolicy;
                fromJSON(object: any): _112.EventUpdateGroupPolicy;
                toJSON(message: _112.EventUpdateGroupPolicy): unknown;
                fromPartial(object: {
                    address?: string;
                }): _112.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _112.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.EventSubmitProposal;
                fromJSON(object: any): _112.EventSubmitProposal;
                toJSON(message: _112.EventSubmitProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _112.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _112.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.EventWithdrawProposal;
                fromJSON(object: any): _112.EventWithdrawProposal;
                toJSON(message: _112.EventWithdrawProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _112.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _112.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.EventVote;
                fromJSON(object: any): _112.EventVote;
                toJSON(message: _112.EventVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _112.EventVote;
            };
            EventExec: {
                encode(message: _112.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.EventExec;
                fromJSON(object: any): _112.EventExec;
                toJSON(message: _112.EventExec): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    result?: _116.ProposalExecutorResult;
                }): _112.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _112.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.EventLeaveGroup;
                fromJSON(object: any): _112.EventLeaveGroup;
                toJSON(message: _112.EventLeaveGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                    address?: string;
                }): _112.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _119.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryParamsRequest;
                fromJSON(_: any): _119.QueryParamsRequest;
                toJSON(_: _119.QueryParamsRequest): unknown;
                fromPartial(_: {}): _119.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _119.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryParamsResponse;
                fromJSON(object: any): _119.QueryParamsResponse;
                toJSON(message: _119.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: any;
                    };
                }): _119.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _119.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryInflationRequest;
                fromJSON(_: any): _119.QueryInflationRequest;
                toJSON(_: _119.QueryInflationRequest): unknown;
                fromPartial(_: {}): _119.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _119.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryInflationResponse;
                fromJSON(object: any): _119.QueryInflationResponse;
                toJSON(message: _119.QueryInflationResponse): unknown;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _119.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _119.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _119.QueryAnnualProvisionsRequest;
                toJSON(_: _119.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: {}): _119.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _119.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _119.QueryAnnualProvisionsResponse;
                toJSON(message: _119.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _119.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _118.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Minter;
                fromJSON(object: any): _118.Minter;
                toJSON(message: _118.Minter): unknown;
                fromPartial(object: {
                    inflation?: string;
                    annualProvisions?: string;
                }): _118.Minter;
            };
            Params: {
                encode(message: _118.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Params;
                fromJSON(object: any): _118.Params;
                toJSON(message: _118.Params): unknown;
                fromPartial(object: {
                    mintDenom?: string;
                    inflationRateChange?: string;
                    inflationMax?: string;
                    inflationMin?: string;
                    goalBonded?: string;
                    blocksPerYear?: any;
                }): _118.Params;
            };
            GenesisState: {
                encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GenesisState;
                fromJSON(object: any): _117.GenesisState;
                toJSON(message: _117.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: any;
                    };
                }): _117.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _125.MsgSend): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _125.MsgSend): {
                        typeUrl: string;
                        value: _125.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _125.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _125.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _125.MsgSend): {
                        typeUrl: string;
                        value: _125.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _125.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _125.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _125.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgSend;
                fromJSON(object: any): _125.MsgSend;
                toJSON(message: _125.MsgSend): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _125.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _125.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgSendResponse;
                fromJSON(_: any): _125.MsgSendResponse;
                toJSON(_: _125.MsgSendResponse): unknown;
                fromPartial(_: {}): _125.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _124.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryBalanceRequest;
                fromJSON(object: any): _124.QueryBalanceRequest;
                toJSON(message: _124.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                }): _124.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _124.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryBalanceResponse;
                fromJSON(object: any): _124.QueryBalanceResponse;
                toJSON(message: _124.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    amount?: any;
                }): _124.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _124.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryOwnerRequest;
                fromJSON(object: any): _124.QueryOwnerRequest;
                toJSON(message: _124.QueryOwnerRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _124.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _124.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryOwnerResponse;
                fromJSON(object: any): _124.QueryOwnerResponse;
                toJSON(message: _124.QueryOwnerResponse): unknown;
                fromPartial(object: {
                    owner?: string;
                }): _124.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _124.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QuerySupplyRequest;
                fromJSON(object: any): _124.QuerySupplyRequest;
                toJSON(message: _124.QuerySupplyRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _124.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _124.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QuerySupplyResponse;
                fromJSON(object: any): _124.QuerySupplyResponse;
                toJSON(message: _124.QuerySupplyResponse): unknown;
                fromPartial(object: {
                    amount?: any;
                }): _124.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _124.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryNFTsRequest;
                fromJSON(object: any): _124.QueryNFTsRequest;
                toJSON(message: _124.QueryNFTsRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _124.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _124.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryNFTsResponse;
                fromJSON(object: any): _124.QueryNFTsResponse;
                toJSON(message: _124.QueryNFTsResponse): unknown;
                fromPartial(object: {
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _124.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _124.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryNFTRequest;
                fromJSON(object: any): _124.QueryNFTRequest;
                toJSON(message: _124.QueryNFTRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _124.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _124.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryNFTResponse;
                fromJSON(object: any): _124.QueryNFTResponse;
                toJSON(message: _124.QueryNFTResponse): unknown;
                fromPartial(object: {
                    nft?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _124.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _124.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryClassRequest;
                fromJSON(object: any): _124.QueryClassRequest;
                toJSON(message: _124.QueryClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _124.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _124.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryClassResponse;
                fromJSON(object: any): _124.QueryClassResponse;
                toJSON(message: _124.QueryClassResponse): unknown;
                fromPartial(object: {
                    class?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _124.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _124.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryClassesRequest;
                fromJSON(object: any): _124.QueryClassesRequest;
                toJSON(message: _124.QueryClassesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _124.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _124.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryClassesResponse;
                fromJSON(object: any): _124.QueryClassesResponse;
                toJSON(message: _124.QueryClassesResponse): unknown;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _124.QueryClassesResponse;
            };
            Class: {
                encode(message: _123.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Class;
                fromJSON(object: any): _123.Class;
                toJSON(message: _123.Class): unknown;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    symbol?: string;
                    description?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _123.Class;
            };
            NFT: {
                encode(message: _123.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.NFT;
                fromJSON(object: any): _123.NFT;
                toJSON(message: _123.NFT): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _123.NFT;
            };
            GenesisState: {
                encode(message: _122.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.GenesisState;
                fromJSON(object: any): _122.GenesisState;
                toJSON(message: _122.GenesisState): unknown;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    entries?: {
                        owner?: string;
                        nfts?: {
                            classId?: string;
                            id?: string;
                            uri?: string;
                            uriHash?: string;
                            data?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }[];
                }): _122.GenesisState;
            };
            Entry: {
                encode(message: _122.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Entry;
                fromJSON(object: any): _122.Entry;
                toJSON(message: _122.Entry): unknown;
                fromPartial(object: {
                    owner?: string;
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _122.Entry;
            };
            EventSend: {
                encode(message: _121.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.EventSend;
                fromJSON(object: any): _121.EventSend;
                toJSON(message: _121.EventSend): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _121.EventSend;
            };
            EventMint: {
                encode(message: _121.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.EventMint;
                fromJSON(object: any): _121.EventMint;
                toJSON(message: _121.EventMint): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _121.EventMint;
            };
            EventBurn: {
                encode(message: _121.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.EventBurn;
                fromJSON(object: any): _121.EventBurn;
                toJSON(message: _121.EventBurn): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _121.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _126.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.TableDescriptor;
                fromJSON(object: any): _126.TableDescriptor;
                toJSON(message: _126.TableDescriptor): unknown;
                fromPartial(object: {
                    primaryKey?: {
                        fields?: string;
                        autoIncrement?: boolean;
                    };
                    index?: {
                        fields?: string;
                        id?: number;
                        unique?: boolean;
                    }[];
                    id?: number;
                }): _126.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _126.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.PrimaryKeyDescriptor;
                fromJSON(object: any): _126.PrimaryKeyDescriptor;
                toJSON(message: _126.PrimaryKeyDescriptor): unknown;
                fromPartial(object: {
                    fields?: string;
                    autoIncrement?: boolean;
                }): _126.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _126.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.SecondaryIndexDescriptor;
                fromJSON(object: any): _126.SecondaryIndexDescriptor;
                toJSON(message: _126.SecondaryIndexDescriptor): unknown;
                fromPartial(object: {
                    fields?: string;
                    id?: number;
                    unique?: boolean;
                }): _126.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _126.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.SingletonDescriptor;
                fromJSON(object: any): _126.SingletonDescriptor;
                toJSON(message: _126.SingletonDescriptor): unknown;
                fromPartial(object: {
                    id?: number;
                }): _126.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _127.StorageType;
            storageTypeToJSON(object: _127.StorageType): string;
            StorageType: typeof _127.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _127.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ModuleSchemaDescriptor;
                fromJSON(object: any): _127.ModuleSchemaDescriptor;
                toJSON(message: _127.ModuleSchemaDescriptor): unknown;
                fromPartial(object: {
                    schemaFile?: {
                        id?: number;
                        protoFileName?: string;
                        storageType?: _127.StorageType;
                    }[];
                    prefix?: Uint8Array;
                }): _127.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _127.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _127.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _127.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: {
                    id?: number;
                    protoFileName?: string;
                    storageType?: _127.StorageType;
                }): _127.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryParamsRequest: {
                encode(message: _129.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryParamsRequest;
                fromJSON(object: any): _129.QueryParamsRequest;
                toJSON(message: _129.QueryParamsRequest): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _129.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _129.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryParamsResponse;
                fromJSON(object: any): _129.QueryParamsResponse;
                toJSON(message: _129.QueryParamsResponse): unknown;
                fromPartial(object: {
                    param?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    };
                }): _129.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _129.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QuerySubspacesRequest;
                fromJSON(_: any): _129.QuerySubspacesRequest;
                toJSON(_: _129.QuerySubspacesRequest): unknown;
                fromPartial(_: {}): _129.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _129.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QuerySubspacesResponse;
                fromJSON(object: any): _129.QuerySubspacesResponse;
                toJSON(message: _129.QuerySubspacesResponse): unknown;
                fromPartial(object: {
                    subspaces?: {
                        subspace?: string;
                        keys?: string[];
                    }[];
                }): _129.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _129.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Subspace;
                fromJSON(object: any): _129.Subspace;
                toJSON(message: _129.Subspace): unknown;
                fromPartial(object: {
                    subspace?: string;
                    keys?: string[];
                }): _129.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _128.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ParameterChangeProposal;
                fromJSON(object: any): _128.ParameterChangeProposal;
                toJSON(message: _128.ParameterChangeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    changes?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    }[];
                }): _128.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _128.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ParamChange;
                fromJSON(object: any): _128.ParamChange;
                toJSON(message: _128.ParamChange): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    value?: string;
                }): _128.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _133.MsgUnjail): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _133.MsgUnjail): {
                        typeUrl: string;
                        value: _133.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _133.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _133.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _133.MsgUnjail): {
                        typeUrl: string;
                        value: _133.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _133.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _133.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _133.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.MsgUnjail;
                fromJSON(object: any): _133.MsgUnjail;
                toJSON(message: _133.MsgUnjail): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _133.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _133.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.MsgUnjailResponse;
                fromJSON(_: any): _133.MsgUnjailResponse;
                toJSON(_: _133.MsgUnjailResponse): unknown;
                fromPartial(_: {}): _133.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _132.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ValidatorSigningInfo;
                fromJSON(object: any): _132.ValidatorSigningInfo;
                toJSON(message: _132.ValidatorSigningInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    startHeight?: any;
                    indexOffset?: any;
                    jailedUntil?: Date;
                    tombstoned?: boolean;
                    missedBlocksCounter?: any;
                }): _132.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _132.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Params;
                fromJSON(object: any): _132.Params;
                toJSON(message: _132.Params): unknown;
                fromPartial(object: {
                    signedBlocksWindow?: any;
                    minSignedPerWindow?: Uint8Array;
                    downtimeJailDuration?: string;
                    slashFractionDoubleSign?: Uint8Array;
                    slashFractionDowntime?: Uint8Array;
                }): _132.Params;
            };
            QueryParamsRequest: {
                encode(_: _131.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryParamsRequest;
                fromJSON(_: any): _131.QueryParamsRequest;
                toJSON(_: _131.QueryParamsRequest): unknown;
                fromPartial(_: {}): _131.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _131.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryParamsResponse;
                fromJSON(object: any): _131.QueryParamsResponse;
                toJSON(message: _131.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: any;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: string;
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                }): _131.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _131.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QuerySigningInfoRequest;
                fromJSON(object: any): _131.QuerySigningInfoRequest;
                toJSON(message: _131.QuerySigningInfoRequest): unknown;
                fromPartial(object: {
                    consAddress?: string;
                }): _131.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _131.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QuerySigningInfoResponse;
                fromJSON(object: any): _131.QuerySigningInfoResponse;
                toJSON(message: _131.QuerySigningInfoResponse): unknown;
                fromPartial(object: {
                    valSigningInfo?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    };
                }): _131.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _131.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QuerySigningInfosRequest;
                fromJSON(object: any): _131.QuerySigningInfosRequest;
                toJSON(message: _131.QuerySigningInfosRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _131.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _131.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QuerySigningInfosResponse;
                fromJSON(object: any): _131.QuerySigningInfosResponse;
                toJSON(message: _131.QuerySigningInfosResponse): unknown;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _131.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _130.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GenesisState;
                fromJSON(object: any): _130.GenesisState;
                toJSON(message: _130.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: any;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: string;
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                    signingInfos?: {
                        address?: string;
                        validatorSigningInfo?: {
                            address?: string;
                            startHeight?: any;
                            indexOffset?: any;
                            jailedUntil?: Date;
                            tombstoned?: boolean;
                            missedBlocksCounter?: any;
                        };
                    }[];
                    missedBlocks?: {
                        address?: string;
                        missedBlocks?: {
                            index?: any;
                            missed?: boolean;
                        }[];
                    }[];
                }): _130.GenesisState;
            };
            SigningInfo: {
                encode(message: _130.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.SigningInfo;
                fromJSON(object: any): _130.SigningInfo;
                toJSON(message: _130.SigningInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    validatorSigningInfo?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    };
                }): _130.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _130.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ValidatorMissedBlocks;
                fromJSON(object: any): _130.ValidatorMissedBlocks;
                toJSON(message: _130.ValidatorMissedBlocks): unknown;
                fromPartial(object: {
                    address?: string;
                    missedBlocks?: {
                        index?: any;
                        missed?: boolean;
                    }[];
                }): _130.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _130.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MissedBlock;
                fromJSON(object: any): _130.MissedBlock;
                toJSON(message: _130.MissedBlock): unknown;
                fromPartial(object: {
                    index?: any;
                    missed?: boolean;
                }): _130.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _138.MsgCreateValidator): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _138.MsgEditValidator): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    delegate(value: _138.MsgDelegate): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _138.MsgBeginRedelegate): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _138.MsgUndelegate): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _138.MsgCreateValidator): {
                        typeUrl: string;
                        value: _138.MsgCreateValidator;
                    };
                    editValidator(value: _138.MsgEditValidator): {
                        typeUrl: string;
                        value: _138.MsgEditValidator;
                    };
                    delegate(value: _138.MsgDelegate): {
                        typeUrl: string;
                        value: _138.MsgDelegate;
                    };
                    beginRedelegate(value: _138.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _138.MsgBeginRedelegate;
                    };
                    undelegate(value: _138.MsgUndelegate): {
                        typeUrl: string;
                        value: _138.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _138.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _138.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _138.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _138.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _138.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _138.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _138.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _138.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _138.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _138.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _138.MsgCreateValidator): {
                        typeUrl: string;
                        value: _138.MsgCreateValidator;
                    };
                    editValidator(value: _138.MsgEditValidator): {
                        typeUrl: string;
                        value: _138.MsgEditValidator;
                    };
                    delegate(value: _138.MsgDelegate): {
                        typeUrl: string;
                        value: _138.MsgDelegate;
                    };
                    beginRedelegate(value: _138.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _138.MsgBeginRedelegate;
                    };
                    undelegate(value: _138.MsgUndelegate): {
                        typeUrl: string;
                        value: _138.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _138.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _138.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _138.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _138.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _138.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _138.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _138.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _138.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _138.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _138.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _138.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgCreateValidator;
                fromJSON(object: any): _138.MsgCreateValidator;
                toJSON(message: _138.MsgCreateValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    minSelfDelegation?: string;
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _138.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _138.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgCreateValidatorResponse;
                fromJSON(_: any): _138.MsgCreateValidatorResponse;
                toJSON(_: _138.MsgCreateValidatorResponse): unknown;
                fromPartial(_: {}): _138.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _138.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgEditValidator;
                fromJSON(object: any): _138.MsgEditValidator;
                toJSON(message: _138.MsgEditValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    validatorAddress?: string;
                    commissionRate?: string;
                    minSelfDelegation?: string;
                }): _138.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _138.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgEditValidatorResponse;
                fromJSON(_: any): _138.MsgEditValidatorResponse;
                toJSON(_: _138.MsgEditValidatorResponse): unknown;
                fromPartial(_: {}): _138.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _138.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgDelegate;
                fromJSON(object: any): _138.MsgDelegate;
                toJSON(message: _138.MsgDelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _138.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _138.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgDelegateResponse;
                fromJSON(_: any): _138.MsgDelegateResponse;
                toJSON(_: _138.MsgDelegateResponse): unknown;
                fromPartial(_: {}): _138.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _138.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgBeginRedelegate;
                fromJSON(object: any): _138.MsgBeginRedelegate;
                toJSON(message: _138.MsgBeginRedelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _138.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _138.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgBeginRedelegateResponse;
                fromJSON(object: any): _138.MsgBeginRedelegateResponse;
                toJSON(message: _138.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: Date;
                }): _138.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _138.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgUndelegate;
                fromJSON(object: any): _138.MsgUndelegate;
                toJSON(message: _138.MsgUndelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _138.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _138.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgUndelegateResponse;
                fromJSON(object: any): _138.MsgUndelegateResponse;
                toJSON(message: _138.MsgUndelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: Date;
                }): _138.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _137.BondStatus;
            bondStatusToJSON(object: _137.BondStatus): string;
            BondStatus: typeof _137.BondStatus;
            HistoricalInfo: {
                encode(message: _137.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.HistoricalInfo;
                fromJSON(object: any): _137.HistoricalInfo;
                toJSON(message: _137.HistoricalInfo): unknown;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    valset?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _137.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                }): _137.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _137.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.CommissionRates;
                fromJSON(object: any): _137.CommissionRates;
                toJSON(message: _137.CommissionRates): unknown;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _137.CommissionRates;
            };
            Commission: {
                encode(message: _137.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Commission;
                fromJSON(object: any): _137.Commission;
                toJSON(message: _137.Commission): unknown;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                }): _137.Commission;
            };
            Description: {
                encode(message: _137.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Description;
                fromJSON(object: any): _137.Description;
                toJSON(message: _137.Description): unknown;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _137.Description;
            };
            Validator: {
                encode(message: _137.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Validator;
                fromJSON(object: any): _137.Validator;
                toJSON(message: _137.Validator): unknown;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _137.BondStatus;
                    tokens?: string;
                    delegatorShares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    unbondingHeight?: any;
                    unbondingTime?: Date;
                    commission?: {
                        commissionRates?: {
                            rate?: string;
                            maxRate?: string;
                            maxChangeRate?: string;
                        };
                        updateTime?: Date;
                    };
                    minSelfDelegation?: string;
                }): _137.Validator;
            };
            ValAddresses: {
                encode(message: _137.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ValAddresses;
                fromJSON(object: any): _137.ValAddresses;
                toJSON(message: _137.ValAddresses): unknown;
                fromPartial(object: {
                    addresses?: string[];
                }): _137.ValAddresses;
            };
            DVPair: {
                encode(message: _137.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.DVPair;
                fromJSON(object: any): _137.DVPair;
                toJSON(message: _137.DVPair): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _137.DVPair;
            };
            DVPairs: {
                encode(message: _137.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.DVPairs;
                fromJSON(object: any): _137.DVPairs;
                toJSON(message: _137.DVPairs): unknown;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _137.DVPairs;
            };
            DVVTriplet: {
                encode(message: _137.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.DVVTriplet;
                fromJSON(object: any): _137.DVVTriplet;
                toJSON(message: _137.DVVTriplet): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _137.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _137.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.DVVTriplets;
                fromJSON(object: any): _137.DVVTriplets;
                toJSON(message: _137.DVVTriplets): unknown;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _137.DVVTriplets;
            };
            Delegation: {
                encode(message: _137.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Delegation;
                fromJSON(object: any): _137.Delegation;
                toJSON(message: _137.Delegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _137.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _137.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.UnbondingDelegation;
                fromJSON(object: any): _137.UnbondingDelegation;
                toJSON(message: _137.UnbondingDelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        balance?: string;
                    }[];
                }): _137.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _137.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.UnbondingDelegationEntry;
                fromJSON(object: any): _137.UnbondingDelegationEntry;
                toJSON(message: _137.UnbondingDelegationEntry): unknown;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    balance?: string;
                }): _137.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _137.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.RedelegationEntry;
                fromJSON(object: any): _137.RedelegationEntry;
                toJSON(message: _137.RedelegationEntry): unknown;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }): _137.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _137.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Redelegation;
                fromJSON(object: any): _137.Redelegation;
                toJSON(message: _137.Redelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    }[];
                }): _137.Redelegation;
            };
            Params: {
                encode(message: _137.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Params;
                fromJSON(object: any): _137.Params;
                toJSON(message: _137.Params): unknown;
                fromPartial(object: {
                    unbondingTime?: string;
                    maxValidators?: number;
                    maxEntries?: number;
                    historicalEntries?: number;
                    bondDenom?: string;
                    minCommissionRate?: string;
                }): _137.Params;
            };
            DelegationResponse: {
                encode(message: _137.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.DelegationResponse;
                fromJSON(object: any): _137.DelegationResponse;
                toJSON(message: _137.DelegationResponse): unknown;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _137.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _137.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.RedelegationEntryResponse;
                fromJSON(object: any): _137.RedelegationEntryResponse;
                toJSON(message: _137.RedelegationEntryResponse): unknown;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    };
                    balance?: string;
                }): _137.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _137.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.RedelegationResponse;
                fromJSON(object: any): _137.RedelegationResponse;
                toJSON(message: _137.RedelegationResponse): unknown;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    };
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        };
                        balance?: string;
                    }[];
                }): _137.RedelegationResponse;
            };
            Pool: {
                encode(message: _137.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Pool;
                fromJSON(object: any): _137.Pool;
                toJSON(message: _137.Pool): unknown;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _137.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _136.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryValidatorsRequest;
                fromJSON(object: any): _136.QueryValidatorsRequest;
                toJSON(message: _136.QueryValidatorsRequest): unknown;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _136.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _136.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryValidatorsResponse;
                fromJSON(object: any): _136.QueryValidatorsResponse;
                toJSON(message: _136.QueryValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _137.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _136.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _136.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryValidatorRequest;
                fromJSON(object: any): _136.QueryValidatorRequest;
                toJSON(message: _136.QueryValidatorRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _136.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _136.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryValidatorResponse;
                fromJSON(object: any): _136.QueryValidatorResponse;
                toJSON(message: _136.QueryValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _137.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _136.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _136.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _136.QueryValidatorDelegationsRequest;
                toJSON(message: _136.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _136.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _136.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _136.QueryValidatorDelegationsResponse;
                toJSON(message: _136.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _136.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _136.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _136.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _136.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _136.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _136.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _136.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _136.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _136.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _136.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryDelegationRequest;
                fromJSON(object: any): _136.QueryDelegationRequest;
                toJSON(message: _136.QueryDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _136.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _136.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryDelegationResponse;
                fromJSON(object: any): _136.QueryDelegationResponse;
                toJSON(message: _136.QueryDelegationResponse): unknown;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _136.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _136.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _136.QueryUnbondingDelegationRequest;
                toJSON(message: _136.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _136.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _136.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _136.QueryUnbondingDelegationResponse;
                toJSON(message: _136.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    };
                }): _136.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _136.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _136.QueryDelegatorDelegationsRequest;
                toJSON(message: _136.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _136.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _136.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _136.QueryDelegatorDelegationsResponse;
                toJSON(message: _136.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _136.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _136.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _136.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _136.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _136.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _136.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _136.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _136.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _136.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _136.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryRedelegationsRequest;
                fromJSON(object: any): _136.QueryRedelegationsRequest;
                toJSON(message: _136.QueryRedelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    srcValidatorAddr?: string;
                    dstValidatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _136.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _136.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryRedelegationsResponse;
                fromJSON(object: any): _136.QueryRedelegationsResponse;
                toJSON(message: _136.QueryRedelegationsResponse): unknown;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string;
                            validatorSrcAddress?: string;
                            validatorDstAddress?: string;
                            entries?: {
                                creationHeight?: any;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            }[];
                        };
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: any;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _136.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _136.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _136.QueryDelegatorValidatorsRequest;
                toJSON(message: _136.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _136.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _136.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _136.QueryDelegatorValidatorsResponse;
                toJSON(message: _136.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _137.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _136.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _136.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _136.QueryDelegatorValidatorRequest;
                toJSON(message: _136.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _136.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _136.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _136.QueryDelegatorValidatorResponse;
                toJSON(message: _136.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _137.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _136.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _136.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryHistoricalInfoRequest;
                fromJSON(object: any): _136.QueryHistoricalInfoRequest;
                toJSON(message: _136.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: {
                    height?: any;
                }): _136.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _136.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryHistoricalInfoResponse;
                fromJSON(object: any): _136.QueryHistoricalInfoResponse;
                toJSON(message: _136.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        valset?: {
                            operatorAddress?: string;
                            consensusPubkey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _137.BondStatus;
                            tokens?: string;
                            delegatorShares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                securityContact?: string;
                                details?: string;
                            };
                            unbondingHeight?: any;
                            unbondingTime?: Date;
                            commission?: {
                                commissionRates?: {
                                    rate?: string;
                                    maxRate?: string;
                                    maxChangeRate?: string;
                                };
                                updateTime?: Date;
                            };
                            minSelfDelegation?: string;
                        }[];
                    };
                }): _136.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _136.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryPoolRequest;
                fromJSON(_: any): _136.QueryPoolRequest;
                toJSON(_: _136.QueryPoolRequest): unknown;
                fromPartial(_: {}): _136.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _136.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryPoolResponse;
                fromJSON(object: any): _136.QueryPoolResponse;
                toJSON(message: _136.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _136.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _136.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryParamsRequest;
                fromJSON(_: any): _136.QueryParamsRequest;
                toJSON(_: _136.QueryParamsRequest): unknown;
                fromPartial(_: {}): _136.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _136.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryParamsResponse;
                fromJSON(object: any): _136.QueryParamsResponse;
                toJSON(message: _136.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: string;
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                }): _136.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _135.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.GenesisState;
                fromJSON(object: any): _135.GenesisState;
                toJSON(message: _135.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: string;
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                    lastTotalPower?: Uint8Array;
                    lastValidatorPowers?: {
                        address?: string;
                        power?: any;
                    }[];
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _137.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    delegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    }[];
                    unbondingDelegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _135.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _135.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.LastValidatorPower;
                fromJSON(object: any): _135.LastValidatorPower;
                toJSON(message: _135.LastValidatorPower): unknown;
                fromPartial(object: {
                    address?: string;
                    power?: any;
                }): _135.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _134.AuthorizationType;
            authorizationTypeToJSON(object: _134.AuthorizationType): string;
            AuthorizationType: typeof _134.AuthorizationType;
            StakeAuthorization: {
                encode(message: _134.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.StakeAuthorization;
                fromJSON(object: any): _134.StakeAuthorization;
                toJSON(message: _134.StakeAuthorization): unknown;
                fromPartial(object: {
                    maxTokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allowList?: {
                        address?: string[];
                    };
                    denyList?: {
                        address?: string[];
                    };
                    authorizationType?: _134.AuthorizationType;
                }): _134.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _134.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.StakeAuthorization_Validators;
                fromJSON(object: any): _134.StakeAuthorization_Validators;
                toJSON(message: _134.StakeAuthorization_Validators): unknown;
                fromPartial(object: {
                    address?: string[];
                }): _134.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _139.SignMode;
                signModeToJSON(object: _139.SignMode): string;
                SignMode: typeof _139.SignMode;
                SignatureDescriptors: {
                    encode(message: _139.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SignatureDescriptors;
                    fromJSON(object: any): _139.SignatureDescriptors;
                    toJSON(message: _139.SignatureDescriptors): unknown;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _139.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                    }): _139.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _139.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SignatureDescriptor;
                    fromJSON(object: any): _139.SignatureDescriptor;
                    toJSON(message: _139.SignatureDescriptor): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _139.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: any;
                    }): _139.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _139.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SignatureDescriptor_Data;
                    fromJSON(object: any): _139.SignatureDescriptor_Data;
                    toJSON(message: _139.SignatureDescriptor_Data): unknown;
                    fromPartial(object: {
                        single?: {
                            mode?: _139.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _139.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _139.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _139.SignatureDescriptor_Data_Single;
                    toJSON(message: _139.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: {
                        mode?: _139.SignMode;
                        signature?: Uint8Array;
                    }): _139.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _139.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _139.SignatureDescriptor_Data_Multi;
                    toJSON(message: _139.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: any[];
                    }): _139.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            Tx: {
                encode(message: _141.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Tx;
                fromJSON(object: any): _141.Tx;
                toJSON(message: _141.Tx): unknown;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeoutHeight?: any;
                        extensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            modeInfo?: {
                                single?: {
                                    mode?: _139.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gasLimit?: any;
                            payer?: string;
                            granter?: string;
                        };
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _141.Tx;
            };
            TxRaw: {
                encode(message: _141.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.TxRaw;
                fromJSON(object: any): _141.TxRaw;
                toJSON(message: _141.TxRaw): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _141.TxRaw;
            };
            SignDoc: {
                encode(message: _141.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.SignDoc;
                fromJSON(object: any): _141.SignDoc;
                toJSON(message: _141.SignDoc): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: any;
                }): _141.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _141.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.SignDocDirectAux;
                fromJSON(object: any): _141.SignDocDirectAux;
                toJSON(message: _141.SignDocDirectAux): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    chainId?: string;
                    accountNumber?: any;
                    sequence?: any;
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _141.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _141.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.TxBody;
                fromJSON(object: any): _141.TxBody;
                toJSON(message: _141.TxBody): unknown;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeoutHeight?: any;
                    extensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _141.TxBody;
            };
            AuthInfo: {
                encode(message: _141.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.AuthInfo;
                fromJSON(object: any): _141.AuthInfo;
                toJSON(message: _141.AuthInfo): unknown;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _139.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                modeInfos?: any[];
                            };
                        };
                        sequence?: any;
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gasLimit?: any;
                        payer?: string;
                        granter?: string;
                    };
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _141.AuthInfo;
            };
            SignerInfo: {
                encode(message: _141.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.SignerInfo;
                fromJSON(object: any): _141.SignerInfo;
                toJSON(message: _141.SignerInfo): unknown;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _139.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }): _141.SignerInfo;
            };
            ModeInfo: {
                encode(message: _141.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.ModeInfo;
                fromJSON(object: any): _141.ModeInfo;
                toJSON(message: _141.ModeInfo): unknown;
                fromPartial(object: {
                    single?: {
                        mode?: _139.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _141.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _141.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.ModeInfo_Single;
                fromJSON(object: any): _141.ModeInfo_Single;
                toJSON(message: _141.ModeInfo_Single): unknown;
                fromPartial(object: {
                    mode?: _139.SignMode;
                }): _141.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _141.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.ModeInfo_Multi;
                fromJSON(object: any): _141.ModeInfo_Multi;
                toJSON(message: _141.ModeInfo_Multi): unknown;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: any[];
                }): _141.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _141.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Fee;
                fromJSON(object: any): _141.Fee;
                toJSON(message: _141.Fee): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                }): _141.Fee;
            };
            Tip: {
                encode(message: _141.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Tip;
                fromJSON(object: any): _141.Tip;
                toJSON(message: _141.Tip): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _141.Tip;
            };
            AuxSignerData: {
                encode(message: _141.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.AuxSignerData;
                fromJSON(object: any): _141.AuxSignerData;
                toJSON(message: _141.AuxSignerData): unknown;
                fromPartial(object: {
                    address?: string;
                    signDoc?: {
                        bodyBytes?: Uint8Array;
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        chainId?: string;
                        accountNumber?: any;
                        sequence?: any;
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    mode?: _139.SignMode;
                    sig?: Uint8Array;
                }): _141.AuxSignerData;
            };
            orderByFromJSON(object: any): _140.OrderBy;
            orderByToJSON(object: _140.OrderBy): string;
            broadcastModeFromJSON(object: any): _140.BroadcastMode;
            broadcastModeToJSON(object: _140.BroadcastMode): string;
            OrderBy: typeof _140.OrderBy;
            BroadcastMode: typeof _140.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _140.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GetTxsEventRequest;
                fromJSON(object: any): _140.GetTxsEventRequest;
                toJSON(message: _140.GetTxsEventRequest): unknown;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _140.OrderBy;
                }): _140.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _140.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GetTxsEventResponse;
                fromJSON(object: any): _140.GetTxsEventResponse;
                toJSON(message: _140.GetTxsEventResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _139.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    txResponses?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _140.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _140.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.BroadcastTxRequest;
                fromJSON(object: any): _140.BroadcastTxRequest;
                toJSON(message: _140.BroadcastTxRequest): unknown;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _140.BroadcastMode;
                }): _140.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _140.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.BroadcastTxResponse;
                fromJSON(object: any): _140.BroadcastTxResponse;
                toJSON(message: _140.BroadcastTxResponse): unknown;
                fromPartial(object: {
                    txResponse?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _140.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _140.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.SimulateRequest;
                fromJSON(object: any): _140.SimulateRequest;
                toJSON(message: _140.SimulateRequest): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _139.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txBytes?: Uint8Array;
                }): _140.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _140.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.SimulateResponse;
                fromJSON(object: any): _140.SimulateResponse;
                toJSON(message: _140.SimulateResponse): unknown;
                fromPartial(object: {
                    gasInfo?: {
                        gasWanted?: any;
                        gasUsed?: any;
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _140.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _140.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GetTxRequest;
                fromJSON(object: any): _140.GetTxRequest;
                toJSON(message: _140.GetTxRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                }): _140.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _140.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GetTxResponse;
                fromJSON(object: any): _140.GetTxResponse;
                toJSON(message: _140.GetTxResponse): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _139.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txResponse?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _140.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _140.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GetBlockWithTxsRequest;
                fromJSON(object: any): _140.GetBlockWithTxsRequest;
                toJSON(message: _140.GetBlockWithTxsRequest): unknown;
                fromPartial(object: {
                    height?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _140.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _140.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.GetBlockWithTxsResponse;
                fromJSON(object: any): _140.GetBlockWithTxsResponse;
                toJSON(message: _140.GetBlockWithTxsResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _139.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    block?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicateVoteEvidence?: {
                                    voteA?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    voteB?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    totalVotingPower?: any;
                                    validatorPower?: any;
                                    timestamp?: Date;
                                };
                                lightClientAttackEvidence?: {
                                    conflictingBlock?: {
                                        signedHeader?: {
                                            header?: {
                                                version?: {
                                                    block?: any;
                                                    app?: any;
                                                };
                                                chainId?: string;
                                                height?: any;
                                                time?: Date;
                                                lastBlockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                lastCommitHash?: Uint8Array;
                                                dataHash?: Uint8Array;
                                                validatorsHash?: Uint8Array;
                                                nextValidatorsHash?: Uint8Array;
                                                consensusHash?: Uint8Array;
                                                appHash?: Uint8Array;
                                                lastResultsHash?: Uint8Array;
                                                evidenceHash?: Uint8Array;
                                                proposerAddress?: Uint8Array;
                                            };
                                            commit?: {
                                                height?: any;
                                                round?: number;
                                                blockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                signatures?: {
                                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                    validatorAddress?: Uint8Array;
                                                    timestamp?: Date;
                                                    signature?: Uint8Array;
                                                }[];
                                            };
                                        };
                                        validatorSet?: {
                                            validators?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: any;
                                                proposerPriority?: any;
                                            }[];
                                            proposer?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: any;
                                                proposerPriority?: any;
                                            };
                                            totalVotingPower?: any;
                                        };
                                    };
                                    commonHeight?: any;
                                    byzantineValidators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    totalVotingPower?: any;
                                    timestamp?: Date;
                                };
                            }[];
                        };
                        lastCommit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _140.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _143.MsgSoftwareUpgrade): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _143.MsgCancelUpgrade): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _143.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _143.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _143.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _143.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _143.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _143.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _143.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _143.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _143.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _143.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _143.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _143.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _143.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _143.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _143.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _143.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _144.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Plan;
                fromJSON(object: any): _144.Plan;
                toJSON(message: _144.Plan): unknown;
                fromPartial(object: {
                    name?: string;
                    time?: Date;
                    height?: any;
                    info?: string;
                    upgradedClientState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _144.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _144.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.SoftwareUpgradeProposal;
                fromJSON(object: any): _144.SoftwareUpgradeProposal;
                toJSON(message: _144.SoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _144.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _144.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _144.CancelSoftwareUpgradeProposal;
                toJSON(message: _144.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _144.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _144.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ModuleVersion;
                fromJSON(object: any): _144.ModuleVersion;
                toJSON(message: _144.ModuleVersion): unknown;
                fromPartial(object: {
                    name?: string;
                    version?: any;
                }): _144.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _143.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgSoftwareUpgrade;
                fromJSON(object: any): _143.MsgSoftwareUpgrade;
                toJSON(message: _143.MsgSoftwareUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _143.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _143.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _143.MsgSoftwareUpgradeResponse;
                toJSON(_: _143.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: {}): _143.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _143.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgCancelUpgrade;
                fromJSON(object: any): _143.MsgCancelUpgrade;
                toJSON(message: _143.MsgCancelUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                }): _143.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _143.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MsgCancelUpgradeResponse;
                fromJSON(_: any): _143.MsgCancelUpgradeResponse;
                toJSON(_: _143.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: {}): _143.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _142.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryCurrentPlanRequest;
                fromJSON(_: any): _142.QueryCurrentPlanRequest;
                toJSON(_: _142.QueryCurrentPlanRequest): unknown;
                fromPartial(_: {}): _142.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _142.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryCurrentPlanResponse;
                fromJSON(object: any): _142.QueryCurrentPlanResponse;
                toJSON(message: _142.QueryCurrentPlanResponse): unknown;
                fromPartial(object: {
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _142.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _142.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryAppliedPlanRequest;
                fromJSON(object: any): _142.QueryAppliedPlanRequest;
                toJSON(message: _142.QueryAppliedPlanRequest): unknown;
                fromPartial(object: {
                    name?: string;
                }): _142.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _142.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryAppliedPlanResponse;
                fromJSON(object: any): _142.QueryAppliedPlanResponse;
                toJSON(message: _142.QueryAppliedPlanResponse): unknown;
                fromPartial(object: {
                    height?: any;
                }): _142.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _142.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _142.QueryUpgradedConsensusStateRequest;
                toJSON(message: _142.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: {
                    lastHeight?: any;
                }): _142.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _142.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _142.QueryUpgradedConsensusStateResponse;
                toJSON(message: _142.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array;
                }): _142.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _142.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryModuleVersionsRequest;
                fromJSON(object: any): _142.QueryModuleVersionsRequest;
                toJSON(message: _142.QueryModuleVersionsRequest): unknown;
                fromPartial(object: {
                    moduleName?: string;
                }): _142.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _142.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryModuleVersionsResponse;
                fromJSON(object: any): _142.QueryModuleVersionsResponse;
                toJSON(message: _142.QueryModuleVersionsResponse): unknown;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string;
                        version?: any;
                    }[];
                }): _142.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _142.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryAuthorityRequest;
                fromJSON(_: any): _142.QueryAuthorityRequest;
                toJSON(_: _142.QueryAuthorityRequest): unknown;
                fromPartial(_: {}): _142.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _142.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryAuthorityResponse;
                fromJSON(object: any): _142.QueryAuthorityResponse;
                toJSON(message: _142.QueryAuthorityResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _142.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _145.MsgCreateVestingAccount): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _145.MsgCreatePermanentLockedAccount): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _145.MsgCreatePeriodicVestingAccount): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _145.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _145.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _145.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _145.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _145.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _145.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _145.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _145.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _145.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _145.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _145.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _145.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _145.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _145.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _145.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _145.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _145.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _145.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _145.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _145.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _145.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _145.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _145.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _145.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _146.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.BaseVestingAccount;
                fromJSON(object: any): _146.BaseVestingAccount;
                toJSON(message: _146.BaseVestingAccount): unknown;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: any;
                        sequence?: any;
                    };
                    originalVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedFree?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: any;
                }): _146.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _146.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ContinuousVestingAccount;
                fromJSON(object: any): _146.ContinuousVestingAccount;
                toJSON(message: _146.ContinuousVestingAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                    startTime?: any;
                }): _146.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _146.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.DelayedVestingAccount;
                fromJSON(object: any): _146.DelayedVestingAccount;
                toJSON(message: _146.DelayedVestingAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                }): _146.DelayedVestingAccount;
            };
            Period: {
                encode(message: _146.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Period;
                fromJSON(object: any): _146.Period;
                toJSON(message: _146.Period): unknown;
                fromPartial(object: {
                    length?: any;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _146.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _146.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.PeriodicVestingAccount;
                fromJSON(object: any): _146.PeriodicVestingAccount;
                toJSON(message: _146.PeriodicVestingAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                    startTime?: any;
                    vestingPeriods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _146.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _146.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.PermanentLockedAccount;
                fromJSON(object: any): _146.PermanentLockedAccount;
                toJSON(message: _146.PermanentLockedAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                }): _146.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _145.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateVestingAccount;
                fromJSON(object: any): _145.MsgCreateVestingAccount;
                toJSON(message: _145.MsgCreateVestingAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: any;
                    delayed?: boolean;
                }): _145.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _145.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _145.MsgCreateVestingAccountResponse;
                toJSON(_: _145.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: {}): _145.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _145.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _145.MsgCreatePermanentLockedAccount;
                toJSON(message: _145.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _145.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _145.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _145.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _145.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: {}): _145.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _145.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _145.MsgCreatePeriodicVestingAccount;
                toJSON(message: _145.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    startTime?: any;
                    vestingPeriods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _145.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _145.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _145.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _145.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: {}): _145.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
}
