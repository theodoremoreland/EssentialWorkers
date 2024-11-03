# Essential Workers

<img src="/presentation/thumbnail.webp" width="650">

[View the application](https://master.d297qlsooqzdtx.amplifyapp.com/)

## Table of contents

[View the application](https://master.d297qlsooqzdtx.amplifyapp.com/)

- [Overview](#overview)
- [Technologies used](#technologies-used)
- [Screenshots](#screenshots)

## Overview

This repository is a fork, update, and redesign to `Saint Louis Regional Data Alliance's` [essential-workers](https://github.com/stlrda/essential-workers), which is a webpage illustrating demographic profiles (2018) of essential workers across Saint Louis, Missouri, and Illinois.

I was one of a few developers on the original project. It was actually my first attempt at a responsive webpage. I decided to update the webpage including, but not limited to the following:

- Updated layout (for simplicity, consistency between mobile and desktop, and overall UX)
- Updated typography (improved consistency, contrast, and overall UX)
- Fixed typos
- Streamlined map controls for changing geography and measure (for improved consistency between mobile and desktop)
- Formatted display of certain numbers (percentages, currencies, large numbers)
- Corrected bugs with data and data tables that resulted in inaccurate values in columns and rows
- Correct bug with `MapBox` implementation that resulted in needless re-renders
- Streamlined styling logic resulting in less code, improved responsiveness, and better performance
- Updated codebase to `React` 18
- Migrated from `CRA` to `Vite` for faster build times
- Removed deprecated `mdbreactbootstrap` library and replaced with default HTML table elements
- Removed deprecated `Material UI` components in favor of `MUI` components
- Removed any layout base uses of `Material UI` in favor of custom CSS
- Now uses `TypeScript`
- Refactors to every file for improved DX
- General redesign relating to colors, font families, and removal of branding

## Technologies used

- TypeScript
- JavaScript
- React
- HTML
- CSS
- Material UI (MUI)
- MapBox
- Docker
- Vite

## Screenshots
