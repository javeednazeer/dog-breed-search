import { cleanup } from "@testing-library/react";
import { debounce } from "../../util/util";

afterEach(cleanup);

describe('describe util', () => {
    const callback = jest.fn();
    jest.useFakeTimers();

    beforeEach(() => {
        callback.mockReset();
    });

    it('should call debounce until', () => {
        const debouncedCallback = debounce(callback);
        for (let i = 0; i < 100; i++) {
            debouncedCallback();
        }
        expect(callback).not.toHaveBeenCalled();
        jest.runAllTimers();
        expect(callback).toBeCalledTimes(1);
    });

});