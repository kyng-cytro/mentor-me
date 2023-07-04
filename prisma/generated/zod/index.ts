import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const AvailabilityScalarFieldEnumSchema = z.enum(['id','startTime','endTime','dayOfWeek','mentorId','createdAt','updatedAt']);

export const MeetingsScalarFieldEnumSchema = z.enum(['id','date','startTime','endTime','mentorId','menteeId','createdAt','updatedAt']);

export const MenteeScalarFieldEnumSchema = z.enum(['id','educationLevel','careerGoals','careerHistory','careerChallenges','skills','bio','userId']);

export const MentorScalarFieldEnumSchema = z.enum(['id','field_expertise','yearsOfExperience','description','rating','userId']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TestimonialScalarFieldEnumSchema = z.enum(['id','content','mentorId','createdAt','updatedAt']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','phone','active','profileImage','gender','dob','role','createdAt','updatedAt']);

export const RoleSchema = z.enum(['MENTOR','MENTEE','ADMIN']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: RoleSchema,
  id: z.string().cuid(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean(),
  profileImage: z.string().nullable(),
  gender: z.string(),
  dob: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// MENTOR SCHEMA
/////////////////////////////////////////

export const MentorSchema = z.object({
  id: z.string().cuid(),
  field_expertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number(),
  userId: z.string(),
})

export type Mentor = z.infer<typeof MentorSchema>

/////////////////////////////////////////
// MENTEE SCHEMA
/////////////////////////////////////////

export const MenteeSchema = z.object({
  id: z.string().cuid(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.string().array(),
  bio: z.string(),
  userId: z.string(),
})

export type Mentee = z.infer<typeof MenteeSchema>

/////////////////////////////////////////
// MEETINGS SCHEMA
/////////////////////////////////////////

export const MeetingsSchema = z.object({
  id: z.string().cuid(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  mentorId: z.string(),
  menteeId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Meetings = z.infer<typeof MeetingsSchema>

/////////////////////////////////////////
// TESTIMONIAL SCHEMA
/////////////////////////////////////////

export const TestimonialSchema = z.object({
  id: z.string().cuid(),
  content: z.string(),
  mentorId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Testimonial = z.infer<typeof TestimonialSchema>

/////////////////////////////////////////
// AVAILABILITY SCHEMA
/////////////////////////////////////////

export const AvailabilitySchema = z.object({
  id: z.string().cuid(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  dayOfWeek: z.string(),
  mentorId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Availability = z.infer<typeof AvailabilitySchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  mentor: z.union([z.boolean(),z.lazy(() => MentorFindManyArgsSchema)]).optional(),
  mentee: z.union([z.boolean(),z.lazy(() => MenteeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  mentor: z.boolean().optional(),
  mentee: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  active: z.boolean().optional(),
  profileImage: z.boolean().optional(),
  gender: z.boolean().optional(),
  dob: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  mentor: z.union([z.boolean(),z.lazy(() => MentorFindManyArgsSchema)]).optional(),
  mentee: z.union([z.boolean(),z.lazy(() => MenteeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MENTOR
//------------------------------------------------------

export const MentorIncludeSchema: z.ZodType<Prisma.MentorInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  mentees: z.union([z.boolean(),z.lazy(() => MenteeFindManyArgsSchema)]).optional(),
  Meetings: z.union([z.boolean(),z.lazy(() => MeetingsFindManyArgsSchema)]).optional(),
  testimonials: z.union([z.boolean(),z.lazy(() => TestimonialFindManyArgsSchema)]).optional(),
  availabilities: z.union([z.boolean(),z.lazy(() => AvailabilityFindManyArgsSchema)]).optional(),
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
  Meetings: z.boolean().optional(),
  testimonials: z.boolean().optional(),
  availabilities: z.boolean().optional(),
}).strict();

export const MentorSelectSchema: z.ZodType<Prisma.MentorSelect> = z.object({
  id: z.boolean().optional(),
  field_expertise: z.boolean().optional(),
  yearsOfExperience: z.boolean().optional(),
  description: z.boolean().optional(),
  rating: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  mentees: z.union([z.boolean(),z.lazy(() => MenteeFindManyArgsSchema)]).optional(),
  Meetings: z.union([z.boolean(),z.lazy(() => MeetingsFindManyArgsSchema)]).optional(),
  testimonials: z.union([z.boolean(),z.lazy(() => TestimonialFindManyArgsSchema)]).optional(),
  availabilities: z.union([z.boolean(),z.lazy(() => AvailabilityFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MentorCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MENTEE
//------------------------------------------------------

export const MenteeIncludeSchema: z.ZodType<Prisma.MenteeInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  mentors: z.union([z.boolean(),z.lazy(() => MentorFindManyArgsSchema)]).optional(),
  Meetings: z.union([z.boolean(),z.lazy(() => MeetingsFindManyArgsSchema)]).optional(),
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
  Meetings: z.boolean().optional(),
}).strict();

export const MenteeSelectSchema: z.ZodType<Prisma.MenteeSelect> = z.object({
  id: z.boolean().optional(),
  educationLevel: z.boolean().optional(),
  careerGoals: z.boolean().optional(),
  careerHistory: z.boolean().optional(),
  careerChallenges: z.boolean().optional(),
  skills: z.boolean().optional(),
  bio: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  mentors: z.union([z.boolean(),z.lazy(() => MentorFindManyArgsSchema)]).optional(),
  Meetings: z.union([z.boolean(),z.lazy(() => MeetingsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MenteeCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MEETINGS
//------------------------------------------------------

export const MeetingsIncludeSchema: z.ZodType<Prisma.MeetingsInclude> = z.object({
  mentor: z.union([z.boolean(),z.lazy(() => MentorArgsSchema)]).optional(),
  mentee: z.union([z.boolean(),z.lazy(() => MenteeArgsSchema)]).optional(),
}).strict()

export const MeetingsArgsSchema: z.ZodType<Prisma.MeetingsArgs> = z.object({
  select: z.lazy(() => MeetingsSelectSchema).optional(),
  include: z.lazy(() => MeetingsIncludeSchema).optional(),
}).strict();

export const MeetingsSelectSchema: z.ZodType<Prisma.MeetingsSelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  startTime: z.boolean().optional(),
  endTime: z.boolean().optional(),
  mentorId: z.boolean().optional(),
  menteeId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  mentor: z.union([z.boolean(),z.lazy(() => MentorArgsSchema)]).optional(),
  mentee: z.union([z.boolean(),z.lazy(() => MenteeArgsSchema)]).optional(),
}).strict()

// TESTIMONIAL
//------------------------------------------------------

export const TestimonialIncludeSchema: z.ZodType<Prisma.TestimonialInclude> = z.object({
  mentor: z.union([z.boolean(),z.lazy(() => MentorArgsSchema)]).optional(),
}).strict()

export const TestimonialArgsSchema: z.ZodType<Prisma.TestimonialArgs> = z.object({
  select: z.lazy(() => TestimonialSelectSchema).optional(),
  include: z.lazy(() => TestimonialIncludeSchema).optional(),
}).strict();

export const TestimonialSelectSchema: z.ZodType<Prisma.TestimonialSelect> = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  mentorId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  mentor: z.union([z.boolean(),z.lazy(() => MentorArgsSchema)]).optional(),
}).strict()

// AVAILABILITY
//------------------------------------------------------

export const AvailabilityIncludeSchema: z.ZodType<Prisma.AvailabilityInclude> = z.object({
  Mentor: z.union([z.boolean(),z.lazy(() => MentorArgsSchema)]).optional(),
}).strict()

export const AvailabilityArgsSchema: z.ZodType<Prisma.AvailabilityArgs> = z.object({
  select: z.lazy(() => AvailabilitySelectSchema).optional(),
  include: z.lazy(() => AvailabilityIncludeSchema).optional(),
}).strict();

export const AvailabilitySelectSchema: z.ZodType<Prisma.AvailabilitySelect> = z.object({
  id: z.boolean().optional(),
  startTime: z.boolean().optional(),
  endTime: z.boolean().optional(),
  dayOfWeek: z.boolean().optional(),
  mentorId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Mentor: z.union([z.boolean(),z.lazy(() => MentorArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  profileImage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  gender: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dob: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentor: z.lazy(() => MentorListRelationFilterSchema).optional(),
  mentee: z.lazy(() => MenteeListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  mentor: z.lazy(() => MentorOrderByRelationAggregateInputSchema).optional(),
  mentee: z.lazy(() => MenteeOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
  phone: z.string().optional()
}).strict();

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
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
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  active: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  profileImage: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  gender: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dob: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleWithAggregatesFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MentorWhereInputSchema: z.ZodType<Prisma.MentorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MentorWhereInputSchema),z.lazy(() => MentorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MentorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MentorWhereInputSchema),z.lazy(() => MentorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  field_expertise: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  yearsOfExperience: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeListRelationFilterSchema).optional(),
  Meetings: z.lazy(() => MeetingsListRelationFilterSchema).optional(),
  testimonials: z.lazy(() => TestimonialListRelationFilterSchema).optional(),
  availabilities: z.lazy(() => AvailabilityListRelationFilterSchema).optional()
}).strict();

export const MentorOrderByWithRelationInputSchema: z.ZodType<Prisma.MentorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  field_expertise: z.lazy(() => SortOrderSchema).optional(),
  yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  mentees: z.lazy(() => MenteeOrderByRelationAggregateInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsOrderByRelationAggregateInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialOrderByRelationAggregateInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityOrderByRelationAggregateInputSchema).optional()
}).strict();

export const MentorWhereUniqueInputSchema: z.ZodType<Prisma.MentorWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const MentorOrderByWithAggregationInputSchema: z.ZodType<Prisma.MentorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  field_expertise: z.lazy(() => SortOrderSchema).optional(),
  yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MentorCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MentorAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MentorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MentorMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MentorSumOrderByAggregateInputSchema).optional()
}).strict();

export const MentorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MentorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MentorScalarWhereWithAggregatesInputSchema),z.lazy(() => MentorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MentorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MentorScalarWhereWithAggregatesInputSchema),z.lazy(() => MentorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  field_expertise: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  yearsOfExperience: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const MenteeWhereInputSchema: z.ZodType<Prisma.MenteeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MenteeWhereInputSchema),z.lazy(() => MenteeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MenteeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MenteeWhereInputSchema),z.lazy(() => MenteeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  educationLevel: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  careerGoals: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  careerHistory: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  careerChallenges: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  skills: z.lazy(() => StringNullableListFilterSchema).optional(),
  bio: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorListRelationFilterSchema).optional(),
  Meetings: z.lazy(() => MeetingsListRelationFilterSchema).optional()
}).strict();

export const MenteeOrderByWithRelationInputSchema: z.ZodType<Prisma.MenteeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  educationLevel: z.lazy(() => SortOrderSchema).optional(),
  careerGoals: z.lazy(() => SortOrderSchema).optional(),
  careerHistory: z.lazy(() => SortOrderSchema).optional(),
  careerChallenges: z.lazy(() => SortOrderSchema).optional(),
  skills: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  mentors: z.lazy(() => MentorOrderByRelationAggregateInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const MenteeWhereUniqueInputSchema: z.ZodType<Prisma.MenteeWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const MenteeOrderByWithAggregationInputSchema: z.ZodType<Prisma.MenteeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  educationLevel: z.lazy(() => SortOrderSchema).optional(),
  careerGoals: z.lazy(() => SortOrderSchema).optional(),
  careerHistory: z.lazy(() => SortOrderSchema).optional(),
  careerChallenges: z.lazy(() => SortOrderSchema).optional(),
  skills: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MenteeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MenteeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MenteeMinOrderByAggregateInputSchema).optional()
}).strict();

export const MenteeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MenteeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MenteeScalarWhereWithAggregatesInputSchema),z.lazy(() => MenteeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MenteeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MenteeScalarWhereWithAggregatesInputSchema),z.lazy(() => MenteeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  educationLevel: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  careerGoals: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  careerHistory: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  careerChallenges: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  skills: z.lazy(() => StringNullableListFilterSchema).optional(),
  bio: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const MeetingsWhereInputSchema: z.ZodType<Prisma.MeetingsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MeetingsWhereInputSchema),z.lazy(() => MeetingsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MeetingsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MeetingsWhereInputSchema),z.lazy(() => MeetingsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  menteeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentor: z.union([ z.lazy(() => MentorRelationFilterSchema),z.lazy(() => MentorWhereInputSchema) ]).optional(),
  mentee: z.union([ z.lazy(() => MenteeRelationFilterSchema),z.lazy(() => MenteeWhereInputSchema) ]).optional(),
}).strict();

export const MeetingsOrderByWithRelationInputSchema: z.ZodType<Prisma.MeetingsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  mentor: z.lazy(() => MentorOrderByWithRelationInputSchema).optional(),
  mentee: z.lazy(() => MenteeOrderByWithRelationInputSchema).optional()
}).strict();

export const MeetingsWhereUniqueInputSchema: z.ZodType<Prisma.MeetingsWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const MeetingsOrderByWithAggregationInputSchema: z.ZodType<Prisma.MeetingsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MeetingsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MeetingsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MeetingsMinOrderByAggregateInputSchema).optional()
}).strict();

export const MeetingsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MeetingsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MeetingsScalarWhereWithAggregatesInputSchema),z.lazy(() => MeetingsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MeetingsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MeetingsScalarWhereWithAggregatesInputSchema),z.lazy(() => MeetingsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  menteeId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const TestimonialWhereInputSchema: z.ZodType<Prisma.TestimonialWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TestimonialWhereInputSchema),z.lazy(() => TestimonialWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestimonialWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestimonialWhereInputSchema),z.lazy(() => TestimonialWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentor: z.union([ z.lazy(() => MentorRelationFilterSchema),z.lazy(() => MentorWhereInputSchema) ]).optional().nullable(),
}).strict();

export const TestimonialOrderByWithRelationInputSchema: z.ZodType<Prisma.TestimonialOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  mentor: z.lazy(() => MentorOrderByWithRelationInputSchema).optional()
}).strict();

export const TestimonialWhereUniqueInputSchema: z.ZodType<Prisma.TestimonialWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const TestimonialOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestimonialOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestimonialCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestimonialMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestimonialMinOrderByAggregateInputSchema).optional()
}).strict();

export const TestimonialScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TestimonialScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TestimonialScalarWhereWithAggregatesInputSchema),z.lazy(() => TestimonialScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestimonialScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestimonialScalarWhereWithAggregatesInputSchema),z.lazy(() => TestimonialScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AvailabilityWhereInputSchema: z.ZodType<Prisma.AvailabilityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AvailabilityWhereInputSchema),z.lazy(() => AvailabilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AvailabilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AvailabilityWhereInputSchema),z.lazy(() => AvailabilityWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Mentor: z.union([ z.lazy(() => MentorRelationFilterSchema),z.lazy(() => MentorWhereInputSchema) ]).optional().nullable(),
}).strict();

export const AvailabilityOrderByWithRelationInputSchema: z.ZodType<Prisma.AvailabilityOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Mentor: z.lazy(() => MentorOrderByWithRelationInputSchema).optional()
}).strict();

export const AvailabilityWhereUniqueInputSchema: z.ZodType<Prisma.AvailabilityWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const AvailabilityOrderByWithAggregationInputSchema: z.ZodType<Prisma.AvailabilityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AvailabilityCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AvailabilityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AvailabilityMinOrderByAggregateInputSchema).optional()
}).strict();

export const AvailabilityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AvailabilityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AvailabilityScalarWhereWithAggregatesInputSchema),z.lazy(() => AvailabilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AvailabilityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AvailabilityScalarWhereWithAggregatesInputSchema),z.lazy(() => AvailabilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
  dob: z.coerce.date(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorCreateNestedManyWithoutUserInputSchema).optional(),
  mentee: z.lazy(() => MenteeCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
  dob: z.coerce.date(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  mentee: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateManyWithoutUserNestedInputSchema).optional(),
  mentee: z.lazy(() => MenteeUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  mentee: z.lazy(() => MenteeUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
  dob: z.coerce.date(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MentorCreateInputSchema: z.ZodType<Prisma.MentorCreateInput> = z.object({
  id: z.string().cuid().optional(),
  field_expertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number(),
  user: z.lazy(() => UserCreateNestedOneWithoutMentorInputSchema),
  mentees: z.lazy(() => MenteeCreateNestedManyWithoutMentorsInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorUncheckedCreateInputSchema: z.ZodType<Prisma.MentorUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  field_expertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number(),
  userId: z.string(),
  mentees: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutMentorsInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorUpdateInputSchema: z.ZodType<Prisma.MentorUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_expertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMentorNestedInputSchema).optional(),
  mentees: z.lazy(() => MenteeUpdateManyWithoutMentorsNestedInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_expertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUncheckedUpdateManyWithoutMentorsNestedInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorCreateManyInputSchema: z.ZodType<Prisma.MentorCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  field_expertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number(),
  userId: z.string()
}).strict();

export const MentorUpdateManyMutationInputSchema: z.ZodType<Prisma.MentorUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_expertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MentorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_expertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MenteeCreateInputSchema: z.ZodType<Prisma.MenteeCreateInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutMenteeInputSchema),
  mentors: z.lazy(() => MentorCreateNestedManyWithoutMenteesInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeUncheckedCreateInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  userId: z.string(),
  mentors: z.lazy(() => MentorUncheckedCreateNestedManyWithoutMenteesInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUncheckedCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeUpdateInputSchema: z.ZodType<Prisma.MenteeUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMenteeNestedInputSchema).optional(),
  mentors: z.lazy(() => MentorUpdateManyWithoutMenteesNestedInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorUncheckedUpdateManyWithoutMenteesNestedInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MenteeCreateManyInputSchema: z.ZodType<Prisma.MenteeCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  userId: z.string()
}).strict();

export const MenteeUpdateManyMutationInputSchema: z.ZodType<Prisma.MenteeUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MenteeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MeetingsCreateInputSchema: z.ZodType<Prisma.MeetingsCreateInput> = z.object({
  id: z.string().cuid().optional(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorCreateNestedOneWithoutMeetingsInputSchema),
  mentee: z.lazy(() => MenteeCreateNestedOneWithoutMeetingsInputSchema)
}).strict();

export const MeetingsUncheckedCreateInputSchema: z.ZodType<Prisma.MeetingsUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  mentorId: z.string(),
  menteeId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MeetingsUpdateInputSchema: z.ZodType<Prisma.MeetingsUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateOneRequiredWithoutMeetingsNestedInputSchema).optional(),
  mentee: z.lazy(() => MenteeUpdateOneRequiredWithoutMeetingsNestedInputSchema).optional()
}).strict();

export const MeetingsUncheckedUpdateInputSchema: z.ZodType<Prisma.MeetingsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MeetingsCreateManyInputSchema: z.ZodType<Prisma.MeetingsCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  mentorId: z.string(),
  menteeId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MeetingsUpdateManyMutationInputSchema: z.ZodType<Prisma.MeetingsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MeetingsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MeetingsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestimonialCreateInputSchema: z.ZodType<Prisma.TestimonialCreateInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorCreateNestedOneWithoutTestimonialsInputSchema).optional()
}).strict();

export const TestimonialUncheckedCreateInputSchema: z.ZodType<Prisma.TestimonialUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  mentorId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TestimonialUpdateInputSchema: z.ZodType<Prisma.TestimonialUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateOneWithoutTestimonialsNestedInputSchema).optional()
}).strict();

export const TestimonialUncheckedUpdateInputSchema: z.ZodType<Prisma.TestimonialUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestimonialCreateManyInputSchema: z.ZodType<Prisma.TestimonialCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  mentorId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TestimonialUpdateManyMutationInputSchema: z.ZodType<Prisma.TestimonialUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestimonialUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TestimonialUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AvailabilityCreateInputSchema: z.ZodType<Prisma.AvailabilityCreateInput> = z.object({
  id: z.string().cuid().optional(),
  startTime: z.coerce.date().optional(),
  endTime: z.coerce.date().optional(),
  dayOfWeek: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Mentor: z.lazy(() => MentorCreateNestedOneWithoutAvailabilitiesInputSchema).optional()
}).strict();

export const AvailabilityUncheckedCreateInputSchema: z.ZodType<Prisma.AvailabilityUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  startTime: z.coerce.date().optional(),
  endTime: z.coerce.date().optional(),
  dayOfWeek: z.string(),
  mentorId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AvailabilityUpdateInputSchema: z.ZodType<Prisma.AvailabilityUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Mentor: z.lazy(() => MentorUpdateOneWithoutAvailabilitiesNestedInputSchema).optional()
}).strict();

export const AvailabilityUncheckedUpdateInputSchema: z.ZodType<Prisma.AvailabilityUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AvailabilityCreateManyInputSchema: z.ZodType<Prisma.AvailabilityCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  startTime: z.coerce.date().optional(),
  endTime: z.coerce.date().optional(),
  dayOfWeek: z.string(),
  mentorId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AvailabilityUpdateManyMutationInputSchema: z.ZodType<Prisma.AvailabilityUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AvailabilityUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AvailabilityUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
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

export const EnumRoleFilterSchema: z.ZodType<Prisma.EnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleFilterSchema) ]).optional(),
}).strict();

export const MentorListRelationFilterSchema: z.ZodType<Prisma.MentorListRelationFilter> = z.object({
  every: z.lazy(() => MentorWhereInputSchema).optional(),
  some: z.lazy(() => MentorWhereInputSchema).optional(),
  none: z.lazy(() => MentorWhereInputSchema).optional()
}).strict();

export const MenteeListRelationFilterSchema: z.ZodType<Prisma.MenteeListRelationFilter> = z.object({
  every: z.lazy(() => MenteeWhereInputSchema).optional(),
  some: z.lazy(() => MenteeWhereInputSchema).optional(),
  none: z.lazy(() => MenteeWhereInputSchema).optional()
}).strict();

export const MentorOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MentorOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MenteeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MenteeOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
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

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
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

export const EnumRoleWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const MeetingsListRelationFilterSchema: z.ZodType<Prisma.MeetingsListRelationFilter> = z.object({
  every: z.lazy(() => MeetingsWhereInputSchema).optional(),
  some: z.lazy(() => MeetingsWhereInputSchema).optional(),
  none: z.lazy(() => MeetingsWhereInputSchema).optional()
}).strict();

export const TestimonialListRelationFilterSchema: z.ZodType<Prisma.TestimonialListRelationFilter> = z.object({
  every: z.lazy(() => TestimonialWhereInputSchema).optional(),
  some: z.lazy(() => TestimonialWhereInputSchema).optional(),
  none: z.lazy(() => TestimonialWhereInputSchema).optional()
}).strict();

export const AvailabilityListRelationFilterSchema: z.ZodType<Prisma.AvailabilityListRelationFilter> = z.object({
  every: z.lazy(() => AvailabilityWhereInputSchema).optional(),
  some: z.lazy(() => AvailabilityWhereInputSchema).optional(),
  none: z.lazy(() => AvailabilityWhereInputSchema).optional()
}).strict();

export const MeetingsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MeetingsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestimonialOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestimonialOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AvailabilityOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AvailabilityOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentorCountOrderByAggregateInputSchema: z.ZodType<Prisma.MentorCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  field_expertise: z.lazy(() => SortOrderSchema).optional(),
  yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentorAvgOrderByAggregateInputSchema: z.ZodType<Prisma.MentorAvgOrderByAggregateInput> = z.object({
  yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MentorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  field_expertise: z.lazy(() => SortOrderSchema).optional(),
  yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentorMinOrderByAggregateInputSchema: z.ZodType<Prisma.MentorMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  field_expertise: z.lazy(() => SortOrderSchema).optional(),
  yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentorSumOrderByAggregateInputSchema: z.ZodType<Prisma.MentorSumOrderByAggregateInput> = z.object({
  yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const MenteeCountOrderByAggregateInputSchema: z.ZodType<Prisma.MenteeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  educationLevel: z.lazy(() => SortOrderSchema).optional(),
  careerGoals: z.lazy(() => SortOrderSchema).optional(),
  careerHistory: z.lazy(() => SortOrderSchema).optional(),
  careerChallenges: z.lazy(() => SortOrderSchema).optional(),
  skills: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MenteeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MenteeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  educationLevel: z.lazy(() => SortOrderSchema).optional(),
  careerGoals: z.lazy(() => SortOrderSchema).optional(),
  careerHistory: z.lazy(() => SortOrderSchema).optional(),
  careerChallenges: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MenteeMinOrderByAggregateInputSchema: z.ZodType<Prisma.MenteeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  educationLevel: z.lazy(() => SortOrderSchema).optional(),
  careerGoals: z.lazy(() => SortOrderSchema).optional(),
  careerHistory: z.lazy(() => SortOrderSchema).optional(),
  careerChallenges: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentorRelationFilterSchema: z.ZodType<Prisma.MentorRelationFilter> = z.object({
  is: z.lazy(() => MentorWhereInputSchema).optional(),
  isNot: z.lazy(() => MentorWhereInputSchema).optional()
}).strict();

export const MenteeRelationFilterSchema: z.ZodType<Prisma.MenteeRelationFilter> = z.object({
  is: z.lazy(() => MenteeWhereInputSchema).optional(),
  isNot: z.lazy(() => MenteeWhereInputSchema).optional()
}).strict();

export const MeetingsCountOrderByAggregateInputSchema: z.ZodType<Prisma.MeetingsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MeetingsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MeetingsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MeetingsMinOrderByAggregateInputSchema: z.ZodType<Prisma.MeetingsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestimonialCountOrderByAggregateInputSchema: z.ZodType<Prisma.TestimonialCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestimonialMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TestimonialMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestimonialMinOrderByAggregateInputSchema: z.ZodType<Prisma.TestimonialMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AvailabilityCountOrderByAggregateInputSchema: z.ZodType<Prisma.AvailabilityCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AvailabilityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AvailabilityMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AvailabilityMinOrderByAggregateInputSchema: z.ZodType<Prisma.AvailabilityMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentorCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.MentorCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutUserInputSchema),z.lazy(() => MentorCreateWithoutUserInputSchema).array(),z.lazy(() => MentorUncheckedCreateWithoutUserInputSchema),z.lazy(() => MentorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentorCreateOrConnectWithoutUserInputSchema),z.lazy(() => MentorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MentorCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MenteeCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.MenteeCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutUserInputSchema),z.lazy(() => MenteeCreateWithoutUserInputSchema).array(),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MenteeCreateOrConnectWithoutUserInputSchema),z.lazy(() => MenteeCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MenteeCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MentorUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.MentorUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutUserInputSchema),z.lazy(() => MentorCreateWithoutUserInputSchema).array(),z.lazy(() => MentorUncheckedCreateWithoutUserInputSchema),z.lazy(() => MentorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentorCreateOrConnectWithoutUserInputSchema),z.lazy(() => MentorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MentorCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MenteeUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutUserInputSchema),z.lazy(() => MenteeCreateWithoutUserInputSchema).array(),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MenteeCreateOrConnectWithoutUserInputSchema),z.lazy(() => MenteeCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MenteeCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const EnumRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RoleSchema).optional()
}).strict();

export const MentorUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.MentorUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutUserInputSchema),z.lazy(() => MentorCreateWithoutUserInputSchema).array(),z.lazy(() => MentorUncheckedCreateWithoutUserInputSchema),z.lazy(() => MentorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentorCreateOrConnectWithoutUserInputSchema),z.lazy(() => MentorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MentorUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MentorUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MentorCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MentorUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MentorUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MentorUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => MentorUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MentorScalarWhereInputSchema),z.lazy(() => MentorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MenteeUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.MenteeUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutUserInputSchema),z.lazy(() => MenteeCreateWithoutUserInputSchema).array(),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MenteeCreateOrConnectWithoutUserInputSchema),z.lazy(() => MenteeCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MenteeUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MenteeUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MenteeCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MenteeUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MenteeUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MenteeUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => MenteeUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MenteeScalarWhereInputSchema),z.lazy(() => MenteeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MentorUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutUserInputSchema),z.lazy(() => MentorCreateWithoutUserInputSchema).array(),z.lazy(() => MentorUncheckedCreateWithoutUserInputSchema),z.lazy(() => MentorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentorCreateOrConnectWithoutUserInputSchema),z.lazy(() => MentorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MentorUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MentorUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MentorCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MentorUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MentorUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MentorUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => MentorUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MentorScalarWhereInputSchema),z.lazy(() => MentorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MenteeUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutUserInputSchema),z.lazy(() => MenteeCreateWithoutUserInputSchema).array(),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MenteeCreateOrConnectWithoutUserInputSchema),z.lazy(() => MenteeCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MenteeUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MenteeUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MenteeCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MenteeUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MenteeUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MenteeUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => MenteeUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MenteeScalarWhereInputSchema),z.lazy(() => MenteeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutMentorInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutMentorInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMentorInputSchema),z.lazy(() => UserUncheckedCreateWithoutMentorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMentorInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const MenteeCreateNestedManyWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeCreateNestedManyWithoutMentorsInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutMentorsInputSchema),z.lazy(() => MenteeCreateWithoutMentorsInputSchema).array(),z.lazy(() => MenteeUncheckedCreateWithoutMentorsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMentorsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MenteeCreateOrConnectWithoutMentorsInputSchema),z.lazy(() => MenteeCreateOrConnectWithoutMentorsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MeetingsCreateNestedManyWithoutMentorInputSchema: z.ZodType<Prisma.MeetingsCreateNestedManyWithoutMentorInput> = z.object({
  create: z.union([ z.lazy(() => MeetingsCreateWithoutMentorInputSchema),z.lazy(() => MeetingsCreateWithoutMentorInputSchema).array(),z.lazy(() => MeetingsUncheckedCreateWithoutMentorInputSchema),z.lazy(() => MeetingsUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MeetingsCreateOrConnectWithoutMentorInputSchema),z.lazy(() => MeetingsCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MeetingsCreateManyMentorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestimonialCreateNestedManyWithoutMentorInputSchema: z.ZodType<Prisma.TestimonialCreateNestedManyWithoutMentorInput> = z.object({
  create: z.union([ z.lazy(() => TestimonialCreateWithoutMentorInputSchema),z.lazy(() => TestimonialCreateWithoutMentorInputSchema).array(),z.lazy(() => TestimonialUncheckedCreateWithoutMentorInputSchema),z.lazy(() => TestimonialUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestimonialCreateOrConnectWithoutMentorInputSchema),z.lazy(() => TestimonialCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestimonialCreateManyMentorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AvailabilityCreateNestedManyWithoutMentorInputSchema: z.ZodType<Prisma.AvailabilityCreateNestedManyWithoutMentorInput> = z.object({
  create: z.union([ z.lazy(() => AvailabilityCreateWithoutMentorInputSchema),z.lazy(() => AvailabilityCreateWithoutMentorInputSchema).array(),z.lazy(() => AvailabilityUncheckedCreateWithoutMentorInputSchema),z.lazy(() => AvailabilityUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AvailabilityCreateOrConnectWithoutMentorInputSchema),z.lazy(() => AvailabilityCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AvailabilityCreateManyMentorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MenteeUncheckedCreateNestedManyWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateNestedManyWithoutMentorsInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutMentorsInputSchema),z.lazy(() => MenteeCreateWithoutMentorsInputSchema).array(),z.lazy(() => MenteeUncheckedCreateWithoutMentorsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMentorsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MenteeCreateOrConnectWithoutMentorsInputSchema),z.lazy(() => MenteeCreateOrConnectWithoutMentorsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MenteeWhereUniqueInputSchema),z.lazy(() => MenteeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MeetingsUncheckedCreateNestedManyWithoutMentorInputSchema: z.ZodType<Prisma.MeetingsUncheckedCreateNestedManyWithoutMentorInput> = z.object({
  create: z.union([ z.lazy(() => MeetingsCreateWithoutMentorInputSchema),z.lazy(() => MeetingsCreateWithoutMentorInputSchema).array(),z.lazy(() => MeetingsUncheckedCreateWithoutMentorInputSchema),z.lazy(() => MeetingsUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MeetingsCreateOrConnectWithoutMentorInputSchema),z.lazy(() => MeetingsCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MeetingsCreateManyMentorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestimonialUncheckedCreateNestedManyWithoutMentorInputSchema: z.ZodType<Prisma.TestimonialUncheckedCreateNestedManyWithoutMentorInput> = z.object({
  create: z.union([ z.lazy(() => TestimonialCreateWithoutMentorInputSchema),z.lazy(() => TestimonialCreateWithoutMentorInputSchema).array(),z.lazy(() => TestimonialUncheckedCreateWithoutMentorInputSchema),z.lazy(() => TestimonialUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestimonialCreateOrConnectWithoutMentorInputSchema),z.lazy(() => TestimonialCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestimonialCreateManyMentorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AvailabilityUncheckedCreateNestedManyWithoutMentorInputSchema: z.ZodType<Prisma.AvailabilityUncheckedCreateNestedManyWithoutMentorInput> = z.object({
  create: z.union([ z.lazy(() => AvailabilityCreateWithoutMentorInputSchema),z.lazy(() => AvailabilityCreateWithoutMentorInputSchema).array(),z.lazy(() => AvailabilityUncheckedCreateWithoutMentorInputSchema),z.lazy(() => AvailabilityUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AvailabilityCreateOrConnectWithoutMentorInputSchema),z.lazy(() => AvailabilityCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AvailabilityCreateManyMentorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UserUpdateOneRequiredWithoutMentorNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutMentorNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMentorInputSchema),z.lazy(() => UserUncheckedCreateWithoutMentorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMentorInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutMentorInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutMentorInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMentorInputSchema) ]).optional(),
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

export const MeetingsUpdateManyWithoutMentorNestedInputSchema: z.ZodType<Prisma.MeetingsUpdateManyWithoutMentorNestedInput> = z.object({
  create: z.union([ z.lazy(() => MeetingsCreateWithoutMentorInputSchema),z.lazy(() => MeetingsCreateWithoutMentorInputSchema).array(),z.lazy(() => MeetingsUncheckedCreateWithoutMentorInputSchema),z.lazy(() => MeetingsUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MeetingsCreateOrConnectWithoutMentorInputSchema),z.lazy(() => MeetingsCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MeetingsUpsertWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => MeetingsUpsertWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MeetingsCreateManyMentorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MeetingsUpdateWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => MeetingsUpdateWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MeetingsUpdateManyWithWhereWithoutMentorInputSchema),z.lazy(() => MeetingsUpdateManyWithWhereWithoutMentorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MeetingsScalarWhereInputSchema),z.lazy(() => MeetingsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestimonialUpdateManyWithoutMentorNestedInputSchema: z.ZodType<Prisma.TestimonialUpdateManyWithoutMentorNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestimonialCreateWithoutMentorInputSchema),z.lazy(() => TestimonialCreateWithoutMentorInputSchema).array(),z.lazy(() => TestimonialUncheckedCreateWithoutMentorInputSchema),z.lazy(() => TestimonialUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestimonialCreateOrConnectWithoutMentorInputSchema),z.lazy(() => TestimonialCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestimonialUpsertWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => TestimonialUpsertWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestimonialCreateManyMentorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestimonialUpdateWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => TestimonialUpdateWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestimonialUpdateManyWithWhereWithoutMentorInputSchema),z.lazy(() => TestimonialUpdateManyWithWhereWithoutMentorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestimonialScalarWhereInputSchema),z.lazy(() => TestimonialScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AvailabilityUpdateManyWithoutMentorNestedInputSchema: z.ZodType<Prisma.AvailabilityUpdateManyWithoutMentorNestedInput> = z.object({
  create: z.union([ z.lazy(() => AvailabilityCreateWithoutMentorInputSchema),z.lazy(() => AvailabilityCreateWithoutMentorInputSchema).array(),z.lazy(() => AvailabilityUncheckedCreateWithoutMentorInputSchema),z.lazy(() => AvailabilityUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AvailabilityCreateOrConnectWithoutMentorInputSchema),z.lazy(() => AvailabilityCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AvailabilityUpsertWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => AvailabilityUpsertWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AvailabilityCreateManyMentorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AvailabilityUpdateWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => AvailabilityUpdateWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AvailabilityUpdateManyWithWhereWithoutMentorInputSchema),z.lazy(() => AvailabilityUpdateManyWithWhereWithoutMentorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AvailabilityScalarWhereInputSchema),z.lazy(() => AvailabilityScalarWhereInputSchema).array() ]).optional(),
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

export const MeetingsUncheckedUpdateManyWithoutMentorNestedInputSchema: z.ZodType<Prisma.MeetingsUncheckedUpdateManyWithoutMentorNestedInput> = z.object({
  create: z.union([ z.lazy(() => MeetingsCreateWithoutMentorInputSchema),z.lazy(() => MeetingsCreateWithoutMentorInputSchema).array(),z.lazy(() => MeetingsUncheckedCreateWithoutMentorInputSchema),z.lazy(() => MeetingsUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MeetingsCreateOrConnectWithoutMentorInputSchema),z.lazy(() => MeetingsCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MeetingsUpsertWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => MeetingsUpsertWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MeetingsCreateManyMentorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MeetingsUpdateWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => MeetingsUpdateWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MeetingsUpdateManyWithWhereWithoutMentorInputSchema),z.lazy(() => MeetingsUpdateManyWithWhereWithoutMentorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MeetingsScalarWhereInputSchema),z.lazy(() => MeetingsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestimonialUncheckedUpdateManyWithoutMentorNestedInputSchema: z.ZodType<Prisma.TestimonialUncheckedUpdateManyWithoutMentorNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestimonialCreateWithoutMentorInputSchema),z.lazy(() => TestimonialCreateWithoutMentorInputSchema).array(),z.lazy(() => TestimonialUncheckedCreateWithoutMentorInputSchema),z.lazy(() => TestimonialUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestimonialCreateOrConnectWithoutMentorInputSchema),z.lazy(() => TestimonialCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestimonialUpsertWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => TestimonialUpsertWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestimonialCreateManyMentorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestimonialUpdateWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => TestimonialUpdateWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestimonialUpdateManyWithWhereWithoutMentorInputSchema),z.lazy(() => TestimonialUpdateManyWithWhereWithoutMentorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestimonialScalarWhereInputSchema),z.lazy(() => TestimonialScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AvailabilityUncheckedUpdateManyWithoutMentorNestedInputSchema: z.ZodType<Prisma.AvailabilityUncheckedUpdateManyWithoutMentorNestedInput> = z.object({
  create: z.union([ z.lazy(() => AvailabilityCreateWithoutMentorInputSchema),z.lazy(() => AvailabilityCreateWithoutMentorInputSchema).array(),z.lazy(() => AvailabilityUncheckedCreateWithoutMentorInputSchema),z.lazy(() => AvailabilityUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AvailabilityCreateOrConnectWithoutMentorInputSchema),z.lazy(() => AvailabilityCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AvailabilityUpsertWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => AvailabilityUpsertWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AvailabilityCreateManyMentorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AvailabilityUpdateWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => AvailabilityUpdateWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AvailabilityUpdateManyWithWhereWithoutMentorInputSchema),z.lazy(() => AvailabilityUpdateManyWithWhereWithoutMentorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AvailabilityScalarWhereInputSchema),z.lazy(() => AvailabilityScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MenteeCreateskillsInputSchema: z.ZodType<Prisma.MenteeCreateskillsInput> = z.object({
  set: z.string().array()
}).strict();

export const UserCreateNestedOneWithoutMenteeInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutMenteeInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMenteeInputSchema),z.lazy(() => UserUncheckedCreateWithoutMenteeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMenteeInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const MentorCreateNestedManyWithoutMenteesInputSchema: z.ZodType<Prisma.MentorCreateNestedManyWithoutMenteesInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutMenteesInputSchema),z.lazy(() => MentorCreateWithoutMenteesInputSchema).array(),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentorCreateOrConnectWithoutMenteesInputSchema),z.lazy(() => MentorCreateOrConnectWithoutMenteesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MeetingsCreateNestedManyWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingsCreateNestedManyWithoutMenteeInput> = z.object({
  create: z.union([ z.lazy(() => MeetingsCreateWithoutMenteeInputSchema),z.lazy(() => MeetingsCreateWithoutMenteeInputSchema).array(),z.lazy(() => MeetingsUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => MeetingsUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MeetingsCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => MeetingsCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MeetingsCreateManyMenteeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MentorUncheckedCreateNestedManyWithoutMenteesInputSchema: z.ZodType<Prisma.MentorUncheckedCreateNestedManyWithoutMenteesInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutMenteesInputSchema),z.lazy(() => MentorCreateWithoutMenteesInputSchema).array(),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentorCreateOrConnectWithoutMenteesInputSchema),z.lazy(() => MentorCreateOrConnectWithoutMenteesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MeetingsUncheckedCreateNestedManyWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingsUncheckedCreateNestedManyWithoutMenteeInput> = z.object({
  create: z.union([ z.lazy(() => MeetingsCreateWithoutMenteeInputSchema),z.lazy(() => MeetingsCreateWithoutMenteeInputSchema).array(),z.lazy(() => MeetingsUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => MeetingsUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MeetingsCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => MeetingsCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MeetingsCreateManyMenteeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MenteeUpdateskillsInputSchema: z.ZodType<Prisma.MenteeUpdateskillsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutMenteeNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutMenteeNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMenteeInputSchema),z.lazy(() => UserUncheckedCreateWithoutMenteeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMenteeInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutMenteeInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutMenteeInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMenteeInputSchema) ]).optional(),
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

export const MeetingsUpdateManyWithoutMenteeNestedInputSchema: z.ZodType<Prisma.MeetingsUpdateManyWithoutMenteeNestedInput> = z.object({
  create: z.union([ z.lazy(() => MeetingsCreateWithoutMenteeInputSchema),z.lazy(() => MeetingsCreateWithoutMenteeInputSchema).array(),z.lazy(() => MeetingsUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => MeetingsUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MeetingsCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => MeetingsCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MeetingsUpsertWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => MeetingsUpsertWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MeetingsCreateManyMenteeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MeetingsUpdateWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => MeetingsUpdateWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MeetingsUpdateManyWithWhereWithoutMenteeInputSchema),z.lazy(() => MeetingsUpdateManyWithWhereWithoutMenteeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MeetingsScalarWhereInputSchema),z.lazy(() => MeetingsScalarWhereInputSchema).array() ]).optional(),
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

export const MeetingsUncheckedUpdateManyWithoutMenteeNestedInputSchema: z.ZodType<Prisma.MeetingsUncheckedUpdateManyWithoutMenteeNestedInput> = z.object({
  create: z.union([ z.lazy(() => MeetingsCreateWithoutMenteeInputSchema),z.lazy(() => MeetingsCreateWithoutMenteeInputSchema).array(),z.lazy(() => MeetingsUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => MeetingsUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MeetingsCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => MeetingsCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MeetingsUpsertWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => MeetingsUpsertWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MeetingsCreateManyMenteeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MeetingsWhereUniqueInputSchema),z.lazy(() => MeetingsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MeetingsUpdateWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => MeetingsUpdateWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MeetingsUpdateManyWithWhereWithoutMenteeInputSchema),z.lazy(() => MeetingsUpdateManyWithWhereWithoutMenteeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MeetingsScalarWhereInputSchema),z.lazy(() => MeetingsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MentorCreateNestedOneWithoutMeetingsInputSchema: z.ZodType<Prisma.MentorCreateNestedOneWithoutMeetingsInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutMeetingsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMeetingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutMeetingsInputSchema).optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional()
}).strict();

export const MenteeCreateNestedOneWithoutMeetingsInputSchema: z.ZodType<Prisma.MenteeCreateNestedOneWithoutMeetingsInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutMeetingsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMeetingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MenteeCreateOrConnectWithoutMeetingsInputSchema).optional(),
  connect: z.lazy(() => MenteeWhereUniqueInputSchema).optional()
}).strict();

export const MentorUpdateOneRequiredWithoutMeetingsNestedInputSchema: z.ZodType<Prisma.MentorUpdateOneRequiredWithoutMeetingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutMeetingsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMeetingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutMeetingsInputSchema).optional(),
  upsert: z.lazy(() => MentorUpsertWithoutMeetingsInputSchema).optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MentorUpdateWithoutMeetingsInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutMeetingsInputSchema) ]).optional(),
}).strict();

export const MenteeUpdateOneRequiredWithoutMeetingsNestedInputSchema: z.ZodType<Prisma.MenteeUpdateOneRequiredWithoutMeetingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutMeetingsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMeetingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MenteeCreateOrConnectWithoutMeetingsInputSchema).optional(),
  upsert: z.lazy(() => MenteeUpsertWithoutMeetingsInputSchema).optional(),
  connect: z.lazy(() => MenteeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MenteeUpdateWithoutMeetingsInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutMeetingsInputSchema) ]).optional(),
}).strict();

export const MentorCreateNestedOneWithoutTestimonialsInputSchema: z.ZodType<Prisma.MentorCreateNestedOneWithoutTestimonialsInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutTestimonialsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutTestimonialsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutTestimonialsInputSchema).optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional()
}).strict();

export const MentorUpdateOneWithoutTestimonialsNestedInputSchema: z.ZodType<Prisma.MentorUpdateOneWithoutTestimonialsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutTestimonialsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutTestimonialsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutTestimonialsInputSchema).optional(),
  upsert: z.lazy(() => MentorUpsertWithoutTestimonialsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MentorUpdateWithoutTestimonialsInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutTestimonialsInputSchema) ]).optional(),
}).strict();

export const MentorCreateNestedOneWithoutAvailabilitiesInputSchema: z.ZodType<Prisma.MentorCreateNestedOneWithoutAvailabilitiesInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutAvailabilitiesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutAvailabilitiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutAvailabilitiesInputSchema).optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional()
}).strict();

export const MentorUpdateOneWithoutAvailabilitiesNestedInputSchema: z.ZodType<Prisma.MentorUpdateOneWithoutAvailabilitiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutAvailabilitiesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutAvailabilitiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutAvailabilitiesInputSchema).optional(),
  upsert: z.lazy(() => MentorUpsertWithoutAvailabilitiesInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MentorUpdateWithoutAvailabilitiesInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutAvailabilitiesInputSchema) ]).optional(),
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

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
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

export const NestedEnumRoleFilterSchema: z.ZodType<Prisma.NestedEnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleFilterSchema) ]).optional(),
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

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
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

export const NestedEnumRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const MentorCreateWithoutUserInputSchema: z.ZodType<Prisma.MentorCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  field_expertise: z.string(),
  yearsOfExperience: z.number(),
  description: z.string(),
  rating: z.number(),
  mentees: z.lazy(() => MenteeCreateNestedManyWithoutMentorsInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.MentorUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  field_expertise: z.string(),
  yearsOfExperience: z.number(),
  description: z.string(),
  rating: z.number(),
  mentees: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutMentorsInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.MentorCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MentorCreateWithoutUserInputSchema),z.lazy(() => MentorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MentorCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.MentorCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MentorCreateManyUserInputSchema),z.lazy(() => MentorCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MenteeCreateWithoutUserInputSchema: z.ZodType<Prisma.MenteeCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  mentors: z.lazy(() => MentorCreateNestedManyWithoutMenteesInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  mentors: z.lazy(() => MentorUncheckedCreateNestedManyWithoutMenteesInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUncheckedCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.MenteeCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => MenteeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MenteeCreateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MenteeCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.MenteeCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MenteeCreateManyUserInputSchema),z.lazy(() => MenteeCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MentorUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.MentorUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MentorUpdateWithoutUserInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => MentorCreateWithoutUserInputSchema),z.lazy(() => MentorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MentorUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.MentorUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MentorUpdateWithoutUserInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const MentorUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.MentorUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => MentorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MentorUpdateManyMutationInputSchema),z.lazy(() => MentorUncheckedUpdateManyWithoutMentorInputSchema) ]),
}).strict();

export const MentorScalarWhereInputSchema: z.ZodType<Prisma.MentorScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MentorScalarWhereInputSchema),z.lazy(() => MentorScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MentorScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MentorScalarWhereInputSchema),z.lazy(() => MentorScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  field_expertise: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  yearsOfExperience: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const MenteeUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.MenteeUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => MenteeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MenteeUpdateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => MenteeCreateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MenteeUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.MenteeUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => MenteeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MenteeUpdateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const MenteeUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.MenteeUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => MenteeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MenteeUpdateManyMutationInputSchema),z.lazy(() => MenteeUncheckedUpdateManyWithoutMenteeInputSchema) ]),
}).strict();

export const MenteeScalarWhereInputSchema: z.ZodType<Prisma.MenteeScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MenteeScalarWhereInputSchema),z.lazy(() => MenteeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MenteeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MenteeScalarWhereInputSchema),z.lazy(() => MenteeScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  educationLevel: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  careerGoals: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  careerHistory: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  careerChallenges: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  skills: z.lazy(() => StringNullableListFilterSchema).optional(),
  bio: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateWithoutMentorInputSchema: z.ZodType<Prisma.UserCreateWithoutMentorInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
  dob: z.coerce.date(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentee: z.lazy(() => MenteeCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutMentorInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutMentorInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
  dob: z.coerce.date(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentee: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutMentorInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutMentorInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutMentorInputSchema),z.lazy(() => UserUncheckedCreateWithoutMentorInputSchema) ]),
}).strict();

export const MenteeCreateWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeCreateWithoutMentorsInput> = z.object({
  id: z.string().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutMenteeInputSchema),
  Meetings: z.lazy(() => MeetingsCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeUncheckedCreateWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateWithoutMentorsInput> = z.object({
  id: z.string().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  userId: z.string(),
  Meetings: z.lazy(() => MeetingsUncheckedCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeCreateOrConnectWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeCreateOrConnectWithoutMentorsInput> = z.object({
  where: z.lazy(() => MenteeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MenteeCreateWithoutMentorsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMentorsInputSchema) ]),
}).strict();

export const MeetingsCreateWithoutMentorInputSchema: z.ZodType<Prisma.MeetingsCreateWithoutMentorInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentee: z.lazy(() => MenteeCreateNestedOneWithoutMeetingsInputSchema)
}).strict();

export const MeetingsUncheckedCreateWithoutMentorInputSchema: z.ZodType<Prisma.MeetingsUncheckedCreateWithoutMentorInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  menteeId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MeetingsCreateOrConnectWithoutMentorInputSchema: z.ZodType<Prisma.MeetingsCreateOrConnectWithoutMentorInput> = z.object({
  where: z.lazy(() => MeetingsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MeetingsCreateWithoutMentorInputSchema),z.lazy(() => MeetingsUncheckedCreateWithoutMentorInputSchema) ]),
}).strict();

export const MeetingsCreateManyMentorInputEnvelopeSchema: z.ZodType<Prisma.MeetingsCreateManyMentorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MeetingsCreateManyMentorInputSchema),z.lazy(() => MeetingsCreateManyMentorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TestimonialCreateWithoutMentorInputSchema: z.ZodType<Prisma.TestimonialCreateWithoutMentorInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TestimonialUncheckedCreateWithoutMentorInputSchema: z.ZodType<Prisma.TestimonialUncheckedCreateWithoutMentorInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TestimonialCreateOrConnectWithoutMentorInputSchema: z.ZodType<Prisma.TestimonialCreateOrConnectWithoutMentorInput> = z.object({
  where: z.lazy(() => TestimonialWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestimonialCreateWithoutMentorInputSchema),z.lazy(() => TestimonialUncheckedCreateWithoutMentorInputSchema) ]),
}).strict();

export const TestimonialCreateManyMentorInputEnvelopeSchema: z.ZodType<Prisma.TestimonialCreateManyMentorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TestimonialCreateManyMentorInputSchema),z.lazy(() => TestimonialCreateManyMentorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AvailabilityCreateWithoutMentorInputSchema: z.ZodType<Prisma.AvailabilityCreateWithoutMentorInput> = z.object({
  id: z.string().optional(),
  startTime: z.coerce.date().optional(),
  endTime: z.coerce.date().optional(),
  dayOfWeek: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AvailabilityUncheckedCreateWithoutMentorInputSchema: z.ZodType<Prisma.AvailabilityUncheckedCreateWithoutMentorInput> = z.object({
  id: z.string().optional(),
  startTime: z.coerce.date().optional(),
  endTime: z.coerce.date().optional(),
  dayOfWeek: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AvailabilityCreateOrConnectWithoutMentorInputSchema: z.ZodType<Prisma.AvailabilityCreateOrConnectWithoutMentorInput> = z.object({
  where: z.lazy(() => AvailabilityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AvailabilityCreateWithoutMentorInputSchema),z.lazy(() => AvailabilityUncheckedCreateWithoutMentorInputSchema) ]),
}).strict();

export const AvailabilityCreateManyMentorInputEnvelopeSchema: z.ZodType<Prisma.AvailabilityCreateManyMentorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AvailabilityCreateManyMentorInputSchema),z.lazy(() => AvailabilityCreateManyMentorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithoutMentorInputSchema: z.ZodType<Prisma.UserUpsertWithoutMentorInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutMentorInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMentorInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutMentorInputSchema),z.lazy(() => UserUncheckedCreateWithoutMentorInputSchema) ]),
}).strict();

export const UserUpdateWithoutMentorInputSchema: z.ZodType<Prisma.UserUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentee: z.lazy(() => MenteeUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutMentorInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentee: z.lazy(() => MenteeUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
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

export const MeetingsUpsertWithWhereUniqueWithoutMentorInputSchema: z.ZodType<Prisma.MeetingsUpsertWithWhereUniqueWithoutMentorInput> = z.object({
  where: z.lazy(() => MeetingsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MeetingsUpdateWithoutMentorInputSchema),z.lazy(() => MeetingsUncheckedUpdateWithoutMentorInputSchema) ]),
  create: z.union([ z.lazy(() => MeetingsCreateWithoutMentorInputSchema),z.lazy(() => MeetingsUncheckedCreateWithoutMentorInputSchema) ]),
}).strict();

export const MeetingsUpdateWithWhereUniqueWithoutMentorInputSchema: z.ZodType<Prisma.MeetingsUpdateWithWhereUniqueWithoutMentorInput> = z.object({
  where: z.lazy(() => MeetingsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MeetingsUpdateWithoutMentorInputSchema),z.lazy(() => MeetingsUncheckedUpdateWithoutMentorInputSchema) ]),
}).strict();

export const MeetingsUpdateManyWithWhereWithoutMentorInputSchema: z.ZodType<Prisma.MeetingsUpdateManyWithWhereWithoutMentorInput> = z.object({
  where: z.lazy(() => MeetingsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MeetingsUpdateManyMutationInputSchema),z.lazy(() => MeetingsUncheckedUpdateManyWithoutMeetingsInputSchema) ]),
}).strict();

export const MeetingsScalarWhereInputSchema: z.ZodType<Prisma.MeetingsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MeetingsScalarWhereInputSchema),z.lazy(() => MeetingsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MeetingsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MeetingsScalarWhereInputSchema),z.lazy(() => MeetingsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  menteeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const TestimonialUpsertWithWhereUniqueWithoutMentorInputSchema: z.ZodType<Prisma.TestimonialUpsertWithWhereUniqueWithoutMentorInput> = z.object({
  where: z.lazy(() => TestimonialWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestimonialUpdateWithoutMentorInputSchema),z.lazy(() => TestimonialUncheckedUpdateWithoutMentorInputSchema) ]),
  create: z.union([ z.lazy(() => TestimonialCreateWithoutMentorInputSchema),z.lazy(() => TestimonialUncheckedCreateWithoutMentorInputSchema) ]),
}).strict();

export const TestimonialUpdateWithWhereUniqueWithoutMentorInputSchema: z.ZodType<Prisma.TestimonialUpdateWithWhereUniqueWithoutMentorInput> = z.object({
  where: z.lazy(() => TestimonialWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestimonialUpdateWithoutMentorInputSchema),z.lazy(() => TestimonialUncheckedUpdateWithoutMentorInputSchema) ]),
}).strict();

export const TestimonialUpdateManyWithWhereWithoutMentorInputSchema: z.ZodType<Prisma.TestimonialUpdateManyWithWhereWithoutMentorInput> = z.object({
  where: z.lazy(() => TestimonialScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestimonialUpdateManyMutationInputSchema),z.lazy(() => TestimonialUncheckedUpdateManyWithoutTestimonialsInputSchema) ]),
}).strict();

export const TestimonialScalarWhereInputSchema: z.ZodType<Prisma.TestimonialScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TestimonialScalarWhereInputSchema),z.lazy(() => TestimonialScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestimonialScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestimonialScalarWhereInputSchema),z.lazy(() => TestimonialScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AvailabilityUpsertWithWhereUniqueWithoutMentorInputSchema: z.ZodType<Prisma.AvailabilityUpsertWithWhereUniqueWithoutMentorInput> = z.object({
  where: z.lazy(() => AvailabilityWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AvailabilityUpdateWithoutMentorInputSchema),z.lazy(() => AvailabilityUncheckedUpdateWithoutMentorInputSchema) ]),
  create: z.union([ z.lazy(() => AvailabilityCreateWithoutMentorInputSchema),z.lazy(() => AvailabilityUncheckedCreateWithoutMentorInputSchema) ]),
}).strict();

export const AvailabilityUpdateWithWhereUniqueWithoutMentorInputSchema: z.ZodType<Prisma.AvailabilityUpdateWithWhereUniqueWithoutMentorInput> = z.object({
  where: z.lazy(() => AvailabilityWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AvailabilityUpdateWithoutMentorInputSchema),z.lazy(() => AvailabilityUncheckedUpdateWithoutMentorInputSchema) ]),
}).strict();

export const AvailabilityUpdateManyWithWhereWithoutMentorInputSchema: z.ZodType<Prisma.AvailabilityUpdateManyWithWhereWithoutMentorInput> = z.object({
  where: z.lazy(() => AvailabilityScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AvailabilityUpdateManyMutationInputSchema),z.lazy(() => AvailabilityUncheckedUpdateManyWithoutAvailabilitiesInputSchema) ]),
}).strict();

export const AvailabilityScalarWhereInputSchema: z.ZodType<Prisma.AvailabilityScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AvailabilityScalarWhereInputSchema),z.lazy(() => AvailabilityScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AvailabilityScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AvailabilityScalarWhereInputSchema),z.lazy(() => AvailabilityScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateWithoutMenteeInputSchema: z.ZodType<Prisma.UserCreateWithoutMenteeInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
  dob: z.coerce.date(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutMenteeInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutMenteeInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
  dob: z.coerce.date(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutMenteeInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutMenteeInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutMenteeInputSchema),z.lazy(() => UserUncheckedCreateWithoutMenteeInputSchema) ]),
}).strict();

export const MentorCreateWithoutMenteesInputSchema: z.ZodType<Prisma.MentorCreateWithoutMenteesInput> = z.object({
  id: z.string().optional(),
  field_expertise: z.string(),
  yearsOfExperience: z.number(),
  description: z.string(),
  rating: z.number(),
  user: z.lazy(() => UserCreateNestedOneWithoutMentorInputSchema),
  Meetings: z.lazy(() => MeetingsCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorUncheckedCreateWithoutMenteesInputSchema: z.ZodType<Prisma.MentorUncheckedCreateWithoutMenteesInput> = z.object({
  id: z.string().optional(),
  field_expertise: z.string(),
  yearsOfExperience: z.number(),
  description: z.string(),
  rating: z.number(),
  userId: z.string(),
  Meetings: z.lazy(() => MeetingsUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorCreateOrConnectWithoutMenteesInputSchema: z.ZodType<Prisma.MentorCreateOrConnectWithoutMenteesInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MentorCreateWithoutMenteesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema) ]),
}).strict();

export const MeetingsCreateWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingsCreateWithoutMenteeInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorCreateNestedOneWithoutMeetingsInputSchema)
}).strict();

export const MeetingsUncheckedCreateWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingsUncheckedCreateWithoutMenteeInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  mentorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MeetingsCreateOrConnectWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingsCreateOrConnectWithoutMenteeInput> = z.object({
  where: z.lazy(() => MeetingsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MeetingsCreateWithoutMenteeInputSchema),z.lazy(() => MeetingsUncheckedCreateWithoutMenteeInputSchema) ]),
}).strict();

export const MeetingsCreateManyMenteeInputEnvelopeSchema: z.ZodType<Prisma.MeetingsCreateManyMenteeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MeetingsCreateManyMenteeInputSchema),z.lazy(() => MeetingsCreateManyMenteeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithoutMenteeInputSchema: z.ZodType<Prisma.UserUpsertWithoutMenteeInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutMenteeInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMenteeInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutMenteeInputSchema),z.lazy(() => UserUncheckedCreateWithoutMenteeInputSchema) ]),
}).strict();

export const UserUpdateWithoutMenteeInputSchema: z.ZodType<Prisma.UserUpdateWithoutMenteeInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutMenteeInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutMenteeInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
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

export const MeetingsUpsertWithWhereUniqueWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingsUpsertWithWhereUniqueWithoutMenteeInput> = z.object({
  where: z.lazy(() => MeetingsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MeetingsUpdateWithoutMenteeInputSchema),z.lazy(() => MeetingsUncheckedUpdateWithoutMenteeInputSchema) ]),
  create: z.union([ z.lazy(() => MeetingsCreateWithoutMenteeInputSchema),z.lazy(() => MeetingsUncheckedCreateWithoutMenteeInputSchema) ]),
}).strict();

export const MeetingsUpdateWithWhereUniqueWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingsUpdateWithWhereUniqueWithoutMenteeInput> = z.object({
  where: z.lazy(() => MeetingsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MeetingsUpdateWithoutMenteeInputSchema),z.lazy(() => MeetingsUncheckedUpdateWithoutMenteeInputSchema) ]),
}).strict();

export const MeetingsUpdateManyWithWhereWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingsUpdateManyWithWhereWithoutMenteeInput> = z.object({
  where: z.lazy(() => MeetingsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MeetingsUpdateManyMutationInputSchema),z.lazy(() => MeetingsUncheckedUpdateManyWithoutMeetingsInputSchema) ]),
}).strict();

export const MentorCreateWithoutMeetingsInputSchema: z.ZodType<Prisma.MentorCreateWithoutMeetingsInput> = z.object({
  id: z.string().optional(),
  field_expertise: z.string(),
  yearsOfExperience: z.number(),
  description: z.string(),
  rating: z.number(),
  user: z.lazy(() => UserCreateNestedOneWithoutMentorInputSchema),
  mentees: z.lazy(() => MenteeCreateNestedManyWithoutMentorsInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorUncheckedCreateWithoutMeetingsInputSchema: z.ZodType<Prisma.MentorUncheckedCreateWithoutMeetingsInput> = z.object({
  id: z.string().optional(),
  field_expertise: z.string(),
  yearsOfExperience: z.number(),
  description: z.string(),
  rating: z.number(),
  userId: z.string(),
  mentees: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutMentorsInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorCreateOrConnectWithoutMeetingsInputSchema: z.ZodType<Prisma.MentorCreateOrConnectWithoutMeetingsInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MentorCreateWithoutMeetingsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMeetingsInputSchema) ]),
}).strict();

export const MenteeCreateWithoutMeetingsInputSchema: z.ZodType<Prisma.MenteeCreateWithoutMeetingsInput> = z.object({
  id: z.string().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutMenteeInputSchema),
  mentors: z.lazy(() => MentorCreateNestedManyWithoutMenteesInputSchema).optional()
}).strict();

export const MenteeUncheckedCreateWithoutMeetingsInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateWithoutMeetingsInput> = z.object({
  id: z.string().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  userId: z.string(),
  mentors: z.lazy(() => MentorUncheckedCreateNestedManyWithoutMenteesInputSchema).optional()
}).strict();

export const MenteeCreateOrConnectWithoutMeetingsInputSchema: z.ZodType<Prisma.MenteeCreateOrConnectWithoutMeetingsInput> = z.object({
  where: z.lazy(() => MenteeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MenteeCreateWithoutMeetingsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMeetingsInputSchema) ]),
}).strict();

export const MentorUpsertWithoutMeetingsInputSchema: z.ZodType<Prisma.MentorUpsertWithoutMeetingsInput> = z.object({
  update: z.union([ z.lazy(() => MentorUpdateWithoutMeetingsInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutMeetingsInputSchema) ]),
  create: z.union([ z.lazy(() => MentorCreateWithoutMeetingsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMeetingsInputSchema) ]),
}).strict();

export const MentorUpdateWithoutMeetingsInputSchema: z.ZodType<Prisma.MentorUpdateWithoutMeetingsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_expertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMentorNestedInputSchema).optional(),
  mentees: z.lazy(() => MenteeUpdateManyWithoutMentorsNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateWithoutMeetingsInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateWithoutMeetingsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_expertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUncheckedUpdateManyWithoutMentorsNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MenteeUpsertWithoutMeetingsInputSchema: z.ZodType<Prisma.MenteeUpsertWithoutMeetingsInput> = z.object({
  update: z.union([ z.lazy(() => MenteeUpdateWithoutMeetingsInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutMeetingsInputSchema) ]),
  create: z.union([ z.lazy(() => MenteeCreateWithoutMeetingsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMeetingsInputSchema) ]),
}).strict();

export const MenteeUpdateWithoutMeetingsInputSchema: z.ZodType<Prisma.MenteeUpdateWithoutMeetingsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMenteeNestedInputSchema).optional(),
  mentors: z.lazy(() => MentorUpdateManyWithoutMenteesNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateWithoutMeetingsInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateWithoutMeetingsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorUncheckedUpdateManyWithoutMenteesNestedInputSchema).optional()
}).strict();

export const MentorCreateWithoutTestimonialsInputSchema: z.ZodType<Prisma.MentorCreateWithoutTestimonialsInput> = z.object({
  id: z.string().optional(),
  field_expertise: z.string(),
  yearsOfExperience: z.number(),
  description: z.string(),
  rating: z.number(),
  user: z.lazy(() => UserCreateNestedOneWithoutMentorInputSchema),
  mentees: z.lazy(() => MenteeCreateNestedManyWithoutMentorsInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorUncheckedCreateWithoutTestimonialsInputSchema: z.ZodType<Prisma.MentorUncheckedCreateWithoutTestimonialsInput> = z.object({
  id: z.string().optional(),
  field_expertise: z.string(),
  yearsOfExperience: z.number(),
  description: z.string(),
  rating: z.number(),
  userId: z.string(),
  mentees: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutMentorsInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorCreateOrConnectWithoutTestimonialsInputSchema: z.ZodType<Prisma.MentorCreateOrConnectWithoutTestimonialsInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MentorCreateWithoutTestimonialsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutTestimonialsInputSchema) ]),
}).strict();

export const MentorUpsertWithoutTestimonialsInputSchema: z.ZodType<Prisma.MentorUpsertWithoutTestimonialsInput> = z.object({
  update: z.union([ z.lazy(() => MentorUpdateWithoutTestimonialsInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutTestimonialsInputSchema) ]),
  create: z.union([ z.lazy(() => MentorCreateWithoutTestimonialsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutTestimonialsInputSchema) ]),
}).strict();

export const MentorUpdateWithoutTestimonialsInputSchema: z.ZodType<Prisma.MentorUpdateWithoutTestimonialsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_expertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMentorNestedInputSchema).optional(),
  mentees: z.lazy(() => MenteeUpdateManyWithoutMentorsNestedInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateWithoutTestimonialsInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateWithoutTestimonialsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_expertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUncheckedUpdateManyWithoutMentorsNestedInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorCreateWithoutAvailabilitiesInputSchema: z.ZodType<Prisma.MentorCreateWithoutAvailabilitiesInput> = z.object({
  id: z.string().optional(),
  field_expertise: z.string(),
  yearsOfExperience: z.number(),
  description: z.string(),
  rating: z.number(),
  user: z.lazy(() => UserCreateNestedOneWithoutMentorInputSchema),
  mentees: z.lazy(() => MenteeCreateNestedManyWithoutMentorsInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorUncheckedCreateWithoutAvailabilitiesInputSchema: z.ZodType<Prisma.MentorUncheckedCreateWithoutAvailabilitiesInput> = z.object({
  id: z.string().optional(),
  field_expertise: z.string(),
  yearsOfExperience: z.number(),
  description: z.string(),
  rating: z.number(),
  userId: z.string(),
  mentees: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutMentorsInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorCreateOrConnectWithoutAvailabilitiesInputSchema: z.ZodType<Prisma.MentorCreateOrConnectWithoutAvailabilitiesInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MentorCreateWithoutAvailabilitiesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutAvailabilitiesInputSchema) ]),
}).strict();

export const MentorUpsertWithoutAvailabilitiesInputSchema: z.ZodType<Prisma.MentorUpsertWithoutAvailabilitiesInput> = z.object({
  update: z.union([ z.lazy(() => MentorUpdateWithoutAvailabilitiesInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutAvailabilitiesInputSchema) ]),
  create: z.union([ z.lazy(() => MentorCreateWithoutAvailabilitiesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutAvailabilitiesInputSchema) ]),
}).strict();

export const MentorUpdateWithoutAvailabilitiesInputSchema: z.ZodType<Prisma.MentorUpdateWithoutAvailabilitiesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_expertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMentorNestedInputSchema).optional(),
  mentees: z.lazy(() => MenteeUpdateManyWithoutMentorsNestedInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateWithoutAvailabilitiesInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateWithoutAvailabilitiesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_expertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUncheckedUpdateManyWithoutMentorsNestedInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorCreateManyUserInputSchema: z.ZodType<Prisma.MentorCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  field_expertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number()
}).strict();

export const MenteeCreateManyUserInputSchema: z.ZodType<Prisma.MenteeCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string()
}).strict();

export const MentorUpdateWithoutUserInputSchema: z.ZodType<Prisma.MentorUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_expertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUpdateManyWithoutMentorsNestedInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_expertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUncheckedUpdateManyWithoutMentorsNestedInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateManyWithoutMentorInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateManyWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_expertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MenteeUpdateWithoutUserInputSchema: z.ZodType<Prisma.MenteeUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorUpdateManyWithoutMenteesNestedInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorUncheckedUpdateManyWithoutMenteesNestedInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateManyWithoutMenteeInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateManyWithoutMenteeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MeetingsCreateManyMentorInputSchema: z.ZodType<Prisma.MeetingsCreateManyMentorInput> = z.object({
  id: z.string().cuid().optional(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  menteeId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TestimonialCreateManyMentorInputSchema: z.ZodType<Prisma.TestimonialCreateManyMentorInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AvailabilityCreateManyMentorInputSchema: z.ZodType<Prisma.AvailabilityCreateManyMentorInput> = z.object({
  id: z.string().cuid().optional(),
  startTime: z.coerce.date().optional(),
  endTime: z.coerce.date().optional(),
  dayOfWeek: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MenteeUpdateWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeUpdateWithoutMentorsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMenteeNestedInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateWithoutMentorsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Meetings: z.lazy(() => MeetingsUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateManyWithoutMenteesInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateManyWithoutMenteesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MeetingsUpdateWithoutMentorInputSchema: z.ZodType<Prisma.MeetingsUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentee: z.lazy(() => MenteeUpdateOneRequiredWithoutMeetingsNestedInputSchema).optional()
}).strict();

export const MeetingsUncheckedUpdateWithoutMentorInputSchema: z.ZodType<Prisma.MeetingsUncheckedUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MeetingsUncheckedUpdateManyWithoutMeetingsInputSchema: z.ZodType<Prisma.MeetingsUncheckedUpdateManyWithoutMeetingsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestimonialUpdateWithoutMentorInputSchema: z.ZodType<Prisma.TestimonialUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestimonialUncheckedUpdateWithoutMentorInputSchema: z.ZodType<Prisma.TestimonialUncheckedUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestimonialUncheckedUpdateManyWithoutTestimonialsInputSchema: z.ZodType<Prisma.TestimonialUncheckedUpdateManyWithoutTestimonialsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AvailabilityUpdateWithoutMentorInputSchema: z.ZodType<Prisma.AvailabilityUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AvailabilityUncheckedUpdateWithoutMentorInputSchema: z.ZodType<Prisma.AvailabilityUncheckedUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AvailabilityUncheckedUpdateManyWithoutAvailabilitiesInputSchema: z.ZodType<Prisma.AvailabilityUncheckedUpdateManyWithoutAvailabilitiesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MeetingsCreateManyMenteeInputSchema: z.ZodType<Prisma.MeetingsCreateManyMenteeInput> = z.object({
  id: z.string().cuid().optional(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  mentorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MentorUpdateWithoutMenteesInputSchema: z.ZodType<Prisma.MentorUpdateWithoutMenteesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_expertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMentorNestedInputSchema).optional(),
  Meetings: z.lazy(() => MeetingsUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateWithoutMenteesInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateWithoutMenteesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_expertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Meetings: z.lazy(() => MeetingsUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateManyWithoutMentorsInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateManyWithoutMentorsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field_expertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MeetingsUpdateWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingsUpdateWithoutMenteeInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateOneRequiredWithoutMeetingsNestedInputSchema).optional()
}).strict();

export const MeetingsUncheckedUpdateWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingsUncheckedUpdateWithoutMenteeInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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

export const MeetingsFindFirstArgsSchema: z.ZodType<Prisma.MeetingsFindFirstArgs> = z.object({
  select: MeetingsSelectSchema.optional(),
  include: MeetingsIncludeSchema.optional(),
  where: MeetingsWhereInputSchema.optional(),
  orderBy: z.union([ MeetingsOrderByWithRelationInputSchema.array(),MeetingsOrderByWithRelationInputSchema ]).optional(),
  cursor: MeetingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MeetingsScalarFieldEnumSchema.array().optional(),
}).strict()

export const MeetingsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MeetingsFindFirstOrThrowArgs> = z.object({
  select: MeetingsSelectSchema.optional(),
  include: MeetingsIncludeSchema.optional(),
  where: MeetingsWhereInputSchema.optional(),
  orderBy: z.union([ MeetingsOrderByWithRelationInputSchema.array(),MeetingsOrderByWithRelationInputSchema ]).optional(),
  cursor: MeetingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MeetingsScalarFieldEnumSchema.array().optional(),
}).strict()

export const MeetingsFindManyArgsSchema: z.ZodType<Prisma.MeetingsFindManyArgs> = z.object({
  select: MeetingsSelectSchema.optional(),
  include: MeetingsIncludeSchema.optional(),
  where: MeetingsWhereInputSchema.optional(),
  orderBy: z.union([ MeetingsOrderByWithRelationInputSchema.array(),MeetingsOrderByWithRelationInputSchema ]).optional(),
  cursor: MeetingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: MeetingsScalarFieldEnumSchema.array().optional(),
}).strict()

export const MeetingsAggregateArgsSchema: z.ZodType<Prisma.MeetingsAggregateArgs> = z.object({
  where: MeetingsWhereInputSchema.optional(),
  orderBy: z.union([ MeetingsOrderByWithRelationInputSchema.array(),MeetingsOrderByWithRelationInputSchema ]).optional(),
  cursor: MeetingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MeetingsGroupByArgsSchema: z.ZodType<Prisma.MeetingsGroupByArgs> = z.object({
  where: MeetingsWhereInputSchema.optional(),
  orderBy: z.union([ MeetingsOrderByWithAggregationInputSchema.array(),MeetingsOrderByWithAggregationInputSchema ]).optional(),
  by: MeetingsScalarFieldEnumSchema.array(),
  having: MeetingsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MeetingsFindUniqueArgsSchema: z.ZodType<Prisma.MeetingsFindUniqueArgs> = z.object({
  select: MeetingsSelectSchema.optional(),
  include: MeetingsIncludeSchema.optional(),
  where: MeetingsWhereUniqueInputSchema,
}).strict()

export const MeetingsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MeetingsFindUniqueOrThrowArgs> = z.object({
  select: MeetingsSelectSchema.optional(),
  include: MeetingsIncludeSchema.optional(),
  where: MeetingsWhereUniqueInputSchema,
}).strict()

export const TestimonialFindFirstArgsSchema: z.ZodType<Prisma.TestimonialFindFirstArgs> = z.object({
  select: TestimonialSelectSchema.optional(),
  include: TestimonialIncludeSchema.optional(),
  where: TestimonialWhereInputSchema.optional(),
  orderBy: z.union([ TestimonialOrderByWithRelationInputSchema.array(),TestimonialOrderByWithRelationInputSchema ]).optional(),
  cursor: TestimonialWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TestimonialScalarFieldEnumSchema.array().optional(),
}).strict()

export const TestimonialFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TestimonialFindFirstOrThrowArgs> = z.object({
  select: TestimonialSelectSchema.optional(),
  include: TestimonialIncludeSchema.optional(),
  where: TestimonialWhereInputSchema.optional(),
  orderBy: z.union([ TestimonialOrderByWithRelationInputSchema.array(),TestimonialOrderByWithRelationInputSchema ]).optional(),
  cursor: TestimonialWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TestimonialScalarFieldEnumSchema.array().optional(),
}).strict()

export const TestimonialFindManyArgsSchema: z.ZodType<Prisma.TestimonialFindManyArgs> = z.object({
  select: TestimonialSelectSchema.optional(),
  include: TestimonialIncludeSchema.optional(),
  where: TestimonialWhereInputSchema.optional(),
  orderBy: z.union([ TestimonialOrderByWithRelationInputSchema.array(),TestimonialOrderByWithRelationInputSchema ]).optional(),
  cursor: TestimonialWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TestimonialScalarFieldEnumSchema.array().optional(),
}).strict()

export const TestimonialAggregateArgsSchema: z.ZodType<Prisma.TestimonialAggregateArgs> = z.object({
  where: TestimonialWhereInputSchema.optional(),
  orderBy: z.union([ TestimonialOrderByWithRelationInputSchema.array(),TestimonialOrderByWithRelationInputSchema ]).optional(),
  cursor: TestimonialWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const TestimonialGroupByArgsSchema: z.ZodType<Prisma.TestimonialGroupByArgs> = z.object({
  where: TestimonialWhereInputSchema.optional(),
  orderBy: z.union([ TestimonialOrderByWithAggregationInputSchema.array(),TestimonialOrderByWithAggregationInputSchema ]).optional(),
  by: TestimonialScalarFieldEnumSchema.array(),
  having: TestimonialScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const TestimonialFindUniqueArgsSchema: z.ZodType<Prisma.TestimonialFindUniqueArgs> = z.object({
  select: TestimonialSelectSchema.optional(),
  include: TestimonialIncludeSchema.optional(),
  where: TestimonialWhereUniqueInputSchema,
}).strict()

export const TestimonialFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TestimonialFindUniqueOrThrowArgs> = z.object({
  select: TestimonialSelectSchema.optional(),
  include: TestimonialIncludeSchema.optional(),
  where: TestimonialWhereUniqueInputSchema,
}).strict()

export const AvailabilityFindFirstArgsSchema: z.ZodType<Prisma.AvailabilityFindFirstArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereInputSchema.optional(),
  orderBy: z.union([ AvailabilityOrderByWithRelationInputSchema.array(),AvailabilityOrderByWithRelationInputSchema ]).optional(),
  cursor: AvailabilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AvailabilityScalarFieldEnumSchema.array().optional(),
}).strict()

export const AvailabilityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AvailabilityFindFirstOrThrowArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereInputSchema.optional(),
  orderBy: z.union([ AvailabilityOrderByWithRelationInputSchema.array(),AvailabilityOrderByWithRelationInputSchema ]).optional(),
  cursor: AvailabilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AvailabilityScalarFieldEnumSchema.array().optional(),
}).strict()

export const AvailabilityFindManyArgsSchema: z.ZodType<Prisma.AvailabilityFindManyArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereInputSchema.optional(),
  orderBy: z.union([ AvailabilityOrderByWithRelationInputSchema.array(),AvailabilityOrderByWithRelationInputSchema ]).optional(),
  cursor: AvailabilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AvailabilityScalarFieldEnumSchema.array().optional(),
}).strict()

export const AvailabilityAggregateArgsSchema: z.ZodType<Prisma.AvailabilityAggregateArgs> = z.object({
  where: AvailabilityWhereInputSchema.optional(),
  orderBy: z.union([ AvailabilityOrderByWithRelationInputSchema.array(),AvailabilityOrderByWithRelationInputSchema ]).optional(),
  cursor: AvailabilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AvailabilityGroupByArgsSchema: z.ZodType<Prisma.AvailabilityGroupByArgs> = z.object({
  where: AvailabilityWhereInputSchema.optional(),
  orderBy: z.union([ AvailabilityOrderByWithAggregationInputSchema.array(),AvailabilityOrderByWithAggregationInputSchema ]).optional(),
  by: AvailabilityScalarFieldEnumSchema.array(),
  having: AvailabilityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AvailabilityFindUniqueArgsSchema: z.ZodType<Prisma.AvailabilityFindUniqueArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereUniqueInputSchema,
}).strict()

export const AvailabilityFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AvailabilityFindUniqueOrThrowArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereUniqueInputSchema,
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

export const MeetingsCreateArgsSchema: z.ZodType<Prisma.MeetingsCreateArgs> = z.object({
  select: MeetingsSelectSchema.optional(),
  include: MeetingsIncludeSchema.optional(),
  data: z.union([ MeetingsCreateInputSchema,MeetingsUncheckedCreateInputSchema ]),
}).strict()

export const MeetingsUpsertArgsSchema: z.ZodType<Prisma.MeetingsUpsertArgs> = z.object({
  select: MeetingsSelectSchema.optional(),
  include: MeetingsIncludeSchema.optional(),
  where: MeetingsWhereUniqueInputSchema,
  create: z.union([ MeetingsCreateInputSchema,MeetingsUncheckedCreateInputSchema ]),
  update: z.union([ MeetingsUpdateInputSchema,MeetingsUncheckedUpdateInputSchema ]),
}).strict()

export const MeetingsCreateManyArgsSchema: z.ZodType<Prisma.MeetingsCreateManyArgs> = z.object({
  data: z.union([ MeetingsCreateManyInputSchema,MeetingsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const MeetingsDeleteArgsSchema: z.ZodType<Prisma.MeetingsDeleteArgs> = z.object({
  select: MeetingsSelectSchema.optional(),
  include: MeetingsIncludeSchema.optional(),
  where: MeetingsWhereUniqueInputSchema,
}).strict()

export const MeetingsUpdateArgsSchema: z.ZodType<Prisma.MeetingsUpdateArgs> = z.object({
  select: MeetingsSelectSchema.optional(),
  include: MeetingsIncludeSchema.optional(),
  data: z.union([ MeetingsUpdateInputSchema,MeetingsUncheckedUpdateInputSchema ]),
  where: MeetingsWhereUniqueInputSchema,
}).strict()

export const MeetingsUpdateManyArgsSchema: z.ZodType<Prisma.MeetingsUpdateManyArgs> = z.object({
  data: z.union([ MeetingsUpdateManyMutationInputSchema,MeetingsUncheckedUpdateManyInputSchema ]),
  where: MeetingsWhereInputSchema.optional(),
}).strict()

export const MeetingsDeleteManyArgsSchema: z.ZodType<Prisma.MeetingsDeleteManyArgs> = z.object({
  where: MeetingsWhereInputSchema.optional(),
}).strict()

export const TestimonialCreateArgsSchema: z.ZodType<Prisma.TestimonialCreateArgs> = z.object({
  select: TestimonialSelectSchema.optional(),
  include: TestimonialIncludeSchema.optional(),
  data: z.union([ TestimonialCreateInputSchema,TestimonialUncheckedCreateInputSchema ]),
}).strict()

export const TestimonialUpsertArgsSchema: z.ZodType<Prisma.TestimonialUpsertArgs> = z.object({
  select: TestimonialSelectSchema.optional(),
  include: TestimonialIncludeSchema.optional(),
  where: TestimonialWhereUniqueInputSchema,
  create: z.union([ TestimonialCreateInputSchema,TestimonialUncheckedCreateInputSchema ]),
  update: z.union([ TestimonialUpdateInputSchema,TestimonialUncheckedUpdateInputSchema ]),
}).strict()

export const TestimonialCreateManyArgsSchema: z.ZodType<Prisma.TestimonialCreateManyArgs> = z.object({
  data: z.union([ TestimonialCreateManyInputSchema,TestimonialCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const TestimonialDeleteArgsSchema: z.ZodType<Prisma.TestimonialDeleteArgs> = z.object({
  select: TestimonialSelectSchema.optional(),
  include: TestimonialIncludeSchema.optional(),
  where: TestimonialWhereUniqueInputSchema,
}).strict()

export const TestimonialUpdateArgsSchema: z.ZodType<Prisma.TestimonialUpdateArgs> = z.object({
  select: TestimonialSelectSchema.optional(),
  include: TestimonialIncludeSchema.optional(),
  data: z.union([ TestimonialUpdateInputSchema,TestimonialUncheckedUpdateInputSchema ]),
  where: TestimonialWhereUniqueInputSchema,
}).strict()

export const TestimonialUpdateManyArgsSchema: z.ZodType<Prisma.TestimonialUpdateManyArgs> = z.object({
  data: z.union([ TestimonialUpdateManyMutationInputSchema,TestimonialUncheckedUpdateManyInputSchema ]),
  where: TestimonialWhereInputSchema.optional(),
}).strict()

export const TestimonialDeleteManyArgsSchema: z.ZodType<Prisma.TestimonialDeleteManyArgs> = z.object({
  where: TestimonialWhereInputSchema.optional(),
}).strict()

export const AvailabilityCreateArgsSchema: z.ZodType<Prisma.AvailabilityCreateArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  data: z.union([ AvailabilityCreateInputSchema,AvailabilityUncheckedCreateInputSchema ]),
}).strict()

export const AvailabilityUpsertArgsSchema: z.ZodType<Prisma.AvailabilityUpsertArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereUniqueInputSchema,
  create: z.union([ AvailabilityCreateInputSchema,AvailabilityUncheckedCreateInputSchema ]),
  update: z.union([ AvailabilityUpdateInputSchema,AvailabilityUncheckedUpdateInputSchema ]),
}).strict()

export const AvailabilityCreateManyArgsSchema: z.ZodType<Prisma.AvailabilityCreateManyArgs> = z.object({
  data: z.union([ AvailabilityCreateManyInputSchema,AvailabilityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const AvailabilityDeleteArgsSchema: z.ZodType<Prisma.AvailabilityDeleteArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereUniqueInputSchema,
}).strict()

export const AvailabilityUpdateArgsSchema: z.ZodType<Prisma.AvailabilityUpdateArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  data: z.union([ AvailabilityUpdateInputSchema,AvailabilityUncheckedUpdateInputSchema ]),
  where: AvailabilityWhereUniqueInputSchema,
}).strict()

export const AvailabilityUpdateManyArgsSchema: z.ZodType<Prisma.AvailabilityUpdateManyArgs> = z.object({
  data: z.union([ AvailabilityUpdateManyMutationInputSchema,AvailabilityUncheckedUpdateManyInputSchema ]),
  where: AvailabilityWhereInputSchema.optional(),
}).strict()

export const AvailabilityDeleteManyArgsSchema: z.ZodType<Prisma.AvailabilityDeleteManyArgs> = z.object({
  where: AvailabilityWhereInputSchema.optional(),
}).strict()