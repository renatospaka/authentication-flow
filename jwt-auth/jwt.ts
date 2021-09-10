const base64Url = require("base64-url")

const header = {
  alg: "HS256",
  typ: "JWT",
}

const payload = {
  username: "user1@user.com",
  name: "Renatão",
  exp: new Date().getTime(),
}

const key = "123456AbCdEf"

const headerEncoded = base64Url.encode(JSON.stringify(header))
const payloadEncoded = base64Url.encode(JSON.stringify(payload))

// console.log(headerEncoded, payloadEncoded)

const crypt = require("crypto")
const signature = crypt.createHmac("sha256", key)
    .update(`${headerEncoded}.${payloadEncoded}`)
    .digest("bin")

console.log( `${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}` )