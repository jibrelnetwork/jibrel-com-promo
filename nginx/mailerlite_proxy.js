var GROUP_ID_MAP = {
  investor_individual: {
    en: '48972162',
    ar: '48972200',
    'zh-hans': '48972226',
    ko: '51106876'
  },
  investor_organization: {
    en: '48972162',
    ar: '48972200',
    'zh-hans': '48972226',
    ko: '51106876'
  },
  startup: {
    en: '48975748',
    ar: '48975600',
    'zh-hans': '48975466',
    ko: '51106914'
  }
}

function add_to_group(req) {
  if (req.method !== 'POST') {
    return req.return(405)
  }

  try {
    var json = JSON.parse(req.requestBody)

    var group_id = GROUP_ID_MAP[json.fields.user_type][json.fields.language]

    req.subrequest(
      '/mailerlite/subscribe_to_group/' + group_id + '/subscribers',
      {
        body: req.requestBody,
        method: 'POST',
      },
      function (r) {
        req.return(r.status, r.responseBody)
      }
    )
  } catch (err) {
    req.error(err)
    return req.return(405)
  }
}
