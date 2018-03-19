---
layout: post
title: "💎 gem haskii 👋 🖖 🍒 🍀 🦁 💎"
date: 2018-03-18
excerpt: "Simple gem created while exercising TDD in Ruby"
project: true
tags: [ruby, cli, tdd, emoji]
comments: true
---

**Haskiii** is a simple CLI built as an exercise on TDD.

It is a Ruby gem. If you'd like to take a look at repository, it can be found
[here](https://github.com/mimimalizam/haskii).

[![Gem Version](https://badge.fury.io/rb/haskii.svg)](https://badge.fury.io/rb/haskii)
[![Build Status](https://semaphoreci.com/api/v1/mstojadinov/haskii/branches/master/badge.svg)](https://semaphoreci.com/mstojadinov/haskii)

## Usage

```
$ gem install haskii

$ haskii bar 2 4 6 8 6 4 2 1 6 5 4 3 2 1
Your happy bar chart:

   *
   *
  ***   *
  ***   **
 *****  ***
 *****  ****
******* *****
**************

$ haskii bar --emoji 🍀  1 1 2 3 5 2
Your happy bar chart:

    🍀
    🍀
   🍀🍀
  🍀🍀🍀🍀
🍀🍀🍀🍀🍀🍀

$ haskii bar --emoji 🍒  --output chart.html 2 4 6 8 6 4 2 1 6 5 4 3 2 1
Your happy bar chart is in "chart.html"
Terminal still rules :P #igor
```

While having a great time, I've learned that the following command
makes an executable.

```
chmod +x <file-path>
```
