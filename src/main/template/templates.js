/* jshint ignore:start */ 
 {(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['apikey_auth'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <span class=\"key_auth__value\">"
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.value : depth0),{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <input placeholder=\"api_key\" class=\"auth_input input_apiKey_entry\" name=\"apiKey\" type=\"text\"/>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<div class=\"key_input_container\">\n    <h3 class=\"auth__title\">Api key authorization</h3>\n    <div class=\"auth__description\">"
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n    <div>\n        <div class=\"key_auth__field\">\n            <span class=\"key_auth__label\">name:</span>\n            <span class=\"key_auth__value\">"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</span>\n        </div>\n        <div class=\"key_auth__field\">\n            <span class=\"key_auth__label\">in:</span>\n            <span class=\"key_auth__value\">"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0["in"] : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</span>\n        </div>\n        <div class=\"key_auth__field\">\n            <span class=\"key_auth__label\">value:</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLogout : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n";
},"useData":true});
templates['auth_button'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class='authorize__btn' href=\"#\">Authorize</a>\n";
},"useData":true});
templates['auth_button_operation'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        authorize__btn_operation_login\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        authorize__btn_operation_logout\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <ul class=\"authorize-scopes\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.scopes : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "                <li class=\"authorize__scope\" title=\""
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.scope : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"authorize__btn authorize__btn_operation\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLogout : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scopes : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
templates['auth_view'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <button type=\"button\" class=\"auth__button auth_submit__button\" data-sw-translate>Authorize</button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <button type=\"button\" class=\"auth__button auth_logout__button\" data-sw-translate>Logout</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"auth_container\">\n\n    <div class=\"auth_inner\"></div>\n    <div class=\"auth_submit\">\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.isLogout : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isAuthorized : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n</div>\n";
},"useData":true});
templates['basic_auth'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " - authorized";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <span class=\"basic_auth__value\">"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.username : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                <input required placeholder=\"username\" class=\"basic_auth__username auth_input\" name=\"username\" type=\"text\"/>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"auth_label\">\n                <span class=\"basic_auth__label\" data-sw-translate>password:</span>\n                <input required placeholder=\"password\" class=\"basic_auth__password auth_input\" name=\"password\" type=\"password\"/></label>\n            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class='basic_auth_container'>\n    <h3 class=\"auth__title\">Basic authentication"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLogout : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</h3>\n    <form class=\"basic_input_container\">\n        <div class=\"auth__description\">"
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n        <div class=\"auth_label\">\n            <span class=\"basic_auth__label\" data-sw-translate>username:</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLogout : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.isLogout : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </form>\n</div>\n";
},"useData":true});
templates['content_type'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.produces : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "	<option value=\""
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,depth0,{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,depth0,{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "</option>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <option value=\"application/json\">application/json</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<label data-sw-translate for=\""
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.contentTypeId : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\">Response Content Type</label>\n<select name=\"contentType\" id=\""
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.contentTypeId : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.produces : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</select>\n";
},"useData":true});
templates['main'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "  <div class=\"info_title\">"
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.title : stack1),{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n  <div class=\"info_description markdown\">"
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.description : stack1),{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.externalDocs : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.termsOfServiceUrl : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.name : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.email : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.license : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "  <p>"
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.externalDocs : depth0)) != null ? stack1.description : stack1),{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "</p>\n  <a href=\""
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.externalDocs : depth0)) != null ? stack1.url : stack1),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\" target=\"_blank\">"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.externalDocs : depth0)) != null ? stack1.url : stack1),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"info_tos\"><a target=\"_blank\" href=\""
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.termsOfServiceUrl : stack1),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\" data-sw-translate>Terms of service</a></div>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div><div class='info_name' style=\"display: inline\" data-sw-translate>Created by </div> "
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.name : stack1),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<div class='info_url' data-sw-translate>See more at <a href=\""
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.url : stack1),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.url : stack1),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</a></div>";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<div class='info_email'><a target=\"_parent\" href=\"mailto:"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.email : stack1),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "?subject="
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.title : stack1),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\" data-sw-translate>Contact the developer</a></div>";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<div class='info_license'><a target=\"_blank\" href='"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.license : stack1)) != null ? stack1.url : stack1),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "'>"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.license : stack1)) != null ? stack1.name : stack1),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</a></div>";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  , <span style=\"font-variant: small-caps\" data-sw-translate>api version</span>: "
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.version : stack1),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\n    ";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "    <span style=\"float:right\"><a target=\"_blank\" href=\""
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.validatorUrl : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "/debug?url="
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\"><img id=\"validator\" src=\""
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.validatorUrl : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "?url="
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\"></a>\n    </span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"swagger_sidebar\">\n    <div class=\"sitcky-nav-placeholder\">\n        <div class=\"sticky-nav\">\n            <div class=\"mobile_nav\">\n                <span class=\"select-label\">API Reference: </span><span data-selected-value></span>\n            </div>\n            <div data-navigator>\n                <div data-resource=\"\" label=\"Tools\">\n                    <div class=\"item\" data-tg-switch=\"\">Swagger Resource <span class=\"status\"></span></div>\n                </div>\n                <div id=\"resources_nav\">\n                </div>\n            </div>\n            <p class=\"changes-disclaimer\">\n<div class='info' id='api_info'>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.info : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n</div></div></div>\n<div id='resources_container'>\n  <ul id='resources' class=\"samples-collapsed\"></ul>\n\n<!--\n  <div class=\"footer\">\n    <h4 style=\"color: #999\">[ <span style=\"font-variant: small-caps\">base url</span>: "
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.basePath : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.version : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "]\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.validatorUrl : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </h4>\n    </div>\n    -->\n</div>\n";
},"useData":true});
templates['oauth2'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p>Authorization URL: "
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.authorizationUrl : depth0),{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "</p>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p>Token URL: "
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.tokenUrl : depth0),{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "</p>";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <p>Please input username and password for password flow authorization</p>\n        <fieldset>\n            <div><label>Username: <input class=\"oauth-username\" type=\"text\" name=\"username\"></label></div>\n            <div><label>Password: <input class=\"oauth-password\" type=\"password\" name=\"password\"></label></div>\n        </fieldset>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <p>Setup client authentication."
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.requireClientAuthenticaiton : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</p>\n        <fieldset>\n            <div><label>Type:\n                <select class=\"oauth-client-authentication-type\" name=\"client-authentication-type\">\n                    <option value=\"none\" selected>None or other</option>\n                    <option value=\"basic\">Basic auth</option>\n                    <option value=\"request-body\">Request body</option>\n                </select>\n            </label></div>\n            <div class=\"oauth-client-authentication\" hidden>\n                <div><label>ClientId: <input class=\"oauth-client-id\" type=\"text\" name=\"client-id\"></label></div>\n                <div><label>Secret: <input class=\"oauth-client-secret\" type=\"text\" name=\"client-secret\"></label></div>\n            </div>\n        </fieldset>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "(Required)";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "            <li>\n                <input class=\"oauth-scope\" type=\"checkbox\" data-scope=\""
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.scope : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\" oauthtype=\""
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.OAuthSchemeKey : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\"/>\n                <label>"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.scope : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</label><br/>\n                <span class=\"api-scope-desc\">"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.OAuthSchemeKey : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </span>\n            </li>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        ("
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.OAuthSchemeKey : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + ")\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<div>\n    <h3 class=\"auth__title\">OAuth2.0</h3>\n    <p>"
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "</p>\n    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.authorizationUrl : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tokenUrl : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <p>flow: "
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.flow : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isPasswordFlow : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.clientAuthentication : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <p><strong> "
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.appName : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + " </strong> API requires the following scopes. Select which ones you want to grant to Swagger UI.</p>\n    <p>Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes.\n        <a href=\"#\">Learn how to use</a>\n    </p>\n    <ul class=\"api-popup-scopes\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.scopes : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</div>";
},"useData":true});
templates['operation'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "deprecated";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <h4><span data-sw-translate>Warning: Deprecated</span></h4>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <h4><span data-sw-translate>Implementation Notes</span></h4>\n        <div class=\"markdown action-summary\">"
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.description : depth0),{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <div class='authorize-wrapper authorize-wrapper_operation'></div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "            <h4 class=\"swagger-expand\" data-control data-parm-toggle data-toggle=\"collapse\" data-target=\"#parm-"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.parentId : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "_"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.nickname : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\">\n                Parameters\n            </h4>\n            <div data-content class=\"operation-params collapse\" id=\"parm-"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.parentId : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "_"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.nickname : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\"></div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <div style=\"margin:0;padding:0;display:inline\"></div>\n                    <h4 data-control data-toggle=\"collapse\" data-target=\"#response-"
    + alias4(((helper = (helper = helpers.parentId || (depth0 != null ? depth0.parentId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"parentId","hash":{},"data":data}) : helper)))
    + "_"
    + alias4(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data}) : helper)))
    + "\">\n                        Response Messages\n                    </h4>\n\n                    <div data-content class=\"responses-wrapper collapse in\" id=\"response-"
    + alias4(((helper = (helper = helpers.parentId || (depth0 != null ? depth0.parentId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"parentId","hash":{},"data":data}) : helper)))
    + "_"
    + alias4(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data}) : helper)))
    + "\">\n                        <table class=\"fullwidth\">\n                            <tbody class=\"operation-status\">\n                            </tbody>\n                        </table>\n                    </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "          <h4 data-sw-translate>Request Headers</h4>\n          <div class='block request_headers'></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "  <ul class='operations' >\n    <li class='"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.method : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + " operation' id='"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.parentId : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "_"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.nickname : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "'>\n      <div class='content'>\n      <div class='heading'>\n      <h2 class='operation-title'>"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.summary : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</h2>\n        <h3>\n          <span class='http_method'>\n          <a href='#!/"
    + alias3((helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(depth0 != null ? depth0.encodedParentId : depth0),{"name":"sanitize","hash":{},"data":data}))
    + "/"
    + alias3((helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(depth0 != null ? depth0.nickname : depth0),{"name":"sanitize","hash":{},"data":data}))
    + "' class=\"toggleOperation\">"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.method : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</a>\n          </span>\n          <span class='path'>\n          <a href='#!/"
    + alias3((helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(depth0 != null ? depth0.encodedParentId : depth0),{"name":"sanitize","hash":{},"data":data}))
    + "/"
    + alias3((helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(depth0 != null ? depth0.nickname : depth0),{"name":"sanitize","hash":{},"data":data}))
    + "' class=\"toggleOperation "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.deprecated : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.path : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</a>\n          </span>\n        </h3>\n      </div>\n\n      <a href=\"javascript:;\" class=\"toggle-samples\" data-toggle=\"tooltip\" data-placement=\"left\" data-original-title title>\n        <span class=\"text\">Show Sample</span><span class=\"circle-icon\"></span>\n      </a>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.deprecated : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.security : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        \n        <form accept-charset=\"UTF-8\" class=\"sandbox\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.parameters : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <h4 data-control data-toggle='collapse' data-target='#test-"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.parentId : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "_"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.nickname : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "'>Test this endpoint</h4>\n<div class=\"heading\">\n        <h3>\n          <span class='http_method'>\n          <a href='#!/"
    + alias3((helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(depth0 != null ? depth0.encodedParentId : depth0),{"name":"sanitize","hash":{},"data":data}))
    + "/"
    + alias3((helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(depth0 != null ? depth0.nickname : depth0),{"name":"sanitize","hash":{},"data":data}))
    + "' class=\"toggleOperation\">"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.method : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</a>\n          </span>\n          <span class='path'>\n          <a href='#!/"
    + alias3((helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(depth0 != null ? depth0.encodedParentId : depth0),{"name":"sanitize","hash":{},"data":data}))
    + "/"
    + alias3((helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(depth0 != null ? depth0.nickname : depth0),{"name":"sanitize","hash":{},"data":data}))
    + "' class=\"toggleOperation "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.deprecated : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.path : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</a>\n          </span>\n        </h3>\n</div>\n\n        <div id='test-"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.parentId : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "_"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.nickname : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "'>\n            <div class=\"sandbox_header\" data-content>\n                <input class=\"submit btn btn-primary\" name=\"commit\" type=\"submit\" value=\"Try it out\" data-target='#get_clients-modal-request'>\n                <a href=\"#\" class=\"response_hider hide\" style=\"display:inline\">Hide Response</a>\n            </div>\n        </div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.responseMessages : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </form>\n\n        </div>\n        <div class=\"samples\">\n            <span class=\"model-signature\">\n            </span>\n        </div>\n        <div class='response' style='display:none'>\n          <h4 class='curl'>Curl</h4>\n          <div class='block curl'></div>\n          <h4 data-sw-translate>Request URL</h4>\n          <div class='block request_url'></div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showRequestHeaders : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          <h4 data-sw-translate>Response Body</h4>\n          <div class='block response_body'></div>\n          <h4 data-sw-translate>Response Code</h4>\n          <div class='block response_code'></div>\n          <h4 data-sw-translate>Response Headers</h4>\n          <div class='block response_headers'></div>\n        </div>\n    </li>\n  </ul>\n";
},"useData":true});
templates['param'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isFile : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "        <div class=\"small-description\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"markdown\">"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <input type=\"file\" name='"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "'/>\n\n            <div class=\"parameter-content-type\"/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["default"] : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class=\"editor_holder\"></div>\n\n                <textarea class='body-textarea ui-form-control' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "' data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"default","hash":{},"data":data}) : helper)))
    + "</textarea>\n                <div class=\"parameter-content-type\"/>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <textarea class='body-textarea ui-form-control' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "' data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'></textarea>\n                <div class=\"editor_holder\"></div>\n                <div class=\"parameter-content-type\"/>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <code class=\"code-signature\">"
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"type","hash":{},"data":data}) : helper)))
    + "</code>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isFile : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "")
    + "        <div class=\"small-description\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"markdown\">"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n        </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\n            <label class=\"btn btn-primary\" for=\"my-file-selector\">\n                <input id=\"my-file-selector\" type=\"file\" style=\"display:none;\" name='"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "'>\n                Choose file\n            </label>\n            <div class=\"parameter-content-type\"/>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["default"] : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <input class='parameter ui-form-control' minlength='0' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "' placeholder='' type='"
    + alias4(((helper = (helper = helpers.inputType || (depth0 != null ? depth0.inputType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputType","hash":{},"data":data}) : helper)))
    + "' value='"
    + alias4(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"default","hash":{},"data":data}) : helper)))
    + "'  data-toggle=\"tooltip\" data-placement=\"right\" title=\"\" data-original-title='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'/>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <input class='parameter ui-form-control' minlength='0' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "' placeholder='' type='"
    + alias4(((helper = (helper = helpers.inputType || (depth0 != null ? depth0.inputType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputType","hash":{},"data":data}) : helper)))
    + "' value=''  data-toggle=\"tooltip\" data-placement=\"right\" title=\"\" data-original-title='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'/>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"param-property hide\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n<div class=\"param-property\" data-label='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isBody : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['param_list'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " multiple='multiple'";
},"3":function(container,depth0,helpers,partials,data) {
    return "";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["default"] : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "                        <option selected=\"\" value=''></option>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isDefault : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option selected=\"\" value='"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + " (default)</option>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value='"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <code class=\"code-signature\">"
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"type","hash":{},"data":data}) : helper)))
    + "</code>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"param-property hide\" data-label=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n<div class=\"param-property\" data-label='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'>\n    <div>\n        <select "
    + ((stack1 = (helpers.isArray || (depth0 && depth0.isArray) || alias2).call(alias1,depth0,{"name":"isArray","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " class='parameter ui-form-control' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'  data-toggle=\"tooltip\" data-placement=\"right\" title=\"\" data-original-title='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.allowableValues : depth0)) != null ? stack1.descriptiveValues : stack1),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\n        <div class=\"small-description\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"markdown\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n        </div>\n    </div>\n</div>\n\n";
},"useData":true});
templates['param_readonly'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <textarea class='body-textarea ui-form-control' readonly='readonly' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'  data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"default","hash":{},"data":data}) : helper)))
    + "</textarea>\n            <div class=\"parameter-content-type\"/>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["default"] : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                "
    + container.escapeExpression(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"default","hash":{},"data":data}) : helper)))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                (empty)\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <code class=\"code-signature\">"
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"type","hash":{},"data":data}) : helper)))
    + "</code>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"param-property hide\" data-label=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n<div class=\"param-property\" data-label='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'>\n    <div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isBody : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        <div class=\"small-description\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"markdown\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
templates['param_readonly_required'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <textarea class='body-textarea ui-form-control' readonly='readonly' placeholder='(required)' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'  data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"default","hash":{},"data":data}) : helper)))
    + "</textarea>\n            <div class=\"parameter-content-type\"/>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["default"] : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                "
    + container.escapeExpression(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"default","hash":{},"data":data}) : helper)))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                (empty)\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <code class=\"code-signature\">"
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"type","hash":{},"data":data}) : helper)))
    + "</code>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"param-property hide\" data-label=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n<div class=\"param-property\" data-label='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'>\n    <div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isBody : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        <div class=\"small-description\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"markdown\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
templates['param_required'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isFile : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <input type=\"file\" name='"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "'/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["default"] : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class=\"editor_holder\"></div>\n                <textarea class='body-textarea ui-form-control required' placeholder='(required)' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'  data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"default","hash":{},"data":data}) : helper)))
    + "</textarea>\n                <div class=\"parameter-content-type\"/>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <textarea class='body-textarea ui-form-control required' placeholder='(required)' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "' data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'></textarea>\n                <div class=\"editor_holder\"></div>\n                <br/>\n                <div class=\"parameter-content-type\"/>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isFile : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <input class='parameter ui-form-control required' type='file' name='"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "'/>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["default"] : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <input class='parameter ui-form-control required' minlength='1' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "' placeholder='(required)' type='"
    + alias4(((helper = (helper = helpers.inputType || (depth0 != null ? depth0.inputType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputType","hash":{},"data":data}) : helper)))
    + "' value='"
    + alias4(((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"default","hash":{},"data":data}) : helper)))
    + "' data-toggle=\"tooltip\" data-placement=\"right\" title=\"\" data-original-title='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'/>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <input class='parameter ui-form-control required' minlength='1' name='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "' placeholder='(required)' type='"
    + alias4(((helper = (helper = helpers.inputType || (depth0 != null ? depth0.inputType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputType","hash":{},"data":data}) : helper)))
    + "' value='' data-toggle=\"tooltip\" data-placement=\"right\" title=\"\" data-original-title='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'/>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <code class=\"code-signature\">"
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"type","hash":{},"data":data}) : helper)))
    + "</code>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"param-property hide\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n<div class=\"param-property\" data-label='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isBody : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "    <div class=\"small-description\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"markdown\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n    </div>\n</div>\n\n";
},"useData":true});
templates['parameter_content_type'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.consumes : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "  <option value=\""
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,depth0,{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,depth0,{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "</option>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <option value=\"application/json\">application/json</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<label for=\""
    + container.escapeExpression(((helper = (helper = helpers.parameterContentTypeId || (depth0 != null ? depth0.parameterContentTypeId : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"parameterContentTypeId","hash":{},"data":data}) : helper)))
    + "\" data-sw-translate>Parameter content type:</label>\n<select name=\"parameterContentType\" id=\""
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(depth0 != null ? depth0.parameterContentTypeId : depth0),{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.consumes : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</select>\n";
},"useData":true});
templates['popup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"api-popup-dialog-wrapper\">\n    <div class=\"api-popup-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"api-popup-content\"></div>\n    <p class=\"error-msg\"></p>\n    <div class=\"api-popup-actions\">\n        <button class=\"api-popup-cancel api-button gray\" type=\"button\">Cancel</button>\n    </div>\n</div>\n<div class=\"api-popup-dialog-shadow\"></div>";
},"useData":true});
templates['resource'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class='endpoints' id='"
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.id : depth0),{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "_endpoint_list'>\n</ul>\n";
},"useData":true});
templates['response_content_type'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.produces : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "  <option value=\""
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,depth0,{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,depth0,{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + "</option>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <option value=\"application/json\">application/json</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<label data-sw-translate for=\""
    + alias4(((helper = (helper = helpers.responseContentTypeId || (depth0 != null ? depth0.responseContentTypeId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"responseContentTypeId","hash":{},"data":data}) : helper)))
    + "\">Response Content Type</label>\n<select name=\"responseContentType\" id=\""
    + alias4(((helper = (helper = helpers.responseContentTypeId || (depth0 != null ? depth0.responseContentTypeId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"responseContentTypeId","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.produces : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</select>\n";
},"useData":true});
templates['sidebar_header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['sidebar_item'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"summary","hash":{},"data":data}) : helper)))
    + "\n";
},"useData":true});
templates['signature'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<h4 class=\"schema-title collapsed\" data-control data-toggle=\"collapse\" data-target=\"#schema-"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + " Schema</h4>\n<div data-content class=\"collapse\" id=\"schema-"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\">\n    <div class=\"description\">\n        "
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.signature : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\n    </div>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<h4 class=\"sample-title\" data-control data-toggle=\"collapse\" data-target=\"#sample-"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"sanitize","hash":{},"data":data})) != null ? stack1 : "")
    + " Sample</h4>\n<div data-content class=\"collapse in\" id=\"sample-"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "\">\n    <div class=\"snippet\">\n        <pre><code>"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.sampleJSON : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</code></pre>\n    </div>\n</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.signature : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['status_code'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<td width='15%' class='code'>"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.code : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</td>\n<td class=\"markdown\">"
    + ((stack1 = (helpers.escape || (depth0 && depth0.escape) || alias2).call(alias1,(depth0 != null ? depth0.message : depth0),{"name":"escape","hash":{},"data":data})) != null ? stack1 : "")
    + "</td>\n";
},"useData":true});
})();} 
 /* jshint ignore:end */