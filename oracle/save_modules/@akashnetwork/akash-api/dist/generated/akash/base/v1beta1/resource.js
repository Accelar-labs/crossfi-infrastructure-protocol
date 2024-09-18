"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceUnits = exports.Storage = exports.Memory = exports.CPU = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const attribute_1 = require("./attribute");
const endpoint_1 = require("./endpoint");
const resourcevalue_1 = require("./resourcevalue");
function createBaseCPU() {
    return { $type: 'akash.base.v1beta1.CPU', units: undefined, attributes: [] };
}
exports.CPU = {
    $type: 'akash.base.v1beta1.CPU',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.units !== undefined) {
            resourcevalue_1.ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCPU();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.units = resourcevalue_1.ResourceValue.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
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
            $type: exports.CPU.$type,
            units: isSet(object.units)
                ? resourcevalue_1.ResourceValue.fromJSON(object.units)
                : undefined,
            attributes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.units !== undefined) {
            obj.units = resourcevalue_1.ResourceValue.toJSON(message.units);
        }
        if ((_a = message.attributes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.attributes = message.attributes.map((e) => attribute_1.Attribute.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.CPU.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCPU();
        message.units =
            object.units !== undefined && object.units !== null
                ? resourcevalue_1.ResourceValue.fromPartial(object.units)
                : undefined;
        message.attributes =
            ((_a = object.attributes) === null || _a === void 0 ? void 0 : _a.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CPU.$type, exports.CPU);
function createBaseMemory() {
    return {
        $type: 'akash.base.v1beta1.Memory',
        quantity: undefined,
        attributes: [],
    };
}
exports.Memory = {
    $type: 'akash.base.v1beta1.Memory',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.quantity !== undefined) {
            resourcevalue_1.ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMemory();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.quantity = resourcevalue_1.ResourceValue.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
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
            $type: exports.Memory.$type,
            quantity: isSet(object.quantity)
                ? resourcevalue_1.ResourceValue.fromJSON(object.quantity)
                : undefined,
            attributes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.quantity !== undefined) {
            obj.quantity = resourcevalue_1.ResourceValue.toJSON(message.quantity);
        }
        if ((_a = message.attributes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.attributes = message.attributes.map((e) => attribute_1.Attribute.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Memory.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMemory();
        message.quantity =
            object.quantity !== undefined && object.quantity !== null
                ? resourcevalue_1.ResourceValue.fromPartial(object.quantity)
                : undefined;
        message.attributes =
            ((_a = object.attributes) === null || _a === void 0 ? void 0 : _a.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Memory.$type, exports.Memory);
function createBaseStorage() {
    return {
        $type: 'akash.base.v1beta1.Storage',
        quantity: undefined,
        attributes: [],
    };
}
exports.Storage = {
    $type: 'akash.base.v1beta1.Storage',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.quantity !== undefined) {
            resourcevalue_1.ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.attributes) {
            attribute_1.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStorage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.quantity = resourcevalue_1.ResourceValue.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.attributes.push(attribute_1.Attribute.decode(reader, reader.uint32()));
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
            $type: exports.Storage.$type,
            quantity: isSet(object.quantity)
                ? resourcevalue_1.ResourceValue.fromJSON(object.quantity)
                : undefined,
            attributes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map((e) => attribute_1.Attribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.quantity !== undefined) {
            obj.quantity = resourcevalue_1.ResourceValue.toJSON(message.quantity);
        }
        if ((_a = message.attributes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.attributes = message.attributes.map((e) => attribute_1.Attribute.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Storage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStorage();
        message.quantity =
            object.quantity !== undefined && object.quantity !== null
                ? resourcevalue_1.ResourceValue.fromPartial(object.quantity)
                : undefined;
        message.attributes =
            ((_a = object.attributes) === null || _a === void 0 ? void 0 : _a.map((e) => attribute_1.Attribute.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Storage.$type, exports.Storage);
function createBaseResourceUnits() {
    return {
        $type: 'akash.base.v1beta1.ResourceUnits',
        cpu: undefined,
        memory: undefined,
        storage: undefined,
        endpoints: [],
    };
}
exports.ResourceUnits = {
    $type: 'akash.base.v1beta1.ResourceUnits',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cpu !== undefined) {
            exports.CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
        }
        if (message.memory !== undefined) {
            exports.Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
        }
        if (message.storage !== undefined) {
            exports.Storage.encode(message.storage, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.endpoints) {
            endpoint_1.Endpoint.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourceUnits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.cpu = exports.CPU.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.memory = exports.Memory.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.storage = exports.Storage.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.endpoints.push(endpoint_1.Endpoint.decode(reader, reader.uint32()));
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
            $type: exports.ResourceUnits.$type,
            cpu: isSet(object.cpu) ? exports.CPU.fromJSON(object.cpu) : undefined,
            memory: isSet(object.memory) ? exports.Memory.fromJSON(object.memory) : undefined,
            storage: isSet(object.storage)
                ? exports.Storage.fromJSON(object.storage)
                : undefined,
            endpoints: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.endpoints)
                ? object.endpoints.map((e) => endpoint_1.Endpoint.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.cpu !== undefined) {
            obj.cpu = exports.CPU.toJSON(message.cpu);
        }
        if (message.memory !== undefined) {
            obj.memory = exports.Memory.toJSON(message.memory);
        }
        if (message.storage !== undefined) {
            obj.storage = exports.Storage.toJSON(message.storage);
        }
        if ((_a = message.endpoints) === null || _a === void 0 ? void 0 : _a.length) {
            obj.endpoints = message.endpoints.map((e) => endpoint_1.Endpoint.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ResourceUnits.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResourceUnits();
        message.cpu =
            object.cpu !== undefined && object.cpu !== null
                ? exports.CPU.fromPartial(object.cpu)
                : undefined;
        message.memory =
            object.memory !== undefined && object.memory !== null
                ? exports.Memory.fromPartial(object.memory)
                : undefined;
        message.storage =
            object.storage !== undefined && object.storage !== null
                ? exports.Storage.fromPartial(object.storage)
                : undefined;
        message.endpoints =
            ((_a = object.endpoints) === null || _a === void 0 ? void 0 : _a.map((e) => endpoint_1.Endpoint.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ResourceUnits.$type, exports.ResourceUnits);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
