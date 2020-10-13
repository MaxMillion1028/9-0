basic.forever(function () {
    for (let x = 0; x <= 8; x++) {
        for (let y = 0; y <= 8; y++) {
            basic.showString("" + (x + 1) + "x" + (y + 1) + "=" + (x + 1) * (y + 1))
        }
    }
})
