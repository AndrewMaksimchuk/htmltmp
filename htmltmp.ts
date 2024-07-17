
type HTMLTagNames = keyof HTMLElementTagNameMap
type HTMLType = HTMLElementTagNameMap[HTMLTagNames]
type RecursivePartial<T> = {
  [P in keyof T]?:
    T[P] extends (infer U)[] ? RecursivePartial<U>[] :
    T[P] extends object ? RecursivePartial<T[P]> :
    T[P];
}

const attributesListToString = function () {
    return Object
        .entries(this).filter(([key, _]) => "toString" !== key)
        .reduce((result, [attrName, attrValue]) => result + ' ' + attrName + '="' + attrValue + '"', '');
}

const childrenListToString = function () {
    return this.reduce((result, current) => result + current, "");
}

const generateFunctionChildren = function<T>(childrenList: Array<string | number | HTMLType>) {
    return function (htmlElements: Array<string | number | HTMLType>) {
        htmlElements.forEach((element) => childrenList.push(element))
        return this as T;
    }
}

const generateFunctionAttributes = <R, T>(attributesList: RecursivePartial<T>) => {
    return function (attrs: Partial<T>) {
        Object.assign(attributesList, attrs)
        return this as R;
    };
}

const styleDeclarationToString = (style: CSSStyleDeclaration) => {
    const kebabize = str => {
        return str.split('').map((letter, idx) => {
            return letter.toUpperCase() === letter
                ? (idx !== 0 ? '-' : '') + letter.toLowerCase()
                : letter;
        }).join('');
    }

    return Object
        .entries(style)
        .reduce((result, [attrName, attrValue]) => {
            return attrValue ? result + kebabize(attrName) + ':' + attrValue + '; ' : result;
        }, '').trim();
}

const attributesToString = <T>(attributesList: RecursivePartial<T>) => {
    return Object
        .entries(attributesList).filter(([key, _]) => "toString" !== key)
        .reduce((result, [attrName, attrValue]) => {
            return attrName === 'style' ? result + ' ' + attrName + '="' + styleDeclarationToString(attrValue)  + '"' : result + ' ' + attrName + '="' + attrValue + '"';
        }, '');
}

type ReturnHtmlElementTypeA = HTMLElementTagNameMap["a"]

interface A {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeA>): A
    children(htmlElements: Array<string | number | HTMLType>): A
    end(): ReturnHtmlElementTypeA
}

export const a = (): A => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeA> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<A, ReturnHtmlElementTypeA>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<A>(childrenList)
   
    function end() {
        return "<a" + attributesToString<ReturnHtmlElementTypeA>(attributesList) + ">" + childrenList + "</a>" as unknown as ReturnHtmlElementTypeA;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeAbbr = HTMLElementTagNameMap["abbr"]

interface Abbr {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeAbbr>): Abbr
    children(htmlElements: Array<string | number | HTMLType>): Abbr
    end(): ReturnHtmlElementTypeAbbr
}

export const abbr = (): Abbr => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeAbbr> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Abbr, ReturnHtmlElementTypeAbbr>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Abbr>(childrenList)
   
    function end() {
        return "<abbr" + attributesToString<ReturnHtmlElementTypeAbbr>(attributesList) + ">" + childrenList + "</abbr>" as unknown as ReturnHtmlElementTypeAbbr;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeAddress = HTMLElementTagNameMap["address"]

interface Address {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeAddress>): Address
    children(htmlElements: Array<string | number | HTMLType>): Address
    end(): ReturnHtmlElementTypeAddress
}

export const address = (): Address => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeAddress> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Address, ReturnHtmlElementTypeAddress>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Address>(childrenList)
   
    function end() {
        return "<address" + attributesToString<ReturnHtmlElementTypeAddress>(attributesList) + ">" + childrenList + "</address>" as unknown as ReturnHtmlElementTypeAddress;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeArea = HTMLElementTagNameMap["area"]

interface Area {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeArea>): Area
    children(htmlElements: Array<string | number | HTMLType>): Area
    end(): ReturnHtmlElementTypeArea
}

export const area = (): Area => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeArea> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Area, ReturnHtmlElementTypeArea>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Area>(childrenList)
   
    function end() {
        return "<area" + attributesToString<ReturnHtmlElementTypeArea>(attributesList) + ">" + childrenList + "</area>" as unknown as ReturnHtmlElementTypeArea;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeArticle = HTMLElementTagNameMap["article"]

interface Article {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeArticle>): Article
    children(htmlElements: Array<string | number | HTMLType>): Article
    end(): ReturnHtmlElementTypeArticle
}

export const article = (): Article => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeArticle> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Article, ReturnHtmlElementTypeArticle>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Article>(childrenList)
   
    function end() {
        return "<article" + attributesToString<ReturnHtmlElementTypeArticle>(attributesList) + ">" + childrenList + "</article>" as unknown as ReturnHtmlElementTypeArticle;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeAside = HTMLElementTagNameMap["aside"]

interface Aside {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeAside>): Aside
    children(htmlElements: Array<string | number | HTMLType>): Aside
    end(): ReturnHtmlElementTypeAside
}

export const aside = (): Aside => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeAside> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Aside, ReturnHtmlElementTypeAside>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Aside>(childrenList)
   
    function end() {
        return "<aside" + attributesToString<ReturnHtmlElementTypeAside>(attributesList) + ">" + childrenList + "</aside>" as unknown as ReturnHtmlElementTypeAside;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeAudio = HTMLElementTagNameMap["audio"]

interface Audio {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeAudio>): Audio
    children(htmlElements: Array<string | number | HTMLType>): Audio
    end(): ReturnHtmlElementTypeAudio
}

export const audio = (): Audio => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeAudio> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Audio, ReturnHtmlElementTypeAudio>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Audio>(childrenList)
   
    function end() {
        return "<audio" + attributesToString<ReturnHtmlElementTypeAudio>(attributesList) + ">" + childrenList + "</audio>" as unknown as ReturnHtmlElementTypeAudio;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeB = HTMLElementTagNameMap["b"]

interface B {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeB>): B
    children(htmlElements: Array<string | number | HTMLType>): B
    end(): ReturnHtmlElementTypeB
}

export const b = (): B => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeB> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<B, ReturnHtmlElementTypeB>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<B>(childrenList)
   
    function end() {
        return "<b" + attributesToString<ReturnHtmlElementTypeB>(attributesList) + ">" + childrenList + "</b>" as unknown as ReturnHtmlElementTypeB;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeBase = HTMLElementTagNameMap["base"]

interface Base {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeBase>): Base
    children(htmlElements: Array<string | number | HTMLType>): Base
    end(): ReturnHtmlElementTypeBase
}

export const base = (): Base => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeBase> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Base, ReturnHtmlElementTypeBase>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Base>(childrenList)
   
    function end() {
        return "<base" + attributesToString<ReturnHtmlElementTypeBase>(attributesList) + ">" + childrenList + "</base>" as unknown as ReturnHtmlElementTypeBase;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeBdi = HTMLElementTagNameMap["bdi"]

interface Bdi {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeBdi>): Bdi
    children(htmlElements: Array<string | number | HTMLType>): Bdi
    end(): ReturnHtmlElementTypeBdi
}

export const bdi = (): Bdi => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeBdi> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Bdi, ReturnHtmlElementTypeBdi>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Bdi>(childrenList)
   
    function end() {
        return "<bdi" + attributesToString<ReturnHtmlElementTypeBdi>(attributesList) + ">" + childrenList + "</bdi>" as unknown as ReturnHtmlElementTypeBdi;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeBdo = HTMLElementTagNameMap["bdo"]

interface Bdo {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeBdo>): Bdo
    children(htmlElements: Array<string | number | HTMLType>): Bdo
    end(): ReturnHtmlElementTypeBdo
}

export const bdo = (): Bdo => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeBdo> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Bdo, ReturnHtmlElementTypeBdo>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Bdo>(childrenList)
   
    function end() {
        return "<bdo" + attributesToString<ReturnHtmlElementTypeBdo>(attributesList) + ">" + childrenList + "</bdo>" as unknown as ReturnHtmlElementTypeBdo;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeBlockquote = HTMLElementTagNameMap["blockquote"]

interface Blockquote {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeBlockquote>): Blockquote
    children(htmlElements: Array<string | number | HTMLType>): Blockquote
    end(): ReturnHtmlElementTypeBlockquote
}

export const blockquote = (): Blockquote => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeBlockquote> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Blockquote, ReturnHtmlElementTypeBlockquote>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Blockquote>(childrenList)
   
    function end() {
        return "<blockquote" + attributesToString<ReturnHtmlElementTypeBlockquote>(attributesList) + ">" + childrenList + "</blockquote>" as unknown as ReturnHtmlElementTypeBlockquote;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeBody = HTMLElementTagNameMap["body"]

interface Body {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeBody>): Body
    children(htmlElements: Array<string | number | HTMLType>): Body
    end(): ReturnHtmlElementTypeBody
}

export const body = (): Body => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeBody> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Body, ReturnHtmlElementTypeBody>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Body>(childrenList)
   
    function end() {
        return "<body" + attributesToString<ReturnHtmlElementTypeBody>(attributesList) + ">" + childrenList + "</body>" as unknown as ReturnHtmlElementTypeBody;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeBr = HTMLElementTagNameMap["br"]

interface Br {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeBr>): Br
    children(htmlElements: Array<string | number | HTMLType>): Br
    end(): ReturnHtmlElementTypeBr
}

export const br = (): Br => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeBr> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Br, ReturnHtmlElementTypeBr>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Br>(childrenList)
   
    function end() {
        return "<br" + attributesToString<ReturnHtmlElementTypeBr>(attributesList) + ">" + childrenList + "</br>" as unknown as ReturnHtmlElementTypeBr;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeButton = HTMLElementTagNameMap["button"]

interface Button {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeButton>): Button
    children(htmlElements: Array<string | number | HTMLType>): Button
    end(): ReturnHtmlElementTypeButton
}

export const button = (): Button => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeButton> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Button, ReturnHtmlElementTypeButton>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Button>(childrenList)
   
    function end() {
        return "<button" + attributesToString<ReturnHtmlElementTypeButton>(attributesList) + ">" + childrenList + "</button>" as unknown as ReturnHtmlElementTypeButton;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeCanvas = HTMLElementTagNameMap["canvas"]

interface Canvas {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeCanvas>): Canvas
    children(htmlElements: Array<string | number | HTMLType>): Canvas
    end(): ReturnHtmlElementTypeCanvas
}

export const canvas = (): Canvas => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeCanvas> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Canvas, ReturnHtmlElementTypeCanvas>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Canvas>(childrenList)
   
    function end() {
        return "<canvas" + attributesToString<ReturnHtmlElementTypeCanvas>(attributesList) + ">" + childrenList + "</canvas>" as unknown as ReturnHtmlElementTypeCanvas;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeCaption = HTMLElementTagNameMap["caption"]

interface Caption {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeCaption>): Caption
    children(htmlElements: Array<string | number | HTMLType>): Caption
    end(): ReturnHtmlElementTypeCaption
}

export const caption = (): Caption => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeCaption> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Caption, ReturnHtmlElementTypeCaption>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Caption>(childrenList)
   
    function end() {
        return "<caption" + attributesToString<ReturnHtmlElementTypeCaption>(attributesList) + ">" + childrenList + "</caption>" as unknown as ReturnHtmlElementTypeCaption;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeCite = HTMLElementTagNameMap["cite"]

interface Cite {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeCite>): Cite
    children(htmlElements: Array<string | number | HTMLType>): Cite
    end(): ReturnHtmlElementTypeCite
}

export const cite = (): Cite => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeCite> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Cite, ReturnHtmlElementTypeCite>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Cite>(childrenList)
   
    function end() {
        return "<cite" + attributesToString<ReturnHtmlElementTypeCite>(attributesList) + ">" + childrenList + "</cite>" as unknown as ReturnHtmlElementTypeCite;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeCode = HTMLElementTagNameMap["code"]

interface Code {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeCode>): Code
    children(htmlElements: Array<string | number | HTMLType>): Code
    end(): ReturnHtmlElementTypeCode
}

export const code = (): Code => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeCode> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Code, ReturnHtmlElementTypeCode>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Code>(childrenList)
   
    function end() {
        return "<code" + attributesToString<ReturnHtmlElementTypeCode>(attributesList) + ">" + childrenList + "</code>" as unknown as ReturnHtmlElementTypeCode;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeCol = HTMLElementTagNameMap["col"]

interface Col {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeCol>): Col
    children(htmlElements: Array<string | number | HTMLType>): Col
    end(): ReturnHtmlElementTypeCol
}

export const col = (): Col => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeCol> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Col, ReturnHtmlElementTypeCol>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Col>(childrenList)
   
    function end() {
        return "<col" + attributesToString<ReturnHtmlElementTypeCol>(attributesList) + ">" + childrenList + "</col>" as unknown as ReturnHtmlElementTypeCol;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeColgroup = HTMLElementTagNameMap["colgroup"]

interface Colgroup {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeColgroup>): Colgroup
    children(htmlElements: Array<string | number | HTMLType>): Colgroup
    end(): ReturnHtmlElementTypeColgroup
}

export const colgroup = (): Colgroup => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeColgroup> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Colgroup, ReturnHtmlElementTypeColgroup>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Colgroup>(childrenList)
   
    function end() {
        return "<colgroup" + attributesToString<ReturnHtmlElementTypeColgroup>(attributesList) + ">" + childrenList + "</colgroup>" as unknown as ReturnHtmlElementTypeColgroup;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeData = HTMLElementTagNameMap["data"]

interface Data {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeData>): Data
    children(htmlElements: Array<string | number | HTMLType>): Data
    end(): ReturnHtmlElementTypeData
}

export const data = (): Data => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeData> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Data, ReturnHtmlElementTypeData>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Data>(childrenList)
   
    function end() {
        return "<data" + attributesToString<ReturnHtmlElementTypeData>(attributesList) + ">" + childrenList + "</data>" as unknown as ReturnHtmlElementTypeData;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeDatalist = HTMLElementTagNameMap["datalist"]

interface Datalist {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeDatalist>): Datalist
    children(htmlElements: Array<string | number | HTMLType>): Datalist
    end(): ReturnHtmlElementTypeDatalist
}

export const datalist = (): Datalist => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeDatalist> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Datalist, ReturnHtmlElementTypeDatalist>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Datalist>(childrenList)
   
    function end() {
        return "<datalist" + attributesToString<ReturnHtmlElementTypeDatalist>(attributesList) + ">" + childrenList + "</datalist>" as unknown as ReturnHtmlElementTypeDatalist;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeDd = HTMLElementTagNameMap["dd"]

interface Dd {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeDd>): Dd
    children(htmlElements: Array<string | number | HTMLType>): Dd
    end(): ReturnHtmlElementTypeDd
}

export const dd = (): Dd => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeDd> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Dd, ReturnHtmlElementTypeDd>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Dd>(childrenList)
   
    function end() {
        return "<dd" + attributesToString<ReturnHtmlElementTypeDd>(attributesList) + ">" + childrenList + "</dd>" as unknown as ReturnHtmlElementTypeDd;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeDel = HTMLElementTagNameMap["del"]

interface Del {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeDel>): Del
    children(htmlElements: Array<string | number | HTMLType>): Del
    end(): ReturnHtmlElementTypeDel
}

export const del = (): Del => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeDel> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Del, ReturnHtmlElementTypeDel>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Del>(childrenList)
   
    function end() {
        return "<del" + attributesToString<ReturnHtmlElementTypeDel>(attributesList) + ">" + childrenList + "</del>" as unknown as ReturnHtmlElementTypeDel;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeDetails = HTMLElementTagNameMap["details"]

interface Details {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeDetails>): Details
    children(htmlElements: Array<string | number | HTMLType>): Details
    end(): ReturnHtmlElementTypeDetails
}

export const details = (): Details => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeDetails> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Details, ReturnHtmlElementTypeDetails>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Details>(childrenList)
   
    function end() {
        return "<details" + attributesToString<ReturnHtmlElementTypeDetails>(attributesList) + ">" + childrenList + "</details>" as unknown as ReturnHtmlElementTypeDetails;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeDfn = HTMLElementTagNameMap["dfn"]

interface Dfn {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeDfn>): Dfn
    children(htmlElements: Array<string | number | HTMLType>): Dfn
    end(): ReturnHtmlElementTypeDfn
}

export const dfn = (): Dfn => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeDfn> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Dfn, ReturnHtmlElementTypeDfn>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Dfn>(childrenList)
   
    function end() {
        return "<dfn" + attributesToString<ReturnHtmlElementTypeDfn>(attributesList) + ">" + childrenList + "</dfn>" as unknown as ReturnHtmlElementTypeDfn;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeDialog = HTMLElementTagNameMap["dialog"]

interface Dialog {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeDialog>): Dialog
    children(htmlElements: Array<string | number | HTMLType>): Dialog
    end(): ReturnHtmlElementTypeDialog
}

export const dialog = (): Dialog => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeDialog> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Dialog, ReturnHtmlElementTypeDialog>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Dialog>(childrenList)
   
    function end() {
        return "<dialog" + attributesToString<ReturnHtmlElementTypeDialog>(attributesList) + ">" + childrenList + "</dialog>" as unknown as ReturnHtmlElementTypeDialog;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeDiv = HTMLElementTagNameMap["div"]

interface Div {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeDiv>): Div
    children(htmlElements: Array<string | number | HTMLType>): Div
    end(): ReturnHtmlElementTypeDiv
}

export const div = (): Div => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeDiv> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Div, ReturnHtmlElementTypeDiv>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Div>(childrenList)
   
    function end() {
        return "<div" + attributesToString<ReturnHtmlElementTypeDiv>(attributesList) + ">" + childrenList + "</div>" as unknown as ReturnHtmlElementTypeDiv;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeDl = HTMLElementTagNameMap["dl"]

interface Dl {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeDl>): Dl
    children(htmlElements: Array<string | number | HTMLType>): Dl
    end(): ReturnHtmlElementTypeDl
}

export const dl = (): Dl => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeDl> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Dl, ReturnHtmlElementTypeDl>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Dl>(childrenList)
   
    function end() {
        return "<dl" + attributesToString<ReturnHtmlElementTypeDl>(attributesList) + ">" + childrenList + "</dl>" as unknown as ReturnHtmlElementTypeDl;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeDt = HTMLElementTagNameMap["dt"]

interface Dt {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeDt>): Dt
    children(htmlElements: Array<string | number | HTMLType>): Dt
    end(): ReturnHtmlElementTypeDt
}

export const dt = (): Dt => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeDt> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Dt, ReturnHtmlElementTypeDt>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Dt>(childrenList)
   
    function end() {
        return "<dt" + attributesToString<ReturnHtmlElementTypeDt>(attributesList) + ">" + childrenList + "</dt>" as unknown as ReturnHtmlElementTypeDt;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeEm = HTMLElementTagNameMap["em"]

interface Em {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeEm>): Em
    children(htmlElements: Array<string | number | HTMLType>): Em
    end(): ReturnHtmlElementTypeEm
}

export const em = (): Em => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeEm> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Em, ReturnHtmlElementTypeEm>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Em>(childrenList)
   
    function end() {
        return "<em" + attributesToString<ReturnHtmlElementTypeEm>(attributesList) + ">" + childrenList + "</em>" as unknown as ReturnHtmlElementTypeEm;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeEmbed = HTMLElementTagNameMap["embed"]

interface Embed {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeEmbed>): Embed
    children(htmlElements: Array<string | number | HTMLType>): Embed
    end(): ReturnHtmlElementTypeEmbed
}

export const embed = (): Embed => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeEmbed> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Embed, ReturnHtmlElementTypeEmbed>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Embed>(childrenList)
   
    function end() {
        return "<embed" + attributesToString<ReturnHtmlElementTypeEmbed>(attributesList) + ">" + childrenList + "</embed>" as unknown as ReturnHtmlElementTypeEmbed;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeFieldset = HTMLElementTagNameMap["fieldset"]

interface Fieldset {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeFieldset>): Fieldset
    children(htmlElements: Array<string | number | HTMLType>): Fieldset
    end(): ReturnHtmlElementTypeFieldset
}

export const fieldset = (): Fieldset => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeFieldset> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Fieldset, ReturnHtmlElementTypeFieldset>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Fieldset>(childrenList)
   
    function end() {
        return "<fieldset" + attributesToString<ReturnHtmlElementTypeFieldset>(attributesList) + ">" + childrenList + "</fieldset>" as unknown as ReturnHtmlElementTypeFieldset;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeFigcaption = HTMLElementTagNameMap["figcaption"]

interface Figcaption {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeFigcaption>): Figcaption
    children(htmlElements: Array<string | number | HTMLType>): Figcaption
    end(): ReturnHtmlElementTypeFigcaption
}

export const figcaption = (): Figcaption => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeFigcaption> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Figcaption, ReturnHtmlElementTypeFigcaption>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Figcaption>(childrenList)
   
    function end() {
        return "<figcaption" + attributesToString<ReturnHtmlElementTypeFigcaption>(attributesList) + ">" + childrenList + "</figcaption>" as unknown as ReturnHtmlElementTypeFigcaption;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeFigure = HTMLElementTagNameMap["figure"]

interface Figure {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeFigure>): Figure
    children(htmlElements: Array<string | number | HTMLType>): Figure
    end(): ReturnHtmlElementTypeFigure
}

export const figure = (): Figure => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeFigure> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Figure, ReturnHtmlElementTypeFigure>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Figure>(childrenList)
   
    function end() {
        return "<figure" + attributesToString<ReturnHtmlElementTypeFigure>(attributesList) + ">" + childrenList + "</figure>" as unknown as ReturnHtmlElementTypeFigure;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeFooter = HTMLElementTagNameMap["footer"]

interface Footer {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeFooter>): Footer
    children(htmlElements: Array<string | number | HTMLType>): Footer
    end(): ReturnHtmlElementTypeFooter
}

export const footer = (): Footer => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeFooter> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Footer, ReturnHtmlElementTypeFooter>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Footer>(childrenList)
   
    function end() {
        return "<footer" + attributesToString<ReturnHtmlElementTypeFooter>(attributesList) + ">" + childrenList + "</footer>" as unknown as ReturnHtmlElementTypeFooter;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeForm = HTMLElementTagNameMap["form"]

interface Form {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeForm>): Form
    children(htmlElements: Array<string | number | HTMLType>): Form
    end(): ReturnHtmlElementTypeForm
}

export const form = (): Form => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeForm> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Form, ReturnHtmlElementTypeForm>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Form>(childrenList)
   
    function end() {
        return "<form" + attributesToString<ReturnHtmlElementTypeForm>(attributesList) + ">" + childrenList + "</form>" as unknown as ReturnHtmlElementTypeForm;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeH1 = HTMLElementTagNameMap["h1"]

interface H1 {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeH1>): H1
    children(htmlElements: Array<string | number | HTMLType>): H1
    end(): ReturnHtmlElementTypeH1
}

export const h1 = (): H1 => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeH1> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<H1, ReturnHtmlElementTypeH1>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<H1>(childrenList)
   
    function end() {
        return "<h1" + attributesToString<ReturnHtmlElementTypeH1>(attributesList) + ">" + childrenList + "</h1>" as unknown as ReturnHtmlElementTypeH1;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeH2 = HTMLElementTagNameMap["h2"]

interface H2 {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeH2>): H2
    children(htmlElements: Array<string | number | HTMLType>): H2
    end(): ReturnHtmlElementTypeH2
}

export const h2 = (): H2 => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeH2> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<H2, ReturnHtmlElementTypeH2>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<H2>(childrenList)
   
    function end() {
        return "<h2" + attributesToString<ReturnHtmlElementTypeH2>(attributesList) + ">" + childrenList + "</h2>" as unknown as ReturnHtmlElementTypeH2;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeH3 = HTMLElementTagNameMap["h3"]

interface H3 {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeH3>): H3
    children(htmlElements: Array<string | number | HTMLType>): H3
    end(): ReturnHtmlElementTypeH3
}

export const h3 = (): H3 => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeH3> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<H3, ReturnHtmlElementTypeH3>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<H3>(childrenList)
   
    function end() {
        return "<h3" + attributesToString<ReturnHtmlElementTypeH3>(attributesList) + ">" + childrenList + "</h3>" as unknown as ReturnHtmlElementTypeH3;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeH4 = HTMLElementTagNameMap["h4"]

interface H4 {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeH4>): H4
    children(htmlElements: Array<string | number | HTMLType>): H4
    end(): ReturnHtmlElementTypeH4
}

export const h4 = (): H4 => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeH4> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<H4, ReturnHtmlElementTypeH4>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<H4>(childrenList)
   
    function end() {
        return "<h4" + attributesToString<ReturnHtmlElementTypeH4>(attributesList) + ">" + childrenList + "</h4>" as unknown as ReturnHtmlElementTypeH4;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeH5 = HTMLElementTagNameMap["h5"]

interface H5 {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeH5>): H5
    children(htmlElements: Array<string | number | HTMLType>): H5
    end(): ReturnHtmlElementTypeH5
}

export const h5 = (): H5 => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeH5> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<H5, ReturnHtmlElementTypeH5>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<H5>(childrenList)
   
    function end() {
        return "<h5" + attributesToString<ReturnHtmlElementTypeH5>(attributesList) + ">" + childrenList + "</h5>" as unknown as ReturnHtmlElementTypeH5;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeH6 = HTMLElementTagNameMap["h6"]

interface H6 {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeH6>): H6
    children(htmlElements: Array<string | number | HTMLType>): H6
    end(): ReturnHtmlElementTypeH6
}

export const h6 = (): H6 => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeH6> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<H6, ReturnHtmlElementTypeH6>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<H6>(childrenList)
   
    function end() {
        return "<h6" + attributesToString<ReturnHtmlElementTypeH6>(attributesList) + ">" + childrenList + "</h6>" as unknown as ReturnHtmlElementTypeH6;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeHead = HTMLElementTagNameMap["head"]

interface Head {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeHead>): Head
    children(htmlElements: Array<string | number | HTMLType>): Head
    end(): ReturnHtmlElementTypeHead
}

export const head = (): Head => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeHead> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Head, ReturnHtmlElementTypeHead>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Head>(childrenList)
   
    function end() {
        return "<head" + attributesToString<ReturnHtmlElementTypeHead>(attributesList) + ">" + childrenList + "</head>" as unknown as ReturnHtmlElementTypeHead;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeHeader = HTMLElementTagNameMap["header"]

interface Header {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeHeader>): Header
    children(htmlElements: Array<string | number | HTMLType>): Header
    end(): ReturnHtmlElementTypeHeader
}

export const header = (): Header => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeHeader> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Header, ReturnHtmlElementTypeHeader>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Header>(childrenList)
   
    function end() {
        return "<header" + attributesToString<ReturnHtmlElementTypeHeader>(attributesList) + ">" + childrenList + "</header>" as unknown as ReturnHtmlElementTypeHeader;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeHgroup = HTMLElementTagNameMap["hgroup"]

interface Hgroup {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeHgroup>): Hgroup
    children(htmlElements: Array<string | number | HTMLType>): Hgroup
    end(): ReturnHtmlElementTypeHgroup
}

export const hgroup = (): Hgroup => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeHgroup> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Hgroup, ReturnHtmlElementTypeHgroup>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Hgroup>(childrenList)
   
    function end() {
        return "<hgroup" + attributesToString<ReturnHtmlElementTypeHgroup>(attributesList) + ">" + childrenList + "</hgroup>" as unknown as ReturnHtmlElementTypeHgroup;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeHr = HTMLElementTagNameMap["hr"]

interface Hr {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeHr>): Hr
    children(htmlElements: Array<string | number | HTMLType>): Hr
    end(): ReturnHtmlElementTypeHr
}

export const hr = (): Hr => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeHr> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Hr, ReturnHtmlElementTypeHr>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Hr>(childrenList)
   
    function end() {
        return "<hr" + attributesToString<ReturnHtmlElementTypeHr>(attributesList) + ">" + childrenList + "</hr>" as unknown as ReturnHtmlElementTypeHr;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeHtml = HTMLElementTagNameMap["html"]

interface Html {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeHtml>): Html
    children(htmlElements: Array<string | number | HTMLType>): Html
    end(): ReturnHtmlElementTypeHtml
}

export const html = (): Html => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeHtml> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Html, ReturnHtmlElementTypeHtml>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Html>(childrenList)
   
    function end() {
        return "<html" + attributesToString<ReturnHtmlElementTypeHtml>(attributesList) + ">" + childrenList + "</html>" as unknown as ReturnHtmlElementTypeHtml;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeI = HTMLElementTagNameMap["i"]

interface I {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeI>): I
    children(htmlElements: Array<string | number | HTMLType>): I
    end(): ReturnHtmlElementTypeI
}

export const i = (): I => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeI> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<I, ReturnHtmlElementTypeI>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<I>(childrenList)
   
    function end() {
        return "<i" + attributesToString<ReturnHtmlElementTypeI>(attributesList) + ">" + childrenList + "</i>" as unknown as ReturnHtmlElementTypeI;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeIframe = HTMLElementTagNameMap["iframe"]

interface Iframe {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeIframe>): Iframe
    children(htmlElements: Array<string | number | HTMLType>): Iframe
    end(): ReturnHtmlElementTypeIframe
}

export const iframe = (): Iframe => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeIframe> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Iframe, ReturnHtmlElementTypeIframe>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Iframe>(childrenList)
   
    function end() {
        return "<iframe" + attributesToString<ReturnHtmlElementTypeIframe>(attributesList) + ">" + childrenList + "</iframe>" as unknown as ReturnHtmlElementTypeIframe;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeImg = HTMLElementTagNameMap["img"]

interface Img {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeImg>): Img
    children(htmlElements: Array<string | number | HTMLType>): Img
    end(): ReturnHtmlElementTypeImg
}

export const img = (): Img => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeImg> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Img, ReturnHtmlElementTypeImg>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Img>(childrenList)
   
    function end() {
        return "<img" + attributesToString<ReturnHtmlElementTypeImg>(attributesList) + ">" + childrenList + "</img>" as unknown as ReturnHtmlElementTypeImg;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeInput = HTMLElementTagNameMap["input"]

interface Input {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeInput>): Input
    children(htmlElements: Array<string | number | HTMLType>): Input
    end(): ReturnHtmlElementTypeInput
}

export const input = (): Input => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeInput> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Input, ReturnHtmlElementTypeInput>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Input>(childrenList)
   
    function end() {
        return "<input" + attributesToString<ReturnHtmlElementTypeInput>(attributesList) + ">" + childrenList + "</input>" as unknown as ReturnHtmlElementTypeInput;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeIns = HTMLElementTagNameMap["ins"]

interface Ins {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeIns>): Ins
    children(htmlElements: Array<string | number | HTMLType>): Ins
    end(): ReturnHtmlElementTypeIns
}

export const ins = (): Ins => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeIns> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Ins, ReturnHtmlElementTypeIns>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Ins>(childrenList)
   
    function end() {
        return "<ins" + attributesToString<ReturnHtmlElementTypeIns>(attributesList) + ">" + childrenList + "</ins>" as unknown as ReturnHtmlElementTypeIns;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeKbd = HTMLElementTagNameMap["kbd"]

interface Kbd {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeKbd>): Kbd
    children(htmlElements: Array<string | number | HTMLType>): Kbd
    end(): ReturnHtmlElementTypeKbd
}

export const kbd = (): Kbd => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeKbd> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Kbd, ReturnHtmlElementTypeKbd>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Kbd>(childrenList)
   
    function end() {
        return "<kbd" + attributesToString<ReturnHtmlElementTypeKbd>(attributesList) + ">" + childrenList + "</kbd>" as unknown as ReturnHtmlElementTypeKbd;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeLabel = HTMLElementTagNameMap["label"]

interface Label {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeLabel>): Label
    children(htmlElements: Array<string | number | HTMLType>): Label
    end(): ReturnHtmlElementTypeLabel
}

export const label = (): Label => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeLabel> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Label, ReturnHtmlElementTypeLabel>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Label>(childrenList)
   
    function end() {
        return "<label" + attributesToString<ReturnHtmlElementTypeLabel>(attributesList) + ">" + childrenList + "</label>" as unknown as ReturnHtmlElementTypeLabel;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeLegend = HTMLElementTagNameMap["legend"]

interface Legend {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeLegend>): Legend
    children(htmlElements: Array<string | number | HTMLType>): Legend
    end(): ReturnHtmlElementTypeLegend
}

export const legend = (): Legend => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeLegend> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Legend, ReturnHtmlElementTypeLegend>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Legend>(childrenList)
   
    function end() {
        return "<legend" + attributesToString<ReturnHtmlElementTypeLegend>(attributesList) + ">" + childrenList + "</legend>" as unknown as ReturnHtmlElementTypeLegend;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeLi = HTMLElementTagNameMap["li"]

interface Li {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeLi>): Li
    children(htmlElements: Array<string | number | HTMLType>): Li
    end(): ReturnHtmlElementTypeLi
}

export const li = (): Li => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeLi> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Li, ReturnHtmlElementTypeLi>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Li>(childrenList)
   
    function end() {
        return "<li" + attributesToString<ReturnHtmlElementTypeLi>(attributesList) + ">" + childrenList + "</li>" as unknown as ReturnHtmlElementTypeLi;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeLink = HTMLElementTagNameMap["link"]

interface Link {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeLink>): Link
    children(htmlElements: Array<string | number | HTMLType>): Link
    end(): ReturnHtmlElementTypeLink
}

export const link = (): Link => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeLink> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Link, ReturnHtmlElementTypeLink>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Link>(childrenList)
   
    function end() {
        return "<link" + attributesToString<ReturnHtmlElementTypeLink>(attributesList) + ">" + childrenList + "</link>" as unknown as ReturnHtmlElementTypeLink;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeMain = HTMLElementTagNameMap["main"]

interface Main {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeMain>): Main
    children(htmlElements: Array<string | number | HTMLType>): Main
    end(): ReturnHtmlElementTypeMain
}

export const main = (): Main => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeMain> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Main, ReturnHtmlElementTypeMain>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Main>(childrenList)
   
    function end() {
        return "<main" + attributesToString<ReturnHtmlElementTypeMain>(attributesList) + ">" + childrenList + "</main>" as unknown as ReturnHtmlElementTypeMain;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeMap = HTMLElementTagNameMap["map"]

interface Map {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeMap>): Map
    children(htmlElements: Array<string | number | HTMLType>): Map
    end(): ReturnHtmlElementTypeMap
}

export const map = (): Map => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeMap> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Map, ReturnHtmlElementTypeMap>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Map>(childrenList)
   
    function end() {
        return "<map" + attributesToString<ReturnHtmlElementTypeMap>(attributesList) + ">" + childrenList + "</map>" as unknown as ReturnHtmlElementTypeMap;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeMark = HTMLElementTagNameMap["mark"]

interface Mark {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeMark>): Mark
    children(htmlElements: Array<string | number | HTMLType>): Mark
    end(): ReturnHtmlElementTypeMark
}

export const mark = (): Mark => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeMark> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Mark, ReturnHtmlElementTypeMark>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Mark>(childrenList)
   
    function end() {
        return "<mark" + attributesToString<ReturnHtmlElementTypeMark>(attributesList) + ">" + childrenList + "</mark>" as unknown as ReturnHtmlElementTypeMark;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeMenu = HTMLElementTagNameMap["menu"]

interface Menu {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeMenu>): Menu
    children(htmlElements: Array<string | number | HTMLType>): Menu
    end(): ReturnHtmlElementTypeMenu
}

export const menu = (): Menu => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeMenu> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Menu, ReturnHtmlElementTypeMenu>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Menu>(childrenList)
   
    function end() {
        return "<menu" + attributesToString<ReturnHtmlElementTypeMenu>(attributesList) + ">" + childrenList + "</menu>" as unknown as ReturnHtmlElementTypeMenu;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeMeta = HTMLElementTagNameMap["meta"]

interface Meta {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeMeta>): Meta
    children(htmlElements: Array<string | number | HTMLType>): Meta
    end(): ReturnHtmlElementTypeMeta
}

export const meta = (): Meta => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeMeta> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Meta, ReturnHtmlElementTypeMeta>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Meta>(childrenList)
   
    function end() {
        return "<meta" + attributesToString<ReturnHtmlElementTypeMeta>(attributesList) + ">" + childrenList + "</meta>" as unknown as ReturnHtmlElementTypeMeta;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeMeter = HTMLElementTagNameMap["meter"]

interface Meter {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeMeter>): Meter
    children(htmlElements: Array<string | number | HTMLType>): Meter
    end(): ReturnHtmlElementTypeMeter
}

export const meter = (): Meter => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeMeter> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Meter, ReturnHtmlElementTypeMeter>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Meter>(childrenList)
   
    function end() {
        return "<meter" + attributesToString<ReturnHtmlElementTypeMeter>(attributesList) + ">" + childrenList + "</meter>" as unknown as ReturnHtmlElementTypeMeter;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeNav = HTMLElementTagNameMap["nav"]

interface Nav {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeNav>): Nav
    children(htmlElements: Array<string | number | HTMLType>): Nav
    end(): ReturnHtmlElementTypeNav
}

export const nav = (): Nav => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeNav> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Nav, ReturnHtmlElementTypeNav>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Nav>(childrenList)
   
    function end() {
        return "<nav" + attributesToString<ReturnHtmlElementTypeNav>(attributesList) + ">" + childrenList + "</nav>" as unknown as ReturnHtmlElementTypeNav;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeNoscript = HTMLElementTagNameMap["noscript"]

interface Noscript {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeNoscript>): Noscript
    children(htmlElements: Array<string | number | HTMLType>): Noscript
    end(): ReturnHtmlElementTypeNoscript
}

export const noscript = (): Noscript => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeNoscript> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Noscript, ReturnHtmlElementTypeNoscript>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Noscript>(childrenList)
   
    function end() {
        return "<noscript" + attributesToString<ReturnHtmlElementTypeNoscript>(attributesList) + ">" + childrenList + "</noscript>" as unknown as ReturnHtmlElementTypeNoscript;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeObject = HTMLElementTagNameMap["object"]

interface Object {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeObject>): Object
    children(htmlElements: Array<string | number | HTMLType>): Object
    end(): ReturnHtmlElementTypeObject
}

export const object = (): Object => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeObject> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Object, ReturnHtmlElementTypeObject>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Object>(childrenList)
   
    function end() {
        return "<object" + attributesToString<ReturnHtmlElementTypeObject>(attributesList) + ">" + childrenList + "</object>" as unknown as ReturnHtmlElementTypeObject;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeOl = HTMLElementTagNameMap["ol"]

interface Ol {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeOl>): Ol
    children(htmlElements: Array<string | number | HTMLType>): Ol
    end(): ReturnHtmlElementTypeOl
}

export const ol = (): Ol => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeOl> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Ol, ReturnHtmlElementTypeOl>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Ol>(childrenList)
   
    function end() {
        return "<ol" + attributesToString<ReturnHtmlElementTypeOl>(attributesList) + ">" + childrenList + "</ol>" as unknown as ReturnHtmlElementTypeOl;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeOptgroup = HTMLElementTagNameMap["optgroup"]

interface Optgroup {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeOptgroup>): Optgroup
    children(htmlElements: Array<string | number | HTMLType>): Optgroup
    end(): ReturnHtmlElementTypeOptgroup
}

export const optgroup = (): Optgroup => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeOptgroup> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Optgroup, ReturnHtmlElementTypeOptgroup>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Optgroup>(childrenList)
   
    function end() {
        return "<optgroup" + attributesToString<ReturnHtmlElementTypeOptgroup>(attributesList) + ">" + childrenList + "</optgroup>" as unknown as ReturnHtmlElementTypeOptgroup;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeOption = HTMLElementTagNameMap["option"]

interface Option {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeOption>): Option
    children(htmlElements: Array<string | number | HTMLType>): Option
    end(): ReturnHtmlElementTypeOption
}

export const option = (): Option => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeOption> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Option, ReturnHtmlElementTypeOption>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Option>(childrenList)
   
    function end() {
        return "<option" + attributesToString<ReturnHtmlElementTypeOption>(attributesList) + ">" + childrenList + "</option>" as unknown as ReturnHtmlElementTypeOption;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeOutput = HTMLElementTagNameMap["output"]

interface Output {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeOutput>): Output
    children(htmlElements: Array<string | number | HTMLType>): Output
    end(): ReturnHtmlElementTypeOutput
}

export const output = (): Output => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeOutput> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Output, ReturnHtmlElementTypeOutput>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Output>(childrenList)
   
    function end() {
        return "<output" + attributesToString<ReturnHtmlElementTypeOutput>(attributesList) + ">" + childrenList + "</output>" as unknown as ReturnHtmlElementTypeOutput;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeP = HTMLElementTagNameMap["p"]

interface P {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeP>): P
    children(htmlElements: Array<string | number | HTMLType>): P
    end(): ReturnHtmlElementTypeP
}

export const p = (): P => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeP> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<P, ReturnHtmlElementTypeP>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<P>(childrenList)
   
    function end() {
        return "<p" + attributesToString<ReturnHtmlElementTypeP>(attributesList) + ">" + childrenList + "</p>" as unknown as ReturnHtmlElementTypeP;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypePicture = HTMLElementTagNameMap["picture"]

interface Picture {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypePicture>): Picture
    children(htmlElements: Array<string | number | HTMLType>): Picture
    end(): ReturnHtmlElementTypePicture
}

export const picture = (): Picture => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypePicture> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Picture, ReturnHtmlElementTypePicture>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Picture>(childrenList)
   
    function end() {
        return "<picture" + attributesToString<ReturnHtmlElementTypePicture>(attributesList) + ">" + childrenList + "</picture>" as unknown as ReturnHtmlElementTypePicture;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypePre = HTMLElementTagNameMap["pre"]

interface Pre {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypePre>): Pre
    children(htmlElements: Array<string | number | HTMLType>): Pre
    end(): ReturnHtmlElementTypePre
}

export const pre = (): Pre => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypePre> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Pre, ReturnHtmlElementTypePre>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Pre>(childrenList)
   
    function end() {
        return "<pre" + attributesToString<ReturnHtmlElementTypePre>(attributesList) + ">" + childrenList + "</pre>" as unknown as ReturnHtmlElementTypePre;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeProgress = HTMLElementTagNameMap["progress"]

interface Progress {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeProgress>): Progress
    children(htmlElements: Array<string | number | HTMLType>): Progress
    end(): ReturnHtmlElementTypeProgress
}

export const progress = (): Progress => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeProgress> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Progress, ReturnHtmlElementTypeProgress>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Progress>(childrenList)
   
    function end() {
        return "<progress" + attributesToString<ReturnHtmlElementTypeProgress>(attributesList) + ">" + childrenList + "</progress>" as unknown as ReturnHtmlElementTypeProgress;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeQ = HTMLElementTagNameMap["q"]

interface Q {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeQ>): Q
    children(htmlElements: Array<string | number | HTMLType>): Q
    end(): ReturnHtmlElementTypeQ
}

export const q = (): Q => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeQ> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Q, ReturnHtmlElementTypeQ>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Q>(childrenList)
   
    function end() {
        return "<q" + attributesToString<ReturnHtmlElementTypeQ>(attributesList) + ">" + childrenList + "</q>" as unknown as ReturnHtmlElementTypeQ;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeRp = HTMLElementTagNameMap["rp"]

interface Rp {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeRp>): Rp
    children(htmlElements: Array<string | number | HTMLType>): Rp
    end(): ReturnHtmlElementTypeRp
}

export const rp = (): Rp => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeRp> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Rp, ReturnHtmlElementTypeRp>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Rp>(childrenList)
   
    function end() {
        return "<rp" + attributesToString<ReturnHtmlElementTypeRp>(attributesList) + ">" + childrenList + "</rp>" as unknown as ReturnHtmlElementTypeRp;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeRt = HTMLElementTagNameMap["rt"]

interface Rt {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeRt>): Rt
    children(htmlElements: Array<string | number | HTMLType>): Rt
    end(): ReturnHtmlElementTypeRt
}

export const rt = (): Rt => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeRt> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Rt, ReturnHtmlElementTypeRt>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Rt>(childrenList)
   
    function end() {
        return "<rt" + attributesToString<ReturnHtmlElementTypeRt>(attributesList) + ">" + childrenList + "</rt>" as unknown as ReturnHtmlElementTypeRt;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeRuby = HTMLElementTagNameMap["ruby"]

interface Ruby {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeRuby>): Ruby
    children(htmlElements: Array<string | number | HTMLType>): Ruby
    end(): ReturnHtmlElementTypeRuby
}

export const ruby = (): Ruby => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeRuby> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Ruby, ReturnHtmlElementTypeRuby>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Ruby>(childrenList)
   
    function end() {
        return "<ruby" + attributesToString<ReturnHtmlElementTypeRuby>(attributesList) + ">" + childrenList + "</ruby>" as unknown as ReturnHtmlElementTypeRuby;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeS = HTMLElementTagNameMap["s"]

interface S {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeS>): S
    children(htmlElements: Array<string | number | HTMLType>): S
    end(): ReturnHtmlElementTypeS
}

export const s = (): S => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeS> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<S, ReturnHtmlElementTypeS>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<S>(childrenList)
   
    function end() {
        return "<s" + attributesToString<ReturnHtmlElementTypeS>(attributesList) + ">" + childrenList + "</s>" as unknown as ReturnHtmlElementTypeS;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeSamp = HTMLElementTagNameMap["samp"]

interface Samp {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeSamp>): Samp
    children(htmlElements: Array<string | number | HTMLType>): Samp
    end(): ReturnHtmlElementTypeSamp
}

export const samp = (): Samp => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeSamp> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Samp, ReturnHtmlElementTypeSamp>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Samp>(childrenList)
   
    function end() {
        return "<samp" + attributesToString<ReturnHtmlElementTypeSamp>(attributesList) + ">" + childrenList + "</samp>" as unknown as ReturnHtmlElementTypeSamp;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeScript = HTMLElementTagNameMap["script"]

interface Script {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeScript>): Script
    children(htmlElements: Array<string | number | HTMLType>): Script
    end(): ReturnHtmlElementTypeScript
}

export const script = (): Script => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeScript> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Script, ReturnHtmlElementTypeScript>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Script>(childrenList)
   
    function end() {
        return "<script" + attributesToString<ReturnHtmlElementTypeScript>(attributesList) + ">" + childrenList + "</script>" as unknown as ReturnHtmlElementTypeScript;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeSearch = HTMLElementTagNameMap["search"]

interface Search {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeSearch>): Search
    children(htmlElements: Array<string | number | HTMLType>): Search
    end(): ReturnHtmlElementTypeSearch
}

export const search = (): Search => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeSearch> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Search, ReturnHtmlElementTypeSearch>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Search>(childrenList)
   
    function end() {
        return "<search" + attributesToString<ReturnHtmlElementTypeSearch>(attributesList) + ">" + childrenList + "</search>" as unknown as ReturnHtmlElementTypeSearch;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeSection = HTMLElementTagNameMap["section"]

interface Section {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeSection>): Section
    children(htmlElements: Array<string | number | HTMLType>): Section
    end(): ReturnHtmlElementTypeSection
}

export const section = (): Section => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeSection> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Section, ReturnHtmlElementTypeSection>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Section>(childrenList)
   
    function end() {
        return "<section" + attributesToString<ReturnHtmlElementTypeSection>(attributesList) + ">" + childrenList + "</section>" as unknown as ReturnHtmlElementTypeSection;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeSelect = HTMLElementTagNameMap["select"]

interface Select {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeSelect>): Select
    children(htmlElements: Array<string | number | HTMLType>): Select
    end(): ReturnHtmlElementTypeSelect
}

export const select = (): Select => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeSelect> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Select, ReturnHtmlElementTypeSelect>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Select>(childrenList)
   
    function end() {
        return "<select" + attributesToString<ReturnHtmlElementTypeSelect>(attributesList) + ">" + childrenList + "</select>" as unknown as ReturnHtmlElementTypeSelect;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeSlot = HTMLElementTagNameMap["slot"]

interface Slot {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeSlot>): Slot
    children(htmlElements: Array<string | number | HTMLType>): Slot
    end(): ReturnHtmlElementTypeSlot
}

export const slot = (): Slot => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeSlot> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Slot, ReturnHtmlElementTypeSlot>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Slot>(childrenList)
   
    function end() {
        return "<slot" + attributesToString<ReturnHtmlElementTypeSlot>(attributesList) + ">" + childrenList + "</slot>" as unknown as ReturnHtmlElementTypeSlot;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeSmall = HTMLElementTagNameMap["small"]

interface Small {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeSmall>): Small
    children(htmlElements: Array<string | number | HTMLType>): Small
    end(): ReturnHtmlElementTypeSmall
}

export const small = (): Small => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeSmall> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Small, ReturnHtmlElementTypeSmall>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Small>(childrenList)
   
    function end() {
        return "<small" + attributesToString<ReturnHtmlElementTypeSmall>(attributesList) + ">" + childrenList + "</small>" as unknown as ReturnHtmlElementTypeSmall;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeSource = HTMLElementTagNameMap["source"]

interface Source {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeSource>): Source
    children(htmlElements: Array<string | number | HTMLType>): Source
    end(): ReturnHtmlElementTypeSource
}

export const source = (): Source => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeSource> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Source, ReturnHtmlElementTypeSource>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Source>(childrenList)
   
    function end() {
        return "<source" + attributesToString<ReturnHtmlElementTypeSource>(attributesList) + ">" + childrenList + "</source>" as unknown as ReturnHtmlElementTypeSource;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeSpan = HTMLElementTagNameMap["span"]

interface Span {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeSpan>): Span
    children(htmlElements: Array<string | number | HTMLType>): Span
    end(): ReturnHtmlElementTypeSpan
}

export const span = (): Span => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeSpan> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Span, ReturnHtmlElementTypeSpan>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Span>(childrenList)
   
    function end() {
        return "<span" + attributesToString<ReturnHtmlElementTypeSpan>(attributesList) + ">" + childrenList + "</span>" as unknown as ReturnHtmlElementTypeSpan;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeStrong = HTMLElementTagNameMap["strong"]

interface Strong {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeStrong>): Strong
    children(htmlElements: Array<string | number | HTMLType>): Strong
    end(): ReturnHtmlElementTypeStrong
}

export const strong = (): Strong => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeStrong> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Strong, ReturnHtmlElementTypeStrong>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Strong>(childrenList)
   
    function end() {
        return "<strong" + attributesToString<ReturnHtmlElementTypeStrong>(attributesList) + ">" + childrenList + "</strong>" as unknown as ReturnHtmlElementTypeStrong;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeStyle = HTMLElementTagNameMap["style"]

interface Style {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeStyle>): Style
    children(htmlElements: Array<string | number | HTMLType>): Style
    end(): ReturnHtmlElementTypeStyle
}

export const style = (): Style => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeStyle> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Style, ReturnHtmlElementTypeStyle>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Style>(childrenList)
   
    function end() {
        return "<style" + attributesToString<ReturnHtmlElementTypeStyle>(attributesList) + ">" + childrenList + "</style>" as unknown as ReturnHtmlElementTypeStyle;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeSub = HTMLElementTagNameMap["sub"]

interface Sub {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeSub>): Sub
    children(htmlElements: Array<string | number | HTMLType>): Sub
    end(): ReturnHtmlElementTypeSub
}

export const sub = (): Sub => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeSub> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Sub, ReturnHtmlElementTypeSub>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Sub>(childrenList)
   
    function end() {
        return "<sub" + attributesToString<ReturnHtmlElementTypeSub>(attributesList) + ">" + childrenList + "</sub>" as unknown as ReturnHtmlElementTypeSub;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeSummary = HTMLElementTagNameMap["summary"]

interface Summary {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeSummary>): Summary
    children(htmlElements: Array<string | number | HTMLType>): Summary
    end(): ReturnHtmlElementTypeSummary
}

export const summary = (): Summary => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeSummary> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Summary, ReturnHtmlElementTypeSummary>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Summary>(childrenList)
   
    function end() {
        return "<summary" + attributesToString<ReturnHtmlElementTypeSummary>(attributesList) + ">" + childrenList + "</summary>" as unknown as ReturnHtmlElementTypeSummary;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeSup = HTMLElementTagNameMap["sup"]

interface Sup {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeSup>): Sup
    children(htmlElements: Array<string | number | HTMLType>): Sup
    end(): ReturnHtmlElementTypeSup
}

export const sup = (): Sup => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeSup> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Sup, ReturnHtmlElementTypeSup>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Sup>(childrenList)
   
    function end() {
        return "<sup" + attributesToString<ReturnHtmlElementTypeSup>(attributesList) + ">" + childrenList + "</sup>" as unknown as ReturnHtmlElementTypeSup;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeTable = HTMLElementTagNameMap["table"]

interface Table {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeTable>): Table
    children(htmlElements: Array<string | number | HTMLType>): Table
    end(): ReturnHtmlElementTypeTable
}

export const table = (): Table => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeTable> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Table, ReturnHtmlElementTypeTable>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Table>(childrenList)
   
    function end() {
        return "<table" + attributesToString<ReturnHtmlElementTypeTable>(attributesList) + ">" + childrenList + "</table>" as unknown as ReturnHtmlElementTypeTable;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeTbody = HTMLElementTagNameMap["tbody"]

interface Tbody {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeTbody>): Tbody
    children(htmlElements: Array<string | number | HTMLType>): Tbody
    end(): ReturnHtmlElementTypeTbody
}

export const tbody = (): Tbody => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeTbody> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Tbody, ReturnHtmlElementTypeTbody>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Tbody>(childrenList)
   
    function end() {
        return "<tbody" + attributesToString<ReturnHtmlElementTypeTbody>(attributesList) + ">" + childrenList + "</tbody>" as unknown as ReturnHtmlElementTypeTbody;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeTd = HTMLElementTagNameMap["td"]

interface Td {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeTd>): Td
    children(htmlElements: Array<string | number | HTMLType>): Td
    end(): ReturnHtmlElementTypeTd
}

export const td = (): Td => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeTd> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Td, ReturnHtmlElementTypeTd>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Td>(childrenList)
   
    function end() {
        return "<td" + attributesToString<ReturnHtmlElementTypeTd>(attributesList) + ">" + childrenList + "</td>" as unknown as ReturnHtmlElementTypeTd;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeTemplate = HTMLElementTagNameMap["template"]

interface Template {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeTemplate>): Template
    children(htmlElements: Array<string | number | HTMLType>): Template
    end(): ReturnHtmlElementTypeTemplate
}

export const template = (): Template => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeTemplate> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Template, ReturnHtmlElementTypeTemplate>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Template>(childrenList)
   
    function end() {
        return "<template" + attributesToString<ReturnHtmlElementTypeTemplate>(attributesList) + ">" + childrenList + "</template>" as unknown as ReturnHtmlElementTypeTemplate;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeTextarea = HTMLElementTagNameMap["textarea"]

interface Textarea {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeTextarea>): Textarea
    children(htmlElements: Array<string | number | HTMLType>): Textarea
    end(): ReturnHtmlElementTypeTextarea
}

export const textarea = (): Textarea => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeTextarea> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Textarea, ReturnHtmlElementTypeTextarea>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Textarea>(childrenList)
   
    function end() {
        return "<textarea" + attributesToString<ReturnHtmlElementTypeTextarea>(attributesList) + ">" + childrenList + "</textarea>" as unknown as ReturnHtmlElementTypeTextarea;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeTfoot = HTMLElementTagNameMap["tfoot"]

interface Tfoot {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeTfoot>): Tfoot
    children(htmlElements: Array<string | number | HTMLType>): Tfoot
    end(): ReturnHtmlElementTypeTfoot
}

export const tfoot = (): Tfoot => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeTfoot> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Tfoot, ReturnHtmlElementTypeTfoot>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Tfoot>(childrenList)
   
    function end() {
        return "<tfoot" + attributesToString<ReturnHtmlElementTypeTfoot>(attributesList) + ">" + childrenList + "</tfoot>" as unknown as ReturnHtmlElementTypeTfoot;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeTh = HTMLElementTagNameMap["th"]

interface Th {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeTh>): Th
    children(htmlElements: Array<string | number | HTMLType>): Th
    end(): ReturnHtmlElementTypeTh
}

export const th = (): Th => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeTh> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Th, ReturnHtmlElementTypeTh>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Th>(childrenList)
   
    function end() {
        return "<th" + attributesToString<ReturnHtmlElementTypeTh>(attributesList) + ">" + childrenList + "</th>" as unknown as ReturnHtmlElementTypeTh;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeThead = HTMLElementTagNameMap["thead"]

interface Thead {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeThead>): Thead
    children(htmlElements: Array<string | number | HTMLType>): Thead
    end(): ReturnHtmlElementTypeThead
}

export const thead = (): Thead => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeThead> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Thead, ReturnHtmlElementTypeThead>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Thead>(childrenList)
   
    function end() {
        return "<thead" + attributesToString<ReturnHtmlElementTypeThead>(attributesList) + ">" + childrenList + "</thead>" as unknown as ReturnHtmlElementTypeThead;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeTime = HTMLElementTagNameMap["time"]

interface Time {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeTime>): Time
    children(htmlElements: Array<string | number | HTMLType>): Time
    end(): ReturnHtmlElementTypeTime
}

export const time = (): Time => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeTime> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Time, ReturnHtmlElementTypeTime>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Time>(childrenList)
   
    function end() {
        return "<time" + attributesToString<ReturnHtmlElementTypeTime>(attributesList) + ">" + childrenList + "</time>" as unknown as ReturnHtmlElementTypeTime;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeTitle = HTMLElementTagNameMap["title"]

interface Title {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeTitle>): Title
    children(htmlElements: Array<string | number | HTMLType>): Title
    end(): ReturnHtmlElementTypeTitle
}

export const title = (): Title => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeTitle> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Title, ReturnHtmlElementTypeTitle>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Title>(childrenList)
   
    function end() {
        return "<title" + attributesToString<ReturnHtmlElementTypeTitle>(attributesList) + ">" + childrenList + "</title>" as unknown as ReturnHtmlElementTypeTitle;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeTr = HTMLElementTagNameMap["tr"]

interface Tr {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeTr>): Tr
    children(htmlElements: Array<string | number | HTMLType>): Tr
    end(): ReturnHtmlElementTypeTr
}

export const tr = (): Tr => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeTr> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Tr, ReturnHtmlElementTypeTr>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Tr>(childrenList)
   
    function end() {
        return "<tr" + attributesToString<ReturnHtmlElementTypeTr>(attributesList) + ">" + childrenList + "</tr>" as unknown as ReturnHtmlElementTypeTr;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeTrack = HTMLElementTagNameMap["track"]

interface Track {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeTrack>): Track
    children(htmlElements: Array<string | number | HTMLType>): Track
    end(): ReturnHtmlElementTypeTrack
}

export const track = (): Track => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeTrack> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Track, ReturnHtmlElementTypeTrack>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Track>(childrenList)
   
    function end() {
        return "<track" + attributesToString<ReturnHtmlElementTypeTrack>(attributesList) + ">" + childrenList + "</track>" as unknown as ReturnHtmlElementTypeTrack;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeU = HTMLElementTagNameMap["u"]

interface U {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeU>): U
    children(htmlElements: Array<string | number | HTMLType>): U
    end(): ReturnHtmlElementTypeU
}

export const u = (): U => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeU> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<U, ReturnHtmlElementTypeU>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<U>(childrenList)
   
    function end() {
        return "<u" + attributesToString<ReturnHtmlElementTypeU>(attributesList) + ">" + childrenList + "</u>" as unknown as ReturnHtmlElementTypeU;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeUl = HTMLElementTagNameMap["ul"]

interface Ul {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeUl>): Ul
    children(htmlElements: Array<string | number | HTMLType>): Ul
    end(): ReturnHtmlElementTypeUl
}

export const ul = (): Ul => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeUl> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Ul, ReturnHtmlElementTypeUl>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Ul>(childrenList)
   
    function end() {
        return "<ul" + attributesToString<ReturnHtmlElementTypeUl>(attributesList) + ">" + childrenList + "</ul>" as unknown as ReturnHtmlElementTypeUl;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeVideo = HTMLElementTagNameMap["video"]

interface Video {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeVideo>): Video
    children(htmlElements: Array<string | number | HTMLType>): Video
    end(): ReturnHtmlElementTypeVideo
}

export const video = (): Video => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeVideo> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Video, ReturnHtmlElementTypeVideo>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Video>(childrenList)
   
    function end() {
        return "<video" + attributesToString<ReturnHtmlElementTypeVideo>(attributesList) + ">" + childrenList + "</video>" as unknown as ReturnHtmlElementTypeVideo;
    }

    return {
        attributes,
        children,
        end,
    };
}

type ReturnHtmlElementTypeWbr = HTMLElementTagNameMap["wbr"]

interface Wbr {
    attributes(attrs: RecursivePartial<ReturnHtmlElementTypeWbr>): Wbr
    children(htmlElements: Array<string | number | HTMLType>): Wbr
    end(): ReturnHtmlElementTypeWbr
}

export const wbr = (): Wbr => {
    const attributesList: RecursivePartial<ReturnHtmlElementTypeWbr> = {}
    attributesList.toString = attributesListToString
    const attributes = generateFunctionAttributes<Wbr, ReturnHtmlElementTypeWbr>(attributesList)

    const childrenList: Array<string | number | HTMLType> = []
    childrenList.toString = childrenListToString
    const children = generateFunctionChildren<Wbr>(childrenList)
   
    function end() {
        return "<wbr" + attributesToString<ReturnHtmlElementTypeWbr>(attributesList) + ">" + childrenList + "</wbr>" as unknown as ReturnHtmlElementTypeWbr;
    }

    return {
        attributes,
        children,
        end,
    };
}
