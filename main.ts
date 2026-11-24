// Rook — a small-stake runner catcher for the pump.fun paper sprint.
// The grader runs `node /bot/main.ts`; the strategy lives in strategy.ts and the SDK
// shim is the kit's sdk/ts/makefun-bot.ts, vendored byte for byte in vendor/.

import { runBot } from './vendor/makefun-bot.ts';
import { createBot, DEFAULT_PARAMS } from './strategy.ts';

await runBot(createBot(DEFAULT_PARAMS));
