# gatsby-starter-wyoming

This is a Gatsby.js V2 starter template with additional plugins and components 
This starter was built specifically to get **small business websites** up and running fast with Gatsby. 

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

### Or, quickly deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/stormcloud266/gatsby-starter-wyoming)

## Customizations

### Styles
All styles are in the `src/assets/styles` directory.

The `src/assets/styles/absctracts/_variable.scss` contains variables to make sitewide color and font family change. 

### Form
Form name defaults to "contact" but can be changed through the name prop. This allows you to use the same component for multiple forms while differentiating them in Netlify Forms

    ```js
    <Form name={"application"} />
    ```

## License


## Support

If you've enjoyed using this starter and would like to show support monetarily, you can buy me a coffee here.

<a href="https://www.buymeacoffee.com/tawnee" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" height="41" width="174"></a>
