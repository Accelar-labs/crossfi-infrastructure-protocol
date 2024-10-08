"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHttpPattern = exports.HttpRule = exports.Http = void 0;
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../typeRegistry");
function createBaseHttp() {
    return {
        $type: 'google.api.Http',
        rules: [],
        fullyDecodeReservedExpansion: false,
    };
}
exports.Http = {
    $type: 'google.api.Http',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.rules) {
            exports.HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fullyDecodeReservedExpansion !== false) {
            writer.uint32(16).bool(message.fullyDecodeReservedExpansion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHttp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.rules.push(exports.HttpRule.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.fullyDecodeReservedExpansion = reader.bool();
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
            $type: exports.Http.$type,
            rules: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.rules)
                ? object.rules.map((e) => exports.HttpRule.fromJSON(e))
                : [],
            fullyDecodeReservedExpansion: isSet(object.fullyDecodeReservedExpansion)
                ? globalThis.Boolean(object.fullyDecodeReservedExpansion)
                : false,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.rules) === null || _a === void 0 ? void 0 : _a.length) {
            obj.rules = message.rules.map((e) => exports.HttpRule.toJSON(e));
        }
        if (message.fullyDecodeReservedExpansion !== false) {
            obj.fullyDecodeReservedExpansion = message.fullyDecodeReservedExpansion;
        }
        return obj;
    },
    create(base) {
        return exports.Http.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseHttp();
        message.rules = ((_a = object.rules) === null || _a === void 0 ? void 0 : _a.map((e) => exports.HttpRule.fromPartial(e))) || [];
        message.fullyDecodeReservedExpansion =
            (_b = object.fullyDecodeReservedExpansion) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Http.$type, exports.Http);
function createBaseHttpRule() {
    return {
        $type: 'google.api.HttpRule',
        selector: '',
        get: undefined,
        put: undefined,
        post: undefined,
        delete: undefined,
        patch: undefined,
        custom: undefined,
        body: '',
        responseBody: '',
        additionalBindings: [],
    };
}
exports.HttpRule = {
    $type: 'google.api.HttpRule',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.selector !== '') {
            writer.uint32(10).string(message.selector);
        }
        if (message.get !== undefined) {
            writer.uint32(18).string(message.get);
        }
        if (message.put !== undefined) {
            writer.uint32(26).string(message.put);
        }
        if (message.post !== undefined) {
            writer.uint32(34).string(message.post);
        }
        if (message.delete !== undefined) {
            writer.uint32(42).string(message.delete);
        }
        if (message.patch !== undefined) {
            writer.uint32(50).string(message.patch);
        }
        if (message.custom !== undefined) {
            exports.CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
        }
        if (message.body !== '') {
            writer.uint32(58).string(message.body);
        }
        if (message.responseBody !== '') {
            writer.uint32(98).string(message.responseBody);
        }
        for (const v of message.additionalBindings) {
            exports.HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHttpRule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.selector = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.get = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.put = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.post = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.delete = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.patch = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.custom = exports.CustomHttpPattern.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.body = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.responseBody = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.additionalBindings.push(exports.HttpRule.decode(reader, reader.uint32()));
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
            $type: exports.HttpRule.$type,
            selector: isSet(object.selector)
                ? globalThis.String(object.selector)
                : '',
            get: isSet(object.get) ? globalThis.String(object.get) : undefined,
            put: isSet(object.put) ? globalThis.String(object.put) : undefined,
            post: isSet(object.post) ? globalThis.String(object.post) : undefined,
            delete: isSet(object.delete)
                ? globalThis.String(object.delete)
                : undefined,
            patch: isSet(object.patch) ? globalThis.String(object.patch) : undefined,
            custom: isSet(object.custom)
                ? exports.CustomHttpPattern.fromJSON(object.custom)
                : undefined,
            body: isSet(object.body) ? globalThis.String(object.body) : '',
            responseBody: isSet(object.responseBody)
                ? globalThis.String(object.responseBody)
                : '',
            additionalBindings: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.additionalBindings)
                ? object.additionalBindings.map((e) => exports.HttpRule.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.selector !== '') {
            obj.selector = message.selector;
        }
        if (message.get !== undefined) {
            obj.get = message.get;
        }
        if (message.put !== undefined) {
            obj.put = message.put;
        }
        if (message.post !== undefined) {
            obj.post = message.post;
        }
        if (message.delete !== undefined) {
            obj.delete = message.delete;
        }
        if (message.patch !== undefined) {
            obj.patch = message.patch;
        }
        if (message.custom !== undefined) {
            obj.custom = exports.CustomHttpPattern.toJSON(message.custom);
        }
        if (message.body !== '') {
            obj.body = message.body;
        }
        if (message.responseBody !== '') {
            obj.responseBody = message.responseBody;
        }
        if ((_a = message.additionalBindings) === null || _a === void 0 ? void 0 : _a.length) {
            obj.additionalBindings = message.additionalBindings.map((e) => exports.HttpRule.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.HttpRule.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseHttpRule();
        message.selector = (_a = object.selector) !== null && _a !== void 0 ? _a : '';
        message.get = (_b = object.get) !== null && _b !== void 0 ? _b : undefined;
        message.put = (_c = object.put) !== null && _c !== void 0 ? _c : undefined;
        message.post = (_d = object.post) !== null && _d !== void 0 ? _d : undefined;
        message.delete = (_e = object.delete) !== null && _e !== void 0 ? _e : undefined;
        message.patch = (_f = object.patch) !== null && _f !== void 0 ? _f : undefined;
        message.custom =
            object.custom !== undefined && object.custom !== null
                ? exports.CustomHttpPattern.fromPartial(object.custom)
                : undefined;
        message.body = (_g = object.body) !== null && _g !== void 0 ? _g : '';
        message.responseBody = (_h = object.responseBody) !== null && _h !== void 0 ? _h : '';
        message.additionalBindings =
            ((_j = object.additionalBindings) === null || _j === void 0 ? void 0 : _j.map((e) => exports.HttpRule.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.HttpRule.$type, exports.HttpRule);
function createBaseCustomHttpPattern() {
    return { $type: 'google.api.CustomHttpPattern', kind: '', path: '' };
}
exports.CustomHttpPattern = {
    $type: 'google.api.CustomHttpPattern',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.kind !== '') {
            writer.uint32(10).string(message.kind);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCustomHttpPattern();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.kind = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.path = reader.string();
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
            $type: exports.CustomHttpPattern.$type,
            kind: isSet(object.kind) ? globalThis.String(object.kind) : '',
            path: isSet(object.path) ? globalThis.String(object.path) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.kind !== '') {
            obj.kind = message.kind;
        }
        if (message.path !== '') {
            obj.path = message.path;
        }
        return obj;
    },
    create(base) {
        return exports.CustomHttpPattern.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCustomHttpPattern();
        message.kind = (_a = object.kind) !== null && _a !== void 0 ? _a : '';
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CustomHttpPattern.$type, exports.CustomHttpPattern);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
