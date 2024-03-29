import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','phone','active','profileImage','gender','role','createdAt','updatedAt']);

export const MentorScalarFieldEnumSchema = z.enum(['id','currentTitle','companyName','fieldOfExpertise','yearsOfExperience','description','rating','isTopMentor','userId']);

export const MenteeScalarFieldEnumSchema = z.enum(['id','educationLevel','careerGoals','careerHistory','careerChallenges','skills','bio','dob','userId']);

export const TaskScalarFieldEnumSchema = z.enum(['id','postition','title','description','mentorId','menteeId','status','createdAt','updatedAt']);

export const MessageScalarFieldEnumSchema = z.enum(['id','content','senderId','receiverId','createdAt','updatedAt']);

export const MeetingScalarFieldEnumSchema = z.enum(['id','endDate','wherebyId','hostUrl','guestUrl','mentorId','menteeId','createdAt','updatedAt']);

export const TestimonialScalarFieldEnumSchema = z.enum(['id','content','mentorId','createdAt','updatedAt','menteeId']);

export const AvailabilityScalarFieldEnumSchema = z.enum(['id','dayOfWeek','startTime','endTime','mentorId','createdAt','updatedAt']);

export const RequestScalarFieldEnumSchema = z.enum(['id','status','menteeId','mentorId','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const UserOrderByRelevanceFieldEnumSchema = z.enum(['id','name','email','phone','profileImage','gender']);

export const MentorOrderByRelevanceFieldEnumSchema = z.enum(['id','currentTitle','companyName','fieldOfExpertise','description','userId']);

export const MenteeOrderByRelevanceFieldEnumSchema = z.enum(['id','educationLevel','careerGoals','careerHistory','careerChallenges','skills','bio','userId']);

export const TaskOrderByRelevanceFieldEnumSchema = z.enum(['id','title','description','mentorId','menteeId']);

export const MessageOrderByRelevanceFieldEnumSchema = z.enum(['id','content','senderId','receiverId']);

export const MeetingOrderByRelevanceFieldEnumSchema = z.enum(['id','wherebyId','hostUrl','guestUrl','mentorId','menteeId']);

export const TestimonialOrderByRelevanceFieldEnumSchema = z.enum(['id','content','mentorId','menteeId']);

export const AvailabilityOrderByRelevanceFieldEnumSchema = z.enum(['id','dayOfWeek','startTime','endTime','mentorId']);

export const RequestOrderByRelevanceFieldEnumSchema = z.enum(['id','menteeId','mentorId']);

export const RequestStatusSchema = z.enum(['PENDING','APPROVED','DECLINED']);

export type RequestStatusType = `${z.infer<typeof RequestStatusSchema>}`

export const TaskStatusSchema = z.enum(['TODO','DOING','DONE']);

export type TaskStatusType = `${z.infer<typeof TaskStatusSchema>}`

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
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// MENTOR SCHEMA
/////////////////////////////////////////

export const MentorSchema = z.object({
  id: z.string().cuid(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number(),
  isTopMentor: z.boolean(),
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
  dob: z.coerce.date(),
  userId: z.string(),
})

export type Mentee = z.infer<typeof MenteeSchema>

/////////////////////////////////////////
// TASK SCHEMA
/////////////////////////////////////////

export const TaskSchema = z.object({
  status: TaskStatusSchema,
  id: z.string().cuid(),
  postition: z.number().int(),
  title: z.string(),
  description: z.string(),
  mentorId: z.string(),
  menteeId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Task = z.infer<typeof TaskSchema>

/////////////////////////////////////////
// MESSAGE SCHEMA
/////////////////////////////////////////

export const MessageSchema = z.object({
  id: z.string().cuid(),
  content: z.string(),
  senderId: z.string(),
  receiverId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Message = z.infer<typeof MessageSchema>

/////////////////////////////////////////
// MEETING SCHEMA
/////////////////////////////////////////

export const MeetingSchema = z.object({
  id: z.string().cuid(),
  endDate: z.coerce.date(),
  wherebyId: z.string(),
  hostUrl: z.string(),
  guestUrl: z.string(),
  mentorId: z.string(),
  menteeId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Meeting = z.infer<typeof MeetingSchema>

/////////////////////////////////////////
// TESTIMONIAL SCHEMA
/////////////////////////////////////////

export const TestimonialSchema = z.object({
  id: z.string().cuid(),
  content: z.string(),
  mentorId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  menteeId: z.string(),
})

export type Testimonial = z.infer<typeof TestimonialSchema>

/////////////////////////////////////////
// AVAILABILITY SCHEMA
/////////////////////////////////////////

export const AvailabilitySchema = z.object({
  id: z.string().cuid(),
  dayOfWeek: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  mentorId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Availability = z.infer<typeof AvailabilitySchema>

/////////////////////////////////////////
// REQUEST SCHEMA
/////////////////////////////////////////

export const RequestSchema = z.object({
  status: RequestStatusSchema,
  id: z.string().cuid(),
  menteeId: z.string(),
  mentorId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Request = z.infer<typeof RequestSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  mentor: z.union([z.boolean(),z.lazy(() => MentorFindManyArgsSchema)]).optional(),
  mentee: z.union([z.boolean(),z.lazy(() => MenteeFindManyArgsSchema)]).optional(),
  sentMessages: z.union([z.boolean(),z.lazy(() => MessageFindManyArgsSchema)]).optional(),
  receivedMessages: z.union([z.boolean(),z.lazy(() => MessageFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  mentor: z.boolean().optional(),
  mentee: z.boolean().optional(),
  sentMessages: z.boolean().optional(),
  receivedMessages: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  active: z.boolean().optional(),
  profileImage: z.boolean().optional(),
  gender: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  mentor: z.union([z.boolean(),z.lazy(() => MentorFindManyArgsSchema)]).optional(),
  mentee: z.union([z.boolean(),z.lazy(() => MenteeFindManyArgsSchema)]).optional(),
  sentMessages: z.union([z.boolean(),z.lazy(() => MessageFindManyArgsSchema)]).optional(),
  receivedMessages: z.union([z.boolean(),z.lazy(() => MessageFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MENTOR
//------------------------------------------------------

export const MentorIncludeSchema: z.ZodType<Prisma.MentorInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  mentees: z.union([z.boolean(),z.lazy(() => MenteeFindManyArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => TaskFindManyArgsSchema)]).optional(),
  requests: z.union([z.boolean(),z.lazy(() => RequestFindManyArgsSchema)]).optional(),
  meetings: z.union([z.boolean(),z.lazy(() => MeetingFindManyArgsSchema)]).optional(),
  testimonials: z.union([z.boolean(),z.lazy(() => TestimonialFindManyArgsSchema)]).optional(),
  availabilities: z.union([z.boolean(),z.lazy(() => AvailabilityFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MentorCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MentorArgsSchema: z.ZodType<Prisma.MentorDefaultArgs> = z.object({
  select: z.lazy(() => MentorSelectSchema).optional(),
  include: z.lazy(() => MentorIncludeSchema).optional(),
}).strict();

export const MentorCountOutputTypeArgsSchema: z.ZodType<Prisma.MentorCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => MentorCountOutputTypeSelectSchema).nullish(),
}).strict();

export const MentorCountOutputTypeSelectSchema: z.ZodType<Prisma.MentorCountOutputTypeSelect> = z.object({
  mentees: z.boolean().optional(),
  tasks: z.boolean().optional(),
  requests: z.boolean().optional(),
  meetings: z.boolean().optional(),
  testimonials: z.boolean().optional(),
  availabilities: z.boolean().optional(),
}).strict();

export const MentorSelectSchema: z.ZodType<Prisma.MentorSelect> = z.object({
  id: z.boolean().optional(),
  currentTitle: z.boolean().optional(),
  companyName: z.boolean().optional(),
  fieldOfExpertise: z.boolean().optional(),
  yearsOfExperience: z.boolean().optional(),
  description: z.boolean().optional(),
  rating: z.boolean().optional(),
  isTopMentor: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  mentees: z.union([z.boolean(),z.lazy(() => MenteeFindManyArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => TaskFindManyArgsSchema)]).optional(),
  requests: z.union([z.boolean(),z.lazy(() => RequestFindManyArgsSchema)]).optional(),
  meetings: z.union([z.boolean(),z.lazy(() => MeetingFindManyArgsSchema)]).optional(),
  testimonials: z.union([z.boolean(),z.lazy(() => TestimonialFindManyArgsSchema)]).optional(),
  availabilities: z.union([z.boolean(),z.lazy(() => AvailabilityFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MentorCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MENTEE
//------------------------------------------------------

export const MenteeIncludeSchema: z.ZodType<Prisma.MenteeInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  mentors: z.union([z.boolean(),z.lazy(() => MentorFindManyArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => TaskFindManyArgsSchema)]).optional(),
  requests: z.union([z.boolean(),z.lazy(() => RequestFindManyArgsSchema)]).optional(),
  meetings: z.union([z.boolean(),z.lazy(() => MeetingFindManyArgsSchema)]).optional(),
  reviews: z.union([z.boolean(),z.lazy(() => TestimonialFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MenteeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MenteeArgsSchema: z.ZodType<Prisma.MenteeDefaultArgs> = z.object({
  select: z.lazy(() => MenteeSelectSchema).optional(),
  include: z.lazy(() => MenteeIncludeSchema).optional(),
}).strict();

export const MenteeCountOutputTypeArgsSchema: z.ZodType<Prisma.MenteeCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => MenteeCountOutputTypeSelectSchema).nullish(),
}).strict();

export const MenteeCountOutputTypeSelectSchema: z.ZodType<Prisma.MenteeCountOutputTypeSelect> = z.object({
  mentors: z.boolean().optional(),
  tasks: z.boolean().optional(),
  requests: z.boolean().optional(),
  meetings: z.boolean().optional(),
  reviews: z.boolean().optional(),
}).strict();

export const MenteeSelectSchema: z.ZodType<Prisma.MenteeSelect> = z.object({
  id: z.boolean().optional(),
  educationLevel: z.boolean().optional(),
  careerGoals: z.boolean().optional(),
  careerHistory: z.boolean().optional(),
  careerChallenges: z.boolean().optional(),
  skills: z.boolean().optional(),
  bio: z.boolean().optional(),
  dob: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  mentors: z.union([z.boolean(),z.lazy(() => MentorFindManyArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => TaskFindManyArgsSchema)]).optional(),
  requests: z.union([z.boolean(),z.lazy(() => RequestFindManyArgsSchema)]).optional(),
  meetings: z.union([z.boolean(),z.lazy(() => MeetingFindManyArgsSchema)]).optional(),
  reviews: z.union([z.boolean(),z.lazy(() => TestimonialFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MenteeCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TASK
//------------------------------------------------------

export const TaskIncludeSchema: z.ZodType<Prisma.TaskInclude> = z.object({
  mentor: z.union([z.boolean(),z.lazy(() => MentorArgsSchema)]).optional(),
  mentee: z.union([z.boolean(),z.lazy(() => MenteeArgsSchema)]).optional(),
}).strict()

export const TaskArgsSchema: z.ZodType<Prisma.TaskDefaultArgs> = z.object({
  select: z.lazy(() => TaskSelectSchema).optional(),
  include: z.lazy(() => TaskIncludeSchema).optional(),
}).strict();

export const TaskSelectSchema: z.ZodType<Prisma.TaskSelect> = z.object({
  id: z.boolean().optional(),
  postition: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  mentorId: z.boolean().optional(),
  menteeId: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  mentor: z.union([z.boolean(),z.lazy(() => MentorArgsSchema)]).optional(),
  mentee: z.union([z.boolean(),z.lazy(() => MenteeArgsSchema)]).optional(),
}).strict()

// MESSAGE
//------------------------------------------------------

export const MessageIncludeSchema: z.ZodType<Prisma.MessageInclude> = z.object({
  sender: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  receiver: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const MessageArgsSchema: z.ZodType<Prisma.MessageDefaultArgs> = z.object({
  select: z.lazy(() => MessageSelectSchema).optional(),
  include: z.lazy(() => MessageIncludeSchema).optional(),
}).strict();

export const MessageSelectSchema: z.ZodType<Prisma.MessageSelect> = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  senderId: z.boolean().optional(),
  receiverId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  sender: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  receiver: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// MEETING
//------------------------------------------------------

export const MeetingIncludeSchema: z.ZodType<Prisma.MeetingInclude> = z.object({
  mentor: z.union([z.boolean(),z.lazy(() => MentorArgsSchema)]).optional(),
  mentee: z.union([z.boolean(),z.lazy(() => MenteeArgsSchema)]).optional(),
}).strict()

export const MeetingArgsSchema: z.ZodType<Prisma.MeetingDefaultArgs> = z.object({
  select: z.lazy(() => MeetingSelectSchema).optional(),
  include: z.lazy(() => MeetingIncludeSchema).optional(),
}).strict();

export const MeetingSelectSchema: z.ZodType<Prisma.MeetingSelect> = z.object({
  id: z.boolean().optional(),
  endDate: z.boolean().optional(),
  wherebyId: z.boolean().optional(),
  hostUrl: z.boolean().optional(),
  guestUrl: z.boolean().optional(),
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
  mentee: z.union([z.boolean(),z.lazy(() => MenteeArgsSchema)]).optional(),
}).strict()

export const TestimonialArgsSchema: z.ZodType<Prisma.TestimonialDefaultArgs> = z.object({
  select: z.lazy(() => TestimonialSelectSchema).optional(),
  include: z.lazy(() => TestimonialIncludeSchema).optional(),
}).strict();

export const TestimonialSelectSchema: z.ZodType<Prisma.TestimonialSelect> = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  mentorId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  menteeId: z.boolean().optional(),
  mentor: z.union([z.boolean(),z.lazy(() => MentorArgsSchema)]).optional(),
  mentee: z.union([z.boolean(),z.lazy(() => MenteeArgsSchema)]).optional(),
}).strict()

// AVAILABILITY
//------------------------------------------------------

export const AvailabilityIncludeSchema: z.ZodType<Prisma.AvailabilityInclude> = z.object({
  mentor: z.union([z.boolean(),z.lazy(() => MentorArgsSchema)]).optional(),
}).strict()

export const AvailabilityArgsSchema: z.ZodType<Prisma.AvailabilityDefaultArgs> = z.object({
  select: z.lazy(() => AvailabilitySelectSchema).optional(),
  include: z.lazy(() => AvailabilityIncludeSchema).optional(),
}).strict();

export const AvailabilitySelectSchema: z.ZodType<Prisma.AvailabilitySelect> = z.object({
  id: z.boolean().optional(),
  dayOfWeek: z.boolean().optional(),
  startTime: z.boolean().optional(),
  endTime: z.boolean().optional(),
  mentorId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  mentor: z.union([z.boolean(),z.lazy(() => MentorArgsSchema)]).optional(),
}).strict()

// REQUEST
//------------------------------------------------------

export const RequestIncludeSchema: z.ZodType<Prisma.RequestInclude> = z.object({
  mentee: z.union([z.boolean(),z.lazy(() => MenteeArgsSchema)]).optional(),
  mentor: z.union([z.boolean(),z.lazy(() => MentorArgsSchema)]).optional(),
}).strict()

export const RequestArgsSchema: z.ZodType<Prisma.RequestDefaultArgs> = z.object({
  select: z.lazy(() => RequestSelectSchema).optional(),
  include: z.lazy(() => RequestIncludeSchema).optional(),
}).strict();

export const RequestSelectSchema: z.ZodType<Prisma.RequestSelect> = z.object({
  id: z.boolean().optional(),
  status: z.boolean().optional(),
  menteeId: z.boolean().optional(),
  mentorId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  mentee: z.union([z.boolean(),z.lazy(() => MenteeArgsSchema)]).optional(),
  mentor: z.union([z.boolean(),z.lazy(() => MentorArgsSchema)]).optional(),
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
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentor: z.lazy(() => MentorListRelationFilterSchema).optional(),
  mentee: z.lazy(() => MenteeListRelationFilterSchema).optional(),
  sentMessages: z.lazy(() => MessageListRelationFilterSchema).optional(),
  receivedMessages: z.lazy(() => MessageListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.UserOrderByWithRelationAndSearchRelevanceInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  mentor: z.lazy(() => MentorOrderByRelationAggregateInputSchema).optional(),
  mentee: z.lazy(() => MenteeOrderByRelationAggregateInputSchema).optional(),
  sentMessages: z.lazy(() => MessageOrderByRelationAggregateInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => UserOrderByRelevanceInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  profileImage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  gender: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentor: z.lazy(() => MentorListRelationFilterSchema).optional(),
  mentee: z.lazy(() => MenteeListRelationFilterSchema).optional(),
  sentMessages: z.lazy(() => MessageListRelationFilterSchema).optional(),
  receivedMessages: z.lazy(() => MessageListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
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
  role: z.union([ z.lazy(() => EnumRoleWithAggregatesFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MentorWhereInputSchema: z.ZodType<Prisma.MentorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MentorWhereInputSchema),z.lazy(() => MentorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MentorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MentorWhereInputSchema),z.lazy(() => MentorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  currentTitle: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fieldOfExpertise: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  yearsOfExperience: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  isTopMentor: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeListRelationFilterSchema).optional(),
  tasks: z.lazy(() => TaskListRelationFilterSchema).optional(),
  requests: z.lazy(() => RequestListRelationFilterSchema).optional(),
  meetings: z.lazy(() => MeetingListRelationFilterSchema).optional(),
  testimonials: z.lazy(() => TestimonialListRelationFilterSchema).optional(),
  availabilities: z.lazy(() => AvailabilityListRelationFilterSchema).optional()
}).strict();

export const MentorOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.MentorOrderByWithRelationAndSearchRelevanceInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  currentTitle: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  fieldOfExpertise: z.lazy(() => SortOrderSchema).optional(),
  yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  isTopMentor: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  mentees: z.lazy(() => MenteeOrderByRelationAggregateInputSchema).optional(),
  tasks: z.lazy(() => TaskOrderByRelationAggregateInputSchema).optional(),
  requests: z.lazy(() => RequestOrderByRelationAggregateInputSchema).optional(),
  meetings: z.lazy(() => MeetingOrderByRelationAggregateInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialOrderByRelationAggregateInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => MentorOrderByRelevanceInputSchema).optional()
}).strict();

export const MentorWhereUniqueInputSchema: z.ZodType<Prisma.MentorWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => MentorWhereInputSchema),z.lazy(() => MentorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MentorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MentorWhereInputSchema),z.lazy(() => MentorWhereInputSchema).array() ]).optional(),
  currentTitle: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fieldOfExpertise: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  yearsOfExperience: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  isTopMentor: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeListRelationFilterSchema).optional(),
  tasks: z.lazy(() => TaskListRelationFilterSchema).optional(),
  requests: z.lazy(() => RequestListRelationFilterSchema).optional(),
  meetings: z.lazy(() => MeetingListRelationFilterSchema).optional(),
  testimonials: z.lazy(() => TestimonialListRelationFilterSchema).optional(),
  availabilities: z.lazy(() => AvailabilityListRelationFilterSchema).optional()
}).strict());

export const MentorOrderByWithAggregationInputSchema: z.ZodType<Prisma.MentorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  currentTitle: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  fieldOfExpertise: z.lazy(() => SortOrderSchema).optional(),
  yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  isTopMentor: z.lazy(() => SortOrderSchema).optional(),
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
  currentTitle: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  companyName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  fieldOfExpertise: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  yearsOfExperience: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  isTopMentor: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
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
  dob: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorListRelationFilterSchema).optional(),
  tasks: z.lazy(() => TaskListRelationFilterSchema).optional(),
  requests: z.lazy(() => RequestListRelationFilterSchema).optional(),
  meetings: z.lazy(() => MeetingListRelationFilterSchema).optional(),
  reviews: z.lazy(() => TestimonialListRelationFilterSchema).optional()
}).strict();

export const MenteeOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.MenteeOrderByWithRelationAndSearchRelevanceInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  educationLevel: z.lazy(() => SortOrderSchema).optional(),
  careerGoals: z.lazy(() => SortOrderSchema).optional(),
  careerHistory: z.lazy(() => SortOrderSchema).optional(),
  careerChallenges: z.lazy(() => SortOrderSchema).optional(),
  skills: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  mentors: z.lazy(() => MentorOrderByRelationAggregateInputSchema).optional(),
  tasks: z.lazy(() => TaskOrderByRelationAggregateInputSchema).optional(),
  requests: z.lazy(() => RequestOrderByRelationAggregateInputSchema).optional(),
  meetings: z.lazy(() => MeetingOrderByRelationAggregateInputSchema).optional(),
  reviews: z.lazy(() => TestimonialOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => MenteeOrderByRelevanceInputSchema).optional()
}).strict();

export const MenteeWhereUniqueInputSchema: z.ZodType<Prisma.MenteeWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => MenteeWhereInputSchema),z.lazy(() => MenteeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MenteeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MenteeWhereInputSchema),z.lazy(() => MenteeWhereInputSchema).array() ]).optional(),
  educationLevel: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  careerGoals: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  careerHistory: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  careerChallenges: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  skills: z.lazy(() => StringNullableListFilterSchema).optional(),
  bio: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dob: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorListRelationFilterSchema).optional(),
  tasks: z.lazy(() => TaskListRelationFilterSchema).optional(),
  requests: z.lazy(() => RequestListRelationFilterSchema).optional(),
  meetings: z.lazy(() => MeetingListRelationFilterSchema).optional(),
  reviews: z.lazy(() => TestimonialListRelationFilterSchema).optional()
}).strict());

export const MenteeOrderByWithAggregationInputSchema: z.ZodType<Prisma.MenteeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  educationLevel: z.lazy(() => SortOrderSchema).optional(),
  careerGoals: z.lazy(() => SortOrderSchema).optional(),
  careerHistory: z.lazy(() => SortOrderSchema).optional(),
  careerChallenges: z.lazy(() => SortOrderSchema).optional(),
  skills: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
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
  dob: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const TaskWhereInputSchema: z.ZodType<Prisma.TaskWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TaskWhereInputSchema),z.lazy(() => TaskWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskWhereInputSchema),z.lazy(() => TaskWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postition: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  menteeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumTaskStatusFilterSchema),z.lazy(() => TaskStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentor: z.union([ z.lazy(() => MentorRelationFilterSchema),z.lazy(() => MentorWhereInputSchema) ]).optional(),
  mentee: z.union([ z.lazy(() => MenteeRelationFilterSchema),z.lazy(() => MenteeWhereInputSchema) ]).optional(),
}).strict();

export const TaskOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.TaskOrderByWithRelationAndSearchRelevanceInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  postition: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  mentor: z.lazy(() => MentorOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  mentee: z.lazy(() => MenteeOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  _relevance: z.lazy(() => TaskOrderByRelevanceInputSchema).optional()
}).strict();

export const TaskWhereUniqueInputSchema: z.ZodType<Prisma.TaskWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => TaskWhereInputSchema),z.lazy(() => TaskWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskWhereInputSchema),z.lazy(() => TaskWhereInputSchema).array() ]).optional(),
  postition: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  menteeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumTaskStatusFilterSchema),z.lazy(() => TaskStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentor: z.union([ z.lazy(() => MentorRelationFilterSchema),z.lazy(() => MentorWhereInputSchema) ]).optional(),
  mentee: z.union([ z.lazy(() => MenteeRelationFilterSchema),z.lazy(() => MenteeWhereInputSchema) ]).optional(),
}).strict());

export const TaskOrderByWithAggregationInputSchema: z.ZodType<Prisma.TaskOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  postition: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TaskCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TaskAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TaskMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TaskMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TaskSumOrderByAggregateInputSchema).optional()
}).strict();

export const TaskScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TaskScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TaskScalarWhereWithAggregatesInputSchema),z.lazy(() => TaskScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskScalarWhereWithAggregatesInputSchema),z.lazy(() => TaskScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  postition: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  menteeId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumTaskStatusWithAggregatesFilterSchema),z.lazy(() => TaskStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MessageWhereInputSchema: z.ZodType<Prisma.MessageWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MessageWhereInputSchema),z.lazy(() => MessageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MessageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MessageWhereInputSchema),z.lazy(() => MessageWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  senderId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  receiverId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sender: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  receiver: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const MessageOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.MessageOrderByWithRelationAndSearchRelevanceInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional(),
  receiverId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  sender: z.lazy(() => UserOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  receiver: z.lazy(() => UserOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  _relevance: z.lazy(() => MessageOrderByRelevanceInputSchema).optional()
}).strict();

export const MessageWhereUniqueInputSchema: z.ZodType<Prisma.MessageWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => MessageWhereInputSchema),z.lazy(() => MessageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MessageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MessageWhereInputSchema),z.lazy(() => MessageWhereInputSchema).array() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  senderId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  receiverId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sender: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  receiver: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const MessageOrderByWithAggregationInputSchema: z.ZodType<Prisma.MessageOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional(),
  receiverId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MessageCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MessageMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MessageMinOrderByAggregateInputSchema).optional()
}).strict();

export const MessageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MessageScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MessageScalarWhereWithAggregatesInputSchema),z.lazy(() => MessageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MessageScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MessageScalarWhereWithAggregatesInputSchema),z.lazy(() => MessageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  senderId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  receiverId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MeetingWhereInputSchema: z.ZodType<Prisma.MeetingWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MeetingWhereInputSchema),z.lazy(() => MeetingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MeetingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MeetingWhereInputSchema),z.lazy(() => MeetingWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  wherebyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hostUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  guestUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  menteeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentor: z.union([ z.lazy(() => MentorRelationFilterSchema),z.lazy(() => MentorWhereInputSchema) ]).optional(),
  mentee: z.union([ z.lazy(() => MenteeRelationFilterSchema),z.lazy(() => MenteeWhereInputSchema) ]).optional(),
}).strict();

export const MeetingOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.MeetingOrderByWithRelationAndSearchRelevanceInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  wherebyId: z.lazy(() => SortOrderSchema).optional(),
  hostUrl: z.lazy(() => SortOrderSchema).optional(),
  guestUrl: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  mentor: z.lazy(() => MentorOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  mentee: z.lazy(() => MenteeOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  _relevance: z.lazy(() => MeetingOrderByRelevanceInputSchema).optional()
}).strict();

export const MeetingWhereUniqueInputSchema: z.ZodType<Prisma.MeetingWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    menteeId_mentorId: z.lazy(() => MeetingMenteeIdMentorIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    menteeId_mentorId: z.lazy(() => MeetingMenteeIdMentorIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  menteeId_mentorId: z.lazy(() => MeetingMenteeIdMentorIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => MeetingWhereInputSchema),z.lazy(() => MeetingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MeetingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MeetingWhereInputSchema),z.lazy(() => MeetingWhereInputSchema).array() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  wherebyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hostUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  guestUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  menteeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentor: z.union([ z.lazy(() => MentorRelationFilterSchema),z.lazy(() => MentorWhereInputSchema) ]).optional(),
  mentee: z.union([ z.lazy(() => MenteeRelationFilterSchema),z.lazy(() => MenteeWhereInputSchema) ]).optional(),
}).strict());

export const MeetingOrderByWithAggregationInputSchema: z.ZodType<Prisma.MeetingOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  wherebyId: z.lazy(() => SortOrderSchema).optional(),
  hostUrl: z.lazy(() => SortOrderSchema).optional(),
  guestUrl: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MeetingCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MeetingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MeetingMinOrderByAggregateInputSchema).optional()
}).strict();

export const MeetingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MeetingScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MeetingScalarWhereWithAggregatesInputSchema),z.lazy(() => MeetingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MeetingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MeetingScalarWhereWithAggregatesInputSchema),z.lazy(() => MeetingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  wherebyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  hostUrl: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  guestUrl: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
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
  mentorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  menteeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentor: z.union([ z.lazy(() => MentorRelationFilterSchema),z.lazy(() => MentorWhereInputSchema) ]).optional(),
  mentee: z.union([ z.lazy(() => MenteeRelationFilterSchema),z.lazy(() => MenteeWhereInputSchema) ]).optional(),
}).strict();

export const TestimonialOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.TestimonialOrderByWithRelationAndSearchRelevanceInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  mentor: z.lazy(() => MentorOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  mentee: z.lazy(() => MenteeOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  _relevance: z.lazy(() => TestimonialOrderByRelevanceInputSchema).optional()
}).strict();

export const TestimonialWhereUniqueInputSchema: z.ZodType<Prisma.TestimonialWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => TestimonialWhereInputSchema),z.lazy(() => TestimonialWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestimonialWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestimonialWhereInputSchema),z.lazy(() => TestimonialWhereInputSchema).array() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  menteeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentor: z.union([ z.lazy(() => MentorRelationFilterSchema),z.lazy(() => MentorWhereInputSchema) ]).optional(),
  mentee: z.union([ z.lazy(() => MenteeRelationFilterSchema),z.lazy(() => MenteeWhereInputSchema) ]).optional(),
}).strict());

export const TestimonialOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestimonialOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
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
  mentorId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  menteeId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const AvailabilityWhereInputSchema: z.ZodType<Prisma.AvailabilityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AvailabilityWhereInputSchema),z.lazy(() => AvailabilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AvailabilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AvailabilityWhereInputSchema),z.lazy(() => AvailabilityWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentor: z.union([ z.lazy(() => MentorRelationFilterSchema),z.lazy(() => MentorWhereInputSchema) ]).optional(),
}).strict();

export const AvailabilityOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.AvailabilityOrderByWithRelationAndSearchRelevanceInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  mentor: z.lazy(() => MentorOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  _relevance: z.lazy(() => AvailabilityOrderByRelevanceInputSchema).optional()
}).strict();

export const AvailabilityWhereUniqueInputSchema: z.ZodType<Prisma.AvailabilityWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => AvailabilityWhereInputSchema),z.lazy(() => AvailabilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AvailabilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AvailabilityWhereInputSchema),z.lazy(() => AvailabilityWhereInputSchema).array() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentor: z.union([ z.lazy(() => MentorRelationFilterSchema),z.lazy(() => MentorWhereInputSchema) ]).optional(),
}).strict());

export const AvailabilityOrderByWithAggregationInputSchema: z.ZodType<Prisma.AvailabilityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
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
  dayOfWeek: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  endTime: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const RequestWhereInputSchema: z.ZodType<Prisma.RequestWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RequestWhereInputSchema),z.lazy(() => RequestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RequestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RequestWhereInputSchema),z.lazy(() => RequestWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumRequestStatusFilterSchema),z.lazy(() => RequestStatusSchema) ]).optional(),
  menteeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentee: z.union([ z.lazy(() => MenteeRelationFilterSchema),z.lazy(() => MenteeWhereInputSchema) ]).optional(),
  mentor: z.union([ z.lazy(() => MentorRelationFilterSchema),z.lazy(() => MentorWhereInputSchema) ]).optional(),
}).strict();

export const RequestOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.RequestOrderByWithRelationAndSearchRelevanceInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  mentee: z.lazy(() => MenteeOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  mentor: z.lazy(() => MentorOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  _relevance: z.lazy(() => RequestOrderByRelevanceInputSchema).optional()
}).strict();

export const RequestWhereUniqueInputSchema: z.ZodType<Prisma.RequestWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    mentorId_menteeId: z.lazy(() => RequestMentorIdMenteeIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    mentorId_menteeId: z.lazy(() => RequestMentorIdMenteeIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  mentorId_menteeId: z.lazy(() => RequestMentorIdMenteeIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => RequestWhereInputSchema),z.lazy(() => RequestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RequestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RequestWhereInputSchema),z.lazy(() => RequestWhereInputSchema).array() ]).optional(),
  status: z.union([ z.lazy(() => EnumRequestStatusFilterSchema),z.lazy(() => RequestStatusSchema) ]).optional(),
  menteeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mentee: z.union([ z.lazy(() => MenteeRelationFilterSchema),z.lazy(() => MenteeWhereInputSchema) ]).optional(),
  mentor: z.union([ z.lazy(() => MentorRelationFilterSchema),z.lazy(() => MentorWhereInputSchema) ]).optional(),
}).strict());

export const RequestOrderByWithAggregationInputSchema: z.ZodType<Prisma.RequestOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RequestCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RequestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RequestMinOrderByAggregateInputSchema).optional()
}).strict();

export const RequestScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RequestScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RequestScalarWhereWithAggregatesInputSchema),z.lazy(() => RequestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RequestScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RequestScalarWhereWithAggregatesInputSchema),z.lazy(() => RequestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumRequestStatusWithAggregatesFilterSchema),z.lazy(() => RequestStatusSchema) ]).optional(),
  menteeId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
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
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorCreateNestedManyWithoutUserInputSchema).optional(),
  mentee: z.lazy(() => MenteeCreateNestedManyWithoutUserInputSchema).optional(),
  sentMessages: z.lazy(() => MessageCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageCreateNestedManyWithoutReceiverInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  mentee: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sentMessages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutReceiverInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateManyWithoutUserNestedInputSchema).optional(),
  mentee: z.lazy(() => MenteeUpdateManyWithoutUserNestedInputSchema).optional(),
  sentMessages: z.lazy(() => MessageUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageUpdateManyWithoutReceiverNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  mentee: z.lazy(() => MenteeUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sentMessages: z.lazy(() => MessageUncheckedUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageUncheckedUpdateManyWithoutReceiverNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
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
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MentorCreateInputSchema: z.ZodType<Prisma.MentorCreateInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutMentorInputSchema),
  mentees: z.lazy(() => MenteeCreateNestedManyWithoutMentorsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutMentorInputSchema).optional(),
  requests: z.lazy(() => RequestCreateNestedManyWithoutMentorInputSchema).optional(),
  meetings: z.lazy(() => MeetingCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorUncheckedCreateInputSchema: z.ZodType<Prisma.MentorUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  userId: z.string(),
  mentees: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutMentorsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorUpdateInputSchema: z.ZodType<Prisma.MentorUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMentorNestedInputSchema).optional(),
  mentees: z.lazy(() => MenteeUpdateManyWithoutMentorsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutMentorNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUpdateManyWithoutMentorNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUncheckedUpdateManyWithoutMentorsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorCreateManyInputSchema: z.ZodType<Prisma.MentorCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  userId: z.string()
}).strict();

export const MentorUpdateManyMutationInputSchema: z.ZodType<Prisma.MentorUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MentorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
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
  dob: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutMenteeInputSchema),
  mentors: z.lazy(() => MentorCreateNestedManyWithoutMenteesInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutMenteeInputSchema).optional(),
  requests: z.lazy(() => RequestCreateNestedManyWithoutMenteeInputSchema).optional(),
  meetings: z.lazy(() => MeetingCreateNestedManyWithoutMenteeInputSchema).optional(),
  reviews: z.lazy(() => TestimonialCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeUncheckedCreateInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  dob: z.coerce.date(),
  userId: z.string(),
  mentors: z.lazy(() => MentorUncheckedCreateNestedManyWithoutMenteesInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeUpdateInputSchema: z.ZodType<Prisma.MenteeUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMenteeNestedInputSchema).optional(),
  mentors: z.lazy(() => MentorUpdateManyWithoutMenteesNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutMenteeNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUpdateManyWithoutMenteeNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUpdateManyWithoutMenteeNestedInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorUncheckedUpdateManyWithoutMenteesNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MenteeCreateManyInputSchema: z.ZodType<Prisma.MenteeCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  dob: z.coerce.date(),
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
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MenteeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TaskCreateInputSchema: z.ZodType<Prisma.TaskCreateInput> = z.object({
  id: z.string().cuid().optional(),
  postition: z.number().int(),
  title: z.string(),
  description: z.string(),
  status: z.lazy(() => TaskStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorCreateNestedOneWithoutTasksInputSchema),
  mentee: z.lazy(() => MenteeCreateNestedOneWithoutTasksInputSchema)
}).strict();

export const TaskUncheckedCreateInputSchema: z.ZodType<Prisma.TaskUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  postition: z.number().int(),
  title: z.string(),
  description: z.string(),
  mentorId: z.string(),
  menteeId: z.string(),
  status: z.lazy(() => TaskStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TaskUpdateInputSchema: z.ZodType<Prisma.TaskUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => TaskStatusSchema),z.lazy(() => EnumTaskStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateOneRequiredWithoutTasksNestedInputSchema).optional(),
  mentee: z.lazy(() => MenteeUpdateOneRequiredWithoutTasksNestedInputSchema).optional()
}).strict();

export const TaskUncheckedUpdateInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => TaskStatusSchema),z.lazy(() => EnumTaskStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TaskCreateManyInputSchema: z.ZodType<Prisma.TaskCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  postition: z.number().int(),
  title: z.string(),
  description: z.string(),
  mentorId: z.string(),
  menteeId: z.string(),
  status: z.lazy(() => TaskStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TaskUpdateManyMutationInputSchema: z.ZodType<Prisma.TaskUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => TaskStatusSchema),z.lazy(() => EnumTaskStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TaskUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => TaskStatusSchema),z.lazy(() => EnumTaskStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MessageCreateInputSchema: z.ZodType<Prisma.MessageCreateInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sender: z.lazy(() => UserCreateNestedOneWithoutSentMessagesInputSchema),
  receiver: z.lazy(() => UserCreateNestedOneWithoutReceivedMessagesInputSchema)
}).strict();

export const MessageUncheckedCreateInputSchema: z.ZodType<Prisma.MessageUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  senderId: z.string(),
  receiverId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MessageUpdateInputSchema: z.ZodType<Prisma.MessageUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sender: z.lazy(() => UserUpdateOneRequiredWithoutSentMessagesNestedInputSchema).optional(),
  receiver: z.lazy(() => UserUpdateOneRequiredWithoutReceivedMessagesNestedInputSchema).optional()
}).strict();

export const MessageUncheckedUpdateInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  senderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  receiverId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MessageCreateManyInputSchema: z.ZodType<Prisma.MessageCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  senderId: z.string(),
  receiverId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MessageUpdateManyMutationInputSchema: z.ZodType<Prisma.MessageUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MessageUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  senderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  receiverId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MeetingCreateInputSchema: z.ZodType<Prisma.MeetingCreateInput> = z.object({
  id: z.string().cuid().optional(),
  endDate: z.coerce.date(),
  wherebyId: z.string(),
  hostUrl: z.string(),
  guestUrl: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorCreateNestedOneWithoutMeetingsInputSchema),
  mentee: z.lazy(() => MenteeCreateNestedOneWithoutMeetingsInputSchema)
}).strict();

export const MeetingUncheckedCreateInputSchema: z.ZodType<Prisma.MeetingUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  endDate: z.coerce.date(),
  wherebyId: z.string(),
  hostUrl: z.string(),
  guestUrl: z.string(),
  mentorId: z.string(),
  menteeId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MeetingUpdateInputSchema: z.ZodType<Prisma.MeetingUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  wherebyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hostUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guestUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateOneRequiredWithoutMeetingsNestedInputSchema).optional(),
  mentee: z.lazy(() => MenteeUpdateOneRequiredWithoutMeetingsNestedInputSchema).optional()
}).strict();

export const MeetingUncheckedUpdateInputSchema: z.ZodType<Prisma.MeetingUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  wherebyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hostUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guestUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MeetingCreateManyInputSchema: z.ZodType<Prisma.MeetingCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  endDate: z.coerce.date(),
  wherebyId: z.string(),
  hostUrl: z.string(),
  guestUrl: z.string(),
  mentorId: z.string(),
  menteeId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MeetingUpdateManyMutationInputSchema: z.ZodType<Prisma.MeetingUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  wherebyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hostUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guestUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MeetingUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MeetingUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  wherebyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hostUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guestUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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
  mentor: z.lazy(() => MentorCreateNestedOneWithoutTestimonialsInputSchema),
  mentee: z.lazy(() => MenteeCreateNestedOneWithoutReviewsInputSchema)
}).strict();

export const TestimonialUncheckedCreateInputSchema: z.ZodType<Prisma.TestimonialUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  mentorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  menteeId: z.string()
}).strict();

export const TestimonialUpdateInputSchema: z.ZodType<Prisma.TestimonialUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateOneRequiredWithoutTestimonialsNestedInputSchema).optional(),
  mentee: z.lazy(() => MenteeUpdateOneRequiredWithoutReviewsNestedInputSchema).optional()
}).strict();

export const TestimonialUncheckedUpdateInputSchema: z.ZodType<Prisma.TestimonialUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestimonialCreateManyInputSchema: z.ZodType<Prisma.TestimonialCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  mentorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  menteeId: z.string()
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
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AvailabilityCreateInputSchema: z.ZodType<Prisma.AvailabilityCreateInput> = z.object({
  id: z.string().cuid().optional(),
  dayOfWeek: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorCreateNestedOneWithoutAvailabilitiesInputSchema)
}).strict();

export const AvailabilityUncheckedCreateInputSchema: z.ZodType<Prisma.AvailabilityUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  dayOfWeek: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  mentorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AvailabilityUpdateInputSchema: z.ZodType<Prisma.AvailabilityUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateOneRequiredWithoutAvailabilitiesNestedInputSchema).optional()
}).strict();

export const AvailabilityUncheckedUpdateInputSchema: z.ZodType<Prisma.AvailabilityUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AvailabilityCreateManyInputSchema: z.ZodType<Prisma.AvailabilityCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  dayOfWeek: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  mentorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AvailabilityUpdateManyMutationInputSchema: z.ZodType<Prisma.AvailabilityUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AvailabilityUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AvailabilityUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RequestCreateInputSchema: z.ZodType<Prisma.RequestCreateInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentee: z.lazy(() => MenteeCreateNestedOneWithoutRequestsInputSchema),
  mentor: z.lazy(() => MentorCreateNestedOneWithoutRequestsInputSchema)
}).strict();

export const RequestUncheckedCreateInputSchema: z.ZodType<Prisma.RequestUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  menteeId: z.string(),
  mentorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const RequestUpdateInputSchema: z.ZodType<Prisma.RequestUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentee: z.lazy(() => MenteeUpdateOneRequiredWithoutRequestsNestedInputSchema).optional(),
  mentor: z.lazy(() => MentorUpdateOneRequiredWithoutRequestsNestedInputSchema).optional()
}).strict();

export const RequestUncheckedUpdateInputSchema: z.ZodType<Prisma.RequestUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RequestCreateManyInputSchema: z.ZodType<Prisma.RequestCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  menteeId: z.string(),
  mentorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const RequestUpdateManyMutationInputSchema: z.ZodType<Prisma.RequestUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RequestUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RequestUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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
  search: z.string().optional(),
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
  search: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const EnumRoleFilterSchema: z.ZodType<Prisma.EnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleFilterSchema) ]).optional(),
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

export const MessageListRelationFilterSchema: z.ZodType<Prisma.MessageListRelationFilter> = z.object({
  every: z.lazy(() => MessageWhereInputSchema).optional(),
  some: z.lazy(() => MessageWhereInputSchema).optional(),
  none: z.lazy(() => MessageWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const MentorOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MentorOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MenteeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MenteeOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessageOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MessageOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserOrderByRelevanceInputSchema: z.ZodType<Prisma.UserOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => UserOrderByRelevanceFieldEnumSchema),z.lazy(() => UserOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
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
  search: z.string().optional(),
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
  search: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
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

export const TaskListRelationFilterSchema: z.ZodType<Prisma.TaskListRelationFilter> = z.object({
  every: z.lazy(() => TaskWhereInputSchema).optional(),
  some: z.lazy(() => TaskWhereInputSchema).optional(),
  none: z.lazy(() => TaskWhereInputSchema).optional()
}).strict();

export const RequestListRelationFilterSchema: z.ZodType<Prisma.RequestListRelationFilter> = z.object({
  every: z.lazy(() => RequestWhereInputSchema).optional(),
  some: z.lazy(() => RequestWhereInputSchema).optional(),
  none: z.lazy(() => RequestWhereInputSchema).optional()
}).strict();

export const MeetingListRelationFilterSchema: z.ZodType<Prisma.MeetingListRelationFilter> = z.object({
  every: z.lazy(() => MeetingWhereInputSchema).optional(),
  some: z.lazy(() => MeetingWhereInputSchema).optional(),
  none: z.lazy(() => MeetingWhereInputSchema).optional()
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

export const TaskOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TaskOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RequestOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RequestOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MeetingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MeetingOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestimonialOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestimonialOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AvailabilityOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AvailabilityOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentorOrderByRelevanceInputSchema: z.ZodType<Prisma.MentorOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => MentorOrderByRelevanceFieldEnumSchema),z.lazy(() => MentorOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const MentorCountOrderByAggregateInputSchema: z.ZodType<Prisma.MentorCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  currentTitle: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  fieldOfExpertise: z.lazy(() => SortOrderSchema).optional(),
  yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  isTopMentor: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentorAvgOrderByAggregateInputSchema: z.ZodType<Prisma.MentorAvgOrderByAggregateInput> = z.object({
  yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MentorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  currentTitle: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  fieldOfExpertise: z.lazy(() => SortOrderSchema).optional(),
  yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  isTopMentor: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MentorMinOrderByAggregateInputSchema: z.ZodType<Prisma.MentorMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  currentTitle: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  fieldOfExpertise: z.lazy(() => SortOrderSchema).optional(),
  yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  isTopMentor: z.lazy(() => SortOrderSchema).optional(),
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

export const MenteeOrderByRelevanceInputSchema: z.ZodType<Prisma.MenteeOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => MenteeOrderByRelevanceFieldEnumSchema),z.lazy(() => MenteeOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const MenteeCountOrderByAggregateInputSchema: z.ZodType<Prisma.MenteeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  educationLevel: z.lazy(() => SortOrderSchema).optional(),
  careerGoals: z.lazy(() => SortOrderSchema).optional(),
  careerHistory: z.lazy(() => SortOrderSchema).optional(),
  careerChallenges: z.lazy(() => SortOrderSchema).optional(),
  skills: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MenteeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MenteeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  educationLevel: z.lazy(() => SortOrderSchema).optional(),
  careerGoals: z.lazy(() => SortOrderSchema).optional(),
  careerHistory: z.lazy(() => SortOrderSchema).optional(),
  careerChallenges: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MenteeMinOrderByAggregateInputSchema: z.ZodType<Prisma.MenteeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  educationLevel: z.lazy(() => SortOrderSchema).optional(),
  careerGoals: z.lazy(() => SortOrderSchema).optional(),
  careerHistory: z.lazy(() => SortOrderSchema).optional(),
  careerChallenges: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumTaskStatusFilterSchema: z.ZodType<Prisma.EnumTaskStatusFilter> = z.object({
  equals: z.lazy(() => TaskStatusSchema).optional(),
  in: z.lazy(() => TaskStatusSchema).array().optional(),
  notIn: z.lazy(() => TaskStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => TaskStatusSchema),z.lazy(() => NestedEnumTaskStatusFilterSchema) ]).optional(),
}).strict();

export const MentorRelationFilterSchema: z.ZodType<Prisma.MentorRelationFilter> = z.object({
  is: z.lazy(() => MentorWhereInputSchema).optional(),
  isNot: z.lazy(() => MentorWhereInputSchema).optional()
}).strict();

export const MenteeRelationFilterSchema: z.ZodType<Prisma.MenteeRelationFilter> = z.object({
  is: z.lazy(() => MenteeWhereInputSchema).optional(),
  isNot: z.lazy(() => MenteeWhereInputSchema).optional()
}).strict();

export const TaskOrderByRelevanceInputSchema: z.ZodType<Prisma.TaskOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TaskOrderByRelevanceFieldEnumSchema),z.lazy(() => TaskOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const TaskCountOrderByAggregateInputSchema: z.ZodType<Prisma.TaskCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  postition: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TaskAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TaskAvgOrderByAggregateInput> = z.object({
  postition: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TaskMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TaskMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  postition: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TaskMinOrderByAggregateInputSchema: z.ZodType<Prisma.TaskMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  postition: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TaskSumOrderByAggregateInputSchema: z.ZodType<Prisma.TaskSumOrderByAggregateInput> = z.object({
  postition: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumTaskStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTaskStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TaskStatusSchema).optional(),
  in: z.lazy(() => TaskStatusSchema).array().optional(),
  notIn: z.lazy(() => TaskStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => TaskStatusSchema),z.lazy(() => NestedEnumTaskStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTaskStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTaskStatusFilterSchema).optional()
}).strict();

export const MessageOrderByRelevanceInputSchema: z.ZodType<Prisma.MessageOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => MessageOrderByRelevanceFieldEnumSchema),z.lazy(() => MessageOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const MessageCountOrderByAggregateInputSchema: z.ZodType<Prisma.MessageCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional(),
  receiverId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MessageMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional(),
  receiverId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MessageMinOrderByAggregateInputSchema: z.ZodType<Prisma.MessageMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  senderId: z.lazy(() => SortOrderSchema).optional(),
  receiverId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MeetingOrderByRelevanceInputSchema: z.ZodType<Prisma.MeetingOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => MeetingOrderByRelevanceFieldEnumSchema),z.lazy(() => MeetingOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const MeetingMenteeIdMentorIdCompoundUniqueInputSchema: z.ZodType<Prisma.MeetingMenteeIdMentorIdCompoundUniqueInput> = z.object({
  menteeId: z.string(),
  mentorId: z.string()
}).strict();

export const MeetingCountOrderByAggregateInputSchema: z.ZodType<Prisma.MeetingCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  wherebyId: z.lazy(() => SortOrderSchema).optional(),
  hostUrl: z.lazy(() => SortOrderSchema).optional(),
  guestUrl: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MeetingMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MeetingMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  wherebyId: z.lazy(() => SortOrderSchema).optional(),
  hostUrl: z.lazy(() => SortOrderSchema).optional(),
  guestUrl: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MeetingMinOrderByAggregateInputSchema: z.ZodType<Prisma.MeetingMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  wherebyId: z.lazy(() => SortOrderSchema).optional(),
  hostUrl: z.lazy(() => SortOrderSchema).optional(),
  guestUrl: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestimonialOrderByRelevanceInputSchema: z.ZodType<Prisma.TestimonialOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TestimonialOrderByRelevanceFieldEnumSchema),z.lazy(() => TestimonialOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const TestimonialCountOrderByAggregateInputSchema: z.ZodType<Prisma.TestimonialCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestimonialMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TestimonialMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestimonialMinOrderByAggregateInputSchema: z.ZodType<Prisma.TestimonialMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AvailabilityOrderByRelevanceInputSchema: z.ZodType<Prisma.AvailabilityOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => AvailabilityOrderByRelevanceFieldEnumSchema),z.lazy(() => AvailabilityOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const AvailabilityCountOrderByAggregateInputSchema: z.ZodType<Prisma.AvailabilityCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AvailabilityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AvailabilityMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AvailabilityMinOrderByAggregateInputSchema: z.ZodType<Prisma.AvailabilityMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumRequestStatusFilterSchema: z.ZodType<Prisma.EnumRequestStatusFilter> = z.object({
  equals: z.lazy(() => RequestStatusSchema).optional(),
  in: z.lazy(() => RequestStatusSchema).array().optional(),
  notIn: z.lazy(() => RequestStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => NestedEnumRequestStatusFilterSchema) ]).optional(),
}).strict();

export const RequestOrderByRelevanceInputSchema: z.ZodType<Prisma.RequestOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => RequestOrderByRelevanceFieldEnumSchema),z.lazy(() => RequestOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const RequestMentorIdMenteeIdCompoundUniqueInputSchema: z.ZodType<Prisma.RequestMentorIdMenteeIdCompoundUniqueInput> = z.object({
  mentorId: z.string(),
  menteeId: z.string()
}).strict();

export const RequestCountOrderByAggregateInputSchema: z.ZodType<Prisma.RequestCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RequestMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RequestMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RequestMinOrderByAggregateInputSchema: z.ZodType<Prisma.RequestMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  menteeId: z.lazy(() => SortOrderSchema).optional(),
  mentorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumRequestStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRequestStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RequestStatusSchema).optional(),
  in: z.lazy(() => RequestStatusSchema).array().optional(),
  notIn: z.lazy(() => RequestStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => NestedEnumRequestStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRequestStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRequestStatusFilterSchema).optional()
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

export const MessageCreateNestedManyWithoutSenderInputSchema: z.ZodType<Prisma.MessageCreateNestedManyWithoutSenderInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutSenderInputSchema),z.lazy(() => MessageCreateWithoutSenderInputSchema).array(),z.lazy(() => MessageUncheckedCreateWithoutSenderInputSchema),z.lazy(() => MessageUncheckedCreateWithoutSenderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessageCreateOrConnectWithoutSenderInputSchema),z.lazy(() => MessageCreateOrConnectWithoutSenderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessageCreateManySenderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MessageCreateNestedManyWithoutReceiverInputSchema: z.ZodType<Prisma.MessageCreateNestedManyWithoutReceiverInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutReceiverInputSchema),z.lazy(() => MessageCreateWithoutReceiverInputSchema).array(),z.lazy(() => MessageUncheckedCreateWithoutReceiverInputSchema),z.lazy(() => MessageUncheckedCreateWithoutReceiverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessageCreateOrConnectWithoutReceiverInputSchema),z.lazy(() => MessageCreateOrConnectWithoutReceiverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessageCreateManyReceiverInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
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

export const MessageUncheckedCreateNestedManyWithoutSenderInputSchema: z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutSenderInputSchema),z.lazy(() => MessageCreateWithoutSenderInputSchema).array(),z.lazy(() => MessageUncheckedCreateWithoutSenderInputSchema),z.lazy(() => MessageUncheckedCreateWithoutSenderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessageCreateOrConnectWithoutSenderInputSchema),z.lazy(() => MessageCreateOrConnectWithoutSenderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessageCreateManySenderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MessageUncheckedCreateNestedManyWithoutReceiverInputSchema: z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutReceiverInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutReceiverInputSchema),z.lazy(() => MessageCreateWithoutReceiverInputSchema).array(),z.lazy(() => MessageUncheckedCreateWithoutReceiverInputSchema),z.lazy(() => MessageUncheckedCreateWithoutReceiverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessageCreateOrConnectWithoutReceiverInputSchema),z.lazy(() => MessageCreateOrConnectWithoutReceiverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessageCreateManyReceiverInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
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

export const EnumRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RoleSchema).optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
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

export const MessageUpdateManyWithoutSenderNestedInputSchema: z.ZodType<Prisma.MessageUpdateManyWithoutSenderNestedInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutSenderInputSchema),z.lazy(() => MessageCreateWithoutSenderInputSchema).array(),z.lazy(() => MessageUncheckedCreateWithoutSenderInputSchema),z.lazy(() => MessageUncheckedCreateWithoutSenderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessageCreateOrConnectWithoutSenderInputSchema),z.lazy(() => MessageCreateOrConnectWithoutSenderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MessageUpsertWithWhereUniqueWithoutSenderInputSchema),z.lazy(() => MessageUpsertWithWhereUniqueWithoutSenderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessageCreateManySenderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MessageUpdateWithWhereUniqueWithoutSenderInputSchema),z.lazy(() => MessageUpdateWithWhereUniqueWithoutSenderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MessageUpdateManyWithWhereWithoutSenderInputSchema),z.lazy(() => MessageUpdateManyWithWhereWithoutSenderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MessageScalarWhereInputSchema),z.lazy(() => MessageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MessageUpdateManyWithoutReceiverNestedInputSchema: z.ZodType<Prisma.MessageUpdateManyWithoutReceiverNestedInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutReceiverInputSchema),z.lazy(() => MessageCreateWithoutReceiverInputSchema).array(),z.lazy(() => MessageUncheckedCreateWithoutReceiverInputSchema),z.lazy(() => MessageUncheckedCreateWithoutReceiverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessageCreateOrConnectWithoutReceiverInputSchema),z.lazy(() => MessageCreateOrConnectWithoutReceiverInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MessageUpsertWithWhereUniqueWithoutReceiverInputSchema),z.lazy(() => MessageUpsertWithWhereUniqueWithoutReceiverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessageCreateManyReceiverInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MessageUpdateWithWhereUniqueWithoutReceiverInputSchema),z.lazy(() => MessageUpdateWithWhereUniqueWithoutReceiverInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MessageUpdateManyWithWhereWithoutReceiverInputSchema),z.lazy(() => MessageUpdateManyWithWhereWithoutReceiverInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MessageScalarWhereInputSchema),z.lazy(() => MessageScalarWhereInputSchema).array() ]).optional(),
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

export const MessageUncheckedUpdateManyWithoutSenderNestedInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutSenderInputSchema),z.lazy(() => MessageCreateWithoutSenderInputSchema).array(),z.lazy(() => MessageUncheckedCreateWithoutSenderInputSchema),z.lazy(() => MessageUncheckedCreateWithoutSenderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessageCreateOrConnectWithoutSenderInputSchema),z.lazy(() => MessageCreateOrConnectWithoutSenderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MessageUpsertWithWhereUniqueWithoutSenderInputSchema),z.lazy(() => MessageUpsertWithWhereUniqueWithoutSenderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessageCreateManySenderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MessageUpdateWithWhereUniqueWithoutSenderInputSchema),z.lazy(() => MessageUpdateWithWhereUniqueWithoutSenderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MessageUpdateManyWithWhereWithoutSenderInputSchema),z.lazy(() => MessageUpdateManyWithWhereWithoutSenderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MessageScalarWhereInputSchema),z.lazy(() => MessageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MessageUncheckedUpdateManyWithoutReceiverNestedInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutReceiverNestedInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutReceiverInputSchema),z.lazy(() => MessageCreateWithoutReceiverInputSchema).array(),z.lazy(() => MessageUncheckedCreateWithoutReceiverInputSchema),z.lazy(() => MessageUncheckedCreateWithoutReceiverInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessageCreateOrConnectWithoutReceiverInputSchema),z.lazy(() => MessageCreateOrConnectWithoutReceiverInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MessageUpsertWithWhereUniqueWithoutReceiverInputSchema),z.lazy(() => MessageUpsertWithWhereUniqueWithoutReceiverInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessageCreateManyReceiverInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MessageUpdateWithWhereUniqueWithoutReceiverInputSchema),z.lazy(() => MessageUpdateWithWhereUniqueWithoutReceiverInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MessageUpdateManyWithWhereWithoutReceiverInputSchema),z.lazy(() => MessageUpdateManyWithWhereWithoutReceiverInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MessageScalarWhereInputSchema),z.lazy(() => MessageScalarWhereInputSchema).array() ]).optional(),
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

export const TaskCreateNestedManyWithoutMentorInputSchema: z.ZodType<Prisma.TaskCreateNestedManyWithoutMentorInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutMentorInputSchema),z.lazy(() => TaskCreateWithoutMentorInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutMentorInputSchema),z.lazy(() => TaskUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutMentorInputSchema),z.lazy(() => TaskCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyMentorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RequestCreateNestedManyWithoutMentorInputSchema: z.ZodType<Prisma.RequestCreateNestedManyWithoutMentorInput> = z.object({
  create: z.union([ z.lazy(() => RequestCreateWithoutMentorInputSchema),z.lazy(() => RequestCreateWithoutMentorInputSchema).array(),z.lazy(() => RequestUncheckedCreateWithoutMentorInputSchema),z.lazy(() => RequestUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RequestCreateOrConnectWithoutMentorInputSchema),z.lazy(() => RequestCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RequestCreateManyMentorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MeetingCreateNestedManyWithoutMentorInputSchema: z.ZodType<Prisma.MeetingCreateNestedManyWithoutMentorInput> = z.object({
  create: z.union([ z.lazy(() => MeetingCreateWithoutMentorInputSchema),z.lazy(() => MeetingCreateWithoutMentorInputSchema).array(),z.lazy(() => MeetingUncheckedCreateWithoutMentorInputSchema),z.lazy(() => MeetingUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MeetingCreateOrConnectWithoutMentorInputSchema),z.lazy(() => MeetingCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MeetingCreateManyMentorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
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

export const TaskUncheckedCreateNestedManyWithoutMentorInputSchema: z.ZodType<Prisma.TaskUncheckedCreateNestedManyWithoutMentorInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutMentorInputSchema),z.lazy(() => TaskCreateWithoutMentorInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutMentorInputSchema),z.lazy(() => TaskUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutMentorInputSchema),z.lazy(() => TaskCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyMentorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RequestUncheckedCreateNestedManyWithoutMentorInputSchema: z.ZodType<Prisma.RequestUncheckedCreateNestedManyWithoutMentorInput> = z.object({
  create: z.union([ z.lazy(() => RequestCreateWithoutMentorInputSchema),z.lazy(() => RequestCreateWithoutMentorInputSchema).array(),z.lazy(() => RequestUncheckedCreateWithoutMentorInputSchema),z.lazy(() => RequestUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RequestCreateOrConnectWithoutMentorInputSchema),z.lazy(() => RequestCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RequestCreateManyMentorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MeetingUncheckedCreateNestedManyWithoutMentorInputSchema: z.ZodType<Prisma.MeetingUncheckedCreateNestedManyWithoutMentorInput> = z.object({
  create: z.union([ z.lazy(() => MeetingCreateWithoutMentorInputSchema),z.lazy(() => MeetingCreateWithoutMentorInputSchema).array(),z.lazy(() => MeetingUncheckedCreateWithoutMentorInputSchema),z.lazy(() => MeetingUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MeetingCreateOrConnectWithoutMentorInputSchema),z.lazy(() => MeetingCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MeetingCreateManyMentorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
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
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutMentorInputSchema),z.lazy(() => UserUpdateWithoutMentorInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMentorInputSchema) ]).optional(),
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

export const TaskUpdateManyWithoutMentorNestedInputSchema: z.ZodType<Prisma.TaskUpdateManyWithoutMentorNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutMentorInputSchema),z.lazy(() => TaskCreateWithoutMentorInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutMentorInputSchema),z.lazy(() => TaskUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutMentorInputSchema),z.lazy(() => TaskCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskUpsertWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => TaskUpsertWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyMentorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskUpdateWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => TaskUpdateWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskUpdateManyWithWhereWithoutMentorInputSchema),z.lazy(() => TaskUpdateManyWithWhereWithoutMentorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskScalarWhereInputSchema),z.lazy(() => TaskScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RequestUpdateManyWithoutMentorNestedInputSchema: z.ZodType<Prisma.RequestUpdateManyWithoutMentorNestedInput> = z.object({
  create: z.union([ z.lazy(() => RequestCreateWithoutMentorInputSchema),z.lazy(() => RequestCreateWithoutMentorInputSchema).array(),z.lazy(() => RequestUncheckedCreateWithoutMentorInputSchema),z.lazy(() => RequestUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RequestCreateOrConnectWithoutMentorInputSchema),z.lazy(() => RequestCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RequestUpsertWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => RequestUpsertWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RequestCreateManyMentorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RequestUpdateWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => RequestUpdateWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RequestUpdateManyWithWhereWithoutMentorInputSchema),z.lazy(() => RequestUpdateManyWithWhereWithoutMentorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RequestScalarWhereInputSchema),z.lazy(() => RequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MeetingUpdateManyWithoutMentorNestedInputSchema: z.ZodType<Prisma.MeetingUpdateManyWithoutMentorNestedInput> = z.object({
  create: z.union([ z.lazy(() => MeetingCreateWithoutMentorInputSchema),z.lazy(() => MeetingCreateWithoutMentorInputSchema).array(),z.lazy(() => MeetingUncheckedCreateWithoutMentorInputSchema),z.lazy(() => MeetingUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MeetingCreateOrConnectWithoutMentorInputSchema),z.lazy(() => MeetingCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MeetingUpsertWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => MeetingUpsertWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MeetingCreateManyMentorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MeetingUpdateWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => MeetingUpdateWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MeetingUpdateManyWithWhereWithoutMentorInputSchema),z.lazy(() => MeetingUpdateManyWithWhereWithoutMentorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MeetingScalarWhereInputSchema),z.lazy(() => MeetingScalarWhereInputSchema).array() ]).optional(),
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

export const TaskUncheckedUpdateManyWithoutMentorNestedInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutMentorNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutMentorInputSchema),z.lazy(() => TaskCreateWithoutMentorInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutMentorInputSchema),z.lazy(() => TaskUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutMentorInputSchema),z.lazy(() => TaskCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskUpsertWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => TaskUpsertWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyMentorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskUpdateWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => TaskUpdateWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskUpdateManyWithWhereWithoutMentorInputSchema),z.lazy(() => TaskUpdateManyWithWhereWithoutMentorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskScalarWhereInputSchema),z.lazy(() => TaskScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RequestUncheckedUpdateManyWithoutMentorNestedInputSchema: z.ZodType<Prisma.RequestUncheckedUpdateManyWithoutMentorNestedInput> = z.object({
  create: z.union([ z.lazy(() => RequestCreateWithoutMentorInputSchema),z.lazy(() => RequestCreateWithoutMentorInputSchema).array(),z.lazy(() => RequestUncheckedCreateWithoutMentorInputSchema),z.lazy(() => RequestUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RequestCreateOrConnectWithoutMentorInputSchema),z.lazy(() => RequestCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RequestUpsertWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => RequestUpsertWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RequestCreateManyMentorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RequestUpdateWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => RequestUpdateWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RequestUpdateManyWithWhereWithoutMentorInputSchema),z.lazy(() => RequestUpdateManyWithWhereWithoutMentorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RequestScalarWhereInputSchema),z.lazy(() => RequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MeetingUncheckedUpdateManyWithoutMentorNestedInputSchema: z.ZodType<Prisma.MeetingUncheckedUpdateManyWithoutMentorNestedInput> = z.object({
  create: z.union([ z.lazy(() => MeetingCreateWithoutMentorInputSchema),z.lazy(() => MeetingCreateWithoutMentorInputSchema).array(),z.lazy(() => MeetingUncheckedCreateWithoutMentorInputSchema),z.lazy(() => MeetingUncheckedCreateWithoutMentorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MeetingCreateOrConnectWithoutMentorInputSchema),z.lazy(() => MeetingCreateOrConnectWithoutMentorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MeetingUpsertWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => MeetingUpsertWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MeetingCreateManyMentorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MeetingUpdateWithWhereUniqueWithoutMentorInputSchema),z.lazy(() => MeetingUpdateWithWhereUniqueWithoutMentorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MeetingUpdateManyWithWhereWithoutMentorInputSchema),z.lazy(() => MeetingUpdateManyWithWhereWithoutMentorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MeetingScalarWhereInputSchema),z.lazy(() => MeetingScalarWhereInputSchema).array() ]).optional(),
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

export const TaskCreateNestedManyWithoutMenteeInputSchema: z.ZodType<Prisma.TaskCreateNestedManyWithoutMenteeInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutMenteeInputSchema),z.lazy(() => TaskCreateWithoutMenteeInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => TaskUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => TaskCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyMenteeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RequestCreateNestedManyWithoutMenteeInputSchema: z.ZodType<Prisma.RequestCreateNestedManyWithoutMenteeInput> = z.object({
  create: z.union([ z.lazy(() => RequestCreateWithoutMenteeInputSchema),z.lazy(() => RequestCreateWithoutMenteeInputSchema).array(),z.lazy(() => RequestUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => RequestUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RequestCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => RequestCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RequestCreateManyMenteeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MeetingCreateNestedManyWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingCreateNestedManyWithoutMenteeInput> = z.object({
  create: z.union([ z.lazy(() => MeetingCreateWithoutMenteeInputSchema),z.lazy(() => MeetingCreateWithoutMenteeInputSchema).array(),z.lazy(() => MeetingUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => MeetingUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MeetingCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => MeetingCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MeetingCreateManyMenteeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestimonialCreateNestedManyWithoutMenteeInputSchema: z.ZodType<Prisma.TestimonialCreateNestedManyWithoutMenteeInput> = z.object({
  create: z.union([ z.lazy(() => TestimonialCreateWithoutMenteeInputSchema),z.lazy(() => TestimonialCreateWithoutMenteeInputSchema).array(),z.lazy(() => TestimonialUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => TestimonialUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestimonialCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => TestimonialCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestimonialCreateManyMenteeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MentorUncheckedCreateNestedManyWithoutMenteesInputSchema: z.ZodType<Prisma.MentorUncheckedCreateNestedManyWithoutMenteesInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutMenteesInputSchema),z.lazy(() => MentorCreateWithoutMenteesInputSchema).array(),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MentorCreateOrConnectWithoutMenteesInputSchema),z.lazy(() => MentorCreateOrConnectWithoutMenteesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MentorWhereUniqueInputSchema),z.lazy(() => MentorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TaskUncheckedCreateNestedManyWithoutMenteeInputSchema: z.ZodType<Prisma.TaskUncheckedCreateNestedManyWithoutMenteeInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutMenteeInputSchema),z.lazy(() => TaskCreateWithoutMenteeInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => TaskUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => TaskCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyMenteeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RequestUncheckedCreateNestedManyWithoutMenteeInputSchema: z.ZodType<Prisma.RequestUncheckedCreateNestedManyWithoutMenteeInput> = z.object({
  create: z.union([ z.lazy(() => RequestCreateWithoutMenteeInputSchema),z.lazy(() => RequestCreateWithoutMenteeInputSchema).array(),z.lazy(() => RequestUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => RequestUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RequestCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => RequestCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RequestCreateManyMenteeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const MeetingUncheckedCreateNestedManyWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingUncheckedCreateNestedManyWithoutMenteeInput> = z.object({
  create: z.union([ z.lazy(() => MeetingCreateWithoutMenteeInputSchema),z.lazy(() => MeetingCreateWithoutMenteeInputSchema).array(),z.lazy(() => MeetingUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => MeetingUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MeetingCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => MeetingCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MeetingCreateManyMenteeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestimonialUncheckedCreateNestedManyWithoutMenteeInputSchema: z.ZodType<Prisma.TestimonialUncheckedCreateNestedManyWithoutMenteeInput> = z.object({
  create: z.union([ z.lazy(() => TestimonialCreateWithoutMenteeInputSchema),z.lazy(() => TestimonialCreateWithoutMenteeInputSchema).array(),z.lazy(() => TestimonialUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => TestimonialUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestimonialCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => TestimonialCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestimonialCreateManyMenteeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
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
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutMenteeInputSchema),z.lazy(() => UserUpdateWithoutMenteeInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMenteeInputSchema) ]).optional(),
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

export const TaskUpdateManyWithoutMenteeNestedInputSchema: z.ZodType<Prisma.TaskUpdateManyWithoutMenteeNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutMenteeInputSchema),z.lazy(() => TaskCreateWithoutMenteeInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => TaskUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => TaskCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskUpsertWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => TaskUpsertWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyMenteeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskUpdateWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => TaskUpdateWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskUpdateManyWithWhereWithoutMenteeInputSchema),z.lazy(() => TaskUpdateManyWithWhereWithoutMenteeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskScalarWhereInputSchema),z.lazy(() => TaskScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RequestUpdateManyWithoutMenteeNestedInputSchema: z.ZodType<Prisma.RequestUpdateManyWithoutMenteeNestedInput> = z.object({
  create: z.union([ z.lazy(() => RequestCreateWithoutMenteeInputSchema),z.lazy(() => RequestCreateWithoutMenteeInputSchema).array(),z.lazy(() => RequestUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => RequestUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RequestCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => RequestCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RequestUpsertWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => RequestUpsertWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RequestCreateManyMenteeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RequestUpdateWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => RequestUpdateWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RequestUpdateManyWithWhereWithoutMenteeInputSchema),z.lazy(() => RequestUpdateManyWithWhereWithoutMenteeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RequestScalarWhereInputSchema),z.lazy(() => RequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MeetingUpdateManyWithoutMenteeNestedInputSchema: z.ZodType<Prisma.MeetingUpdateManyWithoutMenteeNestedInput> = z.object({
  create: z.union([ z.lazy(() => MeetingCreateWithoutMenteeInputSchema),z.lazy(() => MeetingCreateWithoutMenteeInputSchema).array(),z.lazy(() => MeetingUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => MeetingUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MeetingCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => MeetingCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MeetingUpsertWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => MeetingUpsertWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MeetingCreateManyMenteeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MeetingUpdateWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => MeetingUpdateWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MeetingUpdateManyWithWhereWithoutMenteeInputSchema),z.lazy(() => MeetingUpdateManyWithWhereWithoutMenteeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MeetingScalarWhereInputSchema),z.lazy(() => MeetingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestimonialUpdateManyWithoutMenteeNestedInputSchema: z.ZodType<Prisma.TestimonialUpdateManyWithoutMenteeNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestimonialCreateWithoutMenteeInputSchema),z.lazy(() => TestimonialCreateWithoutMenteeInputSchema).array(),z.lazy(() => TestimonialUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => TestimonialUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestimonialCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => TestimonialCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestimonialUpsertWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => TestimonialUpsertWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestimonialCreateManyMenteeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestimonialUpdateWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => TestimonialUpdateWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestimonialUpdateManyWithWhereWithoutMenteeInputSchema),z.lazy(() => TestimonialUpdateManyWithWhereWithoutMenteeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestimonialScalarWhereInputSchema),z.lazy(() => TestimonialScalarWhereInputSchema).array() ]).optional(),
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

export const TaskUncheckedUpdateManyWithoutMenteeNestedInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutMenteeNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutMenteeInputSchema),z.lazy(() => TaskCreateWithoutMenteeInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => TaskUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => TaskCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskUpsertWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => TaskUpsertWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyMenteeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskUpdateWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => TaskUpdateWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskUpdateManyWithWhereWithoutMenteeInputSchema),z.lazy(() => TaskUpdateManyWithWhereWithoutMenteeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskScalarWhereInputSchema),z.lazy(() => TaskScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RequestUncheckedUpdateManyWithoutMenteeNestedInputSchema: z.ZodType<Prisma.RequestUncheckedUpdateManyWithoutMenteeNestedInput> = z.object({
  create: z.union([ z.lazy(() => RequestCreateWithoutMenteeInputSchema),z.lazy(() => RequestCreateWithoutMenteeInputSchema).array(),z.lazy(() => RequestUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => RequestUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RequestCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => RequestCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RequestUpsertWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => RequestUpsertWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RequestCreateManyMenteeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RequestWhereUniqueInputSchema),z.lazy(() => RequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RequestUpdateWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => RequestUpdateWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RequestUpdateManyWithWhereWithoutMenteeInputSchema),z.lazy(() => RequestUpdateManyWithWhereWithoutMenteeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RequestScalarWhereInputSchema),z.lazy(() => RequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MeetingUncheckedUpdateManyWithoutMenteeNestedInputSchema: z.ZodType<Prisma.MeetingUncheckedUpdateManyWithoutMenteeNestedInput> = z.object({
  create: z.union([ z.lazy(() => MeetingCreateWithoutMenteeInputSchema),z.lazy(() => MeetingCreateWithoutMenteeInputSchema).array(),z.lazy(() => MeetingUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => MeetingUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MeetingCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => MeetingCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MeetingUpsertWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => MeetingUpsertWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MeetingCreateManyMenteeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MeetingWhereUniqueInputSchema),z.lazy(() => MeetingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MeetingUpdateWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => MeetingUpdateWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MeetingUpdateManyWithWhereWithoutMenteeInputSchema),z.lazy(() => MeetingUpdateManyWithWhereWithoutMenteeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MeetingScalarWhereInputSchema),z.lazy(() => MeetingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestimonialUncheckedUpdateManyWithoutMenteeNestedInputSchema: z.ZodType<Prisma.TestimonialUncheckedUpdateManyWithoutMenteeNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestimonialCreateWithoutMenteeInputSchema),z.lazy(() => TestimonialCreateWithoutMenteeInputSchema).array(),z.lazy(() => TestimonialUncheckedCreateWithoutMenteeInputSchema),z.lazy(() => TestimonialUncheckedCreateWithoutMenteeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestimonialCreateOrConnectWithoutMenteeInputSchema),z.lazy(() => TestimonialCreateOrConnectWithoutMenteeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestimonialUpsertWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => TestimonialUpsertWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestimonialCreateManyMenteeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestimonialWhereUniqueInputSchema),z.lazy(() => TestimonialWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestimonialUpdateWithWhereUniqueWithoutMenteeInputSchema),z.lazy(() => TestimonialUpdateWithWhereUniqueWithoutMenteeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestimonialUpdateManyWithWhereWithoutMenteeInputSchema),z.lazy(() => TestimonialUpdateManyWithWhereWithoutMenteeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestimonialScalarWhereInputSchema),z.lazy(() => TestimonialScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MentorCreateNestedOneWithoutTasksInputSchema: z.ZodType<Prisma.MentorCreateNestedOneWithoutTasksInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutTasksInputSchema),z.lazy(() => MentorUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional()
}).strict();

export const MenteeCreateNestedOneWithoutTasksInputSchema: z.ZodType<Prisma.MenteeCreateNestedOneWithoutTasksInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutTasksInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MenteeCreateOrConnectWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => MenteeWhereUniqueInputSchema).optional()
}).strict();

export const EnumTaskStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTaskStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TaskStatusSchema).optional()
}).strict();

export const MentorUpdateOneRequiredWithoutTasksNestedInputSchema: z.ZodType<Prisma.MentorUpdateOneRequiredWithoutTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutTasksInputSchema),z.lazy(() => MentorUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutTasksInputSchema).optional(),
  upsert: z.lazy(() => MentorUpsertWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MentorUpdateToOneWithWhereWithoutTasksInputSchema),z.lazy(() => MentorUpdateWithoutTasksInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutTasksInputSchema) ]).optional(),
}).strict();

export const MenteeUpdateOneRequiredWithoutTasksNestedInputSchema: z.ZodType<Prisma.MenteeUpdateOneRequiredWithoutTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutTasksInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MenteeCreateOrConnectWithoutTasksInputSchema).optional(),
  upsert: z.lazy(() => MenteeUpsertWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => MenteeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MenteeUpdateToOneWithWhereWithoutTasksInputSchema),z.lazy(() => MenteeUpdateWithoutTasksInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutTasksInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSentMessagesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSentMessagesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSentMessagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutSentMessagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSentMessagesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutReceivedMessagesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutReceivedMessagesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutReceivedMessagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutReceivedMessagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReceivedMessagesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutSentMessagesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSentMessagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSentMessagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutSentMessagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSentMessagesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSentMessagesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSentMessagesInputSchema),z.lazy(() => UserUpdateWithoutSentMessagesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSentMessagesInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutReceivedMessagesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutReceivedMessagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutReceivedMessagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutReceivedMessagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReceivedMessagesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutReceivedMessagesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutReceivedMessagesInputSchema),z.lazy(() => UserUpdateWithoutReceivedMessagesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReceivedMessagesInputSchema) ]).optional(),
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
  update: z.union([ z.lazy(() => MentorUpdateToOneWithWhereWithoutMeetingsInputSchema),z.lazy(() => MentorUpdateWithoutMeetingsInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutMeetingsInputSchema) ]).optional(),
}).strict();

export const MenteeUpdateOneRequiredWithoutMeetingsNestedInputSchema: z.ZodType<Prisma.MenteeUpdateOneRequiredWithoutMeetingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutMeetingsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMeetingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MenteeCreateOrConnectWithoutMeetingsInputSchema).optional(),
  upsert: z.lazy(() => MenteeUpsertWithoutMeetingsInputSchema).optional(),
  connect: z.lazy(() => MenteeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MenteeUpdateToOneWithWhereWithoutMeetingsInputSchema),z.lazy(() => MenteeUpdateWithoutMeetingsInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutMeetingsInputSchema) ]).optional(),
}).strict();

export const MentorCreateNestedOneWithoutTestimonialsInputSchema: z.ZodType<Prisma.MentorCreateNestedOneWithoutTestimonialsInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutTestimonialsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutTestimonialsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutTestimonialsInputSchema).optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional()
}).strict();

export const MenteeCreateNestedOneWithoutReviewsInputSchema: z.ZodType<Prisma.MenteeCreateNestedOneWithoutReviewsInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutReviewsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MenteeCreateOrConnectWithoutReviewsInputSchema).optional(),
  connect: z.lazy(() => MenteeWhereUniqueInputSchema).optional()
}).strict();

export const MentorUpdateOneRequiredWithoutTestimonialsNestedInputSchema: z.ZodType<Prisma.MentorUpdateOneRequiredWithoutTestimonialsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutTestimonialsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutTestimonialsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutTestimonialsInputSchema).optional(),
  upsert: z.lazy(() => MentorUpsertWithoutTestimonialsInputSchema).optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MentorUpdateToOneWithWhereWithoutTestimonialsInputSchema),z.lazy(() => MentorUpdateWithoutTestimonialsInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutTestimonialsInputSchema) ]).optional(),
}).strict();

export const MenteeUpdateOneRequiredWithoutReviewsNestedInputSchema: z.ZodType<Prisma.MenteeUpdateOneRequiredWithoutReviewsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutReviewsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MenteeCreateOrConnectWithoutReviewsInputSchema).optional(),
  upsert: z.lazy(() => MenteeUpsertWithoutReviewsInputSchema).optional(),
  connect: z.lazy(() => MenteeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MenteeUpdateToOneWithWhereWithoutReviewsInputSchema),z.lazy(() => MenteeUpdateWithoutReviewsInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutReviewsInputSchema) ]).optional(),
}).strict();

export const MentorCreateNestedOneWithoutAvailabilitiesInputSchema: z.ZodType<Prisma.MentorCreateNestedOneWithoutAvailabilitiesInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutAvailabilitiesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutAvailabilitiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutAvailabilitiesInputSchema).optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional()
}).strict();

export const MentorUpdateOneRequiredWithoutAvailabilitiesNestedInputSchema: z.ZodType<Prisma.MentorUpdateOneRequiredWithoutAvailabilitiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutAvailabilitiesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutAvailabilitiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutAvailabilitiesInputSchema).optional(),
  upsert: z.lazy(() => MentorUpsertWithoutAvailabilitiesInputSchema).optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MentorUpdateToOneWithWhereWithoutAvailabilitiesInputSchema),z.lazy(() => MentorUpdateWithoutAvailabilitiesInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutAvailabilitiesInputSchema) ]).optional(),
}).strict();

export const MenteeCreateNestedOneWithoutRequestsInputSchema: z.ZodType<Prisma.MenteeCreateNestedOneWithoutRequestsInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutRequestsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutRequestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MenteeCreateOrConnectWithoutRequestsInputSchema).optional(),
  connect: z.lazy(() => MenteeWhereUniqueInputSchema).optional()
}).strict();

export const MentorCreateNestedOneWithoutRequestsInputSchema: z.ZodType<Prisma.MentorCreateNestedOneWithoutRequestsInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutRequestsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutRequestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutRequestsInputSchema).optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional()
}).strict();

export const EnumRequestStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRequestStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RequestStatusSchema).optional()
}).strict();

export const MenteeUpdateOneRequiredWithoutRequestsNestedInputSchema: z.ZodType<Prisma.MenteeUpdateOneRequiredWithoutRequestsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MenteeCreateWithoutRequestsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutRequestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MenteeCreateOrConnectWithoutRequestsInputSchema).optional(),
  upsert: z.lazy(() => MenteeUpsertWithoutRequestsInputSchema).optional(),
  connect: z.lazy(() => MenteeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MenteeUpdateToOneWithWhereWithoutRequestsInputSchema),z.lazy(() => MenteeUpdateWithoutRequestsInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutRequestsInputSchema) ]).optional(),
}).strict();

export const MentorUpdateOneRequiredWithoutRequestsNestedInputSchema: z.ZodType<Prisma.MentorUpdateOneRequiredWithoutRequestsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MentorCreateWithoutRequestsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutRequestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MentorCreateOrConnectWithoutRequestsInputSchema).optional(),
  upsert: z.lazy(() => MentorUpsertWithoutRequestsInputSchema).optional(),
  connect: z.lazy(() => MentorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MentorUpdateToOneWithWhereWithoutRequestsInputSchema),z.lazy(() => MentorUpdateWithoutRequestsInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutRequestsInputSchema) ]).optional(),
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
  search: z.string().optional(),
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
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumRoleFilterSchema: z.ZodType<Prisma.NestedEnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleFilterSchema) ]).optional(),
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
  search: z.string().optional(),
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
  search: z.string().optional(),
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

export const NestedEnumRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional()
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

export const NestedEnumTaskStatusFilterSchema: z.ZodType<Prisma.NestedEnumTaskStatusFilter> = z.object({
  equals: z.lazy(() => TaskStatusSchema).optional(),
  in: z.lazy(() => TaskStatusSchema).array().optional(),
  notIn: z.lazy(() => TaskStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => TaskStatusSchema),z.lazy(() => NestedEnumTaskStatusFilterSchema) ]).optional(),
}).strict();

export const NestedEnumTaskStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTaskStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TaskStatusSchema).optional(),
  in: z.lazy(() => TaskStatusSchema).array().optional(),
  notIn: z.lazy(() => TaskStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => TaskStatusSchema),z.lazy(() => NestedEnumTaskStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTaskStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTaskStatusFilterSchema).optional()
}).strict();

export const NestedEnumRequestStatusFilterSchema: z.ZodType<Prisma.NestedEnumRequestStatusFilter> = z.object({
  equals: z.lazy(() => RequestStatusSchema).optional(),
  in: z.lazy(() => RequestStatusSchema).array().optional(),
  notIn: z.lazy(() => RequestStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => NestedEnumRequestStatusFilterSchema) ]).optional(),
}).strict();

export const NestedEnumRequestStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRequestStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RequestStatusSchema).optional(),
  in: z.lazy(() => RequestStatusSchema).array().optional(),
  notIn: z.lazy(() => RequestStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => NestedEnumRequestStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRequestStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRequestStatusFilterSchema).optional()
}).strict();

export const MentorCreateWithoutUserInputSchema: z.ZodType<Prisma.MentorCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  mentees: z.lazy(() => MenteeCreateNestedManyWithoutMentorsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutMentorInputSchema).optional(),
  requests: z.lazy(() => RequestCreateNestedManyWithoutMentorInputSchema).optional(),
  meetings: z.lazy(() => MeetingCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.MentorUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  mentees: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutMentorsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
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
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  dob: z.coerce.date(),
  mentors: z.lazy(() => MentorCreateNestedManyWithoutMenteesInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutMenteeInputSchema).optional(),
  requests: z.lazy(() => RequestCreateNestedManyWithoutMenteeInputSchema).optional(),
  meetings: z.lazy(() => MeetingCreateNestedManyWithoutMenteeInputSchema).optional(),
  reviews: z.lazy(() => TestimonialCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  dob: z.coerce.date(),
  mentors: z.lazy(() => MentorUncheckedCreateNestedManyWithoutMenteesInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.MenteeCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => MenteeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MenteeCreateWithoutUserInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const MenteeCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.MenteeCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MenteeCreateManyUserInputSchema),z.lazy(() => MenteeCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MessageCreateWithoutSenderInputSchema: z.ZodType<Prisma.MessageCreateWithoutSenderInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  receiver: z.lazy(() => UserCreateNestedOneWithoutReceivedMessagesInputSchema)
}).strict();

export const MessageUncheckedCreateWithoutSenderInputSchema: z.ZodType<Prisma.MessageUncheckedCreateWithoutSenderInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  receiverId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MessageCreateOrConnectWithoutSenderInputSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutSenderInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MessageCreateWithoutSenderInputSchema),z.lazy(() => MessageUncheckedCreateWithoutSenderInputSchema) ]),
}).strict();

export const MessageCreateManySenderInputEnvelopeSchema: z.ZodType<Prisma.MessageCreateManySenderInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MessageCreateManySenderInputSchema),z.lazy(() => MessageCreateManySenderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MessageCreateWithoutReceiverInputSchema: z.ZodType<Prisma.MessageCreateWithoutReceiverInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sender: z.lazy(() => UserCreateNestedOneWithoutSentMessagesInputSchema)
}).strict();

export const MessageUncheckedCreateWithoutReceiverInputSchema: z.ZodType<Prisma.MessageUncheckedCreateWithoutReceiverInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  senderId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MessageCreateOrConnectWithoutReceiverInputSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutReceiverInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MessageCreateWithoutReceiverInputSchema),z.lazy(() => MessageUncheckedCreateWithoutReceiverInputSchema) ]),
}).strict();

export const MessageCreateManyReceiverInputEnvelopeSchema: z.ZodType<Prisma.MessageCreateManyReceiverInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MessageCreateManyReceiverInputSchema),z.lazy(() => MessageCreateManyReceiverInputSchema).array() ]),
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
  data: z.union([ z.lazy(() => MentorUpdateManyMutationInputSchema),z.lazy(() => MentorUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const MentorScalarWhereInputSchema: z.ZodType<Prisma.MentorScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MentorScalarWhereInputSchema),z.lazy(() => MentorScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MentorScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MentorScalarWhereInputSchema),z.lazy(() => MentorScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  currentTitle: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fieldOfExpertise: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  yearsOfExperience: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  isTopMentor: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
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
  data: z.union([ z.lazy(() => MenteeUpdateManyMutationInputSchema),z.lazy(() => MenteeUncheckedUpdateManyWithoutUserInputSchema) ]),
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
  dob: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const MessageUpsertWithWhereUniqueWithoutSenderInputSchema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutSenderInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MessageUpdateWithoutSenderInputSchema),z.lazy(() => MessageUncheckedUpdateWithoutSenderInputSchema) ]),
  create: z.union([ z.lazy(() => MessageCreateWithoutSenderInputSchema),z.lazy(() => MessageUncheckedCreateWithoutSenderInputSchema) ]),
}).strict();

export const MessageUpdateWithWhereUniqueWithoutSenderInputSchema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutSenderInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MessageUpdateWithoutSenderInputSchema),z.lazy(() => MessageUncheckedUpdateWithoutSenderInputSchema) ]),
}).strict();

export const MessageUpdateManyWithWhereWithoutSenderInputSchema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutSenderInput> = z.object({
  where: z.lazy(() => MessageScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MessageUpdateManyMutationInputSchema),z.lazy(() => MessageUncheckedUpdateManyWithoutSenderInputSchema) ]),
}).strict();

export const MessageScalarWhereInputSchema: z.ZodType<Prisma.MessageScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MessageScalarWhereInputSchema),z.lazy(() => MessageScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MessageScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MessageScalarWhereInputSchema),z.lazy(() => MessageScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  senderId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  receiverId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MessageUpsertWithWhereUniqueWithoutReceiverInputSchema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutReceiverInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MessageUpdateWithoutReceiverInputSchema),z.lazy(() => MessageUncheckedUpdateWithoutReceiverInputSchema) ]),
  create: z.union([ z.lazy(() => MessageCreateWithoutReceiverInputSchema),z.lazy(() => MessageUncheckedCreateWithoutReceiverInputSchema) ]),
}).strict();

export const MessageUpdateWithWhereUniqueWithoutReceiverInputSchema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutReceiverInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MessageUpdateWithoutReceiverInputSchema),z.lazy(() => MessageUncheckedUpdateWithoutReceiverInputSchema) ]),
}).strict();

export const MessageUpdateManyWithWhereWithoutReceiverInputSchema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutReceiverInput> = z.object({
  where: z.lazy(() => MessageScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MessageUpdateManyMutationInputSchema),z.lazy(() => MessageUncheckedUpdateManyWithoutReceiverInputSchema) ]),
}).strict();

export const UserCreateWithoutMentorInputSchema: z.ZodType<Prisma.UserCreateWithoutMentorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentee: z.lazy(() => MenteeCreateNestedManyWithoutUserInputSchema).optional(),
  sentMessages: z.lazy(() => MessageCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageCreateNestedManyWithoutReceiverInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutMentorInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutMentorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentee: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sentMessages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutReceiverInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutMentorInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutMentorInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutMentorInputSchema),z.lazy(() => UserUncheckedCreateWithoutMentorInputSchema) ]),
}).strict();

export const MenteeCreateWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeCreateWithoutMentorsInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  dob: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutMenteeInputSchema),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutMenteeInputSchema).optional(),
  requests: z.lazy(() => RequestCreateNestedManyWithoutMenteeInputSchema).optional(),
  meetings: z.lazy(() => MeetingCreateNestedManyWithoutMenteeInputSchema).optional(),
  reviews: z.lazy(() => TestimonialCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeUncheckedCreateWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateWithoutMentorsInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  dob: z.coerce.date(),
  userId: z.string(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeCreateOrConnectWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeCreateOrConnectWithoutMentorsInput> = z.object({
  where: z.lazy(() => MenteeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MenteeCreateWithoutMentorsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMentorsInputSchema) ]),
}).strict();

export const TaskCreateWithoutMentorInputSchema: z.ZodType<Prisma.TaskCreateWithoutMentorInput> = z.object({
  id: z.string().cuid().optional(),
  postition: z.number().int(),
  title: z.string(),
  description: z.string(),
  status: z.lazy(() => TaskStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentee: z.lazy(() => MenteeCreateNestedOneWithoutTasksInputSchema)
}).strict();

export const TaskUncheckedCreateWithoutMentorInputSchema: z.ZodType<Prisma.TaskUncheckedCreateWithoutMentorInput> = z.object({
  id: z.string().cuid().optional(),
  postition: z.number().int(),
  title: z.string(),
  description: z.string(),
  menteeId: z.string(),
  status: z.lazy(() => TaskStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TaskCreateOrConnectWithoutMentorInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutMentorInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutMentorInputSchema),z.lazy(() => TaskUncheckedCreateWithoutMentorInputSchema) ]),
}).strict();

export const TaskCreateManyMentorInputEnvelopeSchema: z.ZodType<Prisma.TaskCreateManyMentorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TaskCreateManyMentorInputSchema),z.lazy(() => TaskCreateManyMentorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RequestCreateWithoutMentorInputSchema: z.ZodType<Prisma.RequestCreateWithoutMentorInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentee: z.lazy(() => MenteeCreateNestedOneWithoutRequestsInputSchema)
}).strict();

export const RequestUncheckedCreateWithoutMentorInputSchema: z.ZodType<Prisma.RequestUncheckedCreateWithoutMentorInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  menteeId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const RequestCreateOrConnectWithoutMentorInputSchema: z.ZodType<Prisma.RequestCreateOrConnectWithoutMentorInput> = z.object({
  where: z.lazy(() => RequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RequestCreateWithoutMentorInputSchema),z.lazy(() => RequestUncheckedCreateWithoutMentorInputSchema) ]),
}).strict();

export const RequestCreateManyMentorInputEnvelopeSchema: z.ZodType<Prisma.RequestCreateManyMentorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RequestCreateManyMentorInputSchema),z.lazy(() => RequestCreateManyMentorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MeetingCreateWithoutMentorInputSchema: z.ZodType<Prisma.MeetingCreateWithoutMentorInput> = z.object({
  id: z.string().cuid().optional(),
  endDate: z.coerce.date(),
  wherebyId: z.string(),
  hostUrl: z.string(),
  guestUrl: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentee: z.lazy(() => MenteeCreateNestedOneWithoutMeetingsInputSchema)
}).strict();

export const MeetingUncheckedCreateWithoutMentorInputSchema: z.ZodType<Prisma.MeetingUncheckedCreateWithoutMentorInput> = z.object({
  id: z.string().cuid().optional(),
  endDate: z.coerce.date(),
  wherebyId: z.string(),
  hostUrl: z.string(),
  guestUrl: z.string(),
  menteeId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MeetingCreateOrConnectWithoutMentorInputSchema: z.ZodType<Prisma.MeetingCreateOrConnectWithoutMentorInput> = z.object({
  where: z.lazy(() => MeetingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MeetingCreateWithoutMentorInputSchema),z.lazy(() => MeetingUncheckedCreateWithoutMentorInputSchema) ]),
}).strict();

export const MeetingCreateManyMentorInputEnvelopeSchema: z.ZodType<Prisma.MeetingCreateManyMentorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MeetingCreateManyMentorInputSchema),z.lazy(() => MeetingCreateManyMentorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TestimonialCreateWithoutMentorInputSchema: z.ZodType<Prisma.TestimonialCreateWithoutMentorInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentee: z.lazy(() => MenteeCreateNestedOneWithoutReviewsInputSchema)
}).strict();

export const TestimonialUncheckedCreateWithoutMentorInputSchema: z.ZodType<Prisma.TestimonialUncheckedCreateWithoutMentorInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  menteeId: z.string()
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
  id: z.string().cuid().optional(),
  dayOfWeek: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AvailabilityUncheckedCreateWithoutMentorInputSchema: z.ZodType<Prisma.AvailabilityUncheckedCreateWithoutMentorInput> = z.object({
  id: z.string().cuid().optional(),
  dayOfWeek: z.string(),
  startTime: z.string(),
  endTime: z.string(),
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
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutMentorInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutMentorInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutMentorInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMentorInputSchema) ]),
}).strict();

export const UserUpdateWithoutMentorInputSchema: z.ZodType<Prisma.UserUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentee: z.lazy(() => MenteeUpdateManyWithoutUserNestedInputSchema).optional(),
  sentMessages: z.lazy(() => MessageUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageUpdateManyWithoutReceiverNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutMentorInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentee: z.lazy(() => MenteeUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sentMessages: z.lazy(() => MessageUncheckedUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageUncheckedUpdateManyWithoutReceiverNestedInputSchema).optional()
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
  data: z.union([ z.lazy(() => MenteeUpdateManyMutationInputSchema),z.lazy(() => MenteeUncheckedUpdateManyWithoutMentorsInputSchema) ]),
}).strict();

export const TaskUpsertWithWhereUniqueWithoutMentorInputSchema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutMentorInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TaskUpdateWithoutMentorInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutMentorInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutMentorInputSchema),z.lazy(() => TaskUncheckedCreateWithoutMentorInputSchema) ]),
}).strict();

export const TaskUpdateWithWhereUniqueWithoutMentorInputSchema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutMentorInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TaskUpdateWithoutMentorInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutMentorInputSchema) ]),
}).strict();

export const TaskUpdateManyWithWhereWithoutMentorInputSchema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutMentorInput> = z.object({
  where: z.lazy(() => TaskScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TaskUpdateManyMutationInputSchema),z.lazy(() => TaskUncheckedUpdateManyWithoutMentorInputSchema) ]),
}).strict();

export const TaskScalarWhereInputSchema: z.ZodType<Prisma.TaskScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TaskScalarWhereInputSchema),z.lazy(() => TaskScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskScalarWhereInputSchema),z.lazy(() => TaskScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postition: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  menteeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumTaskStatusFilterSchema),z.lazy(() => TaskStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const RequestUpsertWithWhereUniqueWithoutMentorInputSchema: z.ZodType<Prisma.RequestUpsertWithWhereUniqueWithoutMentorInput> = z.object({
  where: z.lazy(() => RequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RequestUpdateWithoutMentorInputSchema),z.lazy(() => RequestUncheckedUpdateWithoutMentorInputSchema) ]),
  create: z.union([ z.lazy(() => RequestCreateWithoutMentorInputSchema),z.lazy(() => RequestUncheckedCreateWithoutMentorInputSchema) ]),
}).strict();

export const RequestUpdateWithWhereUniqueWithoutMentorInputSchema: z.ZodType<Prisma.RequestUpdateWithWhereUniqueWithoutMentorInput> = z.object({
  where: z.lazy(() => RequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RequestUpdateWithoutMentorInputSchema),z.lazy(() => RequestUncheckedUpdateWithoutMentorInputSchema) ]),
}).strict();

export const RequestUpdateManyWithWhereWithoutMentorInputSchema: z.ZodType<Prisma.RequestUpdateManyWithWhereWithoutMentorInput> = z.object({
  where: z.lazy(() => RequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RequestUpdateManyMutationInputSchema),z.lazy(() => RequestUncheckedUpdateManyWithoutMentorInputSchema) ]),
}).strict();

export const RequestScalarWhereInputSchema: z.ZodType<Prisma.RequestScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RequestScalarWhereInputSchema),z.lazy(() => RequestScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RequestScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RequestScalarWhereInputSchema),z.lazy(() => RequestScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumRequestStatusFilterSchema),z.lazy(() => RequestStatusSchema) ]).optional(),
  menteeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const MeetingUpsertWithWhereUniqueWithoutMentorInputSchema: z.ZodType<Prisma.MeetingUpsertWithWhereUniqueWithoutMentorInput> = z.object({
  where: z.lazy(() => MeetingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MeetingUpdateWithoutMentorInputSchema),z.lazy(() => MeetingUncheckedUpdateWithoutMentorInputSchema) ]),
  create: z.union([ z.lazy(() => MeetingCreateWithoutMentorInputSchema),z.lazy(() => MeetingUncheckedCreateWithoutMentorInputSchema) ]),
}).strict();

export const MeetingUpdateWithWhereUniqueWithoutMentorInputSchema: z.ZodType<Prisma.MeetingUpdateWithWhereUniqueWithoutMentorInput> = z.object({
  where: z.lazy(() => MeetingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MeetingUpdateWithoutMentorInputSchema),z.lazy(() => MeetingUncheckedUpdateWithoutMentorInputSchema) ]),
}).strict();

export const MeetingUpdateManyWithWhereWithoutMentorInputSchema: z.ZodType<Prisma.MeetingUpdateManyWithWhereWithoutMentorInput> = z.object({
  where: z.lazy(() => MeetingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MeetingUpdateManyMutationInputSchema),z.lazy(() => MeetingUncheckedUpdateManyWithoutMentorInputSchema) ]),
}).strict();

export const MeetingScalarWhereInputSchema: z.ZodType<Prisma.MeetingScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MeetingScalarWhereInputSchema),z.lazy(() => MeetingScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MeetingScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MeetingScalarWhereInputSchema),z.lazy(() => MeetingScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  wherebyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hostUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  guestUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
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
  data: z.union([ z.lazy(() => TestimonialUpdateManyMutationInputSchema),z.lazy(() => TestimonialUncheckedUpdateManyWithoutMentorInputSchema) ]),
}).strict();

export const TestimonialScalarWhereInputSchema: z.ZodType<Prisma.TestimonialScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TestimonialScalarWhereInputSchema),z.lazy(() => TestimonialScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestimonialScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestimonialScalarWhereInputSchema),z.lazy(() => TestimonialScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  menteeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
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
  data: z.union([ z.lazy(() => AvailabilityUpdateManyMutationInputSchema),z.lazy(() => AvailabilityUncheckedUpdateManyWithoutMentorInputSchema) ]),
}).strict();

export const AvailabilityScalarWhereInputSchema: z.ZodType<Prisma.AvailabilityScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AvailabilityScalarWhereInputSchema),z.lazy(() => AvailabilityScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AvailabilityScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AvailabilityScalarWhereInputSchema),z.lazy(() => AvailabilityScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mentorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateWithoutMenteeInputSchema: z.ZodType<Prisma.UserCreateWithoutMenteeInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorCreateNestedManyWithoutUserInputSchema).optional(),
  sentMessages: z.lazy(() => MessageCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageCreateNestedManyWithoutReceiverInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutMenteeInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutMenteeInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sentMessages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutSenderInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutReceiverInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutMenteeInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutMenteeInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutMenteeInputSchema),z.lazy(() => UserUncheckedCreateWithoutMenteeInputSchema) ]),
}).strict();

export const MentorCreateWithoutMenteesInputSchema: z.ZodType<Prisma.MentorCreateWithoutMenteesInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutMentorInputSchema),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutMentorInputSchema).optional(),
  requests: z.lazy(() => RequestCreateNestedManyWithoutMentorInputSchema).optional(),
  meetings: z.lazy(() => MeetingCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorUncheckedCreateWithoutMenteesInputSchema: z.ZodType<Prisma.MentorUncheckedCreateWithoutMenteesInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  userId: z.string(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorCreateOrConnectWithoutMenteesInputSchema: z.ZodType<Prisma.MentorCreateOrConnectWithoutMenteesInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MentorCreateWithoutMenteesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMenteesInputSchema) ]),
}).strict();

export const TaskCreateWithoutMenteeInputSchema: z.ZodType<Prisma.TaskCreateWithoutMenteeInput> = z.object({
  id: z.string().cuid().optional(),
  postition: z.number().int(),
  title: z.string(),
  description: z.string(),
  status: z.lazy(() => TaskStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorCreateNestedOneWithoutTasksInputSchema)
}).strict();

export const TaskUncheckedCreateWithoutMenteeInputSchema: z.ZodType<Prisma.TaskUncheckedCreateWithoutMenteeInput> = z.object({
  id: z.string().cuid().optional(),
  postition: z.number().int(),
  title: z.string(),
  description: z.string(),
  mentorId: z.string(),
  status: z.lazy(() => TaskStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TaskCreateOrConnectWithoutMenteeInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutMenteeInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutMenteeInputSchema),z.lazy(() => TaskUncheckedCreateWithoutMenteeInputSchema) ]),
}).strict();

export const TaskCreateManyMenteeInputEnvelopeSchema: z.ZodType<Prisma.TaskCreateManyMenteeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TaskCreateManyMenteeInputSchema),z.lazy(() => TaskCreateManyMenteeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RequestCreateWithoutMenteeInputSchema: z.ZodType<Prisma.RequestCreateWithoutMenteeInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorCreateNestedOneWithoutRequestsInputSchema)
}).strict();

export const RequestUncheckedCreateWithoutMenteeInputSchema: z.ZodType<Prisma.RequestUncheckedCreateWithoutMenteeInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  mentorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const RequestCreateOrConnectWithoutMenteeInputSchema: z.ZodType<Prisma.RequestCreateOrConnectWithoutMenteeInput> = z.object({
  where: z.lazy(() => RequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RequestCreateWithoutMenteeInputSchema),z.lazy(() => RequestUncheckedCreateWithoutMenteeInputSchema) ]),
}).strict();

export const RequestCreateManyMenteeInputEnvelopeSchema: z.ZodType<Prisma.RequestCreateManyMenteeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RequestCreateManyMenteeInputSchema),z.lazy(() => RequestCreateManyMenteeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const MeetingCreateWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingCreateWithoutMenteeInput> = z.object({
  id: z.string().cuid().optional(),
  endDate: z.coerce.date(),
  wherebyId: z.string(),
  hostUrl: z.string(),
  guestUrl: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorCreateNestedOneWithoutMeetingsInputSchema)
}).strict();

export const MeetingUncheckedCreateWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingUncheckedCreateWithoutMenteeInput> = z.object({
  id: z.string().cuid().optional(),
  endDate: z.coerce.date(),
  wherebyId: z.string(),
  hostUrl: z.string(),
  guestUrl: z.string(),
  mentorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MeetingCreateOrConnectWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingCreateOrConnectWithoutMenteeInput> = z.object({
  where: z.lazy(() => MeetingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MeetingCreateWithoutMenteeInputSchema),z.lazy(() => MeetingUncheckedCreateWithoutMenteeInputSchema) ]),
}).strict();

export const MeetingCreateManyMenteeInputEnvelopeSchema: z.ZodType<Prisma.MeetingCreateManyMenteeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MeetingCreateManyMenteeInputSchema),z.lazy(() => MeetingCreateManyMenteeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TestimonialCreateWithoutMenteeInputSchema: z.ZodType<Prisma.TestimonialCreateWithoutMenteeInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorCreateNestedOneWithoutTestimonialsInputSchema)
}).strict();

export const TestimonialUncheckedCreateWithoutMenteeInputSchema: z.ZodType<Prisma.TestimonialUncheckedCreateWithoutMenteeInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  mentorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TestimonialCreateOrConnectWithoutMenteeInputSchema: z.ZodType<Prisma.TestimonialCreateOrConnectWithoutMenteeInput> = z.object({
  where: z.lazy(() => TestimonialWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestimonialCreateWithoutMenteeInputSchema),z.lazy(() => TestimonialUncheckedCreateWithoutMenteeInputSchema) ]),
}).strict();

export const TestimonialCreateManyMenteeInputEnvelopeSchema: z.ZodType<Prisma.TestimonialCreateManyMenteeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TestimonialCreateManyMenteeInputSchema),z.lazy(() => TestimonialCreateManyMenteeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithoutMenteeInputSchema: z.ZodType<Prisma.UserUpsertWithoutMenteeInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutMenteeInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMenteeInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutMenteeInputSchema),z.lazy(() => UserUncheckedCreateWithoutMenteeInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutMenteeInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutMenteeInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutMenteeInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMenteeInputSchema) ]),
}).strict();

export const UserUpdateWithoutMenteeInputSchema: z.ZodType<Prisma.UserUpdateWithoutMenteeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateManyWithoutUserNestedInputSchema).optional(),
  sentMessages: z.lazy(() => MessageUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageUpdateManyWithoutReceiverNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutMenteeInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutMenteeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sentMessages: z.lazy(() => MessageUncheckedUpdateManyWithoutSenderNestedInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageUncheckedUpdateManyWithoutReceiverNestedInputSchema).optional()
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
  data: z.union([ z.lazy(() => MentorUpdateManyMutationInputSchema),z.lazy(() => MentorUncheckedUpdateManyWithoutMenteesInputSchema) ]),
}).strict();

export const TaskUpsertWithWhereUniqueWithoutMenteeInputSchema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutMenteeInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TaskUpdateWithoutMenteeInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutMenteeInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutMenteeInputSchema),z.lazy(() => TaskUncheckedCreateWithoutMenteeInputSchema) ]),
}).strict();

export const TaskUpdateWithWhereUniqueWithoutMenteeInputSchema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutMenteeInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TaskUpdateWithoutMenteeInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutMenteeInputSchema) ]),
}).strict();

export const TaskUpdateManyWithWhereWithoutMenteeInputSchema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutMenteeInput> = z.object({
  where: z.lazy(() => TaskScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TaskUpdateManyMutationInputSchema),z.lazy(() => TaskUncheckedUpdateManyWithoutMenteeInputSchema) ]),
}).strict();

export const RequestUpsertWithWhereUniqueWithoutMenteeInputSchema: z.ZodType<Prisma.RequestUpsertWithWhereUniqueWithoutMenteeInput> = z.object({
  where: z.lazy(() => RequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RequestUpdateWithoutMenteeInputSchema),z.lazy(() => RequestUncheckedUpdateWithoutMenteeInputSchema) ]),
  create: z.union([ z.lazy(() => RequestCreateWithoutMenteeInputSchema),z.lazy(() => RequestUncheckedCreateWithoutMenteeInputSchema) ]),
}).strict();

export const RequestUpdateWithWhereUniqueWithoutMenteeInputSchema: z.ZodType<Prisma.RequestUpdateWithWhereUniqueWithoutMenteeInput> = z.object({
  where: z.lazy(() => RequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RequestUpdateWithoutMenteeInputSchema),z.lazy(() => RequestUncheckedUpdateWithoutMenteeInputSchema) ]),
}).strict();

export const RequestUpdateManyWithWhereWithoutMenteeInputSchema: z.ZodType<Prisma.RequestUpdateManyWithWhereWithoutMenteeInput> = z.object({
  where: z.lazy(() => RequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RequestUpdateManyMutationInputSchema),z.lazy(() => RequestUncheckedUpdateManyWithoutMenteeInputSchema) ]),
}).strict();

export const MeetingUpsertWithWhereUniqueWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingUpsertWithWhereUniqueWithoutMenteeInput> = z.object({
  where: z.lazy(() => MeetingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MeetingUpdateWithoutMenteeInputSchema),z.lazy(() => MeetingUncheckedUpdateWithoutMenteeInputSchema) ]),
  create: z.union([ z.lazy(() => MeetingCreateWithoutMenteeInputSchema),z.lazy(() => MeetingUncheckedCreateWithoutMenteeInputSchema) ]),
}).strict();

export const MeetingUpdateWithWhereUniqueWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingUpdateWithWhereUniqueWithoutMenteeInput> = z.object({
  where: z.lazy(() => MeetingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MeetingUpdateWithoutMenteeInputSchema),z.lazy(() => MeetingUncheckedUpdateWithoutMenteeInputSchema) ]),
}).strict();

export const MeetingUpdateManyWithWhereWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingUpdateManyWithWhereWithoutMenteeInput> = z.object({
  where: z.lazy(() => MeetingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MeetingUpdateManyMutationInputSchema),z.lazy(() => MeetingUncheckedUpdateManyWithoutMenteeInputSchema) ]),
}).strict();

export const TestimonialUpsertWithWhereUniqueWithoutMenteeInputSchema: z.ZodType<Prisma.TestimonialUpsertWithWhereUniqueWithoutMenteeInput> = z.object({
  where: z.lazy(() => TestimonialWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestimonialUpdateWithoutMenteeInputSchema),z.lazy(() => TestimonialUncheckedUpdateWithoutMenteeInputSchema) ]),
  create: z.union([ z.lazy(() => TestimonialCreateWithoutMenteeInputSchema),z.lazy(() => TestimonialUncheckedCreateWithoutMenteeInputSchema) ]),
}).strict();

export const TestimonialUpdateWithWhereUniqueWithoutMenteeInputSchema: z.ZodType<Prisma.TestimonialUpdateWithWhereUniqueWithoutMenteeInput> = z.object({
  where: z.lazy(() => TestimonialWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestimonialUpdateWithoutMenteeInputSchema),z.lazy(() => TestimonialUncheckedUpdateWithoutMenteeInputSchema) ]),
}).strict();

export const TestimonialUpdateManyWithWhereWithoutMenteeInputSchema: z.ZodType<Prisma.TestimonialUpdateManyWithWhereWithoutMenteeInput> = z.object({
  where: z.lazy(() => TestimonialScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestimonialUpdateManyMutationInputSchema),z.lazy(() => TestimonialUncheckedUpdateManyWithoutMenteeInputSchema) ]),
}).strict();

export const MentorCreateWithoutTasksInputSchema: z.ZodType<Prisma.MentorCreateWithoutTasksInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutMentorInputSchema),
  mentees: z.lazy(() => MenteeCreateNestedManyWithoutMentorsInputSchema).optional(),
  requests: z.lazy(() => RequestCreateNestedManyWithoutMentorInputSchema).optional(),
  meetings: z.lazy(() => MeetingCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorUncheckedCreateWithoutTasksInputSchema: z.ZodType<Prisma.MentorUncheckedCreateWithoutTasksInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  userId: z.string(),
  mentees: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutMentorsInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorCreateOrConnectWithoutTasksInputSchema: z.ZodType<Prisma.MentorCreateOrConnectWithoutTasksInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MentorCreateWithoutTasksInputSchema),z.lazy(() => MentorUncheckedCreateWithoutTasksInputSchema) ]),
}).strict();

export const MenteeCreateWithoutTasksInputSchema: z.ZodType<Prisma.MenteeCreateWithoutTasksInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  dob: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutMenteeInputSchema),
  mentors: z.lazy(() => MentorCreateNestedManyWithoutMenteesInputSchema).optional(),
  requests: z.lazy(() => RequestCreateNestedManyWithoutMenteeInputSchema).optional(),
  meetings: z.lazy(() => MeetingCreateNestedManyWithoutMenteeInputSchema).optional(),
  reviews: z.lazy(() => TestimonialCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeUncheckedCreateWithoutTasksInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateWithoutTasksInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  dob: z.coerce.date(),
  userId: z.string(),
  mentors: z.lazy(() => MentorUncheckedCreateNestedManyWithoutMenteesInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeCreateOrConnectWithoutTasksInputSchema: z.ZodType<Prisma.MenteeCreateOrConnectWithoutTasksInput> = z.object({
  where: z.lazy(() => MenteeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MenteeCreateWithoutTasksInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutTasksInputSchema) ]),
}).strict();

export const MentorUpsertWithoutTasksInputSchema: z.ZodType<Prisma.MentorUpsertWithoutTasksInput> = z.object({
  update: z.union([ z.lazy(() => MentorUpdateWithoutTasksInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutTasksInputSchema) ]),
  create: z.union([ z.lazy(() => MentorCreateWithoutTasksInputSchema),z.lazy(() => MentorUncheckedCreateWithoutTasksInputSchema) ]),
  where: z.lazy(() => MentorWhereInputSchema).optional()
}).strict();

export const MentorUpdateToOneWithWhereWithoutTasksInputSchema: z.ZodType<Prisma.MentorUpdateToOneWithWhereWithoutTasksInput> = z.object({
  where: z.lazy(() => MentorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MentorUpdateWithoutTasksInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutTasksInputSchema) ]),
}).strict();

export const MentorUpdateWithoutTasksInputSchema: z.ZodType<Prisma.MentorUpdateWithoutTasksInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMentorNestedInputSchema).optional(),
  mentees: z.lazy(() => MenteeUpdateManyWithoutMentorsNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUpdateManyWithoutMentorNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateWithoutTasksInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateWithoutTasksInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUncheckedUpdateManyWithoutMentorsNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MenteeUpsertWithoutTasksInputSchema: z.ZodType<Prisma.MenteeUpsertWithoutTasksInput> = z.object({
  update: z.union([ z.lazy(() => MenteeUpdateWithoutTasksInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutTasksInputSchema) ]),
  create: z.union([ z.lazy(() => MenteeCreateWithoutTasksInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutTasksInputSchema) ]),
  where: z.lazy(() => MenteeWhereInputSchema).optional()
}).strict();

export const MenteeUpdateToOneWithWhereWithoutTasksInputSchema: z.ZodType<Prisma.MenteeUpdateToOneWithWhereWithoutTasksInput> = z.object({
  where: z.lazy(() => MenteeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MenteeUpdateWithoutTasksInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutTasksInputSchema) ]),
}).strict();

export const MenteeUpdateWithoutTasksInputSchema: z.ZodType<Prisma.MenteeUpdateWithoutTasksInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMenteeNestedInputSchema).optional(),
  mentors: z.lazy(() => MentorUpdateManyWithoutMenteesNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUpdateManyWithoutMenteeNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUpdateManyWithoutMenteeNestedInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateWithoutTasksInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateWithoutTasksInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorUncheckedUpdateManyWithoutMenteesNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutSentMessagesInputSchema: z.ZodType<Prisma.UserCreateWithoutSentMessagesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorCreateNestedManyWithoutUserInputSchema).optional(),
  mentee: z.lazy(() => MenteeCreateNestedManyWithoutUserInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageCreateNestedManyWithoutReceiverInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSentMessagesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSentMessagesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  mentee: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutReceiverInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSentMessagesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSentMessagesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSentMessagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutSentMessagesInputSchema) ]),
}).strict();

export const UserCreateWithoutReceivedMessagesInputSchema: z.ZodType<Prisma.UserCreateWithoutReceivedMessagesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorCreateNestedManyWithoutUserInputSchema).optional(),
  mentee: z.lazy(() => MenteeCreateNestedManyWithoutUserInputSchema).optional(),
  sentMessages: z.lazy(() => MessageCreateNestedManyWithoutSenderInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutReceivedMessagesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutReceivedMessagesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  active: z.boolean().optional(),
  profileImage: z.string().optional().nullable(),
  gender: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  mentor: z.lazy(() => MentorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  mentee: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sentMessages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutSenderInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutReceivedMessagesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutReceivedMessagesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutReceivedMessagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutReceivedMessagesInputSchema) ]),
}).strict();

export const UserUpsertWithoutSentMessagesInputSchema: z.ZodType<Prisma.UserUpsertWithoutSentMessagesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSentMessagesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSentMessagesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSentMessagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutSentMessagesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSentMessagesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSentMessagesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSentMessagesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSentMessagesInputSchema) ]),
}).strict();

export const UserUpdateWithoutSentMessagesInputSchema: z.ZodType<Prisma.UserUpdateWithoutSentMessagesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateManyWithoutUserNestedInputSchema).optional(),
  mentee: z.lazy(() => MenteeUpdateManyWithoutUserNestedInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageUpdateManyWithoutReceiverNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSentMessagesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSentMessagesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  mentee: z.lazy(() => MenteeUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  receivedMessages: z.lazy(() => MessageUncheckedUpdateManyWithoutReceiverNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutReceivedMessagesInputSchema: z.ZodType<Prisma.UserUpsertWithoutReceivedMessagesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutReceivedMessagesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReceivedMessagesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutReceivedMessagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutReceivedMessagesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutReceivedMessagesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReceivedMessagesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutReceivedMessagesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReceivedMessagesInputSchema) ]),
}).strict();

export const UserUpdateWithoutReceivedMessagesInputSchema: z.ZodType<Prisma.UserUpdateWithoutReceivedMessagesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateManyWithoutUserNestedInputSchema).optional(),
  mentee: z.lazy(() => MenteeUpdateManyWithoutUserNestedInputSchema).optional(),
  sentMessages: z.lazy(() => MessageUpdateManyWithoutSenderNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutReceivedMessagesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutReceivedMessagesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  profileImage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  mentee: z.lazy(() => MenteeUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sentMessages: z.lazy(() => MessageUncheckedUpdateManyWithoutSenderNestedInputSchema).optional()
}).strict();

export const MentorCreateWithoutMeetingsInputSchema: z.ZodType<Prisma.MentorCreateWithoutMeetingsInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutMentorInputSchema),
  mentees: z.lazy(() => MenteeCreateNestedManyWithoutMentorsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutMentorInputSchema).optional(),
  requests: z.lazy(() => RequestCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorUncheckedCreateWithoutMeetingsInputSchema: z.ZodType<Prisma.MentorUncheckedCreateWithoutMeetingsInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  userId: z.string(),
  mentees: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutMentorsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorCreateOrConnectWithoutMeetingsInputSchema: z.ZodType<Prisma.MentorCreateOrConnectWithoutMeetingsInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MentorCreateWithoutMeetingsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMeetingsInputSchema) ]),
}).strict();

export const MenteeCreateWithoutMeetingsInputSchema: z.ZodType<Prisma.MenteeCreateWithoutMeetingsInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  dob: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutMenteeInputSchema),
  mentors: z.lazy(() => MentorCreateNestedManyWithoutMenteesInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutMenteeInputSchema).optional(),
  requests: z.lazy(() => RequestCreateNestedManyWithoutMenteeInputSchema).optional(),
  reviews: z.lazy(() => TestimonialCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeUncheckedCreateWithoutMeetingsInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateWithoutMeetingsInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  dob: z.coerce.date(),
  userId: z.string(),
  mentors: z.lazy(() => MentorUncheckedCreateNestedManyWithoutMenteesInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeCreateOrConnectWithoutMeetingsInputSchema: z.ZodType<Prisma.MenteeCreateOrConnectWithoutMeetingsInput> = z.object({
  where: z.lazy(() => MenteeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MenteeCreateWithoutMeetingsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMeetingsInputSchema) ]),
}).strict();

export const MentorUpsertWithoutMeetingsInputSchema: z.ZodType<Prisma.MentorUpsertWithoutMeetingsInput> = z.object({
  update: z.union([ z.lazy(() => MentorUpdateWithoutMeetingsInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutMeetingsInputSchema) ]),
  create: z.union([ z.lazy(() => MentorCreateWithoutMeetingsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutMeetingsInputSchema) ]),
  where: z.lazy(() => MentorWhereInputSchema).optional()
}).strict();

export const MentorUpdateToOneWithWhereWithoutMeetingsInputSchema: z.ZodType<Prisma.MentorUpdateToOneWithWhereWithoutMeetingsInput> = z.object({
  where: z.lazy(() => MentorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MentorUpdateWithoutMeetingsInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutMeetingsInputSchema) ]),
}).strict();

export const MentorUpdateWithoutMeetingsInputSchema: z.ZodType<Prisma.MentorUpdateWithoutMeetingsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMentorNestedInputSchema).optional(),
  mentees: z.lazy(() => MenteeUpdateManyWithoutMentorsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutMentorNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateWithoutMeetingsInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateWithoutMeetingsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUncheckedUpdateManyWithoutMentorsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MenteeUpsertWithoutMeetingsInputSchema: z.ZodType<Prisma.MenteeUpsertWithoutMeetingsInput> = z.object({
  update: z.union([ z.lazy(() => MenteeUpdateWithoutMeetingsInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutMeetingsInputSchema) ]),
  create: z.union([ z.lazy(() => MenteeCreateWithoutMeetingsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutMeetingsInputSchema) ]),
  where: z.lazy(() => MenteeWhereInputSchema).optional()
}).strict();

export const MenteeUpdateToOneWithWhereWithoutMeetingsInputSchema: z.ZodType<Prisma.MenteeUpdateToOneWithWhereWithoutMeetingsInput> = z.object({
  where: z.lazy(() => MenteeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MenteeUpdateWithoutMeetingsInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutMeetingsInputSchema) ]),
}).strict();

export const MenteeUpdateWithoutMeetingsInputSchema: z.ZodType<Prisma.MenteeUpdateWithoutMeetingsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMenteeNestedInputSchema).optional(),
  mentors: z.lazy(() => MentorUpdateManyWithoutMenteesNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutMenteeNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUpdateManyWithoutMenteeNestedInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateWithoutMeetingsInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateWithoutMeetingsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorUncheckedUpdateManyWithoutMenteesNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MentorCreateWithoutTestimonialsInputSchema: z.ZodType<Prisma.MentorCreateWithoutTestimonialsInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutMentorInputSchema),
  mentees: z.lazy(() => MenteeCreateNestedManyWithoutMentorsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutMentorInputSchema).optional(),
  requests: z.lazy(() => RequestCreateNestedManyWithoutMentorInputSchema).optional(),
  meetings: z.lazy(() => MeetingCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorUncheckedCreateWithoutTestimonialsInputSchema: z.ZodType<Prisma.MentorUncheckedCreateWithoutTestimonialsInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  userId: z.string(),
  mentees: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutMentorsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorCreateOrConnectWithoutTestimonialsInputSchema: z.ZodType<Prisma.MentorCreateOrConnectWithoutTestimonialsInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MentorCreateWithoutTestimonialsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutTestimonialsInputSchema) ]),
}).strict();

export const MenteeCreateWithoutReviewsInputSchema: z.ZodType<Prisma.MenteeCreateWithoutReviewsInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  dob: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutMenteeInputSchema),
  mentors: z.lazy(() => MentorCreateNestedManyWithoutMenteesInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutMenteeInputSchema).optional(),
  requests: z.lazy(() => RequestCreateNestedManyWithoutMenteeInputSchema).optional(),
  meetings: z.lazy(() => MeetingCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeUncheckedCreateWithoutReviewsInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateWithoutReviewsInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  dob: z.coerce.date(),
  userId: z.string(),
  mentors: z.lazy(() => MentorUncheckedCreateNestedManyWithoutMenteesInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeCreateOrConnectWithoutReviewsInputSchema: z.ZodType<Prisma.MenteeCreateOrConnectWithoutReviewsInput> = z.object({
  where: z.lazy(() => MenteeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MenteeCreateWithoutReviewsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutReviewsInputSchema) ]),
}).strict();

export const MentorUpsertWithoutTestimonialsInputSchema: z.ZodType<Prisma.MentorUpsertWithoutTestimonialsInput> = z.object({
  update: z.union([ z.lazy(() => MentorUpdateWithoutTestimonialsInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutTestimonialsInputSchema) ]),
  create: z.union([ z.lazy(() => MentorCreateWithoutTestimonialsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutTestimonialsInputSchema) ]),
  where: z.lazy(() => MentorWhereInputSchema).optional()
}).strict();

export const MentorUpdateToOneWithWhereWithoutTestimonialsInputSchema: z.ZodType<Prisma.MentorUpdateToOneWithWhereWithoutTestimonialsInput> = z.object({
  where: z.lazy(() => MentorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MentorUpdateWithoutTestimonialsInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutTestimonialsInputSchema) ]),
}).strict();

export const MentorUpdateWithoutTestimonialsInputSchema: z.ZodType<Prisma.MentorUpdateWithoutTestimonialsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMentorNestedInputSchema).optional(),
  mentees: z.lazy(() => MenteeUpdateManyWithoutMentorsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutMentorNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUpdateManyWithoutMentorNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateWithoutTestimonialsInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateWithoutTestimonialsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUncheckedUpdateManyWithoutMentorsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MenteeUpsertWithoutReviewsInputSchema: z.ZodType<Prisma.MenteeUpsertWithoutReviewsInput> = z.object({
  update: z.union([ z.lazy(() => MenteeUpdateWithoutReviewsInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutReviewsInputSchema) ]),
  create: z.union([ z.lazy(() => MenteeCreateWithoutReviewsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutReviewsInputSchema) ]),
  where: z.lazy(() => MenteeWhereInputSchema).optional()
}).strict();

export const MenteeUpdateToOneWithWhereWithoutReviewsInputSchema: z.ZodType<Prisma.MenteeUpdateToOneWithWhereWithoutReviewsInput> = z.object({
  where: z.lazy(() => MenteeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MenteeUpdateWithoutReviewsInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutReviewsInputSchema) ]),
}).strict();

export const MenteeUpdateWithoutReviewsInputSchema: z.ZodType<Prisma.MenteeUpdateWithoutReviewsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMenteeNestedInputSchema).optional(),
  mentors: z.lazy(() => MentorUpdateManyWithoutMenteesNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutMenteeNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUpdateManyWithoutMenteeNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateWithoutReviewsInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateWithoutReviewsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorUncheckedUpdateManyWithoutMenteesNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MentorCreateWithoutAvailabilitiesInputSchema: z.ZodType<Prisma.MentorCreateWithoutAvailabilitiesInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutMentorInputSchema),
  mentees: z.lazy(() => MenteeCreateNestedManyWithoutMentorsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutMentorInputSchema).optional(),
  requests: z.lazy(() => RequestCreateNestedManyWithoutMentorInputSchema).optional(),
  meetings: z.lazy(() => MeetingCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorUncheckedCreateWithoutAvailabilitiesInputSchema: z.ZodType<Prisma.MentorUncheckedCreateWithoutAvailabilitiesInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  userId: z.string(),
  mentees: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutMentorsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorCreateOrConnectWithoutAvailabilitiesInputSchema: z.ZodType<Prisma.MentorCreateOrConnectWithoutAvailabilitiesInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MentorCreateWithoutAvailabilitiesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutAvailabilitiesInputSchema) ]),
}).strict();

export const MentorUpsertWithoutAvailabilitiesInputSchema: z.ZodType<Prisma.MentorUpsertWithoutAvailabilitiesInput> = z.object({
  update: z.union([ z.lazy(() => MentorUpdateWithoutAvailabilitiesInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutAvailabilitiesInputSchema) ]),
  create: z.union([ z.lazy(() => MentorCreateWithoutAvailabilitiesInputSchema),z.lazy(() => MentorUncheckedCreateWithoutAvailabilitiesInputSchema) ]),
  where: z.lazy(() => MentorWhereInputSchema).optional()
}).strict();

export const MentorUpdateToOneWithWhereWithoutAvailabilitiesInputSchema: z.ZodType<Prisma.MentorUpdateToOneWithWhereWithoutAvailabilitiesInput> = z.object({
  where: z.lazy(() => MentorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MentorUpdateWithoutAvailabilitiesInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutAvailabilitiesInputSchema) ]),
}).strict();

export const MentorUpdateWithoutAvailabilitiesInputSchema: z.ZodType<Prisma.MentorUpdateWithoutAvailabilitiesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMentorNestedInputSchema).optional(),
  mentees: z.lazy(() => MenteeUpdateManyWithoutMentorsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutMentorNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUpdateManyWithoutMentorNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateWithoutAvailabilitiesInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateWithoutAvailabilitiesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUncheckedUpdateManyWithoutMentorsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MenteeCreateWithoutRequestsInputSchema: z.ZodType<Prisma.MenteeCreateWithoutRequestsInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  dob: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutMenteeInputSchema),
  mentors: z.lazy(() => MentorCreateNestedManyWithoutMenteesInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutMenteeInputSchema).optional(),
  meetings: z.lazy(() => MeetingCreateNestedManyWithoutMenteeInputSchema).optional(),
  reviews: z.lazy(() => TestimonialCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeUncheckedCreateWithoutRequestsInputSchema: z.ZodType<Prisma.MenteeUncheckedCreateWithoutRequestsInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  dob: z.coerce.date(),
  userId: z.string(),
  mentors: z.lazy(() => MentorUncheckedCreateNestedManyWithoutMenteesInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedCreateNestedManyWithoutMenteeInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMenteeInputSchema).optional()
}).strict();

export const MenteeCreateOrConnectWithoutRequestsInputSchema: z.ZodType<Prisma.MenteeCreateOrConnectWithoutRequestsInput> = z.object({
  where: z.lazy(() => MenteeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MenteeCreateWithoutRequestsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutRequestsInputSchema) ]),
}).strict();

export const MentorCreateWithoutRequestsInputSchema: z.ZodType<Prisma.MentorCreateWithoutRequestsInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutMentorInputSchema),
  mentees: z.lazy(() => MenteeCreateNestedManyWithoutMentorsInputSchema).optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutMentorInputSchema).optional(),
  meetings: z.lazy(() => MeetingCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorUncheckedCreateWithoutRequestsInputSchema: z.ZodType<Prisma.MentorUncheckedCreateWithoutRequestsInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional(),
  userId: z.string(),
  mentees: z.lazy(() => MenteeUncheckedCreateNestedManyWithoutMentorsInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedCreateNestedManyWithoutMentorInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedCreateNestedManyWithoutMentorInputSchema).optional()
}).strict();

export const MentorCreateOrConnectWithoutRequestsInputSchema: z.ZodType<Prisma.MentorCreateOrConnectWithoutRequestsInput> = z.object({
  where: z.lazy(() => MentorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MentorCreateWithoutRequestsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutRequestsInputSchema) ]),
}).strict();

export const MenteeUpsertWithoutRequestsInputSchema: z.ZodType<Prisma.MenteeUpsertWithoutRequestsInput> = z.object({
  update: z.union([ z.lazy(() => MenteeUpdateWithoutRequestsInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutRequestsInputSchema) ]),
  create: z.union([ z.lazy(() => MenteeCreateWithoutRequestsInputSchema),z.lazy(() => MenteeUncheckedCreateWithoutRequestsInputSchema) ]),
  where: z.lazy(() => MenteeWhereInputSchema).optional()
}).strict();

export const MenteeUpdateToOneWithWhereWithoutRequestsInputSchema: z.ZodType<Prisma.MenteeUpdateToOneWithWhereWithoutRequestsInput> = z.object({
  where: z.lazy(() => MenteeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MenteeUpdateWithoutRequestsInputSchema),z.lazy(() => MenteeUncheckedUpdateWithoutRequestsInputSchema) ]),
}).strict();

export const MenteeUpdateWithoutRequestsInputSchema: z.ZodType<Prisma.MenteeUpdateWithoutRequestsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMenteeNestedInputSchema).optional(),
  mentors: z.lazy(() => MentorUpdateManyWithoutMenteesNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutMenteeNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUpdateManyWithoutMenteeNestedInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateWithoutRequestsInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateWithoutRequestsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorUncheckedUpdateManyWithoutMenteesNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MentorUpsertWithoutRequestsInputSchema: z.ZodType<Prisma.MentorUpsertWithoutRequestsInput> = z.object({
  update: z.union([ z.lazy(() => MentorUpdateWithoutRequestsInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutRequestsInputSchema) ]),
  create: z.union([ z.lazy(() => MentorCreateWithoutRequestsInputSchema),z.lazy(() => MentorUncheckedCreateWithoutRequestsInputSchema) ]),
  where: z.lazy(() => MentorWhereInputSchema).optional()
}).strict();

export const MentorUpdateToOneWithWhereWithoutRequestsInputSchema: z.ZodType<Prisma.MentorUpdateToOneWithWhereWithoutRequestsInput> = z.object({
  where: z.lazy(() => MentorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MentorUpdateWithoutRequestsInputSchema),z.lazy(() => MentorUncheckedUpdateWithoutRequestsInputSchema) ]),
}).strict();

export const MentorUpdateWithoutRequestsInputSchema: z.ZodType<Prisma.MentorUpdateWithoutRequestsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMentorNestedInputSchema).optional(),
  mentees: z.lazy(() => MenteeUpdateManyWithoutMentorsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutMentorNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateWithoutRequestsInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateWithoutRequestsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUncheckedUpdateManyWithoutMentorsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorCreateManyUserInputSchema: z.ZodType<Prisma.MentorCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  currentTitle: z.string(),
  companyName: z.string(),
  fieldOfExpertise: z.string(),
  yearsOfExperience: z.number().int(),
  description: z.string(),
  rating: z.number().optional(),
  isTopMentor: z.boolean().optional()
}).strict();

export const MenteeCreateManyUserInputSchema: z.ZodType<Prisma.MenteeCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  educationLevel: z.string(),
  careerGoals: z.string(),
  careerHistory: z.string(),
  careerChallenges: z.string(),
  skills: z.union([ z.lazy(() => MenteeCreateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.string(),
  dob: z.coerce.date()
}).strict();

export const MessageCreateManySenderInputSchema: z.ZodType<Prisma.MessageCreateManySenderInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  receiverId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MessageCreateManyReceiverInputSchema: z.ZodType<Prisma.MessageCreateManyReceiverInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  senderId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MentorUpdateWithoutUserInputSchema: z.ZodType<Prisma.MentorUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUpdateManyWithoutMentorsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutMentorNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUpdateManyWithoutMentorNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  mentees: z.lazy(() => MenteeUncheckedUpdateManyWithoutMentorsNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MenteeUpdateWithoutUserInputSchema: z.ZodType<Prisma.MenteeUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorUpdateManyWithoutMenteesNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutMenteeNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUpdateManyWithoutMenteeNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUpdateManyWithoutMenteeNestedInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentors: z.lazy(() => MentorUncheckedUpdateManyWithoutMenteesNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MessageUpdateWithoutSenderInputSchema: z.ZodType<Prisma.MessageUpdateWithoutSenderInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  receiver: z.lazy(() => UserUpdateOneRequiredWithoutReceivedMessagesNestedInputSchema).optional()
}).strict();

export const MessageUncheckedUpdateWithoutSenderInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateWithoutSenderInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  receiverId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MessageUncheckedUpdateManyWithoutSenderInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutSenderInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  receiverId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MessageUpdateWithoutReceiverInputSchema: z.ZodType<Prisma.MessageUpdateWithoutReceiverInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sender: z.lazy(() => UserUpdateOneRequiredWithoutSentMessagesNestedInputSchema).optional()
}).strict();

export const MessageUncheckedUpdateWithoutReceiverInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateWithoutReceiverInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  senderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MessageUncheckedUpdateManyWithoutReceiverInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutReceiverInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  senderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TaskCreateManyMentorInputSchema: z.ZodType<Prisma.TaskCreateManyMentorInput> = z.object({
  id: z.string().cuid().optional(),
  postition: z.number().int(),
  title: z.string(),
  description: z.string(),
  menteeId: z.string(),
  status: z.lazy(() => TaskStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const RequestCreateManyMentorInputSchema: z.ZodType<Prisma.RequestCreateManyMentorInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  menteeId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MeetingCreateManyMentorInputSchema: z.ZodType<Prisma.MeetingCreateManyMentorInput> = z.object({
  id: z.string().cuid().optional(),
  endDate: z.coerce.date(),
  wherebyId: z.string(),
  hostUrl: z.string(),
  guestUrl: z.string(),
  menteeId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TestimonialCreateManyMentorInputSchema: z.ZodType<Prisma.TestimonialCreateManyMentorInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  menteeId: z.string()
}).strict();

export const AvailabilityCreateManyMentorInputSchema: z.ZodType<Prisma.AvailabilityCreateManyMentorInput> = z.object({
  id: z.string().cuid().optional(),
  dayOfWeek: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MenteeUpdateWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeUpdateWithoutMentorsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMenteeNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutMenteeNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUpdateManyWithoutMenteeNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUpdateManyWithoutMenteeNestedInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateWithoutMentorsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional(),
  reviews: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMenteeNestedInputSchema).optional()
}).strict();

export const MenteeUncheckedUpdateManyWithoutMentorsInputSchema: z.ZodType<Prisma.MenteeUncheckedUpdateManyWithoutMentorsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerGoals: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerHistory: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  careerChallenges: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => MenteeUpdateskillsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TaskUpdateWithoutMentorInputSchema: z.ZodType<Prisma.TaskUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => TaskStatusSchema),z.lazy(() => EnumTaskStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentee: z.lazy(() => MenteeUpdateOneRequiredWithoutTasksNestedInputSchema).optional()
}).strict();

export const TaskUncheckedUpdateWithoutMentorInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => TaskStatusSchema),z.lazy(() => EnumTaskStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TaskUncheckedUpdateManyWithoutMentorInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => TaskStatusSchema),z.lazy(() => EnumTaskStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RequestUpdateWithoutMentorInputSchema: z.ZodType<Prisma.RequestUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentee: z.lazy(() => MenteeUpdateOneRequiredWithoutRequestsNestedInputSchema).optional()
}).strict();

export const RequestUncheckedUpdateWithoutMentorInputSchema: z.ZodType<Prisma.RequestUncheckedUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RequestUncheckedUpdateManyWithoutMentorInputSchema: z.ZodType<Prisma.RequestUncheckedUpdateManyWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MeetingUpdateWithoutMentorInputSchema: z.ZodType<Prisma.MeetingUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  wherebyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hostUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guestUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentee: z.lazy(() => MenteeUpdateOneRequiredWithoutMeetingsNestedInputSchema).optional()
}).strict();

export const MeetingUncheckedUpdateWithoutMentorInputSchema: z.ZodType<Prisma.MeetingUncheckedUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  wherebyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hostUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guestUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MeetingUncheckedUpdateManyWithoutMentorInputSchema: z.ZodType<Prisma.MeetingUncheckedUpdateManyWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  wherebyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hostUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guestUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestimonialUpdateWithoutMentorInputSchema: z.ZodType<Prisma.TestimonialUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentee: z.lazy(() => MenteeUpdateOneRequiredWithoutReviewsNestedInputSchema).optional()
}).strict();

export const TestimonialUncheckedUpdateWithoutMentorInputSchema: z.ZodType<Prisma.TestimonialUncheckedUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestimonialUncheckedUpdateManyWithoutMentorInputSchema: z.ZodType<Prisma.TestimonialUncheckedUpdateManyWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  menteeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AvailabilityUpdateWithoutMentorInputSchema: z.ZodType<Prisma.AvailabilityUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AvailabilityUncheckedUpdateWithoutMentorInputSchema: z.ZodType<Prisma.AvailabilityUncheckedUpdateWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AvailabilityUncheckedUpdateManyWithoutMentorInputSchema: z.ZodType<Prisma.AvailabilityUncheckedUpdateManyWithoutMentorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TaskCreateManyMenteeInputSchema: z.ZodType<Prisma.TaskCreateManyMenteeInput> = z.object({
  id: z.string().cuid().optional(),
  postition: z.number().int(),
  title: z.string(),
  description: z.string(),
  mentorId: z.string(),
  status: z.lazy(() => TaskStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const RequestCreateManyMenteeInputSchema: z.ZodType<Prisma.RequestCreateManyMenteeInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  mentorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MeetingCreateManyMenteeInputSchema: z.ZodType<Prisma.MeetingCreateManyMenteeInput> = z.object({
  id: z.string().cuid().optional(),
  endDate: z.coerce.date(),
  wherebyId: z.string(),
  hostUrl: z.string(),
  guestUrl: z.string(),
  mentorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TestimonialCreateManyMenteeInputSchema: z.ZodType<Prisma.TestimonialCreateManyMenteeInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  mentorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const MentorUpdateWithoutMenteesInputSchema: z.ZodType<Prisma.MentorUpdateWithoutMenteesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMentorNestedInputSchema).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutMentorNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUpdateManyWithoutMentorNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateWithoutMenteesInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateWithoutMenteesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  requests: z.lazy(() => RequestUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  meetings: z.lazy(() => MeetingUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  testimonials: z.lazy(() => TestimonialUncheckedUpdateManyWithoutMentorNestedInputSchema).optional(),
  availabilities: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutMentorNestedInputSchema).optional()
}).strict();

export const MentorUncheckedUpdateManyWithoutMenteesInputSchema: z.ZodType<Prisma.MentorUncheckedUpdateManyWithoutMenteesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fieldOfExpertise: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  yearsOfExperience: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isTopMentor: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TaskUpdateWithoutMenteeInputSchema: z.ZodType<Prisma.TaskUpdateWithoutMenteeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => TaskStatusSchema),z.lazy(() => EnumTaskStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateOneRequiredWithoutTasksNestedInputSchema).optional()
}).strict();

export const TaskUncheckedUpdateWithoutMenteeInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateWithoutMenteeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => TaskStatusSchema),z.lazy(() => EnumTaskStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TaskUncheckedUpdateManyWithoutMenteeInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutMenteeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postition: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => TaskStatusSchema),z.lazy(() => EnumTaskStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RequestUpdateWithoutMenteeInputSchema: z.ZodType<Prisma.RequestUpdateWithoutMenteeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateOneRequiredWithoutRequestsNestedInputSchema).optional()
}).strict();

export const RequestUncheckedUpdateWithoutMenteeInputSchema: z.ZodType<Prisma.RequestUncheckedUpdateWithoutMenteeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RequestUncheckedUpdateManyWithoutMenteeInputSchema: z.ZodType<Prisma.RequestUncheckedUpdateManyWithoutMenteeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MeetingUpdateWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingUpdateWithoutMenteeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  wherebyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hostUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guestUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateOneRequiredWithoutMeetingsNestedInputSchema).optional()
}).strict();

export const MeetingUncheckedUpdateWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingUncheckedUpdateWithoutMenteeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  wherebyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hostUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guestUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MeetingUncheckedUpdateManyWithoutMenteeInputSchema: z.ZodType<Prisma.MeetingUncheckedUpdateManyWithoutMenteeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  wherebyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hostUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guestUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestimonialUpdateWithoutMenteeInputSchema: z.ZodType<Prisma.TestimonialUpdateWithoutMenteeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mentor: z.lazy(() => MentorUpdateOneRequiredWithoutTestimonialsNestedInputSchema).optional()
}).strict();

export const TestimonialUncheckedUpdateWithoutMenteeInputSchema: z.ZodType<Prisma.TestimonialUncheckedUpdateWithoutMenteeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mentorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestimonialUncheckedUpdateManyWithoutMenteeInputSchema: z.ZodType<Prisma.TestimonialUncheckedUpdateManyWithoutMenteeInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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
  orderBy: z.union([ UserOrderByWithRelationAndSearchRelevanceInputSchema.array(),UserOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationAndSearchRelevanceInputSchema.array(),UserOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationAndSearchRelevanceInputSchema.array(),UserOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationAndSearchRelevanceInputSchema.array(),UserOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
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
  orderBy: z.union([ MentorOrderByWithRelationAndSearchRelevanceInputSchema.array(),MentorOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: MentorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MentorScalarFieldEnumSchema,MentorScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MentorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MentorFindFirstOrThrowArgs> = z.object({
  select: MentorSelectSchema.optional(),
  include: MentorIncludeSchema.optional(),
  where: MentorWhereInputSchema.optional(),
  orderBy: z.union([ MentorOrderByWithRelationAndSearchRelevanceInputSchema.array(),MentorOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: MentorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MentorScalarFieldEnumSchema,MentorScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MentorFindManyArgsSchema: z.ZodType<Prisma.MentorFindManyArgs> = z.object({
  select: MentorSelectSchema.optional(),
  include: MentorIncludeSchema.optional(),
  where: MentorWhereInputSchema.optional(),
  orderBy: z.union([ MentorOrderByWithRelationAndSearchRelevanceInputSchema.array(),MentorOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: MentorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MentorScalarFieldEnumSchema,MentorScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MentorAggregateArgsSchema: z.ZodType<Prisma.MentorAggregateArgs> = z.object({
  where: MentorWhereInputSchema.optional(),
  orderBy: z.union([ MentorOrderByWithRelationAndSearchRelevanceInputSchema.array(),MentorOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
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
  orderBy: z.union([ MenteeOrderByWithRelationAndSearchRelevanceInputSchema.array(),MenteeOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: MenteeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MenteeScalarFieldEnumSchema,MenteeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MenteeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MenteeFindFirstOrThrowArgs> = z.object({
  select: MenteeSelectSchema.optional(),
  include: MenteeIncludeSchema.optional(),
  where: MenteeWhereInputSchema.optional(),
  orderBy: z.union([ MenteeOrderByWithRelationAndSearchRelevanceInputSchema.array(),MenteeOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: MenteeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MenteeScalarFieldEnumSchema,MenteeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MenteeFindManyArgsSchema: z.ZodType<Prisma.MenteeFindManyArgs> = z.object({
  select: MenteeSelectSchema.optional(),
  include: MenteeIncludeSchema.optional(),
  where: MenteeWhereInputSchema.optional(),
  orderBy: z.union([ MenteeOrderByWithRelationAndSearchRelevanceInputSchema.array(),MenteeOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: MenteeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MenteeScalarFieldEnumSchema,MenteeScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MenteeAggregateArgsSchema: z.ZodType<Prisma.MenteeAggregateArgs> = z.object({
  where: MenteeWhereInputSchema.optional(),
  orderBy: z.union([ MenteeOrderByWithRelationAndSearchRelevanceInputSchema.array(),MenteeOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
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

export const TaskFindFirstArgsSchema: z.ZodType<Prisma.TaskFindFirstArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereInputSchema.optional(),
  orderBy: z.union([ TaskOrderByWithRelationAndSearchRelevanceInputSchema.array(),TaskOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TaskWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TaskScalarFieldEnumSchema,TaskScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const TaskFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TaskFindFirstOrThrowArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereInputSchema.optional(),
  orderBy: z.union([ TaskOrderByWithRelationAndSearchRelevanceInputSchema.array(),TaskOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TaskWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TaskScalarFieldEnumSchema,TaskScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const TaskFindManyArgsSchema: z.ZodType<Prisma.TaskFindManyArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereInputSchema.optional(),
  orderBy: z.union([ TaskOrderByWithRelationAndSearchRelevanceInputSchema.array(),TaskOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TaskWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TaskScalarFieldEnumSchema,TaskScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const TaskAggregateArgsSchema: z.ZodType<Prisma.TaskAggregateArgs> = z.object({
  where: TaskWhereInputSchema.optional(),
  orderBy: z.union([ TaskOrderByWithRelationAndSearchRelevanceInputSchema.array(),TaskOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TaskWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const TaskGroupByArgsSchema: z.ZodType<Prisma.TaskGroupByArgs> = z.object({
  where: TaskWhereInputSchema.optional(),
  orderBy: z.union([ TaskOrderByWithAggregationInputSchema.array(),TaskOrderByWithAggregationInputSchema ]).optional(),
  by: TaskScalarFieldEnumSchema.array(),
  having: TaskScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const TaskFindUniqueArgsSchema: z.ZodType<Prisma.TaskFindUniqueArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereUniqueInputSchema,
}).strict()

export const TaskFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TaskFindUniqueOrThrowArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereUniqueInputSchema,
}).strict()

export const MessageFindFirstArgsSchema: z.ZodType<Prisma.MessageFindFirstArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([ MessageOrderByWithRelationAndSearchRelevanceInputSchema.array(),MessageOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MessageScalarFieldEnumSchema,MessageScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MessageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MessageFindFirstOrThrowArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([ MessageOrderByWithRelationAndSearchRelevanceInputSchema.array(),MessageOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MessageScalarFieldEnumSchema,MessageScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MessageFindManyArgsSchema: z.ZodType<Prisma.MessageFindManyArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([ MessageOrderByWithRelationAndSearchRelevanceInputSchema.array(),MessageOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MessageScalarFieldEnumSchema,MessageScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MessageAggregateArgsSchema: z.ZodType<Prisma.MessageAggregateArgs> = z.object({
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([ MessageOrderByWithRelationAndSearchRelevanceInputSchema.array(),MessageOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MessageGroupByArgsSchema: z.ZodType<Prisma.MessageGroupByArgs> = z.object({
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([ MessageOrderByWithAggregationInputSchema.array(),MessageOrderByWithAggregationInputSchema ]).optional(),
  by: MessageScalarFieldEnumSchema.array(),
  having: MessageScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MessageFindUniqueArgsSchema: z.ZodType<Prisma.MessageFindUniqueArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
}).strict()

export const MessageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MessageFindUniqueOrThrowArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
}).strict()

export const MeetingFindFirstArgsSchema: z.ZodType<Prisma.MeetingFindFirstArgs> = z.object({
  select: MeetingSelectSchema.optional(),
  include: MeetingIncludeSchema.optional(),
  where: MeetingWhereInputSchema.optional(),
  orderBy: z.union([ MeetingOrderByWithRelationAndSearchRelevanceInputSchema.array(),MeetingOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: MeetingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MeetingScalarFieldEnumSchema,MeetingScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MeetingFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MeetingFindFirstOrThrowArgs> = z.object({
  select: MeetingSelectSchema.optional(),
  include: MeetingIncludeSchema.optional(),
  where: MeetingWhereInputSchema.optional(),
  orderBy: z.union([ MeetingOrderByWithRelationAndSearchRelevanceInputSchema.array(),MeetingOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: MeetingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MeetingScalarFieldEnumSchema,MeetingScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MeetingFindManyArgsSchema: z.ZodType<Prisma.MeetingFindManyArgs> = z.object({
  select: MeetingSelectSchema.optional(),
  include: MeetingIncludeSchema.optional(),
  where: MeetingWhereInputSchema.optional(),
  orderBy: z.union([ MeetingOrderByWithRelationAndSearchRelevanceInputSchema.array(),MeetingOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: MeetingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MeetingScalarFieldEnumSchema,MeetingScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const MeetingAggregateArgsSchema: z.ZodType<Prisma.MeetingAggregateArgs> = z.object({
  where: MeetingWhereInputSchema.optional(),
  orderBy: z.union([ MeetingOrderByWithRelationAndSearchRelevanceInputSchema.array(),MeetingOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: MeetingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MeetingGroupByArgsSchema: z.ZodType<Prisma.MeetingGroupByArgs> = z.object({
  where: MeetingWhereInputSchema.optional(),
  orderBy: z.union([ MeetingOrderByWithAggregationInputSchema.array(),MeetingOrderByWithAggregationInputSchema ]).optional(),
  by: MeetingScalarFieldEnumSchema.array(),
  having: MeetingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const MeetingFindUniqueArgsSchema: z.ZodType<Prisma.MeetingFindUniqueArgs> = z.object({
  select: MeetingSelectSchema.optional(),
  include: MeetingIncludeSchema.optional(),
  where: MeetingWhereUniqueInputSchema,
}).strict()

export const MeetingFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MeetingFindUniqueOrThrowArgs> = z.object({
  select: MeetingSelectSchema.optional(),
  include: MeetingIncludeSchema.optional(),
  where: MeetingWhereUniqueInputSchema,
}).strict()

export const TestimonialFindFirstArgsSchema: z.ZodType<Prisma.TestimonialFindFirstArgs> = z.object({
  select: TestimonialSelectSchema.optional(),
  include: TestimonialIncludeSchema.optional(),
  where: TestimonialWhereInputSchema.optional(),
  orderBy: z.union([ TestimonialOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestimonialOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestimonialWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestimonialScalarFieldEnumSchema,TestimonialScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const TestimonialFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TestimonialFindFirstOrThrowArgs> = z.object({
  select: TestimonialSelectSchema.optional(),
  include: TestimonialIncludeSchema.optional(),
  where: TestimonialWhereInputSchema.optional(),
  orderBy: z.union([ TestimonialOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestimonialOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestimonialWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestimonialScalarFieldEnumSchema,TestimonialScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const TestimonialFindManyArgsSchema: z.ZodType<Prisma.TestimonialFindManyArgs> = z.object({
  select: TestimonialSelectSchema.optional(),
  include: TestimonialIncludeSchema.optional(),
  where: TestimonialWhereInputSchema.optional(),
  orderBy: z.union([ TestimonialOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestimonialOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestimonialWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestimonialScalarFieldEnumSchema,TestimonialScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const TestimonialAggregateArgsSchema: z.ZodType<Prisma.TestimonialAggregateArgs> = z.object({
  where: TestimonialWhereInputSchema.optional(),
  orderBy: z.union([ TestimonialOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestimonialOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
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
  orderBy: z.union([ AvailabilityOrderByWithRelationAndSearchRelevanceInputSchema.array(),AvailabilityOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: AvailabilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AvailabilityScalarFieldEnumSchema,AvailabilityScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const AvailabilityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AvailabilityFindFirstOrThrowArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereInputSchema.optional(),
  orderBy: z.union([ AvailabilityOrderByWithRelationAndSearchRelevanceInputSchema.array(),AvailabilityOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: AvailabilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AvailabilityScalarFieldEnumSchema,AvailabilityScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const AvailabilityFindManyArgsSchema: z.ZodType<Prisma.AvailabilityFindManyArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereInputSchema.optional(),
  orderBy: z.union([ AvailabilityOrderByWithRelationAndSearchRelevanceInputSchema.array(),AvailabilityOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: AvailabilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AvailabilityScalarFieldEnumSchema,AvailabilityScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const AvailabilityAggregateArgsSchema: z.ZodType<Prisma.AvailabilityAggregateArgs> = z.object({
  where: AvailabilityWhereInputSchema.optional(),
  orderBy: z.union([ AvailabilityOrderByWithRelationAndSearchRelevanceInputSchema.array(),AvailabilityOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
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

export const RequestFindFirstArgsSchema: z.ZodType<Prisma.RequestFindFirstArgs> = z.object({
  select: RequestSelectSchema.optional(),
  include: RequestIncludeSchema.optional(),
  where: RequestWhereInputSchema.optional(),
  orderBy: z.union([ RequestOrderByWithRelationAndSearchRelevanceInputSchema.array(),RequestOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: RequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RequestScalarFieldEnumSchema,RequestScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RequestFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RequestFindFirstOrThrowArgs> = z.object({
  select: RequestSelectSchema.optional(),
  include: RequestIncludeSchema.optional(),
  where: RequestWhereInputSchema.optional(),
  orderBy: z.union([ RequestOrderByWithRelationAndSearchRelevanceInputSchema.array(),RequestOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: RequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RequestScalarFieldEnumSchema,RequestScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RequestFindManyArgsSchema: z.ZodType<Prisma.RequestFindManyArgs> = z.object({
  select: RequestSelectSchema.optional(),
  include: RequestIncludeSchema.optional(),
  where: RequestWhereInputSchema.optional(),
  orderBy: z.union([ RequestOrderByWithRelationAndSearchRelevanceInputSchema.array(),RequestOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: RequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RequestScalarFieldEnumSchema,RequestScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export const RequestAggregateArgsSchema: z.ZodType<Prisma.RequestAggregateArgs> = z.object({
  where: RequestWhereInputSchema.optional(),
  orderBy: z.union([ RequestOrderByWithRelationAndSearchRelevanceInputSchema.array(),RequestOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: RequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const RequestGroupByArgsSchema: z.ZodType<Prisma.RequestGroupByArgs> = z.object({
  where: RequestWhereInputSchema.optional(),
  orderBy: z.union([ RequestOrderByWithAggregationInputSchema.array(),RequestOrderByWithAggregationInputSchema ]).optional(),
  by: RequestScalarFieldEnumSchema.array(),
  having: RequestScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const RequestFindUniqueArgsSchema: z.ZodType<Prisma.RequestFindUniqueArgs> = z.object({
  select: RequestSelectSchema.optional(),
  include: RequestIncludeSchema.optional(),
  where: RequestWhereUniqueInputSchema,
}).strict()

export const RequestFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RequestFindUniqueOrThrowArgs> = z.object({
  select: RequestSelectSchema.optional(),
  include: RequestIncludeSchema.optional(),
  where: RequestWhereUniqueInputSchema,
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

export const TaskCreateArgsSchema: z.ZodType<Prisma.TaskCreateArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  data: z.union([ TaskCreateInputSchema,TaskUncheckedCreateInputSchema ]),
}).strict()

export const TaskUpsertArgsSchema: z.ZodType<Prisma.TaskUpsertArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereUniqueInputSchema,
  create: z.union([ TaskCreateInputSchema,TaskUncheckedCreateInputSchema ]),
  update: z.union([ TaskUpdateInputSchema,TaskUncheckedUpdateInputSchema ]),
}).strict()

export const TaskCreateManyArgsSchema: z.ZodType<Prisma.TaskCreateManyArgs> = z.object({
  data: z.union([ TaskCreateManyInputSchema,TaskCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const TaskDeleteArgsSchema: z.ZodType<Prisma.TaskDeleteArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereUniqueInputSchema,
}).strict()

export const TaskUpdateArgsSchema: z.ZodType<Prisma.TaskUpdateArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  data: z.union([ TaskUpdateInputSchema,TaskUncheckedUpdateInputSchema ]),
  where: TaskWhereUniqueInputSchema,
}).strict()

export const TaskUpdateManyArgsSchema: z.ZodType<Prisma.TaskUpdateManyArgs> = z.object({
  data: z.union([ TaskUpdateManyMutationInputSchema,TaskUncheckedUpdateManyInputSchema ]),
  where: TaskWhereInputSchema.optional(),
}).strict()

export const TaskDeleteManyArgsSchema: z.ZodType<Prisma.TaskDeleteManyArgs> = z.object({
  where: TaskWhereInputSchema.optional(),
}).strict()

export const MessageCreateArgsSchema: z.ZodType<Prisma.MessageCreateArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  data: z.union([ MessageCreateInputSchema,MessageUncheckedCreateInputSchema ]),
}).strict()

export const MessageUpsertArgsSchema: z.ZodType<Prisma.MessageUpsertArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
  create: z.union([ MessageCreateInputSchema,MessageUncheckedCreateInputSchema ]),
  update: z.union([ MessageUpdateInputSchema,MessageUncheckedUpdateInputSchema ]),
}).strict()

export const MessageCreateManyArgsSchema: z.ZodType<Prisma.MessageCreateManyArgs> = z.object({
  data: z.union([ MessageCreateManyInputSchema,MessageCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const MessageDeleteArgsSchema: z.ZodType<Prisma.MessageDeleteArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereUniqueInputSchema,
}).strict()

export const MessageUpdateArgsSchema: z.ZodType<Prisma.MessageUpdateArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  data: z.union([ MessageUpdateInputSchema,MessageUncheckedUpdateInputSchema ]),
  where: MessageWhereUniqueInputSchema,
}).strict()

export const MessageUpdateManyArgsSchema: z.ZodType<Prisma.MessageUpdateManyArgs> = z.object({
  data: z.union([ MessageUpdateManyMutationInputSchema,MessageUncheckedUpdateManyInputSchema ]),
  where: MessageWhereInputSchema.optional(),
}).strict()

export const MessageDeleteManyArgsSchema: z.ZodType<Prisma.MessageDeleteManyArgs> = z.object({
  where: MessageWhereInputSchema.optional(),
}).strict()

export const MeetingCreateArgsSchema: z.ZodType<Prisma.MeetingCreateArgs> = z.object({
  select: MeetingSelectSchema.optional(),
  include: MeetingIncludeSchema.optional(),
  data: z.union([ MeetingCreateInputSchema,MeetingUncheckedCreateInputSchema ]),
}).strict()

export const MeetingUpsertArgsSchema: z.ZodType<Prisma.MeetingUpsertArgs> = z.object({
  select: MeetingSelectSchema.optional(),
  include: MeetingIncludeSchema.optional(),
  where: MeetingWhereUniqueInputSchema,
  create: z.union([ MeetingCreateInputSchema,MeetingUncheckedCreateInputSchema ]),
  update: z.union([ MeetingUpdateInputSchema,MeetingUncheckedUpdateInputSchema ]),
}).strict()

export const MeetingCreateManyArgsSchema: z.ZodType<Prisma.MeetingCreateManyArgs> = z.object({
  data: z.union([ MeetingCreateManyInputSchema,MeetingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const MeetingDeleteArgsSchema: z.ZodType<Prisma.MeetingDeleteArgs> = z.object({
  select: MeetingSelectSchema.optional(),
  include: MeetingIncludeSchema.optional(),
  where: MeetingWhereUniqueInputSchema,
}).strict()

export const MeetingUpdateArgsSchema: z.ZodType<Prisma.MeetingUpdateArgs> = z.object({
  select: MeetingSelectSchema.optional(),
  include: MeetingIncludeSchema.optional(),
  data: z.union([ MeetingUpdateInputSchema,MeetingUncheckedUpdateInputSchema ]),
  where: MeetingWhereUniqueInputSchema,
}).strict()

export const MeetingUpdateManyArgsSchema: z.ZodType<Prisma.MeetingUpdateManyArgs> = z.object({
  data: z.union([ MeetingUpdateManyMutationInputSchema,MeetingUncheckedUpdateManyInputSchema ]),
  where: MeetingWhereInputSchema.optional(),
}).strict()

export const MeetingDeleteManyArgsSchema: z.ZodType<Prisma.MeetingDeleteManyArgs> = z.object({
  where: MeetingWhereInputSchema.optional(),
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

export const RequestCreateArgsSchema: z.ZodType<Prisma.RequestCreateArgs> = z.object({
  select: RequestSelectSchema.optional(),
  include: RequestIncludeSchema.optional(),
  data: z.union([ RequestCreateInputSchema,RequestUncheckedCreateInputSchema ]),
}).strict()

export const RequestUpsertArgsSchema: z.ZodType<Prisma.RequestUpsertArgs> = z.object({
  select: RequestSelectSchema.optional(),
  include: RequestIncludeSchema.optional(),
  where: RequestWhereUniqueInputSchema,
  create: z.union([ RequestCreateInputSchema,RequestUncheckedCreateInputSchema ]),
  update: z.union([ RequestUpdateInputSchema,RequestUncheckedUpdateInputSchema ]),
}).strict()

export const RequestCreateManyArgsSchema: z.ZodType<Prisma.RequestCreateManyArgs> = z.object({
  data: z.union([ RequestCreateManyInputSchema,RequestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const RequestDeleteArgsSchema: z.ZodType<Prisma.RequestDeleteArgs> = z.object({
  select: RequestSelectSchema.optional(),
  include: RequestIncludeSchema.optional(),
  where: RequestWhereUniqueInputSchema,
}).strict()

export const RequestUpdateArgsSchema: z.ZodType<Prisma.RequestUpdateArgs> = z.object({
  select: RequestSelectSchema.optional(),
  include: RequestIncludeSchema.optional(),
  data: z.union([ RequestUpdateInputSchema,RequestUncheckedUpdateInputSchema ]),
  where: RequestWhereUniqueInputSchema,
}).strict()

export const RequestUpdateManyArgsSchema: z.ZodType<Prisma.RequestUpdateManyArgs> = z.object({
  data: z.union([ RequestUpdateManyMutationInputSchema,RequestUncheckedUpdateManyInputSchema ]),
  where: RequestWhereInputSchema.optional(),
}).strict()

export const RequestDeleteManyArgsSchema: z.ZodType<Prisma.RequestDeleteManyArgs> = z.object({
  where: RequestWhereInputSchema.optional(),
}).strict()