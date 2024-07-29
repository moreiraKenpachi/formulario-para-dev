interface HeadProps {
  title: string
  description?: string // ? significa opcional
}

export function Head({title, description = ''}: HeadProps) {
  document.title = ` Food Ecommerce | ${title}`
  document.querySelector('[name=description]')?.setAttribute('content', description)

  return null
}
