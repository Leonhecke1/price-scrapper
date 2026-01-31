export type Product = {
    name:string;
    url:string;
    selector:string;
    targetPrice:number;
};

export const products: Product[] = [
    {
      name: "soundcore by Anker Q20i",
      url: "https://www.amazon.de/soundcore-kabelloser-Over-Ear-Kopfh%C3%B6rer-Cancelling-Personalisierung-Schwarz/dp/B0C3HCD34R?pd_rd_w=AUPgF&content-id=amzn1.sym.0f2704dd-0dcb-4b8d-aba4-85a14e9e7ffd&pf_rd_p=0f2704dd-0dcb-4b8d-aba4-85a14e9e7ffd&pf_rd_r=NK2YHEEQ53J86VY3ZSDX&pd_rd_wg=iUn57&pd_rd_r=ee55be40-6263-41ea-9972-6a5d93623064&pd_rd_i=B0C3HCD34R&ref_=pd_hp_d_btf_unk_B0C3HCD34R&th=1",
      selector: ".a-offscreen",
      targetPrice: 31.99
    }
  ];

