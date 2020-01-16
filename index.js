'use strict';

const reg = /(\s*)(```) *(puml|plantuml) *\n?([\s\S]+?)\s*(\2)(\n+|$)/g;

function ignore(data) {
    let source = data.source;
    let ext = source.substring(source.lastIndexOf('.')).toLowerCase();
    return ['.js', '.css', '.html', '.htm'].indexOf(ext) > -1;
}

hexo.extend.filter.register('before_post_render', (data) => {
    if (!ignore(data)) {
        data.content = data.content
            .replace(reg, (raw, start, startQuote, lang, content, endQuote, end) => {
                return start + '{% plantuml %}' + content + '{% endplantuml %}' + end;
            });
    }
}, 9);

hexo.extend.tag.register('plantuml', function(args, content){
        var plantuml = require('./plantuml');
        content = plantuml.compress(content);
        return "<img  src="+content+">";
},{ends: true});
