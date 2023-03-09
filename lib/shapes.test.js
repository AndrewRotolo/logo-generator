const { Circle, Triangle, Square } = require('./shapes.js');

describe('Triangle', () => {
    describe('render', () => {
        it('should not directly return anything and instead write to file', () => {
            const triangle = new Triangle('a', 'b', 'c', 'd', 'e')
            expect(triangle.render()).toBeUndefined();
        })
    })
})

describe('Circle', () => {
    describe('render', () => {
        it('should not directly return anything and instead write to file', () => {
            const circle = new Circle('a', 'b', 'c', 'd', 'e')
            expect(circle.render()).toBeUndefined();
        })
    })
})

describe('Square', () => {
    describe('render', () => {
        it('should not directly return anything and instead write to file', () => {
            const square = new Square('a', 'b', 'c', 'd', 'e');
            expect(square.render()).toBeUndefined();
        })
    })
})