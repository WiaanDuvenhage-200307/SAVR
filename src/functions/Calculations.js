export const countTogether = (j) => {
    let total = null;

        for( let i = 0; i < j.length; i++){
            total += +j[i];
        }

    return +total;

}
