if(localStorage.getItem('GROWRegistration' == 'registered')) {
  $('a[href^="resources"]').each(function() {
    this.href = 'resources-access.html';
    })
}
