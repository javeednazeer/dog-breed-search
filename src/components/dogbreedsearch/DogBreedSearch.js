import { useRef, useState } from "react";
import { getAllDogBreeds, getImageById } from "../../api/Api";
import { debounce, sort } from "../../util/util";
import BreedResults from "../BreedResults";
import "./DogBreedSearch.css";

const DogBreedSearch = () => {
    const [puppies, setPuppies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const searchRef = useRef(null);

    const getSortedPuppies = (e) => {
        setPuppies(sort(e, puppies));
    }

    const getBreedsByQuery = async () => {
        let query = searchRef.current.value;
        getAllDogBreeds(query).then((resp) => {
            let myPuppies = [];
            if (resp.data.length > 0) {
                resp.data.forEach((element) => {
                    if (undefined !== element.reference_image_id) {
                        getImageById(element.reference_image_id).then((imgRsp) => {
                            myPuppies.push({
                                url: imgRsp.data.url,
                                name: element.name,
                                lifeSpan: element.life_span,
                                height: element.height
                            });
                            setPuppies([...myPuppies], myPuppies);
                            setIsLoading(false)

                        }).catch((error) => {
                            console.error(error);
                        });
                    }
                });
            } else {
                setPuppies([]);
                setIsLoading(false);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div style={{ margin: '15px' }}>
            <h1>Dog Breed Search</h1>
            <input type="search" className="search" placeholder="Search Breeds..." ref={searchRef} size={100} onChange={debounce(() => getBreedsByQuery())} />
            {puppies.length > 0 ?
                <div style={{ padding: '15px' }}>
                    <label className="label-results">Results Found: {puppies.length}</label>
                    <label className="label-sort">Sort By</label>
                    <select onChange={getSortedPuppies} className="select">
                        <option>Name</option>
                        <option>Height - Imperial</option>
                        <option>Height - Metric</option>
                        <option>Life Span</option>
                    </select>
                </div> : ''}
            <BreedResults puppies={puppies} loading={isLoading} />
        </div>
    )
}

export default DogBreedSearch;