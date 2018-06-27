Vue.component('app-header', {
  template: '<div class ="float-header"><div class="logo-text"><h2>Florida Energy Systems Consortium</h2></div><div class="nav-text"><a href="index.html">Home</a><a href="Outreach.html">Outreach</a><a href="education.html">Education</a><a href="production.html">Energy Consumption</a><a href="contact.html">Contact Us</a></br></div>'
})

Vue.component('app-footer', {
  template: '<footer><div class="social"><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Check+this+out"></a><iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fasakleiman.github.io%2Fsocial-media%2F&layout=button_count&size=small&mobile_iframe=false&width=69&height=20&appId" width="69" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe></div><div class="copy">Copyright &copy; 2018 Florida Energy Systems Consortium. All Rights Reserved.</div></footer>'
})


var app = new Vue ({
  el: '#app'
})
