// Document types
import page from './documents/page'
import user from './documents/user'
import account from './documents/account'
import bundle from './documents/bundle'
import purchase from './documents/purchase'
import video from './documents/video'
import sponsoringType from './documents/sponsoring-type'
import sponsors from './documents/sponsors'
import bookingType from './documents/booking-type'
import booking from './documents/booking'

const documents = [
  user, account, video, bundle, page, purchase, sponsoringType, sponsors,
  bookingType, booking
]

// Singleton document types
import home from './singletons/home'
import settings from './singletons/settings'

const singletons = [home, settings]

// Block content
import body from './blocks/body'

const blocks = [body]

// Object types
import teamVariant from './objects/teamVariant'
import sectionVariant from './objects/section-variant'
import featureVariant from './objects/featureVariant'

const objects = [
  teamVariant,
  sectionVariant,
  featureVariant
]

export const schemaTypes = [...singletons, ...objects, ...blocks, ...documents]
