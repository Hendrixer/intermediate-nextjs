import { randomUUID } from 'crypto'
import { relations, sql } from 'drizzle-orm'
import { integer, sqliteTable, text, unique } from 'drizzle-orm/sqlite-core'

const id = () =>
  text('id')
    .primaryKey()
    .$default(() => randomUUID())

const createdAt = () =>
  text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()

const date = (name: string) => text(name)

const boolean = (field: string) => integer(field, { mode: 'boolean' })

export const users = sqliteTable('users', {
  id: id(),
  createdAt: createdAt(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
})

export const usersRelations = relations(users, ({ many }) => ({
  events: many(events),
}))

export const events = sqliteTable(
  'events',
  {
    id: id(),
    createdAt: createdAt(),
    name: text('name').notNull(),
    startOn: date('startOn').notNull(),
    createdById: text('createdById').notNull(),
    description: text('description'),

    streetNumber: integer('streetNumber'),
    street: text('street'),
    zip: integer('zip'),
    bldg: text('bldg'),

    isPrivate: boolean('isPrivate').default(false).notNull(),
    status: text('status', {
      enum: ['draft', 'live', 'started', 'ended', 'canceled'],
    })
      .default('draft')
      .notNull(),
  },
  (table) => ({
    unq: unique().on(table.createdById, table.name),
  })
)

export const eventsRelations = relations(events, ({ many, one }) => ({
  rsvps: many(rsvps),
  createdBy: one(users, {
    references: [users.id],
    fields: [events.createdById],
  }),
}))

export const attendees = sqliteTable('attendees', {
  id: id(),
  createdAt: createdAt(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
})

export const attendeesRelations = relations(attendees, ({ many }) => ({
  rsvps: many(rsvps),
}))

export const rsvps = sqliteTable(
  'rsvps',
  {
    id: id(),
    createdAt: createdAt(),
    attendeeId: text('attendeeId'),
    eventId: text('eventId'),
    status: text('status', {
      enum: ['going', 'not-going', 'maybe'],
    })
      .default('going')
      .notNull(),
  },
  (table) => ({
    unq: unique().on(table.attendeeId, table.eventId),
  })
)

export const rsvpsRelations = relations(rsvps, ({ one }) => ({
  attendee: one(attendees, {
    fields: [rsvps.attendeeId],
    references: [attendees.id],
  }),
  event: one(events, {
    references: [events.id],
    fields: [rsvps.eventId],
  }),
}))
