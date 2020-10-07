import { createMedia } from '@artsy/fresnel'

export const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      desktop: 1024,
      tv: 1192,
    },
  })
