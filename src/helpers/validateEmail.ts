const emailRegex =
  "^[-!#$%&'*+\\/0-9=?A-Z^_a-z`{|}~](.?[-!#$%&'*+\\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*.?[a-zA-Z0-9])*.[a-zA-Z](-?[a-zA-Z0-9])+$"
export function validateEmail(email: string) {
  if (!email) return false
  if (email.length > 50) return false
  if (!new RegExp(emailRegex).test(email)) return false
  return true
}