import { PincodeType, RecoveryPhraseInOnboardingStatus } from 'src/account/reducer'
import { getInitialRoute } from 'src/navigator/initialRoute'
import { Screens } from 'src/navigator/Screens'

describe('initialRoute', () => {
  const defaultArgs = {
    choseToRestoreAccount: false,
    language: 'en',
    acceptedTerms: true,
    pincodeType: PincodeType.CustomPin,
    account: '0x1234',
    hasSeenVerificationNux: true,
    recoveryPhraseInOnboardingStatus: RecoveryPhraseInOnboardingStatus.NotStarted,
  }

  it('returns language screen if no language is set', () => {
    expect(getInitialRoute({ ...defaultArgs, language: null })).toEqual(Screens.Language)
  })

  it('returns welcome screen if not accepted terms', () => {
    expect(getInitialRoute({ ...defaultArgs, acceptedTerms: false })).toEqual(Screens.Welcome)
  })

  it('returns welcome screen if not pincode is unset', () => {
    expect(getInitialRoute({ ...defaultArgs, pincodeType: PincodeType.Unset })).toEqual(
      Screens.Welcome
    )
  })

  it('returns welcome screen if account is null', () => {
    expect(getInitialRoute({ ...defaultArgs, account: null })).toEqual(Screens.Welcome)
  })

  it('returns import wallet screen if account is null and choose to restore account', () => {
    expect(getInitialRoute({ ...defaultArgs, account: null, choseToRestoreAccount: true })).toEqual(
      Screens.ImportWallet
    )
  })

  it('returns protect wallet if recovery phrase in onboarding seen but not saved', () => {
    expect(
      getInitialRoute({
        ...defaultArgs,
        recoveryPhraseInOnboardingStatus: RecoveryPhraseInOnboardingStatus.InProgress,
      })
    ).toEqual(Screens.ProtectWallet)
  })

  it('returns PN verification if not seen verification', () => {
    expect(getInitialRoute({ ...defaultArgs, hasSeenVerificationNux: false })).toEqual(
      Screens.VerificationStartScreen
    )
  })

  it('returns PN verification if not seen verification and saved recovery phrase', () => {
    expect(
      getInitialRoute({
        ...defaultArgs,
        hasSeenVerificationNux: false,
        recoveryPhraseInOnboardingStatus: RecoveryPhraseInOnboardingStatus.Completed,
      })
    ).toEqual(Screens.VerificationStartScreen)
  })

  it('returns drawer navigator if all onboarding complete', () => {
    expect(getInitialRoute(defaultArgs)).toEqual(Screens.DrawerNavigator)
  })

  it('returns drawer navigator if all onboarding complete and saved recovery phrase', () => {
    expect(
      getInitialRoute({
        ...defaultArgs,
        recoveryPhraseInOnboardingStatus: RecoveryPhraseInOnboardingStatus.Completed,
      })
    ).toEqual(Screens.DrawerNavigator)
  })
})
