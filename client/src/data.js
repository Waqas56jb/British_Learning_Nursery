export const SITE = {
  mapsUrl:
    'https://www.google.com/maps/place/British+Learning+Nursery/@29.2541236,48.0526997,17z/data=!3m1!4b1!4m6!3m5!1s0x3fcf9fbb0469392b:0xe8a26c2e7fc6f326!8m2!3d29.2541236!4d48.0526997!16s%2Fg%2F12qg4tpy7',
  linktree: 'https://linktr.ee/British_Learning_Nursery',
  whatsapp: 'https://linktr.ee/British_Learning_Nursery',
  instagram: 'https://linktr.ee/British_Learning_Nursery',
  tiktok: 'https://linktr.ee/British_Learning_Nursery',
  registerForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSeeF3Qt2JMLP0vncZ0m2MYQmf0U7TT50x3P3Ti5CdF4CWdLrw/viewform',
}

/* Hero background slideshow — cross-fades in this order.
   Slides load one ahead of time, so only the first image is fetched up front. */
export const HERO_SLIDES = [
  '/incorporate.png',
  '/1.jpeg',
  '/6.jpeg',
  '/10.jpeg',
  '/7.jpeg',
  '/5.jpeg',
]

/* Gallery montage. `span` drives the mosaic tile size, `id` looks up the
   caption in translations.gallery.photos so alt text stays translated. */
export const GALLERY = [
  { id: 'sensoryPlay', src: '/1.jpeg', span: 'big' },
  { id: 'playground', src: '/6.jpeg', span: 'wide' },
  { id: 'reception', src: '/4.jpeg', span: 'normal' },
  { id: 'smartClassroom', src: '/2.jpeg', span: 'normal' },
  { id: 'softPlay', src: '/10.jpeg', span: 'wide' },
  { id: 'sensoryRoom', src: '/9.jpeg', span: 'tall' },
  { id: 'rainbowClassroom', src: '/5.jpeg', span: 'normal' },
  { id: 'track', src: '/7.jpeg', span: 'normal' },
  { id: 'alphabetClassroom', src: '/8.jpeg', span: 'normal' },
  { id: 'prayerRoom', src: '/11.jpeg', span: 'normal' },
  { id: 'waitingArea', src: '/3.jpeg', span: 'normal' },
]
