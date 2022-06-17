export function countTogether(numbers){
    let sum = 0;

    for( let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    return sum;

}

export function average(numbers){
    let sum = 0;

    for( let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    return sum/numbers.length;
}

export function percentage(numbers){
    let sum = 0;

    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    return sum/100*numbers.length;
}

