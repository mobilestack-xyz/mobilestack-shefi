import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DappFeaturedActions } from 'src/dappsExplorer/DappFeaturedActions'
import DiscoverDappsCard from 'src/dappsExplorer/DiscoverDappsCard'
import { EarnCardDiscover } from 'src/earn/EarnCard'
import PointsDiscoverCard from 'src/points/PointsDiscoverCard'
import { Colors } from 'src/styles/colors'
import { typeScale } from 'src/styles/fonts'
import { Spacing } from 'src/styles/styles'
import networkConfig from 'src/web3/networkConfig'

function TabHome() {
  return (
    <ScrollView testID="DiscoverScrollView" scrollEventThrottle={16}>
      <SafeAreaView testID="DAppsExplorerScreen" style={styles.safeAreaContainer} edges={[]}>
        <View style={styles.contentContainer}>
          <DappFeaturedActions />
          <PointsDiscoverCard />
          <EarnCardDiscover
            poolTokenId={networkConfig.aaveArbUsdcTokenId}
            depositTokenId={networkConfig.arbUsdcTokenId}
          />
          <DiscoverDappsCard />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    paddingTop: Spacing.Thick24,
  },
  contentContainer: {
    paddingHorizontal: Spacing.Thick24,
    paddingBottom: Spacing.Thick24,
  },
  title: {
    ...typeScale.titleMedium,
    color: Colors.black,
    paddingVertical: Spacing.Thick24,
  },
})

export default TabHome
