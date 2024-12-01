class Currency {
  constructor() {
    this.url =
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_wWe4LAhHEyScNGeH3In7m2FrnKCyH5Vh33RN1GWi&base_currency=";
  }

  getFirstWord(sentence) {
    return sentence.split(" ")[0];
  }

  async exchange(amount, firstCurrency, secondCurrency) {
    const tempFirstCurrency = this.getFirstWord(firstCurrency);
    const tempSecondCurrency = this.getFirstWord(secondCurrency);
    const response = await fetch(`${this.url}${tempFirstCurrency}`);
    const result = await response.json();
    const exchangedResult = amount * result.data[tempSecondCurrency];

    return exchangedResult;
  }
}
