let students = [
    { name: 'Ani', surname: 'Sargsyan', 'university': 'NPUA', raiting: [5, 5, 6, 9, 10], 'language': ["Angular", "Laravel", "Node"] },
    { name: 'Anna', surname: 'Hakobyan', 'university': 'NPUA', raiting: [6, 8, 7, 9, 7], 'language': ["Angular", "C#", "Node"] },
    { name: 'Mark', surname: 'Winston', 'university': 'Acadia', raiting: [6, 8, 5, 4, 9], 'language': ["Laravel", "Node"] },
    { name: 'John', surname: 'Smit', 'university': 'Laval', raiting: [2, 4, 5, 4, 4], 'language': ["HTML", "CPP"] },
    { name: 'Sharsharet', surname: 'Hernehdash', 'university': 'UOT', raiting: [6, 6, 6, 7, 8], 'language': ["HTML"] },
    { name: 'Karl', surname: 'Marks', 'university': 'UOT', raiting: [2, 7, 7, 8, 6], 'language': ["Bootstrap", "Node"] },
    { name: 'Nerk', surname: 'Abdulamish', 'university': 'Peking', raiting: [8, 8, 7, 7, 8], 'language': ["JS", "Laravel", "Node"] },
    { name: 'Zig', surname: 'Squerds', 'university': 'Peking', raiting: [4, 5, 4, 4, 6], 'language': ["Angular", "C#", "Node"] },
    { name: 'Kargel', surname: 'Pertishep', 'university': 'NPUA', raiting: [5, 5, 6, 5, 4], 'language': ["Angular", "BASIC", "VBA"] },
    { name: 'Meygard', surname: 'Humbergs', 'university': 'NUASA', raiting: [2, 2, 3, 4, 3], 'language': ["CPP", "C#", "Node"] },
]

function showByRaiting(students, rat = '2') {
    for (let i in students) {
        if (students[i].raiting.some((a) => a == rat)) {
            document.write(`<p>`);
            for (let info in students[i]) {
                document.write(`<b>${info}: </b> <span>${students[i][info]}</span> `);
            }
            document.write(`</p>`);
        }
    }
}
