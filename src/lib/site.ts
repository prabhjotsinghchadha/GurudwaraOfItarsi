export const SITE = {
  name: 'Gurudwara Shree Guru Singh Sabha',
  shortName: 'GSS Itarsi',
  city: 'Itarsi',
  district: 'Narmadapuram (Hoshangabad)',
  state: 'Madhya Pradesh',
  pin: '461111',
  address:
    'Gurudwara Shree Guru Singh Sabha, Itarsi, Narmadapuram (Hoshangabad), Madhya Pradesh 461111',
  phone: '+91-9826066771', // TODO: replace with official number
  email: 'info@gss-itarsi.org', // TODO: replace with official email
  visitingHours: '05:00 AM – 09:00 PM',
  langarHours: '12:00 PM – 03:00 PM',
  socials: {
    facebook: '#',
    instagram: '#'
  },
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Seva & Programs' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/visit', label: 'Visit / Contact' }
  ]
} as const;
