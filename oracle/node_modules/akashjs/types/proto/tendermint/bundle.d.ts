import * as _179 from "./abci/types";
import * as _180 from "./crypto/keys";
import * as _181 from "./crypto/proof";
import * as _182 from "./libs/bits/types";
import * as _183 from "./p2p/types";
import * as _184 from "./types/block";
import * as _185 from "./types/evidence";
import * as _186 from "./types/params";
import * as _187 from "./types/types";
import * as _188 from "./types/validator";
import * as _189 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _179.CheckTxType;
        checkTxTypeToJSON(object: _179.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _179.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _179.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _179.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _179.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _179.EvidenceType;
        evidenceTypeToJSON(object: _179.EvidenceType): string;
        CheckTxType: typeof _179.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _179.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _179.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _179.EvidenceType;
        Request: {
            encode(message: _179.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Request;
            fromJSON(object: any): _179.Request;
            toJSON(message: _179.Request): unknown;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: any;
                    p2pVersion?: any;
                };
                setOption?: {
                    key?: string;
                    value?: string;
                };
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: any;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
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
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _179.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _179.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: any;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: any;
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _179.Request;
        };
        RequestEcho: {
            encode(message: _179.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.RequestEcho;
            fromJSON(object: any): _179.RequestEcho;
            toJSON(message: _179.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _179.RequestEcho;
        };
        RequestFlush: {
            encode(_: _179.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.RequestFlush;
            fromJSON(_: any): _179.RequestFlush;
            toJSON(_: _179.RequestFlush): unknown;
            fromPartial(_: {}): _179.RequestFlush;
        };
        RequestInfo: {
            encode(message: _179.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.RequestInfo;
            fromJSON(object: any): _179.RequestInfo;
            toJSON(message: _179.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                blockVersion?: any;
                p2pVersion?: any;
            }): _179.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _179.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.RequestSetOption;
            fromJSON(object: any): _179.RequestSetOption;
            toJSON(message: _179.RequestSetOption): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _179.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _179.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.RequestInitChain;
            fromJSON(object: any): _179.RequestInitChain;
            toJSON(message: _179.RequestInitChain): unknown;
            fromPartial(object: {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: any;
            }): _179.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _179.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.RequestQuery;
            fromJSON(object: any): _179.RequestQuery;
            toJSON(message: _179.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: any;
                prove?: boolean;
            }): _179.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _179.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.RequestBeginBlock;
            fromJSON(object: any): _179.RequestBeginBlock;
            toJSON(message: _179.RequestBeginBlock): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
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
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _179.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                }[];
            }): _179.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _179.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.RequestCheckTx;
            fromJSON(object: any): _179.RequestCheckTx;
            toJSON(message: _179.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _179.CheckTxType;
            }): _179.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _179.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.RequestDeliverTx;
            fromJSON(object: any): _179.RequestDeliverTx;
            toJSON(message: _179.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _179.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _179.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.RequestEndBlock;
            fromJSON(object: any): _179.RequestEndBlock;
            toJSON(message: _179.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: any;
            }): _179.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _179.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.RequestCommit;
            fromJSON(_: any): _179.RequestCommit;
            toJSON(_: _179.RequestCommit): unknown;
            fromPartial(_: {}): _179.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _179.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.RequestListSnapshots;
            fromJSON(_: any): _179.RequestListSnapshots;
            toJSON(_: _179.RequestListSnapshots): unknown;
            fromPartial(_: {}): _179.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _179.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.RequestOfferSnapshot;
            fromJSON(object: any): _179.RequestOfferSnapshot;
            toJSON(message: _179.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _179.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _179.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.RequestLoadSnapshotChunk;
            fromJSON(object: any): _179.RequestLoadSnapshotChunk;
            toJSON(message: _179.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: any;
                format?: number;
                chunk?: number;
            }): _179.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _179.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.RequestApplySnapshotChunk;
            fromJSON(object: any): _179.RequestApplySnapshotChunk;
            toJSON(message: _179.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _179.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _179.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Response;
            fromJSON(object: any): _179.Response;
            toJSON(message: _179.Response): unknown;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: any;
                    lastBlockHeight?: any;
                    lastBlockAppHash?: Uint8Array;
                };
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: any;
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: any;
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _179.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _179.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _179.Response;
        };
        ResponseException: {
            encode(message: _179.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ResponseException;
            fromJSON(object: any): _179.ResponseException;
            toJSON(message: _179.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _179.ResponseException;
        };
        ResponseEcho: {
            encode(message: _179.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ResponseEcho;
            fromJSON(object: any): _179.ResponseEcho;
            toJSON(message: _179.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _179.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _179.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ResponseFlush;
            fromJSON(_: any): _179.ResponseFlush;
            toJSON(_: _179.ResponseFlush): unknown;
            fromPartial(_: {}): _179.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _179.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ResponseInfo;
            fromJSON(object: any): _179.ResponseInfo;
            toJSON(message: _179.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: any;
                lastBlockHeight?: any;
                lastBlockAppHash?: Uint8Array;
            }): _179.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _179.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ResponseSetOption;
            fromJSON(object: any): _179.ResponseSetOption;
            toJSON(message: _179.ResponseSetOption): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _179.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _179.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ResponseInitChain;
            fromJSON(object: any): _179.ResponseInitChain;
            toJSON(message: _179.ResponseInitChain): unknown;
            fromPartial(object: {
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                appHash?: Uint8Array;
            }): _179.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _179.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ResponseQuery;
            fromJSON(object: any): _179.ResponseQuery;
            toJSON(message: _179.ResponseQuery): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: any;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: any;
                codespace?: string;
            }): _179.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _179.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ResponseBeginBlock;
            fromJSON(object: any): _179.ResponseBeginBlock;
            toJSON(message: _179.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _179.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _179.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ResponseCheckTx;
            fromJSON(object: any): _179.ResponseCheckTx;
            toJSON(message: _179.ResponseCheckTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _179.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _179.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ResponseDeliverTx;
            fromJSON(object: any): _179.ResponseDeliverTx;
            toJSON(message: _179.ResponseDeliverTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _179.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _179.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ResponseEndBlock;
            fromJSON(object: any): _179.ResponseEndBlock;
            toJSON(message: _179.ResponseEndBlock): unknown;
            fromPartial(object: {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _179.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _179.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ResponseCommit;
            fromJSON(object: any): _179.ResponseCommit;
            toJSON(message: _179.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: any;
            }): _179.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _179.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ResponseListSnapshots;
            fromJSON(object: any): _179.ResponseListSnapshots;
            toJSON(message: _179.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _179.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _179.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ResponseOfferSnapshot;
            fromJSON(object: any): _179.ResponseOfferSnapshot;
            toJSON(message: _179.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _179.ResponseOfferSnapshot_Result;
            }): _179.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _179.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _179.ResponseLoadSnapshotChunk;
            toJSON(message: _179.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _179.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _179.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ResponseApplySnapshotChunk;
            fromJSON(object: any): _179.ResponseApplySnapshotChunk;
            toJSON(message: _179.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _179.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _179.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _179.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ConsensusParams;
            fromJSON(object: any): _179.ConsensusParams;
            toJSON(message: _179.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            }): _179.ConsensusParams;
        };
        BlockParams: {
            encode(message: _179.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.BlockParams;
            fromJSON(object: any): _179.BlockParams;
            toJSON(message: _179.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: any;
                maxGas?: any;
            }): _179.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _179.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.LastCommitInfo;
            fromJSON(object: any): _179.LastCommitInfo;
            toJSON(message: _179.LastCommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _179.LastCommitInfo;
        };
        Event: {
            encode(message: _179.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Event;
            fromJSON(object: any): _179.Event;
            toJSON(message: _179.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _179.Event;
        };
        EventAttribute: {
            encode(message: _179.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.EventAttribute;
            fromJSON(object: any): _179.EventAttribute;
            toJSON(message: _179.EventAttribute): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _179.EventAttribute;
        };
        TxResult: {
            encode(message: _179.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.TxResult;
            fromJSON(object: any): _179.TxResult;
            toJSON(message: _179.TxResult): unknown;
            fromPartial(object: {
                height?: any;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _179.TxResult;
        };
        Validator: {
            encode(message: _179.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Validator;
            fromJSON(object: any): _179.Validator;
            toJSON(message: _179.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: any;
            }): _179.Validator;
        };
        ValidatorUpdate: {
            encode(message: _179.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ValidatorUpdate;
            fromJSON(object: any): _179.ValidatorUpdate;
            toJSON(message: _179.ValidatorUpdate): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }): _179.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _179.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.VoteInfo;
            fromJSON(object: any): _179.VoteInfo;
            toJSON(message: _179.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                signedLastBlock?: boolean;
            }): _179.VoteInfo;
        };
        Evidence: {
            encode(message: _179.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Evidence;
            fromJSON(object: any): _179.Evidence;
            toJSON(message: _179.Evidence): unknown;
            fromPartial(object: {
                type?: _179.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            }): _179.Evidence;
        };
        Snapshot: {
            encode(message: _179.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Snapshot;
            fromJSON(object: any): _179.Snapshot;
            toJSON(message: _179.Snapshot): unknown;
            fromPartial(object: {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _179.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _181.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Proof;
            fromJSON(object: any): _181.Proof;
            toJSON(message: _181.Proof): unknown;
            fromPartial(object: {
                total?: any;
                index?: any;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _181.Proof;
        };
        ValueOp: {
            encode(message: _181.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.ValueOp;
            fromJSON(object: any): _181.ValueOp;
            toJSON(message: _181.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _181.ValueOp;
        };
        DominoOp: {
            encode(message: _181.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.DominoOp;
            fromJSON(object: any): _181.DominoOp;
            toJSON(message: _181.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _181.DominoOp;
        };
        ProofOp: {
            encode(message: _181.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.ProofOp;
            fromJSON(object: any): _181.ProofOp;
            toJSON(message: _181.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _181.ProofOp;
        };
        ProofOps: {
            encode(message: _181.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.ProofOps;
            fromJSON(object: any): _181.ProofOps;
            toJSON(message: _181.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _181.ProofOps;
        };
        PublicKey: {
            encode(message: _180.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.PublicKey;
            fromJSON(object: any): _180.PublicKey;
            toJSON(message: _180.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _180.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _182.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.BitArray;
                fromJSON(object: any): _182.BitArray;
                toJSON(message: _182.BitArray): unknown;
                fromPartial(object: {
                    bits?: any;
                    elems?: any[];
                }): _182.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _183.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.ProtocolVersion;
            fromJSON(object: any): _183.ProtocolVersion;
            toJSON(message: _183.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: any;
                block?: any;
                app?: any;
            }): _183.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _183.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.NodeInfo;
            fromJSON(object: any): _183.NodeInfo;
            toJSON(message: _183.NodeInfo): unknown;
            fromPartial(object: {
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
            }): _183.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _183.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.NodeInfoOther;
            fromJSON(object: any): _183.NodeInfoOther;
            toJSON(message: _183.NodeInfoOther): unknown;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _183.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _183.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.PeerInfo;
            fromJSON(object: any): _183.PeerInfo;
            toJSON(message: _183.PeerInfo): unknown;
            fromPartial(object: {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[];
                lastConnected?: Date;
            }): _183.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _183.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.PeerAddressInfo;
            fromJSON(object: any): _183.PeerAddressInfo;
            toJSON(message: _183.PeerAddressInfo): unknown;
            fromPartial(object: {
                address?: string;
                lastDialSuccess?: Date;
                lastDialFailure?: Date;
                dialFailures?: number;
            }): _183.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _188.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.ValidatorSet;
            fromJSON(object: any): _188.ValidatorSet;
            toJSON(message: _188.ValidatorSet): unknown;
            fromPartial(object: {
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
            }): _188.ValidatorSet;
        };
        Validator: {
            encode(message: _188.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Validator;
            fromJSON(object: any): _188.Validator;
            toJSON(message: _188.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: any;
                proposerPriority?: any;
            }): _188.Validator;
        };
        SimpleValidator: {
            encode(message: _188.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.SimpleValidator;
            fromJSON(object: any): _188.SimpleValidator;
            toJSON(message: _188.SimpleValidator): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: any;
            }): _188.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _187.BlockIDFlag;
        blockIDFlagToJSON(object: _187.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _187.SignedMsgType;
        signedMsgTypeToJSON(object: _187.SignedMsgType): string;
        BlockIDFlag: typeof _187.BlockIDFlag;
        SignedMsgType: typeof _187.SignedMsgType;
        PartSetHeader: {
            encode(message: _187.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.PartSetHeader;
            fromJSON(object: any): _187.PartSetHeader;
            toJSON(message: _187.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _187.PartSetHeader;
        };
        Part: {
            encode(message: _187.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Part;
            fromJSON(object: any): _187.Part;
            toJSON(message: _187.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _187.Part;
        };
        BlockID: {
            encode(message: _187.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.BlockID;
            fromJSON(object: any): _187.BlockID;
            toJSON(message: _187.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _187.BlockID;
        };
        Header: {
            encode(message: _187.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Header;
            fromJSON(object: any): _187.Header;
            toJSON(message: _187.Header): unknown;
            fromPartial(object: {
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
            }): _187.Header;
        };
        Data: {
            encode(message: _187.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Data;
            fromJSON(object: any): _187.Data;
            toJSON(message: _187.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _187.Data;
        };
        Vote: {
            encode(message: _187.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Vote;
            fromJSON(object: any): _187.Vote;
            toJSON(message: _187.Vote): unknown;
            fromPartial(object: {
                type?: _187.SignedMsgType;
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
            }): _187.Vote;
        };
        Commit: {
            encode(message: _187.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Commit;
            fromJSON(object: any): _187.Commit;
            toJSON(message: _187.Commit): unknown;
            fromPartial(object: {
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
                    blockIdFlag?: _187.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _187.Commit;
        };
        CommitSig: {
            encode(message: _187.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.CommitSig;
            fromJSON(object: any): _187.CommitSig;
            toJSON(message: _187.CommitSig): unknown;
            fromPartial(object: {
                blockIdFlag?: _187.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _187.CommitSig;
        };
        Proposal: {
            encode(message: _187.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Proposal;
            fromJSON(object: any): _187.Proposal;
            toJSON(message: _187.Proposal): unknown;
            fromPartial(object: {
                type?: _187.SignedMsgType;
                height?: any;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _187.Proposal;
        };
        SignedHeader: {
            encode(message: _187.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.SignedHeader;
            fromJSON(object: any): _187.SignedHeader;
            toJSON(message: _187.SignedHeader): unknown;
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
                        blockIdFlag?: _187.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _187.SignedHeader;
        };
        LightBlock: {
            encode(message: _187.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.LightBlock;
            fromJSON(object: any): _187.LightBlock;
            toJSON(message: _187.LightBlock): unknown;
            fromPartial(object: {
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
                            blockIdFlag?: _187.BlockIDFlag;
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
            }): _187.LightBlock;
        };
        BlockMeta: {
            encode(message: _187.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.BlockMeta;
            fromJSON(object: any): _187.BlockMeta;
            toJSON(message: _187.BlockMeta): unknown;
            fromPartial(object: {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: any;
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
                numTxs?: any;
            }): _187.BlockMeta;
        };
        TxProof: {
            encode(message: _187.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.TxProof;
            fromJSON(object: any): _187.TxProof;
            toJSON(message: _187.TxProof): unknown;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _187.TxProof;
        };
        ConsensusParams: {
            encode(message: _186.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.ConsensusParams;
            fromJSON(object: any): _186.ConsensusParams;
            toJSON(message: _186.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                    timeIotaMs?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            }): _186.ConsensusParams;
        };
        BlockParams: {
            encode(message: _186.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.BlockParams;
            fromJSON(object: any): _186.BlockParams;
            toJSON(message: _186.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: any;
                maxGas?: any;
                timeIotaMs?: any;
            }): _186.BlockParams;
        };
        EvidenceParams: {
            encode(message: _186.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.EvidenceParams;
            fromJSON(object: any): _186.EvidenceParams;
            toJSON(message: _186.EvidenceParams): unknown;
            fromPartial(object: {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            }): _186.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _186.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.ValidatorParams;
            fromJSON(object: any): _186.ValidatorParams;
            toJSON(message: _186.ValidatorParams): unknown;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _186.ValidatorParams;
        };
        VersionParams: {
            encode(message: _186.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.VersionParams;
            fromJSON(object: any): _186.VersionParams;
            toJSON(message: _186.VersionParams): unknown;
            fromPartial(object: {
                appVersion?: any;
            }): _186.VersionParams;
        };
        HashedParams: {
            encode(message: _186.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.HashedParams;
            fromJSON(object: any): _186.HashedParams;
            toJSON(message: _186.HashedParams): unknown;
            fromPartial(object: {
                blockMaxBytes?: any;
                blockMaxGas?: any;
            }): _186.HashedParams;
        };
        Evidence: {
            encode(message: _185.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Evidence;
            fromJSON(object: any): _185.Evidence;
            toJSON(message: _185.Evidence): unknown;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _187.SignedMsgType;
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
                        type?: _187.SignedMsgType;
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
                                    blockIdFlag?: _187.BlockIDFlag;
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
            }): _185.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _185.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.DuplicateVoteEvidence;
            fromJSON(object: any): _185.DuplicateVoteEvidence;
            toJSON(message: _185.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                voteA?: {
                    type?: _187.SignedMsgType;
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
                    type?: _187.SignedMsgType;
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
            }): _185.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _185.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.LightClientAttackEvidence;
            fromJSON(object: any): _185.LightClientAttackEvidence;
            toJSON(message: _185.LightClientAttackEvidence): unknown;
            fromPartial(object: {
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
                                blockIdFlag?: _187.BlockIDFlag;
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
            }): _185.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _185.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.EvidenceList;
            fromJSON(object: any): _185.EvidenceList;
            toJSON(message: _185.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _187.SignedMsgType;
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
                            type?: _187.SignedMsgType;
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
                                        blockIdFlag?: _187.BlockIDFlag;
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
            }): _185.EvidenceList;
        };
        Block: {
            encode(message: _184.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Block;
            fromJSON(object: any): _184.Block;
            toJSON(message: _184.Block): unknown;
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
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _187.SignedMsgType;
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
                                type?: _187.SignedMsgType;
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
                                            blockIdFlag?: _187.BlockIDFlag;
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
                        blockIdFlag?: _187.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _184.Block;
        };
    };
    const version: {
        App: {
            encode(message: _189.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.App;
            fromJSON(object: any): _189.App;
            toJSON(message: _189.App): unknown;
            fromPartial(object: {
                protocol?: any;
                software?: string;
            }): _189.App;
        };
        Consensus: {
            encode(message: _189.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.Consensus;
            fromJSON(object: any): _189.Consensus;
            toJSON(message: _189.Consensus): unknown;
            fromPartial(object: {
                block?: any;
                app?: any;
            }): _189.Consensus;
        };
    };
}
