class Controls {
    forward: boolean
    left: boolean
    right: boolean
    reverse: boolean
    constructor() {
        this.forward = false
        this.left = false
        this.right = false
        this.reverse = false
    }

    #addKeyboardListeners() {
        document.onkeydown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowUp':
                case 'keyW':
                    this.forward = true
                    break
                case 'ArrowLeft':
                case 'keyA':
                    this.left = true
                    break
                case 'ArrowRight':
                case 'keyD':
                    this.right = true
                    break
                case 'ArrowDown':
                case 'keyS':
                    this.reverse = true
                    break
            }
        }

        document.onkeyup = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowUp':
                case 'keyW':
                    this.forward = false
                    break
                case 'ArrowLeft':
                case 'keyA':
                    this.left = false
                    break
                case 'ArrowRight':
                case 'keyD':
                    this.right = false
                    break
                case 'ArrowDown':
                case 'keyS':
                    this.reverse = false
                    break
            }
        }
    }
}