# Essential Workers

An interactive map and data tables displaying 2018 demographic data including metrics like media income, GDP, and unemployment rates across Saint Louis, Missouri, and Illinois.

<img src="/presentation/thumbnail.webp" width="650">

[View the application](https://essential-workers.theodoremoreland.dev)

## Table of contents

[View the original codebase](https://github.com/stlrda/essential-workers)

-   [Overview](#overview)
-   [Technologies used](#technologies-used)
-   [Screenshots](#screenshots)
    -   [Desktop](#desktop)
    -   [Mobile](#mobile)

## Overview

An analysis for essential workers in Saint Louis, Missouri, and Illinois. Results are then displayed on an interactive map (via Mapbox) and various data tables.

This repository is a _detached fork_, update, and redesign to `Saint Louis Regional Data Alliance's` [essential-workers](https://github.com/stlrda/essential-workers), which is a webpage illustrating demographic profiles (2018) of essential workers across Saint Louis, Missouri, and Illinois.

I was one of a few developers on the original project back in 2020. It was my first attempt at a professional webpage (React based or otherwise) and responsive design. The intention of this fork was to update the original in the following ways:

-   Updated layout (for simplicity, consistency between mobile and desktop, and overall UX)
-   Updated typography (improved consistency, contrast, and overall UX)
-   Fixed typos
-   Streamlined map controls for changing geography and measure (for improved consistency between mobile and desktop)
-   Formatted display of certain numbers (percentages, currencies, large numbers)
-   Corrected bugs with data and data tables that resulted in inaccurate values in columns and rows
-   Correct bug with `MapBox` implementation that resulted in needless re-renders
-   Streamlined styling logic resulting in less code, improved responsiveness, and better performance
-   Updated `React` from `^16.13.1` to `^18.3.1`
-   Updated `mapbox-gl` from `^1.12.0` to `^3.7.0`
-   Migrated from `CRA` to `Vite` for faster build times
-   Removed deprecated `mdbreact` and `react-data-table-component` libraries and replaced with default HTML table elements
-   Removed `react-map-gl` dependency
-   Removed deprecated `Material UI` components in favor of `MUI` components
-   Removed any layout based uses of `Material UI` in favor of custom CSS
-   Now uses `TypeScript`
-   Refactors to every file for improved DX
-   Replaced hero image
-   General redesign relating to colors, wording, and removal of branding
-   Added favicon

## Technologies used

-   TypeScript
-   JavaScript
-   React
-   HTML
-   CSS
-   Material UI (MUI)
-   MapBox
-   Docker
-   Vite

## Screenshots

### Desktop

#### Default view (hero image)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/1.png" width="650">

#### Default map view (Saint Louis - GDP)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/2.png" width="650">

#### Default map view county tooltip

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/3.png" width="650">

#### Measure dropdown

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/4.png" width="650">

#### Map view (Measure - Labor Force)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/5.png" width="650">

#### Map view (Measure - Unemployment Rate)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/6.png" width="650">

#### Map view (Measure - Media Income Essential Workers)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/7.png" width="650">

#### Map view (Measure - Frontline Industry Rate)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/8.png" width="650">

#### Geography dropdown

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/9.png" width="650">

#### Map view (Missouri - GDP)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/10.png" width="650">

#### Map view (Illinois - GDP)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/11.png" width="650">

#### Top of table (Saint Louis)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/12.png" width="650">

#### Bottom of table (Saint Louis)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/13.png" width="650">

#### Top of table (Missouri)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/14.png" width="650">

#### Bottom of table (Missouri)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/15.png" width="650">

#### Table (Illinois)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/16.png" width="650">

#### Methodology and Footer

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/17.png" width="650">

### Mobile

#### Default view (hero image)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/18.png" width="250">

#### Scrolled down

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/19.png" width="250">

#### Default map view (Saint Louis - GDP)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/20.png" width="250">

#### Measure dropdown

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/21.png" width="250">

#### Map view (Saint Louis - Labor Force)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/22.png" width="250">

#### Map view (Saint Louis - Unemployment Rate)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/23.png" width="250">

#### Map view (Saint Louis - Median Income)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/24.png" width="250">

#### Map view (Saint Louis - Unemployment Rate)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/25.png" width="250">

#### Geography dropdown

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/26.png" width="250">

#### Map view (Missouri - Unemployment Rate)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/27.png" width="250">

#### Map view (Illinois - Unemployment Rate)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/28.png" width="250">

#### Top of table (Saint Louis)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/29.png" width="250">

#### Top of table (Saint Louis) 2

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/30.png" width="250">

#### Bottom of table (Saint Louis)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/31.png" width="250">

#### Top of table (Missouri)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/32.png" width="250">

#### Bottom of table (Missouri)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/33.png" width="250">

#### Top of table (Illinois)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/34.png" width="250">

#### Bottom of table (Illinois)

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/35.png" width="250">

#### Top of methodology

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/36.png" width="250">

#### Bottom of methodology and Footer

<img src="https://dj8eg5xs13hf6.cloudfront.net/essential-workers/37.png" width="250">
