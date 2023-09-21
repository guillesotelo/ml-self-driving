(() => {
    const canvas = document.querySelector('canvas')
    if (!canvas) return

    canvas.height = window.innerHeight
    canvas.width = 200

    const ctx = canvas.getContext('2d')
    const car = new Car({ x: 100, y: 100, width: 30, height: 50 })

    const animate = () => {
        car.update()
        car.draw(ctx)
        requestAnimationFrame(animate)
    }
    animate()
})()