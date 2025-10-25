const express = require("express");
const app = express();
app.use(express.json());

// -----------------------------------------------------------------------------
// Instructions:
// 1) Complete each route marked with a number and a // TODO comment.
// 2) Return text or JSON exactly as described.
// 3) On invalid/missing inputs, respond 400 with {error:"message"}.
// 4) Keep all code in this single file.
// 5) Each handler shows one-line "link example" you can paste in browser/Postman.
// -----------------------------------------------------------------------------

// --- Text / Echo (1–20) ---
app.get("/ping", (req, res) => {
  // #1 TODO: return text "pong"
  // ex: GET /ping
});

app.get("/hello", (req, res) => {
  // #2 TODO: return "Hello 🌍"
  // ex: GET /hello
});

app.get("/echo/:word", (req, res) => {
  // #3 TODO: return :word as plain text
  // ex: GET /echo/banana
});

app.get("/greet/:name", (req, res) => {
  // #4 TODO: return JSON {message:"Hello, <name>"}
  // ex: GET /greet/Ali
});

app.get("/upper", (req, res) => {
  // #5 TODO: uppercase query.text
  // ex: GET /upper?text=hello
});

app.get("/lower", (req, res) => {
  // #6 TODO: lowercase query.text
  // ex: GET /lower?text=HELLO
});

app.get("/title", (req, res) => {
  // #7 TODO: capitalize each word in query.text
  // ex: GET /title?text=hello%20world
});

app.get("/reverse", (req, res) => {
  // #8 TODO: reverse query.text
  // ex: GET /reverse?text=abc
});

app.get("/count", (req, res) => {
  // #9 TODO: count characters in query.text
  // ex: GET /count?text=hello
});

app.get("/trim", (req, res) => {
  // #10 TODO: trim whitespace around query.text
  // ex: GET /trim?text=%20%20hi%20%20
});

app.get("/padleft", (req, res) => {
  // #11 TODO: pad text on the left to len using ch
  // ex: GET /padleft?text=7&len=3&ch=0   -> "007"
});

app.get("/padright", (req, res) => {
  // #12 TODO: pad text on the right to len using ch
  // ex: GET /padright?text=7&len=3&ch=_
});

app.get("/repeat/:word/:n", (req, res) => {
  // #13 TODO: repeat word n times joined by "-"
  // ex: GET /repeat/hi/3  -> "hi-hi-hi"
});

app.get("/includes", (req, res) => {
  // #14 TODO: check if text includes find
  // ex: GET /includes?text=hello&find=ell
});

app.get("/starts", (req, res) => {
  // #15 TODO: check if text starts with value
  // ex: GET /starts?text=hello&with=he
});

app.get("/ends", (req, res) => {
  // #16 TODO: check if text ends with value
  // ex: GET /ends?text=hello&with=lo
});

app.get("/replace", (req, res) => {
  // #17 TODO: replace substring
  // ex: GET /replace?text=a_b_c&from=_&to=-
});

app.get("/split", (req, res) => {
  // #18 TODO: split text by sep
  // ex: GET /split?text=a,b,c&sep=,
});

app.get("/join", (req, res) => {
  // #19 TODO: join query values except sep into one string using sep
  // ex: GET /join?sep=-&a=hi&b=there&c=you
});

app.get("/slugify", (req, res) => {
  // #20 TODO: slugify text -> lowercase and hyphens
  // ex: GET /slugify?text=Hello,%20World!
});

// --- Numbers / Math (21–40) ---
app.get("/sum/:a/:b", (req, res) => {
  // #21 TODO: return sum
  // ex: GET /sum/5/7
});

app.get("/sub/:a/:b", (req, res) => {
  // #22 TODO: subtraction
  // ex: GET /sub/10/3
});

app.get("/mul/:a/:b", (req, res) => {
  // #23 TODO: multiplication
  // ex: GET /mul/4/6
});

app.get("/div/:a/:b", (req, res) => {
  // #24 TODO: division (error if b=0)
  // ex: GET /div/10/2
});

app.get("/mod/:a/:b", (req, res) => {
  // #25 TODO: modulus
  // ex: GET /mod/10/3
});

app.get("/pow/:a/:b", (req, res) => {
  // #26 TODO: power
  // ex: GET /pow/2/8
});

app.get("/abs/:x", (req, res) => {
  // #27 TODO: absolute value
  // ex: GET /abs/-9
});

app.get("/round/:x", (req, res) => {
  // #28 TODO: round number
  // ex: GET /round/3.6
});

app.get("/ceil/:x", (req, res) => {
  // #29 TODO: ceil
  // ex: GET /ceil/3.1
});

app.get("/floor/:x", (req, res) => {
  // #30 TODO: floor
  // ex: GET /floor/3.9
});

app.get("/min", (req, res) => {
  // #31 TODO: minimum of query numbers
  // ex: GET /min?a=3&b=9&c=-2
});

app.get("/max", (req, res) => {
  // #32 TODO: maximum of query numbers
  // ex: GET /max?a=3&b=9&c=-2
});

app.get("/avg", (req, res) => {
  // #33 TODO: average of query numbers
  // ex: GET /avg?a=3&b=9&c=-2
});

app.get("/sumlist", (req, res) => {
  // #34 TODO: sum all query numbers
  // ex: GET /sumlist?a=1&b=2&c=3
});

app.get("/is-even/:n", (req, res) => {
  // #35 TODO: check even
  // ex: GET /is-even/8
});

app.get("/is-odd/:n", (req, res) => {
  // #36 TODO: check odd
  // ex: GET /is-odd/7
});

app.get("/factorial/:n", (req, res) => {
  // #37 TODO: factorial up to 12
  // ex: GET /factorial/5
});

app.get("/fibonacci/:n", (req, res) => {
  // #38 TODO: array of first n fib numbers
  // ex: GET /fibonacci/6
});

app.get("/prime/:n", (req, res) => {
  // #39 TODO: check prime (n>=2)
  // ex: GET /prime/13
});

app.get("/gcd/:a/:b", (req, res) => {
  // #40 TODO: greatest common divisor
  // ex: GET /gcd/48/18
});

// --- Ranges / Sequences (41–55) ---
app.get("/range", (req, res) => {
  // #41 TODO: list start→end inclusive
  // ex: GET /range?start=2&end=10
});

app.get("/range/step", (req, res) => {
  // #42 TODO: list start→end by step>0
  // ex: GET /range/step?start=2&end=10&step=2
});

app.get("/countdown/:n", (req, res) => {
  // #43 TODO: [n..0]
  // ex: GET /countdown/5
});

app.get("/multiples/:base/:count", (req, res) => {
  // #44 TODO: multiples array
  // ex: GET /multiples/3/5
});

app.get("/table/:n", (req, res) => {
  // #45 TODO: multiplication table n×1..n×10
  // ex: GET /table/7
});

app.get("/powers/:n/:k", (req, res) => {
  // #46 TODO: power list n^1..n^k
  // ex: GET /powers/2/5
});

app.get("/evens", (req, res) => {
  // #47 TODO: even numbers up to end
  // ex: GET /evens?end=10
});

app.get("/odds", (req, res) => {
  // #48 TODO: odd numbers up to end
  // ex: GET /odds?end=9
});

app.get("/sum-to/:n", (req, res) => {
  // #49 TODO: sum 1..n
  // ex: GET /sum-to/10
});

app.get("/triangle/:n", (req, res) => {
  // #50 TODO: nth triangular number
  // ex: GET /triangle/7
});

app.get("/square/:n", (req, res) => {
  // #51 TODO: n squared
  // ex: GET /square/12
});

app.get("/cubes/:n", (req, res) => {
  // #52 TODO: cubes list 1^3..n^3
  // ex: GET /cubes/5
});

app.get("/arith-seq", (req, res) => {
  // #53 TODO: arithmetic sequence
  // ex: GET /arith-seq?start=3&diff=2&n=5
});

app.get("/geo-seq", (req, res) => {
  // #54 TODO: geometric sequence
  // ex: GET /geo-seq?start=3&ratio=2&n=4
});

app.get("/median", (req, res) => {
  // #55 TODO: median of numeric query values
  // ex: GET /median?a=10&b=2&c=7
});

// --- Dates / Time (56–65) ---
app.get("/time", (req, res) => {
  // #56 TODO: current time {iso, unix}
  // ex: GET /time
});

app.get("/iso-to-unix", (req, res) => {
  // #57 TODO: convert ISO→unix
  // ex: GET /iso-to-unix?iso=2025-01-01T00:00:00Z
});

app.get("/unix-to-iso", (req, res) => {
  // #58 TODO: convert unix(ms)→ISO
  // ex: GET /unix-to-iso?unix=1735689600000
});

app.get("/today", (req, res) => {
  // #59 TODO: YYYY-MM-DD today
  // ex: GET /today
});

app.get("/weekday", (req, res) => {
  // #60 TODO: weekday number 0=Sun..6=Sat
  // ex: GET /weekday?iso=2025-01-01T00:00:00Z
});

app.get("/add-days", (req, res) => {
  // #61 TODO: add days to ISO date
  // ex: GET /add-days?iso=2025-01-01&days=3
});

app.get("/diff-days", (req, res) => {
  // #62 TODO: difference in days between two ISO dates
  // ex: GET /diff-days?from=2025-01-01&to=2025-01-10
});

app.get("/is-leap/:year", (req, res) => {
  // #63 TODO: leap year true/false
  // ex: GET /is-leap/2024
});

app.get("/age", (req, res) => {
  // #64 TODO: age in years from dob
  // ex: GET /age?dob=1990-06-15
});

app.get("/month-days", (req, res) => {
  // #65 TODO: days in given month
  // ex: GET /month-days?year=2024&month=2
});

// --- Encoders / Parsers (66–77) ---
app.get("/base64/encode", (req, res) => {
  // #66 TODO: encode text base64
  // ex: GET /base64/encode?text=hi
});

app.get("/base64/decode", (req, res) => {
  // #67 TODO: decode base64
  // ex: GET /base64/decode?text=aGk=
});

app.get("/hex/encode", (req, res) => {
  // #68 TODO: encode hex
  // ex: GET /hex/encode?text=Hi
});

app.get("/hex/decode", (req, res) => {
  // #69 TODO: decode hex
  // ex: GET /hex/decode?text=4869
});

app.get("/url/encode", (req, res) => {
  // #70 TODO: encode URL
  // ex: GET /url/encode?text=a b
});

app.get("/url/decode", (req, res) => {
  // #71 TODO: decode URL
  // ex: GET /url/decode?text=a%20b
});

app.get("/int/parse", (req, res) => {
  // #72 TODO: parse int
  // ex: GET /int/parse?text=42
});

app.get("/float/parse", (req, res) => {
  // #73 TODO: parse float
  // ex: GET /float/parse?text=3.14
});

app.get("/bool/parse", (req, res) => {
  // #74 TODO: parse boolean
  // ex: GET /bool/parse?text=true
});

app.get("/json/pretty", (req, res) => {
  // #75 TODO: pretty JSON (input in query.text)
  // ex: GET /json/pretty?text={"a":1}
});

app.get("/csv/count", (req, res) => {
  // #76 TODO: count CSV items
  // ex: GET /csv/count?text=a,b,c
});

app.get("/words/count", (req, res) => {
  // #77 TODO: count words
  // ex: GET /words/count?text=hello%20%20world
});

// --- Validation (78–88) ---
app.get("/is-email", (req, res) => {
  // #78 TODO: email regex simple
  // ex: GET /is-email?text=user@example.com
});

app.get("/is-phone", (req, res) => {
  // #79 TODO: phone regex simple (+ optional, 7–15 digits)
  // ex: GET /is-phone?text=%2B9647710553120
});

app.get("/is-hex", (req, res) => {
  // #80 TODO: hex regex
  // ex: GET /is-hex?text=ff00aa
});

app.get("/is-binary", (req, res) => {
  // #81 TODO: binary regex
  // ex: GET /is-binary?text=101001
});

app.get("/is-int", (req, res) => {
  // #82 TODO: integer check
  // ex: GET /is-int?text=42
});

app.get("/is-float", (req, res) => {
  // #83 TODO: float check
  // ex: GET /is-float?text=3.14
});

app.get("/is-uppercase", (req, res) => {
  // #84 TODO: uppercase check
  // ex: GET /is-uppercase?text=HELLO
});

app.get("/is-lowercase", (req, res) => {
  // #85 TODO: lowercase check
  // ex: GET /is-lowercase?text=hello
});

app.get("/is-alpha", (req, res) => {
  // #86 TODO: only letters
  // ex: GET /is-alpha?text=abcXYZ
});

app.get("/is-alnum", (req, res) => {
  // #87 TODO: letters or digits
  // ex: GET /is-alnum?text=abc123
});

app.get("/len-between", (req, res) => {
  // #88 TODO: text length between min/max
  // ex: GET /len-between?text=hello&min=3&max=8
});

// --- Simple Logic / Games (89–96) ---
app.get("/palindrome/:text", (req, res) => {
  // #89 TODO: palindrome check
  // ex: GET /palindrome/level
});

app.get("/anagram", (req, res) => {
  // #90 TODO: anagram check ignore spaces/case
  // ex: GET /anagram?a=listen&b=silent
});

app.get("/vowels", (req, res) => {
  // #91 TODO: count vowels
  // ex: GET /vowels?text=hello
});

app.get("/consonants", (req, res) => {
  // #92 TODO: count consonants
  // ex: GET /consonants?text=world
});

app.get("/emoji/heart", (req, res) => {
  // #93 TODO: return ❤️
  // ex: GET /emoji/heart
});

app.get("/coinflip", (req, res) => {
  // #94 TODO: random heads/tails
  // ex: GET /coinflip
});

app.get("/dice/:sides", (req, res) => {
  // #95 TODO: random 1..sides
  // ex: GET /dice/20
});

app.get("/random/int", (req, res) => {
  // #96 TODO: random int inclusive [min,max]
  // ex: GET /random/int?min=5&max=10
});

// --- Misc (97–100) ---
app.get("/whoami", (req, res) => {
  // #97 TODO: return {ip, userAgent}
  // ex: GET /whoami
});

app.get("/uppercase/words", (req, res) => {
  // #98 TODO: uppercase all words
  // ex: GET /uppercase/words?text=hello%20world
});

app.get("/initials", (req, res) => {
  // #99 TODO: initials from full name -> "J.R.R.T"
  // ex: GET /initials?name=John%20Ronald%20Reuel%20Tolkien
});

app.get("/health", (req, res) => {
  // #100 TODO: return {status:"ok"}
  // ex: GET /health
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
