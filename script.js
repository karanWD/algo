const app = document.querySelector("#app")
const testArray = [0, 2, 3, 5, 6, 9, 10, 23, 26, 40, 50, 53, 57, 59]
const testSortArray = [23, 26, 0, 3, 6, 2, 53, 57, 5, 9, 10, 50, 59, 40]
const testText = "FrontEndBootCamp"

//reverse string
const reverse = (text) => {
    let newString = ""
    for (let i = text.length - 1; i >= 0; i--) {
        newString += text[i]
    }
    return newString
}
console.log("reverser : ", reverse(testText))

//repeat string
const repeater = (text, times) => {
    let result = ""
    for (let i = 0; i < times; i++) {
        result += text
    }
    return result
}
console.log("repeater : ", repeater("hi", 3))

//factorialize
const facto = (number) => {
    let result = 1
    for (let i = number; i > 0; i--) {
        result = result * i
    }
    return result
}
console.log("for factorial : ", facto(5))

const recursiveFacto = (number) => {
    let result = 1
    const facto = (num) => {
        if (num < 1) {
            return
        }
        result = result * num
        facto(num - 1)
    }
    facto(number)
    return result
}
console.log("recursive factorial : ", recursiveFacto(5))

// Find Even Numbers with recursive functions
const evenArray = (arr) => {
    let result = []
    const recursiveHandler = (arr) => {
        if (arr.length === 0) return
        else if (arr[0] % 2 === 0) {
            result.push(arr[0])
        }
        recursiveHandler(arr.slice(1))
    }
    recursiveHandler(arr);
    return result;
}
console.log("evenArray : ", evenArray(testArray))

// linear search
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return ("nothing found ...")
}
console.log("linearSearch : ", linearSearch(testArray, 60))



//split
const split = (text, separator) => {
    let result = []
    let tempText = ""
    for (let i = 0; i < text.length; i++) {
        console.log(result,tempText)
        if (text[i] === separator) {
            result.push(tempText)
            tempText = ""
        } else {
            tempText += text[i]
        }
    }
    result.push(tempText)
    return result
}
console.log("split : ", split("1-2-33-4-5-aaaa-v", "-"))

//bubbleSort
const bubbleSort = (arr) => {
    let len = arr.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                // let tmp = arr[i];
                // arr[i] = arr[i + 1];
                // arr[i + 1] = tmp;
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                checked = true;
            }
        }
    } while (checked);
    return arr;
}
console.log("BubbleSort : ", bubbleSort(testSortArray))



