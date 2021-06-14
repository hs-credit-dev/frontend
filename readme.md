# HS Credit - App Development
## Big Questions

* What to use? [React](https://github.com/facebook/react) / [Flutter](https://github.com/flutter/flutter) / [React Native](https://github.com/facebook/react-native)
    - We have some experience in React and React Native, but if we look at the [link](https://hackr.io/blog/react-native-vs-flutter) Nadav sent, it looks like flutter is the development platform of the future, even though it isn't yet the easiest to work with.
    - There were also points that React could be convertable to flutter in the future.
    - Starting fresh with a new language like Dart is a huge task.
    - Do we need the extra performance from Flutter in this project? What if we use React and try to minimize asset sizes and use light components?

* In terms of backend, we will use [Django](https://www.djangoproject.com/).
With experience from Mocha, Sophia and Leo, this is propably the best choice.
* [Wireframes in Figma](https://www.figma.com/file/5jYXuLg6KU8PjFE07ZJFwM/HSC-APP?node-id=0%3A1)
* Do we want to use Scrum for the project management? Weekly meetings on Tuesdays at 18:00 Helsinki time, maybe another 15 minute meeting on Thursdays, same time?
* ntNFT: How to implement NFT's without using blockchain? Should we use blockchain? Is this an incentive for students to create when they have a chance to sell their work as NFT after receiving credits for it?
* We need to decide who will be in charge of the database and it's integration into the platform.


---
# hs.credit: A Peer-to-Peer Electronic High School Transcript
## The hs.credit app is a decentralized high school transcript platform. A platform is defined as a collection of networks connected through an interface. 

## Those interacting networks are:
- Students who produce 10-minute media segments no more than one time per calendar
month
- Credit Studios who define individual credits on the platform and generate quality youth
media
- Catalyst who works with a student on the audio editing / video editing to earn a credit
- Credit Experts who evaluate incoming work for specific credits; credit experts are
promoted to that role after serving as effective catalysts for the given credit
- Faculty who represent institutions (universities, high schools, districts, The College
Board) and who give their stamp of approval to specific credits or credit studios

- Viewers / API Users who are parents or universities or school districts who are
interested in viewing the youth media and related academic data
---
* It helps to think about hs.credit as a wallet of ntNFT’s EVEN THOUGH no blockchain tech will be
included in the initial proof of concept (centralized databases will be used).
---
# Core functions
## Browser

* To browse ntNFT’s as streams (user profile is a stream whether it is a
catalyst or student or credit, search results are a stream, schools are even streams of
ntNFTs on this platform). Each stream has unique meta-data but they all share the
common focus on the youth media represented.
(A stream is just a sorted collection of ntNFT’s)
## Viewer
* to view an individual assets (i.e. a media viewer that can handle video or
audio if a user clicks on one ntNFT in a stream)
## Publisher
* these are the tools used during the creation of an ntNFT starting with a
student initiating a credit for a particular calendar month and ending with a
committee of three credit experts giving the final asset a 0 or 1 grade.
