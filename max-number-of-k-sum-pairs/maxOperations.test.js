const runTests = require('../runTests')
const maxOperations = require('./maxOperations')

runTests(
    maxOperations,
    [
        {
            description: 'example 1',
            inputs: [
                [1, 2, 3, 4],
                5
            ],
            expected: 2
        },
        {
            description: 'example 2',
            inputs: [
                [3, 1, 3, 4, 3],
                6
            ],
            expected: 1
        }
    ]
)