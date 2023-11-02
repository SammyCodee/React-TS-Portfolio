const isString = (input: unknown): input is string => {
    return typeof input === "string";
};

const isNumber = (input: unknown): input is number => {
    return typeof input === "number";
};

const mixedArray = [2, "hey", []];

const isArray = Array.isArray(mixedArray);

let arrayOnly;
if (isArray) {
    arrayOnly = mixedArray.filter((data) => data === typeof Array);
}

console.log("arrayOnly", arrayOnly);
/**
 * stringOnly now is string[] because of type predicate
 */
const stringOnly = mixedArray.filter((data) => isString(data));

console.log("stringOnly", stringOnly);

const numberOnly = mixedArray.filter((data) => isNumber(data));

console.log("numberOnly", numberOnly);
const IsKeyword = () => {
    return (
        <>
            <div>{stringOnly}</div> <div>{numberOnly}</div>
        </>
    );
};

export default IsKeyword;
