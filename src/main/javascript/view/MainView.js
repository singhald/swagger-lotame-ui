'use strict';

SwaggerUi.Views.MainView = Backbone.View.extend({
  events: {
      'click .mobile-nav, [data-navigator]': 'clickSidebarNav',
      'click [data-resource]': 'clickResource',
      'click [data-tg-switch]': 'toggleToken',
      'click #explore': 'showCustom'
  },
  apisSorter : {
    alpha   : function(a,b){ return a.name.localeCompare(b.name); }
  },
  operationsSorters : {
    alpha   : function(a,b){ return a.path.localeCompare(b.path); },
    method  : function(a,b){ return a.method.localeCompare(b.method); }
  },
  initialize: function(opts){
    var sorterOption, sorterFn, key, value;
    opts = opts || {};

    this.router = opts.router;

    // Sort APIs
    if (opts.swaggerOptions.apisSorter) {
      sorterOption = opts.swaggerOptions.apisSorter;
      if (_.isFunction(sorterOption)) {
        sorterFn = sorterOption;
      } else {
        sorterFn = this.apisSorter[sorterOption];
      }
      if (_.isFunction(sorterFn)) {
        this.model.apisArray.sort(sorterFn);
      }
    }
    // Sort operations of each API
    if (opts.swaggerOptions.operationsSorter) {
      sorterOption = opts.swaggerOptions.operationsSorter;
      if (_.isFunction(sorterOption)) {
        sorterFn = sorterOption;
      } else {
        sorterFn = this.operationsSorters[sorterOption];
      }
      if (_.isFunction(sorterFn)) {
        for (key in this.model.apisArray) {
          this.model.apisArray[key].operationsArray.sort(sorterFn);
        }
      }
    }

    // set up the UI for input
    this.model.auths = [];

    for (key in this.model.securityDefinitions) {
      value = this.model.securityDefinitions[key];

      this.model.auths.push({
        name: key,
        type: value.type,
        value: value
      });
    }

    if ('validatorUrl' in opts.swaggerOptions) {
      // Validator URL specified explicitly
      this.model.validatorUrl = opts.swaggerOptions.validatorUrl;
    } else if (this.model.url.indexOf('localhost') > 0 || this.model.url.indexOf('127.0.0.1') > 0) {
      // Localhost override
      this.model.validatorUrl = null;
    } else {
      this.model.validatorUrl = window.location.protocoal+'//online.swagger.io/validator';
    }

    // JSonEditor requires type='object' to be present on defined types, we add it if it's missing
    // is there any valid case were it should not be added ?
    var def;
    for(def in this.model.definitions){
      if (!this.model.definitions[def].type){
        this.model.definitions[def].type = 'object';
      }
    }

  },

  render: function () {
    $(this.el).html(Handlebars.templates.main(this.model));

    this.model.securityDefinitions = this.model.securityDefinitions || {};

    // Render each resource

    var resources = {};
    var counter = 0;
    for (var i = 0; i < this.model.apisArray.length; i++) {
      var resource = this.model.apisArray[i];
      var id = resource.name;
      while (typeof resources[id] !== 'undefined') {
        id = id + '_' + counter;
        counter += 1;
      }
      resource.id = sanitizeHtml(id);
      resource.nmbr=i;
      resources[id] = resource;
      this.addResource(resource, this.model.auths);
      this.addSidebarHeader(resource, i);
    }

    $('.propWrap').hover(function onHover(){
      $('.optionsWrapper', $(this)).show();
    }, function offhover(){
      $('.optionsWrapper', $(this)).hide();
    });
    if (window.location.hash.length === 0) {
        var n = $(this.el).find('#resources_nav [data-resource]').first();
        n.trigger('click');
        $(window).scrollTop(0);
    }
    return this;
  },

  addResource: function(resource, auths){
    // Render a resource and add it to resources li
    resource.id = resource.id.replace(/\s/g, '_');

    // Make all definitions available at the root of the resource so that they can
    // be loaded by the JSonEditor
    resource.definitions = this.model.definitions;

    var resourceView = new SwaggerUi.Views.ResourceView({
      model: resource,
      router: this.router,
      tagName: 'li',
      id: 'resource_' + resource.id,
      className: 'resource',
      auths: auths,
      swaggerOptions: this.options.swaggerOptions
    });
    $('#resources', $(this.el)).append(resourceView.render().el);
  },

  addSidebarHeader: function (resource, i) {
      resource.id=resource.id.replace(/\s/g,'_');
      var sidebarView = new SwaggerUi.Views.SidebarHeaderView({
          model: resource,
          tagName: 'div',
          className: function() {
              return i==0?'active':'';
          },
          attributes: {
              'data-resource': 'resource_'+ sanitizeHtml(resource.name),
              'label': sanitizeHtml(resource.name)
          },
          router: this.router,
          swaggerOptions: this.options.swaggerOptions
      });
      $('#resources_nav', $(this.el)).append(sidebarView.render().el);
  },

  clear: function(){
    $(this.el).html('');
  },

  clickSidebarNav: function(e) {
      console.log('clickSidebarNav');
      console.log(e);
      $('.sticky-nav').toggleClass('nav-open')
  },

  toggleToken: function (e) {
    var t = $(".token-generator"),
      tg = $("[data-tg-switch]");

    t.toggleClass("hide");
    t.hasClass("hide") ? tg.removeClass("active") : tg.addClass("active");
    t.parents(".sticky-nav").trigger("mobile_nav:update")
  },

  closeToken: function (e) {
    var t = $(".token-generator"),
      tg = $("[data-tg-switch]");

    t.addClass("hide");
    tg.removeClass("active");
    t.parents(".sticky-nav").trigger("mobile_nav:update")
  },

  openToken: function (e) {
    var t = $(".token-generator"),
      tg = $("[data-tg-switch]");

    t.removeClass("hide");
    tg.removeClass("active");
    t.parents(".sticky-nav").trigger("mobile_nav:update")
  },

  showCustom: function(e){
    if (e) {
      e.preventDefault();
    }
    this.trigger('update-swagger-ui', {
      url: $('#input_baseUrl').val(),
      apiKey: $('#input_apiKey').val()
    });
  },


  clickResource: function(e) {
      console.log('clickResource');
      console.log(e);
      if (!$(e.target).is('.item')){
          var n = $(e.target).find('.item').first();
          $('.sticky-nav').find('[data-resource].active').removeClass('active');
          $(e.target).find('[data-resource]').first().addClass('active');
          n.trigger('click');
      }
  }
});
