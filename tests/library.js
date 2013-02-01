module("Library");

test("Tests for NumFuzz.fuzzy()", function() {
  expect(11);

  // k
  strictEqual(NumFuzz.fuzzy(999), "999", "NumFuzz.fuzzy(999) returns '999'");
  strictEqual(NumFuzz.fuzzy(1000), "1k", "NumFuzz.fuzzy(1000) returns '1k'");
  strictEqual(NumFuzz.fuzzy(1099), "1k", "NumFuzz.fuzzy(1099) returns '1k'");
  strictEqual(NumFuzz.fuzzy(1100), "1.1k", "NumFuzz.fuzzy(1100) returns '1.1k'");
  strictEqual(NumFuzz.fuzzy(1101), "1.1k", "NumFuzz.fuzzy(1101) returns '1.1k'");

  // M
  strictEqual(NumFuzz.fuzzy(999999), "999.9k", "NumFuzz.fuzzy(999999) returns '999.9k'");
  strictEqual(NumFuzz.fuzzy(1000000), "1M", "NumFuzz.fuzzy(1000000) returns '1M'");
  strictEqual(NumFuzz.fuzzy(1000001), "1M", "NumFuzz.fuzzy(1000001) returns '1M'");
  strictEqual(NumFuzz.fuzzy(1099999), "1M", "NumFuzz.fuzzy(1099999) returns '1M'");
  strictEqual(NumFuzz.fuzzy(1100000), "1.1M", "NumFuzz.fuzzy(1100000) returns '1.1M'");
  
  // Negative
  strictEqual(NumFuzz.fuzzy(-1000), "-1k", "NumFuzz.fuzzy(-1000) returns '-1k'");
});

test("Tests for NumFuzz.fuzzy() with invalid data", function() {
  expect(4);
  strictEqual(NumFuzz.fuzzy("1"), "1", "NumFuzz.fuzzy('1') returns '1'");
  strictEqual(NumFuzz.fuzzy(""), "NaN", "NumFuzz.fuzzy('') returns 'NaN'");
  strictEqual(NumFuzz.fuzzy(true), "NaN", "NumFuzz.fuzzy(true) returns 'NaN'");
  strictEqual(NumFuzz.fuzzy(false), "NaN", "NumFuzz.fuzzy(false) returns 'NaN'");
});
