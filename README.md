# quiz_scores
a list of student names &amp; test scores. min, max, and average grade.

## criteria

    [X] support crud operations on student names and their associated grade
    [X] components should validate user input
    [X] students component with grade < 65 should visually indicate failing grade
    [-] statistics shall update after CRUD is performed
        (statistics update in real time)
    [X] support inline editing of student names and grades. changing a test score and 'enter' / 'mouse-end' updates the model
        (blur & enter key)

## run it
run it

    `npm run start`

## deploy it
build it for deployment

    `npm run build`

## the system

the application uses webpack to build `/dist/bundle.js` && `/dist/vendor.bundle.js`

webpack configure file is `webpack.config.js`

## the app

the app stores data on window.localStorage
