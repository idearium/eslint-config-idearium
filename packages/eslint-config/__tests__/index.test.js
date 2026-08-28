import { describe, expect, it } from 'vitest';

import browser from '../src/browser.js';
import common from '../src/common.js';
import index from '../src/index.js';
import next from '../src/next.js';
import node from '../src/node.js';

describe('@idearium/eslint-config', () => {
    it('resolves every config variant as a flat config array', () => {
        for (const config of [index, common, node, next, browser]) {
            expect(Array.isArray(config)).toBe(true);
        }
    });
});
