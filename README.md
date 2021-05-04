# Single Page Applications

## The Fantastic People's Awards 2021

In this excercise, we'll be building the voting website for the fantastic people's awards 2021. We want to build an app that can retrieve all of the nominees from our API, and give a user the ability to vote on who their favourite person is.

The server is already finished, so we just need to work on the front end HTML. To do this, we will be building a **single page application**

## Learning Objectives 

- I can explain what a single page application is
- I can explain how the request, response and update cycle works with Javascript and HTML
- I can build a single page application
- I can build re-usable UI components

## Overview

This repo contains two directories: `app` and `example`

The example directory is a fully implemented version of the single page app we're building today.

The app directory is just the node server we'll be starting from to build the single page application with no front end yet.

## How to Run

1. `cd app` or `cd example` depending on which you want to run
2. Run `yarn` to install dependencies
3. Run `node index.js` to start the server
4. Visit `localhost:3000` in your browser to see the app

## User Stories
```
As a user
So that I can view the voting status
I can see a list of nominees with how many votes each has received
```
```
As a user
So that I can participate in the vote
I can vote for a nominee
```