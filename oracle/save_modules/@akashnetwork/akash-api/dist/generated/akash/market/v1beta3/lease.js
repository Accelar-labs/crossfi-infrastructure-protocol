"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCloseLeaseResponse = exports.MsgCloseLease = exports.MsgWithdrawLeaseResponse = exports.MsgWithdrawLease = exports.MsgCreateLeaseResponse = exports.MsgCreateLease = exports.LeaseFilters = exports.Lease = exports.LeaseID = exports.lease_StateToJSON = exports.lease_StateFromJSON = exports.Lease_State = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const typeRegistry_1 = require("../../../typeRegistry");
const bid_1 = require("./bid");
var Lease_State;
(function (Lease_State) {
    Lease_State[Lease_State["invalid"] = 0] = "invalid";
    Lease_State[Lease_State["active"] = 1] = "active";
    Lease_State[Lease_State["insufficient_funds"] = 2] = "insufficient_funds";
    Lease_State[Lease_State["closed"] = 3] = "closed";
    Lease_State[Lease_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Lease_State || (exports.Lease_State = Lease_State = {}));
function lease_StateFromJSON(object) {
    switch (object) {
        case 0:
        case 'invalid':
            return Lease_State.invalid;
        case 1:
        case 'active':
            return Lease_State.active;
        case 2:
        case 'insufficient_funds':
            return Lease_State.insufficient_funds;
        case 3:
        case 'closed':
            return Lease_State.closed;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Lease_State.UNRECOGNIZED;
    }
}
exports.lease_StateFromJSON = lease_StateFromJSON;
function lease_StateToJSON(object) {
    switch (object) {
        case Lease_State.invalid:
            return 'invalid';
        case Lease_State.active:
            return 'active';
        case Lease_State.insufficient_funds:
            return 'insufficient_funds';
        case Lease_State.closed:
            return 'closed';
        case Lease_State.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
exports.lease_StateToJSON = lease_StateToJSON;
function createBaseLeaseID() {
    return {
        $type: 'akash.market.v1beta3.LeaseID',
        owner: '',
        dseq: long_1.default.UZERO,
        gseq: 0,
        oseq: 0,
        provider: '',
    };
}
exports.LeaseID = {
    $type: 'akash.market.v1beta3.LeaseID',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (!message.dseq.equals(long_1.default.UZERO)) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.gseq !== 0) {
            writer.uint32(24).uint32(message.gseq);
        }
        if (message.oseq !== 0) {
            writer.uint32(32).uint32(message.oseq);
        }
        if (message.provider !== '') {
            writer.uint32(42).string(message.provider);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaseID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.dseq = reader.uint64();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.gseq = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.oseq = reader.uint32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.provider = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.LeaseID.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            dseq: isSet(object.dseq) ? long_1.default.fromValue(object.dseq) : long_1.default.UZERO,
            gseq: isSet(object.gseq) ? globalThis.Number(object.gseq) : 0,
            oseq: isSet(object.oseq) ? globalThis.Number(object.oseq) : 0,
            provider: isSet(object.provider)
                ? globalThis.String(object.provider)
                : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (!message.dseq.equals(long_1.default.UZERO)) {
            obj.dseq = (message.dseq || long_1.default.UZERO).toString();
        }
        if (message.gseq !== 0) {
            obj.gseq = Math.round(message.gseq);
        }
        if (message.oseq !== 0) {
            obj.oseq = Math.round(message.oseq);
        }
        if (message.provider !== '') {
            obj.provider = message.provider;
        }
        return obj;
    },
    create(base) {
        return exports.LeaseID.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseLeaseID();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.dseq =
            object.dseq !== undefined && object.dseq !== null
                ? long_1.default.fromValue(object.dseq)
                : long_1.default.UZERO;
        message.gseq = (_b = object.gseq) !== null && _b !== void 0 ? _b : 0;
        message.oseq = (_c = object.oseq) !== null && _c !== void 0 ? _c : 0;
        message.provider = (_d = object.provider) !== null && _d !== void 0 ? _d : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LeaseID.$type, exports.LeaseID);
function createBaseLease() {
    return {
        $type: 'akash.market.v1beta3.Lease',
        leaseId: undefined,
        state: 0,
        price: undefined,
        createdAt: long_1.default.ZERO,
        closedOn: long_1.default.ZERO,
    };
}
exports.Lease = {
    $type: 'akash.market.v1beta3.Lease',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.leaseId !== undefined) {
            exports.LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.price !== undefined) {
            coin_1.DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        if (!message.createdAt.equals(long_1.default.ZERO)) {
            writer.uint32(32).int64(message.createdAt);
        }
        if (!message.closedOn.equals(long_1.default.ZERO)) {
            writer.uint32(40).int64(message.closedOn);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.leaseId = exports.LeaseID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.price = coin_1.DecCoin.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.createdAt = reader.int64();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.closedOn = reader.int64();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.Lease.$type,
            leaseId: isSet(object.leaseId)
                ? exports.LeaseID.fromJSON(object.leaseId)
                : undefined,
            state: isSet(object.state) ? lease_StateFromJSON(object.state) : 0,
            price: isSet(object.price) ? coin_1.DecCoin.fromJSON(object.price) : undefined,
            createdAt: isSet(object.createdAt)
                ? long_1.default.fromValue(object.createdAt)
                : long_1.default.ZERO,
            closedOn: isSet(object.closedOn)
                ? long_1.default.fromValue(object.closedOn)
                : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.leaseId !== undefined) {
            obj.leaseId = exports.LeaseID.toJSON(message.leaseId);
        }
        if (message.state !== 0) {
            obj.state = lease_StateToJSON(message.state);
        }
        if (message.price !== undefined) {
            obj.price = coin_1.DecCoin.toJSON(message.price);
        }
        if (!message.createdAt.equals(long_1.default.ZERO)) {
            obj.createdAt = (message.createdAt || long_1.default.ZERO).toString();
        }
        if (!message.closedOn.equals(long_1.default.ZERO)) {
            obj.closedOn = (message.closedOn || long_1.default.ZERO).toString();
        }
        return obj;
    },
    create(base) {
        return exports.Lease.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLease();
        message.leaseId =
            object.leaseId !== undefined && object.leaseId !== null
                ? exports.LeaseID.fromPartial(object.leaseId)
                : undefined;
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.price =
            object.price !== undefined && object.price !== null
                ? coin_1.DecCoin.fromPartial(object.price)
                : undefined;
        message.createdAt =
            object.createdAt !== undefined && object.createdAt !== null
                ? long_1.default.fromValue(object.createdAt)
                : long_1.default.ZERO;
        message.closedOn =
            object.closedOn !== undefined && object.closedOn !== null
                ? long_1.default.fromValue(object.closedOn)
                : long_1.default.ZERO;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Lease.$type, exports.Lease);
function createBaseLeaseFilters() {
    return {
        $type: 'akash.market.v1beta3.LeaseFilters',
        owner: '',
        dseq: long_1.default.UZERO,
        gseq: 0,
        oseq: 0,
        provider: '',
        state: '',
    };
}
exports.LeaseFilters = {
    $type: 'akash.market.v1beta3.LeaseFilters',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (!message.dseq.equals(long_1.default.UZERO)) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.gseq !== 0) {
            writer.uint32(24).uint32(message.gseq);
        }
        if (message.oseq !== 0) {
            writer.uint32(32).uint32(message.oseq);
        }
        if (message.provider !== '') {
            writer.uint32(42).string(message.provider);
        }
        if (message.state !== '') {
            writer.uint32(50).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeaseFilters();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.dseq = reader.uint64();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.gseq = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.oseq = reader.uint32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.provider = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.state = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.LeaseFilters.$type,
            owner: isSet(object.owner) ? globalThis.String(object.owner) : '',
            dseq: isSet(object.dseq) ? long_1.default.fromValue(object.dseq) : long_1.default.UZERO,
            gseq: isSet(object.gseq) ? globalThis.Number(object.gseq) : 0,
            oseq: isSet(object.oseq) ? globalThis.Number(object.oseq) : 0,
            provider: isSet(object.provider)
                ? globalThis.String(object.provider)
                : '',
            state: isSet(object.state) ? globalThis.String(object.state) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== '') {
            obj.owner = message.owner;
        }
        if (!message.dseq.equals(long_1.default.UZERO)) {
            obj.dseq = (message.dseq || long_1.default.UZERO).toString();
        }
        if (message.gseq !== 0) {
            obj.gseq = Math.round(message.gseq);
        }
        if (message.oseq !== 0) {
            obj.oseq = Math.round(message.oseq);
        }
        if (message.provider !== '') {
            obj.provider = message.provider;
        }
        if (message.state !== '') {
            obj.state = message.state;
        }
        return obj;
    },
    create(base) {
        return exports.LeaseFilters.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseLeaseFilters();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : '';
        message.dseq =
            object.dseq !== undefined && object.dseq !== null
                ? long_1.default.fromValue(object.dseq)
                : long_1.default.UZERO;
        message.gseq = (_b = object.gseq) !== null && _b !== void 0 ? _b : 0;
        message.oseq = (_c = object.oseq) !== null && _c !== void 0 ? _c : 0;
        message.provider = (_d = object.provider) !== null && _d !== void 0 ? _d : '';
        message.state = (_e = object.state) !== null && _e !== void 0 ? _e : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LeaseFilters.$type, exports.LeaseFilters);
function createBaseMsgCreateLease() {
    return { $type: 'akash.market.v1beta3.MsgCreateLease', bidId: undefined };
}
exports.MsgCreateLease = {
    $type: 'akash.market.v1beta3.MsgCreateLease',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bidId !== undefined) {
            bid_1.BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateLease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.bidId = bid_1.BidID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.MsgCreateLease.$type,
            bidId: isSet(object.bidId) ? bid_1.BidID.fromJSON(object.bidId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.bidId !== undefined) {
            obj.bidId = bid_1.BidID.toJSON(message.bidId);
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreateLease.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateLease();
        message.bidId =
            object.bidId !== undefined && object.bidId !== null
                ? bid_1.BidID.fromPartial(object.bidId)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCreateLease.$type, exports.MsgCreateLease);
function createBaseMsgCreateLeaseResponse() {
    return { $type: 'akash.market.v1beta3.MsgCreateLeaseResponse' };
}
exports.MsgCreateLeaseResponse = {
    $type: 'akash.market.v1beta3.MsgCreateLeaseResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateLeaseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return { $type: exports.MsgCreateLeaseResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgCreateLeaseResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateLeaseResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCreateLeaseResponse.$type, exports.MsgCreateLeaseResponse);
function createBaseMsgWithdrawLease() {
    return { $type: 'akash.market.v1beta3.MsgWithdrawLease', bidId: undefined };
}
exports.MsgWithdrawLease = {
    $type: 'akash.market.v1beta3.MsgWithdrawLease',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bidId !== undefined) {
            exports.LeaseID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawLease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.bidId = exports.LeaseID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.MsgWithdrawLease.$type,
            bidId: isSet(object.bidId) ? exports.LeaseID.fromJSON(object.bidId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.bidId !== undefined) {
            obj.bidId = exports.LeaseID.toJSON(message.bidId);
        }
        return obj;
    },
    create(base) {
        return exports.MsgWithdrawLease.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawLease();
        message.bidId =
            object.bidId !== undefined && object.bidId !== null
                ? exports.LeaseID.fromPartial(object.bidId)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgWithdrawLease.$type, exports.MsgWithdrawLease);
function createBaseMsgWithdrawLeaseResponse() {
    return { $type: 'akash.market.v1beta3.MsgWithdrawLeaseResponse' };
}
exports.MsgWithdrawLeaseResponse = {
    $type: 'akash.market.v1beta3.MsgWithdrawLeaseResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawLeaseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return { $type: exports.MsgWithdrawLeaseResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgWithdrawLeaseResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawLeaseResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgWithdrawLeaseResponse.$type, exports.MsgWithdrawLeaseResponse);
function createBaseMsgCloseLease() {
    return { $type: 'akash.market.v1beta3.MsgCloseLease', leaseId: undefined };
}
exports.MsgCloseLease = {
    $type: 'akash.market.v1beta3.MsgCloseLease',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.leaseId !== undefined) {
            exports.LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseLease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.leaseId = exports.LeaseID.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.MsgCloseLease.$type,
            leaseId: isSet(object.leaseId)
                ? exports.LeaseID.fromJSON(object.leaseId)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.leaseId !== undefined) {
            obj.leaseId = exports.LeaseID.toJSON(message.leaseId);
        }
        return obj;
    },
    create(base) {
        return exports.MsgCloseLease.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgCloseLease();
        message.leaseId =
            object.leaseId !== undefined && object.leaseId !== null
                ? exports.LeaseID.fromPartial(object.leaseId)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCloseLease.$type, exports.MsgCloseLease);
function createBaseMsgCloseLeaseResponse() {
    return { $type: 'akash.market.v1beta3.MsgCloseLeaseResponse' };
}
exports.MsgCloseLeaseResponse = {
    $type: 'akash.market.v1beta3.MsgCloseLeaseResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseLeaseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return { $type: exports.MsgCloseLeaseResponse.$type };
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgCloseLeaseResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCloseLeaseResponse();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCloseLeaseResponse.$type, exports.MsgCloseLeaseResponse);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
