# Bifrost

Bifrost connects people who want company doing an activity. It is a connection layer between peers: it makes the introduction, and the people themselves do the thing.

## Language

**Profile**:
A person's account in Bifrost, with the Full Name and avatar other Participants see. A Participant is a Profile taking part in a specific Activity.
_Avoid_: User, Account, Member

**Full Name**:
The name a Profile is shown by. Google supplies it at first sign-in; anyone can edit it. It is not unique — two Profiles may share one — and it never identifies a Profile.
_Avoid_: Username, Handle, Display name

**Email**:
The address that identifies a Profile. Proven at sign-in by an email code or by Google. Unlike Full Name, it is unique.
_Avoid_: Login, Identifier

**Phone**:
A number a Profile records during onboarding. Required and unique, but unverified — it is contact information, not identity.
_Avoid_: Contact, Mobile

**Activity**:
A plan a person opens to others: an activity, a time, a place, and a number of open Spots. The unit that search returns and that people join.
_Avoid_: Event, Meetup, Plan, Listing

**Spot**:
A place in an Activity. Every Activity has a fixed number of Spots; an open Spot can be requested, and once accepted it is occupied by a Participant.
_Avoid_: Seat, Ticket, Slot

**Initiator**:
The Participant who created an Activity. An Initiator always takes part — Bifrost has no organiser who stays home.
_Avoid_: Host, Organiser, Creator

**Participant**:
A person taking part in an Activity. The Initiator is a Participant, and so is everyone whose Join Request was accepted.
_Avoid_: Attendee, Member, Guest, User

**Join Request**:
A person's ask to occupy an open Spot in an Activity. It becomes a Spot only once the Initiator accepts it.
_Avoid_: Booking, Registration, Application

**Ask**:
A single, bounded question about an Activity's terms, sent before joining — one question, no follow-up. The Initiator accepts it (amending the Activity) or declines it; either way the person then joins or does not. A person may send at most one Ask per Activity.
_Avoid_: Message, DM, Chat, Enquiry

**Amendment**:
A change to an Activity's shared terms, made by the Initiator when accepting an Ask. It applies to every Participant, who are notified and may leave.
_Avoid_: Edit, Update, Change

**Bridge**:
The connection formed between the people in an Activity once a Join Request is accepted. Bifrost makes Bridges; it does not run the Activity.
_Avoid_: Match, Group, Connection

### Taxonomy and places

**Category**:
A top-level kind of Activity — Sports, Music, Food, Travel. The first level of the curated taxonomy.
_Avoid_: Tag, Type, Genre

**Interest**:
A specific activity inside a Category — Turf Football within Sports. The level the search parser matches a query against, and the signal that makes people "like-minded".
_Avoid_: Subcategory, Tag, Topic

**Place**:
A real-world location an Activity happens at — a turf ground, a café, a trailhead. Curated rather than user-invented.
_Avoid_: Venue, Location
