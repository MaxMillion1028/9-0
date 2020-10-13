basic.forever(function () {
    for (let x = 0; x <= 9; x++) {
        for (let y = 0; y <= 9; y++) {
            basic.showString("" + x + "x" + y + "=" + x * y)
        }
    }
})
