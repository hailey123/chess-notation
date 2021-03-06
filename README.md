[![Build Status](https://travis-ci.com/hailey123/chess-notation.svg?branch=master)](https://travis-ci.com/hailey123/chess-notation)
[![Coverage Status](https://coveralls.io/repos/github/hailey123/chess-notation/badge.svg?branch=master)](https://coveralls.io/github/hailey123/chess-notation?branch=master)

# Chess Notation

A single player game to help you learn chess notation.

![](public/chess-notation-demo.gif)

## How to Play

1. Press the START button.
2. Click as many correct squares on the chess board as possible. The current target square is displayed above the board, in the middle.
3. Your score is the total correct clicks you make before your time runs out. The goal is to achieve the highest score possible.
4. For each incorrect square clicked, 3 seconds will be subtracted from the clock!

## Development

### Build & Run

```
npm install
npm start
```

### Test

#### From Terminal

```
npm test
```
To see a code coverage report:

```
npm run test:coverage
```

#### Debug Tests in VS Code

1. Set desired breakpoints in code by hovering your mouse to the left of the desired line number and clicking when a red circle appears.
2. Open the debug panel on the left-hand side of the window.
3. Make sure the `vscode-jest-tests` configuration is selected in the dropdown at the top.
4. Press the play button to run tests. Any breakpoints should be hit during execution.
