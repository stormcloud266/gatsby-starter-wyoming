# gatsby-starter-wyoming

This is a GatsbyJS V3 starter template designed with **small business website** projects in mind. It is a fully-responsive, one-page site with a contact form, SEO, and GDPR-compliant FB Pixel and Google Analytics integration to help get small business websites up and running fast with Gatsby.

## Preview

[Visit Site](https://gatsby-starter-wyoming.netlify.app/)

![](https://raw.githubusercontent.com/stormcloud266/content/main/gatsby-starter-wyoming/screenshot.gif)

## Overview

This starter is based on [Gatsby Starter Default](https://github.com/gatsbyjs/gatsby-starter-default) and comes with all the default plugins.

### Features

**Configurable**

- Easy style customization with SCSS variables
- Site data, links, and icons located in data folder
- Alias imports for easy folder structuring
- Intuitive styling with SCSS modules

**Accessible**

- Skip link
- Keyboard navigable
- Aria labels and alt tags
- Sematic html

**SEO Optimized**

- SEO component with open graph, Twitter cards, and JSON LD schema
- GDPR compliant Google Analytics and Facebook Pixel with cookie consent banner
- sitemap.xml on build

**Ready for Launch**

- Full responsive design
- Header component with desktop and mobile nav
- Lazy loaded images
- Netlify form with custom success page
- Styled 404 page

## :rocket: Quick Start

### Install using the command line

1. **Create your new project.**

   ```sh
   git clone https://github.com/stormcloud266/gatsby-starter-wyoming
   ```

2. **Move into your new project's directory**

   ```sh
   cd gatsby-starter-wyoming
   ```

3. **Install Dependencies**

   ```sh
   yarn install
   ```

4. **Start developing**

   ```sh
   yarn develop
   ```

## :art: Customizations

### Configuration

User data can be configured in the `src/data` folder. The `config.js` file contains all the options for title, descriptions, analytics ids, etc. The `gatsby-config` file pulls info from this file.

All links and associated icons are located in the `links.js` file.

### Global Styles

Global styles are located in `src/assets/globalStyles`. The `variables` file allows for site-wide style changes including the following:

- text, background, and accent colors
- font families and sizes
- break point sizes
- wrapper widths
- section paddings

### Fonts

Web fonts are located in the `static/fonts` directory can be changed in the `src/globalStyles/_fonts.scss` file. The can then be updated in `src/assets/globalStyles/_variables.scss`

```scss
$font-family: 'Kumbh Sans', sans-serif;
$font-family-title: 'Sacramento', cursive;
```

### Icons

The icons used in this project come from [TeenyIcons](https://teenyicons.com/). They are copied into the `src/assets/images/icons.js` file. They can be converted to React components using [this tool](https://react-svgr.com/playground/).

### Form

The default form name is "contact" but can be changed through the `name` prop. This allows you to use the same component for multiple forms while differentiating them in Netlify Forms

```javascript
<Form name='application' />
```

### SEO

The image for the large summary card is located in the `static/` folder, and is pulled in with a static query.

Default info can be updated in the `src/data/config.js`. All fields can be edited on a page-by-page basis with props.

Create your own schema [here](https://hallanalysis.com/json-ld-generator/) or read more [here](https://schema.org/).

```javascript
<SEO title='New Title Here' description='New example description.' />
```

### Analytics

:warning: To start using analytics, you will need your Google Analytics tracking ID and/or Facebook Pixel ID.

1. **Add tracking ID to src/data/config.js file**

   ```javascript
   analytics: {
   	googleAnalyticsID: 'UA-thisisatest',
   	googleTagManagerID: '',
   	facebookPixelID: '',
   },
   ```

2. **Add cookieName to cookieBanner.js**

   In `src/components/global/cookieBanner.js` the CookieConsent component has a prop named "cookieName." The value of this prop should match the cookieName in your gatsby-config.

   ```javascript
   cookieName = 'gatsby-gdpr-google-analytics'
   ```

   If you want to have more than one cookie initialized, use the "onAccept" prop.

   ```javascript
   // cookieName="gatsby-gdpr-google-analytics"
   onAccept={() => {
       Cookies.set("gatsby-gdpr-google-analytics")
       Cookies.set("gatsby-gdpr-facebook-pixel")
   }}
   ```

3. **Add cookieBanner to layout**

   In your `src/components/global/layout.js` import the cookieBanner component.

   ```javascript
   import CookieBanner from '@components/cookieBanner'

   const Layout = ({ children }) => (
   	<>
   		<Header />
   		<main>{children}</main>
   		<Footer />
   		<CookieBanner />
   	</>
   )
   ```

## :white_check_mark: Before Launch Checklist

A short list to help make this template yours.

- [ ] Update site's config data
  - [ ] title
  - [ ] siteUrl
  - [ ] creator
  - [ ] description
- [ ] Replace favicon
- [ ] Replace `meta-card-banner` (used in Twitter cards and OG Data)
- [ ] Add GA or FB tracking IDs (if applicable)
- [ ] Enable CookieConsent (if applicable)

## License

This project is licensed under the BSD Zero Clause License. See the [LICENSE](https://choosealicense.com/licenses/0bsd/) file for more details.

## Support

If you've enjoyed using this starter and would like to show support monetarily, you can buy me a coffee here.

<a href="https://www.buymeacoffee.com/tawnee" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" height="41" width="174"></a>
