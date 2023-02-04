beforeAll(async () => {
    console.log("im logging in before all of those functions executed")
})

afterAll(async () => {
    console.log("im logging in after all of those functions executed")
})

const helloName = (name) => {
    return `Hello ${name}`
}

describe("Our very first test", () => {
    it("First taste case", async () => {
        const a = 2;
        const b = "4";
        const c = 6;
        console.log("Im the logging of first case")
        const result = a + b + c;
        expect(result).toBe("246")
    })

    it("Second taste case", async () => {
        const result = helloName("Amaraa")
        expect(result).toBe("Hello Amaraa")
    })

    it("Third taste case", async () => {
        const result = helloName("Amaraa")
        expect(result).toBe("Hello World")
    })
})