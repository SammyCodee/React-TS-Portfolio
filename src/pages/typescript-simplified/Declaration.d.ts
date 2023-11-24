declare module "lodash" {
    function times(num: number): number[]
}

/**
 * Manually/Specifically add the type yourself for the library and built-in type
 * Only types in the xxx.d.ts file
 * Automatically infer and import everywhere, no need to manually import it
 * Use case: when you add a library and the type is not exist
 */