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

export type CalendarDay = {
  __typename?: 'CalendarDay';
  date: Scalars['DateTime']['output'];
  times: Array<CalendarTime>;
};

export type CalendarTime = {
  __typename?: 'CalendarTime';
  available: Scalars['Boolean']['output'];
  time: Scalars['DateTime']['output'];
};

export type Meeting = {
  __typename?: 'Meeting';
  createdAt: Scalars['DateTime']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['UUID']['output'];
  invitedEmail?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  state: MeetingState;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['UUID']['output'];
};

export enum MeetingState {
  Cancelled = 'CANCELLED',
  Pending = 'PENDING',
  Scheduled = 'SCHEDULED'
}

export type Mutation = {
  __typename?: 'Mutation';
  createMeeting: Meeting;
  deleteMeeting: Scalars['Boolean']['output'];
};


export type MutationDeleteMeetingArgs = {
  meetingId: Scalars['UUID']['input'];
};

export type Query = {
  __typename?: 'Query';
  calendarForMeeting: Array<CalendarDay>;
  meeting: Meeting;
  meetingsForUser: Array<Meeting>;
};


export type QueryCalendarForMeetingArgs = {
  meetingId: Scalars['UUID']['input'];
};


export type QueryMeetingArgs = {
  meetingId: Scalars['UUID']['input'];
};

export type CreateMeetingMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateMeetingMutation = { __typename?: 'Mutation', createMeeting: { __typename: 'Meeting', id: any } };

export type DeleteMeetingMutationVariables = Exact<{
  meetingId: Scalars['UUID']['input'];
}>;


export type DeleteMeetingMutation = { __typename?: 'Mutation', deleteMeeting: boolean };

export type GetMeetingsForUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeetingsForUserQuery = { __typename?: 'Query', meetingsForUser: Array<{ __typename: 'Meeting', id: any, state: MeetingState, startDate?: any | null, endDate?: any | null, createdAt: any, invitedEmail?: string | null }> };

export type GetMeetingByIdQueryVariables = Exact<{
  meetingId: Scalars['UUID']['input'];
}>;


export type GetMeetingByIdQuery = { __typename?: 'Query', meeting: { __typename: 'Meeting', id: any, state: MeetingState, startDate?: any | null, endDate?: any | null, createdAt: any, invitedEmail?: string | null } };

export type GetCalendarForMeetingQueryVariables = Exact<{
  meetingId: Scalars['UUID']['input'];
}>;


export type GetCalendarForMeetingQuery = { __typename?: 'Query', calendarForMeeting: Array<{ __typename: 'CalendarDay', date: any, times: Array<{ __typename?: 'CalendarTime', time: any, available: boolean }> }> };


export const CreateMeetingDocument = gql`
    mutation CreateMeeting {
  createMeeting {
    id
    __typename
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
export const DeleteMeetingDocument = gql`
    mutation DeleteMeeting($meetingId: UUID!) {
  deleteMeeting(meetingId: $meetingId)
}
    `;
export type DeleteMeetingMutationFn = Apollo.MutationFunction<DeleteMeetingMutation, DeleteMeetingMutationVariables>;

/**
 * __useDeleteMeetingMutation__
 *
 * To run a mutation, you first call `useDeleteMeetingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMeetingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMeetingMutation, { data, loading, error }] = useDeleteMeetingMutation({
 *   variables: {
 *      meetingId: // value for 'meetingId'
 *   },
 * });
 */
export function useDeleteMeetingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMeetingMutation, DeleteMeetingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMeetingMutation, DeleteMeetingMutationVariables>(DeleteMeetingDocument, options);
      }
export type DeleteMeetingMutationHookResult = ReturnType<typeof useDeleteMeetingMutation>;
export type DeleteMeetingMutationResult = Apollo.MutationResult<DeleteMeetingMutation>;
export type DeleteMeetingMutationOptions = Apollo.BaseMutationOptions<DeleteMeetingMutation, DeleteMeetingMutationVariables>;
export const GetMeetingsForUserDocument = gql`
    query GetMeetingsForUser {
  meetingsForUser {
    id
    state
    startDate
    endDate
    createdAt
    invitedEmail
    __typename
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
export const GetMeetingByIdDocument = gql`
    query GetMeetingById($meetingId: UUID!) {
  meeting(meetingId: $meetingId) {
    id
    state
    startDate
    endDate
    createdAt
    invitedEmail
    __typename
  }
}
    `;

/**
 * __useGetMeetingByIdQuery__
 *
 * To run a query within a React component, call `useGetMeetingByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeetingByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeetingByIdQuery({
 *   variables: {
 *      meetingId: // value for 'meetingId'
 *   },
 * });
 */
export function useGetMeetingByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMeetingByIdQuery, GetMeetingByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeetingByIdQuery, GetMeetingByIdQueryVariables>(GetMeetingByIdDocument, options);
      }
export function useGetMeetingByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeetingByIdQuery, GetMeetingByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeetingByIdQuery, GetMeetingByIdQueryVariables>(GetMeetingByIdDocument, options);
        }
export type GetMeetingByIdQueryHookResult = ReturnType<typeof useGetMeetingByIdQuery>;
export type GetMeetingByIdLazyQueryHookResult = ReturnType<typeof useGetMeetingByIdLazyQuery>;
export type GetMeetingByIdQueryResult = Apollo.QueryResult<GetMeetingByIdQuery, GetMeetingByIdQueryVariables>;
export const GetCalendarForMeetingDocument = gql`
    query GetCalendarForMeeting($meetingId: UUID!) {
  calendarForMeeting(meetingId: $meetingId) {
    date
    times {
      time
      available
    }
    __typename
  }
}
    `;

/**
 * __useGetCalendarForMeetingQuery__
 *
 * To run a query within a React component, call `useGetCalendarForMeetingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCalendarForMeetingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCalendarForMeetingQuery({
 *   variables: {
 *      meetingId: // value for 'meetingId'
 *   },
 * });
 */
export function useGetCalendarForMeetingQuery(baseOptions: Apollo.QueryHookOptions<GetCalendarForMeetingQuery, GetCalendarForMeetingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCalendarForMeetingQuery, GetCalendarForMeetingQueryVariables>(GetCalendarForMeetingDocument, options);
      }
export function useGetCalendarForMeetingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCalendarForMeetingQuery, GetCalendarForMeetingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCalendarForMeetingQuery, GetCalendarForMeetingQueryVariables>(GetCalendarForMeetingDocument, options);
        }
export type GetCalendarForMeetingQueryHookResult = ReturnType<typeof useGetCalendarForMeetingQuery>;
export type GetCalendarForMeetingLazyQueryHookResult = ReturnType<typeof useGetCalendarForMeetingLazyQuery>;
export type GetCalendarForMeetingQueryResult = Apollo.QueryResult<GetCalendarForMeetingQuery, GetCalendarForMeetingQueryVariables>;


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
  CalendarDay: ResolverTypeWrapper<CalendarDay>;
  CalendarTime: ResolverTypeWrapper<CalendarTime>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Meeting: ResolverTypeWrapper<Meeting>;
  MeetingState: MeetingState;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CalendarDay: CalendarDay;
  CalendarTime: CalendarTime;
  DateTime: Scalars['DateTime']['output'];
  Meeting: Meeting;
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  UUID: Scalars['UUID']['output'];
};

export type CalendarDayResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarDay'] = ResolversParentTypes['CalendarDay']> = {
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  times?: Resolver<Array<ResolversTypes['CalendarTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalendarTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarTime'] = ResolversParentTypes['CalendarTime']> = {
  available?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MeetingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Meeting'] = ResolversParentTypes['Meeting']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  invitedEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['MeetingState'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createMeeting?: Resolver<ResolversTypes['Meeting'], ParentType, ContextType>;
  deleteMeeting?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteMeetingArgs, 'meetingId'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  calendarForMeeting?: Resolver<Array<ResolversTypes['CalendarDay']>, ParentType, ContextType, RequireFields<QueryCalendarForMeetingArgs, 'meetingId'>>;
  meeting?: Resolver<ResolversTypes['Meeting'], ParentType, ContextType, RequireFields<QueryMeetingArgs, 'meetingId'>>;
  meetingsForUser?: Resolver<Array<ResolversTypes['Meeting']>, ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type Resolvers<ContextType = any> = {
  CalendarDay?: CalendarDayResolvers<ContextType>;
  CalendarTime?: CalendarTimeResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Meeting?: MeetingResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UUID?: GraphQLScalarType;
};


export type CalendarDayKeySpecifier = ('date' | 'times' | CalendarDayKeySpecifier)[];
export type CalendarDayFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	times?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CalendarTimeKeySpecifier = ('available' | 'time' | CalendarTimeKeySpecifier)[];
export type CalendarTimeFieldPolicy = {
	available?: FieldPolicy<any> | FieldReadFunction<any>,
	time?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MeetingKeySpecifier = ('createdAt' | 'endDate' | 'id' | 'invitedEmail' | 'startDate' | 'state' | 'updatedAt' | 'userId' | MeetingKeySpecifier)[];
export type MeetingFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	invitedEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createMeeting' | 'deleteMeeting' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createMeeting?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMeeting?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('calendarForMeeting' | 'meeting' | 'meetingsForUser' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	calendarForMeeting?: FieldPolicy<any> | FieldReadFunction<any>,
	meeting?: FieldPolicy<any> | FieldReadFunction<any>,
	meetingsForUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	CalendarDay?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CalendarDayKeySpecifier | (() => undefined | CalendarDayKeySpecifier),
		fields?: CalendarDayFieldPolicy,
	},
	CalendarTime?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CalendarTimeKeySpecifier | (() => undefined | CalendarTimeKeySpecifier),
		fields?: CalendarTimeFieldPolicy,
	},
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