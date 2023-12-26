//1 Напишіть узагальнену функцію filterArray(array, condition), яка фільтрує масив елементів на основі наданої умови.

const arrayFilter = <TArr, TCondition> (arr: any[], condition: TCondition): TArr[] => {
    return arr.filter(el => condition(el))
}

const filteredArray = arrayFilter<number, Function>([1, '2', 5, true, 10, {}, 25, [], 42], Number.isInteger)
console.log(filteredArray)

//2 Створіть узагальнений клас Stack, який являє собою стек елементів з методами push, pop і peek.

type TAnithyng = any

class Stack<TAny extends TAnithyng> {
    storage: any[] = []

    push(value: TAny): number {
        this.storage.push(value)
        return this.storage.length
    }

    pop(): TAny {
        return this.storage.length >= 1 ? this.storage.pop() : 'empty stack'
    }

    peek(): TAny {
        return this.storage.length >= 1 ? this.storage[this.storage.length - 1] : 'empty stack'
        // return this.storage[this.storage.length - 1]
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
    // vocabulary: {[key: string | number]: any} = {}
    // vocabulary: IVocabulary = {}
    vocabulary: Tglossary = {}

    getValue(prop: TProp): any {
        return this.vocabulary[prop]
    }

    setValue(prop: TProp, value: any): number {
        this.vocabulary[prop] = value
        return this.vocabulary.length
    }

    hasValue(prop: TProp): boolean {
        return typeof this.vocabulary[prop] === "undefined" ? false : true
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