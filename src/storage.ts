import fs from "fs"

const STORAGE_FILE = 'data/prices.json';

export function loadPrices(): Record<string, number> {
    if(!fs.existsSync(STORAGE_FILE)){};
    return JSON.parse(fs.readFileSync(STORAGE_FILE, 'utf-8'));
}

export function savePrices(prices: Record<string, number>): void {
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(prices, null, 2));
}