import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const MenteeScalarFieldEnumSchema = z.enum(['id','name','userId','createdAt','updatedAt']);

export const MentorScalarFieldEnumSchema = z.enum(['id','name','userId','createdAt','updatedAt']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','email','phone','profileImage','mentor','admin','active','createdAt','updatedAt']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  email: z.string(),
  phone: z.string(),
  profileImage: z.string().nullable(),
  mentor: z.boolean(),
  admin: z.boolean(),
  active: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// MENTEE SCHEMA
/////////////////////////////////////////

export const MenteeSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Mentee = z.infer<typeof MenteeSchema>

/////////////////////////////////////////
// MENTOR SCHEMA
/////////////////////////////////////////

export const MentorSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Mentor = z.infer<typeof MentorSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  menteeInfo: z.union([z.boolean(),z.lazy(() => MenteeArgsSchema)]).optional(),
  mentorInfo: z.union([z.boolean(),z.lazy(() => MentorArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  profileImage: z.boolean().optional(),
  mentor: z.boolean().optional(),
  admin: z.boolean().optional(),
  active: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  menteeInfo: z.union([z.boolean(),z.lazy(() => MenteeArgsSchema)]).optional(),
  mentorInfo: z.union([z.boolean(),z.lazy(() => MentorArgsSchema)]).optional(),
}).strict()

// MENTEE
//------------------------------------------------------

export const MenteeIncludeSchema: z.ZodType<Prisma.MenteeInclude> = z.object({
  mentors: z.union([z.boolean(),z.lazy(() => MentorFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MenteeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MenteeArgsSchema: z.ZodType<Prisma.MenteeArgs> = z.object({
  select: z.lazy(() => MenteeSelectSchema).optional(),
  include: z.lazy(() => MenteeIncludeSchema).optional(),
}).strict();

export const MenteeCountOutputTypeArgsSchema: z.ZodType<Prisma.MenteeCountOutputTypeArgs> = z.object({
  select: z.lazy(() => MenteeCountOutputTypeSelectSchema).nullish(),
}).strict();

export const MenteeCountOutputTypeSelectSchema: z.ZodType<Prisma.MenteeCountOutputTypeSelect> = z.object({
  mentors: z.boolean().optional(),
}).strict();

export const MenteeSelectSchema: z.ZodType<Prisma.MenteeSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  mentors: z.union([z.boolean(),z.lazy(() => MentorFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MenteeCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MENTOR
//------------------------------------------------------

export const MentorIncludeSchema: z.ZodType<Prisma.MentorInclude> = z.object({
  mentees: z.union([z.boolean(),z.lazy(() => MenteeFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MentorCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MentorArgsSchema: z.ZodType<Prisma.MentorArgs> = z.object({
  select: z.lazy(() => MentorSelectSchema).optional(),
  include: z.lazy(() => MentorIncludeSchema).optional(),
}).strict();

export const MentorCountOutputTypeArgsSchema: z.ZodType<Prisma.MentorCountOutputTypeArgs> = z.object({
  select: z.lazy(() => MentorCountOutputTypeSelectSchema).nullish(),
}).strict();

export const MentorCountOutputTypeSelectSchema: z.ZodType<Prisma.MentorCountOutputTypeSelect> = z.object({
  mentees: z.boolean().optional(),
}).strict();

export const MentorSelectSchema: z.ZodType<Prisma.MentorSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  mentees: z.union([z.boolean(),z.lazy(() => MenteeFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MentorCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profileImage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mentor: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  admin: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  menteeInfo: z.union([ z.lazy(() => MenteeRelationFilterSchema),z.lazy(() => MenteeWhereInputSchema) ]).optional().nullable(),
  mentorInfo: z.union([ z.lazy(() => MentorRelationFilterSchema),z.lazy(() => MentorWhereInputSchema) ]).optional().nullable(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.lazy(() => SortOrderSchema).optional(),
  mentor: z.lazy(() => SortOrderSchema).optional(),
  admin: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  menteeInfo: z.lazy(() => MenteeOrderByWithRelationInputSchema).optional(),
  mentorInfo: z.lazy(() => MentorOrderByWithRelationInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  profileImage: z.string().optional()
}).strict();

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.lazy(() => SortOrderSchema).optional(),
  mentor: z.lazy(() => SortOrderSchema).optional(),
  admin: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  profileImage: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  mentor: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  admin: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  active: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MenteeWhereInputSchema: z.ZodType<Prisma.MenteeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MenteeWhereInputSchema),z.lazy(() => MenteeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MenteeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MenteeWhereInputSchema),z.lazy(() => MenteeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentors: z.lazy(() => MentorListRelationFilterSchema).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const MenteeOrderByWithRelationInputSchema: z.ZodType<Prisma.MenteeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  mentors: z.lazy(() => MentorOrderByRelationAggregateInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const MenteeWhereUniqueInputSchema: z.ZodType<Prisma.MenteeWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string().optional()
}).strict();

export const MenteeOrderByWithAggregationInputSchema: z.ZodType<Prisma.MenteeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MenteeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MenteeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MenteeMinOrderByAggregateInputSchema).optional()
}).strict();

export const MenteeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MenteeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MenteeScalarWhereWithAggregatesInputSchema),z.lazy(() => MenteeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MenteeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MenteeScalarWhereWithAggregatesInputSchema),z.lazy(() => MenteeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MentorWhereInputSchema: z.ZodType<Prisma.MentorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MentorWhereInputSchema),z.lazy(() => MentorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MentorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MentorWhereInputSchema),z.lazy(() => MentorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentees: z.lazy(() => MenteeListRelationFilterSchema).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const MentorOrderByWithRelationInputSchema: z.ZodType<Prisma.MentorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  mentees: z.lazy(() => MenteeOrderByRelationAggregateInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const MentorWhereUniqueInputSchema: z.ZodType<Prisma.MentorWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string().optional()
}).strict();

export const MentorOrderByWithAggregationInputSchema: z.ZodType<Prisma.MentorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MentorCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MentorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MentorMinOrderByAggregateInputSchema).optional()
}).strict();

export const MentorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MentorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MentorScalarWhereWithAggregatesInputSchema),z.lazy(() => MentorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MentorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MentorScalarWhereWithAggregatesInputSchema),z.lazy(() => MentorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  phone: z.string(),
  profileImage: z.string().optional().nullable(),
  mentor: z.boolean().optional(),
  admin: z.boolean().optional(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  menteeInfo: z.lazy(() => MenteeCreateNestedOneWithoutUserInputSchema).optional(),
  mentorInfo: z.lazy(() => MentorCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  phone: z.string(),
  profileImage: z.string().optional().nullable(),
  mentor: z.boolean().optional(),
  admin: z.boolean().optional(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  menteeInfo: z.lazy(() => MenteeUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  mentorInfo: z.lazy(() => MentorUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  admin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  menteeInfo: z.lazy(() => MenteeUpdateOneWithoutUserNestedInputSchema).optional(),
  mentorInfo: z.lazy(() => MentorUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  admin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  menteeInfo: z.lazy(() => MenteeUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  mentorInfo: z.lazy(() => MentorUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  phone: z.string(),
  profileImage: z.string().optional().nullable(),
  mentor: z.boolean().optional(),
  admin: z.boolean().optional(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  admin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  admin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MenteeCreateInputSchema: z.ZodType<Prisma.MenteeCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentors: z.lazy(() => MentorCreateNestedManyWithoutMenteesInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutMenteeInfoInputSchema)
}).strict();

export const MenteeUncheckedCreateInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentors: z.lazy(() => MentorUncheckedCreateNestedManyWithoutMenteesInputSchema).optional()
}).strict();

export const MenteeUpdateInputSchema: z.ZodType<Prisma.MenteeUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorUpdateManyWithoutMenteesNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMenteeInfoNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorUncheckedUpdateManyWithoutMenteesNestedInputSchema).optional()
}).strict();

export const MenteeCreateManyInputSchema: z.ZodType<Prisma.MenteeCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MenteeUpdateManyMutationInputSchema: z.ZodType<Prisma.MenteeUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MenteeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MentorCreateInputSchema: z.ZodType<Prisma.MentorCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentees: z.lazy(() => MenteeCreateNestedManyWithoutMentorsInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutMentorInfoInputSchema)
}).strict();

export const MentorUncheckedCreateInputSchema: z.ZodType<Prisma.MentorUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentees: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutMentorsInputSchema).optional()
}).strict();

export const MentorUpdateInputSchema: z.ZodType<Prisma.MentorUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUpdateManyWithoutMentorsNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMentorInfoNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUncheckedUpdateManyWithoutMentorsNestedInputSchema).optional()
}).strict();

export const MentorCreateManyInputSchema: z.ZodType<Prisma.MentorCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MentorUpdateManyMutationInputSchema: z.ZodType<Prisma.MentorUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MentorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const MenteeRelationFilterSchema: z.ZodType<Prisma.MenteeRelationFilter> = z.object({
  is: z.lazy(() => MenteeWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => MenteeWhereInputSchema).optional().nullable()
}).strict();

export const MentorRelationFilterSchema: z.ZodType<Prisma.MentorRelationFilter> = z.object({
  is: z.lazy(() => MentorWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => MentorWhereInputSchema).optional().nullable()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.lazy(() => SortOrderSchema).optional(),
  mentor: z.lazy(() => SortOrderSchema).optional(),
  admin: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.lazy(() => SortOrderSchema).optional(),
  mentor: z.lazy(() => SortOrderSchema).optional(),
  admin: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.lazy(() => SortOrderSchema).optional(),
  mentor: z.lazy(() => SortOrderSchema).optional(),
  admin: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const MentorListRelationFilterSchema: z.ZodType<Prisma.MentorListRelationFilter> = z.object({
  every: z.lazy(() => MentorWhereInputSchema).optional(),
  some: z.lazy(() => MentorWhereInputSchema).optional(),
  none: z.lazy(() => MentorWhereInputSchema).optional()
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const MentorOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MentorOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MenteeCountOrderByAggregateInputSchema: z.ZodType<Prisma.MenteeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MenteeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MenteeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MenteeMinOrderByAggregateInputSchema: z.ZodType<Prisma.MenteeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MenteeListRelationFilterSchema: z.ZodType<Prisma.MenteeListRelationFilter> = z.object({
  every: z.lazy(() => MenteeWhereInputSchema).optional(),
  some: z.lazy(() => MenteeWhereInputSchema).optional(),
  none: z.lazy(() => MenteeWhereInputSchema).optional()
}).strict();

export const MenteeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MenteeOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentorCountOrderByAggregateInputSchema: z.ZodType<Prisma.MentorCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MentorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentorMinOrderByAggregateInputSchema: z.ZodType<Prisma.MentorMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MenteeCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.MenteeCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MenteeCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => MenteeWhereUniqueInputSchema).optional()
}).strict();

export const MentorCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.MentorCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutUserInputSchema),z.lazy(() => MentorUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional()
}).strict();

export const MenteeUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MenteeCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => MenteeWhereUniqueInputSchema).optional()
}).strict();

export const MentorUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.MentorUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutUserInputSchema),z.lazy(() => MentorUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const MenteeUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.MenteeUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MenteeCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => MenteeUpsertWithoutUserInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => MenteeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MenteeUpdateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const MentorUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.MentorUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutUserInputSchema),z.lazy(() => MentorUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => MentorUpsertWithoutUserInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MentorUpdateWithoutUserInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const MenteeUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MenteeCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => MenteeUpsertWithoutUserInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => MenteeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MenteeUpdateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const MentorUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutUserInputSchema),z.lazy(() => MentorUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => MentorUpsertWithoutUserInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MentorUpdateWithoutUserInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const MentorCreateNestedManyWithoutMenteesInputSchema: z.ZodType<Prisma.MentorCreateNestedManyWithoutMenteesInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutMenteesInputSchema),z.lazy(() => MentorCreateWithoutMenteesInputSchema).array(),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentorCreateOrConnectWithoutMenteesInputSchema),z.lazy(() => MentorCreateOrConnectWithoutMenteesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutMenteeInfoInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutMenteeInfoInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMenteeInfoInputSchema),z.lazy(() => UserUncheckedCreateWithoutMenteeInfoInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMenteeInfoInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const MentorUncheckedCreateNestedManyWithoutMenteesInputSchema: z.ZodType<Prisma.MentorUncheckedCreateNestedManyWithoutMenteesInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutMenteesInputSchema),z.lazy(() => MentorCreateWithoutMenteesInputSchema).array(),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentorCreateOrConnectWithoutMenteesInputSchema),z.lazy(() => MentorCreateOrConnectWithoutMenteesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MentorUpdateManyWithoutMenteesNestedInputSchema: z.ZodType<Prisma.MentorUpdateManyWithoutMenteesNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutMenteesInputSchema),z.lazy(() => MentorCreateWithoutMenteesInputSchema).array(),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentorCreateOrConnectWithoutMenteesInputSchema),z.lazy(() => MentorCreateOrConnectWithoutMenteesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MentorUpsertWithWhereUniqueWithoutMenteesInputSchema),z.lazy(() => MentorUpsertWithWhereUniqueWithoutMenteesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MentorUpdateWithWhereUniqueWithoutMenteesInputSchema),z.lazy(() => MentorUpdateWithWhereUniqueWithoutMenteesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MentorUpdateManyWithWhereWithoutMenteesInputSchema),z.lazy(() => MentorUpdateManyWithWhereWithoutMenteesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MentorScalarWhereInputSchema),z.lazy(() => MentorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutMenteeInfoNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutMenteeInfoNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMenteeInfoInputSchema),z.lazy(() => UserUncheckedCreateWithoutMenteeInfoInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMenteeInfoInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutMenteeInfoInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutMenteeInfoInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMenteeInfoInputSchema) ]).optional(),
}).strict();

export const MentorUncheckedUpdateManyWithoutMenteesNestedInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateManyWithoutMenteesNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutMenteesInputSchema),z.lazy(() => MentorCreateWithoutMenteesInputSchema).array(),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentorCreateOrConnectWithoutMenteesInputSchema),z.lazy(() => MentorCreateOrConnectWithoutMenteesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MentorUpsertWithWhereUniqueWithoutMenteesInputSchema),z.lazy(() => MentorUpsertWithWhereUniqueWithoutMenteesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MentorUpdateWithWhereUniqueWithoutMenteesInputSchema),z.lazy(() => MentorUpdateWithWhereUniqueWithoutMenteesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MentorUpdateManyWithWhereWithoutMenteesInputSchema),z.lazy(() => MentorUpdateManyWithWhereWithoutMenteesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MentorScalarWhereInputSchema),z.lazy(() => MentorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MenteeCreateNestedManyWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeCreateNestedManyWithoutMentorsInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutMentorsInputSchema),z.lazy(() => MenteeCreateWithoutMentorsInputSchema).array(),z.lazy(() => MenteeUncheckedCreateWithoutMentorsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMentorsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MenteeCreateOrConnectWithoutMentorsInputSchema),z.lazy(() => MenteeCreateOrConnectWithoutMentorsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutMentorInfoInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutMentorInfoInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMentorInfoInputSchema),z.lazy(() => UserUncheckedCreateWithoutMentorInfoInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMentorInfoInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const MenteeUncheckedCreateNestedManyWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateNestedManyWithoutMentorsInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutMentorsInputSchema),z.lazy(() => MenteeCreateWithoutMentorsInputSchema).array(),z.lazy(() => MenteeUncheckedCreateWithoutMentorsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMentorsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MenteeCreateOrConnectWithoutMentorsInputSchema),z.lazy(() => MenteeCreateOrConnectWithoutMentorsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MenteeUpdateManyWithoutMentorsNestedInputSchema: z.ZodType<Prisma.MenteeUpdateManyWithoutMentorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutMentorsInputSchema),z.lazy(() => MenteeCreateWithoutMentorsInputSchema).array(),z.lazy(() => MenteeUncheckedCreateWithoutMentorsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMentorsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MenteeCreateOrConnectWithoutMentorsInputSchema),z.lazy(() => MenteeCreateOrConnectWithoutMentorsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MenteeUpsertWithWhereUniqueWithoutMentorsInputSchema),z.lazy(() => MenteeUpsertWithWhereUniqueWithoutMentorsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MenteeUpdateWithWhereUniqueWithoutMentorsInputSchema),z.lazy(() => MenteeUpdateWithWhereUniqueWithoutMentorsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MenteeUpdateManyWithWhereWithoutMentorsInputSchema),z.lazy(() => MenteeUpdateManyWithWhereWithoutMentorsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MenteeScalarWhereInputSchema),z.lazy(() => MenteeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutMentorInfoNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutMentorInfoNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMentorInfoInputSchema),z.lazy(() => UserUncheckedCreateWithoutMentorInfoInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMentorInfoInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutMentorInfoInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutMentorInfoInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMentorInfoInputSchema) ]).optional(),
}).strict();

export const MenteeUncheckedUpdateManyWithoutMentorsNestedInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateManyWithoutMentorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutMentorsInputSchema),z.lazy(() => MenteeCreateWithoutMentorsInputSchema).array(),z.lazy(() => MenteeUncheckedCreateWithoutMentorsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMentorsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MenteeCreateOrConnectWithoutMentorsInputSchema),z.lazy(() => MenteeCreateOrConnectWithoutMentorsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MenteeUpsertWithWhereUniqueWithoutMentorsInputSchema),z.lazy(() => MenteeUpsertWithWhereUniqueWithoutMentorsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MenteeUpdateWithWhereUniqueWithoutMentorsInputSchema),z.lazy(() => MenteeUpdateWithWhereUniqueWithoutMentorsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MenteeUpdateManyWithWhereWithoutMentorsInputSchema),z.lazy(() => MenteeUpdateManyWithWhereWithoutMentorsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MenteeScalarWhereInputSchema),z.lazy(() => MenteeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const MenteeCreateWithoutUserInputSchema: z.ZodType<Prisma.MenteeCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentors: z.lazy(() => MentorCreateNestedManyWithoutMenteesInputSchema).optional()
}).strict();

export const MenteeUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentors: z.lazy(() => MentorUncheckedCreateNestedManyWithoutMenteesInputSchema).optional()
}).strict();

export const MenteeCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.MenteeCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => MenteeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MenteeCreateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MentorCreateWithoutUserInputSchema: z.ZodType<Prisma.MentorCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentees: z.lazy(() => MenteeCreateNestedManyWithoutMentorsInputSchema).optional()
}).strict();

export const MentorUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.MentorUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentees: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutMentorsInputSchema).optional()
}).strict();

export const MentorCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.MentorCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MentorCreateWithoutUserInputSchema),z.lazy(() => MentorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MenteeUpsertWithoutUserInputSchema: z.ZodType<Prisma.MenteeUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => MenteeUpdateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => MenteeCreateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MenteeUpdateWithoutUserInputSchema: z.ZodType<Prisma.MenteeUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorUpdateManyWithoutMenteesNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorUncheckedUpdateManyWithoutMenteesNestedInputSchema).optional()
}).strict();

export const MentorUpsertWithoutUserInputSchema: z.ZodType<Prisma.MentorUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => MentorUpdateWithoutUserInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => MentorCreateWithoutUserInputSchema),z.lazy(() => MentorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MentorUpdateWithoutUserInputSchema: z.ZodType<Prisma.MentorUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUpdateManyWithoutMentorsNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUncheckedUpdateManyWithoutMentorsNestedInputSchema).optional()
}).strict();

export const MentorCreateWithoutMenteesInputSchema: z.ZodType<Prisma.MentorCreateWithoutMenteesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutMentorInfoInputSchema)
}).strict();

export const MentorUncheckedCreateWithoutMenteesInputSchema: z.ZodType<Prisma.MentorUncheckedCreateWithoutMenteesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MentorCreateOrConnectWithoutMenteesInputSchema: z.ZodType<Prisma.MentorCreateOrConnectWithoutMenteesInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MentorCreateWithoutMenteesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema) ]),
}).strict();

export const UserCreateWithoutMenteeInfoInputSchema: z.ZodType<Prisma.UserCreateWithoutMenteeInfoInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  phone: z.string(),
  profileImage: z.string().optional().nullable(),
  mentor: z.boolean().optional(),
  admin: z.boolean().optional(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentorInfo: z.lazy(() => MentorCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutMenteeInfoInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutMenteeInfoInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  phone: z.string(),
  profileImage: z.string().optional().nullable(),
  mentor: z.boolean().optional(),
  admin: z.boolean().optional(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentorInfo: z.lazy(() => MentorUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutMenteeInfoInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutMenteeInfoInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutMenteeInfoInputSchema),z.lazy(() => UserUncheckedCreateWithoutMenteeInfoInputSchema) ]),
}).strict();

export const MentorUpsertWithWhereUniqueWithoutMenteesInputSchema: z.ZodType<Prisma.MentorUpsertWithWhereUniqueWithoutMenteesInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MentorUpdateWithoutMenteesInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutMenteesInputSchema) ]),
  create: z.union([ z.lazy(() => MentorCreateWithoutMenteesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema) ]),
}).strict();

export const MentorUpdateWithWhereUniqueWithoutMenteesInputSchema: z.ZodType<Prisma.MentorUpdateWithWhereUniqueWithoutMenteesInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MentorUpdateWithoutMenteesInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutMenteesInputSchema) ]),
}).strict();

export const MentorUpdateManyWithWhereWithoutMenteesInputSchema: z.ZodType<Prisma.MentorUpdateManyWithWhereWithoutMenteesInput> = z.object({
  where: z.lazy(() => MentorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MentorUpdateManyMutationInputSchema),z.lazy(() => MentorUncheckedUpdateManyWithoutMentorsInputSchema) ]),
}).strict();

export const MentorScalarWhereInputSchema: z.ZodType<Prisma.MentorScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MentorScalarWhereInputSchema),z.lazy(() => MentorScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MentorScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MentorScalarWhereInputSchema),z.lazy(() => MentorScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserUpsertWithoutMenteeInfoInputSchema: z.ZodType<Prisma.UserUpsertWithoutMenteeInfoInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutMenteeInfoInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMenteeInfoInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutMenteeInfoInputSchema),z.lazy(() => UserUncheckedCreateWithoutMenteeInfoInputSchema) ]),
}).strict();

export const UserUpdateWithoutMenteeInfoInputSchema: z.ZodType<Prisma.UserUpdateWithoutMenteeInfoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  admin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentorInfo: z.lazy(() => MentorUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutMenteeInfoInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutMenteeInfoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  admin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentorInfo: z.lazy(() => MentorUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const MenteeCreateWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeCreateWithoutMentorsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutMenteeInfoInputSchema)
}).strict();

export const MenteeUncheckedCreateWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateWithoutMentorsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MenteeCreateOrConnectWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeCreateOrConnectWithoutMentorsInput> = z.object({
  where: z.lazy(() => MenteeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MenteeCreateWithoutMentorsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMentorsInputSchema) ]),
}).strict();

export const UserCreateWithoutMentorInfoInputSchema: z.ZodType<Prisma.UserCreateWithoutMentorInfoInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  phone: z.string(),
  profileImage: z.string().optional().nullable(),
  mentor: z.boolean().optional(),
  admin: z.boolean().optional(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  menteeInfo: z.lazy(() => MenteeCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutMentorInfoInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutMentorInfoInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  phone: z.string(),
  profileImage: z.string().optional().nullable(),
  mentor: z.boolean().optional(),
  admin: z.boolean().optional(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  menteeInfo: z.lazy(() => MenteeUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutMentorInfoInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutMentorInfoInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutMentorInfoInputSchema),z.lazy(() => UserUncheckedCreateWithoutMentorInfoInputSchema) ]),
}).strict();

export const MenteeUpsertWithWhereUniqueWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeUpsertWithWhereUniqueWithoutMentorsInput> = z.object({
  where: z.lazy(() => MenteeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MenteeUpdateWithoutMentorsInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutMentorsInputSchema) ]),
  create: z.union([ z.lazy(() => MenteeCreateWithoutMentorsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMentorsInputSchema) ]),
}).strict();

export const MenteeUpdateWithWhereUniqueWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeUpdateWithWhereUniqueWithoutMentorsInput> = z.object({
  where: z.lazy(() => MenteeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MenteeUpdateWithoutMentorsInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutMentorsInputSchema) ]),
}).strict();

export const MenteeUpdateManyWithWhereWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeUpdateManyWithWhereWithoutMentorsInput> = z.object({
  where: z.lazy(() => MenteeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MenteeUpdateManyMutationInputSchema),z.lazy(() => MenteeUncheckedUpdateManyWithoutMenteesInputSchema) ]),
}).strict();

export const MenteeScalarWhereInputSchema: z.ZodType<Prisma.MenteeScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MenteeScalarWhereInputSchema),z.lazy(() => MenteeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MenteeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MenteeScalarWhereInputSchema),z.lazy(() => MenteeScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserUpsertWithoutMentorInfoInputSchema: z.ZodType<Prisma.UserUpsertWithoutMentorInfoInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutMentorInfoInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMentorInfoInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutMentorInfoInputSchema),z.lazy(() => UserUncheckedCreateWithoutMentorInfoInputSchema) ]),
}).strict();

export const UserUpdateWithoutMentorInfoInputSchema: z.ZodType<Prisma.UserUpdateWithoutMentorInfoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  admin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  menteeInfo: z.lazy(() => MenteeUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutMentorInfoInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutMentorInfoInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  admin: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  menteeInfo: z.lazy(() => MenteeUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const MentorUpdateWithoutMenteesInputSchema: z.ZodType<Prisma.MentorUpdateWithoutMenteesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMentorInfoNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateWithoutMenteesInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateWithoutMenteesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MentorUncheckedUpdateManyWithoutMentorsInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateManyWithoutMentorsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MenteeUpdateWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeUpdateWithoutMentorsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMenteeInfoNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateWithoutMentorsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MenteeUncheckedUpdateManyWithoutMenteesInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateManyWithoutMenteesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const MenteeFindFirstArgsSchema: z.ZodType<Prisma.MenteeFindFirstArgs> = z.object({
  select: MenteeSelectSchema.optional(),
  include: MenteeIncludeSchema.optional(),
  where: MenteeWhereInputSchema.optional(),
  orderBy: z.union([ MenteeOrderByWithRelationInputSchema.array(),MenteeOrderByWithRelationInputSchema ]).optional(),
  cursor: MenteeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MenteeScalarFieldEnumSchema.array().optional(),
}).strict()

export const MenteeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MenteeFindFirstOrThrowArgs> = z.object({
  select: MenteeSelectSchema.optional(),
  include: MenteeIncludeSchema.optional(),
  where: MenteeWhereInputSchema.optional(),
  orderBy: z.union([ MenteeOrderByWithRelationInputSchema.array(),MenteeOrderByWithRelationInputSchema ]).optional(),
  cursor: MenteeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MenteeScalarFieldEnumSchema.array().optional(),
}).strict()

export const MenteeFindManyArgsSchema: z.ZodType<Prisma.MenteeFindManyArgs> = z.object({
  select: MenteeSelectSchema.optional(),
  include: MenteeIncludeSchema.optional(),
  where: MenteeWhereInputSchema.optional(),
  orderBy: z.union([ MenteeOrderByWithRelationInputSchema.array(),MenteeOrderByWithRelationInputSchema ]).optional(),
  cursor: MenteeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MenteeScalarFieldEnumSchema.array().optional(),
}).strict()

export const MenteeAggregateArgsSchema: z.ZodType<Prisma.MenteeAggregateArgs> = z.object({
  where: MenteeWhereInputSchema.optional(),
  orderBy: z.union([ MenteeOrderByWithRelationInputSchema.array(),MenteeOrderByWithRelationInputSchema ]).optional(),
  cursor: MenteeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MenteeGroupByArgsSchema: z.ZodType<Prisma.MenteeGroupByArgs> = z.object({
  where: MenteeWhereInputSchema.optional(),
  orderBy: z.union([ MenteeOrderByWithAggregationInputSchema.array(),MenteeOrderByWithAggregationInputSchema ]).optional(),
  by: MenteeScalarFieldEnumSchema.array(),
  having: MenteeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MenteeFindUniqueArgsSchema: z.ZodType<Prisma.MenteeFindUniqueArgs> = z.object({
  select: MenteeSelectSchema.optional(),
  include: MenteeIncludeSchema.optional(),
  where: MenteeWhereUniqueInputSchema,
}).strict()

export const MenteeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MenteeFindUniqueOrThrowArgs> = z.object({
  select: MenteeSelectSchema.optional(),
  include: MenteeIncludeSchema.optional(),
  where: MenteeWhereUniqueInputSchema,
}).strict()

export const MentorFindFirstArgsSchema: z.ZodType<Prisma.MentorFindFirstArgs> = z.object({
  select: MentorSelectSchema.optional(),
  include: MentorIncludeSchema.optional(),
  where: MentorWhereInputSchema.optional(),
  orderBy: z.union([ MentorOrderByWithRelationInputSchema.array(),MentorOrderByWithRelationInputSchema ]).optional(),
  cursor: MentorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MentorScalarFieldEnumSchema.array().optional(),
}).strict()

export const MentorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MentorFindFirstOrThrowArgs> = z.object({
  select: MentorSelectSchema.optional(),
  include: MentorIncludeSchema.optional(),
  where: MentorWhereInputSchema.optional(),
  orderBy: z.union([ MentorOrderByWithRelationInputSchema.array(),MentorOrderByWithRelationInputSchema ]).optional(),
  cursor: MentorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MentorScalarFieldEnumSchema.array().optional(),
}).strict()

export const MentorFindManyArgsSchema: z.ZodType<Prisma.MentorFindManyArgs> = z.object({
  select: MentorSelectSchema.optional(),
  include: MentorIncludeSchema.optional(),
  where: MentorWhereInputSchema.optional(),
  orderBy: z.union([ MentorOrderByWithRelationInputSchema.array(),MentorOrderByWithRelationInputSchema ]).optional(),
  cursor: MentorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MentorScalarFieldEnumSchema.array().optional(),
}).strict()

export const MentorAggregateArgsSchema: z.ZodType<Prisma.MentorAggregateArgs> = z.object({
  where: MentorWhereInputSchema.optional(),
  orderBy: z.union([ MentorOrderByWithRelationInputSchema.array(),MentorOrderByWithRelationInputSchema ]).optional(),
  cursor: MentorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MentorGroupByArgsSchema: z.ZodType<Prisma.MentorGroupByArgs> = z.object({
  where: MentorWhereInputSchema.optional(),
  orderBy: z.union([ MentorOrderByWithAggregationInputSchema.array(),MentorOrderByWithAggregationInputSchema ]).optional(),
  by: MentorScalarFieldEnumSchema.array(),
  having: MentorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MentorFindUniqueArgsSchema: z.ZodType<Prisma.MentorFindUniqueArgs> = z.object({
  select: MentorSelectSchema.optional(),
  include: MentorIncludeSchema.optional(),
  where: MentorWhereUniqueInputSchema,
}).strict()

export const MentorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MentorFindUniqueOrThrowArgs> = z.object({
  select: MentorSelectSchema.optional(),
  include: MentorIncludeSchema.optional(),
  where: MentorWhereUniqueInputSchema,
}).strict()

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict()

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict()

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict()

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict()

export const MenteeCreateArgsSchema: z.ZodType<Prisma.MenteeCreateArgs> = z.object({
  select: MenteeSelectSchema.optional(),
  include: MenteeIncludeSchema.optional(),
  data: z.union([ MenteeCreateInputSchema,MenteeUncheckedCreateInputSchema ]),
}).strict()

export const MenteeUpsertArgsSchema: z.ZodType<Prisma.MenteeUpsertArgs> = z.object({
  select: MenteeSelectSchema.optional(),
  include: MenteeIncludeSchema.optional(),
  where: MenteeWhereUniqueInputSchema,
  create: z.union([ MenteeCreateInputSchema,MenteeUncheckedCreateInputSchema ]),
  update: z.union([ MenteeUpdateInputSchema,MenteeUncheckedUpdateInputSchema ]),
}).strict()

export const MenteeCreateManyArgsSchema: z.ZodType<Prisma.MenteeCreateManyArgs> = z.object({
  data: z.union([ MenteeCreateManyInputSchema,MenteeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const MenteeDeleteArgsSchema: z.ZodType<Prisma.MenteeDeleteArgs> = z.object({
  select: MenteeSelectSchema.optional(),
  include: MenteeIncludeSchema.optional(),
  where: MenteeWhereUniqueInputSchema,
}).strict()

export const MenteeUpdateArgsSchema: z.ZodType<Prisma.MenteeUpdateArgs> = z.object({
  select: MenteeSelectSchema.optional(),
  include: MenteeIncludeSchema.optional(),
  data: z.union([ MenteeUpdateInputSchema,MenteeUncheckedUpdateInputSchema ]),
  where: MenteeWhereUniqueInputSchema,
}).strict()

export const MenteeUpdateManyArgsSchema: z.ZodType<Prisma.MenteeUpdateManyArgs> = z.object({
  data: z.union([ MenteeUpdateManyMutationInputSchema,MenteeUncheckedUpdateManyInputSchema ]),
  where: MenteeWhereInputSchema.optional(),
}).strict()

export const MenteeDeleteManyArgsSchema: z.ZodType<Prisma.MenteeDeleteManyArgs> = z.object({
  where: MenteeWhereInputSchema.optional(),
}).strict()

export const MentorCreateArgsSchema: z.ZodType<Prisma.MentorCreateArgs> = z.object({
  select: MentorSelectSchema.optional(),
  include: MentorIncludeSchema.optional(),
  data: z.union([ MentorCreateInputSchema,MentorUncheckedCreateInputSchema ]),
}).strict()

export const MentorUpsertArgsSchema: z.ZodType<Prisma.MentorUpsertArgs> = z.object({
  select: MentorSelectSchema.optional(),
  include: MentorIncludeSchema.optional(),
  where: MentorWhereUniqueInputSchema,
  create: z.union([ MentorCreateInputSchema,MentorUncheckedCreateInputSchema ]),
  update: z.union([ MentorUpdateInputSchema,MentorUncheckedUpdateInputSchema ]),
}).strict()

export const MentorCreateManyArgsSchema: z.ZodType<Prisma.MentorCreateManyArgs> = z.object({
  data: z.union([ MentorCreateManyInputSchema,MentorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const MentorDeleteArgsSchema: z.ZodType<Prisma.MentorDeleteArgs> = z.object({
  select: MentorSelectSchema.optional(),
  include: MentorIncludeSchema.optional(),
  where: MentorWhereUniqueInputSchema,
}).strict()

export const MentorUpdateArgsSchema: z.ZodType<Prisma.MentorUpdateArgs> = z.object({
  select: MentorSelectSchema.optional(),
  include: MentorIncludeSchema.optional(),
  data: z.union([ MentorUpdateInputSchema,MentorUncheckedUpdateInputSchema ]),
  where: MentorWhereUniqueInputSchema,
}).strict()

export const MentorUpdateManyArgsSchema: z.ZodType<Prisma.MentorUpdateManyArgs> = z.object({
  data: z.union([ MentorUpdateManyMutationInputSchema,MentorUncheckedUpdateManyInputSchema ]),
  where: MentorWhereInputSchema.optional(),
}).strict()

export const MentorDeleteManyArgsSchema: z.ZodType<Prisma.MentorDeleteManyArgs> = z.object({
  where: MentorWhereInputSchema.optional(),
}).strict()