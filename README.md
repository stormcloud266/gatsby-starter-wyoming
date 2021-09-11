# gatsby-starter-wyoming

This is a GatsbyJS V3 starter template designed with **small business website** projects in mind. It is a fully-responsive, one-page site with a contact form, SEO, and GDPR-compliant FB Pixel and Google Analytics integration to help get small business websites up and running fast with Gatsby.

## Preview

[Visit Site](https://gatsby-starter-wyoming.netlify.app/)

![](https://github.com/stormcloud266/gatsby-starter-wyoming/blob/master/screenshot.gif)

## Overview

This starter is based on [Gatsby Starter Default](https://github.com/gatsbyjs/gatsby-starter-default) and comes with all the default plugins.

**Features**

- Styling with SCSS modules
- Full responsive design
- Easy style customization with SCSS variables
- Responsive header component with desktop and mobile nav
- SEO component with open graph, Twitter cards, and JSON LD schema
- GDPR compliant Google Analytics and Facebook Pixel with cookie consent banner
- Netlify form with custom success page
- Styled 404 page
- sitemap.xml on build
- Lazy loaded images
- Fade in on reveal animations
- Alias imports for easy folder structuring

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

### Global Styles

Global styles are located in `src/assets/globalStyles`. The `variables` file allows for site-wide style changes including the following:

- text, background, and accent colors
- font families and sizes
- break point sizes
- wrapper widths
- section paddings

### Fonts

Web fonts can be changed in the `gatsby-config.js` file, and then updated in `src/assets/globalStyles/variables`

```javascript
{
   resolve: 'gatsby-plugin-web-font-loader',
   options: {
      google: {
         families: ['Sacramento', 'Kumbh Sans:400'],
      },
   },
},
```

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

The SEO component is located in `src/components/global/seo.js`.

The default info can be customized in `siteMetadata` in the `gatsby-config.js` file.

```javascript
siteMetadata: {
    title: `Default page title`,
    description: `Default meta description`,
    author: `Your Name`,
    creator: `@UR_Twitter`, // Your Twitter handle
    siteUrl: `https://yourwebsite.com/`
}
```

The image for the large summary card is located in the `src/assets/images` folder, and is pulled in with a static query.

All fields can be edited on a page-by-page basis with props.

```javascript
<SEO title='New Title Here' description='New example description.' />
```

### Analytics

:warning: To start using analytics, you will need your Google Analytics tracking ID and/or Facebook Pixel ID.

1. **Add tracking ID to gatsby-config.js file**

   ```javascript
   googleAnalytics: {
     trackingId: 'UA-thisisatest', // ID goes here. Leave empty if you want to disable the tracker
     cookieName: 'gatsby-gdpr-google-analytics',
     anonymize: true // default
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

- [ ] Update config siteMetadata
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
