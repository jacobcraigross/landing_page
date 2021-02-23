import {multiply, makeLowerCase} from './helperFunctions';

test("multiply", () => {
    expect(multiply(2, 10)).toBe(20);
});

test("makeLowerCase", () => {
    expect(makeLowerCase("JAKEROSS")).toBe("jakeross");
    expect(makeLowerCase("jake ROSS times TEN")).toBe("jake ross times ten");
});
