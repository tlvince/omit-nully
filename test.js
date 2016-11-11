const test = require('tap').test
const omitNully = require('.')

test('title', t => {
  const obj = {
    a: 'foo',
    b: null,
    c: undefined,
    d: 'bar'
  }
  const actual = omitNully(obj)
  const expected = {
    a: 'foo',
    d: 'bar'
  }
  t.same(actual, expected)
  t.end()
})
