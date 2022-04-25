const number = 123456.789;

console.log(new Intl.NumberFormat('de-DE').format(number));

console.log(
  new Intl.NumberFormat('en-CA', {
    // maximumSignificantDigits: 3,
    minimumFractionDigits: 2,
  }).format(34)
);

console.log(
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'CAD',
  }).format(56.1)
);

console.log(
  new Intl.NumberFormat('en-CA', {
    style: 'percent',
  }).format(0.25)
);

console.log(
  new Intl.NumberFormat('en-CA', {
    style: 'unit',
    unit: 'kilometer-per-hour',
    unitDisplay: 'long',
  }).format(45)
);

console.log(
  number.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'CAD',
  })
);

const fruits = ['apple', 'orange', 'pineapple', 'mango'];

console.log(
  new Intl.ListFormat('en-US', {
    type: 'disjunction',
  }).format(fruits)
);

console.log(
  new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'long',
  }).format(new Date())
);

console.log(
  new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'long',
  }).format(new Date())
);

console.log(
  new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'long',
  })
);

const suffixes = new Map([
  // Note: in real-world scenarios, you wouldn’t hardcode the plurals
  // like this; they’d be part of your translation files.
  ['one', 'cat'],
  ['other', 'cats'],
]);
const pr = new Intl.PluralRules('en-US');
const formatCats = n => {
  const rule = pr.select(n);
  const suffix = suffixes.get(rule);
  return `${n} ${suffix}`;
};

console.log(formatCats(1)); // '1 cat'
console.log(formatCats(0)); // '0 cats'
console.log(formatCats(0.5)); // '0.5 cats'
console.log(formatCats(1.5)); // '1.5 cats'
console.log(formatCats(2)); // '2 cats'

const pr2 = new Intl.PluralRules('en-US', {
  type: 'ordinal',
});
const suffixes2 = new Map([
  ['one', 'st'],
  ['two', 'nd'],
  ['few', 'rd'],
  ['other', 'th'],
]);
const formatOrdinals = n => {
  const rule = pr2.select(n);
  const suffix = suffixes2.get(rule);
  return `${n}${suffix}`;
};

console.log(formatOrdinals(0)); // '0th'
console.log(formatOrdinals(1)); // '1st'
console.log(formatOrdinals(2)); // '2nd'
console.log(formatOrdinals(3)); // '3rd'
console.log(formatOrdinals(4)); // '4th'
console.log(formatOrdinals(11)); // '11th'
console.log(formatOrdinals(21)); // '21st'
console.log(formatOrdinals(42)); // '42nd'
console.log(formatOrdinals(103)); // '103rd'
