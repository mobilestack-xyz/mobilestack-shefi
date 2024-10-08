import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'
import RowDivider from 'src/components/RowDivider'
import TokenDisplay from 'src/components/TokenDisplay'
import { useEarnPositionProviderName } from 'src/earn/hooks'
import Colors from 'src/styles/colors'
import { typeScale } from 'src/styles/fonts'
import { useTokenInfo } from 'src/tokens/hooks'
import FeeRowItem from 'src/transactions/feed/detailContent/FeeRowItem'
import { EarnClaimReward, EarnDeposit, EarnWithdraw, FeeType } from 'src/transactions/types'

interface EarnClaimRewardProps {
  transaction: EarnClaimReward
}

export function EarnClaimContent({ transaction }: EarnClaimRewardProps) {
  const { t } = useTranslation()
  const providerName = useEarnPositionProviderName(transaction.providerId)
  const tokenInfo = useTokenInfo(transaction.amount.tokenId)
  const tokenSymbol = tokenInfo?.symbol ?? ''

  return (
    <>
      <Text style={styles.detailsTitle}>{t('earnFlow.transactionDetails.descriptionLabel')}</Text>
      {!!providerName && (
        <Text style={styles.detailsSubtitle}>
          {t('earnFlow.transactionDetails.earnClaimSubtitle', { providerName, tokenSymbol })}
        </Text>
      )}
      <RowDivider />
      <View>
        <View style={styles.row}>
          <Text style={styles.amountTitle} testID={'EarnFeedItem/title'}>
            {t('earnFlow.transactionDetails.earnClaimDetails')}
          </Text>
          <TokenDisplay
            amount={transaction.amount.value}
            tokenId={transaction.amount.tokenId}
            showSymbol={true}
            showLocalAmount={false}
            style={styles.amountTitle}
          />
        </View>
        <TokenDisplay
          amount={transaction.amount.value}
          tokenId={transaction.amount.tokenId}
          style={styles.amountSubtitle}
        />
      </View>
      <RowDivider />
      <FeeRowItem
        fees={transaction.fees}
        feeType={FeeType.SecurityFee}
        transactionStatus={transaction.status}
      />
    </>
  )
}

interface EarnDepositProps {
  transaction: EarnDeposit
}

export function EarnDepositContent({ transaction }: EarnDepositProps) {
  const { t } = useTranslation()
  const providerName = useEarnPositionProviderName(transaction.providerId)
  const tokenInfo = useTokenInfo(transaction.outAmount.tokenId)
  const tokenSymbol = tokenInfo?.symbol ?? ''

  return (
    <>
      <Text style={styles.detailsTitle}>{t('earnFlow.transactionDetails.descriptionLabel')}</Text>
      {!!providerName && (
        <Text style={styles.detailsSubtitle}>
          {t('earnFlow.transactionDetails.earnDepositSubtitle', { providerName, tokenSymbol })}
        </Text>
      )}
      <RowDivider />
      <View>
        <View style={styles.row}>
          <Text style={styles.amountTitle} testID={'EarnDepositDetails/title'}>
            {t('earnFlow.transactionDetails.earnDepositDetails')}
          </Text>
          <TokenDisplay
            amount={transaction.outAmount.value}
            tokenId={transaction.outAmount.tokenId}
            showSymbol={true}
            showLocalAmount={false}
            style={styles.amountTitle}
          />
        </View>
        <TokenDisplay
          amount={transaction.outAmount.value}
          tokenId={transaction.outAmount.tokenId}
          style={styles.amountSubtitle}
        />
      </View>
      <RowDivider />
      <FeeRowItem
        fees={transaction.fees}
        feeType={FeeType.SecurityFee}
        transactionStatus={transaction.status}
      />
    </>
  )
}

interface EarnWithdrawProps {
  transaction: EarnWithdraw
}

export function EarnWithdrawContent({ transaction }: EarnWithdrawProps) {
  const { t } = useTranslation()
  const providerName = useEarnPositionProviderName(transaction.providerId)
  const tokenInfo = useTokenInfo(transaction.inAmount.tokenId)
  const tokenSymbol = tokenInfo?.symbol ?? ''

  return (
    <>
      <Text style={styles.detailsTitle}>{t('earnFlow.transactionDetails.descriptionLabel')}</Text>
      {!!providerName && (
        <Text style={styles.detailsSubtitle}>
          {t('earnFlow.transactionDetails.earnWithdrawSubtitle', { providerName, tokenSymbol })}
        </Text>
      )}
      <RowDivider />
      <View>
        <View style={styles.row}>
          <Text style={styles.amountTitle} testID={'EarnWithdrawDetails/title'}>
            {t('earnFlow.transactionDetails.earnWithdrawDetails')}
          </Text>
          <TokenDisplay
            amount={transaction.inAmount.value}
            tokenId={transaction.inAmount.tokenId}
            showSymbol={true}
            showLocalAmount={false}
            style={styles.amountTitle}
          />
        </View>
        <TokenDisplay
          amount={transaction.inAmount.value}
          tokenId={transaction.inAmount.tokenId}
          style={styles.amountSubtitle}
        />
      </View>
      <RowDivider />
      <FeeRowItem
        fees={transaction.fees}
        feeType={FeeType.SecurityFee}
        transactionStatus={transaction.status}
      />
    </>
  )
}

const styles = StyleSheet.create({
  detailsTitle: {
    ...typeScale.labelSmall,
    color: Colors.black,
  },
  detailsSubtitle: {
    ...typeScale.bodyMedium,
    color: Colors.black,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  amountTitle: {
    ...typeScale.labelSemiBoldMedium,
    color: Colors.black,
  },
  amountSubtitle: {
    ...typeScale.bodySmall,
    color: Colors.gray4,
    marginLeft: 'auto',
  },
})
