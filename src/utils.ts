export function hasDropped(oldPrice:number, newPrice:number): boolean {
    return newPrice < oldPrice;
}