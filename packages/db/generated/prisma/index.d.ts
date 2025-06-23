
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model Link
 * 
 */
export type Link = $Result.DefaultSelection<Prisma.$LinkPayload>
/**
 * Model LinkType
 * 
 */
export type LinkType = $Result.DefaultSelection<Prisma.$LinkTypePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectCountries
 * 
 */
export type ProjectCountries = $Result.DefaultSelection<Prisma.$ProjectCountriesPayload>
/**
 * Model Split
 * 
 */
export type Split = $Result.DefaultSelection<Prisma.$SplitPayload>
/**
 * Model Splitter
 * 
 */
export type Splitter = $Result.DefaultSelection<Prisma.$SplitterPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.link.findMany()
    * ```
    */
  get link(): Prisma.LinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linkType`: Exposes CRUD operations for the **LinkType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkTypes
    * const linkTypes = await prisma.linkType.findMany()
    * ```
    */
  get linkType(): Prisma.LinkTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectCountries`: Exposes CRUD operations for the **ProjectCountries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectCountries
    * const projectCountries = await prisma.projectCountries.findMany()
    * ```
    */
  get projectCountries(): Prisma.ProjectCountriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.split`: Exposes CRUD operations for the **Split** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Splits
    * const splits = await prisma.split.findMany()
    * ```
    */
  get split(): Prisma.SplitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.splitter`: Exposes CRUD operations for the **Splitter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Splitters
    * const splitters = await prisma.splitter.findMany()
    * ```
    */
  get splitter(): Prisma.SplitterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Category: 'Category',
    Country: 'Country',
    Link: 'Link',
    LinkType: 'LinkType',
    Project: 'Project',
    ProjectCountries: 'ProjectCountries',
    Split: 'Split',
    Splitter: 'Splitter',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "country" | "link" | "linkType" | "project" | "projectCountries" | "split" | "splitter" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      Link: {
        payload: Prisma.$LinkPayload<ExtArgs>
        fields: Prisma.LinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findFirst: {
            args: Prisma.LinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findMany: {
            args: Prisma.LinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          create: {
            args: Prisma.LinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          createMany: {
            args: Prisma.LinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          delete: {
            args: Prisma.LinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          update: {
            args: Prisma.LinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          deleteMany: {
            args: Prisma.LinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          upsert: {
            args: Prisma.LinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          aggregate: {
            args: Prisma.LinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLink>
          }
          groupBy: {
            args: Prisma.LinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkCountArgs<ExtArgs>
            result: $Utils.Optional<LinkCountAggregateOutputType> | number
          }
        }
      }
      LinkType: {
        payload: Prisma.$LinkTypePayload<ExtArgs>
        fields: Prisma.LinkTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTypePayload>
          }
          findFirst: {
            args: Prisma.LinkTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTypePayload>
          }
          findMany: {
            args: Prisma.LinkTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTypePayload>[]
          }
          create: {
            args: Prisma.LinkTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTypePayload>
          }
          createMany: {
            args: Prisma.LinkTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTypePayload>[]
          }
          delete: {
            args: Prisma.LinkTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTypePayload>
          }
          update: {
            args: Prisma.LinkTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTypePayload>
          }
          deleteMany: {
            args: Prisma.LinkTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTypePayload>[]
          }
          upsert: {
            args: Prisma.LinkTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTypePayload>
          }
          aggregate: {
            args: Prisma.LinkTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkType>
          }
          groupBy: {
            args: Prisma.LinkTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkTypeCountArgs<ExtArgs>
            result: $Utils.Optional<LinkTypeCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectCountries: {
        payload: Prisma.$ProjectCountriesPayload<ExtArgs>
        fields: Prisma.ProjectCountriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectCountriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCountriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectCountriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCountriesPayload>
          }
          findFirst: {
            args: Prisma.ProjectCountriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCountriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectCountriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCountriesPayload>
          }
          findMany: {
            args: Prisma.ProjectCountriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCountriesPayload>[]
          }
          create: {
            args: Prisma.ProjectCountriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCountriesPayload>
          }
          createMany: {
            args: Prisma.ProjectCountriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCountriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCountriesPayload>[]
          }
          delete: {
            args: Prisma.ProjectCountriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCountriesPayload>
          }
          update: {
            args: Prisma.ProjectCountriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCountriesPayload>
          }
          deleteMany: {
            args: Prisma.ProjectCountriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectCountriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectCountriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCountriesPayload>[]
          }
          upsert: {
            args: Prisma.ProjectCountriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCountriesPayload>
          }
          aggregate: {
            args: Prisma.ProjectCountriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectCountries>
          }
          groupBy: {
            args: Prisma.ProjectCountriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountriesCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountriesCountAggregateOutputType> | number
          }
        }
      }
      Split: {
        payload: Prisma.$SplitPayload<ExtArgs>
        fields: Prisma.SplitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SplitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SplitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>
          }
          findFirst: {
            args: Prisma.SplitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SplitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>
          }
          findMany: {
            args: Prisma.SplitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>[]
          }
          create: {
            args: Prisma.SplitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>
          }
          createMany: {
            args: Prisma.SplitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SplitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>[]
          }
          delete: {
            args: Prisma.SplitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>
          }
          update: {
            args: Prisma.SplitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>
          }
          deleteMany: {
            args: Prisma.SplitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SplitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SplitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>[]
          }
          upsert: {
            args: Prisma.SplitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitPayload>
          }
          aggregate: {
            args: Prisma.SplitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSplit>
          }
          groupBy: {
            args: Prisma.SplitGroupByArgs<ExtArgs>
            result: $Utils.Optional<SplitGroupByOutputType>[]
          }
          count: {
            args: Prisma.SplitCountArgs<ExtArgs>
            result: $Utils.Optional<SplitCountAggregateOutputType> | number
          }
        }
      }
      Splitter: {
        payload: Prisma.$SplitterPayload<ExtArgs>
        fields: Prisma.SplitterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SplitterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SplitterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitterPayload>
          }
          findFirst: {
            args: Prisma.SplitterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SplitterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitterPayload>
          }
          findMany: {
            args: Prisma.SplitterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitterPayload>[]
          }
          create: {
            args: Prisma.SplitterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitterPayload>
          }
          createMany: {
            args: Prisma.SplitterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SplitterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitterPayload>[]
          }
          delete: {
            args: Prisma.SplitterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitterPayload>
          }
          update: {
            args: Prisma.SplitterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitterPayload>
          }
          deleteMany: {
            args: Prisma.SplitterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SplitterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SplitterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitterPayload>[]
          }
          upsert: {
            args: Prisma.SplitterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitterPayload>
          }
          aggregate: {
            args: Prisma.SplitterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSplitter>
          }
          groupBy: {
            args: Prisma.SplitterGroupByArgs<ExtArgs>
            result: $Utils.Optional<SplitterGroupByOutputType>[]
          }
          count: {
            args: Prisma.SplitterCountArgs<ExtArgs>
            result: $Utils.Optional<SplitterCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit
    country?: CountryOmit
    link?: LinkOmit
    linkType?: LinkTypeOmit
    project?: ProjectOmit
    projectCountries?: ProjectCountriesOmit
    split?: SplitOmit
    splitter?: SplitterOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Splitter: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Splitter?: boolean | CategoryCountOutputTypeCountSplitterArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSplitterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SplitterWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    ProjectCountries: number
    Splitter: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectCountries?: boolean | CountryCountOutputTypeCountProjectCountriesArgs
    Splitter?: boolean | CountryCountOutputTypeCountSplitterArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountProjectCountriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCountriesWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountSplitterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SplitterWhereInput
  }


  /**
   * Count Type LinkTypeCountOutputType
   */

  export type LinkTypeCountOutputType = {
    Link: number
  }

  export type LinkTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Link?: boolean | LinkTypeCountOutputTypeCountLinkArgs
  }

  // Custom InputTypes
  /**
   * LinkTypeCountOutputType without action
   */
  export type LinkTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkTypeCountOutputType
     */
    select?: LinkTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LinkTypeCountOutputType without action
   */
  export type LinkTypeCountOutputTypeCountLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    ProjectCountries: number
    Splitter: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectCountries?: boolean | ProjectCountOutputTypeCountProjectCountriesArgs
    Splitter?: boolean | ProjectCountOutputTypeCountSplitterArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectCountriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCountriesWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSplitterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SplitterWhereInput
  }


  /**
   * Count Type SplitCountOutputType
   */

  export type SplitCountOutputType = {
    Link: number
  }

  export type SplitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Link?: boolean | SplitCountOutputTypeCountLinkArgs
  }

  // Custom InputTypes
  /**
   * SplitCountOutputType without action
   */
  export type SplitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitCountOutputType
     */
    select?: SplitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SplitCountOutputType without action
   */
  export type SplitCountOutputTypeCountLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
  }


  /**
   * Count Type SplitterCountOutputType
   */

  export type SplitterCountOutputType = {
    Split: number
  }

  export type SplitterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Split?: boolean | SplitterCountOutputTypeCountSplitArgs
  }

  // Custom InputTypes
  /**
   * SplitterCountOutputType without action
   */
  export type SplitterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitterCountOutputType
     */
    select?: SplitterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SplitterCountOutputType without action
   */
  export type SplitterCountOutputTypeCountSplitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SplitWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Project: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | UserCountOutputTypeCountProjectArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    Splitter?: boolean | Category$SplitterArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Splitter?: boolean | Category$SplitterArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      Splitter: Prisma.$SplitterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Splitter<T extends Category$SplitterArgs<ExtArgs> = {}>(args?: Subset<T, Category$SplitterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.Splitter
   */
  export type Category$SplitterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Splitter
     */
    select?: SplitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Splitter
     */
    omit?: SplitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitterInclude<ExtArgs> | null
    where?: SplitterWhereInput
    orderBy?: SplitterOrderByWithRelationInput | SplitterOrderByWithRelationInput[]
    cursor?: SplitterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SplitterScalarFieldEnum | SplitterScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id: number | null
  }

  export type CountrySumAggregateOutputType = {
    id: number | null
  }

  export type CountryMinAggregateOutputType = {
    id: number | null
    name: string | null
    redirectMessage: string | null
    icon: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    redirectMessage: string | null
    icon: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    redirectMessage: number
    icon: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id?: true
  }

  export type CountrySumAggregateInputType = {
    id?: true
  }

  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
    redirectMessage?: true
    icon?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
    redirectMessage?: true
    icon?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    redirectMessage?: true
    icon?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: number
    name: string
    redirectMessage: string
    icon: string | null
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    redirectMessage?: boolean
    icon?: boolean
    ProjectCountries?: boolean | Country$ProjectCountriesArgs<ExtArgs>
    Splitter?: boolean | Country$SplitterArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    redirectMessage?: boolean
    icon?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    redirectMessage?: boolean
    icon?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
    redirectMessage?: boolean
    icon?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "redirectMessage" | "icon", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectCountries?: boolean | Country$ProjectCountriesArgs<ExtArgs>
    Splitter?: boolean | Country$SplitterArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      ProjectCountries: Prisma.$ProjectCountriesPayload<ExtArgs>[]
      Splitter: Prisma.$SplitterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      redirectMessage: string
      icon: string | null
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProjectCountries<T extends Country$ProjectCountriesArgs<ExtArgs> = {}>(args?: Subset<T, Country$ProjectCountriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCountriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Splitter<T extends Country$SplitterArgs<ExtArgs> = {}>(args?: Subset<T, Country$SplitterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'Int'>
    readonly name: FieldRef<"Country", 'String'>
    readonly redirectMessage: FieldRef<"Country", 'String'>
    readonly icon: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.ProjectCountries
   */
  export type Country$ProjectCountriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountries
     */
    select?: ProjectCountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCountries
     */
    omit?: ProjectCountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCountriesInclude<ExtArgs> | null
    where?: ProjectCountriesWhereInput
    orderBy?: ProjectCountriesOrderByWithRelationInput | ProjectCountriesOrderByWithRelationInput[]
    cursor?: ProjectCountriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectCountriesScalarFieldEnum | ProjectCountriesScalarFieldEnum[]
  }

  /**
   * Country.Splitter
   */
  export type Country$SplitterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Splitter
     */
    select?: SplitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Splitter
     */
    omit?: SplitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitterInclude<ExtArgs> | null
    where?: SplitterWhereInput
    orderBy?: SplitterOrderByWithRelationInput | SplitterOrderByWithRelationInput[]
    cursor?: SplitterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SplitterScalarFieldEnum | SplitterScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model Link
   */

  export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null
    _avg: LinkAvgAggregateOutputType | null
    _sum: LinkSumAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  export type LinkAvgAggregateOutputType = {
    id: number | null
    splitId: number | null
    type: number | null
    prob: number | null
    ecpm: number | null
  }

  export type LinkSumAggregateOutputType = {
    id: number | null
    splitId: number | null
    type: number | null
    prob: number | null
    ecpm: number | null
  }

  export type LinkMinAggregateOutputType = {
    id: number | null
    splitId: number | null
    url: string | null
    type: number | null
    prob: number | null
    ecpm: number | null
    hidden: boolean | null
  }

  export type LinkMaxAggregateOutputType = {
    id: number | null
    splitId: number | null
    url: string | null
    type: number | null
    prob: number | null
    ecpm: number | null
    hidden: boolean | null
  }

  export type LinkCountAggregateOutputType = {
    id: number
    splitId: number
    url: number
    type: number
    prob: number
    ecpm: number
    hidden: number
    _all: number
  }


  export type LinkAvgAggregateInputType = {
    id?: true
    splitId?: true
    type?: true
    prob?: true
    ecpm?: true
  }

  export type LinkSumAggregateInputType = {
    id?: true
    splitId?: true
    type?: true
    prob?: true
    ecpm?: true
  }

  export type LinkMinAggregateInputType = {
    id?: true
    splitId?: true
    url?: true
    type?: true
    prob?: true
    ecpm?: true
    hidden?: true
  }

  export type LinkMaxAggregateInputType = {
    id?: true
    splitId?: true
    url?: true
    type?: true
    prob?: true
    ecpm?: true
    hidden?: true
  }

  export type LinkCountAggregateInputType = {
    id?: true
    splitId?: true
    url?: true
    type?: true
    prob?: true
    ecpm?: true
    hidden?: true
    _all?: true
  }

  export type LinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Link to aggregate.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Links
    **/
    _count?: true | LinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkMaxAggregateInputType
  }

  export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
        [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink[P]>
      : GetScalarType<T[P], AggregateLink[P]>
  }




  export type LinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithAggregationInput | LinkOrderByWithAggregationInput[]
    by: LinkScalarFieldEnum[] | LinkScalarFieldEnum
    having?: LinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCountAggregateInputType | true
    _avg?: LinkAvgAggregateInputType
    _sum?: LinkSumAggregateInputType
    _min?: LinkMinAggregateInputType
    _max?: LinkMaxAggregateInputType
  }

  export type LinkGroupByOutputType = {
    id: number
    splitId: number
    url: string
    type: number
    prob: number
    ecpm: number
    hidden: boolean
    _count: LinkCountAggregateOutputType | null
    _avg: LinkAvgAggregateOutputType | null
    _sum: LinkSumAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkGroupByOutputType[P]>
            : GetScalarType<T[P], LinkGroupByOutputType[P]>
        }
      >
    >


  export type LinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    splitId?: boolean
    url?: boolean
    type?: boolean
    prob?: boolean
    ecpm?: boolean
    hidden?: boolean
    Split?: boolean | SplitDefaultArgs<ExtArgs>
    LinkType?: boolean | LinkTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    splitId?: boolean
    url?: boolean
    type?: boolean
    prob?: boolean
    ecpm?: boolean
    hidden?: boolean
    Split?: boolean | SplitDefaultArgs<ExtArgs>
    LinkType?: boolean | LinkTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    splitId?: boolean
    url?: boolean
    type?: boolean
    prob?: boolean
    ecpm?: boolean
    hidden?: boolean
    Split?: boolean | SplitDefaultArgs<ExtArgs>
    LinkType?: boolean | LinkTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectScalar = {
    id?: boolean
    splitId?: boolean
    url?: boolean
    type?: boolean
    prob?: boolean
    ecpm?: boolean
    hidden?: boolean
  }

  export type LinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "splitId" | "url" | "type" | "prob" | "ecpm" | "hidden", ExtArgs["result"]["link"]>
  export type LinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Split?: boolean | SplitDefaultArgs<ExtArgs>
    LinkType?: boolean | LinkTypeDefaultArgs<ExtArgs>
  }
  export type LinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Split?: boolean | SplitDefaultArgs<ExtArgs>
    LinkType?: boolean | LinkTypeDefaultArgs<ExtArgs>
  }
  export type LinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Split?: boolean | SplitDefaultArgs<ExtArgs>
    LinkType?: boolean | LinkTypeDefaultArgs<ExtArgs>
  }

  export type $LinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Link"
    objects: {
      Split: Prisma.$SplitPayload<ExtArgs>
      LinkType: Prisma.$LinkTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      splitId: number
      url: string
      type: number
      prob: number
      ecpm: number
      hidden: boolean
    }, ExtArgs["result"]["link"]>
    composites: {}
  }

  type LinkGetPayload<S extends boolean | null | undefined | LinkDefaultArgs> = $Result.GetResult<Prisma.$LinkPayload, S>

  type LinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkCountAggregateInputType | true
    }

  export interface LinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Link'], meta: { name: 'Link' } }
    /**
     * Find zero or one Link that matches the filter.
     * @param {LinkFindUniqueArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkFindUniqueArgs>(args: SelectSubset<T, LinkFindUniqueArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Link that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkFindUniqueOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkFindFirstArgs>(args?: SelectSubset<T, LinkFindFirstArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.link.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkFindManyArgs>(args?: SelectSubset<T, LinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Link.
     * @param {LinkCreateArgs} args - Arguments to create a Link.
     * @example
     * // Create one Link
     * const Link = await prisma.link.create({
     *   data: {
     *     // ... data to create a Link
     *   }
     * })
     * 
     */
    create<T extends LinkCreateArgs>(args: SelectSubset<T, LinkCreateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Links.
     * @param {LinkCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkCreateManyArgs>(args?: SelectSubset<T, LinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Links and returns the data saved in the database.
     * @param {LinkCreateManyAndReturnArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Link.
     * @param {LinkDeleteArgs} args - Arguments to delete one Link.
     * @example
     * // Delete one Link
     * const Link = await prisma.link.delete({
     *   where: {
     *     // ... filter to delete one Link
     *   }
     * })
     * 
     */
    delete<T extends LinkDeleteArgs>(args: SelectSubset<T, LinkDeleteArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Link.
     * @param {LinkUpdateArgs} args - Arguments to update one Link.
     * @example
     * // Update one Link
     * const link = await prisma.link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkUpdateArgs>(args: SelectSubset<T, LinkUpdateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Links.
     * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkDeleteManyArgs>(args?: SelectSubset<T, LinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkUpdateManyArgs>(args: SelectSubset<T, LinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links and returns the data updated in the database.
     * @param {LinkUpdateManyAndReturnArgs} args - Arguments to update many Links.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Link.
     * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
     * @example
     * // Update or create a Link
     * const link = await prisma.link.upsert({
     *   create: {
     *     // ... data to create a Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link we want to update
     *   }
     * })
     */
    upsert<T extends LinkUpsertArgs>(args: SelectSubset<T, LinkUpsertArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.link.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends LinkCountArgs>(
      args?: Subset<T, LinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkAggregateArgs>(args: Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>

    /**
     * Group by Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkGroupByArgs['orderBy'] }
        : { orderBy?: LinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Link model
   */
  readonly fields: LinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Split<T extends SplitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SplitDefaultArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    LinkType<T extends LinkTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LinkTypeDefaultArgs<ExtArgs>>): Prisma__LinkTypeClient<$Result.GetResult<Prisma.$LinkTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Link model
   */
  interface LinkFieldRefs {
    readonly id: FieldRef<"Link", 'Int'>
    readonly splitId: FieldRef<"Link", 'Int'>
    readonly url: FieldRef<"Link", 'String'>
    readonly type: FieldRef<"Link", 'Int'>
    readonly prob: FieldRef<"Link", 'Float'>
    readonly ecpm: FieldRef<"Link", 'Float'>
    readonly hidden: FieldRef<"Link", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Link findUnique
   */
  export type LinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findUniqueOrThrow
   */
  export type LinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findFirst
   */
  export type LinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findFirstOrThrow
   */
  export type LinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findMany
   */
  export type LinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link create
   */
  export type LinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to create a Link.
     */
    data: XOR<LinkCreateInput, LinkUncheckedCreateInput>
  }

  /**
   * Link createMany
   */
  export type LinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Link createManyAndReturn
   */
  export type LinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Link update
   */
  export type LinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to update a Link.
     */
    data: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
    /**
     * Choose, which Link to update.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link updateMany
   */
  export type LinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link updateManyAndReturn
   */
  export type LinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Link upsert
   */
  export type LinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The filter to search for the Link to update in case it exists.
     */
    where: LinkWhereUniqueInput
    /**
     * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
     */
    create: XOR<LinkCreateInput, LinkUncheckedCreateInput>
    /**
     * In case the Link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
  }

  /**
   * Link delete
   */
  export type LinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter which Link to delete.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link deleteMany
   */
  export type LinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Links to delete
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to delete.
     */
    limit?: number
  }

  /**
   * Link without action
   */
  export type LinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
  }


  /**
   * Model LinkType
   */

  export type AggregateLinkType = {
    _count: LinkTypeCountAggregateOutputType | null
    _avg: LinkTypeAvgAggregateOutputType | null
    _sum: LinkTypeSumAggregateOutputType | null
    _min: LinkTypeMinAggregateOutputType | null
    _max: LinkTypeMaxAggregateOutputType | null
  }

  export type LinkTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type LinkTypeSumAggregateOutputType = {
    id: number | null
  }

  export type LinkTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LinkTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LinkTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type LinkTypeAvgAggregateInputType = {
    id?: true
  }

  export type LinkTypeSumAggregateInputType = {
    id?: true
  }

  export type LinkTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type LinkTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type LinkTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type LinkTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkType to aggregate.
     */
    where?: LinkTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkTypes to fetch.
     */
    orderBy?: LinkTypeOrderByWithRelationInput | LinkTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkTypes
    **/
    _count?: true | LinkTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinkTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinkTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkTypeMaxAggregateInputType
  }

  export type GetLinkTypeAggregateType<T extends LinkTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkType[P]>
      : GetScalarType<T[P], AggregateLinkType[P]>
  }




  export type LinkTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkTypeWhereInput
    orderBy?: LinkTypeOrderByWithAggregationInput | LinkTypeOrderByWithAggregationInput[]
    by: LinkTypeScalarFieldEnum[] | LinkTypeScalarFieldEnum
    having?: LinkTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkTypeCountAggregateInputType | true
    _avg?: LinkTypeAvgAggregateInputType
    _sum?: LinkTypeSumAggregateInputType
    _min?: LinkTypeMinAggregateInputType
    _max?: LinkTypeMaxAggregateInputType
  }

  export type LinkTypeGroupByOutputType = {
    id: number
    name: string
    _count: LinkTypeCountAggregateOutputType | null
    _avg: LinkTypeAvgAggregateOutputType | null
    _sum: LinkTypeSumAggregateOutputType | null
    _min: LinkTypeMinAggregateOutputType | null
    _max: LinkTypeMaxAggregateOutputType | null
  }

  type GetLinkTypeGroupByPayload<T extends LinkTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkTypeGroupByOutputType[P]>
            : GetScalarType<T[P], LinkTypeGroupByOutputType[P]>
        }
      >
    >


  export type LinkTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Link?: boolean | LinkType$LinkArgs<ExtArgs>
    _count?: boolean | LinkTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkType"]>

  export type LinkTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["linkType"]>

  export type LinkTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["linkType"]>

  export type LinkTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type LinkTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["linkType"]>
  export type LinkTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Link?: boolean | LinkType$LinkArgs<ExtArgs>
    _count?: boolean | LinkTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LinkTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LinkTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LinkTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkType"
    objects: {
      Link: Prisma.$LinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["linkType"]>
    composites: {}
  }

  type LinkTypeGetPayload<S extends boolean | null | undefined | LinkTypeDefaultArgs> = $Result.GetResult<Prisma.$LinkTypePayload, S>

  type LinkTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkTypeCountAggregateInputType | true
    }

  export interface LinkTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkType'], meta: { name: 'LinkType' } }
    /**
     * Find zero or one LinkType that matches the filter.
     * @param {LinkTypeFindUniqueArgs} args - Arguments to find a LinkType
     * @example
     * // Get one LinkType
     * const linkType = await prisma.linkType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkTypeFindUniqueArgs>(args: SelectSubset<T, LinkTypeFindUniqueArgs<ExtArgs>>): Prisma__LinkTypeClient<$Result.GetResult<Prisma.$LinkTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LinkType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkTypeFindUniqueOrThrowArgs} args - Arguments to find a LinkType
     * @example
     * // Get one LinkType
     * const linkType = await prisma.linkType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkTypeClient<$Result.GetResult<Prisma.$LinkTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkTypeFindFirstArgs} args - Arguments to find a LinkType
     * @example
     * // Get one LinkType
     * const linkType = await prisma.linkType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkTypeFindFirstArgs>(args?: SelectSubset<T, LinkTypeFindFirstArgs<ExtArgs>>): Prisma__LinkTypeClient<$Result.GetResult<Prisma.$LinkTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkTypeFindFirstOrThrowArgs} args - Arguments to find a LinkType
     * @example
     * // Get one LinkType
     * const linkType = await prisma.linkType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkTypeClient<$Result.GetResult<Prisma.$LinkTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LinkTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkTypes
     * const linkTypes = await prisma.linkType.findMany()
     * 
     * // Get first 10 LinkTypes
     * const linkTypes = await prisma.linkType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkTypeWithIdOnly = await prisma.linkType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkTypeFindManyArgs>(args?: SelectSubset<T, LinkTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LinkType.
     * @param {LinkTypeCreateArgs} args - Arguments to create a LinkType.
     * @example
     * // Create one LinkType
     * const LinkType = await prisma.linkType.create({
     *   data: {
     *     // ... data to create a LinkType
     *   }
     * })
     * 
     */
    create<T extends LinkTypeCreateArgs>(args: SelectSubset<T, LinkTypeCreateArgs<ExtArgs>>): Prisma__LinkTypeClient<$Result.GetResult<Prisma.$LinkTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LinkTypes.
     * @param {LinkTypeCreateManyArgs} args - Arguments to create many LinkTypes.
     * @example
     * // Create many LinkTypes
     * const linkType = await prisma.linkType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkTypeCreateManyArgs>(args?: SelectSubset<T, LinkTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkTypes and returns the data saved in the database.
     * @param {LinkTypeCreateManyAndReturnArgs} args - Arguments to create many LinkTypes.
     * @example
     * // Create many LinkTypes
     * const linkType = await prisma.linkType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkTypes and only return the `id`
     * const linkTypeWithIdOnly = await prisma.linkType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LinkType.
     * @param {LinkTypeDeleteArgs} args - Arguments to delete one LinkType.
     * @example
     * // Delete one LinkType
     * const LinkType = await prisma.linkType.delete({
     *   where: {
     *     // ... filter to delete one LinkType
     *   }
     * })
     * 
     */
    delete<T extends LinkTypeDeleteArgs>(args: SelectSubset<T, LinkTypeDeleteArgs<ExtArgs>>): Prisma__LinkTypeClient<$Result.GetResult<Prisma.$LinkTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LinkType.
     * @param {LinkTypeUpdateArgs} args - Arguments to update one LinkType.
     * @example
     * // Update one LinkType
     * const linkType = await prisma.linkType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkTypeUpdateArgs>(args: SelectSubset<T, LinkTypeUpdateArgs<ExtArgs>>): Prisma__LinkTypeClient<$Result.GetResult<Prisma.$LinkTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LinkTypes.
     * @param {LinkTypeDeleteManyArgs} args - Arguments to filter LinkTypes to delete.
     * @example
     * // Delete a few LinkTypes
     * const { count } = await prisma.linkType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkTypeDeleteManyArgs>(args?: SelectSubset<T, LinkTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkTypes
     * const linkType = await prisma.linkType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkTypeUpdateManyArgs>(args: SelectSubset<T, LinkTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkTypes and returns the data updated in the database.
     * @param {LinkTypeUpdateManyAndReturnArgs} args - Arguments to update many LinkTypes.
     * @example
     * // Update many LinkTypes
     * const linkType = await prisma.linkType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LinkTypes and only return the `id`
     * const linkTypeWithIdOnly = await prisma.linkType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LinkType.
     * @param {LinkTypeUpsertArgs} args - Arguments to update or create a LinkType.
     * @example
     * // Update or create a LinkType
     * const linkType = await prisma.linkType.upsert({
     *   create: {
     *     // ... data to create a LinkType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkType we want to update
     *   }
     * })
     */
    upsert<T extends LinkTypeUpsertArgs>(args: SelectSubset<T, LinkTypeUpsertArgs<ExtArgs>>): Prisma__LinkTypeClient<$Result.GetResult<Prisma.$LinkTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LinkTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkTypeCountArgs} args - Arguments to filter LinkTypes to count.
     * @example
     * // Count the number of LinkTypes
     * const count = await prisma.linkType.count({
     *   where: {
     *     // ... the filter for the LinkTypes we want to count
     *   }
     * })
    **/
    count<T extends LinkTypeCountArgs>(
      args?: Subset<T, LinkTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkTypeAggregateArgs>(args: Subset<T, LinkTypeAggregateArgs>): Prisma.PrismaPromise<GetLinkTypeAggregateType<T>>

    /**
     * Group by LinkType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkTypeGroupByArgs['orderBy'] }
        : { orderBy?: LinkTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkType model
   */
  readonly fields: LinkTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Link<T extends LinkType$LinkArgs<ExtArgs> = {}>(args?: Subset<T, LinkType$LinkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LinkType model
   */
  interface LinkTypeFieldRefs {
    readonly id: FieldRef<"LinkType", 'Int'>
    readonly name: FieldRef<"LinkType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LinkType findUnique
   */
  export type LinkTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkType
     */
    select?: LinkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkType
     */
    omit?: LinkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTypeInclude<ExtArgs> | null
    /**
     * Filter, which LinkType to fetch.
     */
    where: LinkTypeWhereUniqueInput
  }

  /**
   * LinkType findUniqueOrThrow
   */
  export type LinkTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkType
     */
    select?: LinkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkType
     */
    omit?: LinkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTypeInclude<ExtArgs> | null
    /**
     * Filter, which LinkType to fetch.
     */
    where: LinkTypeWhereUniqueInput
  }

  /**
   * LinkType findFirst
   */
  export type LinkTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkType
     */
    select?: LinkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkType
     */
    omit?: LinkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTypeInclude<ExtArgs> | null
    /**
     * Filter, which LinkType to fetch.
     */
    where?: LinkTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkTypes to fetch.
     */
    orderBy?: LinkTypeOrderByWithRelationInput | LinkTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkTypes.
     */
    cursor?: LinkTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkTypes.
     */
    distinct?: LinkTypeScalarFieldEnum | LinkTypeScalarFieldEnum[]
  }

  /**
   * LinkType findFirstOrThrow
   */
  export type LinkTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkType
     */
    select?: LinkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkType
     */
    omit?: LinkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTypeInclude<ExtArgs> | null
    /**
     * Filter, which LinkType to fetch.
     */
    where?: LinkTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkTypes to fetch.
     */
    orderBy?: LinkTypeOrderByWithRelationInput | LinkTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkTypes.
     */
    cursor?: LinkTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkTypes.
     */
    distinct?: LinkTypeScalarFieldEnum | LinkTypeScalarFieldEnum[]
  }

  /**
   * LinkType findMany
   */
  export type LinkTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkType
     */
    select?: LinkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkType
     */
    omit?: LinkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTypeInclude<ExtArgs> | null
    /**
     * Filter, which LinkTypes to fetch.
     */
    where?: LinkTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkTypes to fetch.
     */
    orderBy?: LinkTypeOrderByWithRelationInput | LinkTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkTypes.
     */
    cursor?: LinkTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkTypes.
     */
    skip?: number
    distinct?: LinkTypeScalarFieldEnum | LinkTypeScalarFieldEnum[]
  }

  /**
   * LinkType create
   */
  export type LinkTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkType
     */
    select?: LinkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkType
     */
    omit?: LinkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a LinkType.
     */
    data: XOR<LinkTypeCreateInput, LinkTypeUncheckedCreateInput>
  }

  /**
   * LinkType createMany
   */
  export type LinkTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkTypes.
     */
    data: LinkTypeCreateManyInput | LinkTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkType createManyAndReturn
   */
  export type LinkTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkType
     */
    select?: LinkTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkType
     */
    omit?: LinkTypeOmit<ExtArgs> | null
    /**
     * The data used to create many LinkTypes.
     */
    data: LinkTypeCreateManyInput | LinkTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkType update
   */
  export type LinkTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkType
     */
    select?: LinkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkType
     */
    omit?: LinkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a LinkType.
     */
    data: XOR<LinkTypeUpdateInput, LinkTypeUncheckedUpdateInput>
    /**
     * Choose, which LinkType to update.
     */
    where: LinkTypeWhereUniqueInput
  }

  /**
   * LinkType updateMany
   */
  export type LinkTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkTypes.
     */
    data: XOR<LinkTypeUpdateManyMutationInput, LinkTypeUncheckedUpdateManyInput>
    /**
     * Filter which LinkTypes to update
     */
    where?: LinkTypeWhereInput
    /**
     * Limit how many LinkTypes to update.
     */
    limit?: number
  }

  /**
   * LinkType updateManyAndReturn
   */
  export type LinkTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkType
     */
    select?: LinkTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkType
     */
    omit?: LinkTypeOmit<ExtArgs> | null
    /**
     * The data used to update LinkTypes.
     */
    data: XOR<LinkTypeUpdateManyMutationInput, LinkTypeUncheckedUpdateManyInput>
    /**
     * Filter which LinkTypes to update
     */
    where?: LinkTypeWhereInput
    /**
     * Limit how many LinkTypes to update.
     */
    limit?: number
  }

  /**
   * LinkType upsert
   */
  export type LinkTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkType
     */
    select?: LinkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkType
     */
    omit?: LinkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the LinkType to update in case it exists.
     */
    where: LinkTypeWhereUniqueInput
    /**
     * In case the LinkType found by the `where` argument doesn't exist, create a new LinkType with this data.
     */
    create: XOR<LinkTypeCreateInput, LinkTypeUncheckedCreateInput>
    /**
     * In case the LinkType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkTypeUpdateInput, LinkTypeUncheckedUpdateInput>
  }

  /**
   * LinkType delete
   */
  export type LinkTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkType
     */
    select?: LinkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkType
     */
    omit?: LinkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTypeInclude<ExtArgs> | null
    /**
     * Filter which LinkType to delete.
     */
    where: LinkTypeWhereUniqueInput
  }

  /**
   * LinkType deleteMany
   */
  export type LinkTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkTypes to delete
     */
    where?: LinkTypeWhereInput
    /**
     * Limit how many LinkTypes to delete.
     */
    limit?: number
  }

  /**
   * LinkType.Link
   */
  export type LinkType$LinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    cursor?: LinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * LinkType without action
   */
  export type LinkTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkType
     */
    select?: LinkTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkType
     */
    omit?: LinkTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTypeInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    userId: number | null
    name: string | null
    description: string | null
    icon: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    userId: number | null
    name: string | null
    description: string | null
    icon: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    uuid: number
    userId: number
    name: number
    description: number
    icon: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    uuid?: true
    userId?: true
    name?: true
    description?: true
    icon?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    uuid?: true
    userId?: true
    name?: true
    description?: true
    icon?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    uuid?: true
    userId?: true
    name?: true
    description?: true
    icon?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    uuid: string
    userId: number
    name: string
    description: string
    icon: string
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    ProjectCountries?: boolean | Project$ProjectCountriesArgs<ExtArgs>
    Splitter?: boolean | Project$SplitterArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    uuid?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "userId" | "name" | "description" | "icon", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    ProjectCountries?: boolean | Project$ProjectCountriesArgs<ExtArgs>
    Splitter?: boolean | Project$SplitterArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      ProjectCountries: Prisma.$ProjectCountriesPayload<ExtArgs>[]
      Splitter: Prisma.$SplitterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      userId: number
      name: string
      description: string
      icon: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ProjectCountries<T extends Project$ProjectCountriesArgs<ExtArgs> = {}>(args?: Subset<T, Project$ProjectCountriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCountriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Splitter<T extends Project$SplitterArgs<ExtArgs> = {}>(args?: Subset<T, Project$SplitterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly uuid: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly icon: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.ProjectCountries
   */
  export type Project$ProjectCountriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountries
     */
    select?: ProjectCountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCountries
     */
    omit?: ProjectCountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCountriesInclude<ExtArgs> | null
    where?: ProjectCountriesWhereInput
    orderBy?: ProjectCountriesOrderByWithRelationInput | ProjectCountriesOrderByWithRelationInput[]
    cursor?: ProjectCountriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectCountriesScalarFieldEnum | ProjectCountriesScalarFieldEnum[]
  }

  /**
   * Project.Splitter
   */
  export type Project$SplitterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Splitter
     */
    select?: SplitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Splitter
     */
    omit?: SplitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitterInclude<ExtArgs> | null
    where?: SplitterWhereInput
    orderBy?: SplitterOrderByWithRelationInput | SplitterOrderByWithRelationInput[]
    cursor?: SplitterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SplitterScalarFieldEnum | SplitterScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectCountries
   */

  export type AggregateProjectCountries = {
    _count: ProjectCountriesCountAggregateOutputType | null
    _avg: ProjectCountriesAvgAggregateOutputType | null
    _sum: ProjectCountriesSumAggregateOutputType | null
    _min: ProjectCountriesMinAggregateOutputType | null
    _max: ProjectCountriesMaxAggregateOutputType | null
  }

  export type ProjectCountriesAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    countryId: number | null
  }

  export type ProjectCountriesSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    countryId: number | null
  }

  export type ProjectCountriesMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    countryId: number | null
    pixelId: string | null
    capiToken: string | null
  }

  export type ProjectCountriesMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    countryId: number | null
    pixelId: string | null
    capiToken: string | null
  }

  export type ProjectCountriesCountAggregateOutputType = {
    id: number
    projectId: number
    countryId: number
    pixelId: number
    capiToken: number
    _all: number
  }


  export type ProjectCountriesAvgAggregateInputType = {
    id?: true
    projectId?: true
    countryId?: true
  }

  export type ProjectCountriesSumAggregateInputType = {
    id?: true
    projectId?: true
    countryId?: true
  }

  export type ProjectCountriesMinAggregateInputType = {
    id?: true
    projectId?: true
    countryId?: true
    pixelId?: true
    capiToken?: true
  }

  export type ProjectCountriesMaxAggregateInputType = {
    id?: true
    projectId?: true
    countryId?: true
    pixelId?: true
    capiToken?: true
  }

  export type ProjectCountriesCountAggregateInputType = {
    id?: true
    projectId?: true
    countryId?: true
    pixelId?: true
    capiToken?: true
    _all?: true
  }

  export type ProjectCountriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectCountries to aggregate.
     */
    where?: ProjectCountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCountries to fetch.
     */
    orderBy?: ProjectCountriesOrderByWithRelationInput | ProjectCountriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectCountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCountries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCountries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectCountries
    **/
    _count?: true | ProjectCountriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectCountriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectCountriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectCountriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectCountriesMaxAggregateInputType
  }

  export type GetProjectCountriesAggregateType<T extends ProjectCountriesAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectCountries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectCountries[P]>
      : GetScalarType<T[P], AggregateProjectCountries[P]>
  }




  export type ProjectCountriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCountriesWhereInput
    orderBy?: ProjectCountriesOrderByWithAggregationInput | ProjectCountriesOrderByWithAggregationInput[]
    by: ProjectCountriesScalarFieldEnum[] | ProjectCountriesScalarFieldEnum
    having?: ProjectCountriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountriesCountAggregateInputType | true
    _avg?: ProjectCountriesAvgAggregateInputType
    _sum?: ProjectCountriesSumAggregateInputType
    _min?: ProjectCountriesMinAggregateInputType
    _max?: ProjectCountriesMaxAggregateInputType
  }

  export type ProjectCountriesGroupByOutputType = {
    id: number
    projectId: number
    countryId: number
    pixelId: string
    capiToken: string
    _count: ProjectCountriesCountAggregateOutputType | null
    _avg: ProjectCountriesAvgAggregateOutputType | null
    _sum: ProjectCountriesSumAggregateOutputType | null
    _min: ProjectCountriesMinAggregateOutputType | null
    _max: ProjectCountriesMaxAggregateOutputType | null
  }

  type GetProjectCountriesGroupByPayload<T extends ProjectCountriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectCountriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectCountriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectCountriesGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectCountriesGroupByOutputType[P]>
        }
      >
    >


  export type ProjectCountriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    countryId?: boolean
    pixelId?: boolean
    capiToken?: boolean
    Country?: boolean | CountryDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectCountries"]>

  export type ProjectCountriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    countryId?: boolean
    pixelId?: boolean
    capiToken?: boolean
    Country?: boolean | CountryDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectCountries"]>

  export type ProjectCountriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    countryId?: boolean
    pixelId?: boolean
    capiToken?: boolean
    Country?: boolean | CountryDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectCountries"]>

  export type ProjectCountriesSelectScalar = {
    id?: boolean
    projectId?: boolean
    countryId?: boolean
    pixelId?: boolean
    capiToken?: boolean
  }

  export type ProjectCountriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "countryId" | "pixelId" | "capiToken", ExtArgs["result"]["projectCountries"]>
  export type ProjectCountriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Country?: boolean | CountryDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectCountriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Country?: boolean | CountryDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectCountriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Country?: boolean | CountryDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectCountriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectCountries"
    objects: {
      Country: Prisma.$CountryPayload<ExtArgs>
      Project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      countryId: number
      pixelId: string
      capiToken: string
    }, ExtArgs["result"]["projectCountries"]>
    composites: {}
  }

  type ProjectCountriesGetPayload<S extends boolean | null | undefined | ProjectCountriesDefaultArgs> = $Result.GetResult<Prisma.$ProjectCountriesPayload, S>

  type ProjectCountriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectCountriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountriesCountAggregateInputType | true
    }

  export interface ProjectCountriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectCountries'], meta: { name: 'ProjectCountries' } }
    /**
     * Find zero or one ProjectCountries that matches the filter.
     * @param {ProjectCountriesFindUniqueArgs} args - Arguments to find a ProjectCountries
     * @example
     * // Get one ProjectCountries
     * const projectCountries = await prisma.projectCountries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectCountriesFindUniqueArgs>(args: SelectSubset<T, ProjectCountriesFindUniqueArgs<ExtArgs>>): Prisma__ProjectCountriesClient<$Result.GetResult<Prisma.$ProjectCountriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectCountries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectCountriesFindUniqueOrThrowArgs} args - Arguments to find a ProjectCountries
     * @example
     * // Get one ProjectCountries
     * const projectCountries = await prisma.projectCountries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectCountriesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectCountriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectCountriesClient<$Result.GetResult<Prisma.$ProjectCountriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectCountries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountriesFindFirstArgs} args - Arguments to find a ProjectCountries
     * @example
     * // Get one ProjectCountries
     * const projectCountries = await prisma.projectCountries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectCountriesFindFirstArgs>(args?: SelectSubset<T, ProjectCountriesFindFirstArgs<ExtArgs>>): Prisma__ProjectCountriesClient<$Result.GetResult<Prisma.$ProjectCountriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectCountries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountriesFindFirstOrThrowArgs} args - Arguments to find a ProjectCountries
     * @example
     * // Get one ProjectCountries
     * const projectCountries = await prisma.projectCountries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectCountriesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectCountriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectCountriesClient<$Result.GetResult<Prisma.$ProjectCountriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectCountries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectCountries
     * const projectCountries = await prisma.projectCountries.findMany()
     * 
     * // Get first 10 ProjectCountries
     * const projectCountries = await prisma.projectCountries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectCountriesWithIdOnly = await prisma.projectCountries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectCountriesFindManyArgs>(args?: SelectSubset<T, ProjectCountriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCountriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectCountries.
     * @param {ProjectCountriesCreateArgs} args - Arguments to create a ProjectCountries.
     * @example
     * // Create one ProjectCountries
     * const ProjectCountries = await prisma.projectCountries.create({
     *   data: {
     *     // ... data to create a ProjectCountries
     *   }
     * })
     * 
     */
    create<T extends ProjectCountriesCreateArgs>(args: SelectSubset<T, ProjectCountriesCreateArgs<ExtArgs>>): Prisma__ProjectCountriesClient<$Result.GetResult<Prisma.$ProjectCountriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectCountries.
     * @param {ProjectCountriesCreateManyArgs} args - Arguments to create many ProjectCountries.
     * @example
     * // Create many ProjectCountries
     * const projectCountries = await prisma.projectCountries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCountriesCreateManyArgs>(args?: SelectSubset<T, ProjectCountriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectCountries and returns the data saved in the database.
     * @param {ProjectCountriesCreateManyAndReturnArgs} args - Arguments to create many ProjectCountries.
     * @example
     * // Create many ProjectCountries
     * const projectCountries = await prisma.projectCountries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectCountries and only return the `id`
     * const projectCountriesWithIdOnly = await prisma.projectCountries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCountriesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCountriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCountriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectCountries.
     * @param {ProjectCountriesDeleteArgs} args - Arguments to delete one ProjectCountries.
     * @example
     * // Delete one ProjectCountries
     * const ProjectCountries = await prisma.projectCountries.delete({
     *   where: {
     *     // ... filter to delete one ProjectCountries
     *   }
     * })
     * 
     */
    delete<T extends ProjectCountriesDeleteArgs>(args: SelectSubset<T, ProjectCountriesDeleteArgs<ExtArgs>>): Prisma__ProjectCountriesClient<$Result.GetResult<Prisma.$ProjectCountriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectCountries.
     * @param {ProjectCountriesUpdateArgs} args - Arguments to update one ProjectCountries.
     * @example
     * // Update one ProjectCountries
     * const projectCountries = await prisma.projectCountries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectCountriesUpdateArgs>(args: SelectSubset<T, ProjectCountriesUpdateArgs<ExtArgs>>): Prisma__ProjectCountriesClient<$Result.GetResult<Prisma.$ProjectCountriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectCountries.
     * @param {ProjectCountriesDeleteManyArgs} args - Arguments to filter ProjectCountries to delete.
     * @example
     * // Delete a few ProjectCountries
     * const { count } = await prisma.projectCountries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectCountriesDeleteManyArgs>(args?: SelectSubset<T, ProjectCountriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectCountries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectCountries
     * const projectCountries = await prisma.projectCountries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectCountriesUpdateManyArgs>(args: SelectSubset<T, ProjectCountriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectCountries and returns the data updated in the database.
     * @param {ProjectCountriesUpdateManyAndReturnArgs} args - Arguments to update many ProjectCountries.
     * @example
     * // Update many ProjectCountries
     * const projectCountries = await prisma.projectCountries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectCountries and only return the `id`
     * const projectCountriesWithIdOnly = await prisma.projectCountries.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectCountriesUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectCountriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCountriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectCountries.
     * @param {ProjectCountriesUpsertArgs} args - Arguments to update or create a ProjectCountries.
     * @example
     * // Update or create a ProjectCountries
     * const projectCountries = await prisma.projectCountries.upsert({
     *   create: {
     *     // ... data to create a ProjectCountries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectCountries we want to update
     *   }
     * })
     */
    upsert<T extends ProjectCountriesUpsertArgs>(args: SelectSubset<T, ProjectCountriesUpsertArgs<ExtArgs>>): Prisma__ProjectCountriesClient<$Result.GetResult<Prisma.$ProjectCountriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectCountries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountriesCountArgs} args - Arguments to filter ProjectCountries to count.
     * @example
     * // Count the number of ProjectCountries
     * const count = await prisma.projectCountries.count({
     *   where: {
     *     // ... the filter for the ProjectCountries we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountriesCountArgs>(
      args?: Subset<T, ProjectCountriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectCountries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectCountriesAggregateArgs>(args: Subset<T, ProjectCountriesAggregateArgs>): Prisma.PrismaPromise<GetProjectCountriesAggregateType<T>>

    /**
     * Group by ProjectCountries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectCountriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectCountriesGroupByArgs['orderBy'] }
        : { orderBy?: ProjectCountriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectCountriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectCountriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectCountries model
   */
  readonly fields: ProjectCountriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectCountries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectCountriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectCountries model
   */
  interface ProjectCountriesFieldRefs {
    readonly id: FieldRef<"ProjectCountries", 'Int'>
    readonly projectId: FieldRef<"ProjectCountries", 'Int'>
    readonly countryId: FieldRef<"ProjectCountries", 'Int'>
    readonly pixelId: FieldRef<"ProjectCountries", 'String'>
    readonly capiToken: FieldRef<"ProjectCountries", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectCountries findUnique
   */
  export type ProjectCountriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountries
     */
    select?: ProjectCountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCountries
     */
    omit?: ProjectCountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCountriesInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCountries to fetch.
     */
    where: ProjectCountriesWhereUniqueInput
  }

  /**
   * ProjectCountries findUniqueOrThrow
   */
  export type ProjectCountriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountries
     */
    select?: ProjectCountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCountries
     */
    omit?: ProjectCountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCountriesInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCountries to fetch.
     */
    where: ProjectCountriesWhereUniqueInput
  }

  /**
   * ProjectCountries findFirst
   */
  export type ProjectCountriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountries
     */
    select?: ProjectCountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCountries
     */
    omit?: ProjectCountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCountriesInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCountries to fetch.
     */
    where?: ProjectCountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCountries to fetch.
     */
    orderBy?: ProjectCountriesOrderByWithRelationInput | ProjectCountriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectCountries.
     */
    cursor?: ProjectCountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCountries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCountries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectCountries.
     */
    distinct?: ProjectCountriesScalarFieldEnum | ProjectCountriesScalarFieldEnum[]
  }

  /**
   * ProjectCountries findFirstOrThrow
   */
  export type ProjectCountriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountries
     */
    select?: ProjectCountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCountries
     */
    omit?: ProjectCountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCountriesInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCountries to fetch.
     */
    where?: ProjectCountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCountries to fetch.
     */
    orderBy?: ProjectCountriesOrderByWithRelationInput | ProjectCountriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectCountries.
     */
    cursor?: ProjectCountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCountries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCountries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectCountries.
     */
    distinct?: ProjectCountriesScalarFieldEnum | ProjectCountriesScalarFieldEnum[]
  }

  /**
   * ProjectCountries findMany
   */
  export type ProjectCountriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountries
     */
    select?: ProjectCountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCountries
     */
    omit?: ProjectCountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCountriesInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCountries to fetch.
     */
    where?: ProjectCountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCountries to fetch.
     */
    orderBy?: ProjectCountriesOrderByWithRelationInput | ProjectCountriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectCountries.
     */
    cursor?: ProjectCountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCountries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCountries.
     */
    skip?: number
    distinct?: ProjectCountriesScalarFieldEnum | ProjectCountriesScalarFieldEnum[]
  }

  /**
   * ProjectCountries create
   */
  export type ProjectCountriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountries
     */
    select?: ProjectCountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCountries
     */
    omit?: ProjectCountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCountriesInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectCountries.
     */
    data: XOR<ProjectCountriesCreateInput, ProjectCountriesUncheckedCreateInput>
  }

  /**
   * ProjectCountries createMany
   */
  export type ProjectCountriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectCountries.
     */
    data: ProjectCountriesCreateManyInput | ProjectCountriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectCountries createManyAndReturn
   */
  export type ProjectCountriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountries
     */
    select?: ProjectCountriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCountries
     */
    omit?: ProjectCountriesOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectCountries.
     */
    data: ProjectCountriesCreateManyInput | ProjectCountriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCountriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectCountries update
   */
  export type ProjectCountriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountries
     */
    select?: ProjectCountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCountries
     */
    omit?: ProjectCountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCountriesInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectCountries.
     */
    data: XOR<ProjectCountriesUpdateInput, ProjectCountriesUncheckedUpdateInput>
    /**
     * Choose, which ProjectCountries to update.
     */
    where: ProjectCountriesWhereUniqueInput
  }

  /**
   * ProjectCountries updateMany
   */
  export type ProjectCountriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectCountries.
     */
    data: XOR<ProjectCountriesUpdateManyMutationInput, ProjectCountriesUncheckedUpdateManyInput>
    /**
     * Filter which ProjectCountries to update
     */
    where?: ProjectCountriesWhereInput
    /**
     * Limit how many ProjectCountries to update.
     */
    limit?: number
  }

  /**
   * ProjectCountries updateManyAndReturn
   */
  export type ProjectCountriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountries
     */
    select?: ProjectCountriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCountries
     */
    omit?: ProjectCountriesOmit<ExtArgs> | null
    /**
     * The data used to update ProjectCountries.
     */
    data: XOR<ProjectCountriesUpdateManyMutationInput, ProjectCountriesUncheckedUpdateManyInput>
    /**
     * Filter which ProjectCountries to update
     */
    where?: ProjectCountriesWhereInput
    /**
     * Limit how many ProjectCountries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCountriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectCountries upsert
   */
  export type ProjectCountriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountries
     */
    select?: ProjectCountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCountries
     */
    omit?: ProjectCountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCountriesInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectCountries to update in case it exists.
     */
    where: ProjectCountriesWhereUniqueInput
    /**
     * In case the ProjectCountries found by the `where` argument doesn't exist, create a new ProjectCountries with this data.
     */
    create: XOR<ProjectCountriesCreateInput, ProjectCountriesUncheckedCreateInput>
    /**
     * In case the ProjectCountries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectCountriesUpdateInput, ProjectCountriesUncheckedUpdateInput>
  }

  /**
   * ProjectCountries delete
   */
  export type ProjectCountriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountries
     */
    select?: ProjectCountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCountries
     */
    omit?: ProjectCountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCountriesInclude<ExtArgs> | null
    /**
     * Filter which ProjectCountries to delete.
     */
    where: ProjectCountriesWhereUniqueInput
  }

  /**
   * ProjectCountries deleteMany
   */
  export type ProjectCountriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectCountries to delete
     */
    where?: ProjectCountriesWhereInput
    /**
     * Limit how many ProjectCountries to delete.
     */
    limit?: number
  }

  /**
   * ProjectCountries without action
   */
  export type ProjectCountriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountries
     */
    select?: ProjectCountriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCountries
     */
    omit?: ProjectCountriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCountriesInclude<ExtArgs> | null
  }


  /**
   * Model Split
   */

  export type AggregateSplit = {
    _count: SplitCountAggregateOutputType | null
    _avg: SplitAvgAggregateOutputType | null
    _sum: SplitSumAggregateOutputType | null
    _min: SplitMinAggregateOutputType | null
    _max: SplitMaxAggregateOutputType | null
  }

  export type SplitAvgAggregateOutputType = {
    id: number | null
    splitterId: number | null
  }

  export type SplitSumAggregateOutputType = {
    id: number | null
    splitterId: number | null
  }

  export type SplitMinAggregateOutputType = {
    id: number | null
    redirectSlug: string | null
    splitterId: number | null
  }

  export type SplitMaxAggregateOutputType = {
    id: number | null
    redirectSlug: string | null
    splitterId: number | null
  }

  export type SplitCountAggregateOutputType = {
    id: number
    redirectSlug: number
    splitterId: number
    _all: number
  }


  export type SplitAvgAggregateInputType = {
    id?: true
    splitterId?: true
  }

  export type SplitSumAggregateInputType = {
    id?: true
    splitterId?: true
  }

  export type SplitMinAggregateInputType = {
    id?: true
    redirectSlug?: true
    splitterId?: true
  }

  export type SplitMaxAggregateInputType = {
    id?: true
    redirectSlug?: true
    splitterId?: true
  }

  export type SplitCountAggregateInputType = {
    id?: true
    redirectSlug?: true
    splitterId?: true
    _all?: true
  }

  export type SplitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Split to aggregate.
     */
    where?: SplitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Splits to fetch.
     */
    orderBy?: SplitOrderByWithRelationInput | SplitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SplitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Splits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Splits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Splits
    **/
    _count?: true | SplitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SplitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SplitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SplitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SplitMaxAggregateInputType
  }

  export type GetSplitAggregateType<T extends SplitAggregateArgs> = {
        [P in keyof T & keyof AggregateSplit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSplit[P]>
      : GetScalarType<T[P], AggregateSplit[P]>
  }




  export type SplitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SplitWhereInput
    orderBy?: SplitOrderByWithAggregationInput | SplitOrderByWithAggregationInput[]
    by: SplitScalarFieldEnum[] | SplitScalarFieldEnum
    having?: SplitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SplitCountAggregateInputType | true
    _avg?: SplitAvgAggregateInputType
    _sum?: SplitSumAggregateInputType
    _min?: SplitMinAggregateInputType
    _max?: SplitMaxAggregateInputType
  }

  export type SplitGroupByOutputType = {
    id: number
    redirectSlug: string
    splitterId: number
    _count: SplitCountAggregateOutputType | null
    _avg: SplitAvgAggregateOutputType | null
    _sum: SplitSumAggregateOutputType | null
    _min: SplitMinAggregateOutputType | null
    _max: SplitMaxAggregateOutputType | null
  }

  type GetSplitGroupByPayload<T extends SplitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SplitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SplitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SplitGroupByOutputType[P]>
            : GetScalarType<T[P], SplitGroupByOutputType[P]>
        }
      >
    >


  export type SplitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    redirectSlug?: boolean
    splitterId?: boolean
    Link?: boolean | Split$LinkArgs<ExtArgs>
    Splitter?: boolean | SplitterDefaultArgs<ExtArgs>
    _count?: boolean | SplitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["split"]>

  export type SplitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    redirectSlug?: boolean
    splitterId?: boolean
    Splitter?: boolean | SplitterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["split"]>

  export type SplitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    redirectSlug?: boolean
    splitterId?: boolean
    Splitter?: boolean | SplitterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["split"]>

  export type SplitSelectScalar = {
    id?: boolean
    redirectSlug?: boolean
    splitterId?: boolean
  }

  export type SplitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "redirectSlug" | "splitterId", ExtArgs["result"]["split"]>
  export type SplitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Link?: boolean | Split$LinkArgs<ExtArgs>
    Splitter?: boolean | SplitterDefaultArgs<ExtArgs>
    _count?: boolean | SplitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SplitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Splitter?: boolean | SplitterDefaultArgs<ExtArgs>
  }
  export type SplitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Splitter?: boolean | SplitterDefaultArgs<ExtArgs>
  }

  export type $SplitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Split"
    objects: {
      Link: Prisma.$LinkPayload<ExtArgs>[]
      Splitter: Prisma.$SplitterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      redirectSlug: string
      splitterId: number
    }, ExtArgs["result"]["split"]>
    composites: {}
  }

  type SplitGetPayload<S extends boolean | null | undefined | SplitDefaultArgs> = $Result.GetResult<Prisma.$SplitPayload, S>

  type SplitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SplitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SplitCountAggregateInputType | true
    }

  export interface SplitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Split'], meta: { name: 'Split' } }
    /**
     * Find zero or one Split that matches the filter.
     * @param {SplitFindUniqueArgs} args - Arguments to find a Split
     * @example
     * // Get one Split
     * const split = await prisma.split.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SplitFindUniqueArgs>(args: SelectSubset<T, SplitFindUniqueArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Split that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SplitFindUniqueOrThrowArgs} args - Arguments to find a Split
     * @example
     * // Get one Split
     * const split = await prisma.split.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SplitFindUniqueOrThrowArgs>(args: SelectSubset<T, SplitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Split that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitFindFirstArgs} args - Arguments to find a Split
     * @example
     * // Get one Split
     * const split = await prisma.split.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SplitFindFirstArgs>(args?: SelectSubset<T, SplitFindFirstArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Split that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitFindFirstOrThrowArgs} args - Arguments to find a Split
     * @example
     * // Get one Split
     * const split = await prisma.split.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SplitFindFirstOrThrowArgs>(args?: SelectSubset<T, SplitFindFirstOrThrowArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Splits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Splits
     * const splits = await prisma.split.findMany()
     * 
     * // Get first 10 Splits
     * const splits = await prisma.split.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const splitWithIdOnly = await prisma.split.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SplitFindManyArgs>(args?: SelectSubset<T, SplitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Split.
     * @param {SplitCreateArgs} args - Arguments to create a Split.
     * @example
     * // Create one Split
     * const Split = await prisma.split.create({
     *   data: {
     *     // ... data to create a Split
     *   }
     * })
     * 
     */
    create<T extends SplitCreateArgs>(args: SelectSubset<T, SplitCreateArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Splits.
     * @param {SplitCreateManyArgs} args - Arguments to create many Splits.
     * @example
     * // Create many Splits
     * const split = await prisma.split.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SplitCreateManyArgs>(args?: SelectSubset<T, SplitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Splits and returns the data saved in the database.
     * @param {SplitCreateManyAndReturnArgs} args - Arguments to create many Splits.
     * @example
     * // Create many Splits
     * const split = await prisma.split.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Splits and only return the `id`
     * const splitWithIdOnly = await prisma.split.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SplitCreateManyAndReturnArgs>(args?: SelectSubset<T, SplitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Split.
     * @param {SplitDeleteArgs} args - Arguments to delete one Split.
     * @example
     * // Delete one Split
     * const Split = await prisma.split.delete({
     *   where: {
     *     // ... filter to delete one Split
     *   }
     * })
     * 
     */
    delete<T extends SplitDeleteArgs>(args: SelectSubset<T, SplitDeleteArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Split.
     * @param {SplitUpdateArgs} args - Arguments to update one Split.
     * @example
     * // Update one Split
     * const split = await prisma.split.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SplitUpdateArgs>(args: SelectSubset<T, SplitUpdateArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Splits.
     * @param {SplitDeleteManyArgs} args - Arguments to filter Splits to delete.
     * @example
     * // Delete a few Splits
     * const { count } = await prisma.split.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SplitDeleteManyArgs>(args?: SelectSubset<T, SplitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Splits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Splits
     * const split = await prisma.split.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SplitUpdateManyArgs>(args: SelectSubset<T, SplitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Splits and returns the data updated in the database.
     * @param {SplitUpdateManyAndReturnArgs} args - Arguments to update many Splits.
     * @example
     * // Update many Splits
     * const split = await prisma.split.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Splits and only return the `id`
     * const splitWithIdOnly = await prisma.split.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SplitUpdateManyAndReturnArgs>(args: SelectSubset<T, SplitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Split.
     * @param {SplitUpsertArgs} args - Arguments to update or create a Split.
     * @example
     * // Update or create a Split
     * const split = await prisma.split.upsert({
     *   create: {
     *     // ... data to create a Split
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Split we want to update
     *   }
     * })
     */
    upsert<T extends SplitUpsertArgs>(args: SelectSubset<T, SplitUpsertArgs<ExtArgs>>): Prisma__SplitClient<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Splits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitCountArgs} args - Arguments to filter Splits to count.
     * @example
     * // Count the number of Splits
     * const count = await prisma.split.count({
     *   where: {
     *     // ... the filter for the Splits we want to count
     *   }
     * })
    **/
    count<T extends SplitCountArgs>(
      args?: Subset<T, SplitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SplitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Split.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SplitAggregateArgs>(args: Subset<T, SplitAggregateArgs>): Prisma.PrismaPromise<GetSplitAggregateType<T>>

    /**
     * Group by Split.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SplitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SplitGroupByArgs['orderBy'] }
        : { orderBy?: SplitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SplitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSplitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Split model
   */
  readonly fields: SplitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Split.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SplitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Link<T extends Split$LinkArgs<ExtArgs> = {}>(args?: Subset<T, Split$LinkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Splitter<T extends SplitterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SplitterDefaultArgs<ExtArgs>>): Prisma__SplitterClient<$Result.GetResult<Prisma.$SplitterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Split model
   */
  interface SplitFieldRefs {
    readonly id: FieldRef<"Split", 'Int'>
    readonly redirectSlug: FieldRef<"Split", 'String'>
    readonly splitterId: FieldRef<"Split", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Split findUnique
   */
  export type SplitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * Filter, which Split to fetch.
     */
    where: SplitWhereUniqueInput
  }

  /**
   * Split findUniqueOrThrow
   */
  export type SplitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * Filter, which Split to fetch.
     */
    where: SplitWhereUniqueInput
  }

  /**
   * Split findFirst
   */
  export type SplitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * Filter, which Split to fetch.
     */
    where?: SplitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Splits to fetch.
     */
    orderBy?: SplitOrderByWithRelationInput | SplitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Splits.
     */
    cursor?: SplitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Splits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Splits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Splits.
     */
    distinct?: SplitScalarFieldEnum | SplitScalarFieldEnum[]
  }

  /**
   * Split findFirstOrThrow
   */
  export type SplitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * Filter, which Split to fetch.
     */
    where?: SplitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Splits to fetch.
     */
    orderBy?: SplitOrderByWithRelationInput | SplitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Splits.
     */
    cursor?: SplitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Splits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Splits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Splits.
     */
    distinct?: SplitScalarFieldEnum | SplitScalarFieldEnum[]
  }

  /**
   * Split findMany
   */
  export type SplitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * Filter, which Splits to fetch.
     */
    where?: SplitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Splits to fetch.
     */
    orderBy?: SplitOrderByWithRelationInput | SplitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Splits.
     */
    cursor?: SplitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Splits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Splits.
     */
    skip?: number
    distinct?: SplitScalarFieldEnum | SplitScalarFieldEnum[]
  }

  /**
   * Split create
   */
  export type SplitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * The data needed to create a Split.
     */
    data: XOR<SplitCreateInput, SplitUncheckedCreateInput>
  }

  /**
   * Split createMany
   */
  export type SplitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Splits.
     */
    data: SplitCreateManyInput | SplitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Split createManyAndReturn
   */
  export type SplitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * The data used to create many Splits.
     */
    data: SplitCreateManyInput | SplitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Split update
   */
  export type SplitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * The data needed to update a Split.
     */
    data: XOR<SplitUpdateInput, SplitUncheckedUpdateInput>
    /**
     * Choose, which Split to update.
     */
    where: SplitWhereUniqueInput
  }

  /**
   * Split updateMany
   */
  export type SplitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Splits.
     */
    data: XOR<SplitUpdateManyMutationInput, SplitUncheckedUpdateManyInput>
    /**
     * Filter which Splits to update
     */
    where?: SplitWhereInput
    /**
     * Limit how many Splits to update.
     */
    limit?: number
  }

  /**
   * Split updateManyAndReturn
   */
  export type SplitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * The data used to update Splits.
     */
    data: XOR<SplitUpdateManyMutationInput, SplitUncheckedUpdateManyInput>
    /**
     * Filter which Splits to update
     */
    where?: SplitWhereInput
    /**
     * Limit how many Splits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Split upsert
   */
  export type SplitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * The filter to search for the Split to update in case it exists.
     */
    where: SplitWhereUniqueInput
    /**
     * In case the Split found by the `where` argument doesn't exist, create a new Split with this data.
     */
    create: XOR<SplitCreateInput, SplitUncheckedCreateInput>
    /**
     * In case the Split was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SplitUpdateInput, SplitUncheckedUpdateInput>
  }

  /**
   * Split delete
   */
  export type SplitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    /**
     * Filter which Split to delete.
     */
    where: SplitWhereUniqueInput
  }

  /**
   * Split deleteMany
   */
  export type SplitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Splits to delete
     */
    where?: SplitWhereInput
    /**
     * Limit how many Splits to delete.
     */
    limit?: number
  }

  /**
   * Split.Link
   */
  export type Split$LinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    cursor?: LinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Split without action
   */
  export type SplitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
  }


  /**
   * Model Splitter
   */

  export type AggregateSplitter = {
    _count: SplitterCountAggregateOutputType | null
    _avg: SplitterAvgAggregateOutputType | null
    _sum: SplitterSumAggregateOutputType | null
    _min: SplitterMinAggregateOutputType | null
    _max: SplitterMaxAggregateOutputType | null
  }

  export type SplitterAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    categoryId: number | null
    countryId: number | null
  }

  export type SplitterSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    categoryId: number | null
    countryId: number | null
  }

  export type SplitterMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    projectId: number | null
    categoryId: number | null
    countryId: number | null
  }

  export type SplitterMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    projectId: number | null
    categoryId: number | null
    countryId: number | null
  }

  export type SplitterCountAggregateOutputType = {
    id: number
    uuid: number
    projectId: number
    categoryId: number
    countryId: number
    _all: number
  }


  export type SplitterAvgAggregateInputType = {
    id?: true
    projectId?: true
    categoryId?: true
    countryId?: true
  }

  export type SplitterSumAggregateInputType = {
    id?: true
    projectId?: true
    categoryId?: true
    countryId?: true
  }

  export type SplitterMinAggregateInputType = {
    id?: true
    uuid?: true
    projectId?: true
    categoryId?: true
    countryId?: true
  }

  export type SplitterMaxAggregateInputType = {
    id?: true
    uuid?: true
    projectId?: true
    categoryId?: true
    countryId?: true
  }

  export type SplitterCountAggregateInputType = {
    id?: true
    uuid?: true
    projectId?: true
    categoryId?: true
    countryId?: true
    _all?: true
  }

  export type SplitterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Splitter to aggregate.
     */
    where?: SplitterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Splitters to fetch.
     */
    orderBy?: SplitterOrderByWithRelationInput | SplitterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SplitterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Splitters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Splitters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Splitters
    **/
    _count?: true | SplitterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SplitterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SplitterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SplitterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SplitterMaxAggregateInputType
  }

  export type GetSplitterAggregateType<T extends SplitterAggregateArgs> = {
        [P in keyof T & keyof AggregateSplitter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSplitter[P]>
      : GetScalarType<T[P], AggregateSplitter[P]>
  }




  export type SplitterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SplitterWhereInput
    orderBy?: SplitterOrderByWithAggregationInput | SplitterOrderByWithAggregationInput[]
    by: SplitterScalarFieldEnum[] | SplitterScalarFieldEnum
    having?: SplitterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SplitterCountAggregateInputType | true
    _avg?: SplitterAvgAggregateInputType
    _sum?: SplitterSumAggregateInputType
    _min?: SplitterMinAggregateInputType
    _max?: SplitterMaxAggregateInputType
  }

  export type SplitterGroupByOutputType = {
    id: number
    uuid: string
    projectId: number
    categoryId: number
    countryId: number
    _count: SplitterCountAggregateOutputType | null
    _avg: SplitterAvgAggregateOutputType | null
    _sum: SplitterSumAggregateOutputType | null
    _min: SplitterMinAggregateOutputType | null
    _max: SplitterMaxAggregateOutputType | null
  }

  type GetSplitterGroupByPayload<T extends SplitterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SplitterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SplitterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SplitterGroupByOutputType[P]>
            : GetScalarType<T[P], SplitterGroupByOutputType[P]>
        }
      >
    >


  export type SplitterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    projectId?: boolean
    categoryId?: boolean
    countryId?: boolean
    Split?: boolean | Splitter$SplitArgs<ExtArgs>
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Country?: boolean | CountryDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
    _count?: boolean | SplitterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["splitter"]>

  export type SplitterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    projectId?: boolean
    categoryId?: boolean
    countryId?: boolean
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Country?: boolean | CountryDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["splitter"]>

  export type SplitterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    projectId?: boolean
    categoryId?: boolean
    countryId?: boolean
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Country?: boolean | CountryDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["splitter"]>

  export type SplitterSelectScalar = {
    id?: boolean
    uuid?: boolean
    projectId?: boolean
    categoryId?: boolean
    countryId?: boolean
  }

  export type SplitterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "projectId" | "categoryId" | "countryId", ExtArgs["result"]["splitter"]>
  export type SplitterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Split?: boolean | Splitter$SplitArgs<ExtArgs>
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Country?: boolean | CountryDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
    _count?: boolean | SplitterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SplitterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Country?: boolean | CountryDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type SplitterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Country?: boolean | CountryDefaultArgs<ExtArgs>
    Project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $SplitterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Splitter"
    objects: {
      Split: Prisma.$SplitPayload<ExtArgs>[]
      Category: Prisma.$CategoryPayload<ExtArgs>
      Country: Prisma.$CountryPayload<ExtArgs>
      Project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      projectId: number
      categoryId: number
      countryId: number
    }, ExtArgs["result"]["splitter"]>
    composites: {}
  }

  type SplitterGetPayload<S extends boolean | null | undefined | SplitterDefaultArgs> = $Result.GetResult<Prisma.$SplitterPayload, S>

  type SplitterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SplitterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SplitterCountAggregateInputType | true
    }

  export interface SplitterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Splitter'], meta: { name: 'Splitter' } }
    /**
     * Find zero or one Splitter that matches the filter.
     * @param {SplitterFindUniqueArgs} args - Arguments to find a Splitter
     * @example
     * // Get one Splitter
     * const splitter = await prisma.splitter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SplitterFindUniqueArgs>(args: SelectSubset<T, SplitterFindUniqueArgs<ExtArgs>>): Prisma__SplitterClient<$Result.GetResult<Prisma.$SplitterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Splitter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SplitterFindUniqueOrThrowArgs} args - Arguments to find a Splitter
     * @example
     * // Get one Splitter
     * const splitter = await prisma.splitter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SplitterFindUniqueOrThrowArgs>(args: SelectSubset<T, SplitterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SplitterClient<$Result.GetResult<Prisma.$SplitterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Splitter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitterFindFirstArgs} args - Arguments to find a Splitter
     * @example
     * // Get one Splitter
     * const splitter = await prisma.splitter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SplitterFindFirstArgs>(args?: SelectSubset<T, SplitterFindFirstArgs<ExtArgs>>): Prisma__SplitterClient<$Result.GetResult<Prisma.$SplitterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Splitter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitterFindFirstOrThrowArgs} args - Arguments to find a Splitter
     * @example
     * // Get one Splitter
     * const splitter = await prisma.splitter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SplitterFindFirstOrThrowArgs>(args?: SelectSubset<T, SplitterFindFirstOrThrowArgs<ExtArgs>>): Prisma__SplitterClient<$Result.GetResult<Prisma.$SplitterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Splitters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Splitters
     * const splitters = await prisma.splitter.findMany()
     * 
     * // Get first 10 Splitters
     * const splitters = await prisma.splitter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const splitterWithIdOnly = await prisma.splitter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SplitterFindManyArgs>(args?: SelectSubset<T, SplitterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Splitter.
     * @param {SplitterCreateArgs} args - Arguments to create a Splitter.
     * @example
     * // Create one Splitter
     * const Splitter = await prisma.splitter.create({
     *   data: {
     *     // ... data to create a Splitter
     *   }
     * })
     * 
     */
    create<T extends SplitterCreateArgs>(args: SelectSubset<T, SplitterCreateArgs<ExtArgs>>): Prisma__SplitterClient<$Result.GetResult<Prisma.$SplitterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Splitters.
     * @param {SplitterCreateManyArgs} args - Arguments to create many Splitters.
     * @example
     * // Create many Splitters
     * const splitter = await prisma.splitter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SplitterCreateManyArgs>(args?: SelectSubset<T, SplitterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Splitters and returns the data saved in the database.
     * @param {SplitterCreateManyAndReturnArgs} args - Arguments to create many Splitters.
     * @example
     * // Create many Splitters
     * const splitter = await prisma.splitter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Splitters and only return the `id`
     * const splitterWithIdOnly = await prisma.splitter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SplitterCreateManyAndReturnArgs>(args?: SelectSubset<T, SplitterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Splitter.
     * @param {SplitterDeleteArgs} args - Arguments to delete one Splitter.
     * @example
     * // Delete one Splitter
     * const Splitter = await prisma.splitter.delete({
     *   where: {
     *     // ... filter to delete one Splitter
     *   }
     * })
     * 
     */
    delete<T extends SplitterDeleteArgs>(args: SelectSubset<T, SplitterDeleteArgs<ExtArgs>>): Prisma__SplitterClient<$Result.GetResult<Prisma.$SplitterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Splitter.
     * @param {SplitterUpdateArgs} args - Arguments to update one Splitter.
     * @example
     * // Update one Splitter
     * const splitter = await prisma.splitter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SplitterUpdateArgs>(args: SelectSubset<T, SplitterUpdateArgs<ExtArgs>>): Prisma__SplitterClient<$Result.GetResult<Prisma.$SplitterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Splitters.
     * @param {SplitterDeleteManyArgs} args - Arguments to filter Splitters to delete.
     * @example
     * // Delete a few Splitters
     * const { count } = await prisma.splitter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SplitterDeleteManyArgs>(args?: SelectSubset<T, SplitterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Splitters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Splitters
     * const splitter = await prisma.splitter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SplitterUpdateManyArgs>(args: SelectSubset<T, SplitterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Splitters and returns the data updated in the database.
     * @param {SplitterUpdateManyAndReturnArgs} args - Arguments to update many Splitters.
     * @example
     * // Update many Splitters
     * const splitter = await prisma.splitter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Splitters and only return the `id`
     * const splitterWithIdOnly = await prisma.splitter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SplitterUpdateManyAndReturnArgs>(args: SelectSubset<T, SplitterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Splitter.
     * @param {SplitterUpsertArgs} args - Arguments to update or create a Splitter.
     * @example
     * // Update or create a Splitter
     * const splitter = await prisma.splitter.upsert({
     *   create: {
     *     // ... data to create a Splitter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Splitter we want to update
     *   }
     * })
     */
    upsert<T extends SplitterUpsertArgs>(args: SelectSubset<T, SplitterUpsertArgs<ExtArgs>>): Prisma__SplitterClient<$Result.GetResult<Prisma.$SplitterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Splitters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitterCountArgs} args - Arguments to filter Splitters to count.
     * @example
     * // Count the number of Splitters
     * const count = await prisma.splitter.count({
     *   where: {
     *     // ... the filter for the Splitters we want to count
     *   }
     * })
    **/
    count<T extends SplitterCountArgs>(
      args?: Subset<T, SplitterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SplitterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Splitter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SplitterAggregateArgs>(args: Subset<T, SplitterAggregateArgs>): Prisma.PrismaPromise<GetSplitterAggregateType<T>>

    /**
     * Group by Splitter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SplitterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SplitterGroupByArgs['orderBy'] }
        : { orderBy?: SplitterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SplitterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSplitterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Splitter model
   */
  readonly fields: SplitterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Splitter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SplitterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Split<T extends Splitter$SplitArgs<ExtArgs> = {}>(args?: Subset<T, Splitter$SplitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Splitter model
   */
  interface SplitterFieldRefs {
    readonly id: FieldRef<"Splitter", 'Int'>
    readonly uuid: FieldRef<"Splitter", 'String'>
    readonly projectId: FieldRef<"Splitter", 'Int'>
    readonly categoryId: FieldRef<"Splitter", 'Int'>
    readonly countryId: FieldRef<"Splitter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Splitter findUnique
   */
  export type SplitterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Splitter
     */
    select?: SplitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Splitter
     */
    omit?: SplitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitterInclude<ExtArgs> | null
    /**
     * Filter, which Splitter to fetch.
     */
    where: SplitterWhereUniqueInput
  }

  /**
   * Splitter findUniqueOrThrow
   */
  export type SplitterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Splitter
     */
    select?: SplitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Splitter
     */
    omit?: SplitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitterInclude<ExtArgs> | null
    /**
     * Filter, which Splitter to fetch.
     */
    where: SplitterWhereUniqueInput
  }

  /**
   * Splitter findFirst
   */
  export type SplitterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Splitter
     */
    select?: SplitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Splitter
     */
    omit?: SplitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitterInclude<ExtArgs> | null
    /**
     * Filter, which Splitter to fetch.
     */
    where?: SplitterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Splitters to fetch.
     */
    orderBy?: SplitterOrderByWithRelationInput | SplitterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Splitters.
     */
    cursor?: SplitterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Splitters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Splitters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Splitters.
     */
    distinct?: SplitterScalarFieldEnum | SplitterScalarFieldEnum[]
  }

  /**
   * Splitter findFirstOrThrow
   */
  export type SplitterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Splitter
     */
    select?: SplitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Splitter
     */
    omit?: SplitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitterInclude<ExtArgs> | null
    /**
     * Filter, which Splitter to fetch.
     */
    where?: SplitterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Splitters to fetch.
     */
    orderBy?: SplitterOrderByWithRelationInput | SplitterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Splitters.
     */
    cursor?: SplitterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Splitters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Splitters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Splitters.
     */
    distinct?: SplitterScalarFieldEnum | SplitterScalarFieldEnum[]
  }

  /**
   * Splitter findMany
   */
  export type SplitterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Splitter
     */
    select?: SplitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Splitter
     */
    omit?: SplitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitterInclude<ExtArgs> | null
    /**
     * Filter, which Splitters to fetch.
     */
    where?: SplitterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Splitters to fetch.
     */
    orderBy?: SplitterOrderByWithRelationInput | SplitterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Splitters.
     */
    cursor?: SplitterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Splitters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Splitters.
     */
    skip?: number
    distinct?: SplitterScalarFieldEnum | SplitterScalarFieldEnum[]
  }

  /**
   * Splitter create
   */
  export type SplitterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Splitter
     */
    select?: SplitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Splitter
     */
    omit?: SplitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitterInclude<ExtArgs> | null
    /**
     * The data needed to create a Splitter.
     */
    data: XOR<SplitterCreateInput, SplitterUncheckedCreateInput>
  }

  /**
   * Splitter createMany
   */
  export type SplitterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Splitters.
     */
    data: SplitterCreateManyInput | SplitterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Splitter createManyAndReturn
   */
  export type SplitterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Splitter
     */
    select?: SplitterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Splitter
     */
    omit?: SplitterOmit<ExtArgs> | null
    /**
     * The data used to create many Splitters.
     */
    data: SplitterCreateManyInput | SplitterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Splitter update
   */
  export type SplitterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Splitter
     */
    select?: SplitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Splitter
     */
    omit?: SplitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitterInclude<ExtArgs> | null
    /**
     * The data needed to update a Splitter.
     */
    data: XOR<SplitterUpdateInput, SplitterUncheckedUpdateInput>
    /**
     * Choose, which Splitter to update.
     */
    where: SplitterWhereUniqueInput
  }

  /**
   * Splitter updateMany
   */
  export type SplitterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Splitters.
     */
    data: XOR<SplitterUpdateManyMutationInput, SplitterUncheckedUpdateManyInput>
    /**
     * Filter which Splitters to update
     */
    where?: SplitterWhereInput
    /**
     * Limit how many Splitters to update.
     */
    limit?: number
  }

  /**
   * Splitter updateManyAndReturn
   */
  export type SplitterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Splitter
     */
    select?: SplitterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Splitter
     */
    omit?: SplitterOmit<ExtArgs> | null
    /**
     * The data used to update Splitters.
     */
    data: XOR<SplitterUpdateManyMutationInput, SplitterUncheckedUpdateManyInput>
    /**
     * Filter which Splitters to update
     */
    where?: SplitterWhereInput
    /**
     * Limit how many Splitters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Splitter upsert
   */
  export type SplitterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Splitter
     */
    select?: SplitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Splitter
     */
    omit?: SplitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitterInclude<ExtArgs> | null
    /**
     * The filter to search for the Splitter to update in case it exists.
     */
    where: SplitterWhereUniqueInput
    /**
     * In case the Splitter found by the `where` argument doesn't exist, create a new Splitter with this data.
     */
    create: XOR<SplitterCreateInput, SplitterUncheckedCreateInput>
    /**
     * In case the Splitter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SplitterUpdateInput, SplitterUncheckedUpdateInput>
  }

  /**
   * Splitter delete
   */
  export type SplitterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Splitter
     */
    select?: SplitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Splitter
     */
    omit?: SplitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitterInclude<ExtArgs> | null
    /**
     * Filter which Splitter to delete.
     */
    where: SplitterWhereUniqueInput
  }

  /**
   * Splitter deleteMany
   */
  export type SplitterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Splitters to delete
     */
    where?: SplitterWhereInput
    /**
     * Limit how many Splitters to delete.
     */
    limit?: number
  }

  /**
   * Splitter.Split
   */
  export type Splitter$SplitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Split
     */
    select?: SplitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Split
     */
    omit?: SplitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitInclude<ExtArgs> | null
    where?: SplitWhereInput
    orderBy?: SplitOrderByWithRelationInput | SplitOrderByWithRelationInput[]
    cursor?: SplitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SplitScalarFieldEnum | SplitScalarFieldEnum[]
  }

  /**
   * Splitter without action
   */
  export type SplitterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Splitter
     */
    select?: SplitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Splitter
     */
    omit?: SplitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitterInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    password: string
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    Project?: boolean | User$ProjectArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | User$ProjectArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Project: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      password: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Project<T extends User$ProjectArgs<ExtArgs> = {}>(args?: Subset<T, User$ProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Project
   */
  export type User$ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    redirectMessage: 'redirectMessage',
    icon: 'icon'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const LinkScalarFieldEnum: {
    id: 'id',
    splitId: 'splitId',
    url: 'url',
    type: 'type',
    prob: 'prob',
    ecpm: 'ecpm',
    hidden: 'hidden'
  };

  export type LinkScalarFieldEnum = (typeof LinkScalarFieldEnum)[keyof typeof LinkScalarFieldEnum]


  export const LinkTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type LinkTypeScalarFieldEnum = (typeof LinkTypeScalarFieldEnum)[keyof typeof LinkTypeScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    userId: 'userId',
    name: 'name',
    description: 'description',
    icon: 'icon'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectCountriesScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    countryId: 'countryId',
    pixelId: 'pixelId',
    capiToken: 'capiToken'
  };

  export type ProjectCountriesScalarFieldEnum = (typeof ProjectCountriesScalarFieldEnum)[keyof typeof ProjectCountriesScalarFieldEnum]


  export const SplitScalarFieldEnum: {
    id: 'id',
    redirectSlug: 'redirectSlug',
    splitterId: 'splitterId'
  };

  export type SplitScalarFieldEnum = (typeof SplitScalarFieldEnum)[keyof typeof SplitScalarFieldEnum]


  export const SplitterScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    projectId: 'projectId',
    categoryId: 'categoryId',
    countryId: 'countryId'
  };

  export type SplitterScalarFieldEnum = (typeof SplitterScalarFieldEnum)[keyof typeof SplitterScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    Splitter?: SplitterListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    Splitter?: SplitterOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    Splitter?: SplitterListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringWithAggregatesFilter<"Category"> | string
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: IntFilter<"Country"> | number
    name?: StringFilter<"Country"> | string
    redirectMessage?: StringFilter<"Country"> | string
    icon?: StringNullableFilter<"Country"> | string | null
    ProjectCountries?: ProjectCountriesListRelationFilter
    Splitter?: SplitterListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    redirectMessage?: SortOrder
    icon?: SortOrderInput | SortOrder
    ProjectCountries?: ProjectCountriesOrderByRelationAggregateInput
    Splitter?: SplitterOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    name?: StringFilter<"Country"> | string
    redirectMessage?: StringFilter<"Country"> | string
    icon?: StringNullableFilter<"Country"> | string | null
    ProjectCountries?: ProjectCountriesListRelationFilter
    Splitter?: SplitterListRelationFilter
  }, "id">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    redirectMessage?: SortOrder
    icon?: SortOrderInput | SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Country"> | number
    name?: StringWithAggregatesFilter<"Country"> | string
    redirectMessage?: StringWithAggregatesFilter<"Country"> | string
    icon?: StringNullableWithAggregatesFilter<"Country"> | string | null
  }

  export type LinkWhereInput = {
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    id?: IntFilter<"Link"> | number
    splitId?: IntFilter<"Link"> | number
    url?: StringFilter<"Link"> | string
    type?: IntFilter<"Link"> | number
    prob?: FloatFilter<"Link"> | number
    ecpm?: FloatFilter<"Link"> | number
    hidden?: BoolFilter<"Link"> | boolean
    Split?: XOR<SplitScalarRelationFilter, SplitWhereInput>
    LinkType?: XOR<LinkTypeScalarRelationFilter, LinkTypeWhereInput>
  }

  export type LinkOrderByWithRelationInput = {
    id?: SortOrder
    splitId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    prob?: SortOrder
    ecpm?: SortOrder
    hidden?: SortOrder
    Split?: SplitOrderByWithRelationInput
    LinkType?: LinkTypeOrderByWithRelationInput
  }

  export type LinkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    splitId?: IntFilter<"Link"> | number
    url?: StringFilter<"Link"> | string
    type?: IntFilter<"Link"> | number
    prob?: FloatFilter<"Link"> | number
    ecpm?: FloatFilter<"Link"> | number
    hidden?: BoolFilter<"Link"> | boolean
    Split?: XOR<SplitScalarRelationFilter, SplitWhereInput>
    LinkType?: XOR<LinkTypeScalarRelationFilter, LinkTypeWhereInput>
  }, "id">

  export type LinkOrderByWithAggregationInput = {
    id?: SortOrder
    splitId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    prob?: SortOrder
    ecpm?: SortOrder
    hidden?: SortOrder
    _count?: LinkCountOrderByAggregateInput
    _avg?: LinkAvgOrderByAggregateInput
    _max?: LinkMaxOrderByAggregateInput
    _min?: LinkMinOrderByAggregateInput
    _sum?: LinkSumOrderByAggregateInput
  }

  export type LinkScalarWhereWithAggregatesInput = {
    AND?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    OR?: LinkScalarWhereWithAggregatesInput[]
    NOT?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Link"> | number
    splitId?: IntWithAggregatesFilter<"Link"> | number
    url?: StringWithAggregatesFilter<"Link"> | string
    type?: IntWithAggregatesFilter<"Link"> | number
    prob?: FloatWithAggregatesFilter<"Link"> | number
    ecpm?: FloatWithAggregatesFilter<"Link"> | number
    hidden?: BoolWithAggregatesFilter<"Link"> | boolean
  }

  export type LinkTypeWhereInput = {
    AND?: LinkTypeWhereInput | LinkTypeWhereInput[]
    OR?: LinkTypeWhereInput[]
    NOT?: LinkTypeWhereInput | LinkTypeWhereInput[]
    id?: IntFilter<"LinkType"> | number
    name?: StringFilter<"LinkType"> | string
    Link?: LinkListRelationFilter
  }

  export type LinkTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Link?: LinkOrderByRelationAggregateInput
  }

  export type LinkTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LinkTypeWhereInput | LinkTypeWhereInput[]
    OR?: LinkTypeWhereInput[]
    NOT?: LinkTypeWhereInput | LinkTypeWhereInput[]
    name?: StringFilter<"LinkType"> | string
    Link?: LinkListRelationFilter
  }, "id">

  export type LinkTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: LinkTypeCountOrderByAggregateInput
    _avg?: LinkTypeAvgOrderByAggregateInput
    _max?: LinkTypeMaxOrderByAggregateInput
    _min?: LinkTypeMinOrderByAggregateInput
    _sum?: LinkTypeSumOrderByAggregateInput
  }

  export type LinkTypeScalarWhereWithAggregatesInput = {
    AND?: LinkTypeScalarWhereWithAggregatesInput | LinkTypeScalarWhereWithAggregatesInput[]
    OR?: LinkTypeScalarWhereWithAggregatesInput[]
    NOT?: LinkTypeScalarWhereWithAggregatesInput | LinkTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LinkType"> | number
    name?: StringWithAggregatesFilter<"LinkType"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    uuid?: StringFilter<"Project"> | string
    userId?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    icon?: StringFilter<"Project"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    ProjectCountries?: ProjectCountriesListRelationFilter
    Splitter?: SplitterListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    User?: UserOrderByWithRelationInput
    ProjectCountries?: ProjectCountriesOrderByRelationAggregateInput
    Splitter?: SplitterOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    userId?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    icon?: StringFilter<"Project"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    ProjectCountries?: ProjectCountriesListRelationFilter
    Splitter?: SplitterListRelationFilter
  }, "id" | "uuid">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    uuid?: StringWithAggregatesFilter<"Project"> | string
    userId?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    icon?: StringWithAggregatesFilter<"Project"> | string
  }

  export type ProjectCountriesWhereInput = {
    AND?: ProjectCountriesWhereInput | ProjectCountriesWhereInput[]
    OR?: ProjectCountriesWhereInput[]
    NOT?: ProjectCountriesWhereInput | ProjectCountriesWhereInput[]
    id?: IntFilter<"ProjectCountries"> | number
    projectId?: IntFilter<"ProjectCountries"> | number
    countryId?: IntFilter<"ProjectCountries"> | number
    pixelId?: StringFilter<"ProjectCountries"> | string
    capiToken?: StringFilter<"ProjectCountries"> | string
    Country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    Project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectCountriesOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    countryId?: SortOrder
    pixelId?: SortOrder
    capiToken?: SortOrder
    Country?: CountryOrderByWithRelationInput
    Project?: ProjectOrderByWithRelationInput
  }

  export type ProjectCountriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectCountriesWhereInput | ProjectCountriesWhereInput[]
    OR?: ProjectCountriesWhereInput[]
    NOT?: ProjectCountriesWhereInput | ProjectCountriesWhereInput[]
    projectId?: IntFilter<"ProjectCountries"> | number
    countryId?: IntFilter<"ProjectCountries"> | number
    pixelId?: StringFilter<"ProjectCountries"> | string
    capiToken?: StringFilter<"ProjectCountries"> | string
    Country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    Project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectCountriesOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    countryId?: SortOrder
    pixelId?: SortOrder
    capiToken?: SortOrder
    _count?: ProjectCountriesCountOrderByAggregateInput
    _avg?: ProjectCountriesAvgOrderByAggregateInput
    _max?: ProjectCountriesMaxOrderByAggregateInput
    _min?: ProjectCountriesMinOrderByAggregateInput
    _sum?: ProjectCountriesSumOrderByAggregateInput
  }

  export type ProjectCountriesScalarWhereWithAggregatesInput = {
    AND?: ProjectCountriesScalarWhereWithAggregatesInput | ProjectCountriesScalarWhereWithAggregatesInput[]
    OR?: ProjectCountriesScalarWhereWithAggregatesInput[]
    NOT?: ProjectCountriesScalarWhereWithAggregatesInput | ProjectCountriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectCountries"> | number
    projectId?: IntWithAggregatesFilter<"ProjectCountries"> | number
    countryId?: IntWithAggregatesFilter<"ProjectCountries"> | number
    pixelId?: StringWithAggregatesFilter<"ProjectCountries"> | string
    capiToken?: StringWithAggregatesFilter<"ProjectCountries"> | string
  }

  export type SplitWhereInput = {
    AND?: SplitWhereInput | SplitWhereInput[]
    OR?: SplitWhereInput[]
    NOT?: SplitWhereInput | SplitWhereInput[]
    id?: IntFilter<"Split"> | number
    redirectSlug?: StringFilter<"Split"> | string
    splitterId?: IntFilter<"Split"> | number
    Link?: LinkListRelationFilter
    Splitter?: XOR<SplitterScalarRelationFilter, SplitterWhereInput>
  }

  export type SplitOrderByWithRelationInput = {
    id?: SortOrder
    redirectSlug?: SortOrder
    splitterId?: SortOrder
    Link?: LinkOrderByRelationAggregateInput
    Splitter?: SplitterOrderByWithRelationInput
  }

  export type SplitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    redirectSlug?: string
    AND?: SplitWhereInput | SplitWhereInput[]
    OR?: SplitWhereInput[]
    NOT?: SplitWhereInput | SplitWhereInput[]
    splitterId?: IntFilter<"Split"> | number
    Link?: LinkListRelationFilter
    Splitter?: XOR<SplitterScalarRelationFilter, SplitterWhereInput>
  }, "id" | "redirectSlug">

  export type SplitOrderByWithAggregationInput = {
    id?: SortOrder
    redirectSlug?: SortOrder
    splitterId?: SortOrder
    _count?: SplitCountOrderByAggregateInput
    _avg?: SplitAvgOrderByAggregateInput
    _max?: SplitMaxOrderByAggregateInput
    _min?: SplitMinOrderByAggregateInput
    _sum?: SplitSumOrderByAggregateInput
  }

  export type SplitScalarWhereWithAggregatesInput = {
    AND?: SplitScalarWhereWithAggregatesInput | SplitScalarWhereWithAggregatesInput[]
    OR?: SplitScalarWhereWithAggregatesInput[]
    NOT?: SplitScalarWhereWithAggregatesInput | SplitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Split"> | number
    redirectSlug?: StringWithAggregatesFilter<"Split"> | string
    splitterId?: IntWithAggregatesFilter<"Split"> | number
  }

  export type SplitterWhereInput = {
    AND?: SplitterWhereInput | SplitterWhereInput[]
    OR?: SplitterWhereInput[]
    NOT?: SplitterWhereInput | SplitterWhereInput[]
    id?: IntFilter<"Splitter"> | number
    uuid?: StringFilter<"Splitter"> | string
    projectId?: IntFilter<"Splitter"> | number
    categoryId?: IntFilter<"Splitter"> | number
    countryId?: IntFilter<"Splitter"> | number
    Split?: SplitListRelationFilter
    Category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    Country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    Project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type SplitterOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    projectId?: SortOrder
    categoryId?: SortOrder
    countryId?: SortOrder
    Split?: SplitOrderByRelationAggregateInput
    Category?: CategoryOrderByWithRelationInput
    Country?: CountryOrderByWithRelationInput
    Project?: ProjectOrderByWithRelationInput
  }

  export type SplitterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: SplitterWhereInput | SplitterWhereInput[]
    OR?: SplitterWhereInput[]
    NOT?: SplitterWhereInput | SplitterWhereInput[]
    projectId?: IntFilter<"Splitter"> | number
    categoryId?: IntFilter<"Splitter"> | number
    countryId?: IntFilter<"Splitter"> | number
    Split?: SplitListRelationFilter
    Category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    Country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    Project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "uuid">

  export type SplitterOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    projectId?: SortOrder
    categoryId?: SortOrder
    countryId?: SortOrder
    _count?: SplitterCountOrderByAggregateInput
    _avg?: SplitterAvgOrderByAggregateInput
    _max?: SplitterMaxOrderByAggregateInput
    _min?: SplitterMinOrderByAggregateInput
    _sum?: SplitterSumOrderByAggregateInput
  }

  export type SplitterScalarWhereWithAggregatesInput = {
    AND?: SplitterScalarWhereWithAggregatesInput | SplitterScalarWhereWithAggregatesInput[]
    OR?: SplitterScalarWhereWithAggregatesInput[]
    NOT?: SplitterScalarWhereWithAggregatesInput | SplitterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Splitter"> | number
    uuid?: StringWithAggregatesFilter<"Splitter"> | string
    projectId?: IntWithAggregatesFilter<"Splitter"> | number
    categoryId?: IntWithAggregatesFilter<"Splitter"> | number
    countryId?: IntWithAggregatesFilter<"Splitter"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    Project?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    Project?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    Project?: ProjectListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type CategoryCreateInput = {
    name: string
    description: string
    Splitter?: SplitterCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    Splitter?: SplitterUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Splitter?: SplitterUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Splitter?: SplitterUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CountryCreateInput = {
    name: string
    redirectMessage: string
    icon?: string | null
    ProjectCountries?: ProjectCountriesCreateNestedManyWithoutCountryInput
    Splitter?: SplitterCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: number
    name: string
    redirectMessage: string
    icon?: string | null
    ProjectCountries?: ProjectCountriesUncheckedCreateNestedManyWithoutCountryInput
    Splitter?: SplitterUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    redirectMessage?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectCountries?: ProjectCountriesUpdateManyWithoutCountryNestedInput
    Splitter?: SplitterUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    redirectMessage?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectCountries?: ProjectCountriesUncheckedUpdateManyWithoutCountryNestedInput
    Splitter?: SplitterUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: number
    name: string
    redirectMessage: string
    icon?: string | null
  }

  export type CountryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    redirectMessage?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    redirectMessage?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkCreateInput = {
    url: string
    prob: number
    ecpm: number
    hidden?: boolean
    Split: SplitCreateNestedOneWithoutLinkInput
    LinkType: LinkTypeCreateNestedOneWithoutLinkInput
  }

  export type LinkUncheckedCreateInput = {
    id?: number
    splitId: number
    url: string
    type: number
    prob: number
    ecpm: number
    hidden?: boolean
  }

  export type LinkUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    prob?: FloatFieldUpdateOperationsInput | number
    ecpm?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    Split?: SplitUpdateOneRequiredWithoutLinkNestedInput
    LinkType?: LinkTypeUpdateOneRequiredWithoutLinkNestedInput
  }

  export type LinkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    splitId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    prob?: FloatFieldUpdateOperationsInput | number
    ecpm?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LinkCreateManyInput = {
    id?: number
    splitId: number
    url: string
    type: number
    prob: number
    ecpm: number
    hidden?: boolean
  }

  export type LinkUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    prob?: FloatFieldUpdateOperationsInput | number
    ecpm?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LinkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    splitId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    prob?: FloatFieldUpdateOperationsInput | number
    ecpm?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LinkTypeCreateInput = {
    name: string
    Link?: LinkCreateNestedManyWithoutLinkTypeInput
  }

  export type LinkTypeUncheckedCreateInput = {
    id?: number
    name: string
    Link?: LinkUncheckedCreateNestedManyWithoutLinkTypeInput
  }

  export type LinkTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Link?: LinkUpdateManyWithoutLinkTypeNestedInput
  }

  export type LinkTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Link?: LinkUncheckedUpdateManyWithoutLinkTypeNestedInput
  }

  export type LinkTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type LinkTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LinkTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    uuid: string
    name: string
    description: string
    icon: string
    User: UserCreateNestedOneWithoutProjectInput
    ProjectCountries?: ProjectCountriesCreateNestedManyWithoutProjectInput
    Splitter?: SplitterCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    uuid: string
    userId: number
    name: string
    description: string
    icon: string
    ProjectCountries?: ProjectCountriesUncheckedCreateNestedManyWithoutProjectInput
    Splitter?: SplitterUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutProjectNestedInput
    ProjectCountries?: ProjectCountriesUpdateManyWithoutProjectNestedInput
    Splitter?: SplitterUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    ProjectCountries?: ProjectCountriesUncheckedUpdateManyWithoutProjectNestedInput
    Splitter?: SplitterUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    uuid: string
    userId: number
    name: string
    description: string
    icon: string
  }

  export type ProjectUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCountriesCreateInput = {
    pixelId: string
    capiToken: string
    Country: CountryCreateNestedOneWithoutProjectCountriesInput
    Project: ProjectCreateNestedOneWithoutProjectCountriesInput
  }

  export type ProjectCountriesUncheckedCreateInput = {
    id?: number
    projectId: number
    countryId: number
    pixelId: string
    capiToken: string
  }

  export type ProjectCountriesUpdateInput = {
    pixelId?: StringFieldUpdateOperationsInput | string
    capiToken?: StringFieldUpdateOperationsInput | string
    Country?: CountryUpdateOneRequiredWithoutProjectCountriesNestedInput
    Project?: ProjectUpdateOneRequiredWithoutProjectCountriesNestedInput
  }

  export type ProjectCountriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    pixelId?: StringFieldUpdateOperationsInput | string
    capiToken?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCountriesCreateManyInput = {
    id?: number
    projectId: number
    countryId: number
    pixelId: string
    capiToken: string
  }

  export type ProjectCountriesUpdateManyMutationInput = {
    pixelId?: StringFieldUpdateOperationsInput | string
    capiToken?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCountriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    pixelId?: StringFieldUpdateOperationsInput | string
    capiToken?: StringFieldUpdateOperationsInput | string
  }

  export type SplitCreateInput = {
    redirectSlug: string
    Link?: LinkCreateNestedManyWithoutSplitInput
    Splitter: SplitterCreateNestedOneWithoutSplitInput
  }

  export type SplitUncheckedCreateInput = {
    id?: number
    redirectSlug: string
    splitterId: number
    Link?: LinkUncheckedCreateNestedManyWithoutSplitInput
  }

  export type SplitUpdateInput = {
    redirectSlug?: StringFieldUpdateOperationsInput | string
    Link?: LinkUpdateManyWithoutSplitNestedInput
    Splitter?: SplitterUpdateOneRequiredWithoutSplitNestedInput
  }

  export type SplitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    redirectSlug?: StringFieldUpdateOperationsInput | string
    splitterId?: IntFieldUpdateOperationsInput | number
    Link?: LinkUncheckedUpdateManyWithoutSplitNestedInput
  }

  export type SplitCreateManyInput = {
    id?: number
    redirectSlug: string
    splitterId: number
  }

  export type SplitUpdateManyMutationInput = {
    redirectSlug?: StringFieldUpdateOperationsInput | string
  }

  export type SplitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    redirectSlug?: StringFieldUpdateOperationsInput | string
    splitterId?: IntFieldUpdateOperationsInput | number
  }

  export type SplitterCreateInput = {
    uuid: string
    Split?: SplitCreateNestedManyWithoutSplitterInput
    Category: CategoryCreateNestedOneWithoutSplitterInput
    Country: CountryCreateNestedOneWithoutSplitterInput
    Project: ProjectCreateNestedOneWithoutSplitterInput
  }

  export type SplitterUncheckedCreateInput = {
    id?: number
    uuid: string
    projectId: number
    categoryId: number
    countryId: number
    Split?: SplitUncheckedCreateNestedManyWithoutSplitterInput
  }

  export type SplitterUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    Split?: SplitUpdateManyWithoutSplitterNestedInput
    Category?: CategoryUpdateOneRequiredWithoutSplitterNestedInput
    Country?: CountryUpdateOneRequiredWithoutSplitterNestedInput
    Project?: ProjectUpdateOneRequiredWithoutSplitterNestedInput
  }

  export type SplitterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    Split?: SplitUncheckedUpdateManyWithoutSplitterNestedInput
  }

  export type SplitterCreateManyInput = {
    id?: number
    uuid: string
    projectId: number
    categoryId: number
    countryId: number
  }

  export type SplitterUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type SplitterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    name: string
    password: string
    role: string
    Project?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    password: string
    role: string
    Project?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    password: string
    role: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SplitterListRelationFilter = {
    every?: SplitterWhereInput
    some?: SplitterWhereInput
    none?: SplitterWhereInput
  }

  export type SplitterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectCountriesListRelationFilter = {
    every?: ProjectCountriesWhereInput
    some?: ProjectCountriesWhereInput
    none?: ProjectCountriesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectCountriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    redirectMessage?: SortOrder
    icon?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    redirectMessage?: SortOrder
    icon?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    redirectMessage?: SortOrder
    icon?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SplitScalarRelationFilter = {
    is?: SplitWhereInput
    isNot?: SplitWhereInput
  }

  export type LinkTypeScalarRelationFilter = {
    is?: LinkTypeWhereInput
    isNot?: LinkTypeWhereInput
  }

  export type LinkCountOrderByAggregateInput = {
    id?: SortOrder
    splitId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    prob?: SortOrder
    ecpm?: SortOrder
    hidden?: SortOrder
  }

  export type LinkAvgOrderByAggregateInput = {
    id?: SortOrder
    splitId?: SortOrder
    type?: SortOrder
    prob?: SortOrder
    ecpm?: SortOrder
  }

  export type LinkMaxOrderByAggregateInput = {
    id?: SortOrder
    splitId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    prob?: SortOrder
    ecpm?: SortOrder
    hidden?: SortOrder
  }

  export type LinkMinOrderByAggregateInput = {
    id?: SortOrder
    splitId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    prob?: SortOrder
    ecpm?: SortOrder
    hidden?: SortOrder
  }

  export type LinkSumOrderByAggregateInput = {
    id?: SortOrder
    splitId?: SortOrder
    type?: SortOrder
    prob?: SortOrder
    ecpm?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LinkListRelationFilter = {
    every?: LinkWhereInput
    some?: LinkWhereInput
    none?: LinkWhereInput
  }

  export type LinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LinkTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LinkTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LinkTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LinkTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectCountriesCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    countryId?: SortOrder
    pixelId?: SortOrder
    capiToken?: SortOrder
  }

  export type ProjectCountriesAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    countryId?: SortOrder
  }

  export type ProjectCountriesMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    countryId?: SortOrder
    pixelId?: SortOrder
    capiToken?: SortOrder
  }

  export type ProjectCountriesMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    countryId?: SortOrder
    pixelId?: SortOrder
    capiToken?: SortOrder
  }

  export type ProjectCountriesSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    countryId?: SortOrder
  }

  export type SplitterScalarRelationFilter = {
    is?: SplitterWhereInput
    isNot?: SplitterWhereInput
  }

  export type SplitCountOrderByAggregateInput = {
    id?: SortOrder
    redirectSlug?: SortOrder
    splitterId?: SortOrder
  }

  export type SplitAvgOrderByAggregateInput = {
    id?: SortOrder
    splitterId?: SortOrder
  }

  export type SplitMaxOrderByAggregateInput = {
    id?: SortOrder
    redirectSlug?: SortOrder
    splitterId?: SortOrder
  }

  export type SplitMinOrderByAggregateInput = {
    id?: SortOrder
    redirectSlug?: SortOrder
    splitterId?: SortOrder
  }

  export type SplitSumOrderByAggregateInput = {
    id?: SortOrder
    splitterId?: SortOrder
  }

  export type SplitListRelationFilter = {
    every?: SplitWhereInput
    some?: SplitWhereInput
    none?: SplitWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SplitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SplitterCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    projectId?: SortOrder
    categoryId?: SortOrder
    countryId?: SortOrder
  }

  export type SplitterAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    categoryId?: SortOrder
    countryId?: SortOrder
  }

  export type SplitterMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    projectId?: SortOrder
    categoryId?: SortOrder
    countryId?: SortOrder
  }

  export type SplitterMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    projectId?: SortOrder
    categoryId?: SortOrder
    countryId?: SortOrder
  }

  export type SplitterSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    categoryId?: SortOrder
    countryId?: SortOrder
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SplitterCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SplitterCreateWithoutCategoryInput, SplitterUncheckedCreateWithoutCategoryInput> | SplitterCreateWithoutCategoryInput[] | SplitterUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SplitterCreateOrConnectWithoutCategoryInput | SplitterCreateOrConnectWithoutCategoryInput[]
    createMany?: SplitterCreateManyCategoryInputEnvelope
    connect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
  }

  export type SplitterUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SplitterCreateWithoutCategoryInput, SplitterUncheckedCreateWithoutCategoryInput> | SplitterCreateWithoutCategoryInput[] | SplitterUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SplitterCreateOrConnectWithoutCategoryInput | SplitterCreateOrConnectWithoutCategoryInput[]
    createMany?: SplitterCreateManyCategoryInputEnvelope
    connect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SplitterUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SplitterCreateWithoutCategoryInput, SplitterUncheckedCreateWithoutCategoryInput> | SplitterCreateWithoutCategoryInput[] | SplitterUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SplitterCreateOrConnectWithoutCategoryInput | SplitterCreateOrConnectWithoutCategoryInput[]
    upsert?: SplitterUpsertWithWhereUniqueWithoutCategoryInput | SplitterUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SplitterCreateManyCategoryInputEnvelope
    set?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    disconnect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    delete?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    connect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    update?: SplitterUpdateWithWhereUniqueWithoutCategoryInput | SplitterUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SplitterUpdateManyWithWhereWithoutCategoryInput | SplitterUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SplitterScalarWhereInput | SplitterScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SplitterUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SplitterCreateWithoutCategoryInput, SplitterUncheckedCreateWithoutCategoryInput> | SplitterCreateWithoutCategoryInput[] | SplitterUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SplitterCreateOrConnectWithoutCategoryInput | SplitterCreateOrConnectWithoutCategoryInput[]
    upsert?: SplitterUpsertWithWhereUniqueWithoutCategoryInput | SplitterUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SplitterCreateManyCategoryInputEnvelope
    set?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    disconnect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    delete?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    connect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    update?: SplitterUpdateWithWhereUniqueWithoutCategoryInput | SplitterUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SplitterUpdateManyWithWhereWithoutCategoryInput | SplitterUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SplitterScalarWhereInput | SplitterScalarWhereInput[]
  }

  export type ProjectCountriesCreateNestedManyWithoutCountryInput = {
    create?: XOR<ProjectCountriesCreateWithoutCountryInput, ProjectCountriesUncheckedCreateWithoutCountryInput> | ProjectCountriesCreateWithoutCountryInput[] | ProjectCountriesUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ProjectCountriesCreateOrConnectWithoutCountryInput | ProjectCountriesCreateOrConnectWithoutCountryInput[]
    createMany?: ProjectCountriesCreateManyCountryInputEnvelope
    connect?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
  }

  export type SplitterCreateNestedManyWithoutCountryInput = {
    create?: XOR<SplitterCreateWithoutCountryInput, SplitterUncheckedCreateWithoutCountryInput> | SplitterCreateWithoutCountryInput[] | SplitterUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: SplitterCreateOrConnectWithoutCountryInput | SplitterCreateOrConnectWithoutCountryInput[]
    createMany?: SplitterCreateManyCountryInputEnvelope
    connect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
  }

  export type ProjectCountriesUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<ProjectCountriesCreateWithoutCountryInput, ProjectCountriesUncheckedCreateWithoutCountryInput> | ProjectCountriesCreateWithoutCountryInput[] | ProjectCountriesUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ProjectCountriesCreateOrConnectWithoutCountryInput | ProjectCountriesCreateOrConnectWithoutCountryInput[]
    createMany?: ProjectCountriesCreateManyCountryInputEnvelope
    connect?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
  }

  export type SplitterUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<SplitterCreateWithoutCountryInput, SplitterUncheckedCreateWithoutCountryInput> | SplitterCreateWithoutCountryInput[] | SplitterUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: SplitterCreateOrConnectWithoutCountryInput | SplitterCreateOrConnectWithoutCountryInput[]
    createMany?: SplitterCreateManyCountryInputEnvelope
    connect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectCountriesUpdateManyWithoutCountryNestedInput = {
    create?: XOR<ProjectCountriesCreateWithoutCountryInput, ProjectCountriesUncheckedCreateWithoutCountryInput> | ProjectCountriesCreateWithoutCountryInput[] | ProjectCountriesUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ProjectCountriesCreateOrConnectWithoutCountryInput | ProjectCountriesCreateOrConnectWithoutCountryInput[]
    upsert?: ProjectCountriesUpsertWithWhereUniqueWithoutCountryInput | ProjectCountriesUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: ProjectCountriesCreateManyCountryInputEnvelope
    set?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
    disconnect?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
    delete?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
    connect?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
    update?: ProjectCountriesUpdateWithWhereUniqueWithoutCountryInput | ProjectCountriesUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: ProjectCountriesUpdateManyWithWhereWithoutCountryInput | ProjectCountriesUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: ProjectCountriesScalarWhereInput | ProjectCountriesScalarWhereInput[]
  }

  export type SplitterUpdateManyWithoutCountryNestedInput = {
    create?: XOR<SplitterCreateWithoutCountryInput, SplitterUncheckedCreateWithoutCountryInput> | SplitterCreateWithoutCountryInput[] | SplitterUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: SplitterCreateOrConnectWithoutCountryInput | SplitterCreateOrConnectWithoutCountryInput[]
    upsert?: SplitterUpsertWithWhereUniqueWithoutCountryInput | SplitterUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: SplitterCreateManyCountryInputEnvelope
    set?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    disconnect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    delete?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    connect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    update?: SplitterUpdateWithWhereUniqueWithoutCountryInput | SplitterUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: SplitterUpdateManyWithWhereWithoutCountryInput | SplitterUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: SplitterScalarWhereInput | SplitterScalarWhereInput[]
  }

  export type ProjectCountriesUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<ProjectCountriesCreateWithoutCountryInput, ProjectCountriesUncheckedCreateWithoutCountryInput> | ProjectCountriesCreateWithoutCountryInput[] | ProjectCountriesUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ProjectCountriesCreateOrConnectWithoutCountryInput | ProjectCountriesCreateOrConnectWithoutCountryInput[]
    upsert?: ProjectCountriesUpsertWithWhereUniqueWithoutCountryInput | ProjectCountriesUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: ProjectCountriesCreateManyCountryInputEnvelope
    set?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
    disconnect?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
    delete?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
    connect?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
    update?: ProjectCountriesUpdateWithWhereUniqueWithoutCountryInput | ProjectCountriesUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: ProjectCountriesUpdateManyWithWhereWithoutCountryInput | ProjectCountriesUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: ProjectCountriesScalarWhereInput | ProjectCountriesScalarWhereInput[]
  }

  export type SplitterUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<SplitterCreateWithoutCountryInput, SplitterUncheckedCreateWithoutCountryInput> | SplitterCreateWithoutCountryInput[] | SplitterUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: SplitterCreateOrConnectWithoutCountryInput | SplitterCreateOrConnectWithoutCountryInput[]
    upsert?: SplitterUpsertWithWhereUniqueWithoutCountryInput | SplitterUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: SplitterCreateManyCountryInputEnvelope
    set?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    disconnect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    delete?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    connect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    update?: SplitterUpdateWithWhereUniqueWithoutCountryInput | SplitterUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: SplitterUpdateManyWithWhereWithoutCountryInput | SplitterUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: SplitterScalarWhereInput | SplitterScalarWhereInput[]
  }

  export type SplitCreateNestedOneWithoutLinkInput = {
    create?: XOR<SplitCreateWithoutLinkInput, SplitUncheckedCreateWithoutLinkInput>
    connectOrCreate?: SplitCreateOrConnectWithoutLinkInput
    connect?: SplitWhereUniqueInput
  }

  export type LinkTypeCreateNestedOneWithoutLinkInput = {
    create?: XOR<LinkTypeCreateWithoutLinkInput, LinkTypeUncheckedCreateWithoutLinkInput>
    connectOrCreate?: LinkTypeCreateOrConnectWithoutLinkInput
    connect?: LinkTypeWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SplitUpdateOneRequiredWithoutLinkNestedInput = {
    create?: XOR<SplitCreateWithoutLinkInput, SplitUncheckedCreateWithoutLinkInput>
    connectOrCreate?: SplitCreateOrConnectWithoutLinkInput
    upsert?: SplitUpsertWithoutLinkInput
    connect?: SplitWhereUniqueInput
    update?: XOR<XOR<SplitUpdateToOneWithWhereWithoutLinkInput, SplitUpdateWithoutLinkInput>, SplitUncheckedUpdateWithoutLinkInput>
  }

  export type LinkTypeUpdateOneRequiredWithoutLinkNestedInput = {
    create?: XOR<LinkTypeCreateWithoutLinkInput, LinkTypeUncheckedCreateWithoutLinkInput>
    connectOrCreate?: LinkTypeCreateOrConnectWithoutLinkInput
    upsert?: LinkTypeUpsertWithoutLinkInput
    connect?: LinkTypeWhereUniqueInput
    update?: XOR<XOR<LinkTypeUpdateToOneWithWhereWithoutLinkInput, LinkTypeUpdateWithoutLinkInput>, LinkTypeUncheckedUpdateWithoutLinkInput>
  }

  export type LinkCreateNestedManyWithoutLinkTypeInput = {
    create?: XOR<LinkCreateWithoutLinkTypeInput, LinkUncheckedCreateWithoutLinkTypeInput> | LinkCreateWithoutLinkTypeInput[] | LinkUncheckedCreateWithoutLinkTypeInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutLinkTypeInput | LinkCreateOrConnectWithoutLinkTypeInput[]
    createMany?: LinkCreateManyLinkTypeInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type LinkUncheckedCreateNestedManyWithoutLinkTypeInput = {
    create?: XOR<LinkCreateWithoutLinkTypeInput, LinkUncheckedCreateWithoutLinkTypeInput> | LinkCreateWithoutLinkTypeInput[] | LinkUncheckedCreateWithoutLinkTypeInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutLinkTypeInput | LinkCreateOrConnectWithoutLinkTypeInput[]
    createMany?: LinkCreateManyLinkTypeInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type LinkUpdateManyWithoutLinkTypeNestedInput = {
    create?: XOR<LinkCreateWithoutLinkTypeInput, LinkUncheckedCreateWithoutLinkTypeInput> | LinkCreateWithoutLinkTypeInput[] | LinkUncheckedCreateWithoutLinkTypeInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutLinkTypeInput | LinkCreateOrConnectWithoutLinkTypeInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutLinkTypeInput | LinkUpsertWithWhereUniqueWithoutLinkTypeInput[]
    createMany?: LinkCreateManyLinkTypeInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutLinkTypeInput | LinkUpdateWithWhereUniqueWithoutLinkTypeInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutLinkTypeInput | LinkUpdateManyWithWhereWithoutLinkTypeInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type LinkUncheckedUpdateManyWithoutLinkTypeNestedInput = {
    create?: XOR<LinkCreateWithoutLinkTypeInput, LinkUncheckedCreateWithoutLinkTypeInput> | LinkCreateWithoutLinkTypeInput[] | LinkUncheckedCreateWithoutLinkTypeInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutLinkTypeInput | LinkCreateOrConnectWithoutLinkTypeInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutLinkTypeInput | LinkUpsertWithWhereUniqueWithoutLinkTypeInput[]
    createMany?: LinkCreateManyLinkTypeInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutLinkTypeInput | LinkUpdateWithWhereUniqueWithoutLinkTypeInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutLinkTypeInput | LinkUpdateManyWithWhereWithoutLinkTypeInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCountriesCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectCountriesCreateWithoutProjectInput, ProjectCountriesUncheckedCreateWithoutProjectInput> | ProjectCountriesCreateWithoutProjectInput[] | ProjectCountriesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCountriesCreateOrConnectWithoutProjectInput | ProjectCountriesCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectCountriesCreateManyProjectInputEnvelope
    connect?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
  }

  export type SplitterCreateNestedManyWithoutProjectInput = {
    create?: XOR<SplitterCreateWithoutProjectInput, SplitterUncheckedCreateWithoutProjectInput> | SplitterCreateWithoutProjectInput[] | SplitterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SplitterCreateOrConnectWithoutProjectInput | SplitterCreateOrConnectWithoutProjectInput[]
    createMany?: SplitterCreateManyProjectInputEnvelope
    connect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
  }

  export type ProjectCountriesUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectCountriesCreateWithoutProjectInput, ProjectCountriesUncheckedCreateWithoutProjectInput> | ProjectCountriesCreateWithoutProjectInput[] | ProjectCountriesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCountriesCreateOrConnectWithoutProjectInput | ProjectCountriesCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectCountriesCreateManyProjectInputEnvelope
    connect?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
  }

  export type SplitterUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<SplitterCreateWithoutProjectInput, SplitterUncheckedCreateWithoutProjectInput> | SplitterCreateWithoutProjectInput[] | SplitterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SplitterCreateOrConnectWithoutProjectInput | SplitterCreateOrConnectWithoutProjectInput[]
    createMany?: SplitterCreateManyProjectInputEnvelope
    connect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    upsert?: UserUpsertWithoutProjectInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectInput, UserUpdateWithoutProjectInput>, UserUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCountriesUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectCountriesCreateWithoutProjectInput, ProjectCountriesUncheckedCreateWithoutProjectInput> | ProjectCountriesCreateWithoutProjectInput[] | ProjectCountriesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCountriesCreateOrConnectWithoutProjectInput | ProjectCountriesCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectCountriesUpsertWithWhereUniqueWithoutProjectInput | ProjectCountriesUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectCountriesCreateManyProjectInputEnvelope
    set?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
    disconnect?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
    delete?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
    connect?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
    update?: ProjectCountriesUpdateWithWhereUniqueWithoutProjectInput | ProjectCountriesUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectCountriesUpdateManyWithWhereWithoutProjectInput | ProjectCountriesUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectCountriesScalarWhereInput | ProjectCountriesScalarWhereInput[]
  }

  export type SplitterUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SplitterCreateWithoutProjectInput, SplitterUncheckedCreateWithoutProjectInput> | SplitterCreateWithoutProjectInput[] | SplitterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SplitterCreateOrConnectWithoutProjectInput | SplitterCreateOrConnectWithoutProjectInput[]
    upsert?: SplitterUpsertWithWhereUniqueWithoutProjectInput | SplitterUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SplitterCreateManyProjectInputEnvelope
    set?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    disconnect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    delete?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    connect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    update?: SplitterUpdateWithWhereUniqueWithoutProjectInput | SplitterUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SplitterUpdateManyWithWhereWithoutProjectInput | SplitterUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SplitterScalarWhereInput | SplitterScalarWhereInput[]
  }

  export type ProjectCountriesUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectCountriesCreateWithoutProjectInput, ProjectCountriesUncheckedCreateWithoutProjectInput> | ProjectCountriesCreateWithoutProjectInput[] | ProjectCountriesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCountriesCreateOrConnectWithoutProjectInput | ProjectCountriesCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectCountriesUpsertWithWhereUniqueWithoutProjectInput | ProjectCountriesUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectCountriesCreateManyProjectInputEnvelope
    set?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
    disconnect?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
    delete?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
    connect?: ProjectCountriesWhereUniqueInput | ProjectCountriesWhereUniqueInput[]
    update?: ProjectCountriesUpdateWithWhereUniqueWithoutProjectInput | ProjectCountriesUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectCountriesUpdateManyWithWhereWithoutProjectInput | ProjectCountriesUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectCountriesScalarWhereInput | ProjectCountriesScalarWhereInput[]
  }

  export type SplitterUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SplitterCreateWithoutProjectInput, SplitterUncheckedCreateWithoutProjectInput> | SplitterCreateWithoutProjectInput[] | SplitterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SplitterCreateOrConnectWithoutProjectInput | SplitterCreateOrConnectWithoutProjectInput[]
    upsert?: SplitterUpsertWithWhereUniqueWithoutProjectInput | SplitterUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SplitterCreateManyProjectInputEnvelope
    set?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    disconnect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    delete?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    connect?: SplitterWhereUniqueInput | SplitterWhereUniqueInput[]
    update?: SplitterUpdateWithWhereUniqueWithoutProjectInput | SplitterUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SplitterUpdateManyWithWhereWithoutProjectInput | SplitterUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SplitterScalarWhereInput | SplitterScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutProjectCountriesInput = {
    create?: XOR<CountryCreateWithoutProjectCountriesInput, CountryUncheckedCreateWithoutProjectCountriesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutProjectCountriesInput
    connect?: CountryWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutProjectCountriesInput = {
    create?: XOR<ProjectCreateWithoutProjectCountriesInput, ProjectUncheckedCreateWithoutProjectCountriesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectCountriesInput
    connect?: ProjectWhereUniqueInput
  }

  export type CountryUpdateOneRequiredWithoutProjectCountriesNestedInput = {
    create?: XOR<CountryCreateWithoutProjectCountriesInput, CountryUncheckedCreateWithoutProjectCountriesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutProjectCountriesInput
    upsert?: CountryUpsertWithoutProjectCountriesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutProjectCountriesInput, CountryUpdateWithoutProjectCountriesInput>, CountryUncheckedUpdateWithoutProjectCountriesInput>
  }

  export type ProjectUpdateOneRequiredWithoutProjectCountriesNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectCountriesInput, ProjectUncheckedCreateWithoutProjectCountriesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectCountriesInput
    upsert?: ProjectUpsertWithoutProjectCountriesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectCountriesInput, ProjectUpdateWithoutProjectCountriesInput>, ProjectUncheckedUpdateWithoutProjectCountriesInput>
  }

  export type LinkCreateNestedManyWithoutSplitInput = {
    create?: XOR<LinkCreateWithoutSplitInput, LinkUncheckedCreateWithoutSplitInput> | LinkCreateWithoutSplitInput[] | LinkUncheckedCreateWithoutSplitInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutSplitInput | LinkCreateOrConnectWithoutSplitInput[]
    createMany?: LinkCreateManySplitInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type SplitterCreateNestedOneWithoutSplitInput = {
    create?: XOR<SplitterCreateWithoutSplitInput, SplitterUncheckedCreateWithoutSplitInput>
    connectOrCreate?: SplitterCreateOrConnectWithoutSplitInput
    connect?: SplitterWhereUniqueInput
  }

  export type LinkUncheckedCreateNestedManyWithoutSplitInput = {
    create?: XOR<LinkCreateWithoutSplitInput, LinkUncheckedCreateWithoutSplitInput> | LinkCreateWithoutSplitInput[] | LinkUncheckedCreateWithoutSplitInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutSplitInput | LinkCreateOrConnectWithoutSplitInput[]
    createMany?: LinkCreateManySplitInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type LinkUpdateManyWithoutSplitNestedInput = {
    create?: XOR<LinkCreateWithoutSplitInput, LinkUncheckedCreateWithoutSplitInput> | LinkCreateWithoutSplitInput[] | LinkUncheckedCreateWithoutSplitInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutSplitInput | LinkCreateOrConnectWithoutSplitInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutSplitInput | LinkUpsertWithWhereUniqueWithoutSplitInput[]
    createMany?: LinkCreateManySplitInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutSplitInput | LinkUpdateWithWhereUniqueWithoutSplitInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutSplitInput | LinkUpdateManyWithWhereWithoutSplitInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type SplitterUpdateOneRequiredWithoutSplitNestedInput = {
    create?: XOR<SplitterCreateWithoutSplitInput, SplitterUncheckedCreateWithoutSplitInput>
    connectOrCreate?: SplitterCreateOrConnectWithoutSplitInput
    upsert?: SplitterUpsertWithoutSplitInput
    connect?: SplitterWhereUniqueInput
    update?: XOR<XOR<SplitterUpdateToOneWithWhereWithoutSplitInput, SplitterUpdateWithoutSplitInput>, SplitterUncheckedUpdateWithoutSplitInput>
  }

  export type LinkUncheckedUpdateManyWithoutSplitNestedInput = {
    create?: XOR<LinkCreateWithoutSplitInput, LinkUncheckedCreateWithoutSplitInput> | LinkCreateWithoutSplitInput[] | LinkUncheckedCreateWithoutSplitInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutSplitInput | LinkCreateOrConnectWithoutSplitInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutSplitInput | LinkUpsertWithWhereUniqueWithoutSplitInput[]
    createMany?: LinkCreateManySplitInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutSplitInput | LinkUpdateWithWhereUniqueWithoutSplitInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutSplitInput | LinkUpdateManyWithWhereWithoutSplitInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type SplitCreateNestedManyWithoutSplitterInput = {
    create?: XOR<SplitCreateWithoutSplitterInput, SplitUncheckedCreateWithoutSplitterInput> | SplitCreateWithoutSplitterInput[] | SplitUncheckedCreateWithoutSplitterInput[]
    connectOrCreate?: SplitCreateOrConnectWithoutSplitterInput | SplitCreateOrConnectWithoutSplitterInput[]
    createMany?: SplitCreateManySplitterInputEnvelope
    connect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutSplitterInput = {
    create?: XOR<CategoryCreateWithoutSplitterInput, CategoryUncheckedCreateWithoutSplitterInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSplitterInput
    connect?: CategoryWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutSplitterInput = {
    create?: XOR<CountryCreateWithoutSplitterInput, CountryUncheckedCreateWithoutSplitterInput>
    connectOrCreate?: CountryCreateOrConnectWithoutSplitterInput
    connect?: CountryWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutSplitterInput = {
    create?: XOR<ProjectCreateWithoutSplitterInput, ProjectUncheckedCreateWithoutSplitterInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSplitterInput
    connect?: ProjectWhereUniqueInput
  }

  export type SplitUncheckedCreateNestedManyWithoutSplitterInput = {
    create?: XOR<SplitCreateWithoutSplitterInput, SplitUncheckedCreateWithoutSplitterInput> | SplitCreateWithoutSplitterInput[] | SplitUncheckedCreateWithoutSplitterInput[]
    connectOrCreate?: SplitCreateOrConnectWithoutSplitterInput | SplitCreateOrConnectWithoutSplitterInput[]
    createMany?: SplitCreateManySplitterInputEnvelope
    connect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
  }

  export type SplitUpdateManyWithoutSplitterNestedInput = {
    create?: XOR<SplitCreateWithoutSplitterInput, SplitUncheckedCreateWithoutSplitterInput> | SplitCreateWithoutSplitterInput[] | SplitUncheckedCreateWithoutSplitterInput[]
    connectOrCreate?: SplitCreateOrConnectWithoutSplitterInput | SplitCreateOrConnectWithoutSplitterInput[]
    upsert?: SplitUpsertWithWhereUniqueWithoutSplitterInput | SplitUpsertWithWhereUniqueWithoutSplitterInput[]
    createMany?: SplitCreateManySplitterInputEnvelope
    set?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    disconnect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    delete?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    connect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    update?: SplitUpdateWithWhereUniqueWithoutSplitterInput | SplitUpdateWithWhereUniqueWithoutSplitterInput[]
    updateMany?: SplitUpdateManyWithWhereWithoutSplitterInput | SplitUpdateManyWithWhereWithoutSplitterInput[]
    deleteMany?: SplitScalarWhereInput | SplitScalarWhereInput[]
  }

  export type CategoryUpdateOneRequiredWithoutSplitterNestedInput = {
    create?: XOR<CategoryCreateWithoutSplitterInput, CategoryUncheckedCreateWithoutSplitterInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSplitterInput
    upsert?: CategoryUpsertWithoutSplitterInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSplitterInput, CategoryUpdateWithoutSplitterInput>, CategoryUncheckedUpdateWithoutSplitterInput>
  }

  export type CountryUpdateOneRequiredWithoutSplitterNestedInput = {
    create?: XOR<CountryCreateWithoutSplitterInput, CountryUncheckedCreateWithoutSplitterInput>
    connectOrCreate?: CountryCreateOrConnectWithoutSplitterInput
    upsert?: CountryUpsertWithoutSplitterInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutSplitterInput, CountryUpdateWithoutSplitterInput>, CountryUncheckedUpdateWithoutSplitterInput>
  }

  export type ProjectUpdateOneRequiredWithoutSplitterNestedInput = {
    create?: XOR<ProjectCreateWithoutSplitterInput, ProjectUncheckedCreateWithoutSplitterInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSplitterInput
    upsert?: ProjectUpsertWithoutSplitterInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSplitterInput, ProjectUpdateWithoutSplitterInput>, ProjectUncheckedUpdateWithoutSplitterInput>
  }

  export type SplitUncheckedUpdateManyWithoutSplitterNestedInput = {
    create?: XOR<SplitCreateWithoutSplitterInput, SplitUncheckedCreateWithoutSplitterInput> | SplitCreateWithoutSplitterInput[] | SplitUncheckedCreateWithoutSplitterInput[]
    connectOrCreate?: SplitCreateOrConnectWithoutSplitterInput | SplitCreateOrConnectWithoutSplitterInput[]
    upsert?: SplitUpsertWithWhereUniqueWithoutSplitterInput | SplitUpsertWithWhereUniqueWithoutSplitterInput[]
    createMany?: SplitCreateManySplitterInputEnvelope
    set?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    disconnect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    delete?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    connect?: SplitWhereUniqueInput | SplitWhereUniqueInput[]
    update?: SplitUpdateWithWhereUniqueWithoutSplitterInput | SplitUpdateWithWhereUniqueWithoutSplitterInput[]
    updateMany?: SplitUpdateManyWithWhereWithoutSplitterInput | SplitUpdateManyWithWhereWithoutSplitterInput[]
    deleteMany?: SplitScalarWhereInput | SplitScalarWhereInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SplitterCreateWithoutCategoryInput = {
    uuid: string
    Split?: SplitCreateNestedManyWithoutSplitterInput
    Country: CountryCreateNestedOneWithoutSplitterInput
    Project: ProjectCreateNestedOneWithoutSplitterInput
  }

  export type SplitterUncheckedCreateWithoutCategoryInput = {
    id?: number
    uuid: string
    projectId: number
    countryId: number
    Split?: SplitUncheckedCreateNestedManyWithoutSplitterInput
  }

  export type SplitterCreateOrConnectWithoutCategoryInput = {
    where: SplitterWhereUniqueInput
    create: XOR<SplitterCreateWithoutCategoryInput, SplitterUncheckedCreateWithoutCategoryInput>
  }

  export type SplitterCreateManyCategoryInputEnvelope = {
    data: SplitterCreateManyCategoryInput | SplitterCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SplitterUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SplitterWhereUniqueInput
    update: XOR<SplitterUpdateWithoutCategoryInput, SplitterUncheckedUpdateWithoutCategoryInput>
    create: XOR<SplitterCreateWithoutCategoryInput, SplitterUncheckedCreateWithoutCategoryInput>
  }

  export type SplitterUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SplitterWhereUniqueInput
    data: XOR<SplitterUpdateWithoutCategoryInput, SplitterUncheckedUpdateWithoutCategoryInput>
  }

  export type SplitterUpdateManyWithWhereWithoutCategoryInput = {
    where: SplitterScalarWhereInput
    data: XOR<SplitterUpdateManyMutationInput, SplitterUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SplitterScalarWhereInput = {
    AND?: SplitterScalarWhereInput | SplitterScalarWhereInput[]
    OR?: SplitterScalarWhereInput[]
    NOT?: SplitterScalarWhereInput | SplitterScalarWhereInput[]
    id?: IntFilter<"Splitter"> | number
    uuid?: StringFilter<"Splitter"> | string
    projectId?: IntFilter<"Splitter"> | number
    categoryId?: IntFilter<"Splitter"> | number
    countryId?: IntFilter<"Splitter"> | number
  }

  export type ProjectCountriesCreateWithoutCountryInput = {
    pixelId: string
    capiToken: string
    Project: ProjectCreateNestedOneWithoutProjectCountriesInput
  }

  export type ProjectCountriesUncheckedCreateWithoutCountryInput = {
    id?: number
    projectId: number
    pixelId: string
    capiToken: string
  }

  export type ProjectCountriesCreateOrConnectWithoutCountryInput = {
    where: ProjectCountriesWhereUniqueInput
    create: XOR<ProjectCountriesCreateWithoutCountryInput, ProjectCountriesUncheckedCreateWithoutCountryInput>
  }

  export type ProjectCountriesCreateManyCountryInputEnvelope = {
    data: ProjectCountriesCreateManyCountryInput | ProjectCountriesCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type SplitterCreateWithoutCountryInput = {
    uuid: string
    Split?: SplitCreateNestedManyWithoutSplitterInput
    Category: CategoryCreateNestedOneWithoutSplitterInput
    Project: ProjectCreateNestedOneWithoutSplitterInput
  }

  export type SplitterUncheckedCreateWithoutCountryInput = {
    id?: number
    uuid: string
    projectId: number
    categoryId: number
    Split?: SplitUncheckedCreateNestedManyWithoutSplitterInput
  }

  export type SplitterCreateOrConnectWithoutCountryInput = {
    where: SplitterWhereUniqueInput
    create: XOR<SplitterCreateWithoutCountryInput, SplitterUncheckedCreateWithoutCountryInput>
  }

  export type SplitterCreateManyCountryInputEnvelope = {
    data: SplitterCreateManyCountryInput | SplitterCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCountriesUpsertWithWhereUniqueWithoutCountryInput = {
    where: ProjectCountriesWhereUniqueInput
    update: XOR<ProjectCountriesUpdateWithoutCountryInput, ProjectCountriesUncheckedUpdateWithoutCountryInput>
    create: XOR<ProjectCountriesCreateWithoutCountryInput, ProjectCountriesUncheckedCreateWithoutCountryInput>
  }

  export type ProjectCountriesUpdateWithWhereUniqueWithoutCountryInput = {
    where: ProjectCountriesWhereUniqueInput
    data: XOR<ProjectCountriesUpdateWithoutCountryInput, ProjectCountriesUncheckedUpdateWithoutCountryInput>
  }

  export type ProjectCountriesUpdateManyWithWhereWithoutCountryInput = {
    where: ProjectCountriesScalarWhereInput
    data: XOR<ProjectCountriesUpdateManyMutationInput, ProjectCountriesUncheckedUpdateManyWithoutCountryInput>
  }

  export type ProjectCountriesScalarWhereInput = {
    AND?: ProjectCountriesScalarWhereInput | ProjectCountriesScalarWhereInput[]
    OR?: ProjectCountriesScalarWhereInput[]
    NOT?: ProjectCountriesScalarWhereInput | ProjectCountriesScalarWhereInput[]
    id?: IntFilter<"ProjectCountries"> | number
    projectId?: IntFilter<"ProjectCountries"> | number
    countryId?: IntFilter<"ProjectCountries"> | number
    pixelId?: StringFilter<"ProjectCountries"> | string
    capiToken?: StringFilter<"ProjectCountries"> | string
  }

  export type SplitterUpsertWithWhereUniqueWithoutCountryInput = {
    where: SplitterWhereUniqueInput
    update: XOR<SplitterUpdateWithoutCountryInput, SplitterUncheckedUpdateWithoutCountryInput>
    create: XOR<SplitterCreateWithoutCountryInput, SplitterUncheckedCreateWithoutCountryInput>
  }

  export type SplitterUpdateWithWhereUniqueWithoutCountryInput = {
    where: SplitterWhereUniqueInput
    data: XOR<SplitterUpdateWithoutCountryInput, SplitterUncheckedUpdateWithoutCountryInput>
  }

  export type SplitterUpdateManyWithWhereWithoutCountryInput = {
    where: SplitterScalarWhereInput
    data: XOR<SplitterUpdateManyMutationInput, SplitterUncheckedUpdateManyWithoutCountryInput>
  }

  export type SplitCreateWithoutLinkInput = {
    redirectSlug: string
    Splitter: SplitterCreateNestedOneWithoutSplitInput
  }

  export type SplitUncheckedCreateWithoutLinkInput = {
    id?: number
    redirectSlug: string
    splitterId: number
  }

  export type SplitCreateOrConnectWithoutLinkInput = {
    where: SplitWhereUniqueInput
    create: XOR<SplitCreateWithoutLinkInput, SplitUncheckedCreateWithoutLinkInput>
  }

  export type LinkTypeCreateWithoutLinkInput = {
    name: string
  }

  export type LinkTypeUncheckedCreateWithoutLinkInput = {
    id?: number
    name: string
  }

  export type LinkTypeCreateOrConnectWithoutLinkInput = {
    where: LinkTypeWhereUniqueInput
    create: XOR<LinkTypeCreateWithoutLinkInput, LinkTypeUncheckedCreateWithoutLinkInput>
  }

  export type SplitUpsertWithoutLinkInput = {
    update: XOR<SplitUpdateWithoutLinkInput, SplitUncheckedUpdateWithoutLinkInput>
    create: XOR<SplitCreateWithoutLinkInput, SplitUncheckedCreateWithoutLinkInput>
    where?: SplitWhereInput
  }

  export type SplitUpdateToOneWithWhereWithoutLinkInput = {
    where?: SplitWhereInput
    data: XOR<SplitUpdateWithoutLinkInput, SplitUncheckedUpdateWithoutLinkInput>
  }

  export type SplitUpdateWithoutLinkInput = {
    redirectSlug?: StringFieldUpdateOperationsInput | string
    Splitter?: SplitterUpdateOneRequiredWithoutSplitNestedInput
  }

  export type SplitUncheckedUpdateWithoutLinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    redirectSlug?: StringFieldUpdateOperationsInput | string
    splitterId?: IntFieldUpdateOperationsInput | number
  }

  export type LinkTypeUpsertWithoutLinkInput = {
    update: XOR<LinkTypeUpdateWithoutLinkInput, LinkTypeUncheckedUpdateWithoutLinkInput>
    create: XOR<LinkTypeCreateWithoutLinkInput, LinkTypeUncheckedCreateWithoutLinkInput>
    where?: LinkTypeWhereInput
  }

  export type LinkTypeUpdateToOneWithWhereWithoutLinkInput = {
    where?: LinkTypeWhereInput
    data: XOR<LinkTypeUpdateWithoutLinkInput, LinkTypeUncheckedUpdateWithoutLinkInput>
  }

  export type LinkTypeUpdateWithoutLinkInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LinkTypeUncheckedUpdateWithoutLinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LinkCreateWithoutLinkTypeInput = {
    url: string
    prob: number
    ecpm: number
    hidden?: boolean
    Split: SplitCreateNestedOneWithoutLinkInput
  }

  export type LinkUncheckedCreateWithoutLinkTypeInput = {
    id?: number
    splitId: number
    url: string
    prob: number
    ecpm: number
    hidden?: boolean
  }

  export type LinkCreateOrConnectWithoutLinkTypeInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutLinkTypeInput, LinkUncheckedCreateWithoutLinkTypeInput>
  }

  export type LinkCreateManyLinkTypeInputEnvelope = {
    data: LinkCreateManyLinkTypeInput | LinkCreateManyLinkTypeInput[]
    skipDuplicates?: boolean
  }

  export type LinkUpsertWithWhereUniqueWithoutLinkTypeInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutLinkTypeInput, LinkUncheckedUpdateWithoutLinkTypeInput>
    create: XOR<LinkCreateWithoutLinkTypeInput, LinkUncheckedCreateWithoutLinkTypeInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutLinkTypeInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutLinkTypeInput, LinkUncheckedUpdateWithoutLinkTypeInput>
  }

  export type LinkUpdateManyWithWhereWithoutLinkTypeInput = {
    where: LinkScalarWhereInput
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyWithoutLinkTypeInput>
  }

  export type LinkScalarWhereInput = {
    AND?: LinkScalarWhereInput | LinkScalarWhereInput[]
    OR?: LinkScalarWhereInput[]
    NOT?: LinkScalarWhereInput | LinkScalarWhereInput[]
    id?: IntFilter<"Link"> | number
    splitId?: IntFilter<"Link"> | number
    url?: StringFilter<"Link"> | string
    type?: IntFilter<"Link"> | number
    prob?: FloatFilter<"Link"> | number
    ecpm?: FloatFilter<"Link"> | number
    hidden?: BoolFilter<"Link"> | boolean
  }

  export type UserCreateWithoutProjectInput = {
    name: string
    password: string
    role: string
  }

  export type UserUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    password: string
    role: string
  }

  export type UserCreateOrConnectWithoutProjectInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
  }

  export type ProjectCountriesCreateWithoutProjectInput = {
    pixelId: string
    capiToken: string
    Country: CountryCreateNestedOneWithoutProjectCountriesInput
  }

  export type ProjectCountriesUncheckedCreateWithoutProjectInput = {
    id?: number
    countryId: number
    pixelId: string
    capiToken: string
  }

  export type ProjectCountriesCreateOrConnectWithoutProjectInput = {
    where: ProjectCountriesWhereUniqueInput
    create: XOR<ProjectCountriesCreateWithoutProjectInput, ProjectCountriesUncheckedCreateWithoutProjectInput>
  }

  export type ProjectCountriesCreateManyProjectInputEnvelope = {
    data: ProjectCountriesCreateManyProjectInput | ProjectCountriesCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type SplitterCreateWithoutProjectInput = {
    uuid: string
    Split?: SplitCreateNestedManyWithoutSplitterInput
    Category: CategoryCreateNestedOneWithoutSplitterInput
    Country: CountryCreateNestedOneWithoutSplitterInput
  }

  export type SplitterUncheckedCreateWithoutProjectInput = {
    id?: number
    uuid: string
    categoryId: number
    countryId: number
    Split?: SplitUncheckedCreateNestedManyWithoutSplitterInput
  }

  export type SplitterCreateOrConnectWithoutProjectInput = {
    where: SplitterWhereUniqueInput
    create: XOR<SplitterCreateWithoutProjectInput, SplitterUncheckedCreateWithoutProjectInput>
  }

  export type SplitterCreateManyProjectInputEnvelope = {
    data: SplitterCreateManyProjectInput | SplitterCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectInput = {
    update: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCountriesUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectCountriesWhereUniqueInput
    update: XOR<ProjectCountriesUpdateWithoutProjectInput, ProjectCountriesUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectCountriesCreateWithoutProjectInput, ProjectCountriesUncheckedCreateWithoutProjectInput>
  }

  export type ProjectCountriesUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectCountriesWhereUniqueInput
    data: XOR<ProjectCountriesUpdateWithoutProjectInput, ProjectCountriesUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCountriesUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectCountriesScalarWhereInput
    data: XOR<ProjectCountriesUpdateManyMutationInput, ProjectCountriesUncheckedUpdateManyWithoutProjectInput>
  }

  export type SplitterUpsertWithWhereUniqueWithoutProjectInput = {
    where: SplitterWhereUniqueInput
    update: XOR<SplitterUpdateWithoutProjectInput, SplitterUncheckedUpdateWithoutProjectInput>
    create: XOR<SplitterCreateWithoutProjectInput, SplitterUncheckedCreateWithoutProjectInput>
  }

  export type SplitterUpdateWithWhereUniqueWithoutProjectInput = {
    where: SplitterWhereUniqueInput
    data: XOR<SplitterUpdateWithoutProjectInput, SplitterUncheckedUpdateWithoutProjectInput>
  }

  export type SplitterUpdateManyWithWhereWithoutProjectInput = {
    where: SplitterScalarWhereInput
    data: XOR<SplitterUpdateManyMutationInput, SplitterUncheckedUpdateManyWithoutProjectInput>
  }

  export type CountryCreateWithoutProjectCountriesInput = {
    name: string
    redirectMessage: string
    icon?: string | null
    Splitter?: SplitterCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutProjectCountriesInput = {
    id?: number
    name: string
    redirectMessage: string
    icon?: string | null
    Splitter?: SplitterUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutProjectCountriesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutProjectCountriesInput, CountryUncheckedCreateWithoutProjectCountriesInput>
  }

  export type ProjectCreateWithoutProjectCountriesInput = {
    uuid: string
    name: string
    description: string
    icon: string
    User: UserCreateNestedOneWithoutProjectInput
    Splitter?: SplitterCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectCountriesInput = {
    id?: number
    uuid: string
    userId: number
    name: string
    description: string
    icon: string
    Splitter?: SplitterUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectCountriesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectCountriesInput, ProjectUncheckedCreateWithoutProjectCountriesInput>
  }

  export type CountryUpsertWithoutProjectCountriesInput = {
    update: XOR<CountryUpdateWithoutProjectCountriesInput, CountryUncheckedUpdateWithoutProjectCountriesInput>
    create: XOR<CountryCreateWithoutProjectCountriesInput, CountryUncheckedCreateWithoutProjectCountriesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutProjectCountriesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutProjectCountriesInput, CountryUncheckedUpdateWithoutProjectCountriesInput>
  }

  export type CountryUpdateWithoutProjectCountriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    redirectMessage?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    Splitter?: SplitterUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutProjectCountriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    redirectMessage?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    Splitter?: SplitterUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type ProjectUpsertWithoutProjectCountriesInput = {
    update: XOR<ProjectUpdateWithoutProjectCountriesInput, ProjectUncheckedUpdateWithoutProjectCountriesInput>
    create: XOR<ProjectCreateWithoutProjectCountriesInput, ProjectUncheckedCreateWithoutProjectCountriesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectCountriesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectCountriesInput, ProjectUncheckedUpdateWithoutProjectCountriesInput>
  }

  export type ProjectUpdateWithoutProjectCountriesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutProjectNestedInput
    Splitter?: SplitterUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectCountriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    Splitter?: SplitterUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type LinkCreateWithoutSplitInput = {
    url: string
    prob: number
    ecpm: number
    hidden?: boolean
    LinkType: LinkTypeCreateNestedOneWithoutLinkInput
  }

  export type LinkUncheckedCreateWithoutSplitInput = {
    id?: number
    url: string
    type: number
    prob: number
    ecpm: number
    hidden?: boolean
  }

  export type LinkCreateOrConnectWithoutSplitInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutSplitInput, LinkUncheckedCreateWithoutSplitInput>
  }

  export type LinkCreateManySplitInputEnvelope = {
    data: LinkCreateManySplitInput | LinkCreateManySplitInput[]
    skipDuplicates?: boolean
  }

  export type SplitterCreateWithoutSplitInput = {
    uuid: string
    Category: CategoryCreateNestedOneWithoutSplitterInput
    Country: CountryCreateNestedOneWithoutSplitterInput
    Project: ProjectCreateNestedOneWithoutSplitterInput
  }

  export type SplitterUncheckedCreateWithoutSplitInput = {
    id?: number
    uuid: string
    projectId: number
    categoryId: number
    countryId: number
  }

  export type SplitterCreateOrConnectWithoutSplitInput = {
    where: SplitterWhereUniqueInput
    create: XOR<SplitterCreateWithoutSplitInput, SplitterUncheckedCreateWithoutSplitInput>
  }

  export type LinkUpsertWithWhereUniqueWithoutSplitInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutSplitInput, LinkUncheckedUpdateWithoutSplitInput>
    create: XOR<LinkCreateWithoutSplitInput, LinkUncheckedCreateWithoutSplitInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutSplitInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutSplitInput, LinkUncheckedUpdateWithoutSplitInput>
  }

  export type LinkUpdateManyWithWhereWithoutSplitInput = {
    where: LinkScalarWhereInput
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyWithoutSplitInput>
  }

  export type SplitterUpsertWithoutSplitInput = {
    update: XOR<SplitterUpdateWithoutSplitInput, SplitterUncheckedUpdateWithoutSplitInput>
    create: XOR<SplitterCreateWithoutSplitInput, SplitterUncheckedCreateWithoutSplitInput>
    where?: SplitterWhereInput
  }

  export type SplitterUpdateToOneWithWhereWithoutSplitInput = {
    where?: SplitterWhereInput
    data: XOR<SplitterUpdateWithoutSplitInput, SplitterUncheckedUpdateWithoutSplitInput>
  }

  export type SplitterUpdateWithoutSplitInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUpdateOneRequiredWithoutSplitterNestedInput
    Country?: CountryUpdateOneRequiredWithoutSplitterNestedInput
    Project?: ProjectUpdateOneRequiredWithoutSplitterNestedInput
  }

  export type SplitterUncheckedUpdateWithoutSplitInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type SplitCreateWithoutSplitterInput = {
    redirectSlug: string
    Link?: LinkCreateNestedManyWithoutSplitInput
  }

  export type SplitUncheckedCreateWithoutSplitterInput = {
    id?: number
    redirectSlug: string
    Link?: LinkUncheckedCreateNestedManyWithoutSplitInput
  }

  export type SplitCreateOrConnectWithoutSplitterInput = {
    where: SplitWhereUniqueInput
    create: XOR<SplitCreateWithoutSplitterInput, SplitUncheckedCreateWithoutSplitterInput>
  }

  export type SplitCreateManySplitterInputEnvelope = {
    data: SplitCreateManySplitterInput | SplitCreateManySplitterInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutSplitterInput = {
    name: string
    description: string
  }

  export type CategoryUncheckedCreateWithoutSplitterInput = {
    id?: number
    name: string
    description: string
  }

  export type CategoryCreateOrConnectWithoutSplitterInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSplitterInput, CategoryUncheckedCreateWithoutSplitterInput>
  }

  export type CountryCreateWithoutSplitterInput = {
    name: string
    redirectMessage: string
    icon?: string | null
    ProjectCountries?: ProjectCountriesCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutSplitterInput = {
    id?: number
    name: string
    redirectMessage: string
    icon?: string | null
    ProjectCountries?: ProjectCountriesUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutSplitterInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutSplitterInput, CountryUncheckedCreateWithoutSplitterInput>
  }

  export type ProjectCreateWithoutSplitterInput = {
    uuid: string
    name: string
    description: string
    icon: string
    User: UserCreateNestedOneWithoutProjectInput
    ProjectCountries?: ProjectCountriesCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSplitterInput = {
    id?: number
    uuid: string
    userId: number
    name: string
    description: string
    icon: string
    ProjectCountries?: ProjectCountriesUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSplitterInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSplitterInput, ProjectUncheckedCreateWithoutSplitterInput>
  }

  export type SplitUpsertWithWhereUniqueWithoutSplitterInput = {
    where: SplitWhereUniqueInput
    update: XOR<SplitUpdateWithoutSplitterInput, SplitUncheckedUpdateWithoutSplitterInput>
    create: XOR<SplitCreateWithoutSplitterInput, SplitUncheckedCreateWithoutSplitterInput>
  }

  export type SplitUpdateWithWhereUniqueWithoutSplitterInput = {
    where: SplitWhereUniqueInput
    data: XOR<SplitUpdateWithoutSplitterInput, SplitUncheckedUpdateWithoutSplitterInput>
  }

  export type SplitUpdateManyWithWhereWithoutSplitterInput = {
    where: SplitScalarWhereInput
    data: XOR<SplitUpdateManyMutationInput, SplitUncheckedUpdateManyWithoutSplitterInput>
  }

  export type SplitScalarWhereInput = {
    AND?: SplitScalarWhereInput | SplitScalarWhereInput[]
    OR?: SplitScalarWhereInput[]
    NOT?: SplitScalarWhereInput | SplitScalarWhereInput[]
    id?: IntFilter<"Split"> | number
    redirectSlug?: StringFilter<"Split"> | string
    splitterId?: IntFilter<"Split"> | number
  }

  export type CategoryUpsertWithoutSplitterInput = {
    update: XOR<CategoryUpdateWithoutSplitterInput, CategoryUncheckedUpdateWithoutSplitterInput>
    create: XOR<CategoryCreateWithoutSplitterInput, CategoryUncheckedCreateWithoutSplitterInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSplitterInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSplitterInput, CategoryUncheckedUpdateWithoutSplitterInput>
  }

  export type CategoryUpdateWithoutSplitterInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutSplitterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUpsertWithoutSplitterInput = {
    update: XOR<CountryUpdateWithoutSplitterInput, CountryUncheckedUpdateWithoutSplitterInput>
    create: XOR<CountryCreateWithoutSplitterInput, CountryUncheckedCreateWithoutSplitterInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutSplitterInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutSplitterInput, CountryUncheckedUpdateWithoutSplitterInput>
  }

  export type CountryUpdateWithoutSplitterInput = {
    name?: StringFieldUpdateOperationsInput | string
    redirectMessage?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectCountries?: ProjectCountriesUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutSplitterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    redirectMessage?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectCountries?: ProjectCountriesUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type ProjectUpsertWithoutSplitterInput = {
    update: XOR<ProjectUpdateWithoutSplitterInput, ProjectUncheckedUpdateWithoutSplitterInput>
    create: XOR<ProjectCreateWithoutSplitterInput, ProjectUncheckedCreateWithoutSplitterInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSplitterInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSplitterInput, ProjectUncheckedUpdateWithoutSplitterInput>
  }

  export type ProjectUpdateWithoutSplitterInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutProjectNestedInput
    ProjectCountries?: ProjectCountriesUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSplitterInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    ProjectCountries?: ProjectCountriesUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutUserInput = {
    uuid: string
    name: string
    description: string
    icon: string
    ProjectCountries?: ProjectCountriesCreateNestedManyWithoutProjectInput
    Splitter?: SplitterCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: number
    uuid: string
    name: string
    description: string
    icon: string
    ProjectCountries?: ProjectCountriesUncheckedCreateNestedManyWithoutProjectInput
    Splitter?: SplitterUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    uuid?: StringFilter<"Project"> | string
    userId?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    icon?: StringFilter<"Project"> | string
  }

  export type SplitterCreateManyCategoryInput = {
    id?: number
    uuid: string
    projectId: number
    countryId: number
  }

  export type SplitterUpdateWithoutCategoryInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    Split?: SplitUpdateManyWithoutSplitterNestedInput
    Country?: CountryUpdateOneRequiredWithoutSplitterNestedInput
    Project?: ProjectUpdateOneRequiredWithoutSplitterNestedInput
  }

  export type SplitterUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    Split?: SplitUncheckedUpdateManyWithoutSplitterNestedInput
  }

  export type SplitterUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectCountriesCreateManyCountryInput = {
    id?: number
    projectId: number
    pixelId: string
    capiToken: string
  }

  export type SplitterCreateManyCountryInput = {
    id?: number
    uuid: string
    projectId: number
    categoryId: number
  }

  export type ProjectCountriesUpdateWithoutCountryInput = {
    pixelId?: StringFieldUpdateOperationsInput | string
    capiToken?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUpdateOneRequiredWithoutProjectCountriesNestedInput
  }

  export type ProjectCountriesUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    pixelId?: StringFieldUpdateOperationsInput | string
    capiToken?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCountriesUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    pixelId?: StringFieldUpdateOperationsInput | string
    capiToken?: StringFieldUpdateOperationsInput | string
  }

  export type SplitterUpdateWithoutCountryInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    Split?: SplitUpdateManyWithoutSplitterNestedInput
    Category?: CategoryUpdateOneRequiredWithoutSplitterNestedInput
    Project?: ProjectUpdateOneRequiredWithoutSplitterNestedInput
  }

  export type SplitterUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    Split?: SplitUncheckedUpdateManyWithoutSplitterNestedInput
  }

  export type SplitterUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type LinkCreateManyLinkTypeInput = {
    id?: number
    splitId: number
    url: string
    prob: number
    ecpm: number
    hidden?: boolean
  }

  export type LinkUpdateWithoutLinkTypeInput = {
    url?: StringFieldUpdateOperationsInput | string
    prob?: FloatFieldUpdateOperationsInput | number
    ecpm?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    Split?: SplitUpdateOneRequiredWithoutLinkNestedInput
  }

  export type LinkUncheckedUpdateWithoutLinkTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    splitId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    prob?: FloatFieldUpdateOperationsInput | number
    ecpm?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LinkUncheckedUpdateManyWithoutLinkTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    splitId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    prob?: FloatFieldUpdateOperationsInput | number
    ecpm?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectCountriesCreateManyProjectInput = {
    id?: number
    countryId: number
    pixelId: string
    capiToken: string
  }

  export type SplitterCreateManyProjectInput = {
    id?: number
    uuid: string
    categoryId: number
    countryId: number
  }

  export type ProjectCountriesUpdateWithoutProjectInput = {
    pixelId?: StringFieldUpdateOperationsInput | string
    capiToken?: StringFieldUpdateOperationsInput | string
    Country?: CountryUpdateOneRequiredWithoutProjectCountriesNestedInput
  }

  export type ProjectCountriesUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    pixelId?: StringFieldUpdateOperationsInput | string
    capiToken?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCountriesUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    pixelId?: StringFieldUpdateOperationsInput | string
    capiToken?: StringFieldUpdateOperationsInput | string
  }

  export type SplitterUpdateWithoutProjectInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    Split?: SplitUpdateManyWithoutSplitterNestedInput
    Category?: CategoryUpdateOneRequiredWithoutSplitterNestedInput
    Country?: CountryUpdateOneRequiredWithoutSplitterNestedInput
  }

  export type SplitterUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    Split?: SplitUncheckedUpdateManyWithoutSplitterNestedInput
  }

  export type SplitterUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type LinkCreateManySplitInput = {
    id?: number
    url: string
    type: number
    prob: number
    ecpm: number
    hidden?: boolean
  }

  export type LinkUpdateWithoutSplitInput = {
    url?: StringFieldUpdateOperationsInput | string
    prob?: FloatFieldUpdateOperationsInput | number
    ecpm?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    LinkType?: LinkTypeUpdateOneRequiredWithoutLinkNestedInput
  }

  export type LinkUncheckedUpdateWithoutSplitInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    prob?: FloatFieldUpdateOperationsInput | number
    ecpm?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LinkUncheckedUpdateManyWithoutSplitInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    prob?: FloatFieldUpdateOperationsInput | number
    ecpm?: FloatFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SplitCreateManySplitterInput = {
    id?: number
    redirectSlug: string
  }

  export type SplitUpdateWithoutSplitterInput = {
    redirectSlug?: StringFieldUpdateOperationsInput | string
    Link?: LinkUpdateManyWithoutSplitNestedInput
  }

  export type SplitUncheckedUpdateWithoutSplitterInput = {
    id?: IntFieldUpdateOperationsInput | number
    redirectSlug?: StringFieldUpdateOperationsInput | string
    Link?: LinkUncheckedUpdateManyWithoutSplitNestedInput
  }

  export type SplitUncheckedUpdateManyWithoutSplitterInput = {
    id?: IntFieldUpdateOperationsInput | number
    redirectSlug?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateManyUserInput = {
    id?: number
    uuid: string
    name: string
    description: string
    icon: string
  }

  export type ProjectUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    ProjectCountries?: ProjectCountriesUpdateManyWithoutProjectNestedInput
    Splitter?: SplitterUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    ProjectCountries?: ProjectCountriesUncheckedUpdateManyWithoutProjectNestedInput
    Splitter?: SplitterUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}