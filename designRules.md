# Design Rules

## Typography

- Serif for serious pages, lot of reading
- sans Serif for rest
- max 2 typefaces per Website
- 16-32 px for normal text
- 20px for long text
- 50+ px for headlines
- weight never under 400
- max 75 characters per line
- line height 1.5 -2 for normal text. smaller/longer text bigger line height
- CAPS for short titles
- do not justify text


## Colors

- make color match website personality
- use good color tone
- choose a main color and a gray color; third color to choose is accent color
- choose lighter and darker versions for the colors
- use color to draw attention
- use color to add accents / make secionts interesting
- use color in images
- if bg is dark use a lighter version of the color for text
- text not completely black
- do not make text too light

## Images and Illustrations

- types: product pics, storytelling pics, illustrations, patterns
- with images support message and story of website
- use original images or HQ stock images (unsplash, pexels, drawkit)
- show real people to trigger emotions
- crop images
- combine photos, illustrations, patterns
- darker or brighten image to make text visible using gradient 
- OR: position text in neutral area
- OR: put text in box (with opacaity)
- image size must be TWICE as size displayed
- compress images (squoosh)
- images need same dimensions or aspect ratio
- sources: unsplash, pexels, drawkit
- sources for persons: uifaces

## Icons

- use good icons: material, posphor
- only 1 icon pack
- only svg or icon fonts
- roundness, weight, filled/outlined should match typography
- use for provide visual assistance to text
- use for feature blocks
- use with actions
- use as bulletpoints
- same color as text or for more attention different color
- don't make larger as designed for

## Shadows

- the more serious the less shadows
- use in small doses
- make shadows light
- small shadows for small elements to make them stand out
- medium-sized shadow for sections / large stuff / cards
- large shadows for navigations or pop-up
- change shadow on mouse interaction

## border-radius

- the less serious the more border-radius
- match border-radius to type-face of website
- use at: buttons, images, around icons, standout sections

## Whitespace

- use much between sections
- use much between groups of elements
- use between elements
- whitespace instead of lines!
- the more elements together the closer they should be
- start with to much whitespace and the remove
- big content = much whitespace
- use multiples of 16px for margins and paddings

## Visual Hierarchy

- attention to most important elements
- important elements closer to top of page
- use images mindfully because they draw lot of attention
- use whitespace to emphasize
- for text: font-size, color, font-weight and whitespace
- elements to emphasize: titles, sub-titles, buttons, data-points, icons
- for components: use background-color, shadow, border
- components to emphasize: testimonials, call to actions, highlight sections, preview cards, tables

## UX

- experience while you interact with a product
- no complicated layouts
- make call to action most prominent
- blue text and underlined text only for links
- animations should be fast 200-500 ms
- in forms align labels and fields in single vertical line
- offer feedback on error
- place action buttons where it takes an effect
- descriptive keyword-focused headline
- only relevant information
- use simple words. no technical jargon
- break long text in sub headings, images, quotes etc.

## Website personalities

- which vibe to transmit for user? choose perosnality based on this question

1. Serious / Elegant: thin serif typefaces; golden dark blue / grey / pastel colors; big HQ images with products; no icons; no shadows; no border radius; creative / experimental layout
2. Minimalist / Simple: sans serif typefaces small body font size, boxy; black / dark grey color on white background; few images; no icons; no shadows; no border radius
3. Plain / Neutal: sans serif typefaces, small text; safe colors; many images but small;  no icons; no shadows; no border radius; structured, condensed layout
4. Bold / Confident: boxy squared sans-serif typefaces, uppercase headings; big broght colors; many images; no icons; no shadows; no border radius; all layouts
5. Calm / Peaceful: soft serif typefaces, sometimes sans serif too; pastel, washed out colors; images/illustrations match colors; icons are used; no shadows; small border radius; all layouts
6. Startup / Upbeat: medium sized headings, one single sans serif typeface, lighter text colors; blue/green/purple widely used; images/illustrations are always used; sometimes patterns and shapes; icons is a must; subtle shadows; border radius is used; rows of cards and z patterns are common
7. Playful / Fun: round creative sans serif typefaces; multiple colors; many images and handdrawn illustrations; icons used; shadows used; border radius used; all layouts

## Inspiration from other websites

- onepagelove.com
- land-book.com
- awwwards.com
- screenlane.com


## Responsive Design

### Fluid Layouts

- webpage should adapt to viewport
- use % 
- use max-width (if container width is larger than viewport -> use width of parent; else use max-width)


### Responsive Units

- use rem instead of px
  - rem = root element font size; default 16px = 1 rem
  - change default font-size -> change size of all rem elements
- tip: set 1 rem = 10px
- tip: set font-size to a percentage

### Flexible Images

- images don't scale automatically
- use % for dimensions

### Media Queries

- change styles on viewport widths