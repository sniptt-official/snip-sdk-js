# Sniptt SDK for JavaScript

[![npm version](https://badge.fury.io/js/%40sniptt%2Fsnip-sdk-js.svg)](https://badge.fury.io/js/%40sniptt%2Fsnip-sdk-js)

> 🔐 A simple developer-friendly CLI for managing secrets

⚠️ Please note that this project is under active development. APIs might change before version 1 is released.

## Table of Contents

*   [Introduction](#introduction)
*   [Getting Started](#getting-started)
*   [License](#license)

## Introduction

[Sniptt](https://sniptt.com) is a secret manager for developers.

The main purpose of Sniptt is to simplify and improve the experience of sharing secrets and credentials between developers and machines.

You can finally say goodbye to 1Password, LastPass, and Dashlane 👋.

## Getting Started

### Install
Install the Sniptt SDK with npm:

```sh
npm install @sniptt/snip-sdk-js
```

### Setup Client

Next, import the module and instantiate a Sniptt client with your API key:

> Need an API key? Generate one by creating a new account using the [`snip-cli`](https://github.com/sniptt-official/snip-cli)):

```typescript
import Sniptt from '@sniptt/snip-sdk-js';

const client = new Sniptt({ apiKey: <YOUR_API_KEY> });
```

## License

This project is under the MIT license.
