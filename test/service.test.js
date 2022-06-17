const service = require("../services/user.service");
const valuesUtils = require("./values");

for (const itemTest of valuesUtils.Values) {
  describe(`Login User - ${itemTest.typeTest}`, () => {
    it(`${itemTest.message}`, async () => {
      try {
        const response = await service.obtainFullName(
          itemTest.username,
          itemTest.password
        );
        if (itemTest.orderTest == 1) {
          expect(response).not.toBeNull();
          //
          expect(response).toHaveProperty("name");
          //
          expect(response.name).not.toBeNull();
          expect(typeof response.name).toBe("string");
        }
      } catch (error) {
        if (itemTest.orderTest == 2) {
          expect(error).not.toBeNull();

          expect(error.message).not.toBeNull();
          expect(typeof error.message).toBe("string");
          expect(error.message).toBe(`${itemTest.message_expect}`);
        }
      }
    });
  });
}
