# Ceos project

## Getting started

### development environment

- PHP 8.1.0
- Symfony CLI version 5.4.5
- Symfony 6.0.7 (env: dev, debug: true)

### Initialization

- `symfony server:start`
- `yarn encore dev --watch`

## Bundles

### liip imagine

- Remove the cache folder
  `php bin/console liip:imagine:cache:remove`

- Add manualy a pics with all filters
  `php bin/console liip:imagine:cache:resolve` + the filePath

## Code Standard

### Php fixer PSR12

- `phpcs -v --standard=PSR12 --ignore=./src/Kernel.php ./src`
- `phpcbf -v --standard=PSR12 --ignore=./src/Kernel.php ./src`

### Twig Cs Fixer

https://opensourcelibs.com/lib/twig-cs-fixer

```bash
composer require --dev vincentlanglet/twig-cs-fixer
```

- `bin/twig-cs-fixer lint /path/to/code`
- `bin/twig-cs-fixer lint --fix /path/to/code`

### eslint scss

`npx stylelint "assets/**/*.scss"`
add --fix for fixes errors 


### eslint js

`npx eslint assets/**/*.js`
add --fix for fixes errors 


## Bank image

### peixel

`https://www.pexels.com/fr-fr/photo/personne-pointant-sur-l-ecran-d-un-ordinateur-portable-313691/`

## Template

### Code pen

#### Navabar

`https://codepen.io/albizan/pen/mMWdWZ`

#### Button hover

`https://codepen.io/woolandcotton/pen/mBmLwq`
