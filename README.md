# sanity-plugin-schema-inspector

[Sanity](https://www.sanity.io/) tool plugin for inspecting your schemas. Make life easier for your frontend developers - keep them sane!

<img src="https://github.com/andre-brdoch/sanity-plugin-schema-inspector/blob/master/docs/demo.gif">

<br/>
<br/>

## Getting started

Install with [Sanity CLI](https://www.sanity.io/docs/cli):

`sanity install @andre-brdoch/sanity-plugin-schema-inspector`

A new `Schemas` tab should show in your tools bar. All custom types defined in `schema.js` will be inspectable.

<br/>
<br/>

## Configuration

Configurations can be changed in your Sanity project under `./config/@andre-brdoch/sanity-plugin-schema-inspector.json`

<br/>

### `keysToIgnore`

An array of strings with the keys that should be hidden in the inspector data structure.

**Default**: `["icon"]`

**Example**:
`"keysToIgnore": ["icon", "fieldset", "fieldsets", "preview", "initialValue", "inputComponent"]`

This will remove several keys from the inspector data structure that are not important when building your frontend.

<br/>

### `typesToIgnore`

An array of strings with the names of types that should not be inspectable.

**Example**: `typesToIgnore: ["faq"]`

<br/>
<br/>

## Features

- inspect custom schema types
- type definitions are linked
- download selected schema as JSON
- copy name by clicking `name` value
- routing

<img src="https://github.com/andre-brdoch/sanity-plugin-schema-inspector/blob/master/docs/overview.png">

<img src="https://github.com/andre-brdoch/sanity-plugin-schema-inspector/blob/master/docs/inspector.png">

<br/>
<br/>

## Todos

- add option for resolving the complete data model, instead of just linking to the other types

<br/>
<br/>

## Known Issues

- When navigating from other tools to the inspector, a reload is sometimes required
