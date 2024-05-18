import { TokenBalance } from 'src/tokens/slice'
import { SerializableTransactionRequest } from 'src/viem/preparedTransactionSerialization'

export interface DepositInfo {
  amount: string
  tokenId: string
  preparedTransactions: SerializableTransactionRequest[]
}

export interface RewardsInfo {
  amount: string
  tokenInfo: TokenBalance
}