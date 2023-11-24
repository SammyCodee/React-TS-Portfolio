type satisfiesType = {
    isComplete: boolean;
    title: string;
    dueDate: string | Date
}

const testSatisfies = {
    isComplete: true,
    title: 'ssss',
    dueDate: new Date()
} satisfies satisfiesType

testSatisfies.dueDate.setDate(4)

/**
 * satisfies indicates that specific information must meet the declared type's minimum requirements
 * in this case, the dueDate has specific information that follows the specific type
 */