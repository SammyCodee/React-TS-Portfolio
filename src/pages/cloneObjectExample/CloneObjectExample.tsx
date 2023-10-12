const CloneObjectExample = () => {
    /**
     *  reference: https://reactgo.com/javascript-clone-object/
     */
    const obj = {
        a: 1,
        b: 2,
        c: {
            d: 1,
        },
    };

    /**
     * Shallow Copy
     */
    const shallowClone_objectAssign = Object.assign({}, obj);
    const shallowClone_spreadOperator = { ...obj };
    /**
     * Deep Copy
     */
    const deepClone_JSON = JSON.parse(JSON.stringify(obj));
    obj.c.d = 200;

    console.log("obj:", obj); // {a:1,b:2,c:{d:200}}
    console.log("shallowClone_spreadOperator", shallowClone_spreadOperator); // {a:1,b:2,c:{d:200}}
    console.log("shallowClone_objectAssign", shallowClone_objectAssign); // {a:1,b:2,c:{d:200}}
    console.log("deepClone_JSON: ", deepClone_JSON); // {a:1,b:2,c:{d:1}}

    return (
        <div>
            <h1>Clone Object Example</h1>
        </div>
    );
};

export default CloneObjectExample;
