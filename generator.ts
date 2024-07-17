type HTMLTagNames = keyof HTMLElementTagNameMap

const tagNames: Array<HTMLTagNames> = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "search",
    "section",
    "select",
    "slot",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    // "var", // key word
    "video",
    "wbr",
]

export const createElement = tagNames.map((name) => {
    const [firstLetter, ...restLetters] = name
    const tagInterfaceName = firstLetter.toUpperCase() + restLetters.join('')

    return `
type ReturnHtmlElementType${tagInterfaceName} = HTMLElementTagNameMap["${name}"]

interface ${tagInterfaceName} {
    attributes(attrs: RecursivePartial<ReturnHtmlElementType${tagInterfaceName}>): ${tagInterfaceName}
    children(htmlElements: Array<string | number | HTMLType>): ${tagInterfaceName}
    end(): ReturnHtmlElementType${tagInterfaceName}
}

export const ${name} = (): ${tagInterfaceName} => {
    const attributesList: RecursivePartial<ReturnHtmlElementType${tagInterfaceName}> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<${tagInterfaceName}, ReturnHtmlElementType${tagInterfaceName}>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<${tagInterfaceName}>(childrenList)
   
    function end() {
        return "<${name}" + attributesToString<ReturnHtmlElementType${tagInterfaceName}>(attributesList) + ">" + childrenList + "</${name}>" as unknown as ReturnHtmlElementType${tagInterfaceName};
    }

    return {
        attributes,
        children,
        end,
    };
}
`;
})
