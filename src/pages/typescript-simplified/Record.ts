type chicken = {
    size: string;
    isHen: boolean
}

type ChickenGroupBySize = Record<chicken["size"], chicken[]>