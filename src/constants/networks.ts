import INK_LOGO_URL from '../assets/images/ink-1.svg'
import { SupportedChainId } from '@pollum-io/sdk-core'

export enum SupportedNetwork {
  INK,
}

export type NetworkInfo = {
  chainId: SupportedChainId
  id: SupportedNetwork
  route: string
  name: string
  imageURL: string
  bgColor: string
  primaryColor: string
  secondaryColor: string
  blurb?: string
}

export const EthereumNetworkInfo: NetworkInfo = {
  chainId: SupportedChainId.INK,
  id: SupportedNetwork.INK,
  route: '',
  name: 'Plasma',
  bgColor: '#fc077d',
  primaryColor: '#fc077d',
  secondaryColor: '#2172E5',
  imageURL: INK_LOGO_URL,
}
export const SUPPORTED_NETWORK_VERSIONS: NetworkInfo[] = [EthereumNetworkInfo]
