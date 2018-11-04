
<p align="center"><img src="http://arggh.github.io/blaze-teleport/images/teleport@2x.png" width="150"/>
<h1 align="center">Teleport for Meteor's Blaze</h1>
</p>

**Teleport** renders your Blaze templates wherever you feel like!

```handlebars
<div class="some-deeply-nested-div">
  {{#Teleport destination='body'}}
    <h2>I will be rendered in document's body</h2>
  {{/Teleport}}
</div>
```

- Render stuff outside of your app's DOM tree.
- Handy for preventing style cascade or glitches with layering.
- Great for modals or dialogs.
- Tiny footprint. Well below 1kB compiled and minified.
- Has a logo.

## How to install

```bash
$ meteor add arggh:teleport
```

## How to use

**Teleport** will register a new Blaze template that is used as a block helper. Anything you put inside it will get magically teleported to the requested destination.

```handlebars
<template name="foo">
  {{#Teleport destination=target}}
    {{> TextBox content="bar"}}
  {{/Teleport}}
</template>
```

`destination` is optional and defaults to `document.body`. If provided, it should be either a DOM Element or a CSS selector.

```handlebars
<template name="modal">
  {{#Teleport destination='.fixed'}}
    <h1>I will end up inside .fixed</h1>
  {{/Teleport}}
</template>
```

```handlebars
<template name="tooltip">
  {{#Teleport destination=targetElement}}
    <h1>I will end up inside whatever is targetElement</h1>
  {{/Teleport}}
</template>
```

```handlebars
<template name="popover">
  {{#Teleport ''}}
    <h1>I will end up inside document.body</h1>
  {{/Teleport}}
</template>
```

## License

Teleport is released under the [MIT License](http://opensource.org/licenses/MIT).