/**
 * Central image catalog.
 *
 * Priority for imagery:
 *   1. Authentic client-supplied assets in /public/{dashboards,products,diagrams}
 *, extracted from the Powerise energy, generator, cold-chain, truck
 *      telemetry and smart-lock documentation.
 *   2. Royalty-free Unsplash photography for atmospheric industry backdrops
 *      where no client asset exists. Unsplash images are licensed for free
 *      commercial and non-commercial use with no attribution required.
 *
 * Third-party / competitor imagery from the client's PDFs is excluded
 * (e.g. Mauto-branded gateway photos). Frigga logger imagery is included,  * it is the cold-chain product line Powerise supplies.
 */

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Atmospheric hero backdrop, royalty-free. */
export const heroBg = u("1519389950473-47ba0277781c", 2200);

/**
 * Per-pillar imagery for the Solutions section.
 * Local, client-authentic files first; royalty-free fallbacks for pillars
 * without a suitable in-house photo.
 */
export const pillarImages: Record<string, string> = {
  "energy-monitoring":    "/products/energy-meters-install.jpg",
  "generator-monitoring": "/dashboards/genset-web.jpg",
  "cold-chain":           "/products/cold-chain-loggers.jpg",
  "truck-telematics":     "/dashboards/truck-telematics.jpg",
  "utility-monitoring":   "/dashboards/genset-web.jpg",
  "smart-home":           "/products/smart-lock.jpg"
};

/** Industry backdrops, royalty-free Unsplash photography. */
export const industryImages: Record<string, string> = {
  "Utilities & Energy":       u("1547471080-7cc2caa01a7e", 1200),
  "Health & Life Sciences":   u("1519055548599-6d4d129508c4", 1200),
  "Food & Beverage":          u("1600880292203-757bb62b4baf", 1200),
  "Logistics & Fleet":        u("1493246507139-91e8fad9978e", 1200),
  "Real Estate & Facilities": u("1497436072909-60f360e1d4b1", 1200),
  "Homes & Estates":          u("1560518883-ce09059eeffa", 1200)
};

/** Authentic screenshots and diagrams sourced from the Powerise decks. */
export const platformShots: Record<string, string> = {
  sense:   "/products/energy-meters-install.jpg",
  connect: "/diagrams/genset-features.jpg",
  analyze: "/dashboards/genset-web.jpg",
  alert:   "/dashboards/genset-mobile.jpg",
  act:     "/dashboards/truck-telematics.jpg"
};
