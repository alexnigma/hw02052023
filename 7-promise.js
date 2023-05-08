/*
console.log(`Запит к серверу.....`);

setTimeout(() => {
    console.log(`Підготовка данних для відправки`);

    const product = {
        name: `Laptop`,
        price: 1000
    }

    setTimeout(() => {
        product.status = `InStock`;
        console.log(product);
    }, 200)

}, 10000);



const req = new Promise((resolve, reject) => {});




const req2 = new Promise((resolve, reject) => {
    console.log(`Запит к серверу.....`);

    setTimeout(() => {
        console.log(`Підготовка данних для відправки`);

        const product = {
            name: `Laptop`,
            price: 1000
        }

        setTimeout(() => {
            product.status = `InStock`;
            console.log(product);
        }, 200)

    }, 10000)
});





const req3 = new Promise((resolve, reject) => {
    console.log(`Запит к серверу.....`);

    setTimeout(() => {
        console.log(`Підготовка данних для відправки`);

        const product = {
            name: `Laptop`,
            price: 1000
        }

        resolve(product);

    }, 10000)
});

req3.then((product) => {
    setTimeout(() => {
        product.status = `InStock`;
        console.log(product);
    }, 200)
});




const req4 = new Promise((resolve, reject) => {
    console.log(`Запит к серверу.....`);

    setTimeout(() => {
        console.log(`Підготовка даних для відправки`);

        const product = {
            name: `Laptop`,
            price: 1000
        }

        resolve(product);

    }, 10000)
});

req4.then((product) => {
    const req5 = new Promise((resolve,reject) => {
        setTimeout(() => {
            product.status = `InStock`;
            resolve(product);
        }, 2000)
    })

    req5.then(product => {
        console.log(product);
    })
});



const req6 = new Promise((resolve, reject) => {
    console.log(`Запит к серверу.....`);

    setTimeout(() => {
        console.log(`Підготовка даних для відправки`);

        const product = {
            name: `Laptop`,
            price: 1000
        }

        resolve(product);

    }, 10000)
});

req6.then((product) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            product.status = `InStock`;
            resolve(product);
        }, 2000)
    })
}).then(product => {
    product.isModified = true;
    return product;
}).then( product => {
    console.log(product)
});


*/

let error = false;
const req10 = new Promise((resolve, reject) => {
    console.log(`Запит к серверу.....`);

    setTimeout(() => {
        console.log(`Підготовка даних для відправки`);

        const product = {
            name: `Laptop`,
            price: 1000
        }

        if (error) {
            reject(product);
        }

        resolve(product);

    }, 10000)
});

req10.then((product) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            product.status = `InStock`;
            resolve(product);
        }, 2000)
    })
}).then(product => {
    product.isModified = true;
    return product;
}).then( product => {
    console.log(product)
}).catch( (product) => {
    console.log(`error happened`);
    console.log(product);
}).finally( () => {
    console.log(`Finally`);
});