import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type CreateMeetingInput = {
  startDate: Scalars['DateTime']['input'];
};

export type Meeting = {
  __typename?: 'Meeting';
  createdAt: Scalars['DateTime']['output'];
  endDate: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  shareLink: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['UUID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMeeting: Meeting;
};


export type MutationCreateMeetingArgs = {
  input: CreateMeetingInput;
};

export type Query = {
  __typename?: 'Query';
  meeting: Meeting;
  meetingsForUser: Array<Meeting>;
};


export type QueryMeetingArgs = {
  id: Scalars['ID']['input'];
};

export type CreateMeetingMutationVariables = Exact<{
  input: CreateMeetingInput;
}>;


export type CreateMeetingMutation = { __typename?: 'Mutation', createMeeting: { __typename?: 'Meeting', id: any } };

export type GetMeeeringQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMeeeringQuery = { __typename?: 'Query', meeting: { __typename?: 'Meeting', id: any } };

export type GetMeetingsForUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeetingsForUserQuery = { __typename?: 'Query', meetingsForUser: Array<{ __typename?: 'Meeting', id: any }> };


export const CreateMeetingDocument = gql`
    mutation CreateMeeting($input: CreateMeetingInput!) {
  createMeeting(input: $input) {
    id
  }
}
    `;
export type CreateMeetingMutationFn = Apollo.MutationFunction<CreateMeetingMutation, CreateMeetingMutationVariables>;

/**
 * __useCreateMeetingMutation__
 *
 * To run a mutation, you first call `useCreateMeetingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMeetingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMeetingMutation, { data, loading, error }] = useCreateMeetingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMeetingMutation(baseOptions?: Apollo.MutationHookOptions<CreateMeetingMutation, CreateMeetingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMeetingMutation, CreateMeetingMutationVariables>(CreateMeetingDocument, options);
      }
export type CreateMeetingMutationHookResult = ReturnType<typeof useCreateMeetingMutation>;
export type CreateMeetingMutationResult = Apollo.MutationResult<CreateMeetingMutation>;
export type CreateMeetingMutationOptions = Apollo.BaseMutationOptions<CreateMeetingMutation, CreateMeetingMutationVariables>;
export const GetMeeeringDocument = gql`
    query GetMeeering($id: ID!) {
  meeting(id: $id) {
    id
  }
}
    `;

/**
 * __useGetMeeeringQuery__
 *
 * To run a query within a React component, call `useGetMeeeringQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeeeringQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeeeringQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMeeeringQuery(baseOptions: Apollo.QueryHookOptions<GetMeeeringQuery, GetMeeeringQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeeeringQuery, GetMeeeringQueryVariables>(GetMeeeringDocument, options);
      }
export function useGetMeeeringLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeeeringQuery, GetMeeeringQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeeeringQuery, GetMeeeringQueryVariables>(GetMeeeringDocument, options);
        }
export type GetMeeeringQueryHookResult = ReturnType<typeof useGetMeeeringQuery>;
export type GetMeeeringLazyQueryHookResult = ReturnType<typeof useGetMeeeringLazyQuery>;
export type GetMeeeringQueryResult = Apollo.QueryResult<GetMeeeringQuery, GetMeeeringQueryVariables>;
export const GetMeetingsForUserDocument = gql`
    query GetMeetingsForUser {
  meetingsForUser {
    id
  }
}
    `;

/**
 * __useGetMeetingsForUserQuery__
 *
 * To run a query within a React component, call `useGetMeetingsForUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeetingsForUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeetingsForUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeetingsForUserQuery(baseOptions?: Apollo.QueryHookOptions<GetMeetingsForUserQuery, GetMeetingsForUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeetingsForUserQuery, GetMeetingsForUserQueryVariables>(GetMeetingsForUserDocument, options);
      }
export function useGetMeetingsForUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeetingsForUserQuery, GetMeetingsForUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeetingsForUserQuery, GetMeetingsForUserQueryVariables>(GetMeetingsForUserDocument, options);
        }
export type GetMeetingsForUserQueryHookResult = ReturnType<typeof useGetMeetingsForUserQuery>;
export type GetMeetingsForUserLazyQueryHookResult = ReturnType<typeof useGetMeetingsForUserLazyQuery>;
export type GetMeetingsForUserQueryResult = Apollo.QueryResult<GetMeetingsForUserQuery, GetMeetingsForUserQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateMeetingInput: CreateMeetingInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Meeting: ResolverTypeWrapper<Meeting>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CreateMeetingInput: CreateMeetingInput;
  DateTime: Scalars['DateTime']['output'];
  ID: Scalars['ID']['output'];
  Meeting: Meeting;
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  UUID: Scalars['UUID']['output'];
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MeetingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Meeting'] = ResolversParentTypes['Meeting']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  shareLink?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createMeeting?: Resolver<ResolversTypes['Meeting'], ParentType, ContextType, RequireFields<MutationCreateMeetingArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  meeting?: Resolver<ResolversTypes['Meeting'], ParentType, ContextType, RequireFields<QueryMeetingArgs, 'id'>>;
  meetingsForUser?: Resolver<Array<ResolversTypes['Meeting']>, ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Meeting?: MeetingResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UUID?: GraphQLScalarType;
};


export type MeetingKeySpecifier = ('createdAt' | 'endDate' | 'id' | 'shareLink' | 'startDate' | 'updatedAt' | 'userId' | MeetingKeySpecifier)[];
export type MeetingFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	shareLink?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createMeeting' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createMeeting?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('meeting' | 'meetingsForUser' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	meeting?: FieldPolicy<any> | FieldReadFunction<any>,
	meetingsForUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Meeting?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MeetingKeySpecifier | (() => undefined | MeetingKeySpecifier),
		fields?: MeetingFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;