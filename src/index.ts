//1 Напишіть узагальнену функцію filterArray(array, condition), яка фільтрує масив елементів на основі наданої умови.

const arrayFilter = <T>(arr: T[], condition: (el: T) => boolean): T[] => {
    return arr.filter(condition);
}

const filteredArray = arrayFilter<any>(
    [1, 2, '5', 10, '25', 42, {}, [], true],
    Number.isInteger
)

console.log(filteredArray)

//2 Створіть узагальнений клас Stack, який являє собою стек елементів з методами push, pop і peek.

type TAnything = any
class Stack<TAny extends TAnything> {
    storage: TAny[] = [] as TAny[]

    push(value: any): number {
        this.storage.push(value)
        return this.storage.length
    }

    pop(): any {
        return this.storage.length >= 1 ? this.storage.pop() : 'empty stack'
    }

    peek(): any {
        return this.storage.length >= 1 ? this.storage[this.storage.length - 1] : 'empty stack'
    }
}

const store = new Stack()

store.push(5)
store.push('lol')
store.pop()
store.peek()

console.log(store.storage)

//3 Створіть узагальнений клас Dictionary, який являє собою словник (асоціативний масив) з методами set, get і has. Обмежте ключі тільки валідними типами для об'єкта


type TProperty = string | number
interface IVocabulary {
    [key: string | number]: any
}

class Dictionary <Tglossary extends IVocabulary, TProp extends TProperty> {
    vocabulary: Tglossary = {} as Tglossary

    getValue(prop: TProp): any {
        return this.vocabulary[prop]
    }

    setValue(prop: TProp, value: any): number {
        this.vocabulary[prop] = value
        return this.vocabulary.length
    }

    hasValue(prop: TProp): boolean {
        return typeof this.vocabulary[prop] !== "undefined"
    }
}

const glossary = new Dictionary()

glossary.setValue(42, 'lock')
console.log(glossary.getValue(42))
console.log(glossary.hasValue(42)) //true

console.log(glossary.getValue(25))
console.log(glossary.hasValue(25)) //false

glossary.setValue('und', undefined)
console.log(glossary.hasValue('und')) //false

console.log(glossary.setValue('lol', null))
console.log(glossary.hasValue('lol')) //true