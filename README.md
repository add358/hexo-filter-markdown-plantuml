## Introduction

This is a [hexo](https://github.com/add358/hexo-filter-markdown-plantuml) markdown plugin which allows you to render plantuml code in you blog.

Hexo is a static blogging system written in Node.js.
But hexo no support plantuml.

## Installation

To install, run the following command in the root directory of hexo:
```
npm install hexo-filter-markdown-plantuml --save
```


## Usage
```
{% plantuml %}
@startuml
Object <|-- ArrayList
Object : equals()
ArrayList : Object[] elementData
ArrayList : size()
@enduml
{% endplantuml %}
```
    @startuml and @endpuml are ALWAYS required or the image will fail to be generated.

or
```
​```puml
@startuml
Object <|-- ArrayList
Object : equals()
ArrayList : Object[] elementData
ArrayList : size()
@enduml
​```
```
Plugin will pick up block body and replace it with generated base64 svg diagram.

> `puml` and `plantuml` tags both work.

see more details at [http://plantuml.com/sitemap-language-specification](http://plantuml.com/sitemap-language-specification)
