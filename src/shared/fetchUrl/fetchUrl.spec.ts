import chai from "chai";
import fetchUrl from "./fetchUrl";
import sinon from "sinon";
import assert from "assert";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);
const expect = chai.expect;

declare global {
  namespace NodeJS {
    interface Global {
      fetch: any;
    }
  }
}
describe("Testing FetchUrl - Wrapper over fetch", () => {
  const res = [
    {
      id: "1",
      name: "Abc",
    },
  ];
  it("should perform basic fetch functions", () => {
    const mockFetch = sinon.fake.resolves({
      ok: true,
      json: () => res,
    });
    // Inject mock fetch into global
    global.fetch = mockFetch;
    fetchUrl("/api/v1/someUrl");
    assert(mockFetch.calledWith("/api/v1/someUrl"));
    assert(mockFetch.calledOnce, "Fn was called once");
    delete global.fetch;
  });
  it("should resolve with data for valid request", async () => {
    const mockFetch = sinon.fake.resolves({
      ok: true,
      json: () => res,
    });
    // Inject mock fetch into global
    global.fetch = mockFetch;
    await expect(fetchUrl("/api/v1/someUrl")).to.eventually.equal(res);
    delete global.fetch;
  });
  it(`should reject with data for fetch status returns ok false`, async () => {
    const mockFetch = sinon.fake.resolves({
      ok: false,
      json: () => res,
    });
    // Inject mock fetch into global
    global.fetch = mockFetch;
    await expect(fetchUrl("/api/v1/someUrl")).to.be.rejected;
    delete global.fetch;
  });
});
