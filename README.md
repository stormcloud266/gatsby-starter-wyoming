# gatsby-starter-wyoming

This is a Gatsby.js V2 starter template designed with **small business website** projects in mind. It is a fully-responsive, one-page site with a contact form, SEO, and GDPR-compliant FB Pixel and Google Analytics integration to help get small business websites up and running fast with Gatsby. 

## Preview

[Visit Site](https://gatsby-starter-wyoming.netlify.app/)

![](https://github.com/stormcloud266/gatsby-starter-wyoming/blob/master/screenshot.gif)

## Overview

This starter is based on [Gatsby Starter Default](https://github.com/gatsbyjs/gatsby-starter-default) and comes with all the default plugins.

**Features**
* SCSS integration, folder structure, and file imports
* Full responsive design
* Responsive header component with desktop and mobile nav
* SEO component with open graph, Twitter cards, and JSON LD schema
* GDPR compliant Google Analytics and Facebook Pixel with cookie consent banner
* Netlify form with custom success page
* Mobile development command
* Robots.txt and sitemap.xml on build
* Offline support
* Lazy loaded images and background images

**Additional Plugins**
* [gatsby-plugin-sass](https://www.gatsbyjs.com/plugins/gatsby-plugin-sass/)
* [node-sass](https://www.npmjs.com/package/node-sass)
* [gatsby-background-image](https://www.gatsbyjs.com/plugins/gatsby-background-image/)
* [gatsby-plugin-web-font-loader](https://www.gatsbyjs.com/plugins/gatsby-plugin-web-font-loader/)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [gatsby-plugin-sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/)
* [gatsby-plugin-robots-txt](https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/)
* [gatsby-plugin-gdpr-cookies](https://www.gatsbyjs.com/plugins/gatsby-plugin-gdpr-cookies/)
* [react-cookie-consent](https://www.npmjs.com/package/react-cookie-consent)
* [gatsby-plugin-alias-imports](https://www.gatsbyjs.com/plugins/gatsby-plugin-alias-imports/)

## Quick Start

### Install using the command line
:warning: You will need [Node](https://nodejs.org/en/) and [Gatsby](https://www.gatsbyjs.com/docs/quick-start/) installed.

1. **Create a Wyoming Gatsby project.**

    ```sh
    gatsby new wyoming-project https://github.com/stormcloud266/gatsby-starter-wyoming
    ```

2. **Move Into Your New Project's Directory**

    ```sh
    cd wyoming-project
    ```

2. **Start Developing**

    ```sh
    gatsby develop
    ```

## Customizations

### Styles
All styles are in the `src/assets/styles` directory.

The `src/assets/styles/abstracts/_variable.scss` contains variables to make sitewide color and font family change.

### Form
Form name defaults to "contact" but can be changed through the name prop. This allows you to use the same component for multiple forms while differentiating them in Netlify Forms

```javascript
<Form name={"application"} />
```

### SEO
The SEO component is located in `src/components/seo.js`. 

The default info can be customized in "siteMetadata" in the `gatsby-config.js` file. The large summary image is located in the `static` folder, and is pulled in with a static query. 

All of the fields can be edit on a page-by-page basis with props.

```javascript
<SEO 
  title="Home"
  description="My example description"
/>
```
### Analytics
:warning: To start using analytics, you will need your Google Analytics tracking ID and/or Facebook Pixel ID.

1. **Add tracking ID to gatsby-config.js file**

      ```json
      googleAnalytics: {
        trackingId: 'UA-thisisatest', // leave empty if you want to disable the tracker
        cookieName: 'gatsby-gdpr-google-analytics', // default
        anonymize: true // default
      },
      ```

2. **Add cookingName to cookieBanner.js**
In `src/components/cookieBanner.js` the CookieConsent component has a prop named "cookieName." The value of this prop should match the cookieName in your gatsby-config.

      ```javascript
      cookieName="gatsby-gdpr-google-analytics"
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
In your `src/components/layout.js` import the cookieBanner component.

      ```javascript
      import CookieBanner from "@components/cookieBanner"

      const Layout = ({ children }) => (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </>
      )
      ```

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/stormcloud266/gatsby-starter-wyoming/blob/master/LICENSE) file for more details.


## Support

If you've enjoyed using this starter and would like to show support monetarily, you can buy me a coffee here.

<a href="https://www.buymeacoffee.com/tawnee" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" height="41" width="174"></a>
