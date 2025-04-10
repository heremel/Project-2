function long(array, a, b) {
    const longArray = []

    for (let i = a; i < (b); i++) {
        longArray.push(array[i].latlng[0])
    }
    console.log(longArray.join(","))
}

function lat(array, a, b) {
    const latArray = []

    for (let i = a; i < (b); i++) {
        latArray.push(array[i].latlng[1])
    }
    console.log(latArray.join(","))
}

lat(countries, 0, 245)