import { getAllDogBreeds } from "./Api";
import axios from "axios";

jest.mock("axios");
const dummyResp = [{
        bred_for: "Coursing and hunting",
        breed_group: "Hound",
        country_code: "AG",
        height: { imperial: '25 - 27', metric: '64 - 69' },
        id: 2,
        life_span: "10 - 13 years",
        name: "Afghan Hound",
        origin: "Afghanistan, Iran, Pakistan",
        reference_image_id: "hMyT4CDXR",
        temperament: "Aloof, Clownish, Dignified, Independent, Happy",
        weight: { imperial: '50 - 60', metric: '23 - 27' }
}];

test('test', async () => {
    expect.assertions(1);
    axios.get = jest.fn().mockResolvedValue(dummyResp);
    await expect(getAllDogBreeds('afghan')).resolves.toEqual(dummyResp);
});


