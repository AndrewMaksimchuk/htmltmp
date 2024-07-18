export const base = `
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
            return attrName === 'style' ? result + ' ' + attrName + '="' + styleDeclarationToString(attrValue as CSSStyleDeclaration /* FIXME infer correct type*/)  + '"' : result + ' ' + attrName + '="' + attrValue + '"';
        }, '');
}
`
