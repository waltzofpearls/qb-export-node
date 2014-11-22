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

You may need to run installation script as root if some of the dependencies are required
to be installed globally, then just simple run

```shell
~ sudo npm install
```

## Running the CLI Script

```shell
~ npm start
```

## Testing

This tool uses jasmine-node as testing framework. If you don't have it installed, then run

```shell
~ sudo npm install -g jasmine-node
```

And then run the following command to test

```shell
~ npm test
```
