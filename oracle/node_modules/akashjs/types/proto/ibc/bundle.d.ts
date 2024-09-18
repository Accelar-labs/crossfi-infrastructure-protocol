import * as _155 from "./applications/transfer/v1/genesis";
import * as _156 from "./applications/transfer/v1/query";
import * as _157 from "./applications/transfer/v1/transfer";
import * as _158 from "./applications/transfer/v1/tx";
import * as _159 from "./applications/transfer/v2/packet";
import * as _160 from "./core/channel/v1/channel";
import * as _161 from "./core/channel/v1/genesis";
import * as _162 from "./core/channel/v1/query";
import * as _163 from "./core/channel/v1/tx";
import * as _164 from "./core/client/v1/client";
import * as _165 from "./core/client/v1/genesis";
import * as _166 from "./core/client/v1/query";
import * as _167 from "./core/client/v1/tx";
import * as _168 from "./core/commitment/v1/commitment";
import * as _169 from "./core/connection/v1/connection";
import * as _170 from "./core/connection/v1/genesis";
import * as _171 from "./core/connection/v1/query";
import * as _172 from "./core/connection/v1/tx";
import * as _173 from "./core/port/v1/query";
import * as _174 from "./core/types/v1/genesis";
import * as _175 from "./lightclients/localhost/v1/localhost";
import * as _176 from "./lightclients/solomachine/v1/solomachine";
import * as _177 from "./lightclients/solomachine/v2/solomachine";
import * as _178 from "./lightclients/tendermint/v1/tendermint";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _158.MsgTransfer): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _158.MsgTransfer): {
                            typeUrl: string;
                            value: _158.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _158.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _158.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _158.MsgTransfer): {
                            typeUrl: string;
                            value: _158.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _158.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            timeout_timestamp: string;
                        }) => _158.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _158.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgTransfer;
                    fromJSON(object: any): _158.MsgTransfer;
                    toJSON(message: _158.MsgTransfer): unknown;
                    fromPartial(object: {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        timeoutTimestamp?: any;
                    }): _158.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _158.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.MsgTransferResponse;
                    fromJSON(_: any): _158.MsgTransferResponse;
                    toJSON(_: _158.MsgTransferResponse): unknown;
                    fromPartial(_: {}): _158.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _157.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.DenomTrace;
                    fromJSON(object: any): _157.DenomTrace;
                    toJSON(message: _157.DenomTrace): unknown;
                    fromPartial(object: {
                        path?: string;
                        baseDenom?: string;
                    }): _157.DenomTrace;
                };
                Params: {
                    encode(message: _157.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Params;
                    fromJSON(object: any): _157.Params;
                    toJSON(message: _157.Params): unknown;
                    fromPartial(object: {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    }): _157.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _156.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryDenomTraceRequest;
                    fromJSON(object: any): _156.QueryDenomTraceRequest;
                    toJSON(message: _156.QueryDenomTraceRequest): unknown;
                    fromPartial(object: {
                        hash?: string;
                    }): _156.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _156.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryDenomTraceResponse;
                    fromJSON(object: any): _156.QueryDenomTraceResponse;
                    toJSON(message: _156.QueryDenomTraceResponse): unknown;
                    fromPartial(object: {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    }): _156.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _156.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryDenomTracesRequest;
                    fromJSON(object: any): _156.QueryDenomTracesRequest;
                    toJSON(message: _156.QueryDenomTracesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _156.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _156.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryDenomTracesResponse;
                    fromJSON(object: any): _156.QueryDenomTracesResponse;
                    toJSON(message: _156.QueryDenomTracesResponse): unknown;
                    fromPartial(object: {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _156.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _156.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryParamsRequest;
                    fromJSON(_: any): _156.QueryParamsRequest;
                    toJSON(_: _156.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _156.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _156.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryParamsResponse;
                    fromJSON(object: any): _156.QueryParamsResponse;
                    toJSON(message: _156.QueryParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _156.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _155.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GenesisState;
                    fromJSON(object: any): _155.GenesisState;
                    toJSON(message: _155.GenesisState): unknown;
                    fromPartial(object: {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _155.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _159.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.FungibleTokenPacketData;
                    fromJSON(object: any): _159.FungibleTokenPacketData;
                    toJSON(message: _159.FungibleTokenPacketData): unknown;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _159.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _163.MsgChannelOpenInit): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _163.MsgChannelOpenTry): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _163.MsgChannelOpenAck): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _163.MsgChannelOpenConfirm): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _163.MsgChannelCloseInit): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _163.MsgChannelCloseConfirm): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _163.MsgRecvPacket): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        timeout(value: _163.MsgTimeout): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _163.MsgTimeoutOnClose): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _163.MsgAcknowledgement): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _163.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _163.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _163.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _163.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _163.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _163.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _163.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _163.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _163.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _163.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _163.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _163.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _163.MsgRecvPacket): {
                            typeUrl: string;
                            value: _163.MsgRecvPacket;
                        };
                        timeout(value: _163.MsgTimeout): {
                            typeUrl: string;
                            value: _163.MsgTimeout;
                        };
                        timeoutOnClose(value: _163.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _163.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _163.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _163.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _163.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _163.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _163.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _163.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _163.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _163.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _163.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _163.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _163.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _163.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _163.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _163.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _163.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _163.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _163.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _163.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _163.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _163.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _163.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _163.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _163.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _163.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _163.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _163.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _163.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _163.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _163.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _163.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _163.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _163.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _163.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _163.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _163.MsgRecvPacket): {
                            typeUrl: string;
                            value: _163.MsgRecvPacket;
                        };
                        timeout(value: _163.MsgTimeout): {
                            typeUrl: string;
                            value: _163.MsgTimeout;
                        };
                        timeoutOnClose(value: _163.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _163.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _163.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _163.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _163.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _163.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _163.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _163.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _163.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _163.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _163.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _163.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _163.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _163.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _163.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _163.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _163.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _163.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _163.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            next_sequence_recv: string;
                            signer: string;
                        }) => _163.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _163.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            next_sequence_recv: string;
                            signer: string;
                        }) => _163.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _163.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _163.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _163.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgChannelOpenInit;
                    fromJSON(object: any): _163.MsgChannelOpenInit;
                    toJSON(message: _163.MsgChannelOpenInit): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channel?: {
                            state?: _160.State;
                            ordering?: _160.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _163.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _163.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _163.MsgChannelOpenInitResponse;
                    toJSON(_: _163.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: {}): _163.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _163.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgChannelOpenTry;
                    fromJSON(object: any): _163.MsgChannelOpenTry;
                    toJSON(message: _163.MsgChannelOpenTry): unknown;
                    fromPartial(object: {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _160.State;
                            ordering?: _160.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _163.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _163.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _163.MsgChannelOpenTryResponse;
                    toJSON(_: _163.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: {}): _163.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _163.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgChannelOpenAck;
                    fromJSON(object: any): _163.MsgChannelOpenAck;
                    toJSON(message: _163.MsgChannelOpenAck): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _163.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _163.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _163.MsgChannelOpenAckResponse;
                    toJSON(_: _163.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: {}): _163.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _163.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgChannelOpenConfirm;
                    fromJSON(object: any): _163.MsgChannelOpenConfirm;
                    toJSON(message: _163.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _163.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _163.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _163.MsgChannelOpenConfirmResponse;
                    toJSON(_: _163.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _163.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _163.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgChannelCloseInit;
                    fromJSON(object: any): _163.MsgChannelCloseInit;
                    toJSON(message: _163.MsgChannelCloseInit): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    }): _163.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _163.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _163.MsgChannelCloseInitResponse;
                    toJSON(_: _163.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: {}): _163.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _163.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgChannelCloseConfirm;
                    fromJSON(object: any): _163.MsgChannelCloseConfirm;
                    toJSON(message: _163.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _163.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _163.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _163.MsgChannelCloseConfirmResponse;
                    toJSON(_: _163.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: {}): _163.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _163.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgRecvPacket;
                    fromJSON(object: any): _163.MsgRecvPacket;
                    toJSON(message: _163.MsgRecvPacket): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _163.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _163.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgRecvPacketResponse;
                    fromJSON(_: any): _163.MsgRecvPacketResponse;
                    toJSON(_: _163.MsgRecvPacketResponse): unknown;
                    fromPartial(_: {}): _163.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _163.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgTimeout;
                    fromJSON(object: any): _163.MsgTimeout;
                    toJSON(message: _163.MsgTimeout): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        nextSequenceRecv?: any;
                        signer?: string;
                    }): _163.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _163.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgTimeoutResponse;
                    fromJSON(_: any): _163.MsgTimeoutResponse;
                    toJSON(_: _163.MsgTimeoutResponse): unknown;
                    fromPartial(_: {}): _163.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _163.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgTimeoutOnClose;
                    fromJSON(object: any): _163.MsgTimeoutOnClose;
                    toJSON(message: _163.MsgTimeoutOnClose): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        nextSequenceRecv?: any;
                        signer?: string;
                    }): _163.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _163.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _163.MsgTimeoutOnCloseResponse;
                    toJSON(_: _163.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: {}): _163.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _163.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgAcknowledgement;
                    fromJSON(object: any): _163.MsgAcknowledgement;
                    toJSON(message: _163.MsgAcknowledgement): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _163.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _163.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgAcknowledgementResponse;
                    fromJSON(_: any): _163.MsgAcknowledgementResponse;
                    toJSON(_: _163.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: {}): _163.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _162.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryChannelRequest;
                    fromJSON(object: any): _162.QueryChannelRequest;
                    toJSON(message: _162.QueryChannelRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _162.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _162.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryChannelResponse;
                    fromJSON(object: any): _162.QueryChannelResponse;
                    toJSON(message: _162.QueryChannelResponse): unknown;
                    fromPartial(object: {
                        channel?: {
                            state?: _160.State;
                            ordering?: _160.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _162.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _162.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryChannelsRequest;
                    fromJSON(object: any): _162.QueryChannelsRequest;
                    toJSON(message: _162.QueryChannelsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _162.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _162.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryChannelsResponse;
                    fromJSON(object: any): _162.QueryChannelsResponse;
                    toJSON(message: _162.QueryChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _160.State;
                            ordering?: _160.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _162.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _162.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _162.QueryConnectionChannelsRequest;
                    toJSON(message: _162.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _162.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _162.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _162.QueryConnectionChannelsResponse;
                    toJSON(message: _162.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _160.State;
                            ordering?: _160.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _162.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _162.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryChannelClientStateRequest;
                    fromJSON(object: any): _162.QueryChannelClientStateRequest;
                    toJSON(message: _162.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _162.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _162.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryChannelClientStateResponse;
                    fromJSON(object: any): _162.QueryChannelClientStateResponse;
                    toJSON(message: _162.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _162.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _162.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _162.QueryChannelConsensusStateRequest;
                    toJSON(message: _162.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    }): _162.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _162.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _162.QueryChannelConsensusStateResponse;
                    toJSON(message: _162.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _162.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _162.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _162.QueryPacketCommitmentRequest;
                    toJSON(message: _162.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _162.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _162.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _162.QueryPacketCommitmentResponse;
                    toJSON(message: _162.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _162.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _162.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _162.QueryPacketCommitmentsRequest;
                    toJSON(message: _162.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _162.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _162.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _162.QueryPacketCommitmentsResponse;
                    toJSON(message: _162.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _162.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _162.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryPacketReceiptRequest;
                    fromJSON(object: any): _162.QueryPacketReceiptRequest;
                    toJSON(message: _162.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _162.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _162.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryPacketReceiptResponse;
                    fromJSON(object: any): _162.QueryPacketReceiptResponse;
                    toJSON(message: _162.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _162.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _162.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _162.QueryPacketAcknowledgementRequest;
                    toJSON(message: _162.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _162.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _162.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _162.QueryPacketAcknowledgementResponse;
                    toJSON(message: _162.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _162.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _162.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _162.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _162.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        packetCommitmentSequences?: any[];
                    }): _162.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _162.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _162.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _162.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _162.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _162.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _162.QueryUnreceivedPacketsRequest;
                    toJSON(message: _162.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: any[];
                    }): _162.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _162.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _162.QueryUnreceivedPacketsResponse;
                    toJSON(message: _162.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _162.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _162.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _162.QueryUnreceivedAcksRequest;
                    toJSON(message: _162.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: any[];
                    }): _162.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _162.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _162.QueryUnreceivedAcksResponse;
                    toJSON(message: _162.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _162.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _162.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _162.QueryNextSequenceReceiveRequest;
                    toJSON(message: _162.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _162.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _162.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _162.QueryNextSequenceReceiveResponse;
                    toJSON(message: _162.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: {
                        nextSequenceReceive?: any;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _162.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _161.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.GenesisState;
                    fromJSON(object: any): _161.GenesisState;
                    toJSON(message: _161.GenesisState): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _160.State;
                            ordering?: _160.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        nextChannelSequence?: any;
                    }): _161.GenesisState;
                };
                PacketSequence: {
                    encode(message: _161.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.PacketSequence;
                    fromJSON(object: any): _161.PacketSequence;
                    toJSON(message: _161.PacketSequence): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _161.PacketSequence;
                };
                stateFromJSON(object: any): _160.State;
                stateToJSON(object: _160.State): string;
                orderFromJSON(object: any): _160.Order;
                orderToJSON(object: _160.Order): string;
                State: typeof _160.State;
                Order: typeof _160.Order;
                Channel: {
                    encode(message: _160.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Channel;
                    fromJSON(object: any): _160.Channel;
                    toJSON(message: _160.Channel): unknown;
                    fromPartial(object: {
                        state?: _160.State;
                        ordering?: _160.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    }): _160.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _160.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.IdentifiedChannel;
                    fromJSON(object: any): _160.IdentifiedChannel;
                    toJSON(message: _160.IdentifiedChannel): unknown;
                    fromPartial(object: {
                        state?: _160.State;
                        ordering?: _160.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    }): _160.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _160.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Counterparty;
                    fromJSON(object: any): _160.Counterparty;
                    toJSON(message: _160.Counterparty): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _160.Counterparty;
                };
                Packet: {
                    encode(message: _160.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Packet;
                    fromJSON(object: any): _160.Packet;
                    toJSON(message: _160.Packet): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        timeoutTimestamp?: any;
                    }): _160.Packet;
                };
                PacketState: {
                    encode(message: _160.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.PacketState;
                    fromJSON(object: any): _160.PacketState;
                    toJSON(message: _160.PacketState): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                        data?: Uint8Array;
                    }): _160.PacketState;
                };
                Acknowledgement: {
                    encode(message: _160.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Acknowledgement;
                    fromJSON(object: any): _160.Acknowledgement;
                    toJSON(message: _160.Acknowledgement): unknown;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _160.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _167.MsgCreateClient): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _167.MsgUpdateClient): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _167.MsgUpgradeClient): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _167.MsgSubmitMisbehaviour): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _167.MsgCreateClient): {
                            typeUrl: string;
                            value: _167.MsgCreateClient;
                        };
                        updateClient(value: _167.MsgUpdateClient): {
                            typeUrl: string;
                            value: _167.MsgUpdateClient;
                        };
                        upgradeClient(value: _167.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _167.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _167.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _167.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _167.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _167.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _167.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _167.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _167.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _167.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _167.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _167.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _167.MsgCreateClient): {
                            typeUrl: string;
                            value: _167.MsgCreateClient;
                        };
                        updateClient(value: _167.MsgUpdateClient): {
                            typeUrl: string;
                            value: _167.MsgUpdateClient;
                        };
                        upgradeClient(value: _167.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _167.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _167.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _167.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _167.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _167.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _167.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _167.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _167.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _167.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _167.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _167.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _167.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgCreateClient;
                    fromJSON(object: any): _167.MsgCreateClient;
                    toJSON(message: _167.MsgCreateClient): unknown;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _167.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _167.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgCreateClientResponse;
                    fromJSON(_: any): _167.MsgCreateClientResponse;
                    toJSON(_: _167.MsgCreateClientResponse): unknown;
                    fromPartial(_: {}): _167.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _167.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgUpdateClient;
                    fromJSON(object: any): _167.MsgUpdateClient;
                    toJSON(message: _167.MsgUpdateClient): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _167.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _167.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgUpdateClientResponse;
                    fromJSON(_: any): _167.MsgUpdateClientResponse;
                    toJSON(_: _167.MsgUpdateClientResponse): unknown;
                    fromPartial(_: {}): _167.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _167.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgUpgradeClient;
                    fromJSON(object: any): _167.MsgUpgradeClient;
                    toJSON(message: _167.MsgUpgradeClient): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    }): _167.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _167.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgUpgradeClientResponse;
                    fromJSON(_: any): _167.MsgUpgradeClientResponse;
                    toJSON(_: _167.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: {}): _167.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _167.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _167.MsgSubmitMisbehaviour;
                    toJSON(message: _167.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _167.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _167.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _167.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _167.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: {}): _167.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _166.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryClientStateRequest;
                    fromJSON(object: any): _166.QueryClientStateRequest;
                    toJSON(message: _166.QueryClientStateRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _166.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _166.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryClientStateResponse;
                    fromJSON(object: any): _166.QueryClientStateResponse;
                    toJSON(message: _166.QueryClientStateResponse): unknown;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _166.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _166.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryClientStatesRequest;
                    fromJSON(object: any): _166.QueryClientStatesRequest;
                    toJSON(message: _166.QueryClientStatesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _166.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _166.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryClientStatesResponse;
                    fromJSON(object: any): _166.QueryClientStatesResponse;
                    toJSON(message: _166.QueryClientStatesResponse): unknown;
                    fromPartial(object: {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _166.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _166.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryConsensusStateRequest;
                    fromJSON(object: any): _166.QueryConsensusStateRequest;
                    toJSON(message: _166.QueryConsensusStateRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                        latestHeight?: boolean;
                    }): _166.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _166.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryConsensusStateResponse;
                    fromJSON(object: any): _166.QueryConsensusStateResponse;
                    toJSON(message: _166.QueryConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _166.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _166.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryConsensusStatesRequest;
                    fromJSON(object: any): _166.QueryConsensusStatesRequest;
                    toJSON(message: _166.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _166.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _166.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryConsensusStatesResponse;
                    fromJSON(object: any): _166.QueryConsensusStatesResponse;
                    toJSON(message: _166.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _166.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _166.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryClientStatusRequest;
                    fromJSON(object: any): _166.QueryClientStatusRequest;
                    toJSON(message: _166.QueryClientStatusRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _166.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _166.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryClientStatusResponse;
                    fromJSON(object: any): _166.QueryClientStatusResponse;
                    toJSON(message: _166.QueryClientStatusResponse): unknown;
                    fromPartial(object: {
                        status?: string;
                    }): _166.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _166.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryClientParamsRequest;
                    fromJSON(_: any): _166.QueryClientParamsRequest;
                    toJSON(_: _166.QueryClientParamsRequest): unknown;
                    fromPartial(_: {}): _166.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _166.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryClientParamsResponse;
                    fromJSON(object: any): _166.QueryClientParamsResponse;
                    toJSON(message: _166.QueryClientParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _166.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _166.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _166.QueryUpgradedClientStateRequest;
                    toJSON(_: _166.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: {}): _166.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _166.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _166.QueryUpgradedClientStateResponse;
                    toJSON(message: _166.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _166.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _166.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _166.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _166.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: {}): _166.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _166.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _166.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _166.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _166.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _165.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.GenesisState;
                    fromJSON(object: any): _165.GenesisState;
                    toJSON(message: _165.GenesisState): unknown;
                    fromPartial(object: {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowedClients?: string[];
                        };
                        createLocalhost?: boolean;
                        nextClientSequence?: any;
                    }): _165.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _165.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.GenesisMetadata;
                    fromJSON(object: any): _165.GenesisMetadata;
                    toJSON(message: _165.GenesisMetadata): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _165.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _165.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _165.IdentifiedGenesisMetadata;
                    toJSON(message: _165.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _165.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _164.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.IdentifiedClientState;
                    fromJSON(object: any): _164.IdentifiedClientState;
                    toJSON(message: _164.IdentifiedClientState): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _164.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _164.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ConsensusStateWithHeight;
                    fromJSON(object: any): _164.ConsensusStateWithHeight;
                    toJSON(message: _164.ConsensusStateWithHeight): unknown;
                    fromPartial(object: {
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _164.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _164.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ClientConsensusStates;
                    fromJSON(object: any): _164.ClientConsensusStates;
                    toJSON(message: _164.ClientConsensusStates): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _164.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _164.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ClientUpdateProposal;
                    fromJSON(object: any): _164.ClientUpdateProposal;
                    toJSON(message: _164.ClientUpdateProposal): unknown;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    }): _164.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _164.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.UpgradeProposal;
                    fromJSON(object: any): _164.UpgradeProposal;
                    toJSON(message: _164.UpgradeProposal): unknown;
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
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _164.UpgradeProposal;
                };
                Height: {
                    encode(message: _164.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Height;
                    fromJSON(object: any): _164.Height;
                    toJSON(message: _164.Height): unknown;
                    fromPartial(object: {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    }): _164.Height;
                };
                Params: {
                    encode(message: _164.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Params;
                    fromJSON(object: any): _164.Params;
                    toJSON(message: _164.Params): unknown;
                    fromPartial(object: {
                        allowedClients?: string[];
                    }): _164.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _168.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MerkleRoot;
                    fromJSON(object: any): _168.MerkleRoot;
                    toJSON(message: _168.MerkleRoot): unknown;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _168.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _168.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MerklePrefix;
                    fromJSON(object: any): _168.MerklePrefix;
                    toJSON(message: _168.MerklePrefix): unknown;
                    fromPartial(object: {
                        keyPrefix?: Uint8Array;
                    }): _168.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _168.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MerklePath;
                    fromJSON(object: any): _168.MerklePath;
                    toJSON(message: _168.MerklePath): unknown;
                    fromPartial(object: {
                        keyPath?: string[];
                    }): _168.MerklePath;
                };
                MerkleProof: {
                    encode(message: _168.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MerkleProof;
                    fromJSON(object: any): _168.MerkleProof;
                    toJSON(message: _168.MerkleProof): unknown;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
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
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
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
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
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
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
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
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
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
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _168.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _172.MsgConnectionOpenInit): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _172.MsgConnectionOpenTry): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _172.MsgConnectionOpenAck): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _172.MsgConnectionOpenConfirm): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _172.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _172.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _172.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _172.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _172.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _172.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _172.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _172.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _172.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _172.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _172.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _172.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _172.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _172.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _172.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _172.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _172.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _172.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _172.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _172.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _172.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _172.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _172.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _172.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _172.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _172.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _172.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _172.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _172.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _172.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _172.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _172.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _172.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgConnectionOpenInit;
                    fromJSON(object: any): _172.MsgConnectionOpenInit;
                    toJSON(message: _172.MsgConnectionOpenInit): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delayPeriod?: any;
                        signer?: string;
                    }): _172.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _172.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _172.MsgConnectionOpenInitResponse;
                    toJSON(_: _172.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: {}): _172.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _172.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgConnectionOpenTry;
                    fromJSON(object: any): _172.MsgConnectionOpenTry;
                    toJSON(message: _172.MsgConnectionOpenTry): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _172.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _172.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _172.MsgConnectionOpenTryResponse;
                    toJSON(_: _172.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: {}): _172.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _172.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgConnectionOpenAck;
                    fromJSON(object: any): _172.MsgConnectionOpenAck;
                    toJSON(message: _172.MsgConnectionOpenAck): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _172.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _172.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _172.MsgConnectionOpenAckResponse;
                    toJSON(_: _172.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: {}): _172.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _172.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _172.MsgConnectionOpenConfirm;
                    toJSON(message: _172.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _172.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _172.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _172.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _172.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _172.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _171.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryConnectionRequest;
                    fromJSON(object: any): _171.QueryConnectionRequest;
                    toJSON(message: _171.QueryConnectionRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _171.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _171.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryConnectionResponse;
                    fromJSON(object: any): _171.QueryConnectionResponse;
                    toJSON(message: _171.QueryConnectionResponse): unknown;
                    fromPartial(object: {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _169.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _171.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _171.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryConnectionsRequest;
                    fromJSON(object: any): _171.QueryConnectionsRequest;
                    toJSON(message: _171.QueryConnectionsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _171.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _171.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryConnectionsResponse;
                    fromJSON(object: any): _171.QueryConnectionsResponse;
                    toJSON(message: _171.QueryConnectionsResponse): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _169.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _171.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _171.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryClientConnectionsRequest;
                    fromJSON(object: any): _171.QueryClientConnectionsRequest;
                    toJSON(message: _171.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _171.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _171.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryClientConnectionsResponse;
                    fromJSON(object: any): _171.QueryClientConnectionsResponse;
                    toJSON(message: _171.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _171.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _171.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _171.QueryConnectionClientStateRequest;
                    toJSON(message: _171.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _171.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _171.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _171.QueryConnectionClientStateResponse;
                    toJSON(message: _171.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _171.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _171.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _171.QueryConnectionConsensusStateRequest;
                    toJSON(message: _171.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    }): _171.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _171.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _171.QueryConnectionConsensusStateResponse;
                    toJSON(message: _171.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _171.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _170.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.GenesisState;
                    fromJSON(object: any): _170.GenesisState;
                    toJSON(message: _170.GenesisState): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _169.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[];
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[];
                        nextConnectionSequence?: any;
                        params?: {
                            maxExpectedTimePerBlock?: any;
                        };
                    }): _170.GenesisState;
                };
                stateFromJSON(object: any): _169.State;
                stateToJSON(object: _169.State): string;
                State: typeof _169.State;
                ConnectionEnd: {
                    encode(message: _169.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ConnectionEnd;
                    fromJSON(object: any): _169.ConnectionEnd;
                    toJSON(message: _169.ConnectionEnd): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _169.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                    }): _169.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _169.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.IdentifiedConnection;
                    fromJSON(object: any): _169.IdentifiedConnection;
                    toJSON(message: _169.IdentifiedConnection): unknown;
                    fromPartial(object: {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _169.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                    }): _169.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _169.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Counterparty;
                    fromJSON(object: any): _169.Counterparty;
                    toJSON(message: _169.Counterparty): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    }): _169.Counterparty;
                };
                ClientPaths: {
                    encode(message: _169.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ClientPaths;
                    fromJSON(object: any): _169.ClientPaths;
                    toJSON(message: _169.ClientPaths): unknown;
                    fromPartial(object: {
                        paths?: string[];
                    }): _169.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _169.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ConnectionPaths;
                    fromJSON(object: any): _169.ConnectionPaths;
                    toJSON(message: _169.ConnectionPaths): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        paths?: string[];
                    }): _169.ConnectionPaths;
                };
                Version: {
                    encode(message: _169.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Version;
                    fromJSON(object: any): _169.Version;
                    toJSON(message: _169.Version): unknown;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _169.Version;
                };
                Params: {
                    encode(message: _169.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Params;
                    fromJSON(object: any): _169.Params;
                    toJSON(message: _169.Params): unknown;
                    fromPartial(object: {
                        maxExpectedTimePerBlock?: any;
                    }): _169.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryAppVersionRequest: {
                    encode(message: _173.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryAppVersionRequest;
                    fromJSON(object: any): _173.QueryAppVersionRequest;
                    toJSON(message: _173.QueryAppVersionRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        connectionId?: string;
                        ordering?: _160.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        proposedVersion?: string;
                    }): _173.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _173.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryAppVersionResponse;
                    fromJSON(object: any): _173.QueryAppVersionResponse;
                    toJSON(message: _173.QueryAppVersionResponse): unknown;
                    fromPartial(object: {
                        portId?: string;
                        version?: string;
                    }): _173.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _174.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.GenesisState;
                    fromJSON(object: any): _174.GenesisState;
                    toJSON(message: _174.GenesisState): unknown;
                    fromPartial(object: {
                        clientGenesis?: {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowedClients?: string[];
                            };
                            createLocalhost?: boolean;
                            nextClientSequence?: any;
                        };
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _169.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: any;
                            params?: {
                                maxExpectedTimePerBlock?: any;
                            };
                        };
                        channelGenesis?: {
                            channels?: {
                                state?: _160.State;
                                ordering?: _160.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            nextChannelSequence?: any;
                        };
                    }): _174.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _175.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ClientState;
                    fromJSON(object: any): _175.ClientState;
                    toJSON(message: _175.ClientState): unknown;
                    fromPartial(object: {
                        chainId?: string;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _175.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _176.DataType;
                dataTypeToJSON(object: _176.DataType): string;
                DataType: typeof _176.DataType;
                ClientState: {
                    encode(message: _176.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ClientState;
                    fromJSON(object: any): _176.ClientState;
                    toJSON(message: _176.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        frozenSequence?: any;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _176.ClientState;
                };
                ConsensusState: {
                    encode(message: _176.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ConsensusState;
                    fromJSON(object: any): _176.ConsensusState;
                    toJSON(message: _176.ConsensusState): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _176.ConsensusState;
                };
                Header: {
                    encode(message: _176.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Header;
                    fromJSON(object: any): _176.Header;
                    toJSON(message: _176.Header): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _176.Header;
                };
                Misbehaviour: {
                    encode(message: _176.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Misbehaviour;
                    fromJSON(object: any): _176.Misbehaviour;
                    toJSON(message: _176.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _176.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _176.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _176.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _176.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.SignatureAndData;
                    fromJSON(object: any): _176.SignatureAndData;
                    toJSON(message: _176.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _176.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _176.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _176.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.TimestampedSignatureData;
                    fromJSON(object: any): _176.TimestampedSignatureData;
                    toJSON(message: _176.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    }): _176.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _176.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.SignBytes;
                    fromJSON(object: any): _176.SignBytes;
                    toJSON(message: _176.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _176.DataType;
                        data?: Uint8Array;
                    }): _176.SignBytes;
                };
                HeaderData: {
                    encode(message: _176.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.HeaderData;
                    fromJSON(object: any): _176.HeaderData;
                    toJSON(message: _176.HeaderData): unknown;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _176.HeaderData;
                };
                ClientStateData: {
                    encode(message: _176.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ClientStateData;
                    fromJSON(object: any): _176.ClientStateData;
                    toJSON(message: _176.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _176.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _176.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ConsensusStateData;
                    fromJSON(object: any): _176.ConsensusStateData;
                    toJSON(message: _176.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _176.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _176.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ConnectionStateData;
                    fromJSON(object: any): _176.ConnectionStateData;
                    toJSON(message: _176.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _169.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                    }): _176.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _176.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ChannelStateData;
                    fromJSON(object: any): _176.ChannelStateData;
                    toJSON(message: _176.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _160.State;
                            ordering?: _160.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _176.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _176.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.PacketCommitmentData;
                    fromJSON(object: any): _176.PacketCommitmentData;
                    toJSON(message: _176.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _176.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _176.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.PacketAcknowledgementData;
                    fromJSON(object: any): _176.PacketAcknowledgementData;
                    toJSON(message: _176.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _176.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _176.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.PacketReceiptAbsenceData;
                    fromJSON(object: any): _176.PacketReceiptAbsenceData;
                    toJSON(message: _176.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _176.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _176.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.NextSequenceRecvData;
                    fromJSON(object: any): _176.NextSequenceRecvData;
                    toJSON(message: _176.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    }): _176.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _177.DataType;
                dataTypeToJSON(object: _177.DataType): string;
                DataType: typeof _177.DataType;
                ClientState: {
                    encode(message: _177.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ClientState;
                    fromJSON(object: any): _177.ClientState;
                    toJSON(message: _177.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _177.ClientState;
                };
                ConsensusState: {
                    encode(message: _177.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ConsensusState;
                    fromJSON(object: any): _177.ConsensusState;
                    toJSON(message: _177.ConsensusState): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _177.ConsensusState;
                };
                Header: {
                    encode(message: _177.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Header;
                    fromJSON(object: any): _177.Header;
                    toJSON(message: _177.Header): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _177.Header;
                };
                Misbehaviour: {
                    encode(message: _177.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Misbehaviour;
                    fromJSON(object: any): _177.Misbehaviour;
                    toJSON(message: _177.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _177.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _177.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _177.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _177.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.SignatureAndData;
                    fromJSON(object: any): _177.SignatureAndData;
                    toJSON(message: _177.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _177.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _177.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _177.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.TimestampedSignatureData;
                    fromJSON(object: any): _177.TimestampedSignatureData;
                    toJSON(message: _177.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    }): _177.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _177.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.SignBytes;
                    fromJSON(object: any): _177.SignBytes;
                    toJSON(message: _177.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _177.DataType;
                        data?: Uint8Array;
                    }): _177.SignBytes;
                };
                HeaderData: {
                    encode(message: _177.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.HeaderData;
                    fromJSON(object: any): _177.HeaderData;
                    toJSON(message: _177.HeaderData): unknown;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _177.HeaderData;
                };
                ClientStateData: {
                    encode(message: _177.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ClientStateData;
                    fromJSON(object: any): _177.ClientStateData;
                    toJSON(message: _177.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _177.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _177.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ConsensusStateData;
                    fromJSON(object: any): _177.ConsensusStateData;
                    toJSON(message: _177.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _177.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _177.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ConnectionStateData;
                    fromJSON(object: any): _177.ConnectionStateData;
                    toJSON(message: _177.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _169.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                    }): _177.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _177.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ChannelStateData;
                    fromJSON(object: any): _177.ChannelStateData;
                    toJSON(message: _177.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _160.State;
                            ordering?: _160.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _177.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _177.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.PacketCommitmentData;
                    fromJSON(object: any): _177.PacketCommitmentData;
                    toJSON(message: _177.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _177.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _177.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.PacketAcknowledgementData;
                    fromJSON(object: any): _177.PacketAcknowledgementData;
                    toJSON(message: _177.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _177.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _177.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.PacketReceiptAbsenceData;
                    fromJSON(object: any): _177.PacketReceiptAbsenceData;
                    toJSON(message: _177.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _177.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _177.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.NextSequenceRecvData;
                    fromJSON(object: any): _177.NextSequenceRecvData;
                    toJSON(message: _177.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    }): _177.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _178.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ClientState;
                    fromJSON(object: any): _178.ClientState;
                    toJSON(message: _178.ClientState): unknown;
                    fromPartial(object: {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        trustingPeriod?: string;
                        unbondingPeriod?: string;
                        maxClockDrift?: string;
                        frozenHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        latestHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[];
                        upgradePath?: string[];
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    }): _178.ClientState;
                };
                ConsensusState: {
                    encode(message: _178.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ConsensusState;
                    fromJSON(object: any): _178.ConsensusState;
                    toJSON(message: _178.ConsensusState): unknown;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    }): _178.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _178.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Misbehaviour;
                    fromJSON(object: any): _178.Misbehaviour;
                    toJSON(message: _178.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        header_1?: {
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
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
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
                        header_2?: {
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
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
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
                    }): _178.Misbehaviour;
                };
                Header: {
                    encode(message: _178.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Header;
                    fromJSON(object: any): _178.Header;
                    toJSON(message: _178.Header): unknown;
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
                        trustedHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        trustedValidators?: {
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
                    }): _178.Header;
                };
                Fraction: {
                    encode(message: _178.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Fraction;
                    fromJSON(object: any): _178.Fraction;
                    toJSON(message: _178.Fraction): unknown;
                    fromPartial(object: {
                        numerator?: any;
                        denominator?: any;
                    }): _178.Fraction;
                };
            };
        }
    }
}
