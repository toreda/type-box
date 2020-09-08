# ArmorJS - Key-Value Pair (KVP)

![CI](https://github.com/armorjs/kvp/workflows/CI/badge.svg?branch=master) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=armorjs_kvp&metric=coverage)](https://sonarcloud.io/dashboard?id=armorjs_kvp) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=armorjs_kvp&metric=alert_status)](https://sonarcloud.io/dashboard?id=armorjs_kvp)

`@armorjs/kvp` offers a convenient and typesafe managed key-value pairs. Eliminate excessive type and safety checks with type-safe accessors for key-value pairs and built in parsing.

## Contents

-   [About ArmorJS](#about-armorjs)
-   [Installation](#Installation)
-   [Usage](#usage)
-   [Build](#build)
-   [Testing](#testing)
-   [License](#license)

## About ArmorJS

ArmorJS creates small, performant, and natively typescript NPM packages. 
https://github.com/armorjs/_project-home

## Install

**_With yarn (preferred):_**
`yarn add @armorjs/kvp`

With NPM:
`npm install @armorjs/kvp`

## Usage

### Create a key-value pair
```
import {ArmorKVP}from '@armorjs/kvp';
const initialValue = 'hello';
const fallback = 'goodbye';
const myValue = new ArmorKVP<string>(initialValue, fallback);
```

## Build
First run `yarn` to install repo packages. Then, run the build command.
```
yarn
yarn build
```

## License

[MIT](LICENSE) &copy; Michael Brich