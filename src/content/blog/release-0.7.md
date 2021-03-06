+++
title = "Amethyst 0.7 has been released!"
description = "Including new cameras, sprites, better UI and more!"
date = 2018-05-18
aliases = ["/2018/05/18/blog.html"]
+++
> News from `Jan 06 2018` – `May 18 2018`

Amethyst is a data oriented game engine written in Rust with a focus on
parallel execution!
<!-- more -->
## Announcements

We have a new subreddit! [r/amethyst](https://www.reddit.com/r/Amethyst/)

We're happy to announce that we've released Amethyst 0.7.0
to [crates.io](https://crates.io)!

There are 124 pull requests in this release.  If you want to see for yourself
here's a [link][ep]!

[ep]: https://github.com/amethyst/amethyst/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+merged%3A2017-12-29..2018-05-18


## Notable additions

* Support for rendering sprites ([#638]).
* Fly Camera ([#578]).
* UI Layouts ([#591]).
* UI Events ([#580]).
* Introduce a generic animation system, with support for both transform and texture animation ([#558]), ([#566]), ([#567]), ([#569]), ([#570]), ([#611]), ([#641]), ([#644])
* Add transparency support to core passes ([#543]), ([#574]), ([#584])
* Add vertex skinning ([#545]), ([#619])
* Expose a basic visibility ordering system, with the ability to swap in better replacement systems ([#595])
* Audio `Output` is now added directly rather than as an `Option`, should now be fetched with `Option<Read<'a, Output>>` ([#679])
* New nightly feature that enables `shred`s nightly feature ([#689])
* `Transform` refactored, and added lots of utility functions ([#660])
* Add new raw mouse events for use with camera rotation ([#699])
* Add UiButtons and UiButtonBuilder ([#613])
* Add arc ball camera ([#700])


[#580]: https://github.com/amethyst/amethyst/pull/580
[#591]: https://github.com/amethyst/amethyst/pull/591
[#578]: https://github.com/amethyst/amethyst/pull/578
[#638]: https://github.com/amethyst/amethyst/pull/638
[#545]: https://github.com/amethyst/amethyst/pull/545
[#558]: https://github.com/amethyst/amethyst/pull/558
[#566]: https://github.com/amethyst/amethyst/pull/566
[#567]: https://github.com/amethyst/amethyst/pull/567
[#569]: https://github.com/amethyst/amethyst/pull/569
[#570]: https://github.com/amethyst/amethyst/pull/570
[#611]: https://github.com/amethyst/amethyst/pull/611
[#641]: https://github.com/amethyst/amethyst/pull/641
[#644]: https://github.com/amethyst/amethyst/pull/644
[#543]: https://github.com/amethyst/amethyst/pull/543
[#574]: https://github.com/amethyst/amethyst/pull/574
[#584]: https://github.com/amethyst/amethyst/pull/584
[#595]: https://github.com/amethyst/amethyst/pull/595
[#660]: https://github.com/amethyst/amethyst/pull/660
[#689]: https://github.com/amethyst/amethyst/pull/689
[#699]: https://github.com/amethyst/amethyst/pull/699
[#613]: https://github.com/amethyst/amethyst/pull/613
[#619]: https://github.com/amethyst/amethyst/pull/619
[#700]: https://github.com/amethyst/amethyst/pull/700

## Work in progress

* Prefab loading ([#716])
* Networking ([#665])
* Localisation wrapper ([#663])

[#716]: https://github.com/amethyst/amethyst/pull/716
[#665]: https://github.com/amethyst/amethyst/pull/665
[#663]: https://github.com/amethyst/amethyst/pull/663

## Major breaking changes

* Update dependencies to the newest versions: cgmath, winit, glutin, gfx, gfx_glyph ([#527]), ([#572]), ([#648])
* Rodio updated to 0.7 ([#676])
* Refactored bundles to only contain `System`s ([#675])
* Refactor to use new specs, major breakage! ([#674]), ([#679]), ([#683]), ([#662]).
* Upgrade to winit 1.13.1 ([#698])
* Refactor game data, permit greater extensibility ([#691])

[#527]: https://github.com/amethyst/amethyst/pull/527
[#572]: https://github.com/amethyst/amethyst/pull/572
[#648]: https://github.com/amethyst/amethyst/pull/648
[#675]: https://github.com/amethyst/amethyst/pull/675
[#676]: https://github.com/amethyst/amethyst/pull/676
[#674]: https://github.com/amethyst/amethyst/pull/674
[#679]: https://github.com/amethyst/amethyst/pull/679
[#683]: https://github.com/amethyst/amethyst/pull/683
[#662]: https://github.com/amethyst/amethyst/pull/662
[#698]: https://github.com/amethyst/amethyst/pull/698
[#691]: https://github.com/amethyst/amethyst/pull/691

## New contributors from this release

The following new contributors helped make this release happen:

* [@futurepaul](https://github.com/futurepaul)
* [@azriel91](https://github.com/azriel91)
* [@zoonage](https://github.com/zoonage)
* [@JadeSnail](https://github.com/JadeSnail)
* [@KotBlini](https://github.com/KotBlini)
* [@illis](https://github.com/illis)
* [@MrMinimal](https://github.com/MrMinimal)
* [@akatechis](https://github.com/akatechis)
* [@frazar](https://github.com/frazar)
* [@mubiquity](https://github.com/mubiquity)
* [@cooperra](https://github.com/cooperra)
* [@Lukazoid](https://github.com/Lukazoid)
* [@ShalokShalom](https://github.com/ShalokShalom)
* [@alexlitty](https://github.com/alexlitty)
* [@Moxinilian](https://github.com/Moxinilian)
* [@mnivoliez](https://github.com/mnivoliez)
* [@Hittherhod](https://github.com/Hittherhod)

## Calls for participation

We've opened a few issues that we think are good for first time contributors,
take a look at the issues on this list and see if any are a good fit for you!

* [#714](https://github.com/amethyst/amethyst/issues/714)
* [#686](https://github.com/amethyst/amethyst/issues/686)
* [#669](https://github.com/amethyst/amethyst/issues/669)
* [#582](https://github.com/amethyst/amethyst/issues/582)


If you have any suggestions or ideas for Amethyst or the blog, feel free to voice them
[on GitHub][gh], [the Gitter chat][gc], or [Discord][di]!

[gh]: https://github.com/amethyst/website
[gc]: https://gitter.im/orgs/amethyst/rooms
[di]: https://discord.gg/amethyst