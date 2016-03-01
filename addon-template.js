function addon(locals) {
var jade_debug = [ new jade.DebugItem( 1, "addon-template.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (RegExp, addon, endpoint) {
jade_debug.unshift(new jade.DebugItem( 0, "addon-template.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "addon-template.jade" ));
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 2, "addon-template.jade" ));
buf.push("<head>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "addon-template.jade" ));
buf.push("<link href=\"//fonts.googleapis.com/css?family=Lato:100,300,400,100italic,200italic,300italic\" rel=\"stylesheet\" type=\"text/css\">");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "addon-template.jade" ));
buf.push("<title>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp = addon.manifest.name) == null ? '' : jade_interp)) + " - Stremio Addon");
jade_debug.shift();
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "addon-template.jade" ));
buf.push("<style>");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("body,html{ ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    margin: 0px; padding: 0px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    font-family: Lato,'Open Sans',OpenSans,arial,sans-serif;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    font-weight: 300; color: white;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    cursor: default;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    width: 100%; height: 100%; ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("}");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("h1, h2, h3, h4, h5, h6 { font-weight: 300; }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("#addon {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    width: 400px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    position: absolute;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    left: 0px; right: 0px; top: 10%; bottom: auto;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    margin: auto;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("}");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("a {  text-decoration: none; }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("button {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    border: 0px; outline: 0px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    color: white;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    background: rgba(125,79,158,0.85);");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    padding: 13px 22px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    text-align: center;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    font-size: 17px;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    font-weight: 300;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    cursor: pointer;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    opacity: 0.9;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("    display: block;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("}");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("button:hover { opacity: 1; }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push(".logo { float: left; margin: 20px; }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push(".name { float: left; }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push(".version { float: right; }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push(".provides, .gives, .description { clear: both; }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push(".best { margin-bottom: 30px; }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("//h2 { text-align: center; }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("//button {  margin: 0px auto; }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push(".best img { width: 60px; }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
buf.push("");
jade_debug.shift();
jade_debug.shift();
buf.push("</style>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 46, "addon-template.jade" ));
if ( (addon.manifest.background))
{
jade_debug.unshift(new jade.DebugItem( 47, "addon-template.jade" ));
jade_debug.unshift(new jade.DebugItem( 47, "addon-template.jade" ));
buf.push("<style>");
jade_debug.unshift(new jade.DebugItem( 49, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 49, jade_debug[0].filename ));
buf.push("html { background-image: url(" + (jade.escape((jade_interp = addon.manifest.background) == null ? '' : jade_interp)) + "); background-size: auto 100%; background-size: cover; background-repeat: no-repeat; }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 49, jade_debug[0].filename ));
buf.push("body { background: rgba(0,0,0,0.65); }");
jade_debug.shift();
jade_debug.shift();
buf.push("</style>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift(new jade.DebugItem( 51, "addon-template.jade" ));
jade_debug.unshift(new jade.DebugItem( 51, "addon-template.jade" ));
buf.push("<style>");
jade_debug.unshift(new jade.DebugItem( 53, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 53, jade_debug[0].filename ));
buf.push("html { background-image: url('http://www.strem.io/3.0/background-1.jpg'); background-size: auto 100%; background-size: cover; background-repeat: no-repeat; }");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 53, jade_debug[0].filename ));
buf.push("");
jade_debug.shift();
jade_debug.shift();
buf.push("</style>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 54, "addon-template.jade" ));
buf.push("<body>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 55, "addon-template.jade" ));
buf.push("<div id=\"addon\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 56, "addon-template.jade" ));
if ( (addon.manifest.logo))
{
jade_debug.unshift(new jade.DebugItem( 57, "addon-template.jade" ));
jade_debug.unshift(new jade.DebugItem( 57, "addon-template.jade" ));
buf.push("<img" + (jade.attr("src", addon.manifest.logo, true, true)) + " class=\"logo\">");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift(new jade.DebugItem( 59, "addon-template.jade" ));
jade_debug.unshift(new jade.DebugItem( 59, "addon-template.jade" ));
buf.push("<h2 class=\"name\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 59, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp = addon.manifest.name) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 60, "addon-template.jade" ));
buf.push("<h3 class=\"version\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 60, jade_debug[0].filename ));
buf.push("<i>" + (jade.escape((jade_interp = addon.manifest.version) == null ? '' : jade_interp)) + "</i>");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 61, "addon-template.jade" ));
buf.push("<h3 class=\"description\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 61, jade_debug[0].filename ));
buf.push("" + (((jade_interp = addon.manifest.webDescription || addon.manifest.description) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 62, "addon-template.jade" ));
buf.push("<h3 class=\"provides\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 64, "addon-template.jade" ));
var mapType = function(t) { return ({ movie: "Movies", series: "Series", tv: "TV Channels", channel: "Channels" })[t] || t };
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 66, "addon-template.jade" ));
buf.push("<h2 class=\"gives\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 66, jade_debug[0].filename ));
buf.push("This add-on will give you:");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 67, "addon-template.jade" ));
buf.push("<ul>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 68, "addon-template.jade" ));
if ( addon.methods['meta.find'])
{
jade_debug.unshift(new jade.DebugItem( 69, "addon-template.jade" ));
jade_debug.unshift(new jade.DebugItem( 69, "addon-template.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 69, jade_debug[0].filename ));
buf.push("More " + (jade.escape((jade_interp = addon.manifest.types.map(mapType).join(", ")) == null ? '' : jade_interp)) + " in Discover");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 70, "addon-template.jade" ));
if ( addon.methods['stream.find'])
{
jade_debug.unshift(new jade.DebugItem( 71, "addon-template.jade" ));
jade_debug.unshift(new jade.DebugItem( 71, "addon-template.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 71, jade_debug[0].filename ));
buf.push("Watch " + (jade.escape((jade_interp = addon.manifest.types.map(mapType).join(", ")) == null ? '' : jade_interp)) + " " + (jade.escape((jade_interp = addon.manifest.isFree ? 'for FREE' : '') == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 72, "addon-template.jade" ));
if ( addon.methods['subtitles.get'])
{
jade_debug.unshift(new jade.DebugItem( 73, "addon-template.jade" ));
jade_debug.unshift(new jade.DebugItem( 73, "addon-template.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 73, jade_debug[0].filename ));
buf.push("Subtitles for " + (jade.escape((jade_interp = addon.manifest.types.map(mapType).join(", ")) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 75, "addon-template.jade" ));
buf.push("<div style=\"display: none;\" class=\"best\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 76, "addon-template.jade" ));
buf.push("<h2>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 76, jade_debug[0].filename ));
buf.push("Best from this add-on: ");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 77, "addon-template.jade" ));
buf.push("<div class=\"posters\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 79, "addon-template.jade" ));
if ( endpoint)
{
jade_debug.unshift(new jade.DebugItem( 80, "addon-template.jade" ));
jade_debug.unshift(new jade.DebugItem( 80, "addon-template.jade" ));
buf.push("<a" + (jade.attr("href", "" + (endpoint ? endpoint.replace(/^http(s?)/, 'stremio') : null) + "", true, true)) + " class=\"activate-link\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 81, "addon-template.jade" ));
buf.push("<button name=\"Activate\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 81, jade_debug[0].filename ));
buf.push("Activate Add-on");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift(new jade.DebugItem( 83, "addon-template.jade" ));
jade_debug.unshift(new jade.DebugItem( 83, "addon-template.jade" ));
buf.push("<div>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 83, jade_debug[0].filename ));
buf.push("No valid end-point for this add-on");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 85, "addon-template.jade" ));
buf.push("<script src=\"https://code.jquery.com/jquery-2.1.4.min.js\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 86, "addon-template.jade" ));
buf.push("<script src=\"http://www.strem.io/js/stremio-addons.min.js\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 87, "addon-template.jade" ));
if ( endpoint)
{
jade_debug.unshift(new jade.DebugItem( 88, "addon-template.jade" ));
jade_debug.unshift(new jade.DebugItem( 88, "addon-template.jade" ));
buf.push("<script>");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("var stremio = require(\"stremio-addons\");");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("var s = new stremio.Client();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("s.setAuth(\"http://api9.strem.io\", \"2a240788ce82492744cdd42ca434fc26848ec616\"); // stremio-addons-client open-source auth");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("s.add(\"" + (jade.escape((jade_interp = endpoint.replace('/stremio/v1', '')) == null ? '' : jade_interp)) + "\");");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("s.call(\"stats.get\", {}, function(err, stats) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("    if (stats) $(\".provides\").text( (stats.statsLabel || \"\") + stats.statsNum );");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("});");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("s.call(\"meta.find\", { query: { }, limit: 5 }, function(err, res) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("    if (res) res.forEach(function(r) { ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("        var n = r.name+\" (\"+r.year+\")\";");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("        if (r.poster) $(\".best .posters\").append(\"<img alt='\"+n+\"' title='\"+n+\"' src='\"+r.poster+\"'/>\"); ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("    if (res) $(\".best\").show();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("});");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("$.get(\"http://localhost:11470/manifest\").success(function() {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("    $(\"#addon\").on(\"click\", \".activate-link\", function(e) { ");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("        e.preventDefault();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("        $.get(\"http://localhost:11470/info/\"+encodeURIComponent(\"" + (jade.escape((jade_interp = endpoint.replace(new RegExp('^http(s?)://'), '')) == null ? '' : jade_interp)) + "\"))");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("        return false;");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("    });");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 110, jade_debug[0].filename ));
buf.push("}).error(function(e) { /* ignore */ })");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.shift();}.call(this,"RegExp" in locals_for_with?locals_for_with.RegExp:typeof RegExp!=="undefined"?RegExp:undefined,"addon" in locals_for_with?locals_for_with.addon:typeof addon!=="undefined"?addon:undefined,"endpoint" in locals_for_with?locals_for_with.endpoint:typeof endpoint!=="undefined"?endpoint:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "doctype html\nhead\n    link(href=\"//fonts.googleapis.com/css?family=Lato:100,300,400,100italic,200italic,300italic\",rel=\"stylesheet\", type=\"text/css\")\n\n    title #{addon.manifest.name} - Stremio Addon\n    style.\n        body,html{ \n            margin: 0px; padding: 0px;\n            font-family: Lato,'Open Sans',OpenSans,arial,sans-serif;\n            font-weight: 300; color: white;\n            cursor: default;\n            width: 100%; height: 100%; \n        }\n        h1, h2, h3, h4, h5, h6 { font-weight: 300; }\n        #addon {\n            width: 400px;\n            position: absolute;\n            left: 0px; right: 0px; top: 10%; bottom: auto;\n            margin: auto;\n        }\n        a {  text-decoration: none; }\n        button {\n            border: 0px; outline: 0px;\n            color: white;\n            background: rgba(125,79,158,0.85);\n            padding: 13px 22px;\n            text-align: center;\n            font-size: 17px;\n            font-weight: 300;\n            cursor: pointer;\n            opacity: 0.9;\n            display: block;\n        }\n        button:hover { opacity: 1; }\n        .logo { float: left; margin: 20px; }\n\n        .name { float: left; }\n        .version { float: right; }\n        .provides, .gives, .description { clear: both; }\n        .best { margin-bottom: 30px; }\n        //h2 { text-align: center; }\n        //button {  margin: 0px auto; }\n\n        .best img { width: 60px; }\n\n    if (addon.manifest.background)\n        style.\n            html { background-image: url(#{addon.manifest.background}); background-size: auto 100%; background-size: cover; background-repeat: no-repeat; }\n            body { background: rgba(0,0,0,0.65); }\n    else\n        style.\n            html { background-image: url('http://www.strem.io/3.0/background-1.jpg'); background-size: auto 100%; background-size: cover; background-repeat: no-repeat; }\n\n    body\n        #addon\n            if (addon.manifest.logo)\n                img.logo(src=addon.manifest.logo)\n            else \n                h2.name #{addon.manifest.name}\n            h3.version <i>#{addon.manifest.version}</i>\n            h3.description !{addon.manifest.webDescription || addon.manifest.description}\n            h3.provides\n            \n            - var mapType = function(t) { return ({ movie: \"Movies\", series: \"Series\", tv: \"TV Channels\", channel: \"Channels\" })[t] || t };\n\n            h2.gives This add-on will give you:\n            ul\n                if addon.methods['meta.find']\n                    li More #{addon.manifest.types.map(mapType).join(\", \")} in Discover\n                if addon.methods['stream.find']\n                    li Watch #{addon.manifest.types.map(mapType).join(\", \")} #{addon.manifest.isFree ? 'for FREE' : ''}\n                if addon.methods['subtitles.get']\n                    li Subtitles for #{addon.manifest.types.map(mapType).join(\", \")}\n\n            .best(style=\"display: none;\")\n                h2 Best from this add-on: \n                .posters\n\n            if endpoint\n                a.activate-link(href=\"#{endpoint ? endpoint.replace(/^http(s?)/, 'stremio') : null}\")\n                    button(name=\"Activate\") Activate Add-on\n            else\n                div No valid end-point for this add-on\n\n        script(src=\"https://code.jquery.com/jquery-2.1.4.min.js\")\n        script(src=\"http://www.strem.io/js/stremio-addons.min.js\")\n        if endpoint\n            script.\n                var stremio = require(\"stremio-addons\");\n                var s = new stremio.Client();\n                s.setAuth(\"http://api9.strem.io\", \"2a240788ce82492744cdd42ca434fc26848ec616\"); // stremio-addons-client open-source auth\n                s.add(\"#{endpoint.replace('/stremio/v1', '')}\");\n                s.call(\"stats.get\", {}, function(err, stats) {\n                    if (stats) $(\".provides\").text( (stats.statsLabel || \"\") + stats.statsNum );\n                });\n                s.call(\"meta.find\", { query: { }, limit: 5 }, function(err, res) {\n                    if (res) res.forEach(function(r) { \n                        var n = r.name+\" (\"+r.year+\")\";\n                        if (r.poster) $(\".best .posters\").append(\"<img alt='\"+n+\"' title='\"+n+\"' src='\"+r.poster+\"'/>\"); \n                    });\n                    if (res) $(\".best\").show();\n                });\n                $.get(\"http://localhost:11470/manifest\").success(function() {\n                    $(\"#addon\").on(\"click\", \".activate-link\", function(e) { \n                        e.preventDefault();\n                        $.get(\"http://localhost:11470/info/\"+encodeURIComponent(\"#{endpoint.replace(new RegExp('^http(s?)://'), '')}\"))\n                        return false;\n                    });\n                }).error(function(e) { /* ignore */ })\n");
}
}; module.exports = addon; var jade = require("jade/runtime.js")
