import { products } from "./config.ts";
import { getPrice } from "./scrapper.ts";
import { loadPrices, savePrices } from "./storage.ts";
import { notify } from "./notifier.ts";

(async ()=>{
    const prices = loadPrices()

    for(const product of products){
        const current = await getPrice(product.url, product.selector);
        const old = prices[product.name];

        if(old && current < old){
            notify
            (`${product.name} price dropped from ${old} to ${current}`);        
        }
        prices[product.name] = current;
        savePrices(prices);
    }
    }
)();