class Controls {
    constructor() {
        this.forward = false
        this.left = false
        this.right = false
        this.reverse = false

        this.#addKeyboardListeners()
    }

    #addKeyboardListeners() {
        document.onkeydown = (e) => {
            switch (e.code) {
                case 'ArrowUp':
                case 'KeyW':
                    this.forward = true
                    break
                case 'ArrowLeft':
                case 'KeyA':
                    this.left = true
                    break
                case 'ArrowRight':
                case 'KeyD':
                    this.right = true
                    break
                case 'ArrowDown':
                case 'KeyS':
                    this.reverse = true
                    break
            }
        }

        document.onkeyup = (e) => {
            switch (e.code) {
                case 'ArrowUp':
                case 'KeyW':
                    this.forward = false
                    break
                case 'ArrowLeft':
                case 'KeyA':
                    this.left = false
                    break
                case 'ArrowRight':
                case 'KeyD':
                    this.right = false
                    break
                case 'ArrowDown':
                case 'KeyS':
                    this.reverse = false
                    break
            }
        }
    }
}