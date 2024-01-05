const { Circle, Triangle, Square} = require('./shapes.js')


describe('Circle', () => {
    it('should create a new circle svg file givin the parameters passed though the create function', () => {
        const CorrectCircle = `
        <svg width="200" height="200">
            <circle cx="50" cy="50" r="50" style="fill:blue;" />
            <text x="50" y="50" dominant-baseline="middle" text-anchor="middle" fill="red">NBA</text>
        </svg>
      `
            const circle = new Circle('blue', 'NBA', 'red')
            expect(circle.create()).toEqual(CorrectCircle)
    })
})
