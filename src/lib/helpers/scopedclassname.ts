export default function (prefix: string) {
    return function (name?: string) {
        return [prefix, name].filter(Boolean).join('-')
    }
}