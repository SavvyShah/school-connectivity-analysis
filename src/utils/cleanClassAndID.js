export default function cleanClassAndID(str) {
  let cleaned = str
  const RegexStr = /\s|[^\w]/g
  cleaned = cleaned.replace(RegexStr, '')
  return cleaned
}
