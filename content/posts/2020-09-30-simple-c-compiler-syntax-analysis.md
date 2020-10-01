---
template: post
title: Simple C Compiler - Syntax Analysis
slug: /posts/simple-c-compiler-syntax-analysis
draft: false
priority: 10
date: 2020-10-01T1:55:00.000Z
description: |-
  I worked on syntax analysis for my Simple C Compiler
category: programming
tags:
  - C++
  - compilers
---

This month, I decided to go back and work on my Simple C Compiler project. It's a project where I make a compiler that would compile a simple form of C. Previously, I have already finished lexical analysis, where the compiler would take some files written in the source language, and parse them into lexical tokens. Now, I'm working on syntax analysis, where I would take the stream of lexical tokens I have, and make an abstract syntax tree (AST) out of it, and analyze the actual form (the syntax) of the given lexical tokens, and see if they match up with the forms that are defined in the given source language.

I first created the foundation for this phase, which is making all the classes for my AST, and I made great use of inheritance so I can take advantage of polymorphism down the line. I have also implemented the visitor design pattern for me to pass in an AST Printer visitor object so it can print the AST, and I will be able to test it. This setup will also be vital for semantic analysis, when I get to that. I'm currently trying to implement my parser, and I have gone with the top-down recursive descent parser. This means that I will be parsing the tokens from top down and hypothesizing what syntax some code is taking, but I will be doing some lookahead to prevent backtracking, in order to improve efficiency.

You can check out the source code for my compiler [here](https://github.com/Playjasb2/Simple-C-Compiler).

This is all I want to say for this month. I will see you all in my next blog post! 🙂
