it("should load only used exports", async (done) => {
	const { default: def, usedExports } = await import("./dir1/a");
	expect(def).toBe(3);
	expect(usedExports).toEqual(["default", "usedExports"]);
	done();
});

it("should get warning on using 'webpackExports' with destructuring assignment", async (done) => {
	const { default: def } = await import(/* webpackExports: ["a"] */"./dir1/a?2");
	expect(def).toBe(3);
	done();
});

it("should support importing objects from JSON files", async () => {
	const { default: json } = await import("./dir1/object.json");
	expect(json).toBe({ a: 1 });
});

it("should support importing arrays from JSON files", async () => {
	const { default: json } = await import("./dir1/array.json");
	expect(json).toBe(["a"]);
});

it("should support importing primitives from JSON files", async () => {
	const { default: json } = await import("./dir1/primitive.json");
	expect(json).toBe("a");
});
