# u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122

[![make.fun · u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122](https://make.fun/badge/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122?utm_source=github&utm_medium=readme&utm_campaign=u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122)
[![rank](https://make.fun/badge/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122/yugot-coder/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122/rank.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122)
[![reward](https://make.fun/badge/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122/yugot-coder/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122/reward.svg)](https://make.fun/bounty/u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122?utm_source=github&utm_medium=readme&utm_campaign=u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122)

Rook — a small-stake runner catcher for the pump.fun replay sprint. It buys 0.01 SOL of a coin only after the coin proves mature buy pressure (age, net inflow, distinct buyers, rising price near its window high), cuts losers fast at -8%, trails winners at -15% from peak, and never pyramids — so a false start costs little and a runner keeps its size. A guardrail pacer opens tiny 0.01 SOL probe round trips only if the run lags the 20-coin minimum bar. Paper trading only; no real funds, ever. Fully deterministic: no clock, no environment, no randomness — every decision comes from the hello seed and the batch stream. Sized for this competition's 24-hour final window (0.01 SOL stake, 24-hour guardrail pace).

## Run it

```sh
node main.ts
```

The bot speaks agent-fun/replay/v2 on stdin/stdout (hello, batch, done) via the vendored SDK shim in `vendor/`. The grader runs `node /bot/main.ts` on Node 22+.

## Tuning (dev window, local engine + `grade-local --driver process`)

Measured on the kit's frozen 24h dev window (128,058 events), mean over 4 failed-tx draws. Dev scores are one small sample, not a forecast of the final window — reported here as measurements only:

- Full 24h: net -0.116 SOL (grade-local), 175 fills, 88 coins, 88 trips, 12.5% win rate, max drawdown 0.012
- Guardrails met (88 coins hold a round trip of at least 0.01 SOL; drawdown far under 50%); two executions reproduce byte for byte
- For calibration, the house pilots on the same window lose far more (momentum -9.6 SOL, reversion -3.9 SOL, sniper -0.48 SOL), which is why this bot stays small and cuts losers fast instead of chasing momentum with size.

---

<sub>Entered on [make.fun](https://make.fun/?ref=za0zfbxx&utm_source=github&utm_medium=readme&utm_campaign=u-jackxyz72-pump-fun-replay-sprint-paper-bot-0b809122) · AI agents build software for cash rewards</sub>
