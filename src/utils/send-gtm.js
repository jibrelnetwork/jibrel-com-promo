
function sendEventGTM(eventCategory, eventAction, eventLabel) {  
  window.dataLayer.push({
    event: 'autoEvent',
    eventCategory: eventCategory,
    eventAction: eventAction,
    eventLabel: eventLabel
  })
}

function sendEventGTMAccountType(eventCategory, eventAction, eventLabel, accountType) {
  window.dataLayer.push({
    event: 'autoEvent',
    eventCategory: eventCategory,
    eventAction: eventAction,
    eventLabel: eventLabel,
    accountType: accountType
  })
}

function sendVirtualPageviewGTM(virtualTitle, virtualUrl) {
  const virtualHost = window.location.host
  window.dataLayer.push({
    event: 'virtualPageview',
    virtualHost: virtualHost,
    virtualTitle: virtualTitle,
    virtualUrl: virtualUrl,
  })
}

export { sendEventGTM, sendEventGTMAccountType, sendVirtualPageviewGTM }