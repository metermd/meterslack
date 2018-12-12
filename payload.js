// The following JavaScript snippet was authored by Jonathan la Cour, https://github.com/lacour
// and released to the public domain under CC0 (https://directory.fsf.org/wiki/License:CC0)
document.addEventListener('DOMContentLoaded', function() {
 $.ajax({
   url: 'https://raw.githubusercontent.com/metermd/meterslack/master/style.css',
   success: function(css) {
     $("<style></style>").appendTo('head').html(css);
   }
 });
});
