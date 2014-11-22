# qb-export-node

[![Build Status](https://travis-ci.org/waltzofpearls/qb-export-node.svg)](https://travis-ci.org/waltzofpearls/qb-export-node)

QuickBooks Online lists export tool powered by node.js

This is qb-export-node version 0.1.0. By running the CLI script, the tool will fetch
accounts and vendors lists from QuickBooks Online API, and save the lists as xml files.
By default, the lists will be saved to [./exports] folder. Settings can be changed in
[./settings.js] file.

## Getting Started

```shell
~ git clone git@github.com:waltzofpearls/qb-export-node.git
~ cd qb-export-node
~ npm install
```

## Running the CLI Script

```shell
~ npm start
```

## Testing

```shell
~ npm test
```
