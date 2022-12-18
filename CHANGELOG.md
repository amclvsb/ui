<!-- markdownlint-disable --><!-- textlint-disable -->

# 📓 Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.0-beta.2](https://github.com/sanity-io/ui/compare/v1.1.0-beta.1...v1.1.0-beta.2) (2022-12-18)

### Bug Fixes

- **deps:** update dependencies ([bc57783](https://github.com/sanity-io/ui/commit/bc57783f00c30504cba2b409bfd1a7e9a5fd8042))

## [1.1.0-beta.1](https://github.com/sanity-io/ui/compare/v1.0.1...v1.1.0-beta.1) (2022-12-18)

### Features

- convert to ES package ([98ebf81](https://github.com/sanity-io/ui/commit/98ebf81935c8b608327264aae6fd4d10f1058f92))

### Bug Fixes

- **deps:** update dependencies ([0dc228d](https://github.com/sanity-io/ui/commit/0dc228d8406b26f0cb1d7e5a9944395b6f252103))

## [1.0.1](https://github.com/sanity-io/ui/compare/v1.0.0...v1.0.1) (2022-12-06)

### Bug Fixes

- **a11y:** add `aria-label` to `TextInput` clear button ([#1020](https://github.com/sanity-io/ui/issues/1020)) ([f226821](https://github.com/sanity-io/ui/commit/f2268212ae8a3e8d87388ee57a56087f1974121d))

## 1.0.0 (2022-11-24)

### ⚠ BREAKING CHANGES

- **ui:** remove deprecated popover props
- **ui:** migrate from `react-popper` to `@floating-ui/react-dom`

### Features

- improve read-only states ([8a4a5ef](https://github.com/sanity-io/ui/commit/8a4a5effc4f8acdcbca99f771e364f95479163df))
- react `18` ([#990](https://github.com/sanity-io/ui/issues/990)) ([8d17405](https://github.com/sanity-io/ui/commit/8d17405e8db09bd21e794b4800af962fcece0204))
- support `'color'` type in `TextInput` component ([21b9e95](https://github.com/sanity-io/ui/commit/21b9e95bd004f96d94044a70c070514f54855d1c))
- **tsdoc-to-portable-text:** initialize `@sanity/tsdoc-to-portable-text` ([68b130d](https://github.com/sanity-io/ui/commit/68b130d865b056be6982b2e90d826487cdfb67e6))
- **ui:** add `__unstable_disableRestoreFocusOnClose` property to `MenuButton` (beta) ([9376241](https://github.com/sanity-io/ui/commit/937624116ba2e62c3d6806c80b860cda98ccac05))
- **ui:** add `Breadcrumbs` component ([1896fe7](https://github.com/sanity-io/ui/commit/1896fe7e0fa9aa18287b8fb4b66dc58144eb8a43))
- **ui:** add `color.input.readOnly` theme value ([a58a503](https://github.com/sanity-io/ui/commit/a58a503ea3776cdcd3f228acfdac5d389d252cbb))
- **ui:** add `data-ui` attribute on `Layer` ([c962766](https://github.com/sanity-io/ui/commit/c962766481ba4e1016b62c7704ac23c7eeefe9ea))
- **ui:** add `gap` property to `Flex` ([264705a](https://github.com/sanity-io/ui/commit/264705ac55b151879ff72996117edd3a054b3673))
- **ui:** add `icon` and `space` properties to `MenuGroup` ([7cf2830](https://github.com/sanity-io/ui/commit/7cf28309e2c710aa255c680a120fca2a9a4bfc92))
- **ui:** add `listBox` and `renderPopover` properties to `Autocomplete` ([bfddeeb](https://github.com/sanity-io/ui/commit/bfddeebe1b402bc1c517db3ccf8254d58bec8cad))
- **ui:** add `padding` property to tooltip ([964c251](https://github.com/sanity-io/ui/commit/964c251c159023795972fc4c2e88f96fe83ada57))
- **ui:** add `pressed` property ([7def820](https://github.com/sanity-io/ui/commit/7def8205ce77e9cd1f7610b2ee30fac37ce93164))
- **ui:** add `rgbToHsl` function ([@internal](https://github.com/internal)) ([31ea14b](https://github.com/sanity-io/ui/commit/31ea14bc65f6136aaedfa836a066e65f20c456c3))
- **ui:** add `scheme` property to `Tooltip` ([0b6fda2](https://github.com/sanity-io/ui/commit/0b6fda2fa6ea34db9b3e0ef23db1744c5caf70e9))
- **ui:** add `textAlign` property to `Button` ([a9358b0](https://github.com/sanity-io/ui/commit/a9358b029d9455502949d73409efd64ea6e0cabc))
- **ui:** add `ThemeLayer` type and property ([d242594](https://github.com/sanity-io/ui/commit/d242594fb494c30ac22153db37777cdfa854163c))
- **ui:** add `useArrayProp` and `useElementSize` hooks ([@beta](https://github.com/beta)) ([e0ee6e2](https://github.com/sanity-io/ui/commit/e0ee6e2e809f4c269c313be2e6ea807fc5b9e22c))
- **ui:** add `useArrayProp` and `useElementSize` hooks ([@beta](https://github.com/beta)) ([bce7a4b](https://github.com/sanity-io/ui/commit/bce7a4be3250d87cbfae8df0122aafa20c0bc1af))
- **ui:** add `useElementRect` hook ([2d94218](https://github.com/sanity-io/ui/commit/2d94218107736fb4949a07f7b84910f65ef991bf))
- **ui:** add `useUnique` hook (internal) ([d9223f5](https://github.com/sanity-io/ui/commit/d9223f50e47aeecdebc0343f6e2ffca61bebd5e0))
- **ui:** add `VirtualList` ([7e1d7d2](https://github.com/sanity-io/ui/commit/7e1d7d2e461e62b767c7975c7542358b03b308e7))
- **ui:** add event handlers to `renderPopover` props ([3d20ae5](https://github.com/sanity-io/ui/commit/3d20ae593927ea3f51dfff98dcc08684fe105b95))
- **ui:** add onClose property to `MenuButton` ([b4a400e](https://github.com/sanity-io/ui/commit/b4a400e2e4af2bb3531881723f3f24a13b55924d))
- **ui:** add option to hide `Dialog` close button ([#871](https://github.com/sanity-io/ui/issues/871)) ([7e8d0e4](https://github.com/sanity-io/ui/commit/7e8d0e44e0fcd32d46682ffa6929320ad943356d))
- **ui:** cap overflowing text in `MenuButton` with ellipsis ([73c9368](https://github.com/sanity-io/ui/commit/73c9368b50d73ceca5c82459b853c68c6948fafe))
- **ui:** deprecate `boundaryElement` property on `PortalProvider` ([18e347b](https://github.com/sanity-io/ui/commit/18e347bf224ea993582c39da573242ccbc27e109))
- **ui:** export `rem` as part of the public API ([0a20dce](https://github.com/sanity-io/ui/commit/0a20dce9094c027498bbfcac83d636d7ce5a4e72))
- **ui:** export `SelectableTone` type ([9b38800](https://github.com/sanity-io/ui/commit/9b388005284f327d483e24bccc2e061010e84a30))
- **ui:** implement `Inline` using `Flex` ([a963765](https://github.com/sanity-io/ui/commit/a963765164402f617e61be61d9ab8b6eab743280))
- **ui:** implement `Stack` using `Flex` ([e3df327](https://github.com/sanity-io/ui/commit/e3df327216c12796c35793f783a9982cc99374c4))
- **ui:** impove theme colors ([0d47c84](https://github.com/sanity-io/ui/commit/0d47c84c9b78e42aea656cfa89126378b63f8603))
- **ui:** improve `SrOnly` typings ([da2c025](https://github.com/sanity-io/ui/commit/da2c0251932d6f66d1455cb0a6e2cfdd79e45d9b))
- **ui:** improve base styles of `Box` ([2dee33d](https://github.com/sanity-io/ui/commit/2dee33d2a26588587c294c456526a36bbfb31901))
- **ui:** improve disabled placeholder color ([fb48edf](https://github.com/sanity-io/ui/commit/fb48edf7c771ec423b1c2d243693d4af8f8b552d))
- **ui:** improve link styling ([03ddef3](https://github.com/sanity-io/ui/commit/03ddef3ad0ddb1917f7fccc481312fbfc8f35c4f))
- **ui:** improve menu focus behavior ([fa3faf0](https://github.com/sanity-io/ui/commit/fa3faf08665a8994ef8d71023130b26e32acec3e))
- **ui:** improve sizing of custom icons ([2227635](https://github.com/sanity-io/ui/commit/22276357bc6991ec46db00a1bec0481d9e62d4be))
- **ui:** optically align text ([9f1b902](https://github.com/sanity-io/ui/commit/9f1b9023003c7f3c7e22d469ece193ad976afbae))
- **ui:** render focus ring on interactive `Card` primitives ([ded1282](https://github.com/sanity-io/ui/commit/ded12825eaefcfed649da3d886030fee52bdffd5))
- **ui:** skeleton components ([#833](https://github.com/sanity-io/ui/issues/833)) ([bad014f](https://github.com/sanity-io/ui/commit/bad014fa834da4d97640e2a3e0204d8ed1067cd6))
- **ui:** support `auto` and `initial` flex values ([38f3d50](https://github.com/sanity-io/ui/commit/38f3d502483a748505b33a920204b2616dd640f6))
- **ui:** support `flex="none"` ([03387ad](https://github.com/sanity-io/ui/commit/03387ade7827d940344a3251c5aee2ac9b2f173c))
- **ui:** support `muted` property on `TreeItem` ([d87322b](https://github.com/sanity-io/ui/commit/d87322b4e774bef5ebf353530913239986562653))
- **ui:** support checkered cards (beta) ([e195bbb](https://github.com/sanity-io/ui/commit/e195bbbf7f7b80e261c4b603700bbd23f2dec724))
- **ui:** support empty tab list children ([7efb8dd](https://github.com/sanity-io/ui/commit/7efb8dd3ce10969493fb7f72d623d3968ccffcd6))
- **ui:** support named portals (beta) ([e06115a](https://github.com/sanity-io/ui/commit/e06115a156ab7f11f2bd0ac8fbc8b054ac41089b))
- **ui:** support nested theme providers ([e63da17](https://github.com/sanity-io/ui/commit/e63da17a21b7077060e026ad0fd208a3d28f97a0))
- **ui:** use `zOffset` as defined in theme ([d474ec4](https://github.com/sanity-io/ui/commit/d474ec4da058ef46b1079d8f234a29f1cbb24c02))
- **ui:** use default cursor on Badge ([91d9ba2](https://github.com/sanity-io/ui/commit/91d9ba218945538b16fbb86622a6eb3a21c86cd7))

### Bug Fixes

- arcade crash issue ([dc21227](https://github.com/sanity-io/ui/commit/dc21227781a0092c669b52cf90e9049eba606d17))
- bug in `useClickOutside` ([d8cbc57](https://github.com/sanity-io/ui/commit/d8cbc5766fff9bacbcb218d80543ab69bffd981c))
- **deps:** update dependencies ([74b8e06](https://github.com/sanity-io/ui/commit/74b8e067d1d45a0266109d35c5e6997808e34a88))
- **deps:** upgrade dependencies ([6aec461](https://github.com/sanity-io/ui/commit/6aec461a8280872fb10aaefdfd8c971b87dd7312))
- disabled inputs clear button and open button in restricted mode ([39bcb1c](https://github.com/sanity-io/ui/commit/39bcb1c35c366f8405c80a2bc4f3caf12dd66485))
- Fixes a specific linux font selection issue in firefox ([1afbfd3](https://github.com/sanity-io/ui/commit/1afbfd37786a1a7b3f4c9d1469b2e518c7f6c197))
- **MenuItem:** add data-disabled to MenuItem when it is disabled ([#971](https://github.com/sanity-io/ui/issues/971)) ([8046f0b](https://github.com/sanity-io/ui/commit/8046f0b414916de9e39de77c03d85ccddf8ca7d1))
- replace `ComponentType` with `ElementType` ([82e5250](https://github.com/sanity-io/ui/commit/82e52500f2d4527f78aae30758bbe99f61806df0))
- revert `"files"` change ([823abb1](https://github.com/sanity-io/ui/commit/823abb1bc9b1f4011d405eeac64b9e217e352908))
- **ui:** add deprecated menu handlers for backwards-compatibility ([4b9f757](https://github.com/sanity-io/ui/commit/4b9f7570cb9c807c106bd29f279aa2f88299a086))
- **ui:** add missing `data-scheme` property ([0078e5e](https://github.com/sanity-io/ui/commit/0078e5e21afb41f6d6f6bc76d5f642ad97d7e2bb))
- **ui:** add space between text and icon ([d17e81d](https://github.com/sanity-io/ui/commit/d17e81da84d94a5e16cd3d76e8700c2d688f3ef2))
- **ui:** avoid dispatching when unchanged ([bdbe140](https://github.com/sanity-io/ui/commit/bdbe1407eb487570b93f67ba8a29061de1293c6d))
- **ui:** call `forceUpdate` in the next tick ([6bd7735](https://github.com/sanity-io/ui/commit/6bd77350786de84984e501127e018098fd2d54ed))
- **ui:** catch error when force updating tooltip popper ([5d55f3a](https://github.com/sanity-io/ui/commit/5d55f3a2f7c5387cfe8bf8159560817ca000128f))
- **ui:** check if error.message is a string before rendering ([#975](https://github.com/sanity-io/ui/issues/975)) ([ff24a0c](https://github.com/sanity-io/ui/commit/ff24a0cbce38055fea3f8958bea779c35779a7ba))
- **ui:** close tooltip when disabling or removing `content` ([e77cbec](https://github.com/sanity-io/ui/commit/e77cbec6362c376fb2565937ba536ae3b22ff223))
- **ui:** disable `altAxis` when combined with ([06a395c](https://github.com/sanity-io/ui/commit/06a395c900eb89865dcd6d4aa831c703b2ad0b48))
- **ui:** disable `width` when `matchReferenceWidth` prop is true ([3a6fd1e](https://github.com/sanity-io/ui/commit/3a6fd1ea5af4e63f8ef36f4688a1a7b9235692a7))
- **ui:** double-check whether the mouse is outside of reference ([090bb17](https://github.com/sanity-io/ui/commit/090bb17c91cac1d2d7e7480a60ccef198445b605))
- **ui:** export `ThemeLayer` interface ([c583ae2](https://github.com/sanity-io/ui/commit/c583ae243f77d9391fa2a1c1fe3bb31678e47156))
- **ui:** fix `as` property typings ([8f07087](https://github.com/sanity-io/ui/commit/8f07087ceccdefbaf5f4ce2762d940c2101ed640))
- **ui:** fix `label` property type of `Tab` ([1fdc88d](https://github.com/sanity-io/ui/commit/1fdc88ddb6c3542314d1734564e89b87b64772a1))
- **ui:** fix `TextInput` theme issue ([a2cc9af](https://github.com/sanity-io/ui/commit/a2cc9af4faf0719070cf29e8708238b91002fd23))
- **ui:** fix issue with text input border property ([b56a0c3](https://github.com/sanity-io/ui/commit/b56a0c35a2d9b0acf7fba4c8a3133aa675ca86a5))
- **ui:** fix issues with `size` middleware ([278a1d7](https://github.com/sanity-io/ui/commit/278a1d7b96792388ea97c43ab6bc240b45fd85e9))
- **ui:** fix menu helper ([bd223ed](https://github.com/sanity-io/ui/commit/bd223ed4770c6affbb875b54148a9adabba1973b))
- **ui:** fix monospace font in studio theme ([71ae4b3](https://github.com/sanity-io/ui/commit/71ae4b34efd0032af1f3a0b3c9645715201faefa))
- **ui:** fix popover behavior (Safari) ([aef5cbe](https://github.com/sanity-io/ui/commit/aef5cbe74ce334d7d0ae36a5867bf7aa63f6951a))
- **ui:** fix tone of prefix and suffix ([0dfdb3a](https://github.com/sanity-io/ui/commit/0dfdb3a670ca67db7c32d6003666835581b3562a))
- **ui:** fix typing issue after upgrade ([9c91963](https://github.com/sanity-io/ui/commit/9c919636153db569986986f92d91aabacedc8c3d))
- **ui:** focus the first focusable element in dialogs ([55555e4](https://github.com/sanity-io/ui/commit/55555e4151d5f88ea895d80fb0105d95e93046d1))
- **ui:** hide dialog header in certain situations ([182a5ed](https://github.com/sanity-io/ui/commit/182a5eda82c31291fece6dc19b51717434158499))
- **ui:** hide popover when reference is out of view ([a8c54ee](https://github.com/sanity-io/ui/commit/a8c54ee5fa9fbf15306e2bf19e4727f7e85d50e3))
- **ui:** improve `Autocomplete` open button padding ([2fcb89b](https://github.com/sanity-io/ui/commit/2fcb89b6a072046abacef5322d855367eda0be5e))
- **ui:** improve `constrainSize` behavior ([a8c0ac2](https://github.com/sanity-io/ui/commit/a8c0ac254e8c7c82ee1ef2c23ee47eff14241831))
- **ui:** improve `TextInput` clear button ([784a14e](https://github.com/sanity-io/ui/commit/784a14e87cfa421e308d43aef2c0c1ee530cd203))
- **ui:** improve dark mode shadow colors ([e217b96](https://github.com/sanity-io/ui/commit/e217b9691164f36126e3dc5d95f50b327cdc0a75))
- **ui:** improve placeholder color in read-only inputs ([98064be](https://github.com/sanity-io/ui/commit/98064be69e38b2d7fb065f5a7abded19a1c71e10))
- **ui:** improve popover behavior ([ed0460a](https://github.com/sanity-io/ui/commit/ed0460a9f1e6751c0f2a57ffac1704ec212492c2))
- **ui:** improve props and ref typings ([1444a03](https://github.com/sanity-io/ui/commit/1444a03ddf091e01bfd26fafc1a92552073d7c48))
- **ui:** improve typings of `ButtonProps` ([4b8a26e](https://github.com/sanity-io/ui/commit/4b8a26ea59ac8e3c79530193e0926c12c195cdb7))
- **ui:** improve typings of `SpinnerProps` ([0373075](https://github.com/sanity-io/ui/commit/03730759ef993ee91e5cb444fa20796a4eccf315))
- **ui:** increase specificity to avoid unwanted overrides ([79f765d](https://github.com/sanity-io/ui/commit/79f765d8349c5e362d7ab64b617644e2863000dd))
- **ui:** inherit tone for `Popover` ([eac8845](https://github.com/sanity-io/ui/commit/eac8845b395e2b063742664eb9fb6f5b49989667))
- **ui:** inherit tone in clear button ([5964869](https://github.com/sanity-io/ui/commit/5964869d4bbcf70489655d6fb6ac1aad740a296d))
- **ui:** make `color.selectable` optional for backwards compatibility ([af1d0f3](https://github.com/sanity-io/ui/commit/af1d0f3a895706abcf27ff0aa41f82cfcb6b67af))
- **ui:** make `padding` work for `Button` with `children` ([661ee8f](https://github.com/sanity-io/ui/commit/661ee8fec17bc3b3aa84908ea64c92965aeff470))
- **ui:** make `padding` work for `MenuItem` with `children` ([714d2bc](https://github.com/sanity-io/ui/commit/714d2bc17098453eb140093155471f0f631e1924))
- **ui:** make `skeleton` theme optional for backwards compatibility ([923cb47](https://github.com/sanity-io/ui/commit/923cb473de4148596befb8e39dcb6e6b9379f507))
- **ui:** make sure click events propagate ([ebc6589](https://github.com/sanity-io/ui/commit/ebc658960bdb1465f8e621c9d66046cc5e45fb62))
- **ui:** only publish media index on match ([4c6a13d](https://github.com/sanity-io/ui/commit/4c6a13da6d9175661c5338a9ca329050ec0bf19d))
- **ui:** only render button icon and text when `children` is not provided ([9586280](https://github.com/sanity-io/ui/commit/9586280dc9a45ea1ae1bf3d17125099f72819ba3))
- **ui:** pass remaining props to `<ol>` in `Breadcrumbs` ([13ed7fe](https://github.com/sanity-io/ui/commit/13ed7feebc5e3d9d7abf060974ebdfe012a5be86))
- **ui:** prevent update loops in React v18 ([7c71569](https://github.com/sanity-io/ui/commit/7c71569c52dea82b6a35ad25f8d20745f758127a))
- **ui:** revert `Inline` and `Stack` ([6a65eb8](https://github.com/sanity-io/ui/commit/6a65eb8472b304bbd97dcb35ca0cba1c7663a1ef))
- **ui:** revert breaking change ([efa999c](https://github.com/sanity-io/ui/commit/efa999cb59affd3cd98be7f70ab618e3001c81dc))
- **ui:** set `color-scheme` ([0c15c7d](https://github.com/sanity-io/ui/commit/0c15c7d2f1e062528c616943dba64b38cb20d6ef))
- **ui:** set initial state of `usePrefersDark` ([67dd8d8](https://github.com/sanity-io/ui/commit/67dd8d8313ea504c498aa930cc171f3b073a28a4))
- **ui:** set max-width to popover element ([28b6797](https://github.com/sanity-io/ui/commit/28b6797d5ae307bf4883ab0e6a3613b81a232fbf))
- **ui:** support empty string as `value` property ([5efc0f9](https://github.com/sanity-io/ui/commit/5efc0f95de196c02d9802d4489187f462ce93a3d))
- **ui:** typings of tree components ([a0ac67a](https://github.com/sanity-io/ui/commit/a0ac67a1d204c8aa9c23964d6526b74d6d56e7a4))
- **ui:** use `ref` argument in `AvatarCounter` ([7f56a6e](https://github.com/sanity-io/ui/commit/7f56a6e42e676e00abaf470bc4d496de2ebe02fa))
- **ui:** use `umbra` for backdrop color ([bc9dd40](https://github.com/sanity-io/ui/commit/bc9dd40e971760b995d3f273fdcb0b9bdc4f734d))
- **ui:** use correct type of ref object in `Tree` ([7c9b9c9](https://github.com/sanity-io/ui/commit/7c9b9c95fbb8ca71de96291bde8304d695b0a8c9))

### Code Refactoring

- **ui:** migrate from `react-popper` to `@floating-ui/react-dom` ([6f74a82](https://github.com/sanity-io/ui/commit/6f74a82f1d01df463140b4f84a83a03abcd01cc9))
- **ui:** remove deprecated popover props ([8bf7722](https://github.com/sanity-io/ui/commit/8bf7722fe99edd445b6e2cc7d9297ab434b056c4))

## [1.0.0-beta.35](https://github.com/sanity-io/ui/compare/v1.0.0-beta.34...v1.0.0-beta.35) (2022-11-24)

### Bug Fixes

- **deps:** update dependencies ([74b8e06](https://github.com/sanity-io/ui/commit/74b8e067d1d45a0266109d35c5e6997808e34a88))

## [1.0.0-beta.34](https://github.com/sanity-io/ui/compare/v1.0.0-beta.33...v1.0.0-beta.34) (2022-11-24)

### Bug Fixes

- **deps:** upgrade dependencies ([6aec461](https://github.com/sanity-io/ui/commit/6aec461a8280872fb10aaefdfd8c971b87dd7312))

## [1.0.0-beta.33](https://github.com/sanity-io/ui/compare/v1.0.0-beta.32...v1.0.0-beta.33) (2022-11-24)

### Bug Fixes

- **ui:** fix issues with `size` middleware ([278a1d7](https://github.com/sanity-io/ui/commit/278a1d7b96792388ea97c43ab6bc240b45fd85e9))
