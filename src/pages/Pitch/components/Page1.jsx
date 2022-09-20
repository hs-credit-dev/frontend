import { useState } from 'react';
import Input from './../../../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

import disciplines from '../../../data/disciplines';
import Button from './../../../components/Button';

const Page1 = ({ pageState, credit }) => {
    const rubrics = disciplines[credit.discipline].rubrics;
    const [rubric, setRubric] = useState(Object.keys(rubrics)[0]);
    const [page, setPage] = pageState;

    return (
        <>
            <p>
                Work with your teacher to define the project ahead and upload a PDF that details your assignment. We recommend planning for three cycles of revision with feedback so that your final product is polished. We will ask you a few basic questions on the next page to help ensure the work you have planned is aligned to the rubric you selected.
            </p>
            <Input
                name="discipline"
                type="select"
                label={
                    <>
                        <p>Select Rubric</p>
                        <FontAwesomeIcon
                            icon={faQuestionCircle}
                            className="cursor-pointer"
                        />
                    </>}
                value={rubric}
                onChange={(e) => {
                    setRubric(e.target.value);
                }}
                className="w-64"
            >
                {Object.entries(rubrics).map(([key, value], i) => <option key={i}>{key}</option>)}
            </Input>

            <Input
                name="upload"
                type="file"
                label={
                    <>
                        <p>Task</p>
                        <FontAwesomeIcon
                            icon={faQuestionCircle}
                            className="cursor-pointer"
                        />
                    </>}
                small="Please make sure your attachment doesn't exceed 25 MB."
                value={null}
                onChange={(e) => {

                }}
                className="w-64 mt-8"
            >
                Click here to upload
            </Input>

            <Button onClick={() => { setPage(page + 1) }} className="mt-24">Next</Button>
        </>
    );
};

export default Page1;