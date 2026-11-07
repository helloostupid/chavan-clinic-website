export function telHref(phone) {
  return phone ? `tel:${phone}` : null
}

export function whatsappHref(number) {
  const digits = number.replace(/\D/g, '')
  return digits ? `https://wa.me/${digits}` : null
}

export function mailHref(email) {
  return email ? `mailto:${email}` : null
}
