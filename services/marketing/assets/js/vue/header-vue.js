//Services Tabs
new Vue({
  el: "#header-how-it-works",
  data: {
      title: 'How it works',
      url: "https://pynely.com/services/marketing/social-media-management.html#how-it-works"
  }
});
new Vue({
  el: "#header-pricing",
  data: {
      title: 'Pricing',
      url: "https://pynely.com/services/marketing/social-media-management.html#price"
  }
});
new Vue({
  el: "#header-features",
  data: {
      title: "Features",
      url: "https://pynely.com/services/marketing/social-media-management.html#features"
  }
});
new Vue({
  el: "#header-faq",
  data: {
    title: "Faq",
    url: "https://pynely.com/services/marketing/social-media-management.html#faq"
  }
});

/*
  Partners
          */
          //Dropdown Menu - Partners - Marketing Services Label
          new Vue({
              el: '#header-dropdown-partners-label',
              data: {
                title: 'Partners'
              }
            });
            new Vue({
            el:"#header-partners-homes",
            data: {
            title: 'Partners Home',
            url: 'https://pynely.com/partners/home.html'
            }
            });
          new Vue({
          el:"#header-partners-white-lable",
          data: {
          title: 'White Label',
          url: 'https://pynely.com/partners/white-label.html'
          }
          });
          new Vue({
          el:"#header-partners-affilate",
          data: {
          title: 'Affiliate',
          url: 'https://pynely.com/partners/affiliates.html'
          }
          });
          //End Partners

          //Dropdown Menu - Blog
          new Vue({
              el: '#header-dropdown-blog-label',
              data: {
                title: 'Blog'
              }
            });

            new Vue({
              el:"#header-blog-social-media",
              data: {
                title: 'Social Media Blog',
                url: 'https://blog.pynely.com/home/?category=Social+Media'
              }
            });
            new Vue({
              el:"#header-blog-productivity",
              data: {
                title: 'Productivity Blog',
                url: 'https://blog.pynely.com/home/?category=Productivity'
              }
            });
            new Vue({
              el:"#header-blog-sales",
              data: {
                title: 'Sales Blog',
                url: 'https://blog.pynely.com/home/?category=Sales'
              }
            });
            new Vue({
              el:"#header-qa",
              data: {
                title: 'Q & A',
                url: 'https://blog.pynely.com/q-a/'
              }
            });
          //End Blog
