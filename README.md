# Essential Workers

<img src="/presentation/thumbnail.webp" width="650">

[View the application](https://master.d1gzfx9o22abaw.amplifyapp.com/)

## Table of contents

[View the original codebase](https://github.com/stlrda/essential-workers)

-   [Overview](#overview)
-   [Technologies used](#technologies-used)

## Overview

An analysis for essential workers in Saint Louis, Missouri, and Illinois.

This repository is a fork, update, and redesign to `Saint Louis Regional Data Alliance's` [essential-workers](https://github.com/stlrda/essential-workers), which is a webpage illustrating demographic profiles (2018) of essential workers across Saint Louis, Missouri, and Illinois.

I was one of a few developers on the original project back in 2020. At the time, it was my first attempt at a professional webpage (React based or otherwise) and responsive design. Since then, I decided to update the webpage including, but not limited to the following:

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
