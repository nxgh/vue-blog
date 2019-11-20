const getHeaders = text =>
  text
    .split('\n')
    .map(line => line.match(/^(#+)[ \t]+(.*)$/))
    .filter(header => header !== null)
    .map(([, prefix, title]) => ({ level: prefix.length, title }))

const createIndex = (headers, result = []) => {
  if (headers.length == 0) return result
  const parent = headers[0]
  const children = headers.slice(
    1,
    headers.slice(1).findIndex(header => header.level <= parent.level) + 1 ||
      headers.length
  )
  parent.children = createIndex(children)
  return createIndex(headers.slice(children.length + 1), result.concat([parent]))
}

const renderIndex = (index, numbered = false, indent = 4, indent_char = ' ') =>
  index
    .map(
      ({ level, title, children }, i) =>
        indent_char.repeat((level - 1) * indent) +
        (numbered ? i + 1 + '. ' : '* ') +
        `[${title}](#${title})` +
        (children.length > 0
          ? '\n' + renderIndex(children, numbered, indent, indent_char)
          : '')
    )
    .join('\n')

export const extract_title = text => {
  // console.log('========== text ===========\n')
  const headers = getHeaders(text)
  // console.log('========== headers ===========\n', headers)
  const index = createIndex(headers)
  // console.log('========== index ===========\n', index)
  const markdown = renderIndex(index)
  // console.log('========== markdown ===========\n', markdown)
  return markdown
}
