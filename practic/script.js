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

function getTotalProgressByIteration(data) {
    let totalProgress = 0;
    let studentNumber = 0;

    for (const course of Object.values(data)) {
        if (Array.isArray(course)) {
            studentNumber += course.length;
            for (let i = 0; i < course.length; i++) {
                totalProgress += course[i].progress;
            }
        } else {
            for (const subcourse of Object.values(course)) {
                studentNumber += subcourse.length;
                for (let i = 0; i < subcourse.length; i++) {
                    totalProgress += subcourse[i].progress;
                }
            }
        }
    }

    return totalProgress / studentNumber;
}

console.log(getTotalProgressByIteration(students));
console.log(Object.values(students));