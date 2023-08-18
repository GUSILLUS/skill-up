export const GA_TRACKING_ID = "G-48ZD07K18G" //replace it with your measurement id

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

// eventMetric - функція для кастомних івентів
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const eventMetric = ({ action, category, label = '', value = '' }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
