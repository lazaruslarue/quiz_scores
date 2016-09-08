# quiz_scores
a list of student names &amp; test scores. min, max, and average grade.

## run it
make sure you have webpack installed
`npm install webpack -g`

then run it
`npm run start`

[TODO] build it for deployment
`npm run build`
currently, this will fail to include the `angular-cookies` module. webpack docs, though... that'll help.

## criteria

    [X] support crud operations on student names and their associated grade
    [X] support inline editing of student names and grades. changing a test score and 'enter' / 'mouse-end' updates the model
    [X] statistics shall update after CRUD is performed
    [X] components should validate user input
    [X] students component with grade < 65 should visually indicate failing grade
