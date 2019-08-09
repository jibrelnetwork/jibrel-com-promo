
function sendEventGTM(eventCategory, eventAction, eventLabel) {
  console.log(eventCategory, eventAction, eventLabel)
  window.dataLayer.push({
    event: 'autoEvent',
    eventCategory: eventCategory,
    eventAction: eventAction,
    eventLabel: eventLabel
  })
}

function sendEventGTMAccountType(eventCategory, eventAction, eventLabel, accountType) {
  console.log(eventCategory, eventAction, eventLabel, accountType.replace('investor_', ''))
  window.dataLayer.push({
    event: 'autoEvent',
    eventCategory: eventCategory,
    eventAction: eventAction,
    eventLabel: eventLabel,
    accountType: accountType.replace('investor_', '')
  })
}

function sendVirtualPageviewGTM(virtualTitle, virtualUrl) {
  const virtualHost = window.location.host
  console.log(virtualHost, virtualTitle, virtualUrl)
  window.dataLayer.push({
    event: 'virtualPageview',
    virtualHost: virtualHost,
    virtualTitle: virtualTitle,
    virtualUrl: virtualUrl,
  })
}

export { sendEventGTM, sendEventGTMAccountType, sendVirtualPageviewGTM }