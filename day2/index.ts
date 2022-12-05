import { linesGenerator } from "../utils/index.ts"

enum SCORE_BY_DECISION {
    ROCK = 1,
    PAPER = 2,
    SCISSORS = 3,
}

enum SCORE_BY_OUTCOME {
    LOST = 0,
    DRAW = 3,
    WIN = 6,
}

const STRATEGY_ASSUMPTIONS = {
    'A': SCORE_BY_DECISION.ROCK,
    'B': SCORE_BY_DECISION.PAPER,
    'C': SCORE_BY_DECISION.SCISSORS,
    // GUESSING PART
    'X': SCORE_BY_DECISION.ROCK,
    'Y': SCORE_BY_DECISION.PAPER,
    'Z': SCORE_BY_DECISION.SCISSORS,
}

const ELF_STRATEGY_SUGGESTION_GUESS = {
    'A': 'B', // Y v1
    'B': 'A', // X
    'C': 'C', // Z
}

const ELF_STRATEGY_SUGGESTION = {
    'A': 'A', // Y v2
    'B': 'A', // X v2
    'C': 'A', // Z v2
}

function calculateOutcome({ oponent, gamer }: { oponent: SCORE_BY_DECISION, gamer: SCORE_BY_DECISION }): SCORE_BY_OUTCOME {
    if (oponent === gamer) return SCORE_BY_OUTCOME.DRAW
    if (gamer === SCORE_BY_DECISION.PAPER && oponent === SCORE_BY_DECISION.ROCK) return SCORE_BY_OUTCOME.WIN
    if (gamer === SCORE_BY_DECISION.SCISSORS && oponent === SCORE_BY_DECISION.PAPER) return SCORE_BY_OUTCOME.WIN
    if (gamer === SCORE_BY_DECISION.ROCK && oponent === SCORE_BY_DECISION.SCISSORS) return SCORE_BY_OUTCOME.WIN
    return SCORE_BY_OUTCOME.LOST
}

let howItIsSum = 0
let guessStrategyGamingSum = 0
let strategyGamingSum = 0

for await (const [index, line] of linesGenerator({ filePath: "day2/input" })) {
    const [oponent, gamer] = line.split(' ').map((x) => STRATEGY_ASSUMPTIONS[x as keyof typeof STRATEGY_ASSUMPTIONS])
    const lineCalc = calculateOutcome({ oponent, gamer })
    howItIsSum += lineCalc + gamer

    const guessStrategyGamer = STRATEGY_ASSUMPTIONS[
        ELF_STRATEGY_SUGGESTION_GUESS[line.split(' ')[0] as 'A' | 'B' | 'C'] as keyof typeof STRATEGY_ASSUMPTIONS
    ]
    const guessStrategyCalc = calculateOutcome({ oponent, gamer: guessStrategyGamer })
    guessStrategyGamingSum += guessStrategyCalc + guessStrategyGamer

    const strategyGamer = STRATEGY_ASSUMPTIONS[
        ELF_STRATEGY_SUGGESTION[line.split(' ')[0] as 'A' | 'B' | 'C'] as keyof typeof STRATEGY_ASSUMPTIONS
    ]
    const strategyCalc = calculateOutcome({ oponent, gamer: strategyGamer })
    strategyGamingSum += strategyCalc + strategyGamer
}

console.log({ guessStrategyGamingSum, howItIsSum, strategyGamingSum })
