import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  id: Scalars['String']['output'];
  times: Array<CalendarTime>;
};

export type CalendarTime = {
  __typename?: 'CalendarTime';
  available: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
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
  scheduleMeeting: Meeting;
};


export type MutationDeleteMeetingArgs = {
  meetingId: Scalars['UUID']['input'];
};


export type MutationScheduleMeetingArgs = {
  invitedEmail: Scalars['String']['input'];
  meetingId: Scalars['UUID']['input'];
  time: Scalars['DateTime']['input'];
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
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  times?: Resolver<Array<ResolversTypes['CalendarTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalendarTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarTime'] = ResolversParentTypes['CalendarTime']> = {
  available?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  scheduleMeeting?: Resolver<ResolversTypes['Meeting'], ParentType, ContextType, RequireFields<MutationScheduleMeetingArgs, 'invitedEmail' | 'meetingId' | 'time'>>;
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

