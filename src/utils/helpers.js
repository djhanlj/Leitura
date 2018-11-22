export function formatDate(timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return d.toLocaleDateString() + '  ' + time.substr(0, 5) + time.slice(-2)
}

export function toUpperCaseText(string) {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : null;
}

export function uuidv4() {
  return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> c / 4))).toString(16)
  )
}

export function formatPost(category, author, body, title) {
  return {
    id: uuidv4(),
    category: category,
    author: author,
    body: body,
    title: title,
    timestamp: Date.now()
  }
}

export function formatPostEdit(body, title) {
  return {
    body: body,
    title: title
  }
}


export function formatComment({ author, body, post_id }) {
  return {
    id: uuidv4(),
    author: author,
    body: body,
    parentId: post_id,
    timestamp: Date.now()
  }
}


export function formatCommentEdit(body) {
  return {
    body: body,
    timestamp: Date.now()
  }
}