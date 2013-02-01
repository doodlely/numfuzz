module("jQuery plugin", {setup: function() {
  $('#qunit-fixture').append('<p><span class="number">1100</span> Followers</p>');
}});

test("Test for $.numFuzz()", function() {
  $('#qunit-fixture .number').numFuzz();

  expect(2);
  strictEqual($('#qunit-fixture .number').text(), "1.1k", "Text should be equals to '1.1k'");
  strictEqual($('#qunit-fixture .number').attr('title'), parseInt(1100, 10).toLocaleString(), "Title should be equals to number.toLocaleString()");
});
