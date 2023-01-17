let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let totalProgress = 0;

        for (let i = 0; i < data.length; i++) {
            totalProgress += data[i].progress;
        }

        return [totalProgress, data.length];
    } else {  //если содержимое контейнера с данными - не массив, то выполнить следующее
        let totalProgress = [0, 0]; // создаем контейнер с двумя значениями

        for (let subData of Object.values(data)) {  // для значений в обьекте:
            const subDataArr = getTotalProgressByRecursion(subData); //
            totalProgress[0] += subDataArr[0];
            totalProgress[1] += subDataArr[1];
        }

        return totalProgress;
    }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);
console.log(result[0], result[1])
console.log(Object.values(students))