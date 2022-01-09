This is an unofficial [Prettier](https://github.com/prettier/prettier) plugin for formatting [Twig](https://twig.symfony.com) language.  
Combines features of [Melody plugin](https://github.com/trivago/prettier-plugin-twig-melody) and these [enhancements](https://github.com/mubaraqwahab/prettier-plugin-twig-enhancements), and wraps the plugin for easier installation.

### Install
- This plugin works with Prettier installed globally
- If you don't have any official Prettier plugin installed currently, just create a folder named `@prettier` inside your global node_modules directory
for example: `~/.nvm/versions/node/v16.13.0/lib/node_modules/@prettier/` on OSX.
- Copy the `plugin-twig` from repository into this folder. Prettier will automatically recognize and register the plugin, like it would normally do with official ones.
- Then just run the `npm install` inside the plugin folder and you're set up.

### Usage
```
prettier --write "**/*.twig"
```

### Options
To configure the plugin behaviour, check available [options](https://github.com/trivago/prettier-plugin-twig-melody#options), these can be put into the `.prettierrc` config file.
