const regex = /(\+?\d{3} )?\d{2,3} \d{2}(\s|\-)?\d{2}(\s|\-)?\d{2}/gm;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('(\\+?\\d{3} )?\\d{2,3} \\d{2}(\\s|\\-)?\\d{2}(\\s|\\-)?\\d{2}', 'gm')

const str = `User1:
    Login: user1
    Name: Ani Sargsyan
    Age: 28
    Phone: 374 93 648663

User2:
    Login: user1
    Name: Ani Sargsyan
    Age: 28
    Phone: +374 93 648663

User3:
    Login: user1
    Name: Ani Sargsyan
    Age: 28
    Phone: 93 648663

User4:
    Login: user1
    Name: Ani Sargsyan
    Age: 28
    Phone: 93 64 86 63

User5:
    Login: user1
    Name: Ani Sargsyan
    Age: 28
    Phone: 93 64-86-63

User6:
    Login: user1
    Name: Ani Sargsyan
    Age: 28
    Phone: 093 64-86-63

User2:
    Login: user2
    Name: Karen Hakobyan
    Age: 35
    Phone: (093) 64-86-63

User3:
    Login: user3
    Name: Lusine Harutyunyan
    Age: 22
    Phone: +374(93)648663

User4:
    Login: user4
    Name: Hayk Grigoryan
    Age: 40
    Phone: 093 64 86 63`;

// Reset `lastIndex` if this regex is defined globally
// regex.lastIndex = 0;

let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}
