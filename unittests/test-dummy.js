
import test from 'ava'

test('add two numbers', async test => {
	test.plan(1)
	const total = 6 + 2
	test.is(total, 8, 'why?')
})

test('subtract two numbers', async test => {
	test.plan(1)
	const total = 6 - 2
	test.is(total, 4, 'why?')
})

test('multiply two numbers', async test => {
	test.plan(1)
	const total = 6 * 2
	test.is(total, 12, 'why?')
})

test('divide two numbers', async test => {
	test.plan(1)
	const total = 6 / 2
	test.is(total, 3, 'why?')
})
