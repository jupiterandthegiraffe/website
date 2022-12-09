/*
 * add data-page plus an item in this object that correspons to the value of data-page
 * for instance <html data-page="awards-page"/>
 * will load whatever is assigned to 'awards-page' key
 */
const pages = {
  // 'awards-page': require('./progress-page').default EXAMPLE FOR FUTURE REFERENCE
  'progress-page': require('./progress-page').default,
  'services-page': require('./services-page').default,
  'about-page': require('./about-page').default,
  'contact-page': require('./contact-page').default
}


const pageLoader = document.querySelectorAll('[data-page]')
if (pageLoader.length) {
  pageLoader.forEach(page => {
    const pageName = page.getAttribute('data-page')
    if (pageName) {
      pages[pageName]()
    }
  })
}