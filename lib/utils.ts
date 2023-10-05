export function extractPrice(...elements: any) {
  for (const element of elements) {
    const priceText = element.text().trim();

    if (priceText) return priceText.replace(/[^\d.]/g, '');
  }

  return '';
};

export function extractCurrency(element: any) {
  const currencyText = element.text().trim().slice(0, 1);
  return currencyText ? currencyText : '';
};

export function removeRepetitions(element: string): string {
  const length = element.length;

  if (length % 2 === 0 && element.slice(0, length / 2) === element.slice(length / 2)) {
    return element.slice(0, length / 2);
  }

  return element;
}