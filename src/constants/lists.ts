// used to mark unsupported tokens, these are hosted lists of unsupported tokens

export const UNSUPPORTED_LIST_URLS: string[] = []
// export const INK_LIST = 'https://gateway.pinata.cloud/ipfs/QmTD2QoWACBXdJ78R6EwK7qUkGpLw7x6Ffvcq1FSQ2NRYo'
// TODO: review link to list on ink
export const INK_LIST =
  'https://raw.githubusercontent.com/jingo-fi/default-token-list/main/build/jingo-default.tokenlist.json'
// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  INK_LIST,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [INK_LIST]
