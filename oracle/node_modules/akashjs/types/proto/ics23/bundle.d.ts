import * as _53 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _53.HashOp;
    hashOpToJSON(object: _53.HashOp): string;
    lengthOpFromJSON(object: any): _53.LengthOp;
    lengthOpToJSON(object: _53.LengthOp): string;
    HashOp: typeof _53.HashOp;
    LengthOp: typeof _53.LengthOp;
    ExistenceProof: {
        encode(message: _53.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ExistenceProof;
        fromJSON(object: any): _53.ExistenceProof;
        toJSON(message: _53.ExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _53.HashOp;
                prehashKey?: _53.HashOp;
                prehashValue?: _53.HashOp;
                length?: _53.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _53.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _53.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _53.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.NonExistenceProof;
        fromJSON(object: any): _53.NonExistenceProof;
        toJSON(message: _53.NonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _53.HashOp;
                    prehashKey?: _53.HashOp;
                    prehashValue?: _53.HashOp;
                    length?: _53.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _53.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _53.HashOp;
                    prehashKey?: _53.HashOp;
                    prehashValue?: _53.HashOp;
                    length?: _53.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _53.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _53.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _53.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.CommitmentProof;
        fromJSON(object: any): _53.CommitmentProof;
        toJSON(message: _53.CommitmentProof): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _53.HashOp;
                    prehashKey?: _53.HashOp;
                    prehashValue?: _53.HashOp;
                    length?: _53.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _53.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _53.HashOp;
                        prehashKey?: _53.HashOp;
                        prehashValue?: _53.HashOp;
                        length?: _53.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _53.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _53.HashOp;
                        prehashKey?: _53.HashOp;
                        prehashValue?: _53.HashOp;
                        length?: _53.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _53.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _53.HashOp;
                            prehashKey?: _53.HashOp;
                            prehashValue?: _53.HashOp;
                            length?: _53.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _53.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _53.HashOp;
                                prehashKey?: _53.HashOp;
                                prehashValue?: _53.HashOp;
                                length?: _53.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _53.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _53.HashOp;
                                prehashKey?: _53.HashOp;
                                prehashValue?: _53.HashOp;
                                length?: _53.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _53.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[];
            };
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _53.HashOp;
                            prehashKey?: _53.HashOp;
                            prehashValue?: _53.HashOp;
                            length?: _53.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _53.HashOp;
                                prehashKey?: _53.HashOp;
                                prehashValue?: _53.HashOp;
                                length?: _53.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _53.HashOp;
                                prehashKey?: _53.HashOp;
                                prehashValue?: _53.HashOp;
                                length?: _53.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _53.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _53.CommitmentProof;
    };
    LeafOp: {
        encode(message: _53.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.LeafOp;
        fromJSON(object: any): _53.LeafOp;
        toJSON(message: _53.LeafOp): unknown;
        fromPartial(object: {
            hash?: _53.HashOp;
            prehashKey?: _53.HashOp;
            prehashValue?: _53.HashOp;
            length?: _53.LengthOp;
            prefix?: Uint8Array;
        }): _53.LeafOp;
    };
    InnerOp: {
        encode(message: _53.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.InnerOp;
        fromJSON(object: any): _53.InnerOp;
        toJSON(message: _53.InnerOp): unknown;
        fromPartial(object: {
            hash?: _53.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _53.InnerOp;
    };
    ProofSpec: {
        encode(message: _53.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ProofSpec;
        fromJSON(object: any): _53.ProofSpec;
        toJSON(message: _53.ProofSpec): unknown;
        fromPartial(object: {
            leafSpec?: {
                hash?: _53.HashOp;
                prehashKey?: _53.HashOp;
                prehashValue?: _53.HashOp;
                length?: _53.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _53.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _53.ProofSpec;
    };
    InnerSpec: {
        encode(message: _53.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.InnerSpec;
        fromJSON(object: any): _53.InnerSpec;
        toJSON(message: _53.InnerSpec): unknown;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _53.HashOp;
        }): _53.InnerSpec;
    };
    BatchProof: {
        encode(message: _53.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.BatchProof;
        fromJSON(object: any): _53.BatchProof;
        toJSON(message: _53.BatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _53.HashOp;
                        prehashKey?: _53.HashOp;
                        prehashValue?: _53.HashOp;
                        length?: _53.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _53.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _53.HashOp;
                            prehashKey?: _53.HashOp;
                            prehashValue?: _53.HashOp;
                            length?: _53.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _53.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _53.HashOp;
                            prehashKey?: _53.HashOp;
                            prehashValue?: _53.HashOp;
                            length?: _53.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _53.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _53.BatchProof;
    };
    BatchEntry: {
        encode(message: _53.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.BatchEntry;
        fromJSON(object: any): _53.BatchEntry;
        toJSON(message: _53.BatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _53.HashOp;
                    prehashKey?: _53.HashOp;
                    prehashValue?: _53.HashOp;
                    length?: _53.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _53.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _53.HashOp;
                        prehashKey?: _53.HashOp;
                        prehashValue?: _53.HashOp;
                        length?: _53.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _53.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _53.HashOp;
                        prehashKey?: _53.HashOp;
                        prehashValue?: _53.HashOp;
                        length?: _53.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _53.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _53.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _53.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.CompressedBatchProof;
        fromJSON(object: any): _53.CompressedBatchProof;
        toJSON(message: _53.CompressedBatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _53.HashOp;
                        prehashKey?: _53.HashOp;
                        prehashValue?: _53.HashOp;
                        length?: _53.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _53.HashOp;
                            prehashKey?: _53.HashOp;
                            prehashValue?: _53.HashOp;
                            length?: _53.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _53.HashOp;
                            prehashKey?: _53.HashOp;
                            prehashValue?: _53.HashOp;
                            length?: _53.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _53.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _53.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _53.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.CompressedBatchEntry;
        fromJSON(object: any): _53.CompressedBatchEntry;
        toJSON(message: _53.CompressedBatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _53.HashOp;
                    prehashKey?: _53.HashOp;
                    prehashValue?: _53.HashOp;
                    length?: _53.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _53.HashOp;
                        prehashKey?: _53.HashOp;
                        prehashValue?: _53.HashOp;
                        length?: _53.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _53.HashOp;
                        prehashKey?: _53.HashOp;
                        prehashValue?: _53.HashOp;
                        length?: _53.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _53.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _53.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.CompressedExistenceProof;
        fromJSON(object: any): _53.CompressedExistenceProof;
        toJSON(message: _53.CompressedExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _53.HashOp;
                prehashKey?: _53.HashOp;
                prehashValue?: _53.HashOp;
                length?: _53.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _53.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _53.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.CompressedNonExistenceProof;
        fromJSON(object: any): _53.CompressedNonExistenceProof;
        toJSON(message: _53.CompressedNonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _53.HashOp;
                    prehashKey?: _53.HashOp;
                    prehashValue?: _53.HashOp;
                    length?: _53.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _53.HashOp;
                    prehashKey?: _53.HashOp;
                    prehashValue?: _53.HashOp;
                    length?: _53.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _53.CompressedNonExistenceProof;
    };
};
