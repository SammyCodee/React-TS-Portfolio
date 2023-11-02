/**
 * Record utility type
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
 */

interface catInfo {
    age: number;
    breed: string;
}

type catName = "miffy" | "oren" | "boris"

const cats: Record<catName, catInfo> = {
    miffy: {
        age: 1,
        breed: "british short"
    },
    oren: {
        age: 1,
        breed: "long fur"
    },
    boris: {
        age: 1,
        breed: "Maine Coon"
    }
}

type newCatName = "tiffy"

type allCatTypes = catName | newCatName

const otherCat: Record<newCatName, catInfo> = {
    tiffy: {
        age: 2,
        breed: "Persian"
    }
}

export const allCats: Record<allCatTypes, catInfo> = {
    ...cats,
    ...otherCat
}


