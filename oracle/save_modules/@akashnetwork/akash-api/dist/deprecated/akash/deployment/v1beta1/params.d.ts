import Long from 'long';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import * as _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "akash.deployment.v1beta1";
export interface Params {
    $type: 'akash.deployment.v1beta1.Params';
    deploymentMinDeposit: Coin | undefined;
}
export declare const Params: {
    $type: "akash.deployment.v1beta1.Params";
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        deploymentMinDeposit?: {
            denom?: string;
            amount?: string;
        };
    } & {
        deploymentMinDeposit?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["deploymentMinDeposit"], "$type" | "denom" | "amount">, never>;
    } & Record<Exclude<keyof I, "$type" | "deploymentMinDeposit">, never>>(object: I): Params;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | '$type'>, never>;
export {};
