[[RESTFul Main Dissertation]]

**PARSING THE REQUEST BODY

`app.use()` is used to run code that will be used for every request (GET/POST and so on...)
==Can be used to handle JSON as well as URL encoded==
> express.urlencoded({extended: true})
> express.json()

Req.body can be de-structured using `const {x, y} = req.body`
and used using `${x} ${y}` template literal

