// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail'
import annotationLinkExternal from './annotations/linkExternal'
// import annotationLinkInternal from './annotations/linkInternal'

const annotations = [
  annotationLinkEmail,
  annotationLinkExternal,
  // annotationLinkInternal,
]

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
import seo from './objects/seo/seo'
import seoHome from './objects/seo/home'
import seoPage from './objects/seo/page'
import seoDescription from './objects/seo/description'
import teamVariant from './objects/teamVariant'
import sectionVariant from './objects/section-variant'

const objects = [
  seo,
  seoHome,
  seoPage,
  seoDescription,
  teamVariant,
  sectionVariant
]

export const schemaTypes = [...annotations, ...singletons, ...objects, ...blocks, ...documents]
