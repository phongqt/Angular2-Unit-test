System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthHelper;
    return {
        setters:[],
        execute: function() {
            (function (AuthHelper) {
                var cookie;
                function setCookieStore(key, object) {
                    this.cookie.setCookie(key, object);
                }
                AuthHelper.setCookieStore = setCookieStore;
                function getCookieStore(key) {
                    // return Cookie.getCookie(key);
                }
                AuthHelper.getCookieStore = getCookieStore;
            })(AuthHelper = AuthHelper || (AuthHelper = {}));
            exports_1("AuthHelper", AuthHelper);
        }
    }
});
//# sourceMappingURL=auth-helper.js.map