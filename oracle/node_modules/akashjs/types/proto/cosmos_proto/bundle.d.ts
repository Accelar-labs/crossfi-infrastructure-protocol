import * as _54 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _54.ScalarType;
    scalarTypeToJSON(object: _54.ScalarType): string;
    ScalarType: typeof _54.ScalarType;
    InterfaceDescriptor: {
        encode(message: _54.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.InterfaceDescriptor;
        fromJSON(object: any): _54.InterfaceDescriptor;
        toJSON(message: _54.InterfaceDescriptor): unknown;
        fromPartial(object: {
            name?: string;
            description?: string;
        }): _54.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _54.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ScalarDescriptor;
        fromJSON(object: any): _54.ScalarDescriptor;
        toJSON(message: _54.ScalarDescriptor): unknown;
        fromPartial(object: {
            name?: string;
            description?: string;
            fieldType?: _54.ScalarType[];
        }): _54.ScalarDescriptor;
    };
};
