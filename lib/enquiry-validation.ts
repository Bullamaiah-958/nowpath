export function validateEnquiryName(value: string) {
  const name = value.trim()
  if (!name) return 'Please enter your full name.'
  if (/\p{N}/u.test(name)) return 'Your name cannot contain numbers.'
  if (Array.from(name).length < 3) return 'Your name must contain at least 3 characters.'
  if (name.length > 100) return 'Your name must contain no more than 100 characters.'
  return ''
}

export function validateEnquiryPhone(value: string) {
  if (!value) return 'Please enter your mobile number.'
  if (!/^[0-9]+$/.test(value)) return 'Enter numbers only, without spaces or a country code.'
  if (!/^[6-9]/.test(value)) return 'Your mobile number must start with 6, 7, 8 or 9.'
  if (!/^[6-9][0-9]{9}$/.test(value)) return 'Your mobile number must contain exactly 10 digits.'
  return ''
}
