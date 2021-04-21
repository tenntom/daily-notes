const notes = [
    {
        id: 1,
        subject: "Github",
        date: "April 13, 2021",
        feeling: "overwhelmed",
        timeSpent: 400,
    },
    {
        id: 2,
        subject: "Bad websites",
        date: "April 14, 2021",
        feeling: "fun",
        timeSpent: 350,
    }
]

const noteAboutToday = {
    id: 3,
    subject: "starting Javascript",
    date: "April 16, 2021",
    feeling: "happy it's Friday",
    timespent: 120,
}

notes.push(noteAboutToday);

const createNote = (note) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1

    note.id = idForNewNote
    note.date = new Date()


    notes.push(note)
}

const anotherNote = {
    subject: "Taking notes",
    feeling: "relaxed",
    timespent: 200
}

createNote(anotherNote)

console.log(notes)
// for (const note of notes) {
//     console.log ('On ' + note.date + ', I was feeling ' + note.feeling + '.')
// }

// const searchTerm = "overwhelmed"

// for (const note of notes) {
//     if (note.feeling === searchTerm) {
//          console.log (`
//          Note ${note.id}
//          ${note.date}
//          I learned ${note.subject}.
//          I spent ${note.timeSpent} minutes working on it.
//          I felt ${note.feeling}.
//          `)
//     }
// }

// for (const note of notes) {
//     console.log (`
//     Note ${note.id}
//     ${note.date}
//     I learned ${note.subject}.
//     I spent ${note.timespent} miuntes working on it.
//     I felt ${note.feeling}.
//     `        
//     )
// }