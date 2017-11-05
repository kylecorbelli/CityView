// @flow

export const prettyNumber = (value: number): string =>
  value.toFixed(1)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    .slice(0, -2)
